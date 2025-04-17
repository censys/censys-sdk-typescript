# Ldap

## Example Usage

```typescript
import { Ldap } from "censys-sdk-typescript/models/components";

let value: Ldap = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `allowsAnonymousBind`                                                  | *boolean*                                                              | :heavy_minus_sign:                                                     | Ability to connect with anonymous bind (empty username and password)   |
| `attributes`                                                           | [components.LdapAttribute](../../models/components/ldapattribute.md)[] | :heavy_minus_sign:                                                     | All root DN attributes available via anonymous bind                    |
| `resultCode`                                                           | *number*                                                               | :heavy_minus_sign:                                                     | Result or error code returned by LDAP instance upon bind               |