// package: sandboxes.api.v1
// file: sandboxes/api/v1/resource_site.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as sandboxes_api_v1_common_pb from "../../../sandboxes/api/v1/common_pb";
import * as sandboxes_api_v1_system_pb from "../../../sandboxes/api/v1/system_pb";

export class Site extends jspb.Message { 
    getState(): Site.State;
    setState(value: Site.State): Site;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): Site.Request | undefined;
    setRequest(value?: Site.Request): Site;
    clearActivationsList(): void;
    getActivationsList(): Array<Site.Activation>;
    setActivationsList(value: Array<Site.Activation>): Site;
    addActivations(value?: Site.Activation, index?: number): Site.Activation;

    hasSystemInfo(): boolean;
    clearSystemInfo(): void;
    getSystemInfo(): sandboxes_api_v1_system_pb.SystemInfo | undefined;
    setSystemInfo(value?: sandboxes_api_v1_system_pb.SystemInfo): Site;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Site.AsObject;
    static toObject(includeInstance: boolean, msg: Site): Site.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Site, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Site;
    static deserializeBinaryFromReader(message: Site, reader: jspb.BinaryReader): Site;
}

export namespace Site {
    export type AsObject = {
        state: Site.State,
        request?: Site.Request.AsObject,
        activationsList: Array<Site.Activation.AsObject>,
        systemInfo?: sandboxes_api_v1_system_pb.SystemInfo.AsObject,
    }


    export class Request extends jspb.Message { 
        getActivationPublicKey(): string;
        setActivationPublicKey(value: string): Request;
        clearAuthorizedOperatorEmailsList(): void;
        getAuthorizedOperatorEmailsList(): Array<string>;
        setAuthorizedOperatorEmailsList(value: Array<string>): Request;
        addAuthorizedOperatorEmails(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Request.AsObject;
        static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Request;
        static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
    }

    export namespace Request {
        export type AsObject = {
            activationPublicKey: string,
            authorizedOperatorEmailsList: Array<string>,
        }
    }

    export class Activation extends jspb.Message { 
        getCertPem(): string;
        setCertPem(value: string): Activation;
        getCertSerial(): string;
        setCertSerial(value: string): Activation;
        getPublicKeyFingerprint(): string;
        setPublicKeyFingerprint(value: string): Activation;

        hasIssuedAt(): boolean;
        clearIssuedAt(): void;
        getIssuedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setIssuedAt(value?: google_protobuf_timestamp_pb.Timestamp): Activation;

        hasExpireAt(): boolean;
        clearExpireAt(): void;
        getExpireAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setExpireAt(value?: google_protobuf_timestamp_pb.Timestamp): Activation;
        clearExternalIpList(): void;
        getExternalIpList(): Array<string>;
        setExternalIpList(value: Array<string>): Activation;
        addExternalIp(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Activation.AsObject;
        static toObject(includeInstance: boolean, msg: Activation): Activation.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Activation, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Activation;
        static deserializeBinaryFromReader(message: Activation, reader: jspb.BinaryReader): Activation;
    }

    export namespace Activation {
        export type AsObject = {
            certPem: string,
            certSerial: string,
            publicKeyFingerprint: string,
            issuedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            expireAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            externalIpList: Array<string>,
        }
    }


    export enum State {
    INVALID = 0,
    PENDING = 1,
    ACTIVE = 2,
    SUSPENDED = 3,
    }

}
