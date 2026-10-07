# UpdateMemberRoleInputBody

## Example Usage

```typescript
import { UpdateMemberRoleInputBody } from "@censys/platform-sdk/models/components";

let value: UpdateMemberRoleInputBody = {
  roles: [
    "api_access",
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `roles`                                                | [components.Roles](../../models/components/roles.md)[] | :heavy_check_mark:                                     | The Platform-wide roles to assign to the user.         |