# V3GlobaldataAssetWebpropertyListPostRequest

## Example Usage

```typescript
import { V3GlobaldataAssetWebpropertyListPostRequest } from "@censys/platform-sdk/models/operations";

let value: V3GlobaldataAssetWebpropertyListPostRequest = {
  assetWebpropertyListInputBody: {
    webpropertyIds: [
      "platform.censys.io:80",
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `organizationId`                                                                                                                                                                                   | *string*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | The ID of a Censys organization to associate the request with. See the [Getting Started docs](https://docs.censys.com/reference/get-started#step-3-set-your-organization-id) for more information. |
| `assetWebpropertyListInputBody`                                                                                                                                                                    | [components.AssetWebpropertyListInputBody](../../models/components/assetwebpropertylistinputbody.md)                                                                                               | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |