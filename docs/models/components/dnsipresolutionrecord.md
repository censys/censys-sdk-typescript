# DnsIpResolutionRecord

## Example Usage

```typescript
import { DnsIpResolutionRecord } from "@censys/platform-sdk/models/components";

let value: DnsIpResolutionRecord = {
  domain: "humiliating-pearl.info",
  firstSeen: new Date("2026-04-16T12:27:24.453Z"),
  lastSeen: new Date("2024-04-06T13:35:46.551Z"),
  recordType: "AAAA",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `domain`                                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The domain name that resolved to this IP.                                                                |
| `firstSeen`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_check_mark:                                                                                       | The time this record was first observed.                                                                 |
| `lastSeen`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_check_mark:                                                                                       | The time this record was last observed.                                                                  |
| `recordType`                                                                                             | [components.DnsIpResolutionRecordRecordType](../../models/components/dnsipresolutionrecordrecordtype.md) | :heavy_check_mark:                                                                                       | Either A or AAAA.                                                                                        |