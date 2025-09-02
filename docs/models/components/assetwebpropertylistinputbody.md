# AssetWebpropertyListInputBody

## Example Usage

```typescript
import { AssetWebpropertyListInputBody } from "@censys/platform-sdk/models/components";

let value: AssetWebpropertyListInputBody = {
  webpropertyIds: [
    "platform.censys.io:80",
  ],
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `webpropertyIds`                    | *string*[]                          | :heavy_check_mark:                  | A list of web property identifiers. | platform.censys.io:80               |