# Availability

If an attack renders information unavailable, such as when a system crashes or through a DDoS attack, availability is negatively impacted. Availability has three possible values: None (N) – There is no loss of availability, Low (L) – Availability might be intermittently limited, or performance might be negatively impacted, as a result of a successful attack, High (H) – There is a complete loss of availability of the impacted system or information.

## Example Usage

```typescript
import { Availability } from "@censys/platform-sdk/models/components";

let value: Availability = "high";
```

## Values

```typescript
"" | "none" | "low" | "high"
```