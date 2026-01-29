# RecordType

## Example Usage

```typescript
import { RecordType } from "@censys/platform-sdk/models/components";

let value: RecordType = "aaaa";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "a" | "aaaa" | Unrecognized<string>
```