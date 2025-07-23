# V3CollectionsSearchQueryResponse

## Example Usage

```typescript
import { V3CollectionsSearchQueryResponse } from "@censys/platform-sdk/models/operations";

let value: V3CollectionsSearchQueryResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {},
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                        | Record<string, *string*[]>                                                                                       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `result`                                                                                                         | [components.ResponseEnvelopeSearchQueryResponse](../../models/components/responseenvelopesearchqueryresponse.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |