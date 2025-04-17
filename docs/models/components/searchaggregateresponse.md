# SearchAggregateResponse

## Example Usage

```typescript
import { SearchAggregateResponse } from "censys-sdk-typescript/models/components";

let value: SearchAggregateResponse = {
  buckets: [
    {
      count: 616503,
      key: "<key>",
    },
  ],
  isMoreThanTotalHits: false,
  otherCount: 553921,
  queryDurationMillis: 121902,
  totalCount: 758580,
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