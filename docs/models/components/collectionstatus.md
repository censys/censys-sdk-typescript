# CollectionStatus

## Example Usage

```typescript
import { CollectionStatus } from "@censys/platform-sdk/models/components";

let value: CollectionStatus = "active";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"unspecified" | "populating" | "active" | "paused" | "archived" | Unrecognized<string>
```