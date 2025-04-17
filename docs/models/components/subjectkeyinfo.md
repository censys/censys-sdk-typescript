# SubjectKeyInfo

## Example Usage

```typescript
import { SubjectKeyInfo } from "censys-sdk-typescript/models/components";

let value: SubjectKeyInfo = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `dsa`                                                                                | [components.DsaPublicKey](../../models/components/dsapublickey.md)                   | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `ecdsa`                                                                              | [components.EcdsaPublicKey](../../models/components/ecdsapublickey.md)               | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `fingerprintSha256`                                                                  | *string*                                                                             | :heavy_minus_sign:                                                                   | The SHA-256 digest of the certificate's DER-encoded SubjectPublicKeyInfo.            |
| `keyAlgorithm`                                                                       | [components.KeyAlgorithm](../../models/components/keyalgorithm.md)                   | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `rsa`                                                                                | [components.RsaPublicKey](../../models/components/rsapublickey.md)                   | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `unrecognized`                                                                       | [components.UnrecognizedPublicKey](../../models/components/unrecognizedpublickey.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |