# AdversaryInvestigation

## Overview

Endpoints related to the Adversary Investigation product

### Available Operations

* [createCenseyeJob](#createcenseyejob) - CensEye: Create a pivot analysis job
* [getCenseyeJob](#getcenseyejob) - CensEye: Get job status
* [getCenseyeJobResults](#getcenseyejobresults) - CensEye: Get job results
* [getHostObservationsWithCertificate](#gethostobservationswithcertificate) - Get host history for a certificate
* [createTrackedScan](#createtrackedscan) - Live Discovery: Initiate a new scan
* [listThreats](#listthreats) - List active threats
* [valueCounts](#valuecounts) - CensEye: Retrieve value counts to discover pivots

## createCenseyeJob

Create an asynchronous CensEye pivot analysis job for a host, web property, or certificate. The job extracts default pivot fields from the target asset and counts matching documents for each field-value pair. Poll the job status endpoint to track progress, then retrieve results when complete.<br><br>To use this endpoint, your organization must have access to the Adversary Investigation module.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-threathunting-censeye-jobs-create" method="post" path="/v3/threat-hunting/censeye/jobs" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.adversaryInvestigation.createCenseyeJob({
    createCenseyeJobInputBody: {
      target: {
        certificateId: "3daf2843a77b6f4e6af43cd9b6f6746053b8c928e056e8a724808db8905a94cf",
        hostId: "8.8.8.8",
        webpropertyId: "example.com:443",
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
import { threatHuntingCreateCenseyeJob } from "@censys/platform-sdk/funcs/threatHuntingCreateCenseyeJob.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await threatHuntingCreateCenseyeJob(sdk, {
    createCenseyeJobInputBody: {
      target: {
        certificateId: "3daf2843a77b6f4e6af43cd9b6f6746053b8c928e056e8a724808db8905a94cf",
        hostId: "8.8.8.8",
        webpropertyId: "example.com:443",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("threatHuntingCreateCenseyeJob failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3ThreathuntingCenseyeJobsCreateRequest](../../models/operations/v3threathuntingcenseyejobscreaterequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3ThreathuntingCenseyeJobsCreateResponse](../../models/operations/v3threathuntingcenseyejobscreateresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ErrorModel          | 400, 403, 422              | application/problem+json   |
| errors.ErrorModel          | 500                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getCenseyeJob

Retrieve the current status of a CensEye pivot analysis job. Use this to poll for completion before fetching results.<br><br>To use this endpoint, your organization must have access to the Adversary Investigation module.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-threathunting-censeye-jobs-get" method="get" path="/v3/threat-hunting/censeye/jobs/{job_id}" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.adversaryInvestigation.getCenseyeJob({
    jobId: "3c47b971-5db6-4a9e-8d59-14fc0486172b",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@censys/platform-sdk/core.js";
import { threatHuntingGetCenseyeJob } from "@censys/platform-sdk/funcs/threatHuntingGetCenseyeJob.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await threatHuntingGetCenseyeJob(sdk, {
    jobId: "3c47b971-5db6-4a9e-8d59-14fc0486172b",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("threatHuntingGetCenseyeJob failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3ThreathuntingCenseyeJobsGetRequest](../../models/operations/v3threathuntingcenseyejobsgetrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3ThreathuntingCenseyeJobsGetResponse](../../models/operations/v3threathuntingcenseyejobsgetresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ErrorModel          | 400, 403, 404              | application/problem+json   |
| errors.ErrorModel          | 500                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getCenseyeJobResults

Retrieve the results of a completed CensEye pivot analysis job. Each result contains a count and the field-value pairs that were analyzed. Results may be empty if the job is still running.<br><br>Results are paginated. Use the `next_page_token` from the response to fetch subsequent pages.<br><br>To use this endpoint, your organization must have access to the Adversary Investigation module.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-threathunting-censeye-job-results" method="get" path="/v3/threat-hunting/censeye/jobs/{job_id}/results" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.adversaryInvestigation.getCenseyeJobResults({
    jobId: "e58e9a0e-e104-42cf-9d0e-fe88713bc6e3",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@censys/platform-sdk/core.js";
import { threatHuntingGetCenseyeJobResults } from "@censys/platform-sdk/funcs/threatHuntingGetCenseyeJobResults.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await threatHuntingGetCenseyeJobResults(sdk, {
    jobId: "e58e9a0e-e104-42cf-9d0e-fe88713bc6e3",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("threatHuntingGetCenseyeJobResults failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3ThreathuntingCenseyeJobResultsRequest](../../models/operations/v3threathuntingcenseyejobresultsrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3ThreathuntingCenseyeJobResultsResponse](../../models/operations/v3threathuntingcenseyejobresultsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ErrorModel          | 400, 403, 404              | application/problem+json   |
| errors.ErrorModel          | 500                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getHostObservationsWithCertificate

Retrieve the historical observations of hosts associated with a certificate. This is useful for threat hunting, detection engineering, and timeline generation. Certificate history is also visible to Adversary Investigation users in the Platform UI on the [certificate timeline](https://docs.censys.com/docs/platform-threat-hunting-use-cert-history-to-build-better-detections#/).<br><br>You can define a specific time frame of interest. If you do not specify a time frame, this endpoint will search the historical dataset that is available to your account. You may also filter results by port and transport protocol.<br><br>This endpoint is available to organizations that have access to the Adversary Investigation module. It costs 5 credits per page of results.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-threathunting-get-host-observations-with-certificate" method="get" path="/v3/threat-hunting/certificate/{certificate_id}/observations/hosts" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.adversaryInvestigation.getHostObservationsWithCertificate({
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
| errors.ErrorModel          | 400, 403, 404              | application/problem+json   |
| errors.ErrorModel          | 500                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## createTrackedScan

Initiate a scan to look for a currently unobserved service at a specific IP and port (`ip:port`) or hostname and port (`hostname:port`). This is equivalent to the [Live Discovery](https://docs.censys.com/docs/platform-threat-hunting-use-live-scan-and-rescan-to-validate-infrastructure#/) feature available in the UI, but you can also target web properties in addition to hosts.<br><br>The scan may take several minutes to complete. The response will contain a scan ID that you can use to [monitor the scan's status](https://docs.censys.com/reference/v3-threathunting-scans-get#/). After the scan completes, perform a lookup on the target asset to retrieve detailed scan information.<br><br>This endpoint is available to organizations that have access to the Adversary Investigation module. It costs 15 credits to execute this endpoint.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-threathunting-scans-discovery" method="post" path="/v3/threat-hunting/scans/discovery" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.adversaryInvestigation.createTrackedScan({
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
| errors.ErrorModel          | 400, 403, 422              | application/problem+json   |
| errors.ErrorModel          | 500                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## listThreats

Retrieve a list of active threats observed by Censys by aggregating threat IDs across hosts and web properties. Threats are active if their fingerprint has been identified on hosts or web properties by Censys scans. This information is also available on the [Explore Threats page in the Platform web UI](https://platform.censys.io/threats).<br><br>This endpoint is available to organizations that have access to the Adversary Investigation module.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-threathunting-threats-list" method="get" path="/v3/threat-hunting/threats" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.adversaryInvestigation.listThreats({
    query: "*",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@censys/platform-sdk/core.js";
import { threatHuntingListThreats } from "@censys/platform-sdk/funcs/threatHuntingListThreats.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await threatHuntingListThreats(sdk, {
    query: "*",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("threatHuntingListThreats failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3ThreathuntingThreatsListRequest](../../models/operations/v3threathuntingthreatslistrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3ThreathuntingThreatsListResponse](../../models/operations/v3threathuntingthreatslistresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ErrorModel          | 400, 403, 422              | application/problem+json   |
| errors.ErrorModel          | 500                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## valueCounts

Get counts of web assets for specific field-value pairs and combinations of field-value pairs. This is similar to the [CensEye functionality](https://docs.censys.com/docs/platform-threat-hunting-use-censeye-to-build-detections#/) available in the Platform web UI, but it allows you to define specific fields of interest rather than the [default fields](https://docs.censys.com/docs/platform-threat-hunting-use-censeye-to-build-detections#default-pivot-fields) leveraged by the tool in the UI.<br><br>Each array can only target fields within the same nested object and may contain at most 5 field-value pairs. For example, you can combine `host.services.port=80` and `host.services.protocol=SSH` in the same array, but you cannot combine `host.services.port=80` and `host.location.country="United States"` in the same array. You can input multiple arrays of objects in each API call.<br><br>To use this endpoint, your organization must have access to the Adversary Investigation module. This endpoint costs 1 credit per count condition (array of objects) included in the API call.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-threathunting-value-counts" method="post" path="/v3/threat-hunting/value-counts" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.adversaryInvestigation.valueCounts({
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
| errors.ErrorModel          | 400, 403, 422              | application/problem+json   |
| errors.ErrorModel          | 500                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |