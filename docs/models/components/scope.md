# Scope

Determines whether a vulnerability in one system or component can impact another system or component. If a vulnerability in a vulnerable component can affect a component which is in a different security scope than the vulnerable component, a scope change occurs. Scope has two possible ratings: Changed (C) – An exploited vulnerability can have a carry over impact on another system, Unchanged (U) – The exploited vulnerability is limited in damage to only the local security authority.

## Example Usage

```typescript
import { Scope } from "@censys/platform-sdk/models/components";

let value: Scope = "";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "unchanged" | "changed" | Unrecognized<string>
```