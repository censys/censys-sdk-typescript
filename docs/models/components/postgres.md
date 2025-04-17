# Postgres

## Example Usage

```typescript
import { Postgres } from "censys-sdk-typescript/models/components";

let value: Postgres = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `protocolError`                                                                         | Record<string, *string*>                                                                | :heavy_minus_sign:                                                                      | The error received in response to a StartupMessage with an unexpected protocol version. |
| `startupError`                                                                          | Record<string, *string*>                                                                | :heavy_minus_sign:                                                                      | The error received in response to a StartupMessage without providing the User field.    |
| `supportedVersions`                                                                     | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |