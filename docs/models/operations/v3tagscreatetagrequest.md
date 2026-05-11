# V3TagsCreateTagRequest

## Example Usage

```typescript
import { V3TagsCreateTagRequest } from "@censys/platform-sdk/models/operations";

let value: V3TagsCreateTagRequest = {
  createTagInputBody: {
    name: "<value>",
    privacy: "shared",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `organizationId`                                                                                                                                                                                                     | *string*                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                   | The ID of a Censys organization to associate the request with. See the [Getting Started docs](https://docs.censys.com/reference/get-started#step-3-find-and-use-your-organization-id-optional) for more information. |
| `createTagInputBody`                                                                                                                                                                                                 | [components.CreateTagInputBody](../../models/components/createtaginputbody.md)                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                  |