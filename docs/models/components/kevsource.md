# KEVSource

The source checked to determine whether the CVE is in the KEV catalog.

## Example Usage

```typescript
import { KEVSource } from "@censys/platform-sdk/models/components";

let value: KEVSource = "cisa";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "cisa" | "third_party" | Unrecognized<string>
```