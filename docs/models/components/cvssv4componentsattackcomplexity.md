# CVSSv4ComponentsAttackComplexity

Indicates conditions beyond the attacker’s control that must exist in order to exploit the vulnerability. The Attack Complexity metric is scored as either Low or High. There are two possible values: Low (L) – There are no specific pre-conditions required for exploitation, High (H) – The attacker must complete some number of preparatory steps in order to get access.

## Example Usage

```typescript
import { CVSSv4ComponentsAttackComplexity } from "censys-sdk-typescript/models/components";

let value: CVSSv4ComponentsAttackComplexity = "high";
```

## Values

```typescript
"" | "low" | "high"
```