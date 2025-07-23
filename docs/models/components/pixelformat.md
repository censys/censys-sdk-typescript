# PixelFormat

## Example Usage

```typescript
import { PixelFormat } from "@censys/platform-sdk/models/components";

let value: PixelFormat = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `bigEndian`                                                             | *boolean*                                                               | :heavy_minus_sign:                                                      | If pixel RGB data are in big-endian                                     |
| `bitsPerPixel`                                                          | *number*                                                                | :heavy_minus_sign:                                                      | How many bits in a single full pixel datum. Valid values are: 8, 16, 32 |
| `blueMax`                                                               | *number*                                                                | :heavy_minus_sign:                                                      | Max value of blue pixel                                                 |
| `blueShift`                                                             | *number*                                                                | :heavy_minus_sign:                                                      | How many bits to right shift a pixel datum to get blue bits in lsb      |
| `depth`                                                                 | *number*                                                                | :heavy_minus_sign:                                                      | Color depth                                                             |
| `greenMax`                                                              | *number*                                                                | :heavy_minus_sign:                                                      | Max value of green pixel                                                |
| `greenShift`                                                            | *number*                                                                | :heavy_minus_sign:                                                      | How many bits to right shift a pixel datum to get green bits in lsb     |
| `padding1`                                                              | *number*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `padding2`                                                              | *number*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `padding3`                                                              | *number*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `redMax`                                                                | *number*                                                                | :heavy_minus_sign:                                                      | Max value of red pixel                                                  |
| `redShift`                                                              | *number*                                                                | :heavy_minus_sign:                                                      | How many bits to right shift a pixel datum to get red bits in lsb       |
| `trueColor`                                                             | *boolean*                                                               | :heavy_minus_sign:                                                      | If false, color maps are used                                           |