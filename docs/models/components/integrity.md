# Integrity

Refers to whether the protected information has been tampered with or changed in any way. If there is no way for an attacker to alter the accuracy or completeness of the information, integrity has been maintained. Integrity has three values: None (N) – There is no loss of the integrity of any information, Low (L) – A limited amount of information might be tampered with or modified, but there is no serious impact on the protected system, High (H) – The attacker can modify any/all information on the target system, resulting in a complete loss of integrity.

## Example Usage

```typescript
import { Integrity } from "@censys/platform-sdk/models/components";

let value: Integrity = "high";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "none" | "low" | "high" | Unrecognized<string>
```