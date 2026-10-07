# MemberModuleRole

## Example Usage

```typescript
import { MemberModuleRole } from "@censys/platform-sdk/models/components";

let value: MemberModuleRole = {
  module: "<value>",
  moduleDisplayName: "<value>",
  role: "<value>",
  roleDisplayName: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `module`                                                       | *string*                                                       | :heavy_check_mark:                                             | The module identifier, for example platform-search.            |
| `moduleDisplayName`                                            | *string*                                                       | :heavy_check_mark:                                             | The display name of the module.                                |
| `role`                                                         | *string*                                                       | :heavy_check_mark:                                             | The role the user holds in the module, for example gs_analyst. |
| `roleDisplayName`                                              | *string*                                                       | :heavy_check_mark:                                             | The display name of the role.                                  |