# Services

The gRPC clients come from the [`Connector`](connector.md), one per service of
the protobuf package `sandboxes.api.v1`. They are the generated `@grpc/grpc-js`
clients, so their calling convention is the standard one: callbacks for unary
RPCs, streams for streaming RPCs.

```typescript
const client = connector.managementServiceClient();
```

## The services

| Service | Client factory | Scope |
| --- | --- | --- |
| `ManagementService` | `managementServiceClient()` | The main API: sandboxes, apps, secrets, jobs, resources, orgs, service accounts, folders, subscriptions and reporting. |
| `InformationService` | `informationServiceClient()` | `ListSandboxInfo`, sandbox information for lightweight clients. |
| `WorkspaceService` | `workspaceServiceClient()` | Called from inside a workspace: `SyncStream`, `CurrentSetup`, `IssueToken`, `SourceControlCredential`, `MountOverlay`, `WriteFile`. |
| `WorkloadService` | `workloadServiceClient()` | `WorkloadAction`, `StreamLog`, `InjectTraffic`. |
| `SnapshotManagementService` | `snapshotManagementServiceClient()` | `ListSnapshots`, `CopySnapshot`, `MoveSnapshot`, `DeleteSnapshot`. |
| `TrafficService` | `trafficServiceClient()` | Traffic sessions and `QueryTrafficEvents`. |
| `TimeSeriesService` | `timeSeriesServiceClient()` | `QueryTimeSeries`, server-streaming metrics. |
| `LLMService` | `llmServiceClient()` | LLM sessions: start, reply, cancel, stream and query messages. |
| `SystemAdminService` | `systemAdminServiceClient()` | System administration: infra, node pools, metrics, system objects. |

The authoritative list of RPCs, with the comments describing each one, is in the
[protobuf files](../../../../protos/proto/sandboxes/api/v1). `ManagementService`
alone has more than forty RPCs, so they are not duplicated here.

## Unary calls

The generated method takes the request message and a callback, and optionally
gRPC metadata and call options in between:

```typescript
import {Connector, api} from '@crafting/sandbox-api';

const connector = new Connector('myorg');
await connector.ready();

const client = connector.managementServiceClient();

const request = new api.ListSandboxesRequest();
request.setOrgId(connector.org!.id);

client.listSandboxes(request, (err, response) => {
    if (err) {
        console.error(err.code, err.details);
        return;
    }
    for (const sandbox of response.getSandboxesList()) {
        console.log(sandbox.getMeta()?.getName());
    }
});
```

The error is a `grpc.ServiceError`, carrying the gRPC `code` and `details`. A
failure to authenticate the call surfaces here, with the code `UNAUTHENTICATED`.

### With promises

The library keeps the generated clients as they are, and does not wrap them. The
plain way to await a unary call:

```typescript
const response = await new Promise<api.ListSandboxesResponse>((resolve, reject) => {
    client.listSandboxes(request, (err, resp) => (err ? reject(err) : resolve(resp)));
});
```

A small helper removes the repetition:

```typescript
import * as grpc from '@grpc/grpc-js';

function call<Resp>(
    invoke: (callback: (err: grpc.ServiceError | null, response: Resp) => void) => void,
): Promise<Resp> {
    return new Promise<Resp>((resolve, reject) => {
        invoke((err, response) => (err ? reject(err) : resolve(response)));
    });
}

const response = await call<api.ListSandboxesResponse>(
    (cb) => client.listSandboxes(request, cb));
```

The response type has to be named explicitly. The generated methods are
overloaded to accept optional metadata and call options, and that stops
TypeScript from inferring the response type through the callback.

### Creating a sandbox

```typescript
const workspace = new api.AppDefinition.Workspace();
workspace.setName('dev');

const appDefinition = new api.AppDefinition();
appDefinition.addWorkspaces(workspace);

const fromAppDefinition = new api.Composer.FromAppDefinition();
fromAppDefinition.setAppDefinition(appDefinition);

const composer = new api.Composer();
composer.setFromAppDefinition(fromAppDefinition);

const request = new api.CreateSandboxRequest();
request.setOrgId(connector.org!.id);
request.setName('my-sandbox');
request.setComposer(composer);

const response = await call<api.CreateSandboxResponse>(
    (cb) => client.createSandbox(request, cb));
const sandbox = response.getSandbox();
```

`CreateSandboxRequest.composer` chooses how the sandbox is composed, and is a
protobuf `oneof`: setting `from_app_definition` as above builds the sandbox from
an inline definition, while `from_app` builds it from an existing app. See
[Messages](messages.md#oneof-fields).

## Server-streaming calls

A server-streaming RPC takes no callback and returns a readable stream of
response messages:

```typescript
const request = new api.ListSandboxesRequest();
request.setOrgId(connector.org!.id);

const stream = client.listSandboxesStream(request);
stream.on('data', (response: api.ListSandboxesResponse) => {
    console.log(response.getSandboxesList().length);
});
stream.on('error', (err) => console.error(err));
stream.on('end', () => console.log('done'));
```

`ManagementService.ListSandboxesStream`, `WorkloadService.StreamLog`,
`LLMService.StreamLLMSession` and `TimeSeriesService.QueryTimeSeries` work this
way.

Cancel a stream which is no longer needed with `stream.cancel()`, otherwise it
keeps the connection busy.

## Bidirectional-streaming calls

A bidirectional RPC returns a duplex stream, written to and read from
independently:

```typescript
const stream = client.subscriptionStream();
stream.on('data', (message: api.Subscription.Message) => {
    // Handle the notification.
});

const request = new api.Subscription.Request();
// ... describe what to subscribe to ...
stream.write(request);

// When done:
stream.end();
```

`ManagementService.SubscriptionStream`, `WorkspaceService.SyncStream` and
`WorkloadService.InjectTraffic` work this way.

## Metadata and call options

The connector attaches the `authorization` metadata itself. Anything else,
such as a deadline, is passed per call:

```typescript
const metadata = new grpc.Metadata();
metadata.set('x-request-id', requestId);

client.listSandboxes(request, metadata, {deadline: Date.now() + 5000}, callback);
```

Adding `authorization` to that metadata is not necessary, and overrides what the
connector would have attached.
