# V3TagsListAssignmentsResponse

## Example Usage

```typescript
import { V3TagsListAssignmentsResponse } from "@censys/platform-sdk/models/operations";

let value: V3TagsListAssignmentsResponse = {
  headers: {
    "key": [
      "<value 1>",
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

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                      | Record<string, *string*[]>                                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `result`                                                                                                       | [components.ResponseEnvelopeTagAssignmentsList](../../models/components/responseenvelopetagassignmentslist.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |