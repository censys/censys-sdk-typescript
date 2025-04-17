# IpmiSessionHeaderAuthType

## Example Usage

```typescript
import { IpmiSessionHeaderAuthType } from "censys-sdk-typescript/models/components";

let value: IpmiSessionHeaderAuthType = {};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `name`                                     | *string*                                   | :heavy_minus_sign:                         | The raw value of the auth_type             |
| `raw`                                      | *number*                                   | :heavy_minus_sign:                         | The raw value of the auth_type             |
| `type`                                     | *number*                                   | :heavy_minus_sign:                         | Just the auth type (reserved bits omitted) |