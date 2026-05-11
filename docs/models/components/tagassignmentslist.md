# TagAssignmentsList

## Example Usage

```typescript
import { TagAssignmentsList } from "@censys/platform-sdk/models/components";

let value: TagAssignmentsList = {
  assignments: [],
  totalSize: 683652,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `assignments`                                                                       | [components.TagAssignment](../../models/components/tagassignment.md)[]              | :heavy_check_mark:                                                                  | The list of tag assignments.                                                        |
| `nextPageToken`                                                                     | *string*                                                                            | :heavy_minus_sign:                                                                  | Token to retrieve the next page of results. Omitted when there are no more results. |
| `totalSize`                                                                         | *number*                                                                            | :heavy_check_mark:                                                                  | Total number of assignments matching the filters.                                   |