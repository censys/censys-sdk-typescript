# PaginationInfo

## Example Usage

```typescript
import { PaginationInfo } from "@censys/platform-sdk/models/components";

let value: PaginationInfo = {
  pageSize: 593004,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `nextPageToken`                                        | *string*                                               | :heavy_minus_sign:                                     | The token to use to retrieve the next page of results. |
| `pageSize`                                             | *number*                                               | :heavy_check_mark:                                     | The number of results requested per page.              |