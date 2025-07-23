# V3CollectionsCrudUpdateResponse

## Example Usage

```typescript
import { V3CollectionsCrudUpdateResponse } from "@censys/platform-sdk/models/operations";

let value: V3CollectionsCrudUpdateResponse = {
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

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `headers`                                                                                      | Record<string, *string*[]>                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `result`                                                                                       | [components.ResponseEnvelopeCollection](../../models/components/responseenvelopecollection.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |