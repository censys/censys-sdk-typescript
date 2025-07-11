# V3GlobaldataAssetCertificateListRequest

## Example Usage

```typescript
import { V3GlobaldataAssetCertificateListRequest } from "censys-sdk-typescript/models/operations";

let value: V3GlobaldataAssetCertificateListRequest = {
  certificateIds: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `organizationId`                                                                                                                                                                                   | *string*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | The ID of a Censys organization to associate the request with. See the [Getting Started docs](https://docs.censys.com/reference/get-started#step-3-set-your-organization-id) for more information. |
| `certificateIds`                                                                                                                                                                                   | *string*[]                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                 | A list of SHA-256 certificate fingerprints.                                                                                                                                                        |