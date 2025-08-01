# Target1

Discovery scan against IP:PORT

## Example Usage

```typescript
import { Target1 } from "@censys/platform-sdk/models/components";

let value: Target1 = {
  hostPort: {
    ip: "8.8.8.8",
    port: 443,
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `hostPort`                                                 | [components.HostPort](../../models/components/hostport.md) | :heavy_check_mark:                                         | N/A                                                        |