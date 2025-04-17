# DnsResourceRecordType

An enumerated field indicating what type of data is in the "services.dns.additionals.response" field. For example, "A" signifies that the value in "services.dns.additionals.response" is an IPv4 address for the FQDN in "services.dns.additionals.name".

## Example Usage

```typescript
import { DnsResourceRecordType } from "censys-sdk-typescript/models/components";

let value: DnsResourceRecordType = "a";
```

## Values

```typescript
"unknown" | "a" | "txt" | "ns"
```