// package: sandboxes.api.v1
// file: sandboxes/api/v1/action_snapshot.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as sandboxes_api_v1_snapshot_pb from "../../../sandboxes/api/v1/snapshot_pb";

export class CreateSnapshotAction extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateSnapshotAction;
    getType(): sandboxes_api_v1_snapshot_pb.Snapshot.Type;
    setType(value: sandboxes_api_v1_snapshot_pb.Snapshot.Type): CreateSnapshotAction;
    getOverwrite(): boolean;
    setOverwrite(value: boolean): CreateSnapshotAction;
    getPersonal(): boolean;
    setPersonal(value: boolean): CreateSnapshotAction;

    hasArchiveConfig(): boolean;
    clearArchiveConfig(): void;
    getArchiveConfig(): CreateSnapshotAction.ArchiveConfig | undefined;
    setArchiveConfig(value?: CreateSnapshotAction.ArchiveConfig): CreateSnapshotAction;
    getFolderId(): string;
    setFolderId(value: string): CreateSnapshotAction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSnapshotAction.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSnapshotAction): CreateSnapshotAction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSnapshotAction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSnapshotAction;
    static deserializeBinaryFromReader(message: CreateSnapshotAction, reader: jspb.BinaryReader): CreateSnapshotAction;
}

export namespace CreateSnapshotAction {
    export type AsObject = {
        name: string,
        type: sandboxes_api_v1_snapshot_pb.Snapshot.Type,
        overwrite: boolean,
        personal: boolean,
        archiveConfig?: CreateSnapshotAction.ArchiveConfig.AsObject,
        folderId: string,
    }


    export class ArchiveConfig extends jspb.Message { 
        getPath(): string;
        setPath(value: string): ArchiveConfig;

        hasExpiry(): boolean;
        clearExpiry(): void;
        getExpiry(): google_protobuf_duration_pb.Duration | undefined;
        setExpiry(value?: google_protobuf_duration_pb.Duration): ArchiveConfig;
        clearExcludePatternsList(): void;
        getExcludePatternsList(): Array<string>;
        setExcludePatternsList(value: Array<string>): ArchiveConfig;
        addExcludePatterns(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ArchiveConfig.AsObject;
        static toObject(includeInstance: boolean, msg: ArchiveConfig): ArchiveConfig.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ArchiveConfig, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ArchiveConfig;
        static deserializeBinaryFromReader(message: ArchiveConfig, reader: jspb.BinaryReader): ArchiveConfig;
    }

    export namespace ArchiveConfig {
        export type AsObject = {
            path: string,
            expiry?: google_protobuf_duration_pb.Duration.AsObject,
            excludePatternsList: Array<string>,
        }
    }

    export class Result extends jspb.Message { 

        hasSnapshot(): boolean;
        clearSnapshot(): void;
        getSnapshot(): sandboxes_api_v1_snapshot_pb.Snapshot | undefined;
        setSnapshot(value?: sandboxes_api_v1_snapshot_pb.Snapshot): Result;
        getTaskId(): string;
        setTaskId(value: string): Result;

        hasTaskCreatedAt(): boolean;
        clearTaskCreatedAt(): void;
        getTaskCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setTaskCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Result;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Result.AsObject;
        static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Result;
        static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
    }

    export namespace Result {
        export type AsObject = {
            snapshot?: sandboxes_api_v1_snapshot_pb.Snapshot.AsObject,
            taskId: string,
            taskCreatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        }
    }

}

export class RestoreSnapshotAction extends jspb.Message { 
    getSnapshotId(): string;
    setSnapshotId(value: string): RestoreSnapshotAction;
    getPath(): string;
    setPath(value: string): RestoreSnapshotAction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RestoreSnapshotAction.AsObject;
    static toObject(includeInstance: boolean, msg: RestoreSnapshotAction): RestoreSnapshotAction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RestoreSnapshotAction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RestoreSnapshotAction;
    static deserializeBinaryFromReader(message: RestoreSnapshotAction, reader: jspb.BinaryReader): RestoreSnapshotAction;
}

export namespace RestoreSnapshotAction {
    export type AsObject = {
        snapshotId: string,
        path: string,
    }


    export class Result extends jspb.Message { 
        getTaskId(): string;
        setTaskId(value: string): Result;

        hasTaskCreatedAt(): boolean;
        clearTaskCreatedAt(): void;
        getTaskCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setTaskCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Result;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Result.AsObject;
        static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Result;
        static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
    }

    export namespace Result {
        export type AsObject = {
            taskId: string,
            taskCreatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        }
    }

}
