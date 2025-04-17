# JarmScan

## Example Usage

```typescript
import { JarmScan } from "censys-sdk-typescript/models/components";

let value: JarmScan = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `cipherAndVersionFingerprint`                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | The first 30 character portion of the Jarm fingerprint.                                      |
| `fingerprint`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | The 62 character Jarm fingerprint of the service.                                            |
| `hostname`                                                                                   | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `ip`                                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `isSuccess`                                                                                  | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `port`                                                                                       | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `scanTime`                                                                                   | *string*                                                                                     | :heavy_minus_sign:                                                                           | The time the service was fingerprinted                                                       |
| `tlsExtensionsSha256`                                                                        | *string*                                                                                     | :heavy_minus_sign:                                                                           | The second 32 character portion of the Jarm fingerprint                                      |
| `transportProtocol`                                                                          | [components.JarmScanTransportProtocol](../../models/components/jarmscantransportprotocol.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |