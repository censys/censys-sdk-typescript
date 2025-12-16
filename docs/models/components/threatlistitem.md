# ThreatListItem

## Example Usage

```typescript
import { ThreatListItem } from "@censys/platform-sdk/models/components";

let value: ThreatListItem = {
  count: 342280,
  hostCount: 227760,
  id: "<id>",
  webCount: 194896,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `addedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time when the threat was added.                                                  |
| `count`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | Total count of assets affected by this threat.                                                |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Detailed description of the threat.                                                           |
| `hostCount`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of hosts affected by this threat.                                                      |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the threat.                                                              |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Human-readable name of the threat.                                                            |
| `references`                                                                                  | [components.ThreatReference](../../models/components/threatreference.md)[]                    | :heavy_minus_sign:                                                                            | External reference links for the threat.                                                      |
| `webCount`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of web properties affected by this threat.                                             |