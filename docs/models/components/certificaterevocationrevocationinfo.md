# CertificateRevocationRevocationInfo

## Example Usage

```typescript
import { CertificateRevocationRevocationInfo } from "censys-sdk-typescript/models/components";

let value: CertificateRevocationRevocationInfo = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `nextUpdate`                                                                   | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `reason`                                                                       | [components.Reason](../../models/components/reason.md)                         | :heavy_minus_sign:                                                             | An enumerated value indicating the issuer-supplied reason for the revocation.  |
| `revocationTime`                                                               | *string*                                                                       | :heavy_minus_sign:                                                             | The issuer-supplied timestamp indicating when the certificate was revoked.     |
| `revoked`                                                                      | *boolean*                                                                      | :heavy_minus_sign:                                                             | Whether the certificate has been revoked before its expiry date by the issuer. |