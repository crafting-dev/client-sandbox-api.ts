import * as fs from 'fs';
import * as path from 'path';

/**
 * Environment variable carrying a login token for service account login.
 */
export const ENV_AUTH_TOKEN = 'CRAFTING_SANDBOX_AUTH_TOKEN';

/**
 * Environment variable carrying the path of a file whose content is a login
 * token for service account login.
 */
export const ENV_AUTH_TOKEN_FILE = 'CRAFTING_SANDBOX_AUTH_TOKEN_FILE';

/**
 * The name of the file inside the configuration folder where the CLI saves
 * the JWT tokens it obtained, keyed by server URL.
 */
export const TOKENS_FILE = 'tokens';

/**
 * How long before the actual expiration time a token is treated as expired,
 * so it gets renewed before a call fails.
 */
export const RENEW_SKEW_SECONDS = 60;

/**
 * Where an authentication token came from.
 */
type AuthTokenSource =
    /**
     * Exchanged from a login token passed in the connector options.
     */
    | 'options'
    /**
     * Exchanged from a login token in {@link ENV_AUTH_TOKEN}.
     */
    | 'env'
    /**
     * Exchanged from a login token in the file named by {@link ENV_AUTH_TOKEN_FILE}.
     */
    | 'env-file'
    /**
     * Read from the CLI authentication context.
     */
    | 'cli'
    /**
     * Obtained by an explicit call to `Connector.login`.
     */
    | 'login';

/**
 * An authentication token used as gRPC metadata `authorization`.
 */
type AuthToken = {
    /**
     * The signed JWT token.
     */
    token: string;

    /**
     * The expiration time of the token, in seconds since the epoch,
     * as decoded from the JWT `exp` claim. It is `undefined` when the token
     * carries no expiration time, in which case it is never renewed.
     */
    expiresAt?: number;

    /**
     * Where the token came from.
     */
    source: AuthTokenSource;
};

/**
 * Decode the expiration time from a JWT token.
 *
 * The signature is not verified: only the server can do that. The expiration
 * time is used locally to decide when to renew the token.
 *
 * @param jwt the signed JWT token.
 * @returns the value of the `exp` claim in seconds since the epoch,
 *          or `undefined` when the token has no usable expiration time.
 */
function decodeJwtExpiry(jwt: string): number | undefined {
    const parts = jwt.split('.');
    if (parts.length < 2) {
        return undefined;
    }
    let claims: unknown;
    try {
        claims = JSON.parse(Buffer.from(parts[1], 'base64url').toString('utf8'));
    } catch {
        return undefined;
    }
    if (typeof claims !== 'object' || claims === null) {
        return undefined;
    }
    const exp = (claims as {exp?: unknown}).exp;
    return typeof exp === 'number' && Number.isFinite(exp) ? exp : undefined;
}

/**
 * Whether a token needs to be renewed before it is used.
 *
 * @param token the current token.
 * @param now the current time in seconds since the epoch.
 * @returns `true` if the token is expired or about to expire.
 */
function needsRenew(token: AuthToken, now: number): boolean {
    return token.expiresAt !== undefined && now >= token.expiresAt - RENEW_SKEW_SECONDS;
}

/**
 * Perform the service account login procedure with a login token.
 *
 * @param serverUrl the target server URL, without a trailing slash.
 * @param loginToken the login token of the service account.
 * @param source where the login token came from, recorded on the result.
 * @returns the {@link AuthToken} for the service account.
 */
async function loginWithToken(
    serverUrl: string,
    loginToken: string,
    source: AuthTokenSource): Promise<AuthToken> {
    const url = `${serverUrl}/auth/token/${encodeURIComponent(loginToken)}?json`;
    return authTokenFromResponse(await fetchJson(url), source);
}

/**
 * Perform the service account login procedure with a login token stored
 * in a file.
 *
 * @param serverUrl the target server URL, without a trailing slash.
 * @param file the path of the file holding the login token.
 * @param source where the file name came from, recorded on the result.
 * @returns the {@link AuthToken} for the service account.
 */
async function loginWithTokenFile(
    serverUrl: string,
    file: string,
    source: AuthTokenSource): Promise<AuthToken> {
    let content: string;
    try {
        content = fs.readFileSync(file, 'utf8');
    } catch (err) {
        throw new Error(`unable to read the login token from ${file}: ${errorMessage(err)}`);
    }
    const loginToken = content.trim();
    if (loginToken === '') {
        throw new Error(`the login token file ${file} is empty`);
    }
    return loginWithToken(serverUrl, loginToken, source);
}

