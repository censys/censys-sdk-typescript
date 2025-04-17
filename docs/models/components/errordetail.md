# ErrorDetail

## Example Usage

```typescript
import { ErrorDetail } from "@censys/platform-sdk/models/components";

let value: ErrorDetail = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `location`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | Where the error occurred, e.g. 'body.items[3].tags' or 'path.thing-id' |
| `message`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | Error message text                                                     |
| `value`                                                                | *any*                                                                  | :heavy_minus_sign:                                                     | The value at the given location                                        |