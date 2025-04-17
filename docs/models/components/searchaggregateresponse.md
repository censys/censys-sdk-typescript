# SearchAggregateResponse

## Example Usage

```typescript
import { SearchAggregateResponse } from "@censys/platform-sdk/models/components";

let value: SearchAggregateResponse = {
  buckets: [
    {
      count: 121902,
      key: "<key>",
    },
  ],
  isMoreThanTotalHits: false,
  otherCount: 174546,
  queryDurationMillis: 870736,
  totalCount: 698163,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `buckets`                                                                                              | [components.SearchAggregateResponseBucket](../../models/components/searchaggregateresponsebucket.md)[] | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `isMoreThanTotalHits`                                                                                  | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `otherCount`                                                                                           | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `queryDurationMillis`                                                                                  | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `totalCount`                                                                                           | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |