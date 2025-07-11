# HostAsset

## Example Usage

```typescript
import { HostAsset } from "censys-sdk-typescript/models/components";

let value: HostAsset = {
  extensions: {
    "key": "<value>",
    "key1": "<value>",
  },
  resource: {},
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `extensions`                                       | Record<string, *any*>                              | :heavy_check_mark:                                 | N/A                                                |
| `resource`                                         | [components.Host](../../models/components/host.md) | :heavy_check_mark:                                 | N/A                                                |