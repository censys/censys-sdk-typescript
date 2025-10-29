# ThreatHunting
(*threatHunting*)

## Overview

Endpoints related to the Threat Hunting product

### Available Operations

* [getHostObservationsWithCertificate](#gethostobservationswithcertificate) - Get host history for a certificate
* [createTrackedScan](#createtrackedscan) - Live Discovery: Initiate a new scan
* [getTrackedScanThreatHunting](#gettrackedscanthreathunting) - Get scan status
* [valueCounts](#valuecounts) - CensEye: Retrieve value counts to discover pivots

## getHostObservationsWithCertificate

Retrieve the historical observations of hosts associated with a certificate. This is useful for threat hunting, detection engineering, and timeline generation. Certificate history is also visible to Threat Hunting users in the Platform UI on the [certificate timeline](https://docs.censys.com/docs/platform-threat-hunting-use-cert-history-to-build-better-detections#/).<br><br>You can define a specific time frame of interest. If you do not specify a time frame, this endpoint will search the historical dataset that is available to your account. You may also filter results by port and transport protocol.<br><br>This endpoint is available to organizations that have access to the Threat Hunting module. It costs 5 credits per page of results.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-threathunting-get-host-observations-with-certificate" method="get" path="/v3/threat-hunting/certificate/{certificate_id}/observations/hosts" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.threatHunting.getHostObservationsWithCertificate({
    certificateId: "55af8a301eb51abdaf7c31bec951638fe5a99d5d92117eca2be493026613fa46",
    startTime: "2023-01-01T00:00:00Z",
    endTime: "2023-12-31T23:59:59Z",
    port: 443,
    protocol: "TCP",
    pageSize: 50,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@censys/platform-sdk/core.js";
import { threatHuntingGetHostObservationsWithCertificate } from "@censys/platform-sdk/funcs/threatHuntingGetHostObservationsWithCertificate.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await threatHuntingGetHostObservationsWithCertificate(sdk, {
    certificateId: "55af8a301eb51abdaf7c31bec951638fe5a99d5d92117eca2be493026613fa46",
    startTime: "2023-01-01T00:00:00Z",
    endTime: "2023-12-31T23:59:59Z",
    port: 443,
    protocol: "TCP",
    pageSize: 50,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("threatHuntingGetHostObservationsWithCertificate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3ThreathuntingGetHostObservationsWithCertificateRequest](../../models/operations/v3threathuntinggethostobservationswithcertificaterequest.md)                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3ThreathuntingGetHostObservationsWithCertificateResponse](../../models/operations/v3threathuntinggethostobservationswithcertificateresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ErrorModel          | 403                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## createTrackedScan

Initiate a scan to look for a currently unobserved service at a specific IP and port (`ip:port`) or hostname and port (`hostname:port`). This is equivalent to the [Live Discovery](https://docs.censys.com/docs/platform-threat-hunting-use-live-scan-and-rescan-to-validate-infrastructure#/) feature available in the UI, but you can also target web properties in addition to hosts.<br><br>The scan may take several minutes to complete. The response will contain a scan ID that you can use to [monitor the scan's status](https://docs.censys.com/reference/v3-threathunting-scans-get#/). After the scan completes, perform a lookup on the target asset to retrieve detailed scan information.<br><br>This endpoint is available to organizations that have access to the Threat Hunting module. It costs 15 credits to execute this endpoint.

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ErrorModel          | 403                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getTrackedScanThreatHunting

Retrieve the current status of a scan by its ID. This endpoint works for both [Live Discovery scans](https://docs.censys.com/reference/v3-threathunting-scans-discovery#/) and [Live Rescans](https://docs.censys.com/reference/v3-globaldata-scans-rescan#/).<br><br>If the scan was successful, perform a lookup on the target asset to retrieve detailed scan information.<br><br>This endpoint is available to all Enterprise customers. This endpoint does not cost any credits to execute.

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
import { threatHuntingGetTrackedScanThreatHunting } from "@censys/platform-sdk/funcs/threatHuntingGetTrackedScanThreatHunting.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await threatHuntingGetTrackedScanThreatHunting(sdk, {
    scanId: "cd62e794-9f12-4c2f-b5b3-153853aaf8d9",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("threatHuntingGetTrackedScanThreatHunting failed:", res.error);
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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ErrorModel          | 403, 404                   | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ErrorModel          | 403                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |