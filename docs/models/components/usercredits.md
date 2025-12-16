# UserCredits

## Example Usage

```typescript
import { UserCredits } from "@censys/platform-sdk/models/components";

let value: UserCredits = {
  balance: 918855,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `balance`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | The current credit balance for the user.                                                      |
| `resetsAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date that the user's credits will be reset.                                               |