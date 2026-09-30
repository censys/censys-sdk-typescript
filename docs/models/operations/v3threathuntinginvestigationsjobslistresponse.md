# V3ThreathuntingInvestigationsJobsListResponse

## Example Usage

```typescript
import { V3ThreathuntingInvestigationsJobsListResponse } from "@censys/platform-sdk/models/operations";

let value: V3ThreathuntingInvestigationsJobsListResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    result: {
      jobs: [
        {
          createTime: new Date("2025-12-05T21:03:30.698Z"),
          jobId: "550e8400-e29b-41d4-a716-446655440000",
          state: "completed",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                            | Record<string, *string*[]>                                                                                           | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `result`                                                                                                             | [components.ResponseEnvelopeInvestigationJobsList](../../models/components/responseenvelopeinvestigationjobslist.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |