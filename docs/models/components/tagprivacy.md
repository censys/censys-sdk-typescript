# TagPrivacy

Tag visibility and management settings. `private` tags are only visible to and editable by organization admins. `shared` tags are visible to and editable by all organization members.

## Example Usage

```typescript
import { TagPrivacy } from "@censys/platform-sdk/models/components";

let value: TagPrivacy = "private";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"private" | "shared" | Unrecognized<string>
```