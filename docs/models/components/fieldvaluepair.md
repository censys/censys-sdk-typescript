# FieldValuePair

## Example Usage

```typescript
import { FieldValuePair } from "@censys/platform-sdk/models/components";

let value: FieldValuePair = {
  field: "host.services.port",
  value: "80",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `field`            | *string*           | :heavy_check_mark: | The field to match | host.services.port |
| `value`            | *string*           | :heavy_check_mark: | The value to match | 80                 |