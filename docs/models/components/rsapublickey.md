# RsaPublicKey

## Example Usage

```typescript
import { RsaPublicKey } from "@censys/platform-sdk/models/components";

let value: RsaPublicKey = {};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `exponent`                                        | *number*                                          | :heavy_minus_sign:                                | The RSA key's public exponent (e).                |
| `length`                                          | *number*                                          | :heavy_minus_sign:                                | Bit-length of the RSA modulus.                    |
| `modulus`                                         | *string*                                          | :heavy_minus_sign:                                | The RSA key's modulus (n) in big-endian encoding. |