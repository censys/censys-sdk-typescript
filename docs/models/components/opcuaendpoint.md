# OpcUaEndpoint

## Example Usage

```typescript
import { OpcUaEndpoint } from "@censys/platform-sdk/models/components";

let value: OpcUaEndpoint = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `endpointUrl`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `securityLevel`                                                                      | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `securityMode`                                                                       | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `securityPolicyUri`                                                                  | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `serveCert`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `server`                                                                             | [components.OpcUaDescription](../../models/components/opcuadescription.md)           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `transportProfileUri`                                                                | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `userIdentityToken`                                                                  | [components.OpcUaUserTokenPolicy](../../models/components/opcuausertokenpolicy.md)[] | :heavy_minus_sign:                                                                   | N/A                                                                                  |