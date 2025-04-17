# KubernetesVersionInfo

## Example Usage

```typescript
import { KubernetesVersionInfo } from "censys-sdk-typescript/models/components";

let value: KubernetesVersionInfo = {};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `buildDate`                          | *string*                             | :heavy_minus_sign:                   | Date version was built.              |
| `compiler`                           | *string*                             | :heavy_minus_sign:                   | Go Compiler used                     |
| `gitCommit`                          | *string*                             | :heavy_minus_sign:                   | Git commit version built from.       |
| `gitTreeState`                       | *string*                             | :heavy_minus_sign:                   | State of the tree when built.        |
| `gitVersion`                         | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `goVersion`                          | *string*                             | :heavy_minus_sign:                   | Version of GO used to build version. |
| `major`                              | *string*                             | :heavy_minus_sign:                   | Kubernetes major version             |
| `minor`                              | *string*                             | :heavy_minus_sign:                   | Kubernetes minor version             |
| `platform`                           | *string*                             | :heavy_minus_sign:                   | Platform compiled for                |