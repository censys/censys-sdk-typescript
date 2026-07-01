# TagOperationStatus

The current status of the operation.

## Example Usage

```typescript
import { TagOperationStatus } from "@censys/platform-sdk/models/components";

let value: TagOperationStatus = "running";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "running" | "succeeded" | "limit_reached" | "failed" | "cancelled" | Unrecognized<string>
```