# AccountManagement

## Overview

Endpoints related to the Account Management product

### Available Operations

* [getOrganizationDetails](#getorganizationdetails) - Get organization details
* [getOrganizationCredits](#getorganizationcredits) - Get organization credit balance
* [getOrganizationCreditUsage](#getorganizationcreditusage) - Get organization credit usage
* [inviteUserToOrganization](#inviteusertoorganization) - Invite user to organization
* [listOrganizationMembers](#listorganizationmembers) - List organization users
* [removeOrganizationMember](#removeorganizationmember) - Remove user from organization
* [updateOrganizationMember](#updateorganizationmember) - Update a user's Platform-wide roles in an organization
* [getMemberCreditUsage](#getmembercreditusage) - Get organization user credit usage
* [removeOrganizationMemberModule](#removeorganizationmembermodule) - Remove a user's module access
* [setOrganizationMemberModuleRole](#setorganizationmembermodulerole) - Set a user's module role
* [getUserCredits](#getusercredits) - Get Free user credit balance
* [getUserCreditsUsage](#getusercreditsusage) - Get Free user credit usage

## getOrganizationDetails

Retrieve an organization's details, including the count of users broken down by [Platform-wide role](https://docs.censys.com/docs/role-based-access-control#platform-wide-roles) and organization settings such as AI training and MFA requirements. Set `include_modules` to true to include entitled modules, available roles, and seat capacity.<br><br>This endpoint does not cost any credits to execute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-accountmanagement-org-details" method="get" path="/v3/accounts/organizations/{organization_id}" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.accountManagement.getOrganizationDetails({
    organizationId: "11111111-2222-3333-4444-555555555555",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@censys/platform-sdk/core.js";
import { accountManagementGetOrganizationDetails } from "@censys/platform-sdk/funcs/accountManagementGetOrganizationDetails.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await accountManagementGetOrganizationDetails(sdk, {
    organizationId: "11111111-2222-3333-4444-555555555555",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountManagementGetOrganizationDetails failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3AccountmanagementOrgDetailsRequest](../../models/operations/v3accountmanagementorgdetailsrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3AccountmanagementOrgDetailsResponse](../../models/operations/v3accountmanagementorgdetailsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ErrorModel          | 403, 404, 422              | application/problem+json   |
| errors.ErrorModel          | 500                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getOrganizationCredits

Retrieve credit balance and expiration information for an organization. <br><br>Credits expire 12 months after they are acquired.<br><br>This endpoint does not cost any credits to execute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-accountmanagement-org-credits" method="get" path="/v3/accounts/organizations/{organization_id}/credits" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.accountManagement.getOrganizationCredits({
    organizationId: "11111111-2222-3333-4444-555555555555",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@censys/platform-sdk/core.js";
import { accountManagementGetOrganizationCredits } from "@censys/platform-sdk/funcs/accountManagementGetOrganizationCredits.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await accountManagementGetOrganizationCredits(sdk, {
    organizationId: "11111111-2222-3333-4444-555555555555",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountManagementGetOrganizationCredits failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3AccountmanagementOrgCreditsRequest](../../models/operations/v3accountmanagementorgcreditsrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3AccountmanagementOrgCreditsResponse](../../models/operations/v3accountmanagementorgcreditsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ErrorModel          | 403, 404, 422              | application/problem+json   |
| errors.ErrorModel          | 500                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getOrganizationCreditUsage

Retrieve credit information for an organization over a specific date range. You must include a start date in your request.<br><br>Users with the Platform Admin role can obtain credit usage information for all users in their organization. Other users may only retrieve usage information for their own account.<br><br>This endpoint does not cost any credits to execute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-accountmanagement-org-credits-usage" method="get" path="/v3/accounts/organizations/{organization_id}/credits/usage" -->
```typescript
import { SDK } from "@censys/platform-sdk";
import { RFCDate } from "@censys/platform-sdk/types";

const sdk = new SDK({
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.accountManagement.getOrganizationCreditUsage({
    organizationId: "11111111-2222-3333-4444-555555555555",
    date: "2025-11-01",
    startDate: new RFCDate("2025-11-01"),
    endDate: new RFCDate("2025-12-01"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@censys/platform-sdk/core.js";
import { accountManagementGetOrganizationCreditUsage } from "@censys/platform-sdk/funcs/accountManagementGetOrganizationCreditUsage.js";
import { RFCDate } from "@censys/platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await accountManagementGetOrganizationCreditUsage(sdk, {
    organizationId: "11111111-2222-3333-4444-555555555555",
    date: "2025-11-01",
    startDate: new RFCDate("2025-11-01"),
    endDate: new RFCDate("2025-12-01"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountManagementGetOrganizationCreditUsage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3AccountmanagementOrgCreditsUsageRequest](../../models/operations/v3accountmanagementorgcreditsusagerequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3AccountmanagementOrgCreditsUsageResponse](../../models/operations/v3accountmanagementorgcreditsusageresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ErrorModel          | 400, 403, 404, 422         | application/problem+json   |
| errors.ErrorModel          | 500                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## inviteUserToOrganization

Invite a user to an organization. The user will receive an email to join the organization. This is equivalent to [adding a new user via the UI](https://docs.censys.com/docs/platform-org-management#invite-members).<br><br>Only users with the Platform Admin role in the provided organization can perform this operation.<br><br>This endpoint does not cost any credits to execute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-accountmanagement-invite-user-to-org" method="post" path="/v3/accounts/organizations/{organization_id}/invitations" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.accountManagement.inviteUserToOrganization({
    organizationId: "11111111-2222-3333-4444-555555555555",
    inviteMemberInputBody: {
      email: "user@example.com",
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
import { accountManagementInviteUserToOrganization } from "@censys/platform-sdk/funcs/accountManagementInviteUserToOrganization.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await accountManagementInviteUserToOrganization(sdk, {
    organizationId: "11111111-2222-3333-4444-555555555555",
    inviteMemberInputBody: {
      email: "user@example.com",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountManagementInviteUserToOrganization failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3AccountmanagementInviteUserToOrgRequest](../../models/operations/v3accountmanagementinviteusertoorgrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3AccountmanagementInviteUserToOrgResponse](../../models/operations/v3accountmanagementinviteusertoorgresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ErrorModel          | 403, 404, 409, 422         | application/problem+json   |
| errors.ErrorModel          | 500                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## listOrganizationMembers

Retrieve a paginated list of an organization's users and their details, including their user ID, email, name, creation time, [Platform-wide roles](https://docs.censys.com/docs/role-based-access-control#platform-wide-roles), and [module roles](https://docs.censys.com/docs/role-based-access-control#module-roles).<br><br>This endpoint does not cost any credits to execute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-accountmanagement-list-org-members" method="get" path="/v3/accounts/organizations/{organization_id}/members" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.accountManagement.listOrganizationMembers({
    organizationId: "11111111-2222-3333-4444-555555555555",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@censys/platform-sdk/core.js";
import { accountManagementListOrganizationMembers } from "@censys/platform-sdk/funcs/accountManagementListOrganizationMembers.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await accountManagementListOrganizationMembers(sdk, {
    organizationId: "11111111-2222-3333-4444-555555555555",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountManagementListOrganizationMembers failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3AccountmanagementListOrgMembersRequest](../../models/operations/v3accountmanagementlistorgmembersrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3AccountmanagementListOrgMembersResponse](../../models/operations/v3accountmanagementlistorgmembersresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ErrorModel          | 403, 404, 422              | application/problem+json   |
| errors.ErrorModel          | 500                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## removeOrganizationMember

Remove a user from an organization. This is equivalent to [removing a user via the UI](https://docs.censys.com/docs/platform-org-management#remove-members).<br><br>Only users with the Platform Admin role in the provided organization can perform this operation.<br><br>This endpoint does not cost any credits to execute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-accountmanagement-remove-org-member" method="delete" path="/v3/accounts/organizations/{organization_id}/members/{user_id}" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.accountManagement.removeOrganizationMember({
    organizationId: "11111111-2222-3333-4444-555555555555",
    userId: "11111111-2222-3333-4444-555555555555",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@censys/platform-sdk/core.js";
import { accountManagementRemoveOrganizationMember } from "@censys/platform-sdk/funcs/accountManagementRemoveOrganizationMember.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await accountManagementRemoveOrganizationMember(sdk, {
    organizationId: "11111111-2222-3333-4444-555555555555",
    userId: "11111111-2222-3333-4444-555555555555",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountManagementRemoveOrganizationMember failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3AccountmanagementRemoveOrgMemberRequest](../../models/operations/v3accountmanagementremoveorgmemberrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3AccountmanagementRemoveOrgMemberResponse](../../models/operations/v3accountmanagementremoveorgmemberresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ErrorModel          | 403, 404, 409, 422         | application/problem+json   |
| errors.ErrorModel          | 500                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## updateOrganizationMember

Update the [Platform-wide roles](https://docs.censys.com/docs/role-based-access-control#platform-wide-roles) assigned to a user in an organization. This operation replaces a user's Platform-wide roles with the list provided in the request body. To remove all assigned Platform-wide roles from a user, provide an empty list. To completely remove a user from an organization, use the [remove user endpoint](https://docs.censys.com/reference/v3-accountmanagement-remove-org-member).<br><br>Only users with the Platform Admin role in the provided organization can perform this operation.<br><br>This endpoint does not cost any credits to execute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-accountmanagement-update-org-member" method="patch" path="/v3/accounts/organizations/{organization_id}/members/{user_id}" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.accountManagement.updateOrganizationMember({
    organizationId: "11111111-2222-3333-4444-555555555555",
    userId: "11111111-2222-3333-4444-555555555555",
    updateMemberRoleInputBody: {
      roles: null,
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
import { accountManagementUpdateOrganizationMember } from "@censys/platform-sdk/funcs/accountManagementUpdateOrganizationMember.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await accountManagementUpdateOrganizationMember(sdk, {
    organizationId: "11111111-2222-3333-4444-555555555555",
    userId: "11111111-2222-3333-4444-555555555555",
    updateMemberRoleInputBody: {
      roles: null,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountManagementUpdateOrganizationMember failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3AccountmanagementUpdateOrgMemberRequest](../../models/operations/v3accountmanagementupdateorgmemberrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3AccountmanagementUpdateOrgMemberResponse](../../models/operations/v3accountmanagementupdateorgmemberresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ErrorModel          | 400, 403, 404, 409, 422    | application/problem+json   |
| errors.ErrorModel          | 500                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getMemberCreditUsage

Retrieve credit consumption information for a user in an organization over a specific date range. You must include a start date in your request.<br><br>This endpoint does not cost any credits to execute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-accountmanagement-member-credits-usage" method="get" path="/v3/accounts/organizations/{organization_id}/members/{user_id}/credits/usage" -->
```typescript
import { SDK } from "@censys/platform-sdk";
import { RFCDate } from "@censys/platform-sdk/types";

const sdk = new SDK({
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.accountManagement.getMemberCreditUsage({
    organizationId: "11111111-2222-3333-4444-555555555555",
    userId: "11111111-2222-3333-4444-555555555555",
    date: "2025-11-01",
    startDate: new RFCDate("2025-11-01"),
    endDate: new RFCDate("2025-12-01"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@censys/platform-sdk/core.js";
import { accountManagementGetMemberCreditUsage } from "@censys/platform-sdk/funcs/accountManagementGetMemberCreditUsage.js";
import { RFCDate } from "@censys/platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await accountManagementGetMemberCreditUsage(sdk, {
    organizationId: "11111111-2222-3333-4444-555555555555",
    userId: "11111111-2222-3333-4444-555555555555",
    date: "2025-11-01",
    startDate: new RFCDate("2025-11-01"),
    endDate: new RFCDate("2025-12-01"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountManagementGetMemberCreditUsage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3AccountmanagementMemberCreditsUsageRequest](../../models/operations/v3accountmanagementmembercreditsusagerequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3AccountmanagementMemberCreditsUsageResponse](../../models/operations/v3accountmanagementmembercreditsusageresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ErrorModel          | 400, 403, 404, 422         | application/problem+json   |
| errors.ErrorModel          | 500                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## removeOrganizationMemberModule

Remove a user's access to the specified module. Only users with the Platform Admin role in the organization can perform this operation. This endpoint does not cost any credits to execute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-accountmanagement-remove-member-module" method="delete" path="/v3/accounts/organizations/{organization_id}/members/{user_id}/modules/{module}" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.accountManagement.removeOrganizationMemberModule({
    organizationId: "11111111-2222-3333-4444-555555555555",
    userId: "11111111-2222-3333-4444-555555555555",
    module: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@censys/platform-sdk/core.js";
import { accountManagementRemoveOrganizationMemberModule } from "@censys/platform-sdk/funcs/accountManagementRemoveOrganizationMemberModule.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await accountManagementRemoveOrganizationMemberModule(sdk, {
    organizationId: "11111111-2222-3333-4444-555555555555",
    userId: "11111111-2222-3333-4444-555555555555",
    module: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountManagementRemoveOrganizationMemberModule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3AccountmanagementRemoveMemberModuleRequest](../../models/operations/v3accountmanagementremovemembermodulerequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3AccountmanagementRemoveMemberModuleResponse](../../models/operations/v3accountmanagementremovemembermoduleresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ErrorModel          | 403, 404, 409, 422         | application/problem+json   |
| errors.ErrorModel          | 500                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## setOrganizationMemberModuleRole

Assign a [module role](https://docs.censys.com/docs/role-based-access-control#module-roles) to a user in an organization or replace their existing role in that module. Only users with the Platform Admin role in the organization can perform this operation. This endpoint does not cost any credits to execute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-accountmanagement-set-member-module-role" method="put" path="/v3/accounts/organizations/{organization_id}/members/{user_id}/modules/{module}" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.accountManagement.setOrganizationMemberModuleRole({
    organizationId: "11111111-2222-3333-4444-555555555555",
    userId: "11111111-2222-3333-4444-555555555555",
    module: "<value>",
    setMemberModuleRoleInputBody: {
      role: "<value>",
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
import { accountManagementSetOrganizationMemberModuleRole } from "@censys/platform-sdk/funcs/accountManagementSetOrganizationMemberModuleRole.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await accountManagementSetOrganizationMemberModuleRole(sdk, {
    organizationId: "11111111-2222-3333-4444-555555555555",
    userId: "11111111-2222-3333-4444-555555555555",
    module: "<value>",
    setMemberModuleRoleInputBody: {
      role: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountManagementSetOrganizationMemberModuleRole failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3AccountmanagementSetMemberModuleRoleRequest](../../models/operations/v3accountmanagementsetmembermodulerolerequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3AccountmanagementSetMemberModuleRoleResponse](../../models/operations/v3accountmanagementsetmembermoduleroleresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ErrorModel          | 400, 403, 404, 409, 422    | application/problem+json   |
| errors.ErrorModel          | 500                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getUserCredits

Retrieve your Free user account credit balance and refresh information. To retrieve the credit balance for a Starter or Enterprise account, use the [get organization credit balance endpoint](https://docs.censys.com/reference/v3-accountmanagement-org-credits).<br><br>This endpoint does not cost any credits to execute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-accountmanagement-user-credits" method="get" path="/v3/accounts/users/credits" -->
```typescript
import { SDK } from "@censys/platform-sdk";

const sdk = new SDK({
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.accountManagement.getUserCredits();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@censys/platform-sdk/core.js";
import { accountManagementGetUserCredits } from "@censys/platform-sdk/funcs/accountManagementGetUserCredits.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await accountManagementGetUserCredits(sdk);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountManagementGetUserCredits failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3AccountmanagementUserCreditsResponse](../../models/operations/v3accountmanagementusercreditsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ErrorModel          | 404                        | application/problem+json   |
| errors.ErrorModel          | 500                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getUserCreditsUsage

Retrieve your Free user account credit consumption information over a specific date range. You must include a start date in your request.<br><br>This endpoint does not cost any credits to execute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v3-accountmanagement-user-credits-usage" method="get" path="/v3/accounts/users/credits/usage" -->
```typescript
import { SDK } from "@censys/platform-sdk";
import { RFCDate } from "@censys/platform-sdk/types";

const sdk = new SDK({
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.accountManagement.getUserCreditsUsage({
    date: "2025-11-01",
    startDate: new RFCDate("2025-11-01"),
    endDate: new RFCDate("2025-12-01"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@censys/platform-sdk/core.js";
import { accountManagementGetUserCreditsUsage } from "@censys/platform-sdk/funcs/accountManagementGetUserCreditsUsage.js";
import { RFCDate } from "@censys/platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  personalAccessToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await accountManagementGetUserCreditsUsage(sdk, {
    date: "2025-11-01",
    startDate: new RFCDate("2025-11-01"),
    endDate: new RFCDate("2025-12-01"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountManagementGetUserCreditsUsage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V3AccountmanagementUserCreditsUsageRequest](../../models/operations/v3accountmanagementusercreditsusagerequest.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3AccountmanagementUserCreditsUsageResponse](../../models/operations/v3accountmanagementusercreditsusageresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ErrorModel          | 400, 404                   | application/problem+json   |
| errors.ErrorModel          | 500                        | application/problem+json   |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |