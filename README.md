# Crafting Sandbox API for TypeScript

## Quick Start

```typescript
import {Connector} from "@crafting/sandbox-api";

const connector = new Connector("myorg");
const resp = connector.managementServiceClient().createSandbox({
    org_id: connector.org.id,
    name: "my-sandbox",
    composer: {
        from_app_definition: {
            app_definition: {
                workspaces: [
                    {
                        name: "dev",
                    },
                ],
            },
        },
    },
})
const sandbox = resp.sandbox;
...
```

To use a specific type:

```typescript
import {api} from "@crafting/sandbox-api";

class App {
    sandbox: api.Sandbox?;
}
```
