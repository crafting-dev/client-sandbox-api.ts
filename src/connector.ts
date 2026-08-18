import * as grpc from '@grpc/grpc-js';

import * as api from './api';
import {
    AuthToken,
    ENV_AUTH_TOKEN,
    ENV_AUTH_TOKEN_FILE,
    cliAuthToken,
    errorMessage,
    loginWithToken,
    loginWithTokenFile,
    needsRenew,
    renewToken,
} from './auth';
import {Configuration, resolveConfiguration} from './config';

/**
 * The options accepted by the constructor of a {@link Connector}.
 *
 * The names follow the fields of the protobuf API rather than the TypeScript
 * naming convention, so they stay identical across all languages of the SDK.
 */
type ConnectorOptions = {
    /**
     * The default server URL, for example `https://myorg.sandboxes.site`.
     *
     * This overrides the built-in default, but it is still overridden by the
     * environment variable `CRAFTING_SANDBOX_SERVER_URL` and by `server_url`
     * from the local config file.
     */
    server_url?: string;

    /**
     * If specified, use this login token to login as a service account.
     */
    login_token?: string;
};

/**
 * The org a {@link Connector} is bound to.
 */
type OrgInfo = {
    /**
     * The org ID.
     */
    id: string;

    /**
     * The org name.
     */
    name: string;
};

/**
 * The constructor of a generated gRPC service client.
 */
type ServiceClientConstructor<T extends grpc.Client> = new (
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: Partial<grpc.ClientOptions>,
) => T;

/**
 * The entry point of the Sandbox API.
 *
 * A Connector handles the configuration and the authentication, and provides
 * the context for gRPC API calls. All gRPC clients are created from it, and
 * they carry the authentication context without the caller having to specify
 * any metadata.
 *
 * ```typescript
 * const connector = new Connector("myorg");
 * const client = connector.managementServiceClient();
 * ```
 *
 * Resolving the authentication context and binding to an org both require
 * network calls, which cannot happen inside a TypeScript constructor. The
 * constructor starts that work, and a client created from the connector waits
 * for as much of it as the call needs, so a call issued right away is still
 * authenticated. What does need waiting is reading the outcome of the
 * construction phase: {@link Connector.org} is only set, and
 * {@link Connector.authenticated} only meaningful, once
 * {@link Connector.ready} resolved.
 *
 * ```typescript
 * const connector = new Connector("myorg");
 * await connector.ready();
 * connector.org!.id;
 * ```
 *
 * A connector constructed while no authentication information was available at
 * all ends up _unauthenticated_: creating a gRPC client from it fails, and so
 * does a call on a client created before that was known.
 */
class Connector {
    /**
     * The resolved configuration.
     */
    private readonly _config: Configuration;

    /**
     * The org name requested by the caller, if any.
     */
    private readonly _orgName?: string;

    /**
     * The options passed to the constructor.
     */
    private readonly _options: ConnectorOptions;

    /**
     * The current authentication context, `null` while unauthenticated.
     */
    private _auth: AuthToken | null = null;

    /**
     * The org this connector is bound to, `null` while unauthenticated.
     */
    private _org: OrgInfo | null = null;

    /**
     * Resolves once the construction phase completed, and rejects with the
     * error which failed it.
     */
    private readonly _ready: Promise<void>;

    /**
     * Resolves once the authentication context is resolved, to the context
     * itself, and rejects when a triggered login failed.
     *
     * This is what a call waits for, rather than the whole construction phase,
     * for two reasons: a call needs the authentication context but not the org,
     * and the construction phase itself makes a call to bind to the org, which
     * would deadlock waiting for the phase it is part of.
     */
    private _authGate: Promise<AuthToken | null>;

    /**
     * Set once the construction phase completed successfully.
     */
    private _initialized = false;

    /**
     * The in-flight token renewal, shared by all concurrent calls.
     */
    private _renewal: Promise<AuthToken> | null = null;

    /**
     * The gRPC clients created so far, so all the services of a connector
     * share a single connection to the server.
     */
    private readonly _clients = new Map<ServiceClientConstructor<never>, grpc.Client>();

