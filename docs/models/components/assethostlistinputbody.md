# AssetHostListInputBody

## Example Usage

```typescript
import { AssetHostListInputBody } from "@censys/platform-sdk/models/components";

let value: AssetHostListInputBody = {
  hostIds: [
    "8.8.8.8",
  ],
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  | Example                      |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `hostIds`                    | *string*[]                   | :heavy_check_mark:           | A list of host IP addresses. | 8.8.8.8                      |