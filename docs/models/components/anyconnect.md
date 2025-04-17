# AnyConnect

## Example Usage

```typescript
import { AnyConnect } from "censys-sdk-typescript/models/components";

let value: AnyConnect = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `aggregateAuthVersion`                                                           | *number*                                                                         | :heavy_minus_sign:                                                               | Version number indicated by the response for config-auth exchange                |
| `authMethods`                                                                    | *string*[]                                                                       | :heavy_minus_sign:                                                               | Supported methods for users to enter credentials for this VPN                    |
| `groups`                                                                         | *string*[]                                                                       | :heavy_minus_sign:                                                               | List of groups a user can authenticate with to use this VPN                      |
| `raw`                                                                            | *string*                                                                         | :heavy_minus_sign:                                                               | XML content of the config-auth response                                          |
| `responseType`                                                                   | *string*                                                                         | :heavy_minus_sign:                                                               | Type of the response packet received after initializing the config-auth exchange |