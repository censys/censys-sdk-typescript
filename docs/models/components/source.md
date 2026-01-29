# Source

## Example Usage

```typescript
import { Source } from "@censys/platform-sdk/models/components";

let value: Source = "";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "censys" | "recog" | "wappalyzer" | "third_party" | "html_meta_extractor" | Unrecognized<string>
```