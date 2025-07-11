# ListCollectionsResponseV1

## Example Usage

```typescript
import { ListCollectionsResponseV1 } from "censys-sdk-typescript/models/components";

let value: ListCollectionsResponseV1 = {
  collections: [
    {
      addedAssets24Hours: 220488,
      createTime: new Date("2023-02-08T06:29:28.344Z"),
      description: "scornful persecute that gee wetly innocently",
      id: "<id>",
      name: "<value>",
      query: "<value>",
      removedAssets24Hours: 804923,
      status: "archived",
      statusReason: "unspecified",
      totalAssets: 78699,
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