# PrivacyTorInfoRelayExitPolicySummary

## Example Usage

```typescript
import { PrivacyTorInfoRelayExitPolicySummary } from "@censys/platform-sdk/models/components";

let value: PrivacyTorInfoRelayExitPolicySummary = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `accept`                                                               | *string*[]                                                             | :heavy_minus_sign:                                                     | TCP ports or port ranges that the relay accepts for most IP addresses. |
| `reject`                                                               | *string*[]                                                             | :heavy_minus_sign:                                                     | TCP ports or port ranges that the relay rejects for most IP addresses. |