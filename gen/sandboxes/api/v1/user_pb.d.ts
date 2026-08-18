// package: sandboxes.api.v1
// file: sandboxes/api/v1/user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as sandboxes_api_v1_object_pb from "../../../sandboxes/api/v1/object_pb";

export class User extends jspb.Message { 

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): sandboxes_api_v1_object_pb.ObjectMeta | undefined;
    setMeta(value?: sandboxes_api_v1_object_pb.ObjectMeta): User;
    getEmail(): string;
    setEmail(value: string): User;
    getDisplayName(): string;
    setDisplayName(value: string): User;
    getAvatarLink(): string;
    setAvatarLink(value: string): User;
    getOrgId(): string;
    setOrgId(value: string): User;
    clearSshAuthorizedKeysList(): void;
    getSshAuthorizedKeysList(): Array<string>;
    setSshAuthorizedKeysList(value: Array<string>): User;
    addSshAuthorizedKeys(value: string, index?: number): string;
    clearAuthorizedClientsList(): void;
    getAuthorizedClientsList(): Array<User.AuthorizedClient>;
    setAuthorizedClientsList(value: Array<User.AuthorizedClient>): User;
    addAuthorizedClients(value?: User.AuthorizedClient, index?: number): User.AuthorizedClient;
    getLinkedEmail(): string;
    setLinkedEmail(value: string): User;
    getStateJson(): string;
    setStateJson(value: string): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        meta?: sandboxes_api_v1_object_pb.ObjectMeta.AsObject,
        email: string,
        displayName: string,
        avatarLink: string,
        orgId: string,
        sshAuthorizedKeysList: Array<string>,
        authorizedClientsList: Array<User.AuthorizedClient.AsObject>,
        linkedEmail: string,
        stateJson: string,
    }


    export class AuthorizedClient extends jspb.Message { 
        getTokenId(): string;
        setTokenId(value: string): AuthorizedClient;

        hasIssuedAt(): boolean;
        clearIssuedAt(): void;
        getIssuedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setIssuedAt(value?: google_protobuf_timestamp_pb.Timestamp): AuthorizedClient;

        hasExpireAt(): boolean;
        clearExpireAt(): void;
        getExpireAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setExpireAt(value?: google_protobuf_timestamp_pb.Timestamp): AuthorizedClient;
        getLoginTokenId(): string;
        setLoginTokenId(value: string): AuthorizedClient;
        getClientType(): User.AuthorizedClient.ClientType;
        setClientType(value: User.AuthorizedClient.ClientType): AuthorizedClient;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AuthorizedClient.AsObject;
        static toObject(includeInstance: boolean, msg: AuthorizedClient): AuthorizedClient.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AuthorizedClient, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AuthorizedClient;
        static deserializeBinaryFromReader(message: AuthorizedClient, reader: jspb.BinaryReader): AuthorizedClient;
    }

    export namespace AuthorizedClient {
        export type AsObject = {
            tokenId: string,
            issuedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            expireAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            loginTokenId: string,
            clientType: User.AuthorizedClient.ClientType,
        }

        export enum ClientType {
    UNKNOWN = 0,
    WEB = 1,
        }

    }

}
