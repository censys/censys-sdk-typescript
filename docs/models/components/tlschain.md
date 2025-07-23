# TlsChain

## Example Usage

```typescript
import { TlsChain } from "@censys/platform-sdk/models/components";

let value: TlsChain = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `fingerprintSha256`                                                          | *string*                                                                     | :heavy_minus_sign:                                                           | SHA 256 fingerprint of the certificate in the certificate chain.             |
| `issuerDn`                                                                   | *string*                                                                     | :heavy_minus_sign:                                                           | Distinguished name of the entity that has signed and issued the certificate. |
| `subjectDn`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | Distinguished name of the entity that the certificate belongs to.            |