# Target2

Discovery scan against hostname:PORT

## Example Usage

```typescript
import { Target2 } from "@censys/platform-sdk/models/components";

let value: Target2 = {
  hostnamePort: {
    hostname: "censys.io",
    port: 443,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `hostnamePort`                                                     | [components.HostnamePort](../../models/components/hostnameport.md) | :heavy_check_mark:                                                 | N/A                                                                |