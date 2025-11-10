# MemberCounts

## Example Usage

```typescript
import { MemberCounts } from "@censys/platform-sdk/models/components";

let value: MemberCounts = {
  byRole: {},
  total: 575904,
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `byRole`                                                        | [components.ByRole](../../models/components/byrole.md)          | :heavy_check_mark:                                              | The number of members users in the organization, split by role. |
| `total`                                                         | *number*                                                        | :heavy_check_mark:                                              | The total number of members users in the organization.          |