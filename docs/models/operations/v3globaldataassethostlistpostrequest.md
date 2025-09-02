# V3GlobaldataAssetHostListPostRequest

## Example Usage

```typescript
import { V3GlobaldataAssetHostListPostRequest } from "@censys/platform-sdk/models/operations";

let value: V3GlobaldataAssetHostListPostRequest = {
  assetHostListInputBody: {
    hostIds: [
      "8.8.8.8",
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `organizationId`                                                                                                                                                                                   | *string*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | The ID of a Censys organization to associate the request with. See the [Getting Started docs](https://docs.censys.com/reference/get-started#step-3-set-your-organization-id) for more information. |
| `assetHostListInputBody`                                                                                                                                                                           | [components.AssetHostListInputBody](../../models/components/assethostlistinputbody.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |