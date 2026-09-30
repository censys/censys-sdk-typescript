# V3ThreathuntingInvestigationsJobsCreateRequest

## Example Usage

```typescript
import { V3ThreathuntingInvestigationsJobsCreateRequest } from "@censys/platform-sdk/models/operations";

let value: V3ThreathuntingInvestigationsJobsCreateRequest = {
  createInvestigationJobInputBody: {
    endTime: new Date("2026-08-01T00:00:00Z"),
    fileIds: [
      "file_550e8400-e29b-41d4-a716-446655440000",
    ],
    indicators: [
      "1.1.1.1",
      "example.com",
    ],
    startTime: new Date("2026-06-01T00:00:00Z"),
  },
};
```

## Fields

| Field                                                                                                                                                                                                                | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `organizationId`                                                                                                                                                                                                     | *string*                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                   | The ID of a Censys organization to associate the request with. See the [Getting Started docs](https://docs.censys.com/reference/get-started#step-3-find-and-use-your-organization-id-optional) for more information. |
| `createInvestigationJobInputBody`                                                                                                                                                                                    | [components.CreateInvestigationJobInputBody](../../models/components/createinvestigationjobinputbody.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                  |