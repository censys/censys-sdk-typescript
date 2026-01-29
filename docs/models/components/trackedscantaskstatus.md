# TrackedScanTaskStatus

## Example Usage

```typescript
import { TrackedScanTaskStatus } from "@censys/platform-sdk/models/components";

let value: TrackedScanTaskStatus = "rejected";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "scanning" | "scanned" | "rejected" | "timed_out" | "completed" | "ignored" | Unrecognized<string>
```