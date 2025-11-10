# OrganizationCredits

## Example Usage

```typescript
import { OrganizationCredits } from "@censys/platform-sdk/models/components";

let value: OrganizationCredits = {
  autoReplenishConfig: {
    enabled: false,
  },
  balance: 1901,
  creditExpirations: null,
  uid: "72643d71-33b4-481f-9839-650fe873bad7",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `autoReplenishConfig`                                                            | [components.AutoReplenishConfig](../../models/components/autoreplenishconfig.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `balance`                                                                        | *number*                                                                         | :heavy_check_mark:                                                               | The current credit balance for the organization.                                 |
| `creditExpirations`                                                              | [components.CreditExpiration](../../models/components/creditexpiration.md)[]     | :heavy_check_mark:                                                               | The credit expirations for the organization.                                     |
| `uid`                                                                            | *string*                                                                         | :heavy_check_mark:                                                               | The ID of a Censys organization.                                                 |