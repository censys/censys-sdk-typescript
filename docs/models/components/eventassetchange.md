# EventAssetChange

## Example Usage

```typescript
import { EventAssetChange } from "@censys/platform-sdk/models/components";

let value: EventAssetChange = {
  changeType: "added",
  eventTime: new Date("2024-06-16T22:15:30.757Z"),
  reason: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `changeType`                                                                                  | [components.ChangeType](../../models/components/changetype.md)                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `eventTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reason`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |