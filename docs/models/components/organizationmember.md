# OrganizationMember

## Example Usage

```typescript
import { OrganizationMember } from "@censys/platform-sdk/models/components";

let value: OrganizationMember = {
  email: "Noel_Wuckert@hotmail.com",
  firstName: "Fritz",
  lastName: "Purdy",
  roles: [],
  uid: "457d0711-2d7b-46fd-8eb6-570b825d998b",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the user was created.                                                       |
| `email`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | The email of the user.                                                                        |
| `firstLoginTime`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the user first logged in.                                                   |
| `firstName`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The first name of the user.                                                                   |
| `lastName`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | The last name of the user.                                                                    |
| `latestLoginTime`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the user last logged in.                                                    |
| `roles`                                                                                       | *string*[]                                                                                    | :heavy_check_mark:                                                                            | The roles this member has in the organization.                                                |
| `uid`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of a Censys user.                                                                      |