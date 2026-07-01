# DnsIpResolutionRangeRecord

## Example Usage

```typescript
import { DnsIpResolutionRangeRecord } from "@censys/platform-sdk/models/components";

let value: DnsIpResolutionRangeRecord = {
  domain: "vast-fit.name",
  firstSeen: new Date("2026-09-10T23:28:52.263Z"),
  lastSeen: new Date("2025-01-17T13:09:41.903Z"),
  recordType: "A",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `domain`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The domain name that resolved to this IP.                                                                          |
| `firstSeen`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | The time this record was first observed.                                                                           |
| `lastSeen`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | The time this record was last observed.                                                                            |
| `recordType`                                                                                                       | [components.DnsIpResolutionRangeRecordRecordType](../../models/components/dnsipresolutionrangerecordrecordtype.md) | :heavy_check_mark:                                                                                                 | Either A or AAAA.                                                                                                  |