/**
 * Renew an authentication token before it expires.
 *
 * @param serverUrl the target server URL, without a trailing slash.
 * @param current the token to renew.
 * @returns the renewed {@link AuthToken}, keeping the original source.
 */
async function renewToken(serverUrl: string, current: AuthToken): Promise<AuthToken> {
    const payload = await fetchJson(`${serverUrl}/auth/token?json`, {
        authorization: `Bearer ${current.token}`,
    });
    return authTokenFromResponse(payload, current.source);
}

/**
 * Retrieve the JWT token saved by the CLI for the target server.
 *
 * A missing tokens file, or a file without an entry for the target server,
 * simply means no CLI authentication context is available. A tokens file
 * which cannot be decoded is reported as an error, because the information
 * is there but unusable.
 *
 * @param configFolder the local configuration folder.
 * @param serverUrl the target server URL, without a trailing slash.
 * @returns the {@link AuthToken} from the CLI, or `undefined` when there is none.
 */
function cliAuthToken(configFolder: string, serverUrl: string): AuthToken | undefined {
    const tokensFile = path.join(configFolder, TOKENS_FILE);
    let content: string;
    try {
        content = fs.readFileSync(tokensFile, 'utf8');
    } catch {
        return undefined;
    }

    let tokens: unknown;
    try {
        tokens = JSON.parse(content);
    } catch (err) {
        throw new Error(`unable to decode ${tokensFile}: ${errorMessage(err)}`);
    }
    if (typeof tokens !== 'object' || tokens === null) {
        throw new Error(`unable to decode ${tokensFile}: not a JSON object`);
    }

    const entries = tokens as Record<string, unknown>;
    // The CLI may or may not have saved the URL with a trailing slash.
    const entry = entries[serverUrl] ?? entries[`${serverUrl}/`];
    if (typeof entry !== 'object' || entry === null) {
        return undefined;
    }
    const token = (entry as {Token?: unknown}).Token;
    if (typeof token !== 'string' || token === '') {
        return undefined;
    }
    return {token, expiresAt: decodeJwtExpiry(token), source: 'cli'};
}

/**
 * Build an {@link AuthToken} from a decoded login/renew response payload.
 *
 * @param payload the decoded JSON response.
 * @param source where the original login token came from.
 * @returns the {@link AuthToken}.
 */
function authTokenFromResponse(payload: unknown, source: AuthTokenSource): AuthToken {
    if (typeof payload !== 'object' || payload === null) {
        throw new Error('unexpected login response: not a JSON object');
    }
    const token = (payload as {token?: unknown}).token;
    if (typeof token !== 'string' || token === '') {
        throw new Error('unexpected login response: missing field "token"');
    }
    return {token, expiresAt: decodeJwtExpiry(token), source};
}

/**
 * Send an HTTP GET expecting a JSON response.
 *
 * @param url the full URL.
 * @param headers extra request headers.
 * @returns the decoded JSON payload.
 */
async function fetchJson(url: string, headers?: Record<string, string>): Promise<unknown> {
    let resp: Response;
    try {
        resp = await fetch(url, {headers: {accept: 'application/json', ...headers}});
    } catch (err) {
        throw new Error(`unable to reach ${redact(url)}: ${errorMessage(err)}`);
    }
    if (!resp.ok) {
        throw new Error(`${redact(url)} failed: ${resp.status} ${resp.statusText}`);
    }
    try {
        return await resp.json();
    } catch (err) {
        throw new Error(`unable to decode the response of ${redact(url)}: ${errorMessage(err)}`);
    }
}

/**
 * Remove the login token from a URL, so it never shows up in an error message.
 *
 * @param url the full URL.
 * @returns the URL with the login token replaced by a placeholder.
 */
function redact(url: string): string {
    return url.replace(/(\/auth\/token\/)[^?/]+/, '$1***');
}

/**
 * Extract a message from a value thrown by another library.
 *
 * @param err the thrown value.
 * @returns a printable message.
 */
function errorMessage(err: unknown): string {
    return err instanceof Error ? err.message : String(err);
}

export {
    AuthToken,
    AuthTokenSource,
    cliAuthToken,
    decodeJwtExpiry,
    errorMessage,
    loginWithToken,
    loginWithTokenFile,
    needsRenew,
    renewToken,
};
