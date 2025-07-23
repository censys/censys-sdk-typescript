# KeyUsage

## Example Usage

```typescript
import { KeyUsage } from "@censys/platform-sdk/models/components";

let value: KeyUsage = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `certificateSign`                                                          | *boolean*                                                                  | :heavy_minus_sign:                                                         | Whether the keyCertSign bit is set.                                        |
| `contentCommitment`                                                        | *boolean*                                                                  | :heavy_minus_sign:                                                         | Whether the contentCommitment (formerly called nonRepudiation) bit is set. |
| `crlSign`                                                                  | *boolean*                                                                  | :heavy_minus_sign:                                                         | Whether the cRLSign bit is set.                                            |
| `dataEncipherment`                                                         | *boolean*                                                                  | :heavy_minus_sign:                                                         | Whether the dataEncipherment bit is set.                                   |
| `decipherOnly`                                                             | *boolean*                                                                  | :heavy_minus_sign:                                                         | Whether the decipherOnly bit is set.                                       |
| `digitalSignature`                                                         | *boolean*                                                                  | :heavy_minus_sign:                                                         | Whether the digitalSignature bit is set.                                   |
| `encipherOnly`                                                             | *boolean*                                                                  | :heavy_minus_sign:                                                         | Whether the encipherOnly bit is set.                                       |
| `keyAgreement`                                                             | *boolean*                                                                  | :heavy_minus_sign:                                                         | Whether the keyAgreement bit is set.                                       |
| `keyEncipherment`                                                          | *boolean*                                                                  | :heavy_minus_sign:                                                         | Whether the keyEncipherment bit is set.                                    |
| `value`                                                                    | *number*                                                                   | :heavy_minus_sign:                                                         | The integer value of the bitmask in the extension.                         |