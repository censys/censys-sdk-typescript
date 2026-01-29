# EndpointScanTransportProtocol

## Example Usage

```typescript
import { EndpointScanTransportProtocol } from "@censys/platform-sdk/models/components";

let value: EndpointScanTransportProtocol = "tcp";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "tcp" | "udp" | "icmp" | "quic" | Unrecognized<string>
```