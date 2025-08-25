# SearchConvertQueryInputBody

## Example Usage

```typescript
import { SearchConvertQueryInputBody } from "@censys/platform-sdk/models/components";

let value: SearchConvertQueryInputBody = {
  queries: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `queries`                                                                    | *string*[]                                                                   | :heavy_check_mark:                                                           | A list of Censys Search Language queries to convert. Limited to 100 queries. |