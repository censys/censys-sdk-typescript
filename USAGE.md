<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.globalData.search({
    searchQueryInputBody: {
      fields: [
        "host.ip",
      ],
      pageSize: 1,
      query: "host.services: (protocol=SSH and not port: 22)",
    },
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->