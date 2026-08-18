// package: sandboxes.api.v1
// file: sandboxes/api/v1/trafficservice.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as sandboxes_api_v1_resource_pb from "../../../sandboxes/api/v1/resource_pb";
import * as sandboxes_api_v1_resource_trafficsession_pb from "../../../sandboxes/api/v1/resource_trafficsession_pb";
import * as sandboxes_api_v1_workload_pb from "../../../sandboxes/api/v1/workload_pb";

export class TrafficSessionsQuery extends jspb.Message { 
    getSandboxName(): string;
    setSandboxName(value: string): TrafficSessionsQuery;

    hasActivatedSince(): boolean;
    clearActivatedSince(): void;
    getActivatedSince(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setActivatedSince(value?: google_protobuf_timestamp_pb.Timestamp): TrafficSessionsQuery;

    hasActivatedBefore(): boolean;
    clearActivatedBefore(): void;
    getActivatedBefore(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setActivatedBefore(value?: google_protobuf_timestamp_pb.Timestamp): TrafficSessionsQuery;

    hasCompletedSince(): boolean;
    clearCompletedSince(): void;
    getCompletedSince(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCompletedSince(value?: google_protobuf_timestamp_pb.Timestamp): TrafficSessionsQuery;

    hasCompletedBefore(): boolean;
    clearCompletedBefore(): void;
    getCompletedBefore(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCompletedBefore(value?: google_protobuf_timestamp_pb.Timestamp): TrafficSessionsQuery;
    clearFilterByIdsList(): void;
    getFilterByIdsList(): Array<string>;
    setFilterByIdsList(value: Array<string>): TrafficSessionsQuery;
    addFilterByIds(value: string, index?: number): string;
    clearFilterByNamesList(): void;
    getFilterByNamesList(): Array<string>;
    setFilterByNamesList(value: Array<string>): TrafficSessionsQuery;
    addFilterByNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrafficSessionsQuery.AsObject;
    static toObject(includeInstance: boolean, msg: TrafficSessionsQuery): TrafficSessionsQuery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrafficSessionsQuery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrafficSessionsQuery;
    static deserializeBinaryFromReader(message: TrafficSessionsQuery, reader: jspb.BinaryReader): TrafficSessionsQuery;
}

export namespace TrafficSessionsQuery {
    export type AsObject = {
        sandboxName: string,
        activatedSince?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        activatedBefore?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        completedSince?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        completedBefore?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        filterByIdsList: Array<string>,
        filterByNamesList: Array<string>,
    }
}

export class ListTrafficSessionsRequest extends jspb.Message { 
    getOrgId(): string;
    setOrgId(value: string): ListTrafficSessionsRequest;

    hasQuery(): boolean;
    clearQuery(): void;
    getQuery(): TrafficSessionsQuery | undefined;
    setQuery(value?: TrafficSessionsQuery): ListTrafficSessionsRequest;
    getLimit(): number;
    setLimit(value: number): ListTrafficSessionsRequest;
    getNextKey(): string;
    setNextKey(value: string): ListTrafficSessionsRequest;
    getIncludeStatus(): boolean;
    setIncludeStatus(value: boolean): ListTrafficSessionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTrafficSessionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTrafficSessionsRequest): ListTrafficSessionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTrafficSessionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTrafficSessionsRequest;
    static deserializeBinaryFromReader(message: ListTrafficSessionsRequest, reader: jspb.BinaryReader): ListTrafficSessionsRequest;
}

export namespace ListTrafficSessionsRequest {
    export type AsObject = {
        orgId: string,
        query?: TrafficSessionsQuery.AsObject,
        limit: number,
        nextKey: string,
        includeStatus: boolean,
    }
}

export class ListTrafficSessionsResponse extends jspb.Message { 
    clearResourcesList(): void;
    getResourcesList(): Array<sandboxes_api_v1_resource_pb.Resource>;
    setResourcesList(value: Array<sandboxes_api_v1_resource_pb.Resource>): ListTrafficSessionsResponse;
    addResources(value?: sandboxes_api_v1_resource_pb.Resource, index?: number): sandboxes_api_v1_resource_pb.Resource;
    getNextKey(): string;
    setNextKey(value: string): ListTrafficSessionsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTrafficSessionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListTrafficSessionsResponse): ListTrafficSessionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTrafficSessionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTrafficSessionsResponse;
    static deserializeBinaryFromReader(message: ListTrafficSessionsResponse, reader: jspb.BinaryReader): ListTrafficSessionsResponse;
}

export namespace ListTrafficSessionsResponse {
    export type AsObject = {
        resourcesList: Array<sandboxes_api_v1_resource_pb.Resource.AsObject>,
        nextKey: string,
    }
}

export class CreateTrafficSessionRequest extends jspb.Message { 
    getOrgId(): string;
    setOrgId(value: string): CreateTrafficSessionRequest;
    getSandboxId(): string;
    setSandboxId(value: string): CreateTrafficSessionRequest;
    getName(): string;
    setName(value: string): CreateTrafficSessionRequest;

    hasSpec(): boolean;
    clearSpec(): void;
    getSpec(): sandboxes_api_v1_resource_trafficsession_pb.TrafficSession.Spec | undefined;
    setSpec(value?: sandboxes_api_v1_resource_trafficsession_pb.TrafficSession.Spec): CreateTrafficSessionRequest;
    getFolderId(): string;
    setFolderId(value: string): CreateTrafficSessionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTrafficSessionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTrafficSessionRequest): CreateTrafficSessionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTrafficSessionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTrafficSessionRequest;
    static deserializeBinaryFromReader(message: CreateTrafficSessionRequest, reader: jspb.BinaryReader): CreateTrafficSessionRequest;
}

export namespace CreateTrafficSessionRequest {
    export type AsObject = {
        orgId: string,
        sandboxId: string,
        name: string,
        spec?: sandboxes_api_v1_resource_trafficsession_pb.TrafficSession.Spec.AsObject,
        folderId: string,
    }
}

export class CreateTrafficSessionResponse extends jspb.Message { 

