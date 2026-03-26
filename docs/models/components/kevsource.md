# KEVSource

The source checked to determine whether the CVE is in the KEV catalog.

## Example Usage

```typescript
import { KEVSource } from "@censys/platform-sdk/models/components";

let value: KEVSource = "cisa";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"" | "cisa" | "third_party" | Unrecognized<string>
```