# V3ThreathuntingInvestigationsFilesCreateRequest

## Example Usage

```typescript
import { V3ThreathuntingInvestigationsFilesCreateRequest } from "@censys/platform-sdk/models/operations";

let value: V3ThreathuntingInvestigationsFilesCreateRequest = {
  createInvestigationFileInputBody: {
    contentType: "application/pdf",
    filename: "incident-report.pdf",
    sizeBytes: 1048576,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `organizationId`                                                                                                                                                                                                     | *string*                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                   | The ID of a Censys organization to associate the request with. See the [Getting Started docs](https://docs.censys.com/reference/get-started#step-3-find-and-use-your-organization-id-optional) for more information. |
| `createInvestigationFileInputBody`                                                                                                                                                                                   | [components.CreateInvestigationFileInputBody](../../models/components/createinvestigationfileinputbody.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                  |