    hasResource(): boolean;
    clearResource(): void;
    getResource(): sandboxes_api_v1_resource_pb.Resource | undefined;
    setResource(value?: sandboxes_api_v1_resource_pb.Resource): CreateTrafficSessionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTrafficSessionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTrafficSessionResponse): CreateTrafficSessionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTrafficSessionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTrafficSessionResponse;
    static deserializeBinaryFromReader(message: CreateTrafficSessionResponse, reader: jspb.BinaryReader): CreateTrafficSessionResponse;
}

export namespace CreateTrafficSessionResponse {
    export type AsObject = {
        resource?: sandboxes_api_v1_resource_pb.Resource.AsObject,
    }
}

export class UpdateTrafficSessionRequest extends jspb.Message { 
    getOrgId(): string;
    setOrgId(value: string): UpdateTrafficSessionRequest;
    getSessionId(): string;
    setSessionId(value: string): UpdateTrafficSessionRequest;

    hasComplete(): boolean;
    clearComplete(): void;
    getComplete(): UpdateTrafficSessionRequest.Complete | undefined;
    setComplete(value?: UpdateTrafficSessionRequest.Complete): UpdateTrafficSessionRequest;

    hasExtend(): boolean;
    clearExtend(): void;
    getExtend(): UpdateTrafficSessionRequest.Extend | undefined;
    setExtend(value?: UpdateTrafficSessionRequest.Extend): UpdateTrafficSessionRequest;

    getUpdateCase(): UpdateTrafficSessionRequest.UpdateCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTrafficSessionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTrafficSessionRequest): UpdateTrafficSessionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTrafficSessionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTrafficSessionRequest;
    static deserializeBinaryFromReader(message: UpdateTrafficSessionRequest, reader: jspb.BinaryReader): UpdateTrafficSessionRequest;
}

export namespace UpdateTrafficSessionRequest {
    export type AsObject = {
        orgId: string,
        sessionId: string,
        complete?: UpdateTrafficSessionRequest.Complete.AsObject,
        extend?: UpdateTrafficSessionRequest.Extend.AsObject,
    }


    export class Complete extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Complete.AsObject;
        static toObject(includeInstance: boolean, msg: Complete): Complete.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Complete, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Complete;
        static deserializeBinaryFromReader(message: Complete, reader: jspb.BinaryReader): Complete;
    }

    export namespace Complete {
        export type AsObject = {
        }
    }

    export class Extend extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Extend.AsObject;
        static toObject(includeInstance: boolean, msg: Extend): Extend.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Extend, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Extend;
        static deserializeBinaryFromReader(message: Extend, reader: jspb.BinaryReader): Extend;
    }

    export namespace Extend {
        export type AsObject = {
        }
    }


    export enum UpdateCase {
        UPDATE_NOT_SET = 0,
        COMPLETE = 11,
        EXTEND = 12,
    }

}

export class UpdateTrafficSessionResponse extends jspb.Message { 

    hasResource(): boolean;
    clearResource(): void;
    getResource(): sandboxes_api_v1_resource_pb.Resource | undefined;
    setResource(value?: sandboxes_api_v1_resource_pb.Resource): UpdateTrafficSessionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTrafficSessionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTrafficSessionResponse): UpdateTrafficSessionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTrafficSessionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTrafficSessionResponse;
    static deserializeBinaryFromReader(message: UpdateTrafficSessionResponse, reader: jspb.BinaryReader): UpdateTrafficSessionResponse;
}

export namespace UpdateTrafficSessionResponse {
    export type AsObject = {
        resource?: sandboxes_api_v1_resource_pb.Resource.AsObject,
    }
}

export class DeleteTrafficSessionRequest extends jspb.Message { 
    getOrgId(): string;
    setOrgId(value: string): DeleteTrafficSessionRequest;
    getSessionId(): string;
    setSessionId(value: string): DeleteTrafficSessionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTrafficSessionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTrafficSessionRequest): DeleteTrafficSessionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTrafficSessionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTrafficSessionRequest;
    static deserializeBinaryFromReader(message: DeleteTrafficSessionRequest, reader: jspb.BinaryReader): DeleteTrafficSessionRequest;
}

export namespace DeleteTrafficSessionRequest {
    export type AsObject = {
        orgId: string,
        sessionId: string,
    }
}

export class DeleteTrafficSessionResponse extends jspb.Message { 

    hasResource(): boolean;
    clearResource(): void;
    getResource(): sandboxes_api_v1_resource_pb.Resource | undefined;
    setResource(value?: sandboxes_api_v1_resource_pb.Resource): DeleteTrafficSessionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTrafficSessionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTrafficSessionResponse): DeleteTrafficSessionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTrafficSessionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTrafficSessionResponse;
    static deserializeBinaryFromReader(message: DeleteTrafficSessionResponse, reader: jspb.BinaryReader): DeleteTrafficSessionResponse;
}

export namespace DeleteTrafficSessionResponse {
    export type AsObject = {
        resource?: sandboxes_api_v1_resource_pb.Resource.AsObject,
    }
}

export class QueryTrafficEventsRequest extends jspb.Message { 
    getOrgId(): string;
    setOrgId(value: string): QueryTrafficEventsRequest;
    getSessionId(): string;
    setSessionId(value: string): QueryTrafficEventsRequest;

    hasSince(): boolean;
    clearSince(): void;
    getSince(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setSince(value?: google_protobuf_timestamp_pb.Timestamp): QueryTrafficEventsRequest;

    hasBefore(): boolean;
    clearBefore(): void;
    getBefore(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setBefore(value?: google_protobuf_timestamp_pb.Timestamp): QueryTrafficEventsRequest;
    getLimit(): number;
    setLimit(value: number): QueryTrafficEventsRequest;
    getNextKey(): string;
    setNextKey(value: string): QueryTrafficEventsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryTrafficEventsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryTrafficEventsRequest): QueryTrafficEventsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryTrafficEventsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryTrafficEventsRequest;
    static deserializeBinaryFromReader(message: QueryTrafficEventsRequest, reader: jspb.BinaryReader): QueryTrafficEventsRequest;
}

export namespace QueryTrafficEventsRequest {
    export type AsObject = {
        orgId: string,
        sessionId: string,
        since?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        before?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        limit: number,
        nextKey: string,
    }
}

export class QueryTrafficEventsResponse extends jspb.Message { 
    clearEventsList(): void;
    getEventsList(): Array<sandboxes_api_v1_workload_pb.TrafficEventEntry>;
    setEventsList(value: Array<sandboxes_api_v1_workload_pb.TrafficEventEntry>): QueryTrafficEventsResponse;
    addEvents(value?: sandboxes_api_v1_workload_pb.TrafficEventEntry, index?: number): sandboxes_api_v1_workload_pb.TrafficEventEntry;
    getNextKey(): string;
    setNextKey(value: string): QueryTrafficEventsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryTrafficEventsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryTrafficEventsResponse): QueryTrafficEventsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryTrafficEventsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryTrafficEventsResponse;
    static deserializeBinaryFromReader(message: QueryTrafficEventsResponse, reader: jspb.BinaryReader): QueryTrafficEventsResponse;
}

export namespace QueryTrafficEventsResponse {
    export type AsObject = {
        eventsList: Array<sandboxes_api_v1_workload_pb.TrafficEventEntry.AsObject>,
        nextKey: string,
    }
}
