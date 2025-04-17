# SnmpPhysical

## Example Usage

```typescript
import { SnmpPhysical } from "censys-sdk-typescript/models/components";

let value: SnmpPhysical = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `firmwareRev`                                        | *string*                                             | :heavy_minus_sign:                                   | 1.3.6.1.2.1.47.1.1.1.1.9 - Firmware revision string  |
| `hardwareRev`                                        | *string*                                             | :heavy_minus_sign:                                   | 1.3.6.1.2.1.47.1.1.1.1.8 - Hardware revision string  |
| `mfgName`                                            | *string*                                             | :heavy_minus_sign:                                   | 1.3.6.1.2.1.47.1.1.1.1.12 - Name of mfg              |
| `modelName`                                          | *string*                                             | :heavy_minus_sign:                                   | 1.3.6.1.2.1.47.1.1.1.1.13 - Model name of component  |
| `name`                                               | *string*                                             | :heavy_minus_sign:                                   | 1.3.6.1.2.1.47.1.1.1.1.7 - Entity name               |
| `serialNum`                                          | *string*                                             | :heavy_minus_sign:                                   | 1.3.6.1.2.1.47.1.1.1.1.11 - Serial number string     |
| `softwareRev`                                        | *string*                                             | :heavy_minus_sign:                                   | 1.3.6.1.2.1.47.1.1.1.1.10 - Software revision string |