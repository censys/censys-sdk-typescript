# IpmiCommandPayloadPackedNetFn

## Example Usage

```typescript
import { IpmiCommandPayloadPackedNetFn } from "@censys/platform-sdk/models/components";

let value: IpmiCommandPayloadPackedNetFn = {};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `logicalUnitNumber`                                                                                                                    | [components.IpmiCommandPayloadPackedNetFnLogicalUnitNumber](../../models/components/ipmicommandpayloadpackednetfnlogicalunitnumber.md) | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `netFn`                                                                                                                                | [components.IpmiCommandPayloadPackedNetFnNetFn](../../models/components/ipmicommandpayloadpackednetfnnetfn.md)                         | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `raw`                                                                                                                                  | *number*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | The raw value of the (NetFn << 2) \| LUN                                                                                               |