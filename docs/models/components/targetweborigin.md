# TargetWebOrigin

## Example Usage

```typescript
import { TargetWebOrigin } from "@censys/platform-sdk/models/components";

let value: TargetWebOrigin = {
  hostname: "censys.io",
  port: 443,
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   | Example                       |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `hostname`                    | *string*                      | :heavy_check_mark:            | Hostname of the web origin    | censys.io                     |
| `port`                        | *number*                      | :heavy_check_mark:            | Port number of the web origin | 443                           |