# V3AccountmanagementOrgDetailsResponse

## Example Usage

```typescript
import { V3AccountmanagementOrgDetailsResponse } from "@censys/platform-sdk/models/operations";

let value: V3AccountmanagementOrgDetailsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {},
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                        | Record<string, *string*[]>                                                                                       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `result`                                                                                                         | [components.ResponseEnvelopeOrganizationDetails](../../models/components/responseenvelopeorganizationdetails.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |