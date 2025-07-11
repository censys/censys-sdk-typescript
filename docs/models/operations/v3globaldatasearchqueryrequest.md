# V3GlobaldataSearchQueryRequest

## Example Usage

```typescript
import { V3GlobaldataSearchQueryRequest } from "censys-sdk-typescript/models/operations";

let value: V3GlobaldataSearchQueryRequest = {
  searchQueryInputBody: {
    query: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `organizationId`                                                                                                                                                                                   | *string*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | The ID of a Censys organization to associate the request with. See the [Getting Started docs](https://docs.censys.com/reference/get-started#step-3-set-your-organization-id) for more information. |
| `searchQueryInputBody`                                                                                                                                                                             | [components.SearchQueryInputBody](../../models/components/searchqueryinputbody.md)                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |