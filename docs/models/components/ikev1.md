# IkeV1

## Example Usage

```typescript
import { IkeV1 } from "censys-sdk-typescript/models/components";

let value: IkeV1 = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `acceptedProposal`                                                                       | *boolean*                                                                                | :heavy_minus_sign:                                                                       | Did the host accept our security proposal? When false, the host responded with an error. |
| `notifyMessageTypes`                                                                     | *number*[]                                                                               | :heavy_minus_sign:                                                                       | Which types of NOTIFY messages did the host send us?                                     |
| `vendorIds`                                                                              | *string*[]                                                                               | :heavy_minus_sign:                                                                       | The list of Vendor ID "extensions" the host claimed to support in its handshake          |