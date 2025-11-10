# OrganizationPreferences

## Example Usage

```typescript
import { OrganizationPreferences } from "@censys/platform-sdk/models/components";

let value: OrganizationPreferences = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `aiOptIn`                                                            | *boolean*                                                            | :heavy_minus_sign:                                                   | Whether the organization has opted into AI features.                 |
| `aiTraining`                                                         | *boolean*                                                            | :heavy_minus_sign:                                                   | Whether the organization has opted into AI training.                 |
| `mfaRequired`                                                        | *boolean*                                                            | :heavy_minus_sign:                                                   | Whether the organization has opted into multi-factor authentication. |