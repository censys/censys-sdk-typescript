# IpmiSessionHeader

## Example Usage

```typescript
import { IpmiSessionHeader } from "@censys/platform-sdk/models/components";

let value: IpmiSessionHeader = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `authCode`                                                                                   | *string*                                                                                     | :heavy_minus_sign:                                                                           | The 16-byte authentication code; not present if auth_type is None.                           |
| `authType`                                                                                   | [components.IpmiSessionHeaderAuthType](../../models/components/ipmisessionheaderauthtype.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `sessionId`                                                                                  | *number*                                                                                     | :heavy_minus_sign:                                                                           | The ID of this sessiod.                                                                      |
| `sessionSequenceNumber`                                                                      | *number*                                                                                     | :heavy_minus_sign:                                                                           | The session sequence number of this packet in the session                                    |