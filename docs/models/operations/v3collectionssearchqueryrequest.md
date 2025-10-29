# V3CollectionsSearchQueryRequest

## Example Usage

```typescript
import { V3CollectionsSearchQueryRequest } from "@censys/platform-sdk/models/operations";

let value: V3CollectionsSearchQueryRequest = {
  collectionUid: "<id>",
  searchQueryInputBody: {
    fields: [
      "host.ip",
    ],
    pageSize: 1,
    query: "host.services: (protocol=SSH and not port: 22)",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `organizationId`                                                                                                                                                                                                     | *string*                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                   | The ID of a Censys organization to associate the request with. See the [Getting Started docs](https://docs.censys.com/reference/get-started#step-3-find-and-use-your-organization-id-optional) for more information. |
| `collectionUid`                                                                                                                                                                                                      | *string*                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                   | The UID for the collection                                                                                                                                                                                           |
| `searchQueryInputBody`                                                                                                                                                                                               | [components.SearchQueryInputBody](../../models/components/searchqueryinputbody.md)                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                  |