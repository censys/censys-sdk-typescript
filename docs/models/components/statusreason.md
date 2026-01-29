# StatusReason

## Example Usage

```typescript
import { StatusReason } from "@censys/platform-sdk/models/components";

let value: StatusReason = "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"unspecified" | "not_enough_credits" | "not_entitled" | "too_many_assets" | "manual" | "query_changed" | "initial" | Unrecognized<string>
```