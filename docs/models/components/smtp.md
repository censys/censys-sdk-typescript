# Smtp

## Example Usage

```typescript
import { Smtp } from "@censys/platform-sdk/models/components";

let value: Smtp = {};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `ehlo`                                         | *string*                                       | :heavy_minus_sign:                             | The server's response to the EHLO command.     |
| `startTls`                                     | *string*                                       | :heavy_minus_sign:                             | The server's response to the STARTTLS command. |