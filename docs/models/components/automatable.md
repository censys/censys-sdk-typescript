# Automatable

## Example Usage

```typescript
import { Automatable } from "@censys/platform-sdk/models/components";

let value: Automatable = "no";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "no" | "yes" | Unrecognized<string>
```