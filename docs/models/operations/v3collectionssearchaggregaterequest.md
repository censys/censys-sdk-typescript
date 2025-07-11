# V3CollectionsSearchAggregateRequest

## Example Usage

```typescript
import { V3CollectionsSearchAggregateRequest } from "censys-sdk-typescript/models/operations";

let value: V3CollectionsSearchAggregateRequest = {
  collectionUid: "f39d9e3e-ab68-48c7-93a3-90a6a0017745",
  searchAggregateInputBody: {
    field: "<value>",
    numberOfBuckets: 777285,
    query: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `organizationId`                                                                                                                                                                                   | *string*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | The ID of a Censys organization to associate the request with. See the [Getting Started docs](https://docs.censys.com/reference/get-started#step-3-set-your-organization-id) for more information. |
| `collectionUid`                                                                                                                                                                                    | *string*                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                 | The UID for the collection                                                                                                                                                                         |
| `searchAggregateInputBody`                                                                                                                                                                         | [components.SearchAggregateInputBody](../../models/components/searchaggregateinputbody.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |