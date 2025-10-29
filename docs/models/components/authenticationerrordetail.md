# AuthenticationErrorDetail

## Example Usage

```typescript
import { AuthenticationErrorDetail } from "@censys/platform-sdk/models/components";

let value: AuthenticationErrorDetail = {
  code: 401,
  message: "Access credentials are invalid",
  reason: "Access token is not active",
  status: "Unauthorized",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `code`                                                          | *number*                                                        | :heavy_minus_sign:                                              | HTTP status code                                                | 401                                                             |
| `message`                                                       | *string*                                                        | :heavy_minus_sign:                                              | Human-readable message describing the error occurrence          | Access credentials are invalid                                  |
| `reason`                                                        | *string*                                                        | :heavy_minus_sign:                                              | Human-readable explanation of the underlying cause of the error | Access token is not active                                      |
| `request`                                                       | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |                                                                 |
| `status`                                                        | *string*                                                        | :heavy_minus_sign:                                              | HTTP status message associated with the error                   | Unauthorized                                                    |