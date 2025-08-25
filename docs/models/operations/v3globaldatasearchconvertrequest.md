# V3GlobaldataSearchConvertRequest

## Example Usage

```typescript
import { V3GlobaldataSearchConvertRequest } from "@censys/platform-sdk/models/operations";

let value: V3GlobaldataSearchConvertRequest = {
  searchConvertQueryInputBody: {
    queries: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `organizationId`                                                                                                                                                                                   | *string*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | The ID of a Censys organization to associate the request with. See the [Getting Started docs](https://docs.censys.com/reference/get-started#step-3-set-your-organization-id) for more information. |
| `searchConvertQueryInputBody`                                                                                                                                                                      | [components.SearchConvertQueryInputBody](../../models/components/searchconvertqueryinputbody.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |