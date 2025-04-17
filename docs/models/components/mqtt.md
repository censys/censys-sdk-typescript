# Mqtt

## Example Usage

```typescript
import { Mqtt } from "@censys/platform-sdk/models/components";

let value: Mqtt = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `connectionAckRaw`                                                                           | *string*                                                                                     | :heavy_minus_sign:                                                                           | Raw CONNACK response packet                                                                  |
| `connectionAckReturn`                                                                        | [components.MqttConnectionAckReturn](../../models/components/mqttconnectionackreturn.md)     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `subscriptionAckReturn`                                                                      | [components.MqttSubscriptionAckReturn](../../models/components/mqttsubscriptionackreturn.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |