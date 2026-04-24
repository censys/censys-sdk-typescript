# V3ThreathuntingCenseyeJobsListResponse

## Example Usage

```typescript
import { V3ThreathuntingCenseyeJobsListResponse } from "@censys/platform-sdk/models/operations";

let value: V3ThreathuntingCenseyeJobsListResponse = {
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
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    result: {
      jobs: [],
    },
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                | Record<string, *string*[]>                                                                                               | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `result`                                                                                                                 | [components.ResponseEnvelopeCenseyeJobsListResponse](../../models/components/responseenvelopecenseyejobslistresponse.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |