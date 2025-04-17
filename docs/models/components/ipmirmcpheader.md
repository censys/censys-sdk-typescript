# IpmiRMCPHeader

## Example Usage

```typescript
import { IpmiRMCPHeader } from "@censys/platform-sdk/models/components";

let value: IpmiRMCPHeader = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `messageClass`                                                                                 | [components.IpmiRMCPHeaderMessageClass](../../models/components/ipmirmcpheadermessageclass.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `sequenceNumber`                                                                               | *number*                                                                                       | :heavy_minus_sign:                                                                             | Sequence number of this packet in the session.                                                 |
| `version`                                                                                      | *number*                                                                                       | :heavy_minus_sign:                                                                             | The version. This scanner supports version 6.                                                  |