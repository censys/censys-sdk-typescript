# V3ThreathuntingInvestigationsJobsGetResponse

## Example Usage

```typescript
import { V3ThreathuntingInvestigationsJobsGetResponse } from "@censys/platform-sdk/models/operations";

let value: V3ThreathuntingInvestigationsJobsGetResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    result: {
      createTime: new Date("2024-04-23T19:39:08.017Z"),
      jobId: "550e8400-e29b-41d4-a716-446655440000",
      state: "completed",
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                  | Record<string, *string*[]>                                                                                 | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `result`                                                                                                   | [components.ResponseEnvelopeInvestigationJob](../../models/components/responseenvelopeinvestigationjob.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |