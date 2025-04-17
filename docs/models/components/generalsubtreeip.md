# GeneralSubtreeIp

## Example Usage

```typescript
import { GeneralSubtreeIp } from "@censys/platform-sdk/models/components";

let value: GeneralSubtreeIp = {};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `begin`                            | *string*                           | :heavy_minus_sign:                 | The first IP address in the range. |
| `cidr`                             | *string*                           | :heavy_minus_sign:                 | The CIDR specifying the subtree.   |
| `end`                              | *string*                           | :heavy_minus_sign:                 | The last IP address in the range.  |
| `mask`                             | *string*                           | :heavy_minus_sign:                 | The subnet mask of the CIDR.       |