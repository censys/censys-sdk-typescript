# IpmiCapabilitiesSupportedAuthTypes

## Example Usage

```typescript
import { IpmiCapabilitiesSupportedAuthTypes } from "censys-sdk-typescript/models/components";

let value: IpmiCapabilitiesSupportedAuthTypes = {};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `extended`                                        | *boolean*                                         | :heavy_minus_sign:                                | If true, the extended capabilities are present.   |
| `md2`                                             | *boolean*                                         | :heavy_minus_sign:                                | True if the MD2 AuthType is supported.            |
| `md5`                                             | *boolean*                                         | :heavy_minus_sign:                                | True if the MD5 AuthType is supported.            |
| `none`                                            | *boolean*                                         | :heavy_minus_sign:                                | True if the None AuthType is supported.           |
| `oemProprietary`                                  | *boolean*                                         | :heavy_minus_sign:                                | True if the OEM Proprietary AuthType is supported |
| `password`                                        | *boolean*                                         | :heavy_minus_sign:                                | True if the Password AuthType is supported.       |
| `raw`                                             | *number*                                          | :heavy_minus_sign:                                | The raw byte, with the bit mask etc               |