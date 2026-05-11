# TagsAndComments

## Overview

Endpoints related to asset tagging and commenting

### Available Operations

* [listTags](#listtags) - List tags
* [createTag](#createtag) - Create a tag
* [deleteTag](#deletetag) - Delete a tag
* [getTag](#gettag) - Get a tag
* [updateTag](#updatetag) - Update a tag
* [listTagAssignments](#listtagassignments) - List tag assignments
* [createTagAssignment](#createtagassignment) - Create a tag assignment
* [deleteTagAssignment](#deletetagassignment) - Delete a tag assignment

## listTags

Retrieve a paginated list of tags in your organization. Private tags created by other users are not included in the results unless your account is an organization admin.<br><br>This endpoint does not cost any credits to execute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-tags-list-tags" method="get" path="/v3/tags" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.tagsAndComments.listTags({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@censys/platform-sdk/core.js";
import { tagsAndCommentsListTags } from "@censys/platform-sdk/funcs/tagsAndCommentsListTags.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await tagsAndCommentsListTags(sdk, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tagsAndCommentsListTags failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3TagsListTagsRequest](../../models/operations/v3tagslisttagsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3TagsListTagsResponse](../../models/operations/v3tagslisttagsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ErrorModel          | 403, 422                   | application/problem+json   |
| errors.ErrorModel          | 500                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## createTag

Create a new tag in your organization. Tags can be used to label and organize assets.<br><br>Specify a privacy setting to control visibility: `private` tags are only visible to you and organization admins, while `shared` tags are visible and manageable by all organization members.<br><br>Tag names must be unique within your organization.<br><br>This endpoint does not cost any credits to execute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-tags-create-tag" method="post" path="/v3/tags" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.tagsAndComments.createTag({
    createTagInputBody: {
      name: "<value>",
      privacy: "private",
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
import { tagsAndCommentsCreateTag } from "@censys/platform-sdk/funcs/tagsAndCommentsCreateTag.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await tagsAndCommentsCreateTag(sdk, {
    createTagInputBody: {
      name: "<value>",
      privacy: "private",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tagsAndCommentsCreateTag failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3TagsCreateTagRequest](../../models/operations/v3tagscreatetagrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3TagsCreateTagResponse](../../models/operations/v3tagscreatetagresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ErrorModel          | 403, 409, 422              | application/problem+json   |
| errors.ErrorModel          | 500                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## deleteTag

Delete a tag and all of its assignments from your organization. This action is permanent and cannot be undone.<br><br>Only the tag's creator or an organization admin can delete a `private` tag. Tags that are `shared` can be deleted by any organization member.<br><br>This endpoint does not cost any credits to execute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-tags-delete-tag" method="delete" path="/v3/tags/{tag_id}" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.tagsAndComments.deleteTag({
    tagId: "8e09cd66-475a-4284-88f2-228e9d76dd20",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@censys/platform-sdk/core.js";
import { tagsAndCommentsDeleteTag } from "@censys/platform-sdk/funcs/tagsAndCommentsDeleteTag.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await tagsAndCommentsDeleteTag(sdk, {
    tagId: "8e09cd66-475a-4284-88f2-228e9d76dd20",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tagsAndCommentsDeleteTag failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3TagsDeleteTagRequest](../../models/operations/v3tagsdeletetagrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3TagsDeleteTagResponse](../../models/operations/v3tagsdeletetagresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ErrorModel          | 403, 404, 422              | application/problem+json   |
| errors.ErrorModel          | 500                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getTag

Retrieve a tag by its ID or name. Tag names are unique within an organization and can be used interchangeably with the tag ID in the path parameter.<br><br>Only tags that are visible to the caller are returned: private tags created by other users are not accessible unless your account is an organization admin.<br><br>This endpoint does not cost any credits to execute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-tags-get-tag" method="get" path="/v3/tags/{tag_id}" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.tagsAndComments.getTag({
    tagId: "123e4567-e89b-12d3-a456-426614174000",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@censys/platform-sdk/core.js";
import { tagsAndCommentsGetTag } from "@censys/platform-sdk/funcs/tagsAndCommentsGetTag.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await tagsAndCommentsGetTag(sdk, {
    tagId: "123e4567-e89b-12d3-a456-426614174000",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tagsAndCommentsGetTag failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3TagsGetTagRequest](../../models/operations/v3tagsgettagrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3TagsGetTagResponse](../../models/operations/v3tagsgettagresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ErrorModel          | 403, 404, 422              | application/problem+json   |
| errors.ErrorModel          | 500                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## updateTag

Update an existing tag in your organization. Only the fields provided in the request body will be updated; omitted fields are left unchanged.<br><br>Only the tag's creator or an organization admin can update a `private` tag. Tags with the `shared` setting can be updated by any organization member.<br><br>This endpoint does not cost any credits to execute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-tags-update-tag" method="put" path="/v3/tags/{tag_id}" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.tagsAndComments.updateTag({
    tagId: "8367b125-0db2-4688-accc-c2a97a4bdc56",
    updateTagInputBody: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@censys/platform-sdk/core.js";
import { tagsAndCommentsUpdateTag } from "@censys/platform-sdk/funcs/tagsAndCommentsUpdateTag.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await tagsAndCommentsUpdateTag(sdk, {
    tagId: "8367b125-0db2-4688-accc-c2a97a4bdc56",
    updateTagInputBody: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tagsAndCommentsUpdateTag failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3TagsUpdateTagRequest](../../models/operations/v3tagsupdatetagrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3TagsUpdateTagResponse](../../models/operations/v3tagsupdatetagresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ErrorModel          | 403, 404, 409, 422         | application/problem+json   |
| errors.ErrorModel          | 500                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## listTagAssignments

Retrieve a paginated list of assignments for a tag in your organization. Use query parameters to filter results by asset, created_by, or creation time. Only assignments for tags visible to your account are returned.<br><br>This endpoint does not cost any credits to execute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-tags-list-assignments" method="get" path="/v3/tags/{tag_id}/assignments" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.tagsAndComments.listTagAssignments({
    tagId: "8b1458f5-044a-4cc5-a600-d602c09ca004",
    assetId: "8.8.8.8",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@censys/platform-sdk/core.js";
import { tagsAndCommentsListTagAssignments } from "@censys/platform-sdk/funcs/tagsAndCommentsListTagAssignments.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await tagsAndCommentsListTagAssignments(sdk, {
    tagId: "8b1458f5-044a-4cc5-a600-d602c09ca004",
    assetId: "8.8.8.8",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tagsAndCommentsListTagAssignments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3TagsListAssignmentsRequest](../../models/operations/v3tagslistassignmentsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3TagsListAssignmentsResponse](../../models/operations/v3tagslistassignmentsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ErrorModel          | 403, 404, 422              | application/problem+json   |
| errors.ErrorModel          | 500                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## createTagAssignment

Assign a tag to an asset. Tag assignments are only visible to members of your organization, depending on the tag's privacy settings. You must have access to the tag to assign it to an asset.<br><br>This endpoint does not cost any credits to execute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-tags-create-assignment" method="post" path="/v3/tags/{tag_id}/assignments" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.tagsAndComments.createTagAssignment({
    tagId: "2063be9e-6fe8-43db-9f99-815ede3d1b5c",
    createTagAssignmentInputBody: {
      assetId: "8.8.8.8",
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
import { tagsAndCommentsCreateTagAssignment } from "@censys/platform-sdk/funcs/tagsAndCommentsCreateTagAssignment.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await tagsAndCommentsCreateTagAssignment(sdk, {
    tagId: "2063be9e-6fe8-43db-9f99-815ede3d1b5c",
    createTagAssignmentInputBody: {
      assetId: "8.8.8.8",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tagsAndCommentsCreateTagAssignment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3TagsCreateAssignmentRequest](../../models/operations/v3tagscreateassignmentrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3TagsCreateAssignmentResponse](../../models/operations/v3tagscreateassignmentresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ErrorModel          | 403, 404, 409, 422         | application/problem+json   |
| errors.ErrorModel          | 500                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## deleteTagAssignment

Remove a tag assignment from an asset. This action is permanent and cannot be undone. Removing an assignment only detaches the tag from the specified asset; the tag itself is not deleted. Only the tag's creator or an organization admin can delete an assignment for a `private` tag. Assignments for `shared` tags can be deleted by any organization member.<br><br>This endpoint does not cost any credits to execute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-tags-delete-assignment" method="delete" path="/v3/tags/{tag_id}/assignments/{assignment_id}" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.tagsAndComments.deleteTagAssignment({
    tagId: "ad98c1dc-289b-4487-b11f-d41cd4391806",
    assignmentId: "35060ce7-9fe8-4c5f-9889-efb0572473c2",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@censys/platform-sdk/core.js";
import { tagsAndCommentsDeleteTagAssignment } from "@censys/platform-sdk/funcs/tagsAndCommentsDeleteTagAssignment.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  organizationId: "11111111-2222-3333-4444-555555555555",
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await tagsAndCommentsDeleteTagAssignment(sdk, {
    tagId: "ad98c1dc-289b-4487-b11f-d41cd4391806",
    assignmentId: "35060ce7-9fe8-4c5f-9889-efb0572473c2",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tagsAndCommentsDeleteTagAssignment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3TagsDeleteAssignmentRequest](../../models/operations/v3tagsdeleteassignmentrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3TagsDeleteAssignmentResponse](../../models/operations/v3tagsdeleteassignmentresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ErrorModel          | 403, 404, 422              | application/problem+json   |
| errors.ErrorModel          | 500                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |