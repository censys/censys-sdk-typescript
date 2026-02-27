# ServicesOnHostResponse

## Example Usage

```typescript
import { ServicesOnHostResponse } from "@censys/platform-sdk/models/components";

let value: ServicesOnHostResponse = {
  nextPageToken: "<value>",
  ranges: [],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `nextPageToken`                                                                  | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `ranges`                                                                         | [components.ServiceOnHostRange](../../models/components/serviceonhostrange.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |