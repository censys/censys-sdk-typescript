# CrudCreateInputBodyPrivacy

Collection visibility. `private` collections are visible to their creator and organization admins. `shared` collections are also visible to all organization members. Only the creator and organization admins can edit a collection.

## Example Usage

```typescript
import { CrudCreateInputBodyPrivacy } from "@censys/platform-sdk/models/components";

let value: CrudCreateInputBodyPrivacy = "shared";
```

## Values

```typescript
"private" | "shared"
```