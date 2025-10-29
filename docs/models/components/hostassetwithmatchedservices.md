# HostAssetWithMatchedServices

## Example Usage

```typescript
import { HostAssetWithMatchedServices } from "@censys/platform-sdk/models/components";

let value: HostAssetWithMatchedServices = {
  extensions: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  resource: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `extensions`                                                             | Record<string, *any*>                                                    | :heavy_check_mark:                                                       | N/A                                                                      |
| `matchedServices`                                                        | [components.MatchedService](../../models/components/matchedservice.md)[] | :heavy_minus_sign:                                                       | The host services that match the query.                                  |
| `resource`                                                               | [components.Host](../../models/components/host.md)                       | :heavy_check_mark:                                                       | N/A                                                                      |