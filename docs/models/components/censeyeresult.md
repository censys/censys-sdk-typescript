# CenseyeResult

## Example Usage

```typescript
import { CenseyeResult } from "@censys/platform-sdk/models/components";

let value: CenseyeResult = {
  count: 9299.47,
  fieldValuePairs: [
    {
      field: "host.services.port",
      value: "80",
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `count`                                                                  | *number*                                                                 | :heavy_check_mark:                                                       | Number of matching documents for this field-value combination.           |
| `fieldValuePairs`                                                        | [components.FieldValuePair](../../models/components/fieldvaluepair.md)[] | :heavy_check_mark:                                                       | The field-value pairs that were counted.                                 |