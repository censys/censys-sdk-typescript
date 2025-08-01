# V3ThreathuntingScansDiscoveryRequest

## Example Usage

```typescript
import { V3ThreathuntingScansDiscoveryRequest } from "@censys/platform-sdk/models/operations";

let value: V3ThreathuntingScansDiscoveryRequest = {
  scansDiscoveryInputBody: {
    target: {
      hostPort: {
        ip: "8.8.8.8",
        port: 443,
      },
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `organizationId`                                                                                                                                                                                   | *string*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | The ID of a Censys organization to associate the request with. See the [Getting Started docs](https://docs.censys.com/reference/get-started#step-3-set-your-organization-id) for more information. |
| `scansDiscoveryInputBody`                                                                                                                                                                          | [components.ScansDiscoveryInputBody](../../models/components/scansdiscoveryinputbody.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |