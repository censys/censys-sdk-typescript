# OrganizationDetails

## Example Usage

```typescript
import { OrganizationDetails } from "@censys/platform-sdk/models/components";

let value: OrganizationDetails = {
  name: "<value>",
  uid: "59f6e220-e581-4216-bd86-b00c108761cb",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the organization was created.                                               |
| `memberCounts`                                                                                | [components.MemberCounts](../../models/components/membercounts.md)                            | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the organization.                                                                 |
| `preferences`                                                                                 | [components.OrganizationPreferences](../../models/components/organizationpreferences.md)      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `uid`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of a Censys organization.                                                              |