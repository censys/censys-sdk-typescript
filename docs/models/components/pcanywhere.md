# PcAnywhere

## Example Usage

```typescript
import { PcAnywhere } from "@censys/platform-sdk/models/components";

let value: PcAnywhere = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `name`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | Workstation Name, with padding bytes removed                               |
| `nr`                                                                       | *string*                                                                   | :heavy_minus_sign:                                                         | Full 'NR' query response                                                   |
| `status`                                                                   | [components.PcAnywhereStatus](../../models/components/pcanywherestatus.md) | :heavy_minus_sign:                                                         | N/A                                                                        |