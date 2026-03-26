# Privacy

## Example Usage

```typescript
import { Privacy } from "@censys/platform-sdk/models/components";

let value: Privacy = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `anonymous`                                                                                    | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | Whether the host uses any kind of privacy service.                                             |
| `proxy`                                                                                        | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | Whether the host is an open web proxy.                                                         |
| `relay`                                                                                        | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | Whether the host is a location-preserving anonymous relay service, like iCloud Private Relay.. |
| `serviceProvider`                                                                              | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | The name of the privacy service providers detected.                                            |
| `source`                                                                                       | *string*                                                                                       | :heavy_minus_sign:                                                                             | The source of the data.                                                                        |
| `tor`                                                                                          | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | Whether the host is a Tor exit node.                                                           |
| `torInfo`                                                                                      | [components.PrivacyTorInfo](../../models/components/privacytorinfo.md)                         | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `vpn`                                                                                          | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | Whether the host is a VPN service exit node IP address.                                        |