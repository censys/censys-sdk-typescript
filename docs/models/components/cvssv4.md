# CVSSv4

## Example Usage

```typescript
import { CVSSv4 } from "censys-sdk-typescript/models/components";

let value: CVSSv4 = {};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `components`                                                                                                                                   | [components.CVSSv4Components](../../models/components/cvssv4components.md)                                                                     | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `score`                                                                                                                                        | *number*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | Score of the vulnerability; 0.1 is the lowest, 10 is the maximum                                                                               |
| `vector`                                                                                                                                       | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | The path, method, or scenario used to exploit the vulnerability. Each section represents components that contribute to the overall CVSS score. |