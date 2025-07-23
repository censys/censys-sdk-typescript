# Vnc

## Example Usage

```typescript
import { Vnc } from "@censys/platform-sdk/models/components";

let value: Vnc = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `connectionFailedReason`                                           | *string*                                                           | :heavy_minus_sign:                                                 | If server terminates handshake, the reason offered (if any)        |
| `desktopName`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | Desktop name provided by the server, capped at 255 bytes           |
| `pixelEncoding`                                                    | [components.VncKeyValue](../../models/components/vnckeyvalue.md)   | :heavy_minus_sign:                                                 | N/A                                                                |
| `screenInfo`                                                       | [components.DesktopInfo](../../models/components/desktopinfo.md)   | :heavy_minus_sign:                                                 | N/A                                                                |
| `securityTypes`                                                    | [components.VncKeyValue](../../models/components/vnckeyvalue.md)[] | :heavy_minus_sign:                                                 | server-specified security options                                  |
| `version`                                                          | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |