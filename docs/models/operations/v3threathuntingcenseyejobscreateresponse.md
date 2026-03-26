# V3ThreathuntingCenseyeJobsCreateResponse

## Example Usage

```typescript
import { V3ThreathuntingCenseyeJobsCreateResponse } from "@censys/platform-sdk/models/operations";

let value: V3ThreathuntingCenseyeJobsCreateResponse = {
  headers: {},
  result: {
    result: {
      jobId: "550e8400-e29b-41d4-a716-446655440000",
      resultCount: 42,
      state: "completed",
      target: {
        certificateId:
          "3daf2843a77b6f4e6af43cd9b6f6746053b8c928e056e8a724808db8905a94cf",
        hostId: "8.8.8.8",
        webpropertyId: "example.com:443",
      },
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `headers`                                                                                      | Record<string, *string*[]>                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `result`                                                                                       | [components.ResponseEnvelopeCenseyeJob](../../models/components/responseenvelopecenseyejob.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |