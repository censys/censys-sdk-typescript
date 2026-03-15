# CreateCenseyeJobInputBody

## Example Usage

```typescript
import { CreateCenseyeJobInputBody } from "@censys/platform-sdk/models/components";

let value: CreateCenseyeJobInputBody = {
  target: {
    certificateId:
      "3daf2843a77b6f4e6af43cd9b6f6746053b8c928e056e8a724808db8905a94cf",
    hostId: "8.8.8.8",
    webpropertyId: "example.com:443",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `target`                                                             | [components.CenseyeTarget](../../models/components/censeyetarget.md) | :heavy_check_mark:                                                   | N/A                                                                  |