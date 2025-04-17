# SearchQueryInputBody

## Example Usage

```typescript
import { SearchQueryInputBody } from "censys-sdk-typescript/models/components";

let value: SearchQueryInputBody = {
  query: "<value>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `fields`                                                | *string*[]                                              | :heavy_minus_sign:                                      | Specify fields to return in response and ignore others. |
| `pageSize`                                              | *number*                                                | :heavy_minus_sign:                                      | Amount of results to return per page.                   |
| `pageToken`                                             | *string*                                                | :heavy_minus_sign:                                      | Page token for the requested page of search results.    |
| `query`                                                 | *string*                                                | :heavy_check_mark:                                      | CenQL query string to search upon.                      |