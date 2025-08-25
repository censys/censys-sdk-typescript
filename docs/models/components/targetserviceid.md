# TargetServiceId

## Example Usage

```typescript
import { TargetServiceId } from "@censys/platform-sdk/models/components";

let value: TargetServiceId = {
  ip: "8.8.8.8",
  port: 443,
  protocol: "HTTP",
  transportProtocol: "udp",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `ip`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | IP address of service                                                                    | 8.8.8.8                                                                                  |
| `port`                                                                                   | *number*                                                                                 | :heavy_check_mark:                                                                       | Port number of service                                                                   | 443                                                                                      |
| `protocol`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | Name of service protocol                                                                 | HTTP                                                                                     |
| `transportProtocol`                                                                      | [components.TargetTransportProtocol](../../models/components/targettransportprotocol.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |