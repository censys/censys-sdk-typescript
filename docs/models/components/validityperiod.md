# ValidityPeriod

## Example Usage

```typescript
import { ValidityPeriod } from "@censys/platform-sdk/models/components";

let value: ValidityPeriod = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `lengthSeconds`                                                                 | *number*                                                                        | :heavy_minus_sign:                                                              | The duration of the certificate's validity period, in seconds.                  |
| `notAfter`                                                                      | *string*                                                                        | :heavy_minus_sign:                                                              | An RFC-3339-formatted timestamp after which the certificate is no longer valid. |
| `notBefore`                                                                     | *string*                                                                        | :heavy_minus_sign:                                                              | An RFC-3339-formatted timestamp before which the certificate is not valid.      |