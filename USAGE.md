<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "censys-sdk-typescript";

const sdk = new SDK({
  organizationId: "<id>",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.globalData.search({
    searchQueryInputBody: {
      query: "<value>",
    },
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->