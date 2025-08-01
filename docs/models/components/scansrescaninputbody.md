# ScansRescanInputBody

## Example Usage

```typescript
import { ScansRescanInputBody } from "@censys/platform-sdk/models/components";

let value: ScansRescanInputBody = {
  target: {
    serviceId: {
      ip: "8.8.8.8",
      port: 443,
      protocol: "HTTPS",
      transportProtocol: "udp",
    },
  },
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `target`                                | *components.ScansRescanInputBodyTarget* | :heavy_check_mark:                      | N/A                                     |