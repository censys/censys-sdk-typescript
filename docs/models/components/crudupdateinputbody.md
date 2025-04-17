# CrudUpdateInputBody

## Example Usage

```typescript
import { CrudUpdateInputBody } from "@censys/platform-sdk/models/components";

let value: CrudUpdateInputBody = {
  description: "Hosts with services with AsyncRAT indicator in cert subject DN",
  name: "Hosts services with AsyncRAT indicator",
  query: "host.services.cert.parsed.subject_dn: \"asyncrat\"",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `description`                                                  | *string*                                                       | :heavy_minus_sign:                                             | description of the collection                                  | Hosts with services with AsyncRAT indicator in cert subject DN |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | name of the collection                                         | Hosts services with AsyncRAT indicator                         |
| `query`                                                        | *string*                                                       | :heavy_check_mark:                                             | query string to search upon to build the collection            | host.services.cert.parsed.subject_dn: "asyncrat"               |