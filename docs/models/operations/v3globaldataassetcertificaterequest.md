# V3GlobaldataAssetCertificateRequest

## Example Usage

```typescript
import { V3GlobaldataAssetCertificateRequest } from "censys-sdk-typescript/models/operations";

let value: V3GlobaldataAssetCertificateRequest = {
  organizationId: "<id>",
  certificateId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `organizationId`                                                                                                                                                                                   | *string*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | The ID of a Censys organization to associate the request with. See the [Getting Started docs](https://docs.censys.com/reference/get-started#step-3-set-your-organization-id) for more information. |
| `certificateId`                                                                                                                                                                                    | *string*                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                 | The SHA-256 certificate fingerprint.                                                                                                                                                               |