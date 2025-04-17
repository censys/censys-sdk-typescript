# SearchAggregateInputBody

## Example Usage

```typescript
import { SearchAggregateInputBody } from "censys-sdk-typescript/models/components";

let value: SearchAggregateInputBody = {
  field: "<value>",
  numberOfBuckets: 57811,
  query: "<value>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `field`                                  | *string*                                 | :heavy_check_mark:                       | Specify field to aggregate by.           |
| `numberOfBuckets`                        | *number*                                 | :heavy_check_mark:                       | Number of buckets to split results into. |
| `query`                                  | *string*                                 | :heavy_check_mark:                       | CenQL query string to search upon.       |