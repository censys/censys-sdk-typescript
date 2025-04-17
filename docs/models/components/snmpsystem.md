# SnmpSystem

## Example Usage

```typescript
import { SnmpSystem } from "@censys/platform-sdk/models/components";

let value: SnmpSystem = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `contact`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | 1.3.6.1.2.1.1.4 - Contact info                                                 |
| `desc`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | 1.3.6.1.2.1.1.1 - Description of entity                                        |
| `initTime`                                                                     | *number*                                                                       | :heavy_minus_sign:                                                             | 1.3.6.1.2.1.1.3 - 1/100ths of sec                                              |
| `location`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | 1.3.6.1.2.1.1.6 - Physical location                                            |
| `name`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | 1.3.6.1.2.1.1.5 - Name, usually FQDN                                           |
| `objectId`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | 1.3.6.1.2.1.1.2 - Vendor ID                                                    |
| `services`                                                                     | [components.SnmpSystemServices](../../models/components/snmpsystemservices.md) | :heavy_minus_sign:                                                             | N/A                                                                            |