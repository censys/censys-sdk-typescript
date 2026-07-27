# V3TagsGetOperationResponse

## Example Usage

```typescript
import { V3TagsGetOperationResponse } from "@censys/platform-sdk/models/operations";

let value: V3TagsGetOperationResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {},
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `headers`                                                                                          | Record<string, *string*[]>                                                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `result`                                                                                           | [components.ResponseEnvelopeTagOperation](../../models/components/responseenvelopetagoperation.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |