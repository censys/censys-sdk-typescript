# GlobalData
(*globalData*)

## Overview

Endpoints related to the Global Data product

### Available Operations

* [getCertificates](#getcertificates) - Get multiple certificates
* [getCertificatesRaw](#getcertificatesraw) - Get multiple certificates in PEM format
* [getCertificate](#getcertificate) - Get a certificate
* [getCertificateRaw](#getcertificateraw) - Get a certificate in PEM format
* [getHosts](#gethosts) - Get multiple hosts
* [getHost](#gethost) - Get a host
* [getHostTimeline](#gethosttimeline) - Get host event history
* [getWebProperties](#getwebproperties) - Get multiple web properties
* [getWebProperty](#getwebproperty) - Get a web property
* [createTrackedScan](#createtrackedscan) - Live Rescan: Initiate a new rescan
* [getTrackedScan](#gettrackedscan) - Get scan status
* [aggregate](#aggregate) - Aggregate results for a search query
* [convertLegacySearchQueries](#convertlegacysearchqueries) - Convert Legacy Search queries to Platform queries
* [search](#search) - Run a search query

## getCertificates

Retrieve information about multiple certificates. A certificate ID is its SHA-256 fingerprint in the Censys dataset.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-globaldata-asset-certificate-list-post" method="post" path="/v3/global/asset/certificate" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.globalData.getCertificates({
    assetCertificateListInputBody: {
      certificateIds: [
        "3daf2843a77b6f4e6af43cd9b6f6746053b8c928e056e8a724808db8905a94cf",
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
import { globalDataGetCertificates } from "@censys/platform-sdk/funcs/globalDataGetCertificates.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await globalDataGetCertificates(sdk, {
    assetCertificateListInputBody: {
      certificateIds: [
        "3daf2843a77b6f4e6af43cd9b6f6746053b8c928e056e8a724808db8905a94cf",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("globalDataGetCertificates failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3GlobaldataAssetCertificateListPostRequest](../../models/operations/v3globaldataassetcertificatelistpostrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3GlobaldataAssetCertificateListPostResponse](../../models/operations/v3globaldataassetcertificatelistpostresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 401, 403                 | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## getCertificatesRaw

Retrieve the raw PEM-encoded format for multiple certificates. A certificate ID is its SHA-256 fingerprint in the Censys dataset.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-globaldata-asset-certificate-list-raw-post" method="post" path="/v3/global/asset/certificate/raw" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.globalData.getCertificatesRaw({
    assetCertificateListInputBody: {
      certificateIds: [
        "3daf2843a77b6f4e6af43cd9b6f6746053b8c928e056e8a724808db8905a94cf",
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
import { globalDataGetCertificatesRaw } from "@censys/platform-sdk/funcs/globalDataGetCertificatesRaw.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await globalDataGetCertificatesRaw(sdk, {
    assetCertificateListInputBody: {
      certificateIds: [
        "3daf2843a77b6f4e6af43cd9b6f6746053b8c928e056e8a724808db8905a94cf",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("globalDataGetCertificatesRaw failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3GlobaldataAssetCertificateListRawPostRequest](../../models/operations/v3globaldataassetcertificatelistrawpostrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3GlobaldataAssetCertificateListRawPostResponse](../../models/operations/v3globaldataassetcertificatelistrawpostresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 401, 404                 | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## getCertificate

Retrieve information about a single certificate. A certificate ID is its SHA-256 fingerprint in the Censys dataset.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-globaldata-asset-certificate" method="get" path="/v3/global/asset/certificate/{certificate_id}" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.globalData.getCertificate({
    certificateId: "3daf2843a77b6f4e6af43cd9b6f6746053b8c928e056e8a724808db8905a94cf",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@censys/platform-sdk/core.js";
import { globalDataGetCertificate } from "@censys/platform-sdk/funcs/globalDataGetCertificate.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await globalDataGetCertificate(sdk, {
    certificateId: "3daf2843a77b6f4e6af43cd9b6f6746053b8c928e056e8a724808db8905a94cf",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("globalDataGetCertificate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3GlobaldataAssetCertificateRequest](../../models/operations/v3globaldataassetcertificaterequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3GlobaldataAssetCertificateResponse](../../models/operations/v3globaldataassetcertificateresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 401, 403                 | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## getCertificateRaw

Retrieve the raw PEM-encoded format of a certificate. A certificate ID is its SHA-256 fingerprint in the Censys dataset.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-globaldata-asset-certificate-raw" method="get" path="/v3/global/asset/certificate/{certificate_id}/raw" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.globalData.getCertificateRaw({
    certificateId: "3daf2843a77b6f4e6af43cd9b6f6746053b8c928e056e8a724808db8905a94cf",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@censys/platform-sdk/core.js";
import { globalDataGetCertificateRaw } from "@censys/platform-sdk/funcs/globalDataGetCertificateRaw.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await globalDataGetCertificateRaw(sdk, {
    certificateId: "3daf2843a77b6f4e6af43cd9b6f6746053b8c928e056e8a724808db8905a94cf",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("globalDataGetCertificateRaw failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3GlobaldataAssetCertificateRawRequest](../../models/operations/v3globaldataassetcertificaterawrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3GlobaldataAssetCertificateRawResponse](../../models/operations/v3globaldataassetcertificaterawresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 401, 403                 | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## getHosts

Retrieve information about multiple hosts. A host ID is its IP address.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-globaldata-asset-host-list-post" method="post" path="/v3/global/asset/host" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.globalData.getHosts({
    assetHostListInputBody: {
      hostIds: [
        "8.8.8.8",
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
import { globalDataGetHosts } from "@censys/platform-sdk/funcs/globalDataGetHosts.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await globalDataGetHosts(sdk, {
    assetHostListInputBody: {
      hostIds: [
        "8.8.8.8",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("globalDataGetHosts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3GlobaldataAssetHostListPostRequest](../../models/operations/v3globaldataassethostlistpostrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3GlobaldataAssetHostListPostResponse](../../models/operations/v3globaldataassethostlistpostresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 401, 403                 | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## getHost

Retrieve information about a single host. A host ID is its IP address.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-globaldata-asset-host" method="get" path="/v3/global/asset/host/{host_id}" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.globalData.getHost({
    hostId: "8.8.8.8",
    atTime: new Date("2025-01-01T00:00:00Z"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@censys/platform-sdk/core.js";
import { globalDataGetHost } from "@censys/platform-sdk/funcs/globalDataGetHost.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await globalDataGetHost(sdk, {
    hostId: "8.8.8.8",
    atTime: new Date("2025-01-01T00:00:00Z"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("globalDataGetHost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3GlobaldataAssetHostRequest](../../models/operations/v3globaldataassethostrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3GlobaldataAssetHostResponse](../../models/operations/v3globaldataassethostresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 401, 403                 | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## getHostTimeline

Retrieve event history for a host. A host ID is its IP address.<br><br>Note that when a service protocol changes after a new scan (for example, from `UNKNOWN` to `NETBIOS`), this information will only be reflected in the `scan` object. It will not be shown in the `service_scanned diff` object.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-globaldata-asset-host-timeline" method="get" path="/v3/global/asset/host/{host_id}/timeline" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.globalData.getHostTimeline({
    hostId: "8.8.8.8",
    startTime: new Date("2025-01-02T00:00:00Z"),
    endTime: new Date("2025-01-01T00:00:00Z"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@censys/platform-sdk/core.js";
import { globalDataGetHostTimeline } from "@censys/platform-sdk/funcs/globalDataGetHostTimeline.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await globalDataGetHostTimeline(sdk, {
    hostId: "8.8.8.8",
    startTime: new Date("2025-01-02T00:00:00Z"),
    endTime: new Date("2025-01-01T00:00:00Z"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("globalDataGetHostTimeline failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3GlobaldataAssetHostTimelineRequest](../../models/operations/v3globaldataassethosttimelinerequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3GlobaldataAssetHostTimelineResponse](../../models/operations/v3globaldataassethosttimelineresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 401, 403                 | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## getWebProperties

Retrieve information about multiple web properties. Web properties are identified using a combination of a hostname and port joined with a colon, such as `platform.censys.io:80`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-globaldata-asset-webproperty-list-post" method="post" path="/v3/global/asset/webproperty" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.globalData.getWebProperties({
    assetWebpropertyListInputBody: {
      webpropertyIds: [
        "platform.censys.io:80",
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
import { globalDataGetWebProperties } from "@censys/platform-sdk/funcs/globalDataGetWebProperties.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await globalDataGetWebProperties(sdk, {
    assetWebpropertyListInputBody: {
      webpropertyIds: [
        "platform.censys.io:80",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("globalDataGetWebProperties failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3GlobaldataAssetWebpropertyListPostRequest](../../models/operations/v3globaldataassetwebpropertylistpostrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3GlobaldataAssetWebpropertyListPostResponse](../../models/operations/v3globaldataassetwebpropertylistpostresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 401, 403                 | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## getWebProperty

Retrieve information about a single web property. Web properties are identified using a combination of a hostname and port joined with a colon, such as `platform.censys.io:80`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-globaldata-asset-webproperty" method="get" path="/v3/global/asset/webproperty/{webproperty_id}" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.globalData.getWebProperty({
    webpropertyId: "platform.censys.io:80",
    atTime: new Date("2025-01-01T00:00:00Z"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@censys/platform-sdk/core.js";
import { globalDataGetWebProperty } from "@censys/platform-sdk/funcs/globalDataGetWebProperty.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await globalDataGetWebProperty(sdk, {
    webpropertyId: "platform.censys.io:80",
    atTime: new Date("2025-01-01T00:00:00Z"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("globalDataGetWebProperty failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3GlobaldataAssetWebpropertyRequest](../../models/operations/v3globaldataassetwebpropertyrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3GlobaldataAssetWebpropertyResponse](../../models/operations/v3globaldataassetwebpropertyresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 401, 403                 | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## createTrackedScan

Initiate a rescan for a known host service at a specific IP and port (`ip:port`) or hostname and port (`hostname:port`). This is equivalent to the [Live Rescan](https://docs.censys.com/docs/platform-live-rescan#/) feature available in the UI, but you can also target web properties in addition to hosts.<br><br>The scan may take several minutes to complete. The response will contain a scan ID that you can use to [monitor the scan's status](https://docs.censys.com/reference/v3-globaldata-scans-get#/). After the scan completes, perform a lookup on the target asset to retrieve detailed scan information.<br><br>This endpoint is available to all Enterprise customers. It costs 10 credits to execute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-globaldata-scans-rescan" method="post" path="/v3/global/scans/rescan" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.globalData.createTrackedScan({
    scansRescanInputBody: {
      target: {
        webOrigin: {
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
import { globalDataCreateTrackedScan } from "@censys/platform-sdk/funcs/globalDataCreateTrackedScan.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await globalDataCreateTrackedScan(sdk, {
    scansRescanInputBody: {
      target: {
        webOrigin: {
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
    console.log("globalDataCreateTrackedScan failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3GlobaldataScansRescanRequest](../../models/operations/v3globaldatascansrescanrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3GlobaldataScansRescanResponse](../../models/operations/v3globaldatascansrescanresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 401, 403                 | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## getTrackedScan

Retrieve the current status of a scan by its ID. This endpoint works for both [Live Discovery scans](https://docs.censys.com/reference/v3-threathunting-scans-discovery#/) and [Live Rescans](https://docs.censys.com/reference/v3-globaldata-scans-rescan#/).<br><br>If the scan was successful, perform a lookup on the target asset to retrieve detailed scan information.<br><br>This endpoint is available to all Enterprise customers. This endpoint does not cost any credits to execute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-globaldata-scans-get" method="get" path="/v3/global/scans/{scan_id}" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.globalData.getTrackedScan({
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

## aggregate

Aggregate results for a Platform search query. This functionality is equivalent to the [Report Builder](https://docs.censys.com/docs/platform-report-builder#/) in the Platform web UI.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-globaldata-search-aggregate" method="post" path="/v3/global/search/aggregate" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.globalData.aggregate({
    searchAggregateInputBody: {
      field: "host.services.port",
      numberOfBuckets: 100,
      query: "host.services.protocol=SSH",
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
import { globalDataAggregate } from "@censys/platform-sdk/funcs/globalDataAggregate.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await globalDataAggregate(sdk, {
    searchAggregateInputBody: {
      field: "host.services.port",
      numberOfBuckets: 100,
      query: "host.services.protocol=SSH",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("globalDataAggregate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3GlobaldataSearchAggregateRequest](../../models/operations/v3globaldatasearchaggregaterequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3GlobaldataSearchAggregateResponse](../../models/operations/v3globaldatasearchaggregateresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 401, 403                 | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## convertLegacySearchQueries

Convert Censys Search Language queries used in Legacy Search into Censys Query Language (CenQL) queries for use in the Platform.<br><br>Reference the [documentation on CenQL](https://docs.censys.com/docs/censys-query-language) for more information about query syntax.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-globaldata-search-convert" method="post" path="/v3/global/search/convert" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.globalData.convertLegacySearchQueries({
    searchConvertQueryInputBody: {
      queries: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
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
import { globalDataConvertLegacySearchQueries } from "@censys/platform-sdk/funcs/globalDataConvertLegacySearchQueries.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await globalDataConvertLegacySearchQueries(sdk, {
    searchConvertQueryInputBody: {
      queries: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("globalDataConvertLegacySearchQueries failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3GlobaldataSearchConvertRequest](../../models/operations/v3globaldatasearchconvertrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3GlobaldataSearchConvertResponse](../../models/operations/v3globaldatasearchconvertresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 401                      | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## search

Run a search query across Censys data. Reference the [documentation on Censys Query Language](https://docs.censys.com/docs/censys-query-language#/) for information about query syntax.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-globaldata-search-query" method="post" path="/v3/global/search/query" -->
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

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@censys/platform-sdk/core.js";
import { globalDataSearch } from "@censys/platform-sdk/funcs/globalDataSearch.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await globalDataSearch(sdk, {
    searchQueryInputBody: {
      fields: [
        "host.ip",
      ],
      pageSize: 1,
      query: "host.services: (protocol=SSH and not port: 22)",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("globalDataSearch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3GlobaldataSearchQueryRequest](../../models/operations/v3globaldatasearchqueryrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3GlobaldataSearchQueryResponse](../../models/operations/v3globaldatasearchqueryresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 401, 403                 | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |