# RiskSource

## Example Usage

```typescript
import { RiskSource } from "@censys/platform-sdk/models/components";

let value: RiskSource = "";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "censys" | "cve" | Unrecognized<string>
```