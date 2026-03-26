# V3ThreathuntingCenseyeJobResultsResponse

## Example Usage

```typescript
import { V3ThreathuntingCenseyeJobResultsResponse } from "@censys/platform-sdk/models/operations";

let value: V3ThreathuntingCenseyeJobResultsResponse = {
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
  result: {
    result: {
      results: [
        {
          count: 7456.66,
          fieldValuePairs: null,
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                              | Record<string, *string*[]>                                                                                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `result`                                                                                                               | [components.ResponseEnvelopeCenseyeResultsResponse](../../models/components/responseenvelopecenseyeresultsresponse.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |