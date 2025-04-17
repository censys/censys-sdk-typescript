# Amqp

## Example Usage

```typescript
import { Amqp } from "censys-sdk-typescript/models/components";

let value: Amqp = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `explicitTls`                                                      | *boolean*                                                          | :heavy_minus_sign:                                                 | Connected via a TLS connection after initial handshake             |
| `implicitTls`                                                      | *boolean*                                                          | :heavy_minus_sign:                                                 | Connected via a TLS wrapped connection (AMQPS)                     |
| `protocolId`                                                       | [components.AmqpProtocol](../../models/components/amqpprotocol.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `version`                                                          | [components.AmqpVersion](../../models/components/amqpversion.md)   | :heavy_minus_sign:                                                 | N/A                                                                |