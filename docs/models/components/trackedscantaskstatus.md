# TrackedScanTaskStatus

## Example Usage

```typescript
import { TrackedScanTaskStatus } from "@censys/platform-sdk/models/components";

let value: TrackedScanTaskStatus = "rejected";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"" | "scanning" | "scanned" | "rejected" | "timed_out" | "completed" | "ignored" | Unrecognized<string>
```