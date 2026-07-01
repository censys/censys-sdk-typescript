# DnsIpResolutionBoundResponse

## Example Usage

```typescript
import { DnsIpResolutionBoundResponse } from "@censys/platform-sdk/models/components";

let value: DnsIpResolutionBoundResponse = {
  ip: "f85d:b3c7:d4c2:96ce:d10d:3fc1:27e8:b75e",
  nextPageToken: "<value>",
  records: [],
  totalRecords: 235349,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `ip`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | The IP address that was queried.                                                       |
| `nextPageToken`                                                                        | *string*                                                                               | :heavy_check_mark:                                                                     | A token that can be used to retrieve the next page of records.                         |
| `records`                                                                              | [components.DnsIpResolutionRecord](../../models/components/dnsipresolutionrecord.md)[] | :heavy_check_mark:                                                                     | The list of domain names that resolved to this IP.                                     |
| `totalRecords`                                                                         | *number*                                                                               | :heavy_check_mark:                                                                     | The number of records that exist in total across all pages.                            |