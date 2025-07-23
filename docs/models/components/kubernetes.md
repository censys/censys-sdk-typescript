# Kubernetes

## Example Usage

```typescript
import { Kubernetes } from "@censys/platform-sdk/models/components";

let value: Kubernetes = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `endpoints`                                                                          | [components.KubernetesEndpoint](../../models/components/kubernetesendpoint.md)[]     | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `kubernetesDashboardFound`                                                           | *boolean*                                                                            | :heavy_minus_sign:                                                                   | True if the dashboard is running and accessible                                      |
| `nodes`                                                                              | [components.KubernetesNode](../../models/components/kubernetesnode.md)[]             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `podNames`                                                                           | *string*[]                                                                           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `roles`                                                                              | [components.KubernetesRole](../../models/components/kubernetesrole.md)[]             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `versionInfo`                                                                        | [components.KubernetesVersionInfo](../../models/components/kubernetesversioninfo.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |