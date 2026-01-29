# ServerType

An enumerated value indicating the behavior of the server. An AUTHORITATIVE server fulfills requests for domain names it controls, which are not listed by the server. FORWARDING and RECURSIVE_RESOLVER servers fulfill requests indirectly for domain names they do not control. A RECURSIVE_RESOLVER will query ip.parrotdns.com itself, resulting in its own IP address being present in the dns.answers.response field.

## Example Usage

```typescript
import { ServerType } from "@censys/platform-sdk/models/components";

let value: ServerType = "redirecting";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "recursive_resolver" | "authoritative" | "forwarding" | "redirecting" | Unrecognized<string>
```