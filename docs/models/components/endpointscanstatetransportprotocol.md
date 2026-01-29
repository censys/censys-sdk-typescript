# EndpointScanStateTransportProtocol

## Example Usage

```typescript
import { EndpointScanStateTransportProtocol } from "@censys/platform-sdk/models/components";

let value: EndpointScanStateTransportProtocol = "tcp";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "tcp" | "udp" | "icmp" | "quic" | Unrecognized<string>
```