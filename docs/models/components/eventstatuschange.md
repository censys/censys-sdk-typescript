# EventStatusChange

## Example Usage

```typescript
import { EventStatusChange } from "@censys/platform-sdk/models/components";

let value: EventStatusChange = {
  eventTime: new Date("2024-05-13T08:59:51.518Z"),
  newStatus: "populating",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `eventTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `newStatus`                                                                                   | [components.NewStatus](../../models/components/newstatus.md)                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `oldStatus`                                                                                   | [components.OldStatus](../../models/components/oldstatus.md)                                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `reason`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |