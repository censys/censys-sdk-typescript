# ServiceScanTransportProtocol

## Example Usage

```typescript
import { ServiceScanTransportProtocol } from "@censys/platform-sdk/models/components";

let value: ServiceScanTransportProtocol = "tcp";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "tcp" | "udp" | "icmp" | "quic" | Unrecognized<string>
```