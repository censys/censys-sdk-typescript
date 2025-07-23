# HostTimeline

## Example Usage

```typescript
import { HostTimeline } from "@censys/platform-sdk/models/components";

let value: HostTimeline = {
  events: [
    {
      extensions: {},
      resource: {},
    },
  ],
  scannedTo: new Date("2025-10-25T20:03:11.542Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `events`                                                                                      | [components.HostTimelineEventAsset](../../models/components/hosttimelineeventasset.md)[]      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scannedTo`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |