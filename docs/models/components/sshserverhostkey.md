# SshServerHostKey

## Example Usage

```typescript
import { SshServerHostKey } from "@censys/platform-sdk/models/components";

let value: SshServerHostKey = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `certkeyPublicKey`                                                                       | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `dsaPublicKey`                                                                           | [components.DSACryptographicKey](../../models/components/dsacryptographickey.md)         | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `ecdsaPublicKey`                                                                         | [components.ECDSACryptographicKey](../../models/components/ecdsacryptographickey.md)     | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `ed25519PublicKey`                                                                       | [components.Ed25519CryptographicKey](../../models/components/ed25519cryptographickey.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `fingerprintSha256`                                                                      | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `rsaPublicKey`                                                                           | [components.RSACryptographicKey](../../models/components/rsacryptographickey.md)         | :heavy_minus_sign:                                                                       | N/A                                                                                      |