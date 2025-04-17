# IpmiRMCPHeaderMessageClass

## Example Usage

```typescript
import { IpmiRMCPHeaderMessageClass } from "censys-sdk-typescript/models/components";

let value: IpmiRMCPHeaderMessageClass = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `class`                                                         | *number*                                                        | :heavy_minus_sign:                                              | Just the class part of the byte (lower 5 bits of raw)           |
| `isAck`                                                         | *boolean*                                                       | :heavy_minus_sign:                                              | True if the message is an acknowledgment to a previous message. |
| `name`                                                          | *string*                                                        | :heavy_minus_sign:                                              | The human-readable name of the message class                    |
| `raw`                                                           | *number*                                                        | :heavy_minus_sign:                                              | The raw message class byte.                                     |