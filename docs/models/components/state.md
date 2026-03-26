# State

Current state of the job.

## Example Usage

```typescript
import { State } from "@censys/platform-sdk/models/components";

let value: State = "completed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"started" | "completed" | "failed" | "unknown" | Unrecognized<string>
```