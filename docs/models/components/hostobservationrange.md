# HostObservationRange

## Example Usage

```typescript
import { HostObservationRange } from "@censys/platform-sdk/models/components";

let value: HostObservationRange = {
  endTime: new Date("2025-09-07T11:35:49.699Z"),
  ip: "192.212.58.199",
  port: 900685,
  protocols: [],
  startTime: new Date("2024-11-09T19:39:08.911Z"),
  transportProtocol: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `ip`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `port`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `protocols`                                                                                   | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `transportProtocol`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |