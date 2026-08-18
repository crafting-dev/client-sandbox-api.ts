// package: sandboxes.api.v1
// file: sandboxes/api/v1/timeseriesservice.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as sandboxes_api_v1_common_pb from "../../../sandboxes/api/v1/common_pb";
import * as sandboxes_api_v1_object_pb from "../../../sandboxes/api/v1/object_pb";
import * as sandboxes_api_v1_resource_pb from "../../../sandboxes/api/v1/resource_pb";

export class QueryTimeSeriesRequest extends jspb.Message { 
    getOrgId(): string;
    setOrgId(value: string): QueryTimeSeriesRequest;

    hasQuery(): boolean;
    clearQuery(): void;
    getQuery(): sandboxes_api_v1_common_pb.TimeSeriesQuery | undefined;
    setQuery(value?: sandboxes_api_v1_common_pb.TimeSeriesQuery): QueryTimeSeriesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryTimeSeriesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryTimeSeriesRequest): QueryTimeSeriesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryTimeSeriesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryTimeSeriesRequest;
    static deserializeBinaryFromReader(message: QueryTimeSeriesRequest, reader: jspb.BinaryReader): QueryTimeSeriesRequest;
}

export namespace QueryTimeSeriesRequest {
    export type AsObject = {
        orgId: string,
        query?: sandboxes_api_v1_common_pb.TimeSeriesQuery.AsObject,
    }
}

export class QueryTimeSeriesResponse extends jspb.Message { 

    hasSeries(): boolean;
    clearSeries(): void;
    getSeries(): sandboxes_api_v1_common_pb.TimeSeries | undefined;
    setSeries(value?: sandboxes_api_v1_common_pb.TimeSeries): QueryTimeSeriesResponse;
    getNextKey(): string;
    setNextKey(value: string): QueryTimeSeriesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryTimeSeriesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryTimeSeriesResponse): QueryTimeSeriesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryTimeSeriesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryTimeSeriesResponse;
    static deserializeBinaryFromReader(message: QueryTimeSeriesResponse, reader: jspb.BinaryReader): QueryTimeSeriesResponse;
}

export namespace QueryTimeSeriesResponse {
    export type AsObject = {
        series?: sandboxes_api_v1_common_pb.TimeSeries.AsObject,
        nextKey: string,
    }
}
