# Targets

## Example Usage

```typescript
import { Targets } from "@censys/platform-sdk/models/components";

let value: Targets = "cert";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"host" | "web" | "cert" | "unknown" | Unrecognized<string>
```