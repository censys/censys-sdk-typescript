# CertificateAsset

## Example Usage

```typescript
import { CertificateAsset } from "censys-sdk-typescript/models/components";

let value: CertificateAsset = {
  extensions: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  resource: {},
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `extensions`                                                     | Record<string, *any*>                                            | :heavy_check_mark:                                               | N/A                                                              |
| `resource`                                                       | [components.Certificate](../../models/components/certificate.md) | :heavy_check_mark:                                               | N/A                                                              |