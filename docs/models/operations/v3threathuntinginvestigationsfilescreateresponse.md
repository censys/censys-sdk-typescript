# V3ThreathuntingInvestigationsFilesCreateResponse

## Example Usage

```typescript
import { V3ThreathuntingInvestigationsFilesCreateResponse } from "@censys/platform-sdk/models/operations";

let value: V3ThreathuntingInvestigationsFilesCreateResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    result: {
      expireTime: new Date("2025-04-20T08:35:27.891Z"),
      fileId: "file_550e8400-e29b-41d4-a716-446655440000",
      uploadHeaders: {
        "key": "<value>",
        "key1": "<value>",
      },
      uploadUrl: "https://square-outset.com",
    },
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                | Record<string, *string*[]>                                                                                               | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `result`                                                                                                                 | [components.ResponseEnvelopeInvestigationFileUpload](../../models/components/responseenvelopeinvestigationfileupload.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |