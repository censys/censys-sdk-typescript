# SearchAggregateInputBody

## Example Usage

```typescript
import { SearchAggregateInputBody } from "censys-sdk-typescript/models/components";

let value: SearchAggregateInputBody = {
  field: "web.endpoints.http.html_title",
  numberOfBuckets: 100,
  query: "web: *",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `field`                                 | *string*                                | :heavy_check_mark:                      | field to aggregate by                   | web.endpoints.http.html_title           |
| `numberOfBuckets`                       | *number*                                | :heavy_check_mark:                      | number of buckets to split results into | 100                                     |
| `query`                                 | *string*                                | :heavy_check_mark:                      | CenQL query string to search upon       | web: *                                  |