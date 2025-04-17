# Host

## Example Usage

```typescript
import { Host } from "@censys/platform-sdk/models/components";

let value: Host = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `autonomousSystem`                                           | [components.Routing](../../models/components/routing.md)     | :heavy_minus_sign:                                           | N/A                                                          |
| `dns`                                                        | [components.HostDns](../../models/components/hostdns.md)     | :heavy_minus_sign:                                           | N/A                                                          |
| `hardware`                                                   | [components.Attribute](../../models/components/attribute.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `ip`                                                         | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `labels`                                                     | [components.Label](../../models/components/label.md)[]       | :heavy_minus_sign:                                           | N/A                                                          |
| `location`                                                   | [components.Location](../../models/components/location.md)   | :heavy_minus_sign:                                           | N/A                                                          |
| `operatingSystem`                                            | [components.Attribute](../../models/components/attribute.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `serviceCount`                                               | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `services`                                                   | [components.Service](../../models/components/service.md)[]   | :heavy_minus_sign:                                           | N/A                                                          |
| `whois`                                                      | [components.Whois](../../models/components/whois.md)         | :heavy_minus_sign:                                           | N/A                                                          |