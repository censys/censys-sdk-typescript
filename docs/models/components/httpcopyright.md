# HttpCopyright

## Example Usage

```typescript
import { HttpCopyright } from "@censys/platform-sdk/models/components";

let value: HttpCopyright = {};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `source`                                                                                                             | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | Where in the response the notice was found: meta (a copyright meta tag) or body (text matched in the response body). |
| `text`                                                                                                               | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The copyright notice as it appears in the response.                                                                  |