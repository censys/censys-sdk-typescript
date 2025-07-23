# Cvss

## Example Usage

```typescript
import { Cvss } from "@censys/platform-sdk/models/components";

let value: Cvss = {};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `components`                                                                                                                                   | [components.CVSSComponents](../../models/components/cvsscomponents.md)                                                                         | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `score`                                                                                                                                        | *number*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | Score of the vulnerability; 0.1 is the lowest, 10 is the maximum                                                                               |
| `vector`                                                                                                                                       | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | The path, method, or scenario used to exploit the vulnerability. Each section represents components that contribute to the overall CVSS score. |