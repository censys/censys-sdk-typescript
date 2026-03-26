# NetworkClassification

## Example Usage

```typescript
import { NetworkClassification } from "@censys/platform-sdk/models/components";

let value: NetworkClassification = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `hosting`                                                                    | *boolean*                                                                    | :heavy_minus_sign:                                                           | Whether the host belongs to an Internet hosting service provider.            |
| `mobile`                                                                     | *boolean*                                                                    | :heavy_minus_sign:                                                           | Whether the host belongs to a mobile network.                                |
| `mobileInfo`                                                                 | [components.NetworkMobileInfo](../../models/components/networkmobileinfo.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `satellite`                                                                  | *boolean*                                                                    | :heavy_minus_sign:                                                           | Whether the host belongs to a statellite network.                            |
| `source`                                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | The source of the data.                                                      |