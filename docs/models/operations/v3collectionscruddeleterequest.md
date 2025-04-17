# V3CollectionsCrudDeleteRequest

## Example Usage

```typescript
import { V3CollectionsCrudDeleteRequest } from "censys-sdk-typescript/models/operations";

let value: V3CollectionsCrudDeleteRequest = {
  organizationId: "<id>",
  collectionUid: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                        | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `organizationId`                                                                                                                                                                             | *string*                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                           | The ID of a Censys organization to associate the request with. See the [Getting Started docs](https://docs.censys.com/reference/get-started#/set-your-organization-id) for more information. |
| `collectionUid`                                                                                                                                                                              | *string*                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                           | The UID for the collection                                                                                                                                                                   |