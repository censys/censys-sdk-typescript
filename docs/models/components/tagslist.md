# TagsList

## Example Usage

```typescript
import { TagsList } from "@censys/platform-sdk/models/components";

let value: TagsList = {
  tags: [
    {
      createdAt: new Date("2024-07-28T04:50:17.533Z"),
      createdBy: "36f5ea2a-9195-42a2-92af-ff10884a0a2e",
      id: "8e012e5f-30bb-4e55-bf93-a260c86b9035",
      name: "<value>",
      privacy: "private",
      updatedAt: new Date("2026-06-25T14:27:01.803Z"),
    },
  ],
  totalSize: 408827,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `nextPageToken`                                                                     | *string*                                                                            | :heavy_minus_sign:                                                                  | Token to retrieve the next page of results. Omitted when there are no more results. |
| `tags`                                                                              | [components.Tag](../../models/components/tag.md)[]                                  | :heavy_check_mark:                                                                  | The list of tags.                                                                   |
| `totalSize`                                                                         | *number*                                                                            | :heavy_check_mark:                                                                  | Total number of tags visible to the caller in this organization.                    |