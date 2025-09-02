# V3GlobaldataAssetCertificateListRawPostRequest

## Example Usage

```typescript
import { V3GlobaldataAssetCertificateListRawPostRequest } from "@censys/platform-sdk/models/operations";

let value: V3GlobaldataAssetCertificateListRawPostRequest = {
  assetCertificateListInputBody: {
    certificateIds: [
      "3daf2843a77b6f4e6af43cd9b6f6746053b8c928e056e8a724808db8905a94cf",
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `organizationId`                                                                                                                                                                                   | *string*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | The ID of a Censys organization to associate the request with. See the [Getting Started docs](https://docs.censys.com/reference/get-started#step-3-set-your-organization-id) for more information. |
| `assetCertificateListInputBody`                                                                                                                                                                    | [components.AssetCertificateListInputBody](../../models/components/assetcertificatelistinputbody.md)                                                                                               | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |