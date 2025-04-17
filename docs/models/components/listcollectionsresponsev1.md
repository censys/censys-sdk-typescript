# ListCollectionsResponseV1

## Example Usage

```typescript
import { ListCollectionsResponseV1 } from "censys-sdk-typescript/models/components";

let value: ListCollectionsResponseV1 = {
  collections: [
    {
      addedAssets24Hours: 764202,
      createTime: new Date("2024-07-18T13:49:42.010Z"),
      description: "following lest arrogantly likable",
      id: "<id>",
      name: "<value>",
      query: "<value>",
      removedAssets24Hours: 441712,
      status: "paused",
      statusReason: "query_changed",
      totalAssets: 410811,
    },
  ],
  nextPageToken: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `collections`                                                    | [components.Collection](../../models/components/collection.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `nextPageToken`                                                  | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |