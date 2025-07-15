# CountCondition

## Example Usage

```typescript
import { CountCondition } from "censys-sdk-typescript/models/components";

let value: CountCondition = {
  fieldValuePairs: [
    {
      field: "host.services.port",
      value: "80",
    },
  ],
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `fieldValuePairs`                                                                       | [components.FieldValuePair](../../models/components/fieldvaluepair.md)[]                | :heavy_check_mark:                                                                      | Field-value pairs to count matches for. Must target fields from the same nested object. |