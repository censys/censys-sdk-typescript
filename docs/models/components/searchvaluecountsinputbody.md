# SearchValueCountsInputBody

## Example Usage

```typescript
import { SearchValueCountsInputBody } from "@censys/platform-sdk/models/components";

let value: SearchValueCountsInputBody = {
  andCountConditions: [],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `andCountConditions`                                                     | [components.CountCondition](../../models/components/countcondition.md)[] | :heavy_check_mark:                                                       | Groups of field-value pairs to count matches for.                        |