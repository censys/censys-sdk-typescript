# KubernetesNodeNodeAddress

## Example Usage

```typescript
import { KubernetesNodeNodeAddress } from "@censys/platform-sdk/models/components";

let value: KubernetesNodeNodeAddress = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `address`                                                     | *string*                                                      | :heavy_minus_sign:                                            | Node address, IP/URL.                                         |
| `addressType`                                                 | *string*                                                      | :heavy_minus_sign:                                            | Node address type, one of Hostname, ExternalIP or InternalIP. |