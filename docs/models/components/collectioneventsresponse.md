# CollectionEventsResponse

## Example Usage

```typescript
import { CollectionEventsResponse } from "censys-sdk-typescript/models/components";

let value: CollectionEventsResponse = {
  events: [
    {},
  ],
  nextPage: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `events`                                                                   | [components.CollectionEvent](../../models/components/collectionevent.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `nextPage`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |