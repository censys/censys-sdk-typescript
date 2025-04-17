# PcAnywhereStatus

## Example Usage

```typescript
import { PcAnywhereStatus } from "censys-sdk-typescript/models/components";

let value: PcAnywhereStatus = {};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `inUse`                                           | *boolean*                                         | :heavy_minus_sign:                                | Workstation is In Use if true, Available if false |
| `raw`                                             | *string*                                          | :heavy_minus_sign:                                | Full 'ST' query response                          |