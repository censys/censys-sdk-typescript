# CreditExpiration

## Example Usage

```typescript
import { CreditExpiration } from "@censys/platform-sdk/models/components";

let value: CreditExpiration = {
  balance: 191679,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `balance`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | The current balance of the credit expiration.                                                 |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the credit expiration was created.                                          |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the credit expiration will expire.                                          |