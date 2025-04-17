# Routing

## Example Usage

```typescript
import { Routing } from "@censys/platform-sdk/models/components";

let value: Routing = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `asn`                                                                                     | *number*                                                                                  | :heavy_minus_sign:                                                                        | The ASN (autonomous system number) of the host's autonomous system.                       |
| `bgpPrefix`                                                                               | *string*                                                                                  | :heavy_minus_sign:                                                                        | The autonomous system's CIDR.                                                             |
| `countryCode`                                                                             | *string*                                                                                  | :heavy_minus_sign:                                                                        | The autonomous system's two-letter ISO 3166-1 alpha-2 country code (US, CN, GB, RU, ...). |
| `description`                                                                             | *string*                                                                                  | :heavy_minus_sign:                                                                        | Brief description of the autonomous system.                                               |
| `name`                                                                                    | *string*                                                                                  | :heavy_minus_sign:                                                                        | The friendly name of the autonomous system.                                               |
| `organization`                                                                            | *string*                                                                                  | :heavy_minus_sign:                                                                        | The name of the organization managning the autonomous system.                             |