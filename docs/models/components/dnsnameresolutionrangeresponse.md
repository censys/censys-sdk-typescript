# DnsNameResolutionRangeResponse

## Example Usage

```typescript
import { DnsNameResolutionRangeResponse } from "@censys/platform-sdk/models/components";

let value: DnsNameResolutionRangeResponse = {
  name: "<value>",
  nextPageToken: "<value>",
  records: [],
  totalRecords: 113775,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | The domain name that was queried.                                                            |
| `nextPageToken`                                                                              | *string*                                                                                     | :heavy_check_mark:                                                                           | A token that can be used to retrieve the next page of records.                               |
| `records`                                                                                    | [components.DnsResolutionRangeRecord](../../models/components/dnsresolutionrangerecord.md)[] | :heavy_check_mark:                                                                           | The list of DNS observation windows.                                                         |
| `totalRecords`                                                                               | *number*                                                                                     | :heavy_check_mark:                                                                           | The number of records that exist in total across all pages.                                  |