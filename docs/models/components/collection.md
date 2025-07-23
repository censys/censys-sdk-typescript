# Collection

## Example Usage

```typescript
import { Collection } from "@censys/platform-sdk/models/components";

let value: Collection = {
  addedAssets24Hours: 181494,
  createTime: new Date("2025-07-05T23:46:21.884Z"),
  description:
    "yuck finally toward neglected where notwithstanding expansion whenever",
  id: "<id>",
  name: "<value>",
  query: "<value>",
  removedAssets24Hours: 501776,
  status: "archived",
  statusReason: "query_changed",
  totalAssets: 559084,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `addedAssets24Hours`                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `query`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `removedAssets24Hours`                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.CollectionStatus](../../models/components/collectionstatus.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `statusReason`                                                                                | [components.StatusReason](../../models/components/statusreason.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `totalAssets`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |