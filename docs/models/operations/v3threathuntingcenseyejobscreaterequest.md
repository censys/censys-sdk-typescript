# V3ThreathuntingCenseyeJobsCreateRequest

## Example Usage

```typescript
import { V3ThreathuntingCenseyeJobsCreateRequest } from "@censys/platform-sdk/models/operations";

let value: V3ThreathuntingCenseyeJobsCreateRequest = {
  createCenseyeJobInputBody: {
    target: {
      certificateId:
        "3daf2843a77b6f4e6af43cd9b6f6746053b8c928e056e8a724808db8905a94cf",
      hostId: "8.8.8.8",
      webpropertyId: "example.com:443",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `organizationId`                                                                                                                                                                                                     | *string*                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                   | The ID of a Censys organization to associate the request with. See the [Getting Started docs](https://docs.censys.com/reference/get-started#step-3-find-and-use-your-organization-id-optional) for more information. |
| `createCenseyeJobInputBody`                                                                                                                                                                                          | [components.CreateCenseyeJobInputBody](../../models/components/createcenseyejobinputbody.md)                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                  |