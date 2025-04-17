# V3GlobaldataAssetWebpropertyListRequest

## Example Usage

```typescript
import { V3GlobaldataAssetWebpropertyListRequest } from "censys-sdk-typescript/models/operations";

let value: V3GlobaldataAssetWebpropertyListRequest = {
  organizationId: "<id>",
  webpropertyIds: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `organizationId`                                                                                                                                                                                   | *string*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | The ID of a Censys organization to associate the request with. See the [Getting Started docs](https://docs.censys.com/reference/get-started#step-3-set-your-organization-id) for more information. |
| `webpropertyIds`                                                                                                                                                                                   | *string*[]                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                 | A web property host identifier, the format is hostname:port.                                                                                                                                       |