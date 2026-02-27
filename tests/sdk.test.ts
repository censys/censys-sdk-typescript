import { describe, it, expect, beforeEach } from "vitest";
import { SDK } from "@censys/platform-sdk";
import { RFCDate } from "@censys/platform-sdk/types";
import {
  V3GlobaldataAssetCertificateListPostRequest,
  V3GlobaldataAssetCertificateListRawPostRequest,
  V3GlobaldataAssetCertificateRequest,
  V3GlobaldataAssetCertificateRawRequest,
  V3GlobaldataAssetHostListPostRequest,
  V3GlobaldataAssetHostRequest,
  V3GlobaldataAssetHostTimelineRequest,
  V3GlobaldataAssetWebpropertyListPostRequest,
  V3GlobaldataAssetWebpropertyRequest,
  V3GlobaldataSearchAggregateRequest,
  V3GlobaldataSearchQueryRequest,
  V3GlobaldataSearchConvertRequest,
  V3GlobaldataScansRescanRequest,
  V3GlobaldataScansGetRequest,
  V3CollectionsCrudCreateRequest,
  V3CollectionsCrudDeleteRequest,
  V3CollectionsCrudGetRequest,
  V3CollectionsCrudUpdateRequest,
  V3CollectionsListEventsRequest,
  V3CollectionsSearchAggregateRequest,
  V3CollectionsSearchQueryRequest,
  V3AccountmanagementOrgDetailsRequest,
  V3AccountmanagementOrgCreditsRequest,
  V3AccountmanagementOrgCreditsUsageRequest,
  V3AccountmanagementListOrgMembersRequest,
  V3AccountmanagementMemberCreditsUsageRequest,
  V3AccountmanagementUserCreditsUsageRequest,
  V3ThreathuntingValueCountsRequest,
  V3ThreathuntingGetHostObservationsWithCertificateRequest,
  V3ThreathuntingThreatsListRequest,
  V3ThreathuntingScansDiscoveryRequest,
  V3ThreathuntingScansGetRequest,
} from "@censys/platform-sdk/models/operations";

const CERT_IDS = [
  "00000002741c89f06524afbbb4720876bc173aca3a6ce344e08584859b9ac34e",
  "000000033b547e13ee216c65b0ff50237f0decef12acb76fce0a96afa9c70d50",
];
const HOST_IDS = ["1.1.1.1", "8.8.8.8"];
const WEB_PROPERTY_IDS = ["104.236.29.250:443", "78.133.74.135:49152"];
const COLLECTION_QUERY =
  "host.services.protocol='SSH' and host.location.country = 'Netherlands' and host.services.port = 9100 and host.autonomous_system.name = 'WORLDSTREAM'";

function thirtyDaysAgo(): RFCDate {
  const d = new Date();
  d.setDate(d.getDate() - 30);
  return new RFCDate(d);
}

