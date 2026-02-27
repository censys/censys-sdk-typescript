# ServiceOnHostRange

## Example Usage

```typescript
import { ServiceOnHostRange } from "@censys/platform-sdk/models/components";

let value: ServiceOnHostRange = {
  endTime: new Date("2024-06-19T18:17:35.281Z"),
  ip: "236.141.100.161",
  port: "<value>",
  protocol: "<value>",
  startTime: new Date("2026-07-12T13:47:56.933Z"),
  transportProtocol: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the service was last observed                                                            |
| `ip`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | IP address where the service was observed                                                     |
| `port`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Port number where the service was observed                                                    |
| `protocol`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | Application protocol (e.g., HTTP, HTTPS)                                                      |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the service was first observed                                                           |
| `transportProtocol`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | Transport protocol (e.g., TCP, UDP, QUIC)                                                     |