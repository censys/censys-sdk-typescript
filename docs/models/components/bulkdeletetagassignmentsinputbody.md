# BulkDeleteTagAssignmentsInputBody

## Example Usage

```typescript
import { BulkDeleteTagAssignmentsInputBody } from "@censys/platform-sdk/models/components";

let value: BulkDeleteTagAssignmentsInputBody = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAfter`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | RFC3339 timestamp. Only delete assignments created after this time.                           |
| `createdBefore`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | RFC3339 timestamp. Only delete assignments created before this time.                          |