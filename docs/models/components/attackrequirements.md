# AttackRequirements

## Example Usage

```typescript
import { AttackRequirements } from "@censys/platform-sdk/models/components";

let value: AttackRequirements = "present";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "none" | "present" | Unrecognized<string>
```