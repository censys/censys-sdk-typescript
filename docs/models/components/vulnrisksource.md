# VulnRiskSource

## Example Usage

```typescript
import { VulnRiskSource } from "@censys/platform-sdk/models/components";

let value: VulnRiskSource = "censys";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "censys" | "cve" | Unrecognized<string>
```