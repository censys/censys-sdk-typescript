# ContentType

The media type of the file to upload. Send it bare: a type carrying parameters, such as a charset, is not accepted.

## Example Usage

```typescript
import { ContentType } from "@censys/platform-sdk/models/components";

let value: ContentType = "application/pdf";
```

## Values

```typescript
"application/pdf" | "text/html" | "text/csv" | "text/plain" | "image/png" | "image/jpeg" | "image/webp"
```