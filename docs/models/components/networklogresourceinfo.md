# NetworkLogResourceInfo

## Example Usage

```typescript
import { NetworkLogResourceInfo } from "@censys/platform-sdk/models/components";

let value: NetworkLogResourceInfo = {};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `host`                                | *string*                              | :heavy_minus_sign:                    | Hostname from the URL.                |
| `md5`                                 | *string*                              | :heavy_minus_sign:                    | MD5 hash of the resource content.     |
| `mimeType`                            | *string*                              | :heavy_minus_sign:                    | MIME type of the resource.            |
| `path`                                | *string*                              | :heavy_minus_sign:                    | Path from the URL.                    |
| `port`                                | *string*                              | :heavy_minus_sign:                    | Port from the URL.                    |
| `scheme`                              | *string*                              | :heavy_minus_sign:                    | URL scheme (e.g., http, https).       |
| `sha1`                                | *string*                              | :heavy_minus_sign:                    | SHA-1 hash of the resource content.   |
| `sha256`                              | *string*                              | :heavy_minus_sign:                    | SHA-256 hash of the resource content. |
| `size`                                | *number*                              | :heavy_minus_sign:                    | Size of the resource in bytes.        |
| `url`                                 | *string*                              | :heavy_minus_sign:                    | Full URL of the resource.             |