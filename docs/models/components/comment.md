# Comment

## Example Usage

```typescript
import { Comment } from "@censys/platform-sdk/models/components";

let value: Comment = {
  assetId: "<id>",
  assetType: "certificate",
  body: "<value>",
  createdAt: new Date("2026-07-07T10:47:33.821Z"),
  createdBy: "9fec73e6-9d6c-42e9-9032-990cc22f8a4a",
  id: "cd9b1448-e41f-4c0f-bb45-2f1e657bcdf0",
  platformRef: "<value>",
  updatedAt: new Date("2026-03-10T11:45:17.633Z"),
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `assetId`                                                                                                         | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The identifier of the commented asset (host IP, certificate SHA-256 fingerprint, or web property domain/IP:port). |
| `assetType`                                                                                                       | [components.AssetType](../../models/components/assettype.md)                                                      | :heavy_check_mark:                                                                                                | The inferred type of the asset.                                                                                   |
| `body`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The comment body text.                                                                                            |
| `createdAt`                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                     | :heavy_check_mark:                                                                                                | RFC3339 timestamp when the comment was created.                                                                   |
| `createdBy`                                                                                                       | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The user ID of the user who created the comment.                                                                  |
| `id`                                                                                                              | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The unique ID of the comment.                                                                                     |
| `platformRef`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | A direct URL to the asset in the Censys platform.                                                                 |
| `updatedAt`                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                     | :heavy_check_mark:                                                                                                | RFC3339 timestamp when the comment was last updated.                                                              |