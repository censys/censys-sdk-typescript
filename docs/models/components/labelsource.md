# LabelSource

## Example Usage

```typescript
import { LabelSource } from "@censys/platform-sdk/models/components";

let value: LabelSource = "recog";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "censys" | "recog" | "wappalyzer" | "third_party" | "html_meta_extractor" | Unrecognized<string>
```