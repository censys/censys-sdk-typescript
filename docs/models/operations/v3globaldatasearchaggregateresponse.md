# V3GlobaldataSearchAggregateResponse

## Example Usage

```typescript
import { V3GlobaldataSearchAggregateResponse } from "@censys/platform-sdk/models/operations";

let value: V3GlobaldataSearchAggregateResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {},
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                | Record<string, *string*[]>                                                                                               | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `result`                                                                                                                 | [components.ResponseEnvelopeSearchAggregateResponse](../../models/components/responseenvelopesearchaggregateresponse.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |