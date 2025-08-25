# V3GlobaldataSearchConvertResponse

## Example Usage

```typescript
import { V3GlobaldataSearchConvertResponse } from "@censys/platform-sdk/models/operations";

let value: V3GlobaldataSearchConvertResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {},
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                              | Record<string, *string*[]>                                                                                                             | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `result`                                                                                                                               | [components.ResponseEnvelopeListSearchConvertQueryResponse](../../models/components/responseenvelopelistsearchconvertqueryresponse.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |