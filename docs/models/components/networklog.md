# NetworkLog

## Example Usage

```typescript
import { NetworkLog } from "@censys/platform-sdk/models/components";

let value: NetworkLog = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `harHandle`                                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | Storage handle for the full HAR network log.                                             |
| `resources`                                                                              | [components.NetworkLogResourceInfo](../../models/components/networklogresourceinfo.md)[] | :heavy_minus_sign:                                                                       | Resources fetched during page load.                                                      |