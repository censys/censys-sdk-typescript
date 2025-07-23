# V3GlobaldataSearchAggregateRequest

## Example Usage

```typescript
import { V3GlobaldataSearchAggregateRequest } from "@censys/platform-sdk/models/operations";

let value: V3GlobaldataSearchAggregateRequest = {
  searchAggregateInputBody: {
    field: "web.endpoints.http.html_title",
    numberOfBuckets: 100,
    query: "web: *",
  },
};
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `organizationId`                                                                                                                                                                                   | *string*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | The ID of a Censys organization to associate the request with. See the [Getting Started docs](https://docs.censys.com/reference/get-started#step-3-set-your-organization-id) for more information. |
| `searchAggregateInputBody`                                                                                                                                                                         | [components.SearchAggregateInputBody](../../models/components/searchaggregateinputbody.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |