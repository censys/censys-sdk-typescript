# ChangeType

## Example Usage

```typescript
import { ChangeType } from "@censys/platform-sdk/models/components";

let value: ChangeType = "removed";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"added" | "removed" | Unrecognized<string>
```