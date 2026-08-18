// package: sandboxes.api.v1
// file: sandboxes/api/v1/resource_trafficsession.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as sandboxes_api_v1_endpoint_pb from "../../../sandboxes/api/v1/endpoint_pb";

export class TrafficSession extends jspb.Message { 
    getSandboxName(): string;
    setSandboxName(value: string): TrafficSession;

    hasSpec(): boolean;
    clearSpec(): void;
    getSpec(): TrafficSession.Spec | undefined;
    setSpec(value?: TrafficSession.Spec): TrafficSession;
    getActivatedSandboxId(): string;
    setActivatedSandboxId(value: string): TrafficSession;

    hasActivatedAt(): boolean;
    clearActivatedAt(): void;
    getActivatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setActivatedAt(value?: google_protobuf_timestamp_pb.Timestamp): TrafficSession;

    hasCompletedAt(): boolean;
    clearCompletedAt(): void;
    getCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): TrafficSession;

    hasExpireAt(): boolean;
    clearExpireAt(): void;
    getExpireAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpireAt(value?: google_protobuf_timestamp_pb.Timestamp): TrafficSession;

    hasRetention(): boolean;
    clearRetention(): void;
    getRetention(): google_protobuf_duration_pb.Duration | undefined;
    setRetention(value?: google_protobuf_duration_pb.Duration): TrafficSession;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrafficSession.AsObject;
    static toObject(includeInstance: boolean, msg: TrafficSession): TrafficSession.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrafficSession, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrafficSession;
    static deserializeBinaryFromReader(message: TrafficSession, reader: jspb.BinaryReader): TrafficSession;
}

export namespace TrafficSession {
    export type AsObject = {
        sandboxName: string,
        spec?: TrafficSession.Spec.AsObject,
        activatedSandboxId: string,
        activatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        completedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        expireAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        retention?: google_protobuf_duration_pb.Duration.AsObject,
    }


    export class Spec extends jspb.Message { 

        getWorkloadsMap(): jspb.Map<string, TrafficSession.Spec.Workload>;
        clearWorkloadsMap(): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Spec.AsObject;
        static toObject(includeInstance: boolean, msg: Spec): Spec.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Spec, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Spec;
        static deserializeBinaryFromReader(message: Spec, reader: jspb.BinaryReader): Spec;
    }

    export namespace Spec {
        export type AsObject = {

            workloadsMap: Array<[string, TrafficSession.Spec.Workload.AsObject]>,
        }


        export class Workload extends jspb.Message { 
            clearPortsList(): void;
            getPortsList(): Array<sandboxes_api_v1_endpoint_pb.Port>;
            setPortsList(value: Array<sandboxes_api_v1_endpoint_pb.Port>): Workload;
            addPorts(value?: sandboxes_api_v1_endpoint_pb.Port, index?: number): sandboxes_api_v1_endpoint_pb.Port;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Workload.AsObject;
            static toObject(includeInstance: boolean, msg: Workload): Workload.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Workload, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Workload;
            static deserializeBinaryFromReader(message: Workload, reader: jspb.BinaryReader): Workload;
        }

        export namespace Workload {
            export type AsObject = {
                portsList: Array<sandboxes_api_v1_endpoint_pb.Port.AsObject>,
            }
        }

    }

    export class Status extends jspb.Message { 
        getState(): TrafficSession.Status.State;
        setState(value: TrafficSession.Status.State): Status;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Status.AsObject;
        static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Status;
        static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
    }

    export namespace Status {
        export type AsObject = {
            state: TrafficSession.Status.State,
        }

        export enum State {
    UNKNOWN = 0,
    INACTIVE = 1,
    ACTIVE = 2,
    COMPLETED = 3,
    ORPHAN = 4,
        }

    }

}
