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
        autoReplenishment: 390321,
        other: 351320,
        ui: 844559,
      },
      endTime: new Date("2026-06-16T00:55:55.793Z"),
      periods: [
        {
          creditsAdded: 453692,
          creditsConsumed: 795861,
          creditsExpired: 506210,
          endDate: new Date("2025-01-20T18:28:03.528Z"),
          startDate: new Date("2025-01-07T07:30:28.681Z"),
          transactionCount: 92318,
        },
      ],
      startTime: new Date("2024-03-28T22:01:47.787Z"),
      totalAdded: 110072,
      totalConsumed: 859501,
      totalExpired: 994577,
      transactionCount: 265273,
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                    | Record<string, *string*[]>                                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `result`                                                                                                     | [components.ResponseEnvelopeCreditUsageReport](../../models/components/responseenvelopecreditusagereport.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |