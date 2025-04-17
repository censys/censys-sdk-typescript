# SmbSmbCapabilities

## Example Usage

```typescript
import { SmbSmbCapabilities } from "censys-sdk-typescript/models/components";

let value: SmbSmbCapabilities = {};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `smbDfsSupport`                               | *boolean*                                     | :heavy_minus_sign:                            | Server supports Distributed File System       |
| `smbDirectoryLeasingSupport`                  | *boolean*                                     | :heavy_minus_sign:                            | Server supports directory leasing             |
| `smbEncryptionSupport`                        | *boolean*                                     | :heavy_minus_sign:                            | Server supports encryption                    |
| `smbLeasingSupport`                           | *boolean*                                     | :heavy_minus_sign:                            | Server supports Leasing                       |
| `smbMultichanSupport`                         | *boolean*                                     | :heavy_minus_sign:                            | Server supports multiple channels per session |
| `smbMulticreditSupport`                       | *boolean*                                     | :heavy_minus_sign:                            | Server supports multi-credit operations       |
| `smbPersistentHandleSupport`                  | *boolean*                                     | :heavy_minus_sign:                            | Server supports persistent handles            |