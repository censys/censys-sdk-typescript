# ValidationLevel

The extent to which the certificate's issuer validated the identity of the entity requesting the certificate. Options include Domain validated (DV), Organization Validated (OV), or Extended Validation (EV).

## Example Usage

```typescript
import { ValidationLevel } from "@censys/platform-sdk/models/components";

let value: ValidationLevel = "ov";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "dv" | "ov" | "ev" | Unrecognized<string>
```