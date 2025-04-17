# V3GlobaldataAssetWebpropertyResponse

## Example Usage

```typescript
import { V3GlobaldataAssetWebpropertyResponse } from "@censys/platform-sdk/models/operations";

let value: V3GlobaldataAssetWebpropertyResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {},
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                  | Record<string, *string*[]>                                                                                 | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `result`                                                                                                   | [components.ResponseEnvelopeWebpropertyAsset](../../models/components/responseenvelopewebpropertyasset.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |