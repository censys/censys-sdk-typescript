# Risk

## Example Usage

```typescript
import { Risk } from "censys-sdk-typescript/models/components";

let value: Risk = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `confidence`                                                     | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `cvss`                                                           | [components.Cvss](../../models/components/cvss.md)               | :heavy_minus_sign:                                               | N/A                                                              |
| `evidence`                                                       | [components.Evidence](../../models/components/evidence.md)[]     | :heavy_minus_sign:                                               | N/A                                                              |
| `id`                                                             | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `metrics`                                                        | [components.Metrics](../../models/components/metrics.md)         | :heavy_minus_sign:                                               | N/A                                                              |
| `riskSource`                                                     | [components.RiskSource](../../models/components/risksource.md)   | :heavy_minus_sign:                                               | N/A                                                              |
| `severity`                                                       | [components.Severity](../../models/components/severity.md)       | :heavy_minus_sign:                                               | N/A                                                              |
| `source`                                                         | [components.RiskSource1](../../models/components/risksource1.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `year`                                                           | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |