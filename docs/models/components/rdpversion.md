# RdpVersion

## Example Usage

```typescript
import { RdpVersion } from "censys-sdk-typescript/models/components";

let value: RdpVersion = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `major`                                                                                 | *number*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `minor`                                                                                 | *number*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `raw`                                                                                   | *string*                                                                                | :heavy_minus_sign:                                                                      | Raw Version Response, Major version is stored in upper 2 bytes, minor in lower 2 bytes. |