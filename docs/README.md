# Crafting Sandbox API for TypeScript

A thin wrapper over the gRPC sandbox APIs (protobuf package `sandboxes.api.v1`).

The library exports exactly two symbols:

| Symbol | Description |
| --- | --- |
| [`Connector`](connector.md) | Handles configuration and authentication, and creates the gRPC clients. |
| [`api`](messages.md) | The namespace holding every generated protobuf message, enum and gRPC service client of `sandboxes.api.v1`. |

```typescript
import {Connector, api} from '@crafting/sandbox-api';
```

## Quick start

```typescript
import {Connector, api} from '@crafting/sandbox-api';

// Resolves the configuration, the authentication and the org.
const connector = new Connector('myorg');
await connector.ready();

const client = connector.managementServiceClient();

const request = new api.ListSandboxesRequest();
request.setOrgId(connector.org!.id);

client.listSandboxes(request, (err, response) => {
    if (err) {
        throw err;
    }
    for (const sandbox of response.getSandboxesList()) {
        console.log(sandbox.getMeta()?.getName());
    }
    connector.close();
});
```

Everything the library does starts from a `Connector`: it resolves where the
server is, who the caller is, and which org the calls apply to. The gRPC clients
it hands out already carry the authentication context, so no call ever has to
pass metadata explicitly.

The `await connector.ready()` above is there because the request needs the org
ID. A call which does not can be made directly after the constructor — the
client waits for the authentication context on its own:

```typescript
const connector = new Connector('myorg');
connector.managementServiceClient().listSandboxes(request, callback);
```

## Documentation

- [Connector](connector.md) — construction, properties, methods and lifetime.
- [Configuration](configuration.md) — the server URL and the local configuration folder.
- [Authentication](authentication.md) — login tokens, the CLI context and token renewal.
- [Services](services.md) — the gRPC services, and how to call unary and streaming RPCs.
- [Messages](messages.md) — working with the generated protobuf types.

Refer to the [original protobuf files](../../../../protos/proto/sandboxes/api/v1)
for the schema and the comments on every message and RPC. This library adds no
schema of its own: whatever the protobuf files say is what the API accepts.

## Layout

| Path | Description |
| --- | --- |
| `index.ts` | The main module, exporting `Connector` and `api`. |
| `src/connector.ts` | The `Connector`. |
| `src/api.ts` | The `api` namespace, flattening the generated code. |
| `src/config.ts` | Resolution of the server URL and the configuration folder. |
| `src/auth.ts` | The login, renewal and CLI context procedures. |
| `gen/` | The generated protobuf and gRPC code, see [BUILD](../BUILD.md). |
| `test/` | The tests, run with `npm test`. |
