# SearchQueryResponse

## Example Usage

```typescript
import { SearchQueryResponse } from "@censys/platform-sdk/models/components";

let value: SearchQueryResponse = {
  hits: [
    {},
  ],
  nextPageToken: "<value>",
  previousPageToken: "<value>",
  queryDurationMillis: 132259,
  totalHits: 2796.22,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `hits`                                                                   | [components.SearchQueryHit](../../models/components/searchqueryhit.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `nextPageToken`                                                          | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `previousPageToken`                                                      | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `queryDurationMillis`                                                    | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `totalHits`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |