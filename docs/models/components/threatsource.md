# ThreatSource

## Example Usage

```typescript
import { ThreatSource } from "@censys/platform-sdk/models/components";

let value: ThreatSource = "third_party";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "censys" | "recog" | "wappalyzer" | "third_party" | "html_meta_extractor" | Unrecognized<string>
```