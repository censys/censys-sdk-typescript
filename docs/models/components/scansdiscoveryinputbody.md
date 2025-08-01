# ScansDiscoveryInputBody

## Example Usage

```typescript
import { ScansDiscoveryInputBody } from "@censys/platform-sdk/models/components";

let value: ScansDiscoveryInputBody = {
  target: {
    hostnamePort: {
      hostname: "censys.io",
      port: 443,
    },
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `target`                                   | *components.ScansDiscoveryInputBodyTarget* | :heavy_check_mark:                         | N/A                                        |