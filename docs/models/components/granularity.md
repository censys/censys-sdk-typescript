# Granularity

The granularity of the report.

## Example Usage

```typescript
import { Granularity } from "@censys/platform-sdk/models/components";

let value: Granularity = "daily";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"daily" | "monthly" | Unrecognized<string>
```