# ServiceIdTransportProtocol

## Example Usage

```typescript
import { ServiceIdTransportProtocol } from "@censys/platform-sdk/models/components";

let value: ServiceIdTransportProtocol = "quic";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "tcp" | "udp" | "icmp" | "quic" | Unrecognized<string>
```