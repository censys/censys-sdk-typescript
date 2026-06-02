# CommentsList

## Example Usage

```typescript
import { CommentsList } from "@censys/platform-sdk/models/components";

let value: CommentsList = {
  comments: [],
  totalSize: 186249,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `comments`                                                                          | [components.Comment](../../models/components/comment.md)[]                          | :heavy_check_mark:                                                                  | The list of comments.                                                               |
| `nextPageToken`                                                                     | *string*                                                                            | :heavy_minus_sign:                                                                  | Token to retrieve the next page of results. Omitted when there are no more results. |
| `totalSize`                                                                         | *number*                                                                            | :heavy_check_mark:                                                                  | Total number of comments matching the filters.                                      |