# CtRecord

## Example Usage

```typescript
import { CtRecord } from "@censys/platform-sdk/models/components";

let value: CtRecord = {};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `addedToCtAt`                                                                                                        | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | An RFC-3339-formatted timestamp indicating when the certificate was entered into the CT log.                         |
| `ctToCensysAt`                                                                                                       | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | An RFC-3339-formated timestamp indicating when the certificate was ingested from the CT log into the Censys dataset. |
| `index`                                                                                                              | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | Numerical marker of the certificate's place in the CT log.                                                           |