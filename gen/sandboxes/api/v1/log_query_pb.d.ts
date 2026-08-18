// package: sandboxes.api.v1
// file: sandboxes/api/v1/log_query.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as sandboxes_api_v1_workload_pb from "../../../sandboxes/api/v1/workload_pb";
import * as sandboxes_api_v1_workloadservice_pb from "../../../sandboxes/api/v1/workloadservice_pb";

export class TextLogQuery extends jspb.Message { 
    getLogsourceId(): string;
    setLogsourceId(value: string): TextLogQuery;

    hasWorkload(): boolean;
    clearWorkload(): void;
    getWorkload(): sandboxes_api_v1_workload_pb.WorkloadRef | undefined;
    setWorkload(value?: sandboxes_api_v1_workload_pb.WorkloadRef): TextLogQuery;

    hasLog(): boolean;
    clearLog(): void;
    getLog(): sandboxes_api_v1_workload_pb.LogRef | undefined;
    setLog(value?: sandboxes_api_v1_workload_pb.LogRef): TextLogQuery;

    hasIndexed(): boolean;
    clearIndexed(): void;
    getIndexed(): sandboxes_api_v1_workloadservice_pb.IndexedLogQuery | undefined;
    setIndexed(value?: sandboxes_api_v1_workloadservice_pb.IndexedLogQuery): TextLogQuery;
    getLimit(): number;
    setLimit(value: number): TextLogQuery;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextLogQuery.AsObject;
    static toObject(includeInstance: boolean, msg: TextLogQuery): TextLogQuery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TextLogQuery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextLogQuery;
    static deserializeBinaryFromReader(message: TextLogQuery, reader: jspb.BinaryReader): TextLogQuery;
}

export namespace TextLogQuery {
    export type AsObject = {
        logsourceId: string,
        workload?: sandboxes_api_v1_workload_pb.WorkloadRef.AsObject,
        log?: sandboxes_api_v1_workload_pb.LogRef.AsObject,
        indexed?: sandboxes_api_v1_workloadservice_pb.IndexedLogQuery.AsObject,
        limit: number,
    }
}

export class MergedTextLogEntry extends jspb.Message { 
    getLogsourceId(): string;
    setLogsourceId(value: string): MergedTextLogEntry;

    hasEntry(): boolean;
    clearEntry(): void;
    getEntry(): sandboxes_api_v1_workloadservice_pb.IndexedLogEntry | undefined;
    setEntry(value?: sandboxes_api_v1_workloadservice_pb.IndexedLogEntry): MergedTextLogEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MergedTextLogEntry.AsObject;
    static toObject(includeInstance: boolean, msg: MergedTextLogEntry): MergedTextLogEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MergedTextLogEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MergedTextLogEntry;
    static deserializeBinaryFromReader(message: MergedTextLogEntry, reader: jspb.BinaryReader): MergedTextLogEntry;
}

export namespace MergedTextLogEntry {
    export type AsObject = {
        logsourceId: string,
        entry?: sandboxes_api_v1_workloadservice_pb.IndexedLogEntry.AsObject,
    }
}

export class TextLogQueries extends jspb.Message { 
    clearQueriesList(): void;
    getQueriesList(): Array<TextLogQuery>;
    setQueriesList(value: Array<TextLogQuery>): TextLogQueries;
    addQueries(value?: TextLogQuery, index?: number): TextLogQuery;

    hasMerge(): boolean;
    clearMerge(): void;
    getMerge(): TextLogQueries.Merge | undefined;
    setMerge(value?: TextLogQueries.Merge): TextLogQueries;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextLogQueries.AsObject;
    static toObject(includeInstance: boolean, msg: TextLogQueries): TextLogQueries.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TextLogQueries, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextLogQueries;
    static deserializeBinaryFromReader(message: TextLogQueries, reader: jspb.BinaryReader): TextLogQueries;
}

export namespace TextLogQueries {
    export type AsObject = {
        queriesList: Array<TextLogQuery.AsObject>,
        merge?: TextLogQueries.Merge.AsObject,
    }


    export class Merge extends jspb.Message { 
        getLimit(): number;
        setLimit(value: number): Merge;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Merge.AsObject;
        static toObject(includeInstance: boolean, msg: Merge): Merge.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Merge, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Merge;
        static deserializeBinaryFromReader(message: Merge, reader: jspb.BinaryReader): Merge;
    }

    export namespace Merge {
        export type AsObject = {
            limit: number,
        }
    }

}

export class TextLogBatch extends jspb.Message { 
    getLogsourceId(): string;
    setLogsourceId(value: string): TextLogBatch;
    clearLogEntryList(): void;
    getLogEntryList(): Array<sandboxes_api_v1_workloadservice_pb.IndexedLogEntry>;
    setLogEntryList(value: Array<sandboxes_api_v1_workloadservice_pb.IndexedLogEntry>): TextLogBatch;
    addLogEntry(value?: sandboxes_api_v1_workloadservice_pb.IndexedLogEntry, index?: number): sandboxes_api_v1_workloadservice_pb.IndexedLogEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextLogBatch.AsObject;
    static toObject(includeInstance: boolean, msg: TextLogBatch): TextLogBatch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TextLogBatch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextLogBatch;
    static deserializeBinaryFromReader(message: TextLogBatch, reader: jspb.BinaryReader): TextLogBatch;
}

export namespace TextLogBatch {
    export type AsObject = {
        logsourceId: string,
        logEntryList: Array<sandboxes_api_v1_workloadservice_pb.IndexedLogEntry.AsObject>,
    }
}

export class TextLogBatches extends jspb.Message { 
    clearBatchesList(): void;
    getBatchesList(): Array<TextLogBatch>;
    setBatchesList(value: Array<TextLogBatch>): TextLogBatches;
    addBatches(value?: TextLogBatch, index?: number): TextLogBatch;
    clearMergedEntriesList(): void;
    getMergedEntriesList(): Array<MergedTextLogEntry>;
    setMergedEntriesList(value: Array<MergedTextLogEntry>): TextLogBatches;
    addMergedEntries(value?: MergedTextLogEntry, index?: number): MergedTextLogEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextLogBatches.AsObject;
    static toObject(includeInstance: boolean, msg: TextLogBatches): TextLogBatches.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TextLogBatches, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextLogBatches;
    static deserializeBinaryFromReader(message: TextLogBatches, reader: jspb.BinaryReader): TextLogBatches;
}

export namespace TextLogBatches {
    export type AsObject = {
        batchesList: Array<TextLogBatch.AsObject>,
        mergedEntriesList: Array<MergedTextLogEntry.AsObject>,
    }
}

export class LogQueryRequest extends jspb.Message { 

    hasTextLogQueries(): boolean;
    clearTextLogQueries(): void;
    getTextLogQueries(): TextLogQueries | undefined;
    setTextLogQueries(value?: TextLogQueries): LogQueryRequest;

    getContentCase(): LogQueryRequest.ContentCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogQueryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LogQueryRequest): LogQueryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogQueryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogQueryRequest;
    static deserializeBinaryFromReader(message: LogQueryRequest, reader: jspb.BinaryReader): LogQueryRequest;
}

export namespace LogQueryRequest {
    export type AsObject = {
        textLogQueries?: TextLogQueries.AsObject,
    }

    export enum ContentCase {
        CONTENT_NOT_SET = 0,
        TEXT_LOG_QUERIES = 1,
    }

}

export class LogQueryResponse extends jspb.Message { 

    hasTextLogBatches(): boolean;
    clearTextLogBatches(): void;
    getTextLogBatches(): TextLogBatches | undefined;
    setTextLogBatches(value?: TextLogBatches): LogQueryResponse;

    getContentCase(): LogQueryResponse.ContentCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogQueryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LogQueryResponse): LogQueryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogQueryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogQueryResponse;
    static deserializeBinaryFromReader(message: LogQueryResponse, reader: jspb.BinaryReader): LogQueryResponse;
}

export namespace LogQueryResponse {
    export type AsObject = {
        textLogBatches?: TextLogBatches.AsObject,
    }

    export enum ContentCase {
        CONTENT_NOT_SET = 0,
        TEXT_LOG_BATCHES = 1,
    }

}
