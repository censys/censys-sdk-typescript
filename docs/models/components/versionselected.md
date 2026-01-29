# VersionSelected

Certificate version v1(0), v2(1), v3(2).

## Example Usage

```typescript
import { VersionSelected } from "@censys/platform-sdk/models/components";

let value: VersionSelected = "dtlsv1_0";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "ss_lv_2" | "ss_lv_3" | "tlsv1_0" | "tlsv1_1" | "tlsv1_2" | "tlsv1_3" | "dtlsv1_0" | "dtlsv1_2" | "dtlsv1_3" | Unrecognized<string>
```