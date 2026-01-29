# UserInteraction

Describes whether a user, other than the attacker, is required to do anything or participate in exploitation of the vulnerability. User interaction has two possible values: None (N) – No user interaction is required, Required (R) – A user must complete some steps for the exploit to succeed. For example, a user might be required to install some software.

## Example Usage

```typescript
import { UserInteraction } from "@censys/platform-sdk/models/components";

let value: UserInteraction = "required";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "none" | "required" | Unrecognized<string>
```