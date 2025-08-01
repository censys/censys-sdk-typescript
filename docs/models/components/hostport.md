# HostPort

## Example Usage

```typescript
import { HostPort } from "@censys/platform-sdk/models/components";

let value: HostPort = {
  ip: "8.8.8.8",
  port: 443,
};
```

## Fields

| Field               | Type                | Required            | Description         | Example             |
| ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `ip`                | *string*            | :heavy_check_mark:  | IP address to scan  | 8.8.8.8             |
| `port`              | *number*            | :heavy_check_mark:  | Port number to scan | 443                 |