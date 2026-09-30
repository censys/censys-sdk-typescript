# InvestigationJobsList

## Example Usage

```typescript
import { InvestigationJobsList } from "@censys/platform-sdk/models/components";

let value: InvestigationJobsList = {
  jobs: [],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `jobs`                                                                                     | [components.InvestigationJob](../../models/components/investigationjob.md)[]               | :heavy_check_mark:                                                                         | The caller's investigations in this organization, newest first.                            |
| `nextPageToken`                                                                            | *string*                                                                                   | :heavy_minus_sign:                                                                         | Token to retrieve the next page of investigations. Omitted when there are no more results. |