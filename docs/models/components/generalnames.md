# GeneralNames

## Example Usage

```typescript
import { GeneralNames } from "@censys/platform-sdk/models/components";

let value: GeneralNames = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `directoryNames`                                                                                 | [components.DistinguishedName](../../models/components/distinguishedname.md)[]                   | :heavy_minus_sign:                                                                               | The parsed directoryName entries in the GeneralName.                                             |
| `dnsNames`                                                                                       | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | The parsed dNSName entries in the GeneralName.                                                   |
| `ediPartyNames`                                                                                  | [components.EdiPartyName](../../models/components/edipartyname.md)[]                             | :heavy_minus_sign:                                                                               | The parsed eDIPartyName entries in the GeneralName.                                              |
| `emailAddresses`                                                                                 | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | The parsed rfc822Name entries in the GeneralName.                                                |
| `ipAddresses`                                                                                    | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | The parsed ipAddress entries in the GeneralName.                                                 |
| `otherNames`                                                                                     | [components.OtherName](../../models/components/othername.md)[]                                   | :heavy_minus_sign:                                                                               | The parsed otherName entries in the GeneralName. An arbitrary binary value identified by an OID. |
| `registeredIds`                                                                                  | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | The parsed registeredID entries in the GeneralName. Stored in dotted-decimal format.             |
| `uniformResourceIdentifiers`                                                                     | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | The parsed uniformResourceIdentifier entries in the GeneralName.                                 |