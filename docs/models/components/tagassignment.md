# TagAssignment

## Example Usage

```typescript
import { TagAssignment } from "@censys/platform-sdk/models/components";

let value: TagAssignment = {
  assetId: "<id>",
  assetType: "certificate",
  createdAt: new Date("2026-12-04T04:41:44.164Z"),
  createdBy: "fe7274b8-f67a-48f4-9c55-5ad2b669ae85",
  id: "e77765bd-0a5b-4bc4-ab26-3458318c98a3",
  platformRef: "<value>",
  tagId: "22b3d454-6868-4c9c-9022-08d2595f6831",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `assetId`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The identifier of the tagged asset (host IP, certificate SHA-256 fingerprint, or web property domain/IP:port). |
| `assetType`                                                                                                    | [components.TagAssignmentAssetType](../../models/components/tagassignmentassettype.md)                         | :heavy_check_mark:                                                                                             | The inferred type of the asset.                                                                                |
| `createdAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | RFC3339 timestamp when the assignment was created.                                                             |
| `createdBy`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The user ID of the user who created the assignment.                                                            |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The unique ID of the assignment.                                                                               |
| `platformRef`                                                                                                  | *string*                                                                                                       | :heavy_check_mark:                                                                                             | A direct URL to the asset in the Censys platform.                                                              |
| `tagId`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The ID of the tag.                                                                                             |