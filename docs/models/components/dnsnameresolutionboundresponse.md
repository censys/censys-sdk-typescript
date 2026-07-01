# DnsNameResolutionBoundResponse

## Example Usage

```typescript
import { DnsNameResolutionBoundResponse } from "@censys/platform-sdk/models/components";

let value: DnsNameResolutionBoundResponse = {
  name: "<value>",
  nextPageToken: "<value>",
  records: [],
  totalRecords: 314913,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | The domain name that was queried.                                                  |
| `nextPageToken`                                                                    | *string*                                                                           | :heavy_check_mark:                                                                 | A token that can be used to retrieve the next page of records.                     |
| `records`                                                                          | [components.DnsResolutionRecord](../../models/components/dnsresolutionrecord.md)[] | :heavy_check_mark:                                                                 | The list of DNS records.                                                           |
| `totalRecords`                                                                     | *number*                                                                           | :heavy_check_mark:                                                                 | The number of records that exist in total across all pages.                        |