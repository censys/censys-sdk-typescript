# One

Rescan of known service

## Example Usage

```typescript
import { One } from "@censys/platform-sdk/models/components";

let value: One = {
  serviceId: {
    ip: "8.8.8.8",
    port: 443,
    protocol: "HTTPS",
    transportProtocol: "udp",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `serviceId`                                                              | [components.TargetServiceId](../../models/components/targetserviceid.md) | :heavy_check_mark:                                                       | N/A                                                                      |