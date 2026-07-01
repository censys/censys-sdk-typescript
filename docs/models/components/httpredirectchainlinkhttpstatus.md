# HttpRedirectChainLinkHttpStatus

## Example Usage

```typescript
import { HttpRedirectChainLinkHttpStatus } from "@censys/platform-sdk/models/components";

let value: HttpRedirectChainLinkHttpStatus = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `code`                                                                           | *number*                                                                         | :heavy_minus_sign:                                                               | A 3-digit integer result code indicating the result of the redirecting response. |
| `reason`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | A human-readable phrase describing the status code.                              |