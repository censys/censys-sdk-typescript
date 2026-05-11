# V3TagsCreateTagResponse

## Example Usage

```typescript
import { V3TagsCreateTagResponse } from "@censys/platform-sdk/models/operations";

let value: V3TagsCreateTagResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [components.ResponseEnvelopeTag](../../models/components/responseenvelopetag.md) | :heavy_check_mark:                                                               | N/A                                                                              |