# V3TagsBulkDeleteAssignmentsResponse

## Example Usage

```typescript
import { V3TagsBulkDeleteAssignmentsResponse } from "@censys/platform-sdk/models/operations";

let value: V3TagsBulkDeleteAssignmentsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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