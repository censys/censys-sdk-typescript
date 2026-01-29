# Reason

An enumerated value indicating the issuer-supplied reason for the revocation.

## Example Usage

```typescript
import { Reason } from "@censys/platform-sdk/models/components";

let value: Reason = "privilege_withdrawn";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "unspecified" | "key_compromise" | "ca_compromise" | "affiliation_changed" | "superseded" | "cessation_of_operation" | "certificate_hold" | "remove_from_crl" | "privilege_withdrawn" | "aa_compromise" | Unrecognized<string>
```