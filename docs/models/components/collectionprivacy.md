# CollectionPrivacy

Collection visibility. `private` collections are visible to their creator and organization admins. `shared` collections are also visible to all organization members. Only the creator and organization admins can edit a collection.

## Example Usage

```typescript
import { CollectionPrivacy } from "@censys/platform-sdk/models/components";

let value: CollectionPrivacy = "shared";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"private" | "shared" | Unrecognized<string>
```