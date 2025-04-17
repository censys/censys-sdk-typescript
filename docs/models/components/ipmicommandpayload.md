# IpmiCommandPayload

## Example Usage

```typescript
import { IpmiCommandPayload } from "censys-sdk-typescript/models/components";

let value: IpmiCommandPayload = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `checksumError`                                                                                          | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | This is set to true if the values of chk1 / chk2 do not match the command data                           |
| `data`                                                                                                   | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The raw data. On success, this should be the value of the GetAuthenticationCapabilities resopnse         |
| `ipmiCommandNumber`                                                                                      | [components.IpmiCommandPayloadCommandNumber](../../models/components/ipmicommandpayloadcommandnumber.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `networkFunctionCode`                                                                                    | [components.IpmiCommandPayloadPackedNetFn](../../models/components/ipmicommandpayloadpackednetfn.md)     | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `requestorSequenceNumber`                                                                                | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | The request sequence number.                                                                             |