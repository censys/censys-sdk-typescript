# HostObservationResponse

## Example Usage

```typescript
import { HostObservationResponse } from "@censys/platform-sdk/models/components";

let value: HostObservationResponse = {
  ranges: [
    {
      endTime: new Date("2024-04-12T04:26:55.576Z"),
      ip: "144.9.125.76",
      port: 832378,
      protocols: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      startTime: new Date("2023-06-26T06:13:17.102Z"),
      transportProtocol: "<value>",
    },
  ],
  totalResults: 583787,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `nextPageToken`                                                                      | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `ranges`                                                                             | [components.HostObservationRange](../../models/components/hostobservationrange.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `totalResults`                                                                       | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |