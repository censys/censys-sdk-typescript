# ThreatHunting
(*threatHunting*)

## Overview

Endpoints related to the Threat Hunting product

### Available Operations

* [getTrackedScan](#gettrackedscan) - Get tracked scan details
* [createTrackedScan](#createtrackedscan) - Create a tracked discovery scan
* [getTrackedScanThreatHunting](#gettrackedscanthreathunting) - Get tracked scan details
* [valueCounts](#valuecounts) - CensEye: Retrieve value counts to discover pivots

## getTrackedScan

Retrieve the current status and results of a tracked scan by its ID.
        This endpoint works for both discovery scans and rescans.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-globaldata-scans-get" method="get" path="/v3/global/scans/{scan_id}" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.threatHunting.getTrackedScan({
    scanId: "5f39588f-d4c5-48e5-8894-0bb5918c28fa",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@censys/platform-sdk/core.js";
import { globalDataGetTrackedScan } from "@censys/platform-sdk/funcs/globalDataGetTrackedScan.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await globalDataGetTrackedScan(sdk, {
    scanId: "5f39588f-d4c5-48e5-8894-0bb5918c28fa",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("globalDataGetTrackedScan failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3GlobaldataScansGetRequest](../../models/operations/v3globaldatascansgetrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3GlobaldataScansGetResponse](../../models/operations/v3globaldatascansgetresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 401, 403                 | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## createTrackedScan

Create a new tracked discovery scan for a specified target. Discovery scans are used to scan new targets that have not been previously identified. The scan will be queued. The response will contain a scan ID that you can use with the [get tracked scan details endpoint](https://docs.censys.com/reference/v3-globaldata-scans-get#/) to monitor its status and results.<br><br>This endpoint is available to organizations that have access to the Threat Hunting module.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-threathunting-scans-discovery" method="post" path="/v3/threat-hunting/scans/discovery" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.threatHunting.createTrackedScan({
    scansDiscoveryInputBody: {
      target: {
        hostnamePort: {
          hostname: "censys.io",
          port: 443,
        },
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@censys/platform-sdk/core.js";
import { threatHuntingCreateTrackedScan } from "@censys/platform-sdk/funcs/threatHuntingCreateTrackedScan.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await threatHuntingCreateTrackedScan(sdk, {
    scansDiscoveryInputBody: {
      target: {
        hostnamePort: {
          hostname: "censys.io",
          port: 443,
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("threatHuntingCreateTrackedScan failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3ThreathuntingScansDiscoveryRequest](../../models/operations/v3threathuntingscansdiscoveryrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3ThreathuntingScansDiscoveryResponse](../../models/operations/v3threathuntingscansdiscoveryresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 401, 403                 | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## getTrackedScanThreatHunting

Retrieve the current status and results of a tracked scan by its ID.
        This endpoint works for both discovery scans and rescans.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-threathunting-scans-get" method="get" path="/v3/threat-hunting/scans/{scan_id}" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.threatHunting.getTrackedScanThreatHunting({
    scanId: "cd62e794-9f12-4c2f-b5b3-153853aaf8d9",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@censys/platform-sdk/core.js";
import { globalDataGetTrackedScanThreatHunting } from "@censys/platform-sdk/funcs/globalDataGetTrackedScanThreatHunting.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await globalDataGetTrackedScanThreatHunting(sdk, {
    scanId: "cd62e794-9f12-4c2f-b5b3-153853aaf8d9",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("globalDataGetTrackedScanThreatHunting failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3ThreathuntingScansGetRequest](../../models/operations/v3threathuntingscansgetrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3ThreathuntingScansGetResponse](../../models/operations/v3threathuntingscansgetresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 401, 403                 | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## valueCounts

Get counts of web assets for specific field-value pairs and combinations of field-value pairs. This is similar to the [CensEye functionality](https://docs.censys.com/docs/platform-threat-hunting-use-censeye-to-build-detections#/) available in the Platform web UI, but it allows you to define specific fields of interest rather than the [default fields](https://docs.censys.com/docs/platform-threat-hunting-use-censeye-to-build-detections#default-pivot-fields) leveraged by the tool in the UI.<br><br>Each array can only target fields within the same nested object. For example, you can combine `host.services.port=80` and `host.services.protocol=SSH` in the same array, but you cannot combine `host.services.port=80` and `host.location.country=”United States”` in the same array. You can input multiple arrays of objects in each API call.<br><br>To use this endpoint, your organization must have access to the Threat Hunting Module. This endpoint costs 1 credit per count condition (array of objects) included in the API call.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-threathunting-value-counts" method="post" path="/v3/threat-hunting/value-counts" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.threatHunting.valueCounts({
    searchValueCountsInputBody: {
      andCountConditions: [
        {
          fieldValuePairs: [
            {
              field: "host.services.port",
              value: "80",
            },
          ],
        },
        {
          fieldValuePairs: [],
        },
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@censys/platform-sdk/core.js";
import { threatHuntingValueCounts } from "@censys/platform-sdk/funcs/threatHuntingValueCounts.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await threatHuntingValueCounts(sdk, {
    searchValueCountsInputBody: {
      andCountConditions: [
        {
          fieldValuePairs: [
            {
              field: "host.services.port",
              value: "80",
            },
          ],
        },
        {
          fieldValuePairs: [],
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("threatHuntingValueCounts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3ThreathuntingValueCountsRequest](../../models/operations/v3threathuntingvaluecountsrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3ThreathuntingValueCountsResponse](../../models/operations/v3threathuntingvaluecountsresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 401, 403                 | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |