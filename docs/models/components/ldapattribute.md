# LdapAttribute

## Example Usage

```typescript
import { LdapAttribute } from "@censys/platform-sdk/models/components";

let value: LdapAttribute = {};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `name`                                    | *string*                                  | :heavy_minus_sign:                        | Name of the LDAP attribute in the root DN |
| `values`                                  | *string*[]                                | :heavy_minus_sign:                        | Values for the respective LDAP attribute  |