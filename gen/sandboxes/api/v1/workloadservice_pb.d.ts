// package: sandboxes.api.v1
// file: sandboxes/api/v1/workloadservice.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as sandboxes_api_v1_workload_pb from "../../../sandboxes/api/v1/workload_pb";
import * as sandboxes_api_v1_resource_pb from "../../../sandboxes/api/v1/resource_pb";
import * as sandboxes_api_v1_resource_llmsession_pb from "../../../sandboxes/api/v1/resource_llmsession_pb";

export class WorkloadActionRequest extends jspb.Message { 

    hasWorkload(): boolean;
    clearWorkload(): void;
    getWorkload(): sandboxes_api_v1_workload_pb.WorkloadRef | undefined;
    setWorkload(value?: sandboxes_api_v1_workload_pb.WorkloadRef): WorkloadActionRequest;

    hasAction(): boolean;
    clearAction(): void;
    getAction(): google_protobuf_any_pb.Any | undefined;
    setAction(value?: google_protobuf_any_pb.Any): WorkloadActionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorkloadActionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WorkloadActionRequest): WorkloadActionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorkloadActionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorkloadActionRequest;
    static deserializeBinaryFromReader(message: WorkloadActionRequest, reader: jspb.BinaryReader): WorkloadActionRequest;
}

export namespace WorkloadActionRequest {
    export type AsObject = {
        workload?: sandboxes_api_v1_workload_pb.WorkloadRef.AsObject,
        action?: google_protobuf_any_pb.Any.AsObject,
    }
}

export class WorkloadActionResponse extends jspb.Message { 

    hasResult(): boolean;
    clearResult(): void;
    getResult(): google_protobuf_any_pb.Any | undefined;
    setResult(value?: google_protobuf_any_pb.Any): WorkloadActionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorkloadActionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WorkloadActionResponse): WorkloadActionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorkloadActionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorkloadActionResponse;
    static deserializeBinaryFromReader(message: WorkloadActionResponse, reader: jspb.BinaryReader): WorkloadActionResponse;
}

export namespace WorkloadActionResponse {
    export type AsObject = {
        result?: google_protobuf_any_pb.Any.AsObject,
    }
}

export class IndexedLogQuery extends jspb.Message { 

    hasSince(): boolean;
    clearSince(): void;
    getSince(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setSince(value?: google_protobuf_timestamp_pb.Timestamp): IndexedLogQuery;
    getPos(): string;
    setPos(value: string): IndexedLogQuery;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IndexedLogQuery.AsObject;
    static toObject(includeInstance: boolean, msg: IndexedLogQuery): IndexedLogQuery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IndexedLogQuery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IndexedLogQuery;
    static deserializeBinaryFromReader(message: IndexedLogQuery, reader: jspb.BinaryReader): IndexedLogQuery;
}

export namespace IndexedLogQuery {
    export type AsObject = {
        since?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        pos: string,
    }
}

export class StreamLogRequest extends jspb.Message { 

    hasWorkload(): boolean;
    clearWorkload(): void;
    getWorkload(): sandboxes_api_v1_workload_pb.WorkloadRef | undefined;
    setWorkload(value?: sandboxes_api_v1_workload_pb.WorkloadRef): StreamLogRequest;

    hasLog(): boolean;
    clearLog(): void;
    getLog(): sandboxes_api_v1_workload_pb.LogRef | undefined;
    setLog(value?: sandboxes_api_v1_workload_pb.LogRef): StreamLogRequest;

    hasTail(): boolean;
    clearTail(): void;
    getTail(): sandboxes_api_v1_workload_pb.LogTail | undefined;
    setTail(value?: sandboxes_api_v1_workload_pb.LogTail): StreamLogRequest;

    hasIndexed(): boolean;
    clearIndexed(): void;
    getIndexed(): IndexedLogQuery | undefined;
    setIndexed(value?: IndexedLogQuery): StreamLogRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamLogRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StreamLogRequest): StreamLogRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamLogRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamLogRequest;
    static deserializeBinaryFromReader(message: StreamLogRequest, reader: jspb.BinaryReader): StreamLogRequest;
}

export namespace StreamLogRequest {
    export type AsObject = {
        workload?: sandboxes_api_v1_workload_pb.WorkloadRef.AsObject,
        log?: sandboxes_api_v1_workload_pb.LogRef.AsObject,
        tail?: sandboxes_api_v1_workload_pb.LogTail.AsObject,
        indexed?: IndexedLogQuery.AsObject,
    }
}

