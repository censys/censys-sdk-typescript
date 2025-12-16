# ThreatsListResponse

## Example Usage

```typescript
import { ThreatsListResponse } from "@censys/platform-sdk/models/components";

let value: ThreatsListResponse = {
  threats: [
    {
      count: 958671,
      hostCount: 117041,
      id: "<id>",
      webCount: 100397,
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `threats`                                                                | [components.ThreatListItem](../../models/components/threatlistitem.md)[] | :heavy_check_mark:                                                       | List of active threats observed on the platform.                         |