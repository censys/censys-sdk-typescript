# ValidationLevel

The extent to which the certificate's issuer validated the identity of the entity requesting the certificate. Options include Domain validated (DV), Organization Validated (OV), or Extended Validation (EV).

## Example Usage

```typescript
import { ValidationLevel } from "censys-sdk-typescript/models/components";

let value: ValidationLevel = "ov";
```

## Values

```typescript
"unknown" | "dv" | "ov" | "ev"
```