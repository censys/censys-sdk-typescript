# V3GlobaldataScansRescanRequest

## Example Usage

```typescript
import { V3GlobaldataScansRescanRequest } from "@censys/platform-sdk/models/operations";

let value: V3GlobaldataScansRescanRequest = {
  scansRescanInputBody: {
    target: {
      webOrigin: {
        hostname: "censys.io",
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
| `scansRescanInputBody`                                                                                                                                                                             | [components.ScansRescanInputBody](../../models/components/scansrescaninputbody.md)                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |