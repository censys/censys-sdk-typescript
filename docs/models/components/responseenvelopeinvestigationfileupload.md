# ResponseEnvelopeInvestigationFileUpload

## Example Usage

```typescript
import { ResponseEnvelopeInvestigationFileUpload } from "@censys/platform-sdk/models/components";

let value: ResponseEnvelopeInvestigationFileUpload = {
  result: {
    expireTime: new Date("2025-04-20T08:35:27.891Z"),
    fileId: "file_550e8400-e29b-41d4-a716-446655440000",
    uploadHeaders: {
      "key": "<value>",
      "key1": "<value>",
    },
    uploadUrl: "https://square-outset.com",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [components.InvestigationFileUpload](../../models/components/investigationfileupload.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |