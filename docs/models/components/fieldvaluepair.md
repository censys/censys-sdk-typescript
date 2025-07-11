# FieldValuePair

## Example Usage

```typescript
import { FieldValuePair } from "censys-sdk-typescript/models/components";

let value: FieldValuePair = {
  field: "<value>",
  value: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `field`            | *string*           | :heavy_check_mark: | The field to match |
| `value`            | *string*           | :heavy_check_mark: | The value to match |