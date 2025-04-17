# BasicConstraints

## Example Usage

```typescript
import { BasicConstraints } from "censys-sdk-typescript/models/components";

let value: BasicConstraints = {};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `isCa`                                                                                                                                   | *boolean*                                                                                                                                | :heavy_minus_sign:                                                                                                                       | Whether the certificate is permitted to sign other certificates.                                                                         |
| `maxPathLen`                                                                                                                             | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | When present, provides the maximum number of intermediate certificates that may follow this certificate in a trusted certification path. |