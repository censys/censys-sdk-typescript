# ProviderUrgency

## Example Usage

```typescript
import { ProviderUrgency } from "@censys/platform-sdk/models/components";

let value: ProviderUrgency = "clear";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "clear" | "green" | "amber" | "red" | Unrecognized<string>
```