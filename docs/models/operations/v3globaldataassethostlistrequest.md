# V3GlobaldataAssetHostListRequest

## Example Usage

```typescript
import { V3GlobaldataAssetHostListRequest } from "censys-sdk-typescript/models/operations";

let value: V3GlobaldataAssetHostListRequest = {
  organizationId: "<id>",
  hostIds: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `organizationId`                                                                                                                                                                                   | *string*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | The ID of a Censys organization to associate the request with. See the [Getting Started docs](https://docs.censys.com/reference/get-started#step-3-set-your-organization-id) for more information. |
| `hostIds`                                                                                                                                                                                          | *string*[]                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                 | A list of host IP addresses.                                                                                                                                                                       |