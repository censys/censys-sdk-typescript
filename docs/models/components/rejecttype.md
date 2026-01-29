# RejectType

## Example Usage

```typescript
import { RejectType } from "@censys/platform-sdk/models/components";

let value: RejectType = "username_in_use";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "wrong_version" | "invalid_username" | "wrong_user_pw" | "wrong_server_pw" | "username_in_use" | "server_full" | "no_certificate" | "authenticator_fail" | Unrecognized<string>
```