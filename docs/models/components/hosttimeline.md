# HostTimeline

## Example Usage

```typescript
import { HostTimeline } from "censys-sdk-typescript/models/components";

let value: HostTimeline = {
  events: [
    {
      extensions: {
        "key": "<value>",
      },
      resource: {},
    },
  ],
  scannedTo: new Date("2024-10-12T15:55:05.148Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `events`                                                                                      | [components.HostTimelineEventAsset](../../models/components/hosttimelineeventasset.md)[]      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scannedTo`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |