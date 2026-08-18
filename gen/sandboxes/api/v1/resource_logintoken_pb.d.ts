// package: sandboxes.api.v1
// file: sandboxes/api/v1/resource_logintoken.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class LoginToken extends jspb.Message { 
    getEncodedToken(): string;
    setEncodedToken(value: string): LoginToken;
    getAccountId(): string;
    setAccountId(value: string): LoginToken;

    hasValidSince(): boolean;
    clearValidSince(): void;
    getValidSince(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setValidSince(value?: google_protobuf_timestamp_pb.Timestamp): LoginToken;

    hasExpireAt(): boolean;
    clearExpireAt(): void;
    getExpireAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpireAt(value?: google_protobuf_timestamp_pb.Timestamp): LoginToken;
    getWebRedirectPath(): string;
    setWebRedirectPath(value: string): LoginToken;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginToken.AsObject;
    static toObject(includeInstance: boolean, msg: LoginToken): LoginToken.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginToken, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginToken;
    static deserializeBinaryFromReader(message: LoginToken, reader: jspb.BinaryReader): LoginToken;
}

export namespace LoginToken {
    export type AsObject = {
        encodedToken: string,
        accountId: string,
        validSince?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        expireAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        webRedirectPath: string,
    }
}
