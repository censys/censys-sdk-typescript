# V3AccountmanagementUserCreditsResponse

## Example Usage

```typescript
import { V3AccountmanagementUserCreditsResponse } from "@censys/platform-sdk/models/operations";

let value: V3AccountmanagementUserCreditsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {},
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `headers`                                                                                        | Record<string, *string*[]>                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `result`                                                                                         | [components.ResponseEnvelopeUserCredits](../../models/components/responseenvelopeusercredits.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |