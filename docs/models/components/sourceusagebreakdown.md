# SourceUsageBreakdown

## Example Usage

```typescript
import { SourceUsageBreakdown } from "@censys/platform-sdk/models/components";

let value: SourceUsageBreakdown = {
  api: 329238,
  autoReplenishment: 142031,
  other: 832145,
  ui: 67574,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `api`                                                      | *number*                                                   | :heavy_check_mark:                                         | The amount of credits consumed through the Platform API.   |
| `autoReplenishment`                                        | *number*                                                   | :heavy_check_mark:                                         | The amount of credits consumed through auto-replenishment. |
| `other`                                                    | *number*                                                   | :heavy_check_mark:                                         | The amount of credits consumed through other operations.   |
| `ui`                                                       | *number*                                                   | :heavy_check_mark:                                         | The amount of credits consumed through the Platform UI.    |