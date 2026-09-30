# ResponseEnvelopeInvestigationJobsList

## Example Usage

```typescript
import { ResponseEnvelopeInvestigationJobsList } from "@censys/platform-sdk/models/components";

let value: ResponseEnvelopeInvestigationJobsList = {
  result: {
    jobs: [
      {
        createTime: new Date("2025-12-05T21:03:30.698Z"),
        jobId: "550e8400-e29b-41d4-a716-446655440000",
        state: "completed",
      },
    ],
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `result`                                                                             | [components.InvestigationJobsList](../../models/components/investigationjobslist.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |