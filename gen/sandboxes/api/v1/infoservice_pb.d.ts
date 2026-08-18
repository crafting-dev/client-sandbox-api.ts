// package: sandboxes.api.v1
// file: sandboxes/api/v1/infoservice.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as sandboxes_api_v1_app_pb from "../../../sandboxes/api/v1/app_pb";
import * as sandboxes_api_v1_org_pb from "../../../sandboxes/api/v1/org_pb";
import * as sandboxes_api_v1_resource_pb from "../../../sandboxes/api/v1/resource_pb";
import * as sandboxes_api_v1_sandbox_pb from "../../../sandboxes/api/v1/sandbox_pb";
import * as sandboxes_api_v1_secret_pb from "../../../sandboxes/api/v1/secret_pb";
import * as sandboxes_api_v1_system_pb from "../../../sandboxes/api/v1/system_pb";
import * as sandboxes_api_v1_user_pb from "../../../sandboxes/api/v1/user_pb";

export class SandboxInfo extends jspb.Message { 
    getName(): string;
    setName(value: string): SandboxInfo;

    hasComposer(): boolean;
    clearComposer(): void;
    getComposer(): SandboxInfo.Composer | undefined;
    setComposer(value?: SandboxInfo.Composer): SandboxInfo;
    clearEndpointsList(): void;
    getEndpointsList(): Array<SandboxInfo.Endpoint>;
    setEndpointsList(value: Array<SandboxInfo.Endpoint>): SandboxInfo;
    addEndpoints(value?: SandboxInfo.Endpoint, index?: number): SandboxInfo.Endpoint;

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
        name: string,
        composer?: SandboxInfo.Composer.AsObject,
        endpointsList: Array<SandboxInfo.Endpoint.AsObject>,
    }


    export class Composer extends jspb.Message { 

        hasApp(): boolean;
        clearApp(): void;
        getApp(): string;
        setApp(value: string): Composer;

        getFromCase(): Composer.FromCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Composer.AsObject;
        static toObject(includeInstance: boolean, msg: Composer): Composer.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Composer, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Composer;
        static deserializeBinaryFromReader(message: Composer, reader: jspb.BinaryReader): Composer;
    }

    export namespace Composer {
        export type AsObject = {
            app: string,
        }

        export enum FromCase {
            FROM_NOT_SET = 0,
            APP = 1,
        }

    }

    export class Endpoint extends jspb.Message { 
        getName(): string;
        setName(value: string): Endpoint;
        getFqdn(): string;
        setFqdn(value: string): Endpoint;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Endpoint.AsObject;
        static toObject(includeInstance: boolean, msg: Endpoint): Endpoint.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Endpoint, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Endpoint;
        static deserializeBinaryFromReader(message: Endpoint, reader: jspb.BinaryReader): Endpoint;
    }

    export namespace Endpoint {
        export type AsObject = {
            name: string,
            fqdn: string,
        }
    }

}

export class ListSandboxInfoRequest extends jspb.Message { 
    getOrg(): string;
    setOrg(value: string): ListSandboxInfoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSandboxInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSandboxInfoRequest): ListSandboxInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSandboxInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSandboxInfoRequest;
    static deserializeBinaryFromReader(message: ListSandboxInfoRequest, reader: jspb.BinaryReader): ListSandboxInfoRequest;
}

export namespace ListSandboxInfoRequest {
    export type AsObject = {
        org: string,
    }
}

export class ListSandboxInfoResponse extends jspb.Message { 
    clearSandboxesList(): void;
    getSandboxesList(): Array<SandboxInfo>;
    setSandboxesList(value: Array<SandboxInfo>): ListSandboxInfoResponse;
    addSandboxes(value?: SandboxInfo, index?: number): SandboxInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSandboxInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSandboxInfoResponse): ListSandboxInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSandboxInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSandboxInfoResponse;
    static deserializeBinaryFromReader(message: ListSandboxInfoResponse, reader: jspb.BinaryReader): ListSandboxInfoResponse;
}

export namespace ListSandboxInfoResponse {
    export type AsObject = {
        sandboxesList: Array<SandboxInfo.AsObject>,
    }
}
