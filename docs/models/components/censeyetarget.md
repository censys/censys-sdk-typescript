# CenseyeTarget

## Example Usage

```typescript
import { CenseyeTarget } from "@censys/platform-sdk/models/components";

let value: CenseyeTarget = {
  certificateId:
    "3daf2843a77b6f4e6af43cd9b6f6746053b8c928e056e8a724808db8905a94cf",
  hostId: "8.8.8.8",
  webpropertyId: "example.com:443",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `certificateId`                                                  | *string*                                                         | :heavy_minus_sign:                                               | SHA-256 fingerprint of the certificate to analyze.               | 3daf2843a77b6f4e6af43cd9b6f6746053b8c928e056e8a724808db8905a94cf |
| `hostId`                                                         | *string*                                                         | :heavy_minus_sign:                                               | IP address of the host to analyze.                               | 8.8.8.8                                                          |
| `webpropertyId`                                                  | *string*                                                         | :heavy_minus_sign:                                               | Web property identifier (hostname:port) to analyze.              | example.com:443                                                  |