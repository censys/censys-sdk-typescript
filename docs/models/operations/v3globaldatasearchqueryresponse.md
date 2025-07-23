# V3GlobaldataSearchQueryResponse

## Example Usage

```typescript
import { V3GlobaldataSearchQueryResponse } from "@censys/platform-sdk/models/operations";

let value: V3GlobaldataSearchQueryResponse = {
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

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                        | Record<string, *string*[]>                                                                                       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `result`                                                                                                         | [components.ResponseEnvelopeSearchQueryResponse](../../models/components/responseenvelopesearchqueryresponse.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |