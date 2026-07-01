# DnsResolutionRecordRecordType

The record type. Either A, AAAA, MX, NS, SOA, or TXT.

## Example Usage

```typescript
import { DnsResolutionRecordRecordType } from "@censys/platform-sdk/models/components";

let value: DnsResolutionRecordRecordType = "AAAA";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"A" | "AAAA" | "MX" | "NS" | "SOA" | "TXT" | Unrecognized<string>
```