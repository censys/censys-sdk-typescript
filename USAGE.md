<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "censys-sdk-typescript";

const sdk = new SDK({
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.globalData.search({
    organizationId: "<id>",
    searchQueryInputBody: {
      query: "<value>",
    },
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->