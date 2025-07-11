# SearchValueCountsInputBody

## Example Usage

```typescript
import { SearchValueCountsInputBody } from "censys-sdk-typescript/models/components";

let value: SearchValueCountsInputBody = {
  andCountConditions: [
    [],
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `andCountConditions`                                                                                         | [components.FieldValuePair](../../models/components/fieldvaluepair.md)[][]                                   | :heavy_check_mark:                                                                                           | Groups of field-value pairs to count matches for. Each group must target fields from the same nested object. |