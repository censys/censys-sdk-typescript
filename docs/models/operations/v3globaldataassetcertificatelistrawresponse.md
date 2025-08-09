# V3GlobaldataAssetCertificateListRawResponse

## Example Usage

```typescript
import { V3GlobaldataAssetCertificateListRawResponse } from "@censys/platform-sdk/models/operations";

let value: V3GlobaldataAssetCertificateListRawResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
    ],
  },
  result: {},
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                      | Record<string, *string*[]>                                                                                                     | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `result`                                                                                                                       | [components.ResponseEnvelopeListRawCertificateResponse](../../models/components/responseenvelopelistrawcertificateresponse.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |