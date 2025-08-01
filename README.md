# censys-sdk-typescript

Developer-friendly & type-safe Typescript SDK specifically catered to leverage the Censys Platform API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=openapi&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- Start Summary [summary] -->
## Summary


<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [censys-sdk-typescript](#censys-sdk-typescript)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Global Parameters](#global-parameters)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Authentication](#authentication)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @censys/platform-sdk
```

### PNPM

```bash
pnpm add @censys/platform-sdk
```

### Bun

```bash
bun add @censys/platform-sdk
```

### Yarn

```bash
yarn add @censys/platform-sdk zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

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

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [collections](docs/sdks/collections/README.md)

* [list](docs/sdks/collections/README.md#list) - List collections
* [create](docs/sdks/collections/README.md#create) - Create a collection
* [delete](docs/sdks/collections/README.md#delete) - Delete a collection
* [get](docs/sdks/collections/README.md#get) - Get a collection
* [update](docs/sdks/collections/README.md#update) - Update a collection
* [listEvents](docs/sdks/collections/README.md#listevents) - Get a collection's events
* [aggregate](docs/sdks/collections/README.md#aggregate) - Aggregate results for a search query within a collection
* [search](docs/sdks/collections/README.md#search) - Run a search query within a collection

### [globalData](docs/sdks/globaldata/README.md)

* [getCertificates](docs/sdks/globaldata/README.md#getcertificates) - Get multiple certificates
* [getCertificate](docs/sdks/globaldata/README.md#getcertificate) - Get a certificate
* [getHostObservationsWithCertificate](docs/sdks/globaldata/README.md#gethostobservationswithcertificate) - Get Host Observations With Certificate
* [getHosts](docs/sdks/globaldata/README.md#gethosts) - Get multiple hosts
* [getHost](docs/sdks/globaldata/README.md#gethost) - Get a host
* [getHostTimeline](docs/sdks/globaldata/README.md#gethosttimeline) - Get host event history
* [getWebProperties](docs/sdks/globaldata/README.md#getwebproperties) - Get multiple web properties
* [getWebProperty](docs/sdks/globaldata/README.md#getwebproperty) - Get a web property
* [createTrackedScan](docs/sdks/globaldata/README.md#createtrackedscan) - Create a tracked rescan
* [getTrackedScan](docs/sdks/globaldata/README.md#gettrackedscan) - Get tracked scan details
* [aggregate](docs/sdks/globaldata/README.md#aggregate) - Aggregate results for a search query
* [search](docs/sdks/globaldata/README.md#search) - Run a search query
* [getTrackedScanThreatHunting](docs/sdks/globaldata/README.md#gettrackedscanthreathunting) - Get tracked scan details


### [threatHunting](docs/sdks/threathunting/README.md)

* [getTrackedScan](docs/sdks/threathunting/README.md#gettrackedscan) - Get tracked scan details
* [createTrackedScan](docs/sdks/threathunting/README.md#createtrackedscan) - Create a tracked discovery scan
* [getTrackedScanThreatHunting](docs/sdks/threathunting/README.md#gettrackedscanthreathunting) - Get tracked scan details
* [valueCounts](docs/sdks/threathunting/README.md#valuecounts) - CensEye: Retrieve value counts to discover pivots

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`collectionsAggregate`](docs/sdks/collections/README.md#aggregate) - Aggregate results for a search query within a collection
- [`collectionsCreate`](docs/sdks/collections/README.md#create) - Create a collection
- [`collectionsDelete`](docs/sdks/collections/README.md#delete) - Delete a collection
- [`collectionsGet`](docs/sdks/collections/README.md#get) - Get a collection
- [`collectionsList`](docs/sdks/collections/README.md#list) - List collections
- [`collectionsListEvents`](docs/sdks/collections/README.md#listevents) - Get a collection's events
- [`collectionsSearch`](docs/sdks/collections/README.md#search) - Run a search query within a collection
- [`collectionsUpdate`](docs/sdks/collections/README.md#update) - Update a collection
- [`globalDataAggregate`](docs/sdks/globaldata/README.md#aggregate) - Aggregate results for a search query
- [`globalDataCreateTrackedScan`](docs/sdks/globaldata/README.md#createtrackedscan) - Create a tracked rescan
- [`globalDataGetCertificate`](docs/sdks/globaldata/README.md#getcertificate) - Get a certificate
- [`globalDataGetCertificates`](docs/sdks/globaldata/README.md#getcertificates) - Get multiple certificates
- [`globalDataGetHost`](docs/sdks/globaldata/README.md#gethost) - Get a host
- [`globalDataGetHostObservationsWithCertificate`](docs/sdks/globaldata/README.md#gethostobservationswithcertificate) - Get Host Observations With Certificate
- [`globalDataGetHosts`](docs/sdks/globaldata/README.md#gethosts) - Get multiple hosts
- [`globalDataGetHostTimeline`](docs/sdks/globaldata/README.md#gethosttimeline) - Get host event history
- [`globalDataGetTrackedScan`](docs/sdks/globaldata/README.md#gettrackedscan) - Get tracked scan details
- [`globalDataGetTrackedScan`](docs/sdks/threathunting/README.md#gettrackedscan) - Get tracked scan details
- [`globalDataGetTrackedScanThreatHunting`](docs/sdks/globaldata/README.md#gettrackedscanthreathunting) - Get tracked scan details
- [`globalDataGetTrackedScanThreatHunting`](docs/sdks/threathunting/README.md#gettrackedscanthreathunting) - Get tracked scan details
- [`globalDataGetWebProperties`](docs/sdks/globaldata/README.md#getwebproperties) - Get multiple web properties
- [`globalDataGetWebProperty`](docs/sdks/globaldata/README.md#getwebproperty) - Get a web property
- [`globalDataSearch`](docs/sdks/globaldata/README.md#search) - Run a search query
- [`threatHuntingCreateTrackedScan`](docs/sdks/threathunting/README.md#createtrackedscan) - Create a tracked discovery scan
- [`threatHuntingValueCounts`](docs/sdks/threathunting/README.md#valuecounts) - CensEye: Retrieve value counts to discover pivots

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Global Parameters [global-parameters] -->
## Global Parameters

A parameter is configured globally. This parameter may be set on the SDK client instance itself during initialization. When configured as an option during SDK initialization, This global value will be used as the default on the operations that use it. When such operations are called, there is a place in each to override the global value, if needed.

For example, you can set `organization_id` to `` at SDK initialization and then you do not have to pass the same value on calls to operations like `list`. But if you want to do so you may, which will locally override the global setting. See the example code below for a demonstration.


### Available Globals

The following global parameter is available.

| Name           | Type   | Description                   |
| -------------- | ------ | ----------------------------- |
| organizationId | string | The organizationId parameter. |

### Example

```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.collections.list({
    pageToken: "<next_page_token>",
    pageSize: 1,
  });

  console.log(result);
}

run();

```
<!-- End Global Parameters [global-parameters] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.collections.list({
    pageToken: "<next_page_token>",
    pageSize: 1,
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.collections.list({
    pageToken: "<next_page_token>",
    pageSize: 1,
  });

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`SDKBaseError`](./src/models/errors/sdkbaseerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { SDK } from "@censys/platform-sdk";
import * as errors from "@censys/platform-sdk/models/errors";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  try {
    const result = await sdk.collections.list({
      pageToken: "<next_page_token>",
      pageSize: 1,
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.SDKBaseError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ErrorModel) {
        console.log(error.data$.detail); // string
        console.log(error.data$.errors); // ErrorDetail[]
        console.log(error.data$.instance); // string
        console.log(error.data$.status); // number
        console.log(error.data$.title); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`SDKBaseError`](./src/models/errors/sdkbaseerror.ts): The base class for HTTP error responses.
  * [`ErrorModel`](./src/models/errors/errormodel.ts): Request does not contain a valid Authorization token. *

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`SDKBaseError`](./src/models/errors/sdkbaseerror.ts)**:
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  serverURL: "https://api.platform.censys.io",
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.collections.list({
    pageToken: "<next_page_token>",
    pageSize: 1,
  });

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { SDK } from "@censys/platform-sdk";
import { HTTPClient } from "@censys/platform-sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new SDK({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name                  | Type | Scheme      |
| --------------------- | ---- | ----------- |
| `personalAccessToken` | http | HTTP Bearer |

To authenticate with the API the `personalAccessToken` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
  organizationId: "11111111-2222-3333-4444-555555555555",
});

async function run() {
  const result = await sdk.collections.list({
    pageToken: "<next_page_token>",
    pageSize: 1,
  });

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=openapi&utm_campaign=typescript)
