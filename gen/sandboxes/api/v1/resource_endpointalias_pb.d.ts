// package: sandboxes.api.v1
// file: sandboxes/api/v1/resource_endpointalias.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class EndpointAlias extends jspb.Message { 
    getSandboxId(): string;
    setSandboxId(value: string): EndpointAlias;
    getEndpointName(): string;
    setEndpointName(value: string): EndpointAlias;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EndpointAlias.AsObject;
    static toObject(includeInstance: boolean, msg: EndpointAlias): EndpointAlias.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EndpointAlias, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EndpointAlias;
    static deserializeBinaryFromReader(message: EndpointAlias, reader: jspb.BinaryReader): EndpointAlias;
}

export namespace EndpointAlias {
    export type AsObject = {
        sandboxId: string,
        endpointName: string,
    }
}
