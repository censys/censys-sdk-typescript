# Smb

## Example Usage

```typescript
import { Smb } from "censys-sdk-typescript/models/components";

let value: Smb = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `groupName`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | Default group name                                                             |
| `hasNtlm`                                                                      | *boolean*                                                                      | :heavy_minus_sign:                                                             | Server supports the NTLM authentication method                                 |
| `nativeOs`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | Server-identified operating system                                             |
| `negotiationLog`                                                               | [components.SmbNegotiationLog](../../models/components/smbnegotiationlog.md)   | :heavy_minus_sign:                                                             | N/A                                                                            |
| `ntlm`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Native LAN manager                                                             |
| `sessionSetupLog`                                                              | [components.SmbSessionSetupLog](../../models/components/smbsessionsetuplog.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `smbCapabilities`                                                              | [components.SmbSmbCapabilities](../../models/components/smbsmbcapabilities.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `smbVersion`                                                                   | [components.SmbSmbVersions](../../models/components/smbsmbversions.md)         | :heavy_minus_sign:                                                             | N/A                                                                            |
| `smbv1Support`                                                                 | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |