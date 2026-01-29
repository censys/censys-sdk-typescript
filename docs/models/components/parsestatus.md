# ParseStatus

## Example Usage

```typescript
import { ParseStatus } from "@censys/platform-sdk/models/components";

let value: ParseStatus = "success";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "success" | "fail" | "corrupted" | Unrecognized<string>
```