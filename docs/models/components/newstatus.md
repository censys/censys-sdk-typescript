# NewStatus

## Example Usage

```typescript
import { NewStatus } from "@censys/platform-sdk/models/components";

let value: NewStatus = "active";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"active" | "populating" | "paused" | "archived" | Unrecognized<string>
```