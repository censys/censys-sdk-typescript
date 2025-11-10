# CreditUsageReport

## Example Usage

```typescript
import { CreditUsageReport } from "@censys/platform-sdk/models/components";

let value: CreditUsageReport = {
  endDate: new Date("2025-11-10T08:28:24.609Z"),
  sourceBreakdown: {
    api: 415273,
    ui: 206100,
  },
  startDate: new Date("2025-06-21T07:38:25.972Z"),
  totalConsumed: 633998,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `endDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The end date of the window for this report.                                                   |
| `sourceBreakdown`                                                                             | [components.SourceUsageBreakdown](../../models/components/sourceusagebreakdown.md)            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The start date of the window for this report.                                                 |
| `totalConsumed`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | The total amount of credits consumed during the report period.                                |