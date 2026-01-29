# Safety

## Example Usage

```typescript
import { Safety } from "@censys/platform-sdk/models/components";

let value: Safety = "present";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "negligible" | "present" | Unrecognized<string>
```