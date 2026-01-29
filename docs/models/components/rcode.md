# RCode

A enumerated field indicating the result of the request. The most common values are defined in RFC 1035.

## Example Usage

```typescript
import { RCode } from "@censys/platform-sdk/models/components";

let value: RCode = "bad_cookie";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "success" | "format_error" | "server_failure" | "name_error" | "not_implemented" | "refused" | "yx_domain" | "yx_rrset" | "nx_rrset" | "not_auth" | "not_zone" | "bad_sig" | "bad_key" | "bad_time" | "bad_mode" | "bad_name" | "bad_alg" | "bad_trunc" | "bad_cookie" | Unrecognized<string>
```