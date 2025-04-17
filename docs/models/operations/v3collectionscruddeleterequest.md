# V3CollectionsCrudDeleteRequest

## Example Usage

```typescript
import { V3CollectionsCrudDeleteRequest } from "censys-sdk-typescript/models/operations";

let value: V3CollectionsCrudDeleteRequest = {
  organizationId: "<id>",
  collectionUid: "c275d685-cb86-4b3f-876e-5b9720ff4421",
};
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `organizationId`                                                                                                                                                                                   | *string*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | The ID of a Censys organization to associate the request with. See the [Getting Started docs](https://docs.censys.com/reference/get-started#step-3-set-your-organization-id) for more information. |
| `collectionUid`                                                                                                                                                                                    | *string*                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                 | The UID for the collection                                                                                                                                                                         |