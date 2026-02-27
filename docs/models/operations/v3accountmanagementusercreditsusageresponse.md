# V3AccountmanagementUserCreditsUsageResponse

## Example Usage

```typescript
import { V3AccountmanagementUserCreditsUsageResponse } from "@censys/platform-sdk/models/operations";

let value: V3AccountmanagementUserCreditsUsageResponse = {
  headers: {},
  result: {
    result: {
      creditsConsumedBySource: {
        api: 581368,
        ui: 390321,
      },
      endTime: new Date("2025-01-20T01:07:45.365Z"),
      periods: [
        {
          creditsAdded: 913626,
          creditsConsumed: 511312,
          creditsExpired: 453692,
          endDate: new Date("2026-05-22T06:19:01.999Z"),
          startDate: new Date("2025-07-08T19:20:40.873Z"),
          transactionCount: 351979,
        },
      ],
      startTime: new Date("2025-01-07T07:30:28.681Z"),
      totalAdded: 92318,
      totalConsumed: 80217,
      totalExpired: 110072,
      transactionCount: 859501,
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                    | Record<string, *string*[]>                                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `result`                                                                                                     | [components.ResponseEnvelopeCreditUsageReport](../../models/components/responseenvelopecreditusagereport.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |