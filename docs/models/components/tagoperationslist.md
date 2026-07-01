# TagOperationsList

## Example Usage

```typescript
import { TagOperationsList } from "@censys/platform-sdk/models/components";

let value: TagOperationsList = {
  operations: [],
  totalSize: 91611,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `nextPageToken`                                                                     | *string*                                                                            | :heavy_minus_sign:                                                                  | Token to retrieve the next page of results. Omitted when there are no more results. |
| `operations`                                                                        | [components.TagOperation](../../models/components/tagoperation.md)[]                | :heavy_check_mark:                                                                  | The list of tag operations.                                                         |
| `totalSize`                                                                         | *number*                                                                            | :heavy_check_mark:                                                                  | Total number of operations matching the filters.                                    |