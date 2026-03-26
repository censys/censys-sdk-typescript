# NetworkMobileInfo

## Example Usage

```typescript
import { NetworkMobileInfo } from "@censys/platform-sdk/models/components";

let value: NetworkMobileInfo = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `carrierName`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | The name of the mobile carrier.                                         |
| `mcc`                                                                   | *string*                                                                | :heavy_minus_sign:                                                      | The Mobile Country Code, identifying the country of the mobile network. |
| `mnc`                                                                   | *string*                                                                | :heavy_minus_sign:                                                      | The Mobile Network Code, identifying the specific carrier network.      |