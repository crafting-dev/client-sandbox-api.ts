// package: sandboxes.api.v1
// file: sandboxes/api/v1/resource_region.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as sandboxes_api_v1_system_pb from "../../../sandboxes/api/v1/system_pb";

export class Region extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): Region.Auth | undefined;
    setAuth(value?: Region.Auth): Region;

    hasSystemInfo(): boolean;
    clearSystemInfo(): void;
    getSystemInfo(): sandboxes_api_v1_system_pb.SystemInfo | undefined;
    setSystemInfo(value?: sandboxes_api_v1_system_pb.SystemInfo): Region;
    getGatewayBaseUrl(): string;
    setGatewayBaseUrl(value: string): Region;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Region.AsObject;
    static toObject(includeInstance: boolean, msg: Region): Region.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Region, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Region;
    static deserializeBinaryFromReader(message: Region, reader: jspb.BinaryReader): Region;
}

export namespace Region {
    export type AsObject = {
        auth?: Region.Auth.AsObject,
        systemInfo?: sandboxes_api_v1_system_pb.SystemInfo.AsObject,
        gatewayBaseUrl: string,
    }


    export class Auth extends jspb.Message { 
        clearPublicKeysList(): void;
        getPublicKeysList(): Array<string>;
        setPublicKeysList(value: Array<string>): Auth;
        addPublicKeys(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Auth.AsObject;
        static toObject(includeInstance: boolean, msg: Auth): Auth.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Auth, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Auth;
        static deserializeBinaryFromReader(message: Auth, reader: jspb.BinaryReader): Auth;
    }

    export namespace Auth {
        export type AsObject = {
            publicKeysList: Array<string>,
        }
    }

}
