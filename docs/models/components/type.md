# Type

The certificate's type. Options include root, intermediate, or leaf.

## Example Usage

```typescript
import { Type } from "@censys/platform-sdk/models/components";

let value: Type = "";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"" | "root" | "intermediate" | "leaf" | Unrecognized<string>
```