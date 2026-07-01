# V3GlobaldataDnsIpResolutionRangesResponse

## Example Usage

```typescript
import { V3GlobaldataDnsIpResolutionRangesResponse } from "@censys/platform-sdk/models/operations";

let value: V3GlobaldataDnsIpResolutionRangesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {},
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                          | Record<string, *string*[]>                                                                                                         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `result`                                                                                                                           | [components.ResponseEnvelopeDnsIpResolutionRangeResponse](../../models/components/responseenvelopednsipresolutionrangeresponse.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |