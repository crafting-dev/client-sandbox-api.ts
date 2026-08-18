// package: sandboxes.api.v1
// file: sandboxes/api/v1/snapshot.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as sandboxes_api_v1_common_pb from "../../../sandboxes/api/v1/common_pb";
import * as sandboxes_api_v1_object_pb from "../../../sandboxes/api/v1/object_pb";
import * as sandboxes_api_v1_app_pb from "../../../sandboxes/api/v1/app_pb";
import * as sandboxes_api_v1_sandbox_pb from "../../../sandboxes/api/v1/sandbox_pb";

export class Snapshot extends jspb.Message { 

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): sandboxes_api_v1_object_pb.ObjectMeta | undefined;
    setMeta(value?: sandboxes_api_v1_object_pb.ObjectMeta): Snapshot;
    getOrgId(): string;
    setOrgId(value: string): Snapshot;
    getType(): Snapshot.Type;
    setType(value: Snapshot.Type): Snapshot;
    getServiceType(): string;
    setServiceType(value: string): Snapshot;

    hasOrigin(): boolean;
    clearOrigin(): void;
    getOrigin(): Snapshot.Origin | undefined;
    setOrigin(value?: Snapshot.Origin): Snapshot;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): Snapshot.Status | undefined;
    setStatus(value?: Snapshot.Status): Snapshot;

    hasContainer(): boolean;
    clearContainer(): void;
    getContainer(): Snapshot.ContainerInfo | undefined;
    setContainer(value?: Snapshot.ContainerInfo): Snapshot;

    hasExpireAt(): boolean;
    clearExpireAt(): void;
    getExpireAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpireAt(value?: google_protobuf_timestamp_pb.Timestamp): Snapshot;

    hasSandbox(): boolean;
    clearSandbox(): void;
    getSandbox(): Snapshot.SandboxInfo | undefined;
    setSandbox(value?: Snapshot.SandboxInfo): Snapshot;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Snapshot.AsObject;
    static toObject(includeInstance: boolean, msg: Snapshot): Snapshot.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Snapshot, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Snapshot;
    static deserializeBinaryFromReader(message: Snapshot, reader: jspb.BinaryReader): Snapshot;
}

export namespace Snapshot {
    export type AsObject = {
        meta?: sandboxes_api_v1_object_pb.ObjectMeta.AsObject,
        orgId: string,
        type: Snapshot.Type,
        serviceType: string,
        origin?: Snapshot.Origin.AsObject,
        status?: Snapshot.Status.AsObject,
        container?: Snapshot.ContainerInfo.AsObject,
        expireAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        sandbox?: Snapshot.SandboxInfo.AsObject,
    }


    export class Origin extends jspb.Message { 
        getSandboxId(): string;
        setSandboxId(value: string): Origin;
        getWorkload(): string;
        setWorkload(value: string): Origin;
        getSandbox(): string;
        setSandbox(value: string): Origin;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Origin.AsObject;
        static toObject(includeInstance: boolean, msg: Origin): Origin.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Origin, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Origin;
        static deserializeBinaryFromReader(message: Origin, reader: jspb.BinaryReader): Origin;
    }

    export namespace Origin {
        export type AsObject = {
            sandboxId: string,
            workload: string,
            sandbox: string,
        }
    }

    export class ContainerInfo extends jspb.Message { 
        clearVolumesList(): void;
        getVolumesList(): Array<sandboxes_api_v1_app_pb.VolumeMount>;
        setVolumesList(value: Array<sandboxes_api_v1_app_pb.VolumeMount>): ContainerInfo;
        addVolumes(value?: sandboxes_api_v1_app_pb.VolumeMount, index?: number): sandboxes_api_v1_app_pb.VolumeMount;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ContainerInfo.AsObject;
        static toObject(includeInstance: boolean, msg: ContainerInfo): ContainerInfo.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ContainerInfo, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ContainerInfo;
        static deserializeBinaryFromReader(message: ContainerInfo, reader: jspb.BinaryReader): ContainerInfo;
    }

    export namespace ContainerInfo {
        export type AsObject = {
            volumesList: Array<sandboxes_api_v1_app_pb.VolumeMount.AsObject>,
        }
    }

    export class SandboxInfo extends jspb.Message { 

        hasSandbox(): boolean;
        clearSandbox(): void;
        getSandbox(): sandboxes_api_v1_sandbox_pb.Sandbox | undefined;
        setSandbox(value?: sandboxes_api_v1_sandbox_pb.Sandbox): SandboxInfo;

        getWorkloadsMap(): jspb.Map<string, Snapshot.SandboxInfo.SnapshotStatus>;
        clearWorkloadsMap(): void;

        getSharedVolumesMap(): jspb.Map<string, Snapshot.SandboxInfo.SnapshotStatus>;
        clearSharedVolumesMap(): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SandboxInfo.AsObject;
        static toObject(includeInstance: boolean, msg: SandboxInfo): SandboxInfo.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SandboxInfo, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SandboxInfo;
        static deserializeBinaryFromReader(message: SandboxInfo, reader: jspb.BinaryReader): SandboxInfo;
    }

    export namespace SandboxInfo {
        export type AsObject = {
            sandbox?: sandboxes_api_v1_sandbox_pb.Sandbox.AsObject,

            workloadsMap: Array<[string, Snapshot.SandboxInfo.SnapshotStatus.AsObject]>,

            sharedVolumesMap: Array<[string, Snapshot.SandboxInfo.SnapshotStatus.AsObject]>,
        }


        export class SnapshotStatus extends jspb.Message { 

            hasWorkload(): boolean;
            clearWorkload(): void;
            getWorkload(): Snapshot.SandboxInfo.SnapshotStatus.Workload | undefined;
            setWorkload(value?: Snapshot.SandboxInfo.SnapshotStatus.Workload): SnapshotStatus;

            hasContainer(): boolean;
            clearContainer(): void;
            getContainer(): Snapshot.SandboxInfo.SnapshotStatus.Container | undefined;
            setContainer(value?: Snapshot.SandboxInfo.SnapshotStatus.Container): SnapshotStatus;

            hasVolume(): boolean;
            clearVolume(): void;
            getVolume(): Snapshot.SandboxInfo.SnapshotStatus.Volume | undefined;
            setVolume(value?: Snapshot.SandboxInfo.SnapshotStatus.Volume): SnapshotStatus;

            getSnapshotCase(): SnapshotStatus.SnapshotCase;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): SnapshotStatus.AsObject;
            static toObject(includeInstance: boolean, msg: SnapshotStatus): SnapshotStatus.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: SnapshotStatus, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): SnapshotStatus;
            static deserializeBinaryFromReader(message: SnapshotStatus, reader: jspb.BinaryReader): SnapshotStatus;
        }

        export namespace SnapshotStatus {
            export type AsObject = {
                workload?: Snapshot.SandboxInfo.SnapshotStatus.Workload.AsObject,
                container?: Snapshot.SandboxInfo.SnapshotStatus.Container.AsObject,
                volume?: Snapshot.SandboxInfo.SnapshotStatus.Volume.AsObject,
            }


            export class Workload extends jspb.Message { 

                hasStatus(): boolean;
                clearStatus(): void;
                getStatus(): Snapshot.Status | undefined;
                setStatus(value?: Snapshot.Status): Workload;

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
                    status?: Snapshot.Status.AsObject,
                }
            }

            export class Container extends jspb.Message { 

                hasStatus(): boolean;
                clearStatus(): void;
                getStatus(): Snapshot.Status | undefined;
                setStatus(value?: Snapshot.Status): Container;

                getStatusesMap(): jspb.Map<string, Snapshot.Status>;
                clearStatusesMap(): void;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Container.AsObject;
                static toObject(includeInstance: boolean, msg: Container): Container.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Container, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Container;
                static deserializeBinaryFromReader(message: Container, reader: jspb.BinaryReader): Container;
            }

            export namespace Container {
                export type AsObject = {
                    status?: Snapshot.Status.AsObject,

                    statusesMap: Array<[string, Snapshot.Status.AsObject]>,
                }
            }

            export class Volume extends jspb.Message { 

                hasStatus(): boolean;
                clearStatus(): void;
                getStatus(): Snapshot.Status | undefined;
                setStatus(value?: Snapshot.Status): Volume;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Volume.AsObject;
                static toObject(includeInstance: boolean, msg: Volume): Volume.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Volume, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Volume;
                static deserializeBinaryFromReader(message: Volume, reader: jspb.BinaryReader): Volume;
            }

            export namespace Volume {
                export type AsObject = {
                    status?: Snapshot.Status.AsObject,
                }
            }


            export enum SnapshotCase {
                SNAPSHOT_NOT_SET = 0,
                WORKLOAD = 1,
                CONTAINER = 2,
                VOLUME = 3,
            }

        }

    }

    export class Status extends jspb.Message { 
        getState(): Snapshot.Status.State;
        setState(value: Snapshot.Status.State): Status;
        getProgress(): number;
        setProgress(value: number): Status;
        getSize(): number;
        setSize(value: number): Status;

        hasError(): boolean;
        clearError(): void;
        getError(): sandboxes_api_v1_common_pb.Error | undefined;
        setError(value?: sandboxes_api_v1_common_pb.Error): Status;

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
            state: Snapshot.Status.State,
            progress: number,
            size: number,
            error?: sandboxes_api_v1_common_pb.Error.AsObject,
        }

        export enum State {
    UNSPECIFIED = 0,
    CREATING = 1,
    READY = 2,
    ERROR = 3,
        }

    }


    export enum Type {
    UNSPECIFIED = 0,
    WORKSPACE = 1,
    HOME = 2,
    DEPENDENCY = 3,
    CONTAINER = 4,
    ARCHIVE = 5,
    SANDBOX = 6,
    }

}
