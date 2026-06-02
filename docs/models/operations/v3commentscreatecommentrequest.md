# V3CommentsCreateCommentRequest

## Example Usage

```typescript
import { V3CommentsCreateCommentRequest } from "@censys/platform-sdk/models/operations";

let value: V3CommentsCreateCommentRequest = {
  createCommentInputBody: {
    assetId: "8.8.8.8",
    body: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `organizationId`                                                                                                                                                                                                     | *string*                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                   | The ID of a Censys organization to associate the request with. See the [Getting Started docs](https://docs.censys.com/reference/get-started#step-3-find-and-use-your-organization-id-optional) for more information. |
| `createCommentInputBody`                                                                                                                                                                                             | [components.CreateCommentInputBody](../../models/components/createcommentinputbody.md)                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                  |