# WebpropertyTimeline

## Example Usage

```typescript
import { WebpropertyTimeline } from "@censys/platform-sdk/models/components";

let value: WebpropertyTimeline = {
  events: [
    {
      extensions: {
        "key": "<value>",
        "key1": "<value>",
      },
      resource: {},
    },
  ],
  scannedTo: new Date("2024-04-23T22:33:06.648Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `events`                                                                                      | [components.WebTimelineEventAsset](../../models/components/webtimelineeventasset.md)[]        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scannedTo`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |