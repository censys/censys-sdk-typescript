# CreditUsageReportPeriod

## Example Usage

```typescript
import { CreditUsageReportPeriod } from "@censys/platform-sdk/models/components";

let value: CreditUsageReportPeriod = {
  creditsAdded: 626919,
  creditsConsumed: 614816,
  creditsExpired: 298981,
  endDate: new Date("2026-12-26T19:10:20.249Z"),
  startDate: new Date("2025-06-08T09:07:45.417Z"),
  transactionCount: 173548,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `creditsAdded`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | The total amount of credits added during the report period.                                   |
| `creditsConsumed`                                                                             | *number*                                                                                      | :heavy_check_mark:                                                                            | The total amount of credits consumed during the report period.                                |
| `creditsExpired`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | The total amount of credits expired during the report period.                                 |
| `endDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The end date of the window for this report period.                                            |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The start date of the window for this report period.                                          |
| `transactionCount`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | The total number of transactions during the report period.                                    |