# Threat

## Example Usage

```typescript
import { Threat } from "censys-sdk-typescript/models/components";

let value: Threat = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `actors`                                                             | [components.ThreatActor](../../models/components/threatactor.md)[]   | :heavy_minus_sign:                                                   | N/A                                                                  |
| `confidence`                                                         | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `details`                                                            | [components.ThreatDetails](../../models/components/threatdetails.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `evidence`                                                           | [components.Evidence](../../models/components/evidence.md)[]         | :heavy_minus_sign:                                                   | N/A                                                                  |
| `id`                                                                 | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `malware`                                                            | [components.ThreatMalware](../../models/components/threatmalware.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `source`                                                             | [components.ThreatSource](../../models/components/threatsource.md)   | :heavy_minus_sign:                                                   | N/A                                                                  |
| `tactic`                                                             | *string*[]                                                           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `type`                                                               | *string*[]                                                           | :heavy_minus_sign:                                                   | N/A                                                                  |