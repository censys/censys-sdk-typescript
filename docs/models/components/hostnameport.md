# HostnamePort

## Example Usage

```typescript
import { HostnamePort } from "@censys/platform-sdk/models/components";

let value: HostnamePort = {
  hostname: "censys.io",
  port: 443,
};
```

## Fields

| Field               | Type                | Required            | Description         | Example             |
| ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `hostname`          | *string*            | :heavy_check_mark:  | Hostname to scan    | censys.io           |
| `port`              | *number*            | :heavy_check_mark:  | Port number to scan | 443                 |