    /**
     * Construct a Connector and start its construction phase, which resolves
     * the configuration, resolves the authentication context at best effort,
     * and binds to the org.
     *
     * The configuration is resolved synchronously, so an invalid server URL
     * throws here. The rest is completed by {@link Connector.ready}.
     *
     * @param org the org name. When omitted, the connector binds to the only
     *            org the authenticated identity is a member of, and fails if
     *            there is more than one.
     * @param options optional overrides of the defaults, see {@link ConnectorOptions}.
     */
    public constructor(org?: string, options?: ConnectorOptions) {
        this._orgName = org;
        this._options = options ?? {};
        this._config = resolveConfiguration(this._options);
        this._authGate = this.resolveAuth();
        this._ready = this.initialize();
        // The caller observes these failures through ready(), the properties,
        // the client factory methods or the calls themselves. Keep node from
        // reporting them as unhandled rejections in the meantime.
        this._authGate.catch(() => undefined);
        this._ready.catch(() => undefined);
    }

    /**
     * Wait for the construction phase to complete.
     *
     * It is safe to call this more than once, and from more than one place.
     *
     * @returns this connector, once it is usable.
     */
    public async ready(): Promise<Connector> {
        await this._ready;
        return this;
    }

    /**
     * Whether this connector has a valid authentication context.
     *
     * This is only meaningful after the construction phase completed, as
     * resolving the authentication context may require a network call.
     */
    public get authenticated(): boolean {
        return this._auth !== null;
    }

    /**
     * The org this connector is bound to, or `null` when the connector is
     * not authenticated.
     */
    public get org(): OrgInfo | null {
        return this._org;
    }

    /**
     * The URL of the server this connector talks to.
     */
    public get serverUrl(): string {
        return this._config.serverUrl;
    }

    /**
     * The local configuration folder this connector resolved.
     */
    public get configFolder(): string {
        return this._config.configFolder;
    }

    /**
     * Login as a service account with a login token, and replace the current
     * authentication context with the result. The org is resolved again after
     * the login.
     *
     * The gRPC clients already created from this connector pick up the new
     * authentication context on their next call.
     *
     * @param loginToken the login token of the service account.
     * @returns this connector.
     */
    public async login(loginToken: string): Promise<Connector> {
        // Wait for any in-flight construction phase, but a failed one must not
        // prevent an explicit login from fixing the authentication context.
        await this._ready.catch(() => undefined);
        this._auth = await loginWithToken(this._config.serverUrl, loginToken, 'login');
        // Replace the gate, which may have resolved to no context at all, or
        // have rejected with the failure of the login this one supersedes.
        this._authGate = Promise.resolve(this._auth);
        this._renewal = null;
        this._initialized = true;
        this._org = await this.resolveOrg();
        return this;
    }

    /**
     * Close all the gRPC clients created from this connector.
     *
     * A gRPC connection keeps the process alive, so a short-lived program
     * should close the connector when it is done.
     */
    public close(): void {
        for (const client of this._clients.values()) {
            client.close();
        }
        this._clients.clear();
    }

    /**
     * The client for `sandboxes.api.v1.InformationService`.
     */
    public informationServiceClient(): api.InformationServiceClient {
        return this.serviceClient(api.InformationServiceClient);
    }

    /**
     * The client for `sandboxes.api.v1.LLMService`.
     */
    public llmServiceClient(): api.LLMServiceClient {
        return this.serviceClient(api.LLMServiceClient);
    }

    /**
     * The client for `sandboxes.api.v1.ManagementService`.
     */
    public managementServiceClient(): api.ManagementServiceClient {
        return this.serviceClient(api.ManagementServiceClient);
    }

    /**
     * The client for `sandboxes.api.v1.SnapshotManagementService`.
     */
    public snapshotManagementServiceClient(): api.SnapshotManagementServiceClient {
        return this.serviceClient(api.SnapshotManagementServiceClient);
    }

    /**
     * The client for `sandboxes.api.v1.SystemAdminService`.
     */
    public systemAdminServiceClient(): api.SystemAdminServiceClient {
        return this.serviceClient(api.SystemAdminServiceClient);
    }

