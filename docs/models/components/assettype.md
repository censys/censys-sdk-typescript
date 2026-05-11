# AssetType

The inferred type of the asset.

## Example Usage

```typescript
import { AssetType } from "@censys/platform-sdk/models/components";

let value: AssetType = "host";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"host" | "certificate" | "web_property" | Unrecognized<string>
```