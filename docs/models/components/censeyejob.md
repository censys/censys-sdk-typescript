# CenseyeJob

## Example Usage

```typescript
import { CenseyeJob } from "@censys/platform-sdk/models/components";

let value: CenseyeJob = {
  jobId: "550e8400-e29b-41d4-a716-446655440000",
  resultCount: 42,
  state: "completed",
  target: {
    certificateId:
      "3daf2843a77b6f4e6af43cd9b6f6746053b8c928e056e8a724808db8905a94cf",
    hostId: "8.8.8.8",
    webpropertyId: "example.com:443",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `atTime`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The point-in-time the asset data was evaluated at.                                            |                                                                                               |
| `createTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the job was created.                                                                     |                                                                                               |
| `deleteTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the job and results will be deleted.                                                     |                                                                                               |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Error message if the job failed.                                                              |                                                                                               |
| `jobId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the job.                                                                 | 550e8400-e29b-41d4-a716-446655440000                                                          |
| `resultCount`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | Total number of result field-value pairs.                                                     | 42                                                                                            |
| `state`                                                                                       | [components.State](../../models/components/state.md)                                          | :heavy_check_mark:                                                                            | Current state of the job.                                                                     | completed                                                                                     |
| `target`                                                                                      | [components.CenseyeTarget](../../models/components/censeyetarget.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `updateTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the job was last updated.                                                                |                                                                                               |