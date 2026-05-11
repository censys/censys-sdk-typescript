# SearchQueryHit

## Example Usage

```typescript
import { SearchQueryHit } from "@censys/platform-sdk/models/components";

let value: SearchQueryHit = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `certificateV1`                                                                                    | [components.CertificateAsset](../../models/components/certificateasset.md)                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `hostV1`                                                                                           | [components.HostAssetWithMatchedServices](../../models/components/hostassetwithmatchedservices.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `tags`                                                                                             | [components.SearchQueryTagInfo](../../models/components/searchquerytaginfo.md)[]                   | :heavy_minus_sign:                                                                                 | Tags applied to this asset.                                                                        |
| `webpropertyV1`                                                                                    | [components.WebpropertyAsset](../../models/components/webpropertyasset.md)                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |