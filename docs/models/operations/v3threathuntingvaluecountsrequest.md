# V3ThreathuntingValueCountsRequest

## Example Usage

```typescript
import { V3ThreathuntingValueCountsRequest } from "censys-sdk-typescript/models/operations";

let value: V3ThreathuntingValueCountsRequest = {
  searchValueCountsInputBody: {
    andCountConditions: [
      {
        fieldValuePairs: [
          {
            field: "host.services.port",
            value: "80",
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `organizationId`                                                                                                                                                                                   | *string*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | The ID of a Censys organization to associate the request with. See the [Getting Started docs](https://docs.censys.com/reference/get-started#step-3-set-your-organization-id) for more information. |
| `searchValueCountsInputBody`                                                                                                                                                                       | [components.SearchValueCountsInputBody](../../models/components/searchvaluecountsinputbody.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |