# V3TagsCreateAssignmentResponse

## Example Usage

```typescript
import { V3TagsCreateAssignmentResponse } from "@censys/platform-sdk/models/operations";

let value: V3TagsCreateAssignmentResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {},
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `headers`                                                                                            | Record<string, *string*[]>                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `result`                                                                                             | [components.ResponseEnvelopeTagAssignment](../../models/components/responseenvelopetagassignment.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |