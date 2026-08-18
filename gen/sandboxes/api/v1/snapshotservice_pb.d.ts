// package: sandboxes.api.v1
// file: sandboxes/api/v1/snapshotservice.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as sandboxes_api_v1_snapshot_pb from "../../../sandboxes/api/v1/snapshot_pb";

export class ListSnapshotsRequest extends jspb.Message { 
    getOrgId(): string;
    setOrgId(value: string): ListSnapshotsRequest;
    clearFilterByIdsList(): void;
    getFilterByIdsList(): Array<string>;
    setFilterByIdsList(value: Array<string>): ListSnapshotsRequest;
    addFilterByIds(value: string, index?: number): string;
    clearFilterByTypesList(): void;
    getFilterByTypesList(): Array<sandboxes_api_v1_snapshot_pb.Snapshot.Type>;
    setFilterByTypesList(value: Array<sandboxes_api_v1_snapshot_pb.Snapshot.Type>): ListSnapshotsRequest;
    addFilterByTypes(value: sandboxes_api_v1_snapshot_pb.Snapshot.Type, index?: number): sandboxes_api_v1_snapshot_pb.Snapshot.Type;
    clearFilterByNamesList(): void;
    getFilterByNamesList(): Array<string>;
    setFilterByNamesList(value: Array<string>): ListSnapshotsRequest;
    addFilterByNames(value: string, index?: number): string;
    clearFilterByServiceTypesList(): void;
    getFilterByServiceTypesList(): Array<string>;
    setFilterByServiceTypesList(value: Array<string>): ListSnapshotsRequest;
    addFilterByServiceTypes(value: string, index?: number): string;
    clearFilterByStatesList(): void;
    getFilterByStatesList(): Array<sandboxes_api_v1_snapshot_pb.Snapshot.Status.State>;
    setFilterByStatesList(value: Array<sandboxes_api_v1_snapshot_pb.Snapshot.Status.State>): ListSnapshotsRequest;
    addFilterByStates(value: sandboxes_api_v1_snapshot_pb.Snapshot.Status.State, index?: number): sandboxes_api_v1_snapshot_pb.Snapshot.Status.State;
    getOwnerId(): string;
    setOwnerId(value: string): ListSnapshotsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSnapshotsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSnapshotsRequest): ListSnapshotsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSnapshotsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSnapshotsRequest;
    static deserializeBinaryFromReader(message: ListSnapshotsRequest, reader: jspb.BinaryReader): ListSnapshotsRequest;
}

export namespace ListSnapshotsRequest {
    export type AsObject = {
        orgId: string,
        filterByIdsList: Array<string>,
        filterByTypesList: Array<sandboxes_api_v1_snapshot_pb.Snapshot.Type>,
        filterByNamesList: Array<string>,
        filterByServiceTypesList: Array<string>,
        filterByStatesList: Array<sandboxes_api_v1_snapshot_pb.Snapshot.Status.State>,
        ownerId: string,
    }
}

export class ListSnapshotsResponse extends jspb.Message { 
    clearSnapshotsList(): void;
    getSnapshotsList(): Array<sandboxes_api_v1_snapshot_pb.Snapshot>;
    setSnapshotsList(value: Array<sandboxes_api_v1_snapshot_pb.Snapshot>): ListSnapshotsResponse;
    addSnapshots(value?: sandboxes_api_v1_snapshot_pb.Snapshot, index?: number): sandboxes_api_v1_snapshot_pb.Snapshot;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSnapshotsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSnapshotsResponse): ListSnapshotsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSnapshotsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSnapshotsResponse;
    static deserializeBinaryFromReader(message: ListSnapshotsResponse, reader: jspb.BinaryReader): ListSnapshotsResponse;
}

export namespace ListSnapshotsResponse {
    export type AsObject = {
        snapshotsList: Array<sandboxes_api_v1_snapshot_pb.Snapshot.AsObject>,
    }
}

export class CopySnapshotRequest extends jspb.Message { 
    getOrgId(): string;
    setOrgId(value: string): CopySnapshotRequest;
    getName(): string;
    setName(value: string): CopySnapshotRequest;
    getCopyFrom(): string;
    setCopyFrom(value: string): CopySnapshotRequest;
    getOwnerId(): string;
    setOwnerId(value: string): CopySnapshotRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CopySnapshotRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CopySnapshotRequest): CopySnapshotRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CopySnapshotRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CopySnapshotRequest;
    static deserializeBinaryFromReader(message: CopySnapshotRequest, reader: jspb.BinaryReader): CopySnapshotRequest;
}

export namespace CopySnapshotRequest {
    export type AsObject = {
        orgId: string,
        name: string,
        copyFrom: string,
        ownerId: string,
    }
}

export class CopySnapshotResponse extends jspb.Message { 

    hasSnapshot(): boolean;
    clearSnapshot(): void;
    getSnapshot(): sandboxes_api_v1_snapshot_pb.Snapshot | undefined;
    setSnapshot(value?: sandboxes_api_v1_snapshot_pb.Snapshot): CopySnapshotResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CopySnapshotResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CopySnapshotResponse): CopySnapshotResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CopySnapshotResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CopySnapshotResponse;
    static deserializeBinaryFromReader(message: CopySnapshotResponse, reader: jspb.BinaryReader): CopySnapshotResponse;
}

export namespace CopySnapshotResponse {
    export type AsObject = {
        snapshot?: sandboxes_api_v1_snapshot_pb.Snapshot.AsObject,
    }
}

export class DeleteSnapshotRequest extends jspb.Message { 

    hasSnapshot(): boolean;
    clearSnapshot(): void;
    getSnapshot(): sandboxes_api_v1_snapshot_pb.Snapshot | undefined;
    setSnapshot(value?: sandboxes_api_v1_snapshot_pb.Snapshot): DeleteSnapshotRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSnapshotRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSnapshotRequest): DeleteSnapshotRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSnapshotRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSnapshotRequest;
    static deserializeBinaryFromReader(message: DeleteSnapshotRequest, reader: jspb.BinaryReader): DeleteSnapshotRequest;
}

export namespace DeleteSnapshotRequest {
    export type AsObject = {
        snapshot?: sandboxes_api_v1_snapshot_pb.Snapshot.AsObject,
    }
}

export class DeleteSnapshotResponse extends jspb.Message { 

    hasSnapshot(): boolean;
    clearSnapshot(): void;
    getSnapshot(): sandboxes_api_v1_snapshot_pb.Snapshot | undefined;
    setSnapshot(value?: sandboxes_api_v1_snapshot_pb.Snapshot): DeleteSnapshotResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSnapshotResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSnapshotResponse): DeleteSnapshotResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSnapshotResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSnapshotResponse;
    static deserializeBinaryFromReader(message: DeleteSnapshotResponse, reader: jspb.BinaryReader): DeleteSnapshotResponse;
}

export namespace DeleteSnapshotResponse {
    export type AsObject = {
        snapshot?: sandboxes_api_v1_snapshot_pb.Snapshot.AsObject,
    }
}

export class MoveSnapshotRequest extends jspb.Message { 
    getOrgId(): string;
    setOrgId(value: string): MoveSnapshotRequest;
    getSnapshotId(): string;
    setSnapshotId(value: string): MoveSnapshotRequest;
    getFolderId(): string;
    setFolderId(value: string): MoveSnapshotRequest;
    getNewName(): string;
    setNewName(value: string): MoveSnapshotRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveSnapshotRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MoveSnapshotRequest): MoveSnapshotRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveSnapshotRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveSnapshotRequest;
    static deserializeBinaryFromReader(message: MoveSnapshotRequest, reader: jspb.BinaryReader): MoveSnapshotRequest;
}

export namespace MoveSnapshotRequest {
    export type AsObject = {
        orgId: string,
        snapshotId: string,
        folderId: string,
        newName: string,
    }
}

export class MoveSnapshotResponse extends jspb.Message { 

    hasSnapshot(): boolean;
    clearSnapshot(): void;
    getSnapshot(): sandboxes_api_v1_snapshot_pb.Snapshot | undefined;
    setSnapshot(value?: sandboxes_api_v1_snapshot_pb.Snapshot): MoveSnapshotResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveSnapshotResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MoveSnapshotResponse): MoveSnapshotResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveSnapshotResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveSnapshotResponse;
    static deserializeBinaryFromReader(message: MoveSnapshotResponse, reader: jspb.BinaryReader): MoveSnapshotResponse;
}

export namespace MoveSnapshotResponse {
    export type AsObject = {
        snapshot?: sandboxes_api_v1_snapshot_pb.Snapshot.AsObject,
    }
}
