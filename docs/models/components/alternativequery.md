# AlternativeQuery

## Example Usage

```typescript
import { AlternativeQuery } from "@censys/platform-sdk/models/components";

let value: AlternativeQuery = {
  query: "<value>",
  targets: null,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `query`                                                                                                 | *string*                                                                                                | :heavy_check_mark:                                                                                      | An alternative query that may be used.                                                                  |
| `targets`                                                                                               | [components.Targets](../../models/components/targets.md)[]                                              | :heavy_check_mark:                                                                                      | The types of Platform data records (host, cert, and web) that can be targeted by the alternative query. |