    /**
     * The client for `sandboxes.api.v1.TimeSeriesService`.
     */
    public timeSeriesServiceClient(): api.TimeSeriesServiceClient {
        return this.serviceClient(api.TimeSeriesServiceClient);
    }

    /**
     * The client for `sandboxes.api.v1.TrafficService`.
     */
    public trafficServiceClient(): api.TrafficServiceClient {
        return this.serviceClient(api.TrafficServiceClient);
    }

    /**
     * The client for `sandboxes.api.v1.WorkloadService`.
     */
    public workloadServiceClient(): api.WorkloadServiceClient {
        return this.serviceClient(api.WorkloadServiceClient);
    }

    /**
     * The client for `sandboxes.api.v1.WorkspaceService`.
     */
    public workspaceServiceClient(): api.WorkspaceServiceClient {
        return this.serviceClient(api.WorkspaceServiceClient);
    }

    /**
     * The construction phase: resolve the authentication context at best
     * effort and bind to the org when there is one.
     */
    private async initialize(): Promise<void> {
        try {
            this._auth = await this._authGate;
            if (this._auth !== null) {
                this._org = await this.resolveOrg();
            }
        } catch (err) {
            // Do not leave the connection which was used to bind to the org
            // behind: the caller has no reason to close a connector whose
            // construction phase failed.
            this.close();
            throw err;
        }
        this._initialized = true;
    }

    /**
     * Resolve the authentication context at best effort.
     *
     * The sources are tried in the order documented for the library. The first
     * one which has the information available decides the outcome: if its login
     * procedure fails, the whole construction fails rather than falling through
     * to the remaining sources.
     *
     * @returns the {@link AuthToken}, or `null` when no authentication
     *          information is available at all.
     */
    private async resolveAuth(): Promise<AuthToken | null> {
        const serverUrl = this._config.serverUrl;

        if (this._options.login_token) {
            return loginWithToken(serverUrl, this._options.login_token, 'options');
        }

        const envToken = process.env[ENV_AUTH_TOKEN];
        if (envToken) {
            return loginWithToken(serverUrl, envToken, 'env');
        }

        const envTokenFile = process.env[ENV_AUTH_TOKEN_FILE];
        if (envTokenFile) {
            return loginWithTokenFile(serverUrl, envTokenFile, 'env-file');
        }

        return cliAuthToken(this._config.configFolder, serverUrl) ?? null;
    }

    /**
     * Bind to the org by listing the orgs of the authenticated identity.
     *
     * @returns the {@link OrgInfo} of the org this connector is bound to.
     */
    private async resolveOrg(): Promise<OrgInfo> {
        const request = new api.ListOrgsRequest();
        if (this._orgName !== undefined) {
            request.addFilterByNames(this._orgName);
        }

        const client = this.client(api.ManagementServiceClient);
        const response = await new Promise<api.ListOrgsResponse>((resolve, reject) => {
            client.listOrgs(request, (err, resp) => {
                if (err) {
                    reject(new Error(`unable to list orgs: ${err.message}`));
                    return;
                }
                resolve(resp);
            });
        });

        const orgs: OrgInfo[] = [];
        for (const withMembers of response.getOrgsList()) {
            const meta = withMembers.getOrg()?.getMeta();
            const name = meta?.getName();
            if (meta !== undefined && name) {
                orgs.push({id: meta.getId(), name});
            }
        }

        if (this._orgName !== undefined) {
            // The server may not honor filter_by_names, so match locally too.
            const org = orgs.find((candidate) => candidate.name === this._orgName);
            if (org === undefined) {
                throw new Error(`org ${JSON.stringify(this._orgName)} is not accessible`);
            }
            return org;
        }

        if (orgs.length === 0) {
            throw new Error('the current identity is not a member of any org');
        }
        if (orgs.length > 1) {
            const names = orgs.map((org) => org.name).join(', ');
            throw new Error(`the org name is required, the current identity is a member of: ${names}`);
        }
        return orgs[0];
    }

