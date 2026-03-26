# CVSSv4ComponentsPrivilegesRequired

Describes the level of privileges or access an attacker must have before successful exploitation. There are three possible values: None (N) – There is no privilege or special access required to conduct the attack, Low (L) – The attacker requires basic, “user” level privileges to leverage the exploit, High (H) – Administrative or similar access privileges are required for successful attack.

## Example Usage

```typescript
import { CVSSv4ComponentsPrivilegesRequired } from "@censys/platform-sdk/models/components";

let value: CVSSv4ComponentsPrivilegesRequired = "none";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"" | "none" | "low" | "high" | Unrecognized<string>
```