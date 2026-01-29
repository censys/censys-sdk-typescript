# OldStatus

## Example Usage

```typescript
import { OldStatus } from "@censys/platform-sdk/models/components";

let value: OldStatus = "archived";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"active" | "populating" | "paused" | "archived" | Unrecognized<string>
```