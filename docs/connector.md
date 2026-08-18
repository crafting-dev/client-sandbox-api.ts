# Connector

A `Connector` handles the configuration and the authentication, and provides the
context for gRPC API calls. All gRPC clients are created from it.

```typescript
import {Connector} from '@crafting/sandbox-api';

const connector = new Connector('myorg');
const client = connector.managementServiceClient();
```

## Construction

```typescript
new Connector(org?: string, options?: ConnectorOptions)
```

| Argument | Description |
| --- | --- |
| `org` | The org name to bind to. When omitted, the connector binds to the only org the identity is a member of, and fails when there is more than one. |
| `options` | Optional overrides of the defaults, see [Options](#options). |

The construction phase performs three tasks:

1. Resolve the [configuration](configuration.md);
2. Resolve the [authentication](authentication.md) if possible;
3. Bind to the org.

Only the first is synchronous, so the constructor throws right away when the
resulting server URL is not usable, and starts the other two in the background.

A client created from the connector waits for as much of that as the call needs,
so there is nothing to await before making a call:

```typescript
const connector = new Connector('myorg');
connector.managementServiceClient().listSandboxes(request, callback);
```

What does need waiting is reading the outcome of the construction phase — most
importantly [`org`](#properties), which many requests need:

```typescript
const connector = new Connector('myorg');
await connector.ready();

request.setOrgId(connector.org!.id);
```

### ready

```typescript
ready(): Promise<Connector>
```

Wait for the construction phase to complete, and resolve to the connector
itself. It is safe to call more than once, and from more than one place: they all
observe the same outcome.

It rejects when the construction phase fails, which happens when:

- a login was triggered and failed, see [Authentication](authentication.md);
- the org could not be resolved: the requested org is not accessible, the
  identity is a member of no org, or of more than one and no name was given.

A connector for which no authentication information was available at all does
not fail: it is constructed [_unauthenticated_](#unauthenticated-connectors).

A call made before `ready()` resolved fails with the same error, reported as the
gRPC status `UNAUTHENTICATED`, so a failure is never silently swallowed by not
awaiting.

### Options

```typescript
type ConnectorOptions = {
    server_url?: string;
    login_token?: string;
};
```

| Option | Description |
| --- | --- |
| `server_url` | The default server URL, for example `https://myorg.sandboxes.site`. It overrides the built-in default, but is still overridden by the environment and by the config file, see [Configuration](configuration.md). |
| `login_token` | If specified, login as a service account with this login token. |

The option names follow the fields of the protobuf API rather than the
TypeScript naming convention, so they stay identical across all the languages of
the SDK.

## Properties

| Property | Type | Description |
| --- | --- | --- |
| `authenticated` | `boolean` | Whether the connector has a valid authentication context. Only meaningful once [`ready()`](#ready) resolved. |
| `org` | `OrgInfo \| null` | The org the connector is bound to. It is `null` until [`ready()`](#ready) resolved, and stays `null` when the connector is unauthenticated. |
| `serverUrl` | `string` | The URL of the server the connector talks to, without a trailing slash. |
| `configFolder` | `string` | The local configuration folder the connector resolved. |

```typescript
type OrgInfo = {
    id: string;
    name: string;
};
```

The org is resolved with `ManagementService.ListOrgs`, so `org.name` is the name
as the server knows it, and `org.id` is the org ID most requests need:

```typescript
request.setOrgId(connector.org!.id);
```

## Methods

See [`ready()`](#ready) above, and:

### login

```typescript
login(loginToken: string): Promise<Connector>
```

Login as a service account with a login token and replace the current
authentication context with the result. The org is resolved again after the
login.

This works on an unauthenticated connector, and also on one whose construction
phase failed, which is how a program can recover:

```typescript
const connector = new Connector('myorg');
await connector.ready().catch(() => connector.login(process.argv[2]));
```

The gRPC clients created before the login keep working: they read the
authentication context per call rather than capturing it.

### close

```typescript
close(): void
```

Close all the gRPC clients created from the connector. A gRPC connection keeps
the Node process alive, so a short-lived program should close the connector when
it is done.

### Client factory methods

Each method returns the gRPC client of one service, already carrying the
authentication context. See [Services](services.md) for what each service does.

| Method | Client |
| --- | --- |
| `informationServiceClient()` | `api.InformationServiceClient` |
| `llmServiceClient()` | `api.LLMServiceClient` |
| `managementServiceClient()` | `api.ManagementServiceClient` |
| `snapshotManagementServiceClient()` | `api.SnapshotManagementServiceClient` |
| `systemAdminServiceClient()` | `api.SystemAdminServiceClient` |
| `timeSeriesServiceClient()` | `api.TimeSeriesServiceClient` |
| `trafficServiceClient()` | `api.TrafficServiceClient` |
| `workloadServiceClient()` | `api.WorkloadServiceClient` |
| `workspaceServiceClient()` | `api.WorkspaceServiceClient` |

All the clients of a connector share one connection to the server, and calling a
factory method twice returns the same client:

```typescript
connector.managementServiceClient() === connector.managementServiceClient(); // true
```

A factory method can be called right after the constructor, without awaiting
[`ready()`](#ready): the calls made on the client wait for the authentication
context to be resolved. It throws once the connector is known to be
[unauthenticated](#unauthenticated-connectors), and a call on a client created
before that was known fails with the gRPC status `UNAUTHENTICATED`.

## Unauthenticated connectors

When no authentication information is available at all, the construction
succeeds and leaves the connector _unauthenticated_. Nothing can be called on
it, and there is no org:

```typescript
const connector = new Connector('myorg');
await connector.ready();

connector.authenticated;             // false
connector.org;                       // null
connector.managementServiceClient(); // throws
```

Without the `await`, the client is created and the call it is given fails with
the gRPC status `UNAUTHENTICATED` instead.

This is the state a program lands in when it runs somewhere the CLI never logged
in and no login token was provided. Recover from it with
[`login()`](#login).

Note the difference with a _failed_ login: if any authentication information was
available, the connector uses it, and the failure of that procedure fails the
whole construction rather than falling back to this state. See
[Authentication](authentication.md).
