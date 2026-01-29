# Recovery

## Example Usage

```typescript
import { Recovery } from "@censys/platform-sdk/models/components";

let value: Recovery = "user";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "automatic" | "user" | "irrecoverable" | Unrecognized<string>
```