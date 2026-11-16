# ListCollectionsResponseV1

## Example Usage

```typescript
import { ListCollectionsResponseV1 } from "@censys/platform-sdk/models/components";

let value: ListCollectionsResponseV1 = {
  collections: [
    {
      addedAssets24Hours: 220488,
      createTime: new Date("2024-02-08T06:29:28.344Z"),
      description: "scornful persecute that gee wetly innocently",
      id: "<id>",
      name: "<value>",
      privacy: "shared",
      query: "<value>",
      removedAssets24Hours: 964777,
      status: "populating",
      statusReason: "unspecified",
      totalAssets: 134415,
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