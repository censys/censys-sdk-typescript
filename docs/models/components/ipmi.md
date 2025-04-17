# Ipmi

## Example Usage

```typescript
import { Ipmi } from "censys-sdk-typescript/models/components";

let value: Ipmi = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `capabilities`                                                                 | [components.IpmiCapabilities](../../models/components/ipmicapabilities.md)     | :heavy_minus_sign:                                                             | N/A                                                                            |
| `commandPayload`                                                               | [components.IpmiCommandPayload](../../models/components/ipmicommandpayload.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `raw`                                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | The raw data returned by the server                                            |
| `rmcpHeader`                                                                   | [components.IpmiRMCPHeader](../../models/components/ipmirmcpheader.md)         | :heavy_minus_sign:                                                             | N/A                                                                            |
| `sessionHeader`                                                                | [components.IpmiSessionHeader](../../models/components/ipmisessionheader.md)   | :heavy_minus_sign:                                                             | N/A                                                                            |