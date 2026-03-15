# ResponseEnvelopeCenseyeJob

## Example Usage

```typescript
import { ResponseEnvelopeCenseyeJob } from "@censys/platform-sdk/models/components";

let value: ResponseEnvelopeCenseyeJob = {
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
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `result`                                                       | [components.CenseyeJob](../../models/components/censeyejob.md) | :heavy_minus_sign:                                             | N/A                                                            |