export class IndexedLogEntry extends jspb.Message { 
    getPos(): string;
    setPos(value: string): IndexedLogEntry;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): IndexedLogEntry;
    getLine(): Uint8Array | string;
    getLine_asU8(): Uint8Array;
    getLine_asB64(): string;
    setLine(value: Uint8Array | string): IndexedLogEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IndexedLogEntry.AsObject;
    static toObject(includeInstance: boolean, msg: IndexedLogEntry): IndexedLogEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IndexedLogEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IndexedLogEntry;
    static deserializeBinaryFromReader(message: IndexedLogEntry, reader: jspb.BinaryReader): IndexedLogEntry;
}

export namespace IndexedLogEntry {
    export type AsObject = {
        pos: string,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        line: Uint8Array | string,
    }
}

export class StreamLogEvent extends jspb.Message { 
    getContent(): Uint8Array | string;
    getContent_asU8(): Uint8Array;
    getContent_asB64(): string;
    setContent(value: Uint8Array | string): StreamLogEvent;

    hasEntry(): boolean;
    clearEntry(): void;
    getEntry(): IndexedLogEntry | undefined;
    setEntry(value?: IndexedLogEntry): StreamLogEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamLogEvent.AsObject;
    static toObject(includeInstance: boolean, msg: StreamLogEvent): StreamLogEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamLogEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamLogEvent;
    static deserializeBinaryFromReader(message: StreamLogEvent, reader: jspb.BinaryReader): StreamLogEvent;
}

export namespace StreamLogEvent {
    export type AsObject = {
        content: Uint8Array | string,
        entry?: IndexedLogEntry.AsObject,
    }
}

export class TrafficInjection extends jspb.Message { 

    hasConnect(): boolean;
    clearConnect(): void;
    getConnect(): TrafficInjection.Connect | undefined;
    setConnect(value?: TrafficInjection.Connect): TrafficInjection;

    hasContent(): boolean;
    clearContent(): void;
    getContent(): sandboxes_api_v1_workload_pb.TrafficContent | undefined;
    setContent(value?: sandboxes_api_v1_workload_pb.TrafficContent): TrafficInjection;

    getRequestCase(): TrafficInjection.RequestCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrafficInjection.AsObject;
    static toObject(includeInstance: boolean, msg: TrafficInjection): TrafficInjection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrafficInjection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrafficInjection;
    static deserializeBinaryFromReader(message: TrafficInjection, reader: jspb.BinaryReader): TrafficInjection;
}

export namespace TrafficInjection {
    export type AsObject = {
        connect?: TrafficInjection.Connect.AsObject,
        content?: sandboxes_api_v1_workload_pb.TrafficContent.AsObject,
    }


    export class Connect extends jspb.Message { 

        hasPort(): boolean;
        clearPort(): void;
        getPort(): TrafficInjection.Connect.Port | undefined;
        setPort(value?: TrafficInjection.Connect.Port): Connect;

        getTargetCase(): Connect.TargetCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Connect.AsObject;
        static toObject(includeInstance: boolean, msg: Connect): Connect.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Connect, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Connect;
        static deserializeBinaryFromReader(message: Connect, reader: jspb.BinaryReader): Connect;
    }

    export namespace Connect {
        export type AsObject = {
            port?: TrafficInjection.Connect.Port.AsObject,
        }


        export class Port extends jspb.Message { 

            hasWorkload(): boolean;
            clearWorkload(): void;
            getWorkload(): sandboxes_api_v1_workload_pb.WorkloadRef | undefined;
            setWorkload(value?: sandboxes_api_v1_workload_pb.WorkloadRef): Port;
            getPortName(): string;
            setPortName(value: string): Port;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Port.AsObject;
            static toObject(includeInstance: boolean, msg: Port): Port.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Port, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Port;
            static deserializeBinaryFromReader(message: Port, reader: jspb.BinaryReader): Port;
        }

        export namespace Port {
            export type AsObject = {
                workload?: sandboxes_api_v1_workload_pb.WorkloadRef.AsObject,
                portName: string,
            }
        }


        export enum TargetCase {
            TARGET_NOT_SET = 0,
            PORT = 1,
        }

    }


    export enum RequestCase {
        REQUEST_NOT_SET = 0,
        CONNECT = 1,
        CONTENT = 2,
    }

}
