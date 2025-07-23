# IpmiCapabilitiesAuthStatus

## Example Usage

```typescript
import { IpmiCapabilitiesAuthStatus } from "@censys/platform-sdk/models/components";

let value: IpmiCapabilitiesAuthStatus = {};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `anonymousLoginEnabled`                      | *boolean*                                    | :heavy_minus_sign:                           | If true, the server allows anonymous login.  |
| `authEachMessage`                            | *boolean*                                    | :heavy_minus_sign:                           | If true, each message must be authenticated. |
| `hasAnonymousUsers`                          | *boolean*                                    | :heavy_minus_sign:                           | If true, the server has anonymous users.     |
| `hasNamedUsers`                              | *boolean*                                    | :heavy_minus_sign:                           | If true, the server supports named users.    |
| `twoKeyLoginRequired`                        | *boolean*                                    | :heavy_minus_sign:                           | The KG field.                                |
| `userAuthDisabled`                           | *boolean*                                    | :heavy_minus_sign:                           | If true, user authentication is disabled.    |