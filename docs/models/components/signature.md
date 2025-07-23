# Signature

## Example Usage

```typescript
import { Signature } from "@censys/platform-sdk/models/components";

let value: Signature = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `selfSigned`                                                       | *boolean*                                                          | :heavy_minus_sign:                                                 | Whether the certificate was signed by its own key.                 |
| `signatureAlgorithm`                                               | [components.KeyAlgorithm](../../models/components/keyalgorithm.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `valid`                                                            | *boolean*                                                          | :heavy_minus_sign:                                                 | Whether the signature is valid.                                    |
| `value`                                                            | *string*                                                           | :heavy_minus_sign:                                                 | Contents of the signature.                                         |