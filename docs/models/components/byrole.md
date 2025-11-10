# ByRole

The number of members users in the organization, split by role.

## Example Usage

```typescript
import { ByRole } from "@censys/platform-sdk/models/components";

let value: ByRole = {};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `admin`                                       | *number*                                      | :heavy_minus_sign:                            | The number of users with the admin role.      |
| `apiAccess`                                   | *number*                                      | :heavy_minus_sign:                            | The number of users with the API access role. |