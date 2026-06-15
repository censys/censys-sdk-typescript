# DnsIpResolutionRangeResponse

## Example Usage

```typescript
import { DnsIpResolutionRangeResponse } from "@censys/platform-sdk/models/components";

let value: DnsIpResolutionRangeResponse = {
  ip: "68e7:ed82:db3c:66cc:babb:b0bd:c3f2:4212",
  nextPageToken: "<value>",
  records: null,
  totalRecords: 765558,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `ip`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | The IP address that was queried.                                                                 |
| `nextPageToken`                                                                                  | *string*                                                                                         | :heavy_check_mark:                                                                               | A token that can be used to retrieve the next page of records.                                   |
| `records`                                                                                        | [components.DnsIpResolutionRangeRecord](../../models/components/dnsipresolutionrangerecord.md)[] | :heavy_check_mark:                                                                               | The list of domain names that resolved to this IP.                                               |
| `totalRecords`                                                                                   | *number*                                                                                         | :heavy_check_mark:                                                                               | The number of records that exist in total across all pages.                                      |