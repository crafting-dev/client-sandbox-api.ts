// package: sandboxes.api.v1
// file: sandboxes/api/v1/workspaceservice.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as sandboxes_api_v1_workload_pb from "../../../sandboxes/api/v1/workload_pb";
import * as sandboxes_api_v1_org_pb from "../../../sandboxes/api/v1/org_pb";
import * as sandboxes_api_v1_process_pb from "../../../sandboxes/api/v1/process_pb";
import * as sandboxes_api_v1_resource_sourcecontrol_pb from "../../../sandboxes/api/v1/resource_sourcecontrol_pb";

export class SyncStreamCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SyncStreamCommand.AsObject;
    static toObject(includeInstance: boolean, msg: SyncStreamCommand): SyncStreamCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SyncStreamCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SyncStreamCommand;
    static deserializeBinaryFromReader(message: SyncStreamCommand, reader: jspb.BinaryReader): SyncStreamCommand;
}

export namespace SyncStreamCommand {
    export type AsObject = {
    }
}

export class SyncStreamEvent extends jspb.Message { 

    hasSetup(): boolean;
    clearSetup(): void;
    getSetup(): sandboxes_api_v1_workload_pb.Setup | undefined;
    setSetup(value?: sandboxes_api_v1_workload_pb.Setup): SyncStreamEvent;

    getEventCase(): SyncStreamEvent.EventCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SyncStreamEvent.AsObject;
    static toObject(includeInstance: boolean, msg: SyncStreamEvent): SyncStreamEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SyncStreamEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SyncStreamEvent;
    static deserializeBinaryFromReader(message: SyncStreamEvent, reader: jspb.BinaryReader): SyncStreamEvent;
}

export namespace SyncStreamEvent {
    export type AsObject = {
        setup?: sandboxes_api_v1_workload_pb.Setup.AsObject,
    }

    export enum EventCase {
        EVENT_NOT_SET = 0,
        SETUP = 1,
    }

}

export class CurrentSetupRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CurrentSetupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CurrentSetupRequest): CurrentSetupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CurrentSetupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CurrentSetupRequest;
    static deserializeBinaryFromReader(message: CurrentSetupRequest, reader: jspb.BinaryReader): CurrentSetupRequest;
}

export namespace CurrentSetupRequest {
    export type AsObject = {
    }
}

export class CurrentSetupResponse extends jspb.Message { 

    hasSetup(): boolean;
    clearSetup(): void;
    getSetup(): sandboxes_api_v1_workload_pb.Setup | undefined;
    setSetup(value?: sandboxes_api_v1_workload_pb.Setup): CurrentSetupResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CurrentSetupResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CurrentSetupResponse): CurrentSetupResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CurrentSetupResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CurrentSetupResponse;
    static deserializeBinaryFromReader(message: CurrentSetupResponse, reader: jspb.BinaryReader): CurrentSetupResponse;
}

export namespace CurrentSetupResponse {
    export type AsObject = {
        setup?: sandboxes_api_v1_workload_pb.Setup.AsObject,
    }
}

export class IssueTokenRequest extends jspb.Message { 

    hasSpec(): boolean;
    clearSpec(): void;
    getSpec(): sandboxes_api_v1_workload_pb.TokenSpec | undefined;
    setSpec(value?: sandboxes_api_v1_workload_pb.TokenSpec): IssueTokenRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IssueTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: IssueTokenRequest): IssueTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IssueTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IssueTokenRequest;
    static deserializeBinaryFromReader(message: IssueTokenRequest, reader: jspb.BinaryReader): IssueTokenRequest;
}

export namespace IssueTokenRequest {
    export type AsObject = {
        spec?: sandboxes_api_v1_workload_pb.TokenSpec.AsObject,
    }
}

export class IssueTokenResponse extends jspb.Message { 
    getToken(): string;
    setToken(value: string): IssueTokenResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IssueTokenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: IssueTokenResponse): IssueTokenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IssueTokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IssueTokenResponse;
    static deserializeBinaryFromReader(message: IssueTokenResponse, reader: jspb.BinaryReader): IssueTokenResponse;
}

export namespace IssueTokenResponse {
    export type AsObject = {
        token: string,
    }
}

export class SourceControlCredentialRequest extends jspb.Message { 
    getCheckoutPath(): string;
    setCheckoutPath(value: string): SourceControlCredentialRequest;
    getRemoteUrl(): string;
    setRemoteUrl(value: string): SourceControlCredentialRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SourceControlCredentialRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SourceControlCredentialRequest): SourceControlCredentialRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SourceControlCredentialRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SourceControlCredentialRequest;
    static deserializeBinaryFromReader(message: SourceControlCredentialRequest, reader: jspb.BinaryReader): SourceControlCredentialRequest;
}

export namespace SourceControlCredentialRequest {
    export type AsObject = {
        checkoutPath: string,
        remoteUrl: string,
    }
}

export class SourceControlCredentialResponse extends jspb.Message { 

    hasCredential(): boolean;
    clearCredential(): void;
    getCredential(): sandboxes_api_v1_resource_sourcecontrol_pb.SourceControlCredential | undefined;
    setCredential(value?: sandboxes_api_v1_resource_sourcecontrol_pb.SourceControlCredential): SourceControlCredentialResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SourceControlCredentialResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SourceControlCredentialResponse): SourceControlCredentialResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SourceControlCredentialResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SourceControlCredentialResponse;
    static deserializeBinaryFromReader(message: SourceControlCredentialResponse, reader: jspb.BinaryReader): SourceControlCredentialResponse;
}

export namespace SourceControlCredentialResponse {
    export type AsObject = {
        credential?: sandboxes_api_v1_resource_sourcecontrol_pb.SourceControlCredential.AsObject,
    }
}

export class MountOverlayRequest extends jspb.Message { 
    getMountpoint(): string;
    setMountpoint(value: string): MountOverlayRequest;
    getOptions(): string;
    setOptions(value: string): MountOverlayRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MountOverlayRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MountOverlayRequest): MountOverlayRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MountOverlayRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MountOverlayRequest;
    static deserializeBinaryFromReader(message: MountOverlayRequest, reader: jspb.BinaryReader): MountOverlayRequest;
}

export namespace MountOverlayRequest {
    export type AsObject = {
        mountpoint: string,
        options: string,
    }
}

export class MountOverlayResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MountOverlayResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MountOverlayResponse): MountOverlayResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MountOverlayResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MountOverlayResponse;
    static deserializeBinaryFromReader(message: MountOverlayResponse, reader: jspb.BinaryReader): MountOverlayResponse;
}

export namespace MountOverlayResponse {
    export type AsObject = {
    }
}

export class WriteFileRequest extends jspb.Message { 
    getPath(): string;
    setPath(value: string): WriteFileRequest;
    getCreateIfNotExists(): boolean;
    setCreateIfNotExists(value: boolean): WriteFileRequest;
    getMode(): number;
    setMode(value: number): WriteFileRequest;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): WriteFileRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteFileRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WriteFileRequest): WriteFileRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteFileRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteFileRequest;
    static deserializeBinaryFromReader(message: WriteFileRequest, reader: jspb.BinaryReader): WriteFileRequest;
}

export namespace WriteFileRequest {
    export type AsObject = {
        path: string,
        createIfNotExists: boolean,
        mode: number,
        data: Uint8Array | string,
    }
}

export class WriteFileResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteFileResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WriteFileResponse): WriteFileResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteFileResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteFileResponse;
    static deserializeBinaryFromReader(message: WriteFileResponse, reader: jspb.BinaryReader): WriteFileResponse;
}

export namespace WriteFileResponse {
    export type AsObject = {
    }
}

export class ReportJetbrainsRemoteDevServerStatusRequest extends jspb.Message { 
    clearServersList(): void;
    getServersList(): Array<JetbrainsRemoteDevServerStatus>;
    setServersList(value: Array<JetbrainsRemoteDevServerStatus>): ReportJetbrainsRemoteDevServerStatusRequest;
    addServers(value?: JetbrainsRemoteDevServerStatus, index?: number): JetbrainsRemoteDevServerStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReportJetbrainsRemoteDevServerStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReportJetbrainsRemoteDevServerStatusRequest): ReportJetbrainsRemoteDevServerStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReportJetbrainsRemoteDevServerStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReportJetbrainsRemoteDevServerStatusRequest;
    static deserializeBinaryFromReader(message: ReportJetbrainsRemoteDevServerStatusRequest, reader: jspb.BinaryReader): ReportJetbrainsRemoteDevServerStatusRequest;
}

export namespace ReportJetbrainsRemoteDevServerStatusRequest {
    export type AsObject = {
        serversList: Array<JetbrainsRemoteDevServerStatus.AsObject>,
    }
}

export class ReportJetbrainsRemoteDevServerStatusResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReportJetbrainsRemoteDevServerStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ReportJetbrainsRemoteDevServerStatusResponse): ReportJetbrainsRemoteDevServerStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReportJetbrainsRemoteDevServerStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReportJetbrainsRemoteDevServerStatusResponse;
    static deserializeBinaryFromReader(message: ReportJetbrainsRemoteDevServerStatusResponse, reader: jspb.BinaryReader): ReportJetbrainsRemoteDevServerStatusResponse;
}

export namespace ReportJetbrainsRemoteDevServerStatusResponse {
    export type AsObject = {
    }
}

export class JetbrainsRemoteDevServerStatus extends jspb.Message { 
    getIdeCode(): string;
    setIdeCode(value: string): JetbrainsRemoteDevServerStatus;
    getIdeVersion(): string;
    setIdeVersion(value: string): JetbrainsRemoteDevServerStatus;

    hasLastActivityReceivedAt(): boolean;
    clearLastActivityReceivedAt(): void;
    getLastActivityReceivedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastActivityReceivedAt(value?: google_protobuf_timestamp_pb.Timestamp): JetbrainsRemoteDevServerStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JetbrainsRemoteDevServerStatus.AsObject;
    static toObject(includeInstance: boolean, msg: JetbrainsRemoteDevServerStatus): JetbrainsRemoteDevServerStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JetbrainsRemoteDevServerStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JetbrainsRemoteDevServerStatus;
    static deserializeBinaryFromReader(message: JetbrainsRemoteDevServerStatus, reader: jspb.BinaryReader): JetbrainsRemoteDevServerStatus;
}

export namespace JetbrainsRemoteDevServerStatus {
    export type AsObject = {
        ideCode: string,
        ideVersion: string,
        lastActivityReceivedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}
