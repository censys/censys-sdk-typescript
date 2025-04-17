# SnmpSystemServices

## Example Usage

```typescript
import { SnmpSystemServices } from "@censys/platform-sdk/models/components";

let value: SnmpSystemServices = {};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `layer1`                           | *boolean*                          | :heavy_minus_sign:                 | Physical (e.g. repeaters)          |
| `layer2`                           | *boolean*                          | :heavy_minus_sign:                 | Datalink/subnetwork (e.g. bridges) |
| `layer3`                           | *boolean*                          | :heavy_minus_sign:                 | Internet (e.g. IP gateways)        |
| `layer4`                           | *boolean*                          | :heavy_minus_sign:                 | End-to-end (e.g. IP hosts)         |
| `layer5`                           | *boolean*                          | :heavy_minus_sign:                 | OSI layer 5                        |
| `layer6`                           | *boolean*                          | :heavy_minus_sign:                 | OSI layer 6                        |
| `layer7`                           | *boolean*                          | :heavy_minus_sign:                 | Applications (e.g. mail relays)    |