# VulnSeverity

## Example Usage

```typescript
import { VulnSeverity } from "@censys/platform-sdk/models/components";

let value: VulnSeverity = "medium";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "low" | "medium" | "high" | "critical" | Unrecognized<string>
```