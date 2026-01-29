# Severity

## Example Usage

```typescript
import { Severity } from "@censys/platform-sdk/models/components";

let value: Severity = "critical";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "low" | "medium" | "high" | "critical" | Unrecognized<string>
```