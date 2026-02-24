# Greynoise

## Example Usage

```typescript
import { Greynoise } from "@censys/platform-sdk/models/components";

let value: Greynoise = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `actor`                                                              | *string*                                                             | :heavy_minus_sign:                                                   | The actor that was observed.                                         |
| `classification`                                                     | *string*                                                             | :heavy_minus_sign:                                                   | The classification of the IP address.                                |
| `tags`                                                               | [components.GreynoiseTag](../../models/components/greynoisetag.md)[] | :heavy_minus_sign:                                                   | The tags associated with the IP address.                             |