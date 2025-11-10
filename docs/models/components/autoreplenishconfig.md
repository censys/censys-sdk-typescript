# AutoReplenishConfig

## Example Usage

```typescript
import { AutoReplenishConfig } from "@censys/platform-sdk/models/components";

let value: AutoReplenishConfig = {
  enabled: false,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `amount`                                                                           | *number*                                                                           | :heavy_minus_sign:                                                                 | The amount of credits to replenish when auto-replenish is triggered.               |
| `enabled`                                                                          | *boolean*                                                                          | :heavy_check_mark:                                                                 | Whether the organization has auto-replenish enabled.                               |
| `threshold`                                                                        | *number*                                                                           | :heavy_minus_sign:                                                                 | The threshold at which the organization's credit balance will be auto-replenished. |