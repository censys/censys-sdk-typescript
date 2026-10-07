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

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `byRole`                                                              | [components.ByRole](../../models/components/byrole.md)                | :heavy_check_mark:                                                    | The number of users in the organization, split by Platform-wide role. |
| `total`                                                               | *number*                                                              | :heavy_check_mark:                                                    | The total number of users in the organization.                        |