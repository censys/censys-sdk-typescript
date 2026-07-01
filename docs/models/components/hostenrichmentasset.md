# HostEnrichmentAsset

## Example Usage

```typescript
import { HostEnrichmentAsset } from "@censys/platform-sdk/models/components";

let value: HostEnrichmentAsset = {
  extensions: {
    "key": "<value>",
    "key1": "<value>",
  },
  resource: {},
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `extensions`                                                           | Record<string, *any*>                                                  | :heavy_check_mark:                                                     | N/A                                                                    |
| `resource`                                                             | [components.HostEnrichment](../../models/components/hostenrichment.md) | :heavy_check_mark:                                                     | N/A                                                                    |