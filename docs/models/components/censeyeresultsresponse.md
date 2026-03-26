# CenseyeResultsResponse

## Example Usage

```typescript
import { CenseyeResultsResponse } from "@censys/platform-sdk/models/components";

let value: CenseyeResultsResponse = {
  results: [],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `nextPageToken`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | Token to retrieve the next page of results.                            |
| `results`                                                              | [components.CenseyeResult](../../models/components/censeyeresult.md)[] | :heavy_check_mark:                                                     | List of count results.                                                 |