    /**
     * Retrieve the gRPC client of a service, for the end user.
     *
     * A client can be created before the construction phase completed, so the
     * connector is usable directly after its constructor. Whether the connector
     * turns out to be unauthenticated is only known once that phase completed:
     * before then, the failure surfaces on the call rather than here.
     *
     * @param ctor the constructor of the generated client.
     * @returns the client, with the authentication context of this connector.
     */
    private serviceClient<T extends grpc.Client>(ctor: ServiceClientConstructor<T>): T {
        if (this._initialized && this._auth === null) {
            throw new Error(
                'the connector is unauthenticated: no authentication information was found, ' +
                'login with connector.login(loginToken)');
        }
        return this.client(ctor);
    }

    /**
     * Retrieve the gRPC client of a service, creating it on first use.
     *
     * Unlike {@link Connector.serviceClient} this never refuses, because the
     * construction phase itself needs a client to resolve the org.
     *
     * @param ctor the constructor of the generated client.
     * @returns the client, with the authentication context of this connector.
     */
    private client<T extends grpc.Client>(ctor: ServiceClientConstructor<T>): T {
        const key = ctor as unknown as ServiceClientConstructor<never>;
        const existing = this._clients.get(key);
        if (existing !== undefined) {
            return existing as T;
        }
        const client = new ctor(this.grpcTarget(), this.channelCredentials(), {
            interceptors: [this.authInterceptor()],
        });
        this._clients.set(key, client);
        return client;
    }

    /**
     * The gRPC target of the server, as `host:port`.
     */
    private grpcTarget(): string {
        const url = new URL(this._config.serverUrl);
        const port = url.port || (url.protocol === 'https:' ? '443' : '80');
        return `${url.hostname}:${port}`;
    }

    /**
     * The channel credentials matching the scheme of the server URL.
     */
    private channelCredentials(): grpc.ChannelCredentials {
        return new URL(this._config.serverUrl).protocol === 'https:'
            ? grpc.credentials.createSsl()
            : grpc.credentials.createInsecure();
    }

    /**
     * An interceptor attaching the current authentication context to every
     * call, renewing the token first when it is about to expire.
     *
     * The token is read per call rather than captured, so a renewal or an
     * explicit login applies to the clients which already exist.
     */
    private authInterceptor(): grpc.Interceptor {
        return (options, nextCall) => new grpc.InterceptingCall(nextCall(options), {
            start: (metadata, listener, next) => {
                this.authorization().then(
                    (authorization) => {
                        metadata.set('authorization', authorization);
                        next(metadata, listener);
                    },
                    (err: unknown) => {
                        listener.onReceiveStatus({
                            code: grpc.status.UNAUTHENTICATED,
                            details: errorMessage(err),
                            metadata: new grpc.Metadata(),
                        });
                    });
            },
        });
    }

    /**
     * The value of the gRPC metadata `authorization` for the next call.
     *
     * This waits for the authentication context to be resolved, so a call
     * issued right after the constructor is authenticated rather than rejected.
     */
    private async authorization(): Promise<string> {
        // Read the gate first: an explicit login replaces it, and the resolved
        // value is used directly because the construction phase may not have
        // stored it yet when a call and the phase itself race.
        const gate = this._authGate;
        let auth = this._auth ?? await gate;
        if (auth === null) {
            throw new Error(
                'the connector is unauthenticated: no authentication information was found, ' +
                'login with connector.login(loginToken)');
        }
        if (needsRenew(auth, Date.now() / 1000)) {
            auth = await this.renew(auth);
        }
        return `Bearer ${auth.token}`;
    }

    /**
     * Renew the authentication token, sharing a single request between all
     * the concurrent calls which noticed the token is about to expire.
     *
     * @param expiring the token to renew.
     * @returns the renewed token.
     */
    private renew(expiring: AuthToken): Promise<AuthToken> {
        if (this._renewal === null) {
            this._renewal = renewToken(this._config.serverUrl, expiring)
                .then((renewed) => {
                    this._auth = renewed;
                    return renewed;
                })
                .finally(() => {
                    this._renewal = null;
                });
        }
        return this._renewal;
    }
}

export {
    Connector,
    ConnectorOptions,
    OrgInfo,
};
