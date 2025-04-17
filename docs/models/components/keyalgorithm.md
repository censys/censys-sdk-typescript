# KeyAlgorithm

## Example Usage

```typescript
import { KeyAlgorithm } from "@censys/platform-sdk/models/components";

let value: KeyAlgorithm = {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                    | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Name of public key type, such as RSA or ECDSA. Information specific to the key type is available in the named sub-record. |
| `oid`                                                                                                                     | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |