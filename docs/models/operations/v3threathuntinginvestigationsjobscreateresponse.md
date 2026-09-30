# V3ThreathuntingInvestigationsJobsCreateResponse

## Example Usage

```typescript
import { V3ThreathuntingInvestigationsJobsCreateResponse } from "@censys/platform-sdk/models/operations";

let value: V3ThreathuntingInvestigationsJobsCreateResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
  },
  result: {
    result: {
      createTime: new Date("2026-05-01T07:41:22.126Z"),
      jobId: "550e8400-e29b-41d4-a716-446655440000",
      state: "completed",
    },
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                | Record<string, *string*[]>                                                                                               | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `result`                                                                                                                 | [components.ResponseEnvelopeCreatedInvestigationJob](../../models/components/responseenvelopecreatedinvestigationjob.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |