# V3AccountmanagementMemberCreditsUsageResponse

## Example Usage

```typescript
import { V3AccountmanagementMemberCreditsUsageResponse } from "@censys/platform-sdk/models/operations";

let value: V3AccountmanagementMemberCreditsUsageResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {},
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                    | Record<string, *string*[]>                                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `result`                                                                                                     | [components.ResponseEnvelopeCreditUsageReport](../../models/components/responseenvelopecreditusagereport.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |