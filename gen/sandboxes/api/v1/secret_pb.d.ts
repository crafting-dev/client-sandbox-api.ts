// package: sandboxes.api.v1
// file: sandboxes/api/v1/secret.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as sandboxes_api_v1_common_pb from "../../../sandboxes/api/v1/common_pb";
import * as sandboxes_api_v1_object_pb from "../../../sandboxes/api/v1/object_pb";

export class Secret extends jspb.Message { 

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): sandboxes_api_v1_object_pb.ObjectMeta | undefined;
    setMeta(value?: sandboxes_api_v1_object_pb.ObjectMeta): Secret;
    getOrgId(): string;
    setOrgId(value: string): Secret;
    getState(): Secret.State;
    setState(value: Secret.State): Secret;

    hasError(): boolean;
    clearError(): void;
    getError(): sandboxes_api_v1_common_pb.Error | undefined;
    setError(value?: sandboxes_api_v1_common_pb.Error): Secret;

    hasRestriction(): boolean;
    clearRestriction(): void;
    getRestriction(): Secret.Restriction | undefined;
    setRestriction(value?: Secret.Restriction): Secret;

    hasOpaque(): boolean;
    clearOpaque(): void;
    getOpaque(): string;
    setOpaque(value: string): Secret;

    hasKeypair(): boolean;
    clearKeypair(): void;
    getKeypair(): Secret.KeyPair | undefined;
    setKeypair(value?: Secret.KeyPair): Secret;

    hasSshKey(): boolean;
    clearSshKey(): void;
    getSshKey(): Secret.SSHKey | undefined;
    setSshKey(value?: Secret.SSHKey): Secret;

    hasApiKey(): boolean;
    clearApiKey(): void;
    getApiKey(): Secret.APIKey | undefined;
    setApiKey(value?: Secret.APIKey): Secret;

    hasSecret(): boolean;
    clearSecret(): void;
    getSecret(): Secret.Secret | undefined;
    setSecret(value?: Secret.Secret): Secret;

    hasToken(): boolean;
    clearToken(): void;
    getToken(): Secret.Token | undefined;
    setToken(value?: Secret.Token): Secret;

    getDataCase(): Secret.DataCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Secret.AsObject;
    static toObject(includeInstance: boolean, msg: Secret): Secret.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Secret, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Secret;
    static deserializeBinaryFromReader(message: Secret, reader: jspb.BinaryReader): Secret;
}

export namespace Secret {
    export type AsObject = {
        meta?: sandboxes_api_v1_object_pb.ObjectMeta.AsObject,
        orgId: string,
        state: Secret.State,
        error?: sandboxes_api_v1_common_pb.Error.AsObject,
        restriction?: Secret.Restriction.AsObject,
        opaque: string,
        keypair?: Secret.KeyPair.AsObject,
        sshKey?: Secret.SSHKey.AsObject,
        apiKey?: Secret.APIKey.AsObject,
        secret?: Secret.Secret.AsObject,
        token?: Secret.Token.AsObject,
    }


    export class Restriction extends jspb.Message { 
        getAccess(): Secret.Restriction.Access;
        setAccess(value: Secret.Restriction.Access): Restriction;
        getDisableMount(): boolean;
        setDisableMount(value: boolean): Restriction;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Restriction.AsObject;
        static toObject(includeInstance: boolean, msg: Restriction): Restriction.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Restriction, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Restriction;
        static deserializeBinaryFromReader(message: Restriction, reader: jspb.BinaryReader): Restriction;
    }

    export namespace Restriction {
        export type AsObject = {
            access: Secret.Restriction.Access,
            disableMount: boolean,
        }

        export enum Access {
    DEFAULT = 0,
    ADMIN_ONLY = 1,
        }

    }

    export class KeyPair extends jspb.Message { 
        getPublicKeyPem(): string;
        setPublicKeyPem(value: string): KeyPair;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): KeyPair.AsObject;
        static toObject(includeInstance: boolean, msg: KeyPair): KeyPair.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: KeyPair, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): KeyPair;
        static deserializeBinaryFromReader(message: KeyPair, reader: jspb.BinaryReader): KeyPair;
    }

    export namespace KeyPair {
        export type AsObject = {
            publicKeyPem: string,
        }
    }

    export class SSHKey extends jspb.Message { 
        getAuthorizedKey(): string;
        setAuthorizedKey(value: string): SSHKey;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SSHKey.AsObject;
        static toObject(includeInstance: boolean, msg: SSHKey): SSHKey.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SSHKey, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SSHKey;
        static deserializeBinaryFromReader(message: SSHKey, reader: jspb.BinaryReader): SSHKey;
    }

    export namespace SSHKey {
        export type AsObject = {
            authorizedKey: string,
        }
    }

    export class APIKey extends jspb.Message { 
        getKey(): string;
        setKey(value: string): APIKey;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): APIKey.AsObject;
        static toObject(includeInstance: boolean, msg: APIKey): APIKey.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: APIKey, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): APIKey;
        static deserializeBinaryFromReader(message: APIKey, reader: jspb.BinaryReader): APIKey;
    }

    export namespace APIKey {
        export type AsObject = {
            key: string,
        }
    }

    export class Secret extends jspb.Message { 
        getSize(): number;
        setSize(value: number): Secret;
        getData(): Uint8Array | string;
        getData_asU8(): Uint8Array;
        getData_asB64(): string;
        setData(value: Uint8Array | string): Secret;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Secret.AsObject;
        static toObject(includeInstance: boolean, msg: Secret): Secret.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Secret, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Secret;
        static deserializeBinaryFromReader(message: Secret, reader: jspb.BinaryReader): Secret;
    }

    export namespace Secret {
        export type AsObject = {
            size: number,
            data: Uint8Array | string,
        }
    }

    export class Token extends jspb.Message { 
        getProviderId(): string;
        setProviderId(value: string): Token;

        hasParams(): boolean;
        clearParams(): void;
        getParams(): Secret.Token.Params | undefined;
        setParams(value?: Secret.Token.Params): Token;
        getTokenSize(): number;
        setTokenSize(value: number): Token;
        getSize(): number;
        setSize(value: number): Token;

        hasValidSince(): boolean;
        clearValidSince(): void;
        getValidSince(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setValidSince(value?: google_protobuf_timestamp_pb.Timestamp): Token;

        hasValidUntil(): boolean;
        clearValidUntil(): void;
        getValidUntil(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setValidUntil(value?: google_protobuf_timestamp_pb.Timestamp): Token;

        hasRefreshSince(): boolean;
        clearRefreshSince(): void;
        getRefreshSince(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setRefreshSince(value?: google_protobuf_timestamp_pb.Timestamp): Token;

        hasRefreshBefore(): boolean;
        clearRefreshBefore(): void;
        getRefreshBefore(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setRefreshBefore(value?: google_protobuf_timestamp_pb.Timestamp): Token;
        getRefreshCount(): number;
        setRefreshCount(value: number): Token;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Token.AsObject;
        static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Token;
        static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
    }

    export namespace Token {
        export type AsObject = {
            providerId: string,
            params?: Secret.Token.Params.AsObject,
            tokenSize: number,
            size: number,
            validSince?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            validUntil?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            refreshSince?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            refreshBefore?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            refreshCount: number,
        }


        export class Params extends jspb.Message { 
            clearScopesList(): void;
            getScopesList(): Array<string>;
            setScopesList(value: Array<string>): Params;
            addScopes(value: string, index?: number): string;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Params.AsObject;
            static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Params;
            static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
        }

        export namespace Params {
            export type AsObject = {
                scopesList: Array<string>,
            }
        }

    }


    export enum Type {
    UNSPECIFIED = 0,
    OPAQUE = 1,
    KEYPAIR = 2,
    SSHKEY = 3,
    APIKEY = 4,
    SECRET = 5,
    TOKEN = 6,
    }

    export enum State {
    UNKNOWN = 0,
    PROVISIONING = 1,
    READY = 2,
    ERROR = 3,
    }


    export enum DataCase {
        DATA_NOT_SET = 0,
        OPAQUE = 10,
        KEYPAIR = 11,
        SSH_KEY = 12,
        API_KEY = 13,
        SECRET = 14,
        TOKEN = 15,
    }

}
