# SearchQueryResponse

## Example Usage

```typescript
import { SearchQueryResponse } from "censys-sdk-typescript/models/components";

let value: SearchQueryResponse = {
  hits: [
    {},
  ],
  nextPageToken: "<value>",
  previousPageToken: "<value>",
  queryDurationMillis: 434449,
  totalHits: 6984.95,
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