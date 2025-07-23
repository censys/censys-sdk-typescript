# SearchQueryInputBody

## Example Usage

```typescript
import { SearchQueryInputBody } from "@censys/platform-sdk/models/components";

let value: SearchQueryInputBody = {
  fields: [
    "host.ip",
  ],
  pageSize: 1,
  pageToken: "<next_page_token>",
  query: "host.services: (protocol=SSH and not port: 22)",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `fields`                                               | *string*[]                                             | :heavy_minus_sign:                                     | specify fields to return in response and ignore others | host.ip                                                |
| `pageSize`                                             | *number*                                               | :heavy_minus_sign:                                     | amount of results to return per page                   | 1                                                      |
| `pageToken`                                            | *string*                                               | :heavy_minus_sign:                                     | page token for the requested page of search results    | <next_page_token>                                      |
| `query`                                                | *string*                                               | :heavy_check_mark:                                     | CenQL query string to search upon                      | host.services: (protocol=SSH and not port: 22)         |