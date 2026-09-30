# CreatedInvestigationJobState

The current state of the investigation. Completed means the investigation succeeded, not that its results are still available to download, and unknown means only that this API is older than the state the service reported.

## Example Usage

```typescript
import { CreatedInvestigationJobState } from "@censys/platform-sdk/models/components";

let value: CreatedInvestigationJobState = "completed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"started" | "completed" | "failed" | "unknown" | Unrecognized<string>
```