describe("Censys SDK", () => {
  let sdk: SDK;
  const orgId = process.env["ORG_ID"]!;

  beforeEach(() => {
    sdk = new SDK({
      organizationId: orgId,
      personalAccessToken: process.env["TOKEN"],
    });
  });

  // ---------------------------------------------------------------------------
  // Global Data
  // ---------------------------------------------------------------------------
  describe("Global Data", () => {
    describe("Certificates", () => {
      it("should get certificate by ID", async () => {
        const request = {
          certificateId: CERT_IDS[0],
        } satisfies V3GlobaldataAssetCertificateRequest;

        const response = await sdk.globalData.getCertificate(request);
        expect(response.result.result?.resource.fingerprintSha256).toBe(
          CERT_IDS[0]
        );
      });

      it("should get certificate in raw format by ID", async () => {
        const request = {
          certificateId: CERT_IDS[0],
        } satisfies V3GlobaldataAssetCertificateRawRequest;

        const response = await sdk.globalData.getCertificateRaw(request);
        expect(response.result).toBeDefined();
      });

      it("should get multiple certificates by IDs", async () => {
        const request = {
          assetCertificateListInputBody: { certificateIds: CERT_IDS },
        } satisfies V3GlobaldataAssetCertificateListPostRequest;

        const response = await sdk.globalData.getCertificates(request);
        expect(response.result.result?.length).toBe(CERT_IDS.length);
      });

      it("should get multiple certificates in raw format by IDs", async () => {
        const request = {
          assetCertificateListInputBody: { certificateIds: CERT_IDS },
        } satisfies V3GlobaldataAssetCertificateListRawPostRequest;

        const response = await sdk.globalData.getCertificatesRaw(request);
        expect(response.result).toBeDefined();
      });
    });

    describe("Hosts", () => {
      it("should get multiple hosts by IPs", async () => {
        const request = {
          assetHostListInputBody: { hostIds: HOST_IDS },
        } satisfies V3GlobaldataAssetHostListPostRequest;

        const response = await sdk.globalData.getHosts(request);
        expect(response).toBeDefined();
      });

      it("should get host by IP", async () => {
        const request = {
          hostId: "1.1.1.1",
          atTime: new Date("2025-03-20T00:00:00Z"),
        } satisfies V3GlobaldataAssetHostRequest;

        const response = await sdk.globalData.getHost(request);
        expect(response.result.result).toBeDefined();
      });

      it(
        "should get host timeline",
        async () => {
          const request: V3GlobaldataAssetHostTimelineRequest = {
            hostId: "125.13.31.107",
            startTime: new Date("2025-03-20T00:00:00Z"),
            endTime: new Date("2025-03-22T00:00:00Z"),
          };

          const response = await sdk.globalData.getHostTimeline(request);
          expect(response.result.result).toBeDefined();
        },
        30_000
      );
    });

    describe("Web Properties", () => {
      it("should get web property by ID", async () => {
        const request = {
          webpropertyId: WEB_PROPERTY_IDS[0],
        } satisfies V3GlobaldataAssetWebpropertyRequest;

        const response = await sdk.globalData.getWebProperty(request);
        expect(response.result.result).toBeDefined();
      });

      it("should get multiple web properties by IDs", async () => {
        const request = {
          assetWebpropertyListInputBody: {
            webpropertyIds: WEB_PROPERTY_IDS,
          },
        } satisfies V3GlobaldataAssetWebpropertyListPostRequest;

        const response = await sdk.globalData.getWebProperties(request);
        expect(response.result.result?.length).toBe(WEB_PROPERTY_IDS.length);
      });
    });

    describe("Search", () => {
      it("should perform search query", async () => {
        const request = {
          searchQueryInputBody: {
            query: "web.port: *",
            pageSize: 3,
            fields: ["web.port"],
          },
        } satisfies V3GlobaldataSearchQueryRequest;

        const response = await sdk.globalData.search(request);
        expect(response.result.result).toBeDefined();
      });

      it("should perform aggregate search", async () => {
        const request = {
          searchAggregateInputBody: {
            field: "web.endpoints.http.status_reason",
            numberOfBuckets: 2,
            query: "web.port: *",
          },
        } satisfies V3GlobaldataSearchAggregateRequest;

        const response = await sdk.globalData.aggregate(request);
        expect(response.result.result).toBeDefined();
      });

      it("should convert legacy search queries", async () => {
        const request = {
          searchConvertQueryInputBody: {
            queries: ["parsed.names: censys.io AND tags: trusted"],
          },
        } satisfies V3GlobaldataSearchConvertRequest;

        const response =
          await sdk.globalData.convertLegacySearchQueries(request);
        expect(response.result.result).toBeDefined();
      });
    });

    describe("Tracked Scans (Live Rescan)", () => {
      it("should create and get a tracked scan", async () => {
        const createRequest = {
          scansRescanInputBody: {
            target: {
              serviceId: {
                ip: "1.1.1.1",
                port: 443,
                protocol: "HTTP",
                transportProtocol: "tcp" as const,
              },
            },
          },
        } satisfies V3GlobaldataScansRescanRequest;

        const createResponse =
          await sdk.globalData.createTrackedScan(createRequest);
        const scanId = createResponse.result.result?.trackedScanId ?? "";
        expect(scanId).toBeTruthy();

        const getRequest = { scanId } satisfies V3GlobaldataScansGetRequest;
        const getResponse = await sdk.globalData.getTrackedScan(getRequest);
        expect(getResponse.result.result).toBeDefined();
      });
    });
  });

  // ---------------------------------------------------------------------------
  // Collections
  // ---------------------------------------------------------------------------
  describe("Collections", () => {
    it("should list collections", async () => {
      const response = await sdk.collections.list({});
      expect(response.result.result).toBeDefined();
    });

    it(
      "should perform full CRUD operations",
      async () => {
        const tag = Math.random().toString(36).substring(2, 15);
        const name = `Test Collection TS - ${tag}`;
        const description = `Description - ${tag}`;

        // Create
        const createRequest = {
          crudCreateInputBody: {
            name,
            description,
            query: COLLECTION_QUERY,
          },
        } satisfies V3CollectionsCrudCreateRequest;
        const createResponse = await sdk.collections.create(createRequest);
        const collectionUid = createResponse.result.result?.id ?? "";
        expect(collectionUid).toBeTruthy();

        // Get
        const getRequest = {
          collectionUid,
        } satisfies V3CollectionsCrudGetRequest;
        const getResponse = await sdk.collections.get(getRequest);
        expect(getResponse.result.result?.name).toBe(name);

        // List Events
        const listEventsRequest = {
          collectionUid,
        } satisfies V3CollectionsListEventsRequest;
        const listEventsResponse =
          await sdk.collections.listEvents(listEventsRequest);
        expect(listEventsResponse).toBeDefined();

        // Aggregate
        const aggregateRequest = {
          collectionUid,
          searchAggregateInputBody: {
            field: "host.autonomous_system.name",
            numberOfBuckets: 10,
            query: "host.services.labels.value = 'REMOTE_ACCESS'",
          },
        } satisfies V3CollectionsSearchAggregateRequest;
        const aggregateResponse =
          await sdk.collections.aggregate(aggregateRequest);
        expect(aggregateResponse).toBeDefined();

        // Search
        const searchRequest = {
          collectionUid,
          searchQueryInputBody: {
            query: "host.services.labels.value = 'REMOTE_ACCESS'",
          },
        } satisfies V3CollectionsSearchQueryRequest;
        const searchResponse = await sdk.collections.search(searchRequest);
        expect(searchResponse).toBeDefined();

        // Update
        const newName = `Updated - ${tag}`;
        const updateRequest = {
          collectionUid,
          crudUpdateInputBody: {
            name: newName,
            description,
            query: COLLECTION_QUERY,
          },
        } satisfies V3CollectionsCrudUpdateRequest;
        const updateResponse = await sdk.collections.update(updateRequest);
        expect(updateResponse).toBeDefined();

        const updatedGet = await sdk.collections.get(getRequest);
        expect(updatedGet.result.result?.name).toBe(newName);

        // Delete
        const deleteRequest = {
          collectionUid,
        } satisfies V3CollectionsCrudDeleteRequest;
        await sdk.collections.delete(deleteRequest);

        await expect(sdk.collections.get(getRequest)).rejects.toThrow();
      },
      60_000
    );
  });

  // ---------------------------------------------------------------------------
  // Account Management
  // ---------------------------------------------------------------------------
  describe("Account Management", () => {
    describe("Organization", () => {
      it("should get organization details", async () => {
        const request = {
          organizationId: orgId,
          includeMemberCounts: true,
        } satisfies V3AccountmanagementOrgDetailsRequest;

        const response =
          await sdk.accountManagement.getOrganizationDetails(request);
        expect(response.result.result).toBeDefined();
      });

      it("should get organization credits", async () => {
        const request = {
          organizationId: orgId,
        } satisfies V3AccountmanagementOrgCreditsRequest;

        const response =
          await sdk.accountManagement.getOrganizationCredits(request);
        expect(response.result.result).toBeDefined();
      });

      it("should get organization credit usage", async () => {
        const request = {
          organizationId: orgId,
          startDate: thirtyDaysAgo(),
          granularity: "daily",
        } satisfies V3AccountmanagementOrgCreditsUsageRequest;

        const response =
          await sdk.accountManagement.getOrganizationCreditUsage(request);
        expect(response.result.result).toBeDefined();
      });
    });

    describe("Members", () => {
      it("should list organization members", async () => {
        const request = {
          organizationId: orgId,
        } satisfies V3AccountmanagementListOrgMembersRequest;

        const response =
          await sdk.accountManagement.listOrganizationMembers(request);
        expect(response.result.result).toBeDefined();
      });

      it("should get member credit usage", async () => {
        const membersResponse =
          await sdk.accountManagement.listOrganizationMembers({
            organizationId: orgId,
          });
        const userId =
          membersResponse.result.result?.members?.[0]?.uid ?? "";
        expect(userId).toBeTruthy();

        const request = {
          organizationId: orgId,
          userId,
          startDate: thirtyDaysAgo(),
          granularity: "daily",
        } satisfies V3AccountmanagementMemberCreditsUsageRequest;

        const response =
          await sdk.accountManagement.getMemberCreditUsage(request);
        expect(response.result.result).toBeDefined();
      });
    });

    describe("User", () => {
      it("should get user credits", async () => {
        const response = await sdk.accountManagement.getUserCredits();
        expect(response.result.result).toBeDefined();
      });

      it("should get user credit usage", async () => {
        const request = {
          startDate: thirtyDaysAgo(),
          granularity: "daily",
        } satisfies V3AccountmanagementUserCreditsUsageRequest;

        const response =
          await sdk.accountManagement.getUserCreditsUsage(request);
        expect(response.result.result).toBeDefined();
      });
    });
  });

  // ---------------------------------------------------------------------------
  // Threat Hunting
  // ---------------------------------------------------------------------------
  describe("Threat Hunting", () => {
    it("should perform value counts search", async () => {
      const request = {
        searchValueCountsInputBody: {
          andCountConditions: [
            {
              fieldValuePairs: [
                { field: "host.services.port", value: "80" },
                { field: "host.services.protocol", value: "SSH" },
              ],
            },
          ],
        },
      } satisfies V3ThreathuntingValueCountsRequest;

      const response = await sdk.threatHunting.valueCounts(request);
      expect(response.result.result).toBeDefined();
    });

    it("should get host observations with certificate", async () => {
      const request = {
        certificateId: CERT_IDS[0],
      } satisfies V3ThreathuntingGetHostObservationsWithCertificateRequest;

      const response =
        await sdk.threatHunting.getHostObservationsWithCertificate(request);
      expect(response.result.result).toBeDefined();
    });

    it("should list threats", async () => {
      const request = {} satisfies V3ThreathuntingThreatsListRequest;

      const response = await sdk.threatHunting.listThreats(request);
      expect(response.result.result).toBeDefined();
    });

    it("should create and get a tracked scan (Live Discovery)", async () => {
      const createRequest = {
        scansDiscoveryInputBody: {
          target: {
            hostPort: {
              ip: "1.1.1.1",
              port: 443,
            },
          },
        },
      } satisfies V3ThreathuntingScansDiscoveryRequest;

      const createResponse =
        await sdk.threatHunting.createTrackedScan(createRequest);
      const scanId = createResponse.result.result?.trackedScanId ?? "";
      expect(scanId).toBeTruthy();

      const getRequest = { scanId } satisfies V3ThreathuntingScansGetRequest;
      const getResponse =
        await sdk.threatHunting.getTrackedScanThreatHunting(getRequest);
      expect(getResponse.result.result).toBeDefined();
    });
  });
});
