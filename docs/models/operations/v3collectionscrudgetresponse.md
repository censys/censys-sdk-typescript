# V3CollectionsCrudGetResponse

## Example Usage

```typescript
import { V3CollectionsCrudGetResponse } from "@censys/platform-sdk/models/operations";

let value: V3CollectionsCrudGetResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
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