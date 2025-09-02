# AssetCertificateListInputBody

## Example Usage

```typescript
import { AssetCertificateListInputBody } from "@censys/platform-sdk/models/components";

let value: AssetCertificateListInputBody = {
  certificateIds: [
    "3daf2843a77b6f4e6af43cd9b6f6746053b8c928e056e8a724808db8905a94cf",
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `certificateIds`                                                 | *string*[]                                                       | :heavy_check_mark:                                               | A list of SHA-256 certificate fingerprints.                      | 3daf2843a77b6f4e6af43cd9b6f6746053b8c928e056e8a724808db8905a94cf |