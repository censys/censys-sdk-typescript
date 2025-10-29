# AssetHostListInputBody

## Example Usage

```typescript
import { AssetHostListInputBody } from "@censys/platform-sdk/models/components";

let value: AssetHostListInputBody = {
  atTime: new Date("2025-01-01T00:00:00Z"),
  hostIds: [
    "8.8.8.8",
  ],
};
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `atTime`                                                                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                  | :heavy_minus_sign:                                                                                                                                                             | RFC3339 Timestamp to view all requested hosts at a specific point in time. Must be a valid RFC3339 string. Ensure that you suffix the date with T00:00:00Z or a specific time. | 2025-01-01T00:00:00Z                                                                                                                                                           |
| `hostIds`                                                                                                                                                                      | *string*[]                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                             | A list of host IP addresses.                                                                                                                                                   | 8.8.8.8                                                                                                                                                                        |