# V3TagsListTagsResponse

## Example Usage

```typescript
import { V3TagsListTagsResponse } from "@censys/platform-sdk/models/operations";

let value: V3TagsListTagsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {},
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `result`                                                                                   | [components.ResponseEnvelopeTagsList](../../models/components/responseenvelopetagslist.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |