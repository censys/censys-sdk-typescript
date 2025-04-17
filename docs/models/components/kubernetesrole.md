# KubernetesRole

## Example Usage

```typescript
import { KubernetesRole } from "@censys/platform-sdk/models/components";

let value: KubernetesRole = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `name`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `rules`                                                                          | [components.KubernetesRoleRule](../../models/components/kubernetesrolerule.md)[] | :heavy_minus_sign:                                                               | Rules set for this role.                                                         |