# OracleDescriptor

## Example Usage

```typescript
import { OracleDescriptor } from "@censys/platform-sdk/models/components";

let value: OracleDescriptor = {};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                     | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The dot-delimited path to the parsed value from the error received when the initial handshake is refused. |
| `value`                                                                                                   | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The parsed value from the error received when the initial handshake is refused.                           |