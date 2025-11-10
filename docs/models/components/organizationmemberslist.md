# OrganizationMembersList

## Example Usage

```typescript
import { OrganizationMembersList } from "@censys/platform-sdk/models/components";

let value: OrganizationMembersList = {
  members: [],
  pagination: {
    pageSize: 832076,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `members`                                                                        | [components.OrganizationMember](../../models/components/organizationmember.md)[] | :heavy_check_mark:                                                               | The list of members in the organization.                                         |
| `pagination`                                                                     | [components.PaginationInfo](../../models/components/paginationinfo.md)           | :heavy_check_mark:                                                               | N/A                                                                              |