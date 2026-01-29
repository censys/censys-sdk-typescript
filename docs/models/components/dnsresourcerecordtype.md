# DnsResourceRecordType

An enumerated field indicating what type of data is in the "services.dns.additionals.response" field. For example, "A" signifies that the value in "services.dns.additionals.response" is an IPv4 address for the FQDN in "services.dns.additionals.name".

## Example Usage

```typescript
import { DnsResourceRecordType } from "@censys/platform-sdk/models/components";

let value: DnsResourceRecordType = "a";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "a" | "txt" | "ns" | Unrecognized<string>
```