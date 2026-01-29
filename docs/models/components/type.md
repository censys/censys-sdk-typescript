# Type

The certificate's type. Options include root, intermediate, or leaf.

## Example Usage

```typescript
import { Type } from "@censys/platform-sdk/models/components";

let value: Type = "";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "root" | "intermediate" | "leaf" | Unrecognized<string>
```