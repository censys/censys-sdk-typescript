import { describe, it, expect, beforeEach } from "vitest";
import { SDK } from "../src/sdk";
import {
  V3CollectionsCrudCreateRequest,
  V3CollectionsCrudDeleteRequest,
  V3CollectionsCrudGetRequest,
  V3CollectionsCrudUpdateRequest,
  V3CollectionsListEventsRequest,
  V3CollectionsSearchAggregateRequest,
  V3CollectionsSearchQueryRequest,
  V3GlobaldataAssetCertificateListRequest,
  V3GlobaldataAssetCertificateRequest,
  V3GlobaldataAssetHostListRequest,
  V3GlobaldataAssetHostRequest,
  V3GlobaldataAssetHostTimelineRequest,
  V3GlobaldataAssetWebpropertyListRequest,
  V3GlobaldataAssetWebpropertyRequest,
  V3GlobaldataSearchAggregateRequest,
  V3GlobaldataSearchQueryRequest,
  V3ThreathuntingValueCountsRequest,
} from "../src/models/operations";

describe("Censys SDK", () => {
  let sdk: SDK;

  beforeEach(() => {
    sdk = new SDK({
      organizationId: process.env["ORG_ID"],
      personalAccessToken: process.env["TOKEN"],
    });
  });

  describe("Global Data Certificate", () => {
    it("should get certificate by ID", async () => {
      const certID =
        "00000002741c89f06524afbbb4720876bc173aca3a6ce344e08584859b9ac34e";

      const request = {
        certificateId: certID,
      } satisfies V3GlobaldataAssetCertificateRequest;

      const response = await sdk.globalData.getCertificate(request);

      expect(response).toBeDefined();
      expect(response.result.result?.resource.fingerprintSha256).toBe(certID);
    });
  });

  it("should get multiple certificates by IDs", async () => {
    const certIDs = [
      "00000002741c89f06524afbbb4720876bc173aca3a6ce344e08584859b9ac34e",
      "000000033b547e13ee216c65b0ff50237f0decef12acb76fce0a96afa9c70d50",
    ];

    const request = {
      certificateIds: certIDs,
    } satisfies V3GlobaldataAssetCertificateListRequest;

    const response = await sdk.globalData.getCertificates(request);

    expect(response).toBeDefined();
    expect(response.result.result?.length).toBe(certIDs.length);
  });

  describe("Global Data Host List", () => {
    it("should get multiple hosts by IPs", async () => {
      const hostIDs = ["1.1.1.1", "8.8.8.8"];

      const request = {
        hostIds: hostIDs,
      } satisfies V3GlobaldataAssetHostListRequest;

      const response = await sdk.globalData.getHosts(request);

      expect(response).toBeDefined();
    });

    it("should get host by IP with optional time", async () => {
      const hostID = "125.13.31.107";
      const atTime = new Date("2025-03-20T00:00:00Z");

      const request = {
        hostId: hostID,
        atTime,
      } satisfies V3GlobaldataAssetHostRequest;

      const response = await sdk.globalData.getHost(request);

      expect(response).toBeDefined();
      expect(response.result.result).toBeDefined();
    });

    it("should get host timeline with time range", async () => {
      const hostID = "125.13.31.107";
      const startTime = new Date("2025-03-20T00:00:00Z");
      const endTime = new Date("2025-03-22T00:00:00Z");

      const request: V3GlobaldataAssetHostTimelineRequest = {
        hostId: hostID,
        startTime,
        endTime,
      };

      const response = await sdk.globalData.getHostTimeline(request);

      expect(response).toBeDefined();
      expect(response.result.result).toBeDefined();
    });
  });

  describe("Global Data Web Property", () => {
    it("should get web property by ID", async () => {
      const webPropertyID = "104.236.29.250:443";

      const request = {
        webpropertyId: webPropertyID,
      } satisfies V3GlobaldataAssetWebpropertyRequest;

      const response = await sdk.globalData.getWebProperty(request);

      expect(response).toBeDefined();
      expect(response.result.result).toBeDefined();
    });

    it("should get multiple web properties by IDs", async () => {
      const webPropertyIDs = ["104.236.29.250:443", "78.133.74.135:49152"];

      const request = {
        webpropertyIds: webPropertyIDs,
      } satisfies V3GlobaldataAssetWebpropertyListRequest;

      const response = await sdk.globalData.getWebProperties(request);

      expect(response).toBeDefined();
      expect(response.result.result?.length).toBe(webPropertyIDs.length);
    });
  });

  describe("Global Data Search", () => {
    it("should perform aggregate search", async () => {
      const request = {
        searchAggregateInputBody: {
          field: "web.endpoints.http.status_reason",
          numberOfBuckets: 2,
          query: "web.port: *",
        },
      } satisfies V3GlobaldataSearchAggregateRequest;

      const response = await sdk.globalData.aggregate(request);

      expect(response).toBeDefined();
      expect(response.result.result).toBeDefined();
    });

    it("should perform search query", async () => {
      const pageSize = 3;

      const request = {
        searchQueryInputBody: {
          query: "web.port: *",
          pageSize,
          fields: ["web.port"],
        },
      } satisfies V3GlobaldataSearchQueryRequest;

      const response = await sdk.globalData.search(request);

      expect(response).toBeDefined();
      expect(response.result.result).toBeDefined();
    });
  });

  describe("Collections", () => {
    it("should perform full CRUD operations on collections", async () => {
      const randomString = Math.random().toString(36).substring(2, 15); // Make it random to prevent name collisions. Might require manual test clean up from time to time.
      const collectionName = `Test Collection NL - ${randomString}`;
      const collectionDescription = `Test Collection NL - ${randomString} description`;
      const collectionQuery =
        "host.services.protocol='SSH' and host.location.country = 'Netherlands' and host.services.port = 9100 and host.autonomous_system.name = 'WORLDSTREAM'";

      const createRequest = {
        crudCreateInputBody: {
          name: collectionName,
          description: collectionDescription,
          query: collectionQuery,
        },
      } satisfies V3CollectionsCrudCreateRequest;

      const response = await sdk.collections.create(createRequest);
      expect(response).toBeDefined();

      const collectionUid = response.result.result?.id ?? "";
      expect(collectionUid).toBeDefined();

      const getRequest = {
        collectionUid,
      } satisfies V3CollectionsCrudGetRequest;

      const getResult = await sdk.collections.get(getRequest);
      expect(getResult).toBeDefined();

      const listEventsRequest = {
        collectionUid,
      } satisfies V3CollectionsListEventsRequest;

      const listEventsResult = await sdk.collections.listEvents(
        listEventsRequest
      );
      expect(listEventsResult).toBeDefined();

      const searchAggregateRequest = {
        collectionUid,
        searchAggregateInputBody: {
          field: "host.autonomous_system.name",
          numberOfBuckets: 10,
          query: "host.services.labels.value = 'REMOTE_ACCESS'",
        },
      } satisfies V3CollectionsSearchAggregateRequest;

      const searchAggregateResult = await sdk.collections.aggregate(
        searchAggregateRequest
      );
      expect(searchAggregateResult).toBeDefined();

      const searchQueryRequest = {
        collectionUid,
        searchQueryInputBody: {
          query: "host.services.labels.value = 'REMOTE_ACCESS'",
        },
      } satisfies V3CollectionsSearchQueryRequest;

      const searchQueryResult = await sdk.collections.search(
        searchQueryRequest
      );

      expect(searchQueryResult).toBeDefined();

      const newDescription = `New desc - ${randomString} description`;
      const newName = `New name - ${randomString}`;

      const updateRequest = {
        collectionUid,
        crudUpdateInputBody: {
          description: newDescription,
          name: newName,
          query: collectionQuery,
        },
      } satisfies V3CollectionsCrudUpdateRequest;

      const updateResult = await sdk.collections.update(updateRequest);
      expect(updateResult).toBeDefined();

      const updatedGetResult = await sdk.collections.get(getRequest);
      expect(updatedGetResult.result.result?.description).toBe(newDescription);

      const deleteRequest = {
        collectionUid,
      } satisfies V3CollectionsCrudDeleteRequest;

      const deleteResult = await sdk.collections.delete(deleteRequest);
      expect(deleteResult).toBeDefined();

      await expect(sdk.collections.get(getRequest)).rejects.toThrow();
    }, 60_000); // Extra long-lived to ensure it we have time to complete these tests.
  });

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

      expect(response).toBeDefined();
      expect(response.result.result).toBeDefined();
    });
  });
});
