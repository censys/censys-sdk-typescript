# V3ThreathuntingScansDiscoveryResponse

## Example Usage

```typescript
import { V3ThreathuntingScansDiscoveryResponse } from "@censys/platform-sdk/models/operations";

let value: V3ThreathuntingScansDiscoveryResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {},
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `headers`                                                                                        | Record<string, *string*[]>                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `result`                                                                                         | [components.ResponseEnvelopeTrackedScan](../../models/components/responseenvelopetrackedscan.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |