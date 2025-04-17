# IpmiCommandPayloadPackedNetFnNetFn

## Example Usage

```typescript
import { IpmiCommandPayloadPackedNetFnNetFn } from "censys-sdk-typescript/models/components";

let value: IpmiCommandPayloadPackedNetFnNetFn = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `isRequest`                                                                       | *boolean*                                                                         | :heavy_minus_sign:                                                                | True if the least-significant bit is zero                                         |
| `isResponse`                                                                      | *boolean*                                                                         | :heavy_minus_sign:                                                                | True if the least-significant bit is one                                          |
| `name`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | The human-readable name of the NetFn                                              |
| `raw`                                                                             | *number*                                                                          | :heavy_minus_sign:                                                                | The raw value of the NetFn (6 bits, least significant indicates request/response) |
| `value`                                                                           | *number*                                                                          | :heavy_minus_sign:                                                                | The normalized value of the NetFn (i.e. raw & 0xfe, so it is always even)         |