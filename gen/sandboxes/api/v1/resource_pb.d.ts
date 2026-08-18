// package: sandboxes.api.v1
// file: sandboxes/api/v1/resource.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as sandboxes_api_v1_object_pb from "../../../sandboxes/api/v1/object_pb";

export class Resource extends jspb.Message { 

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): sandboxes_api_v1_object_pb.ObjectMeta | undefined;
    setMeta(value?: sandboxes_api_v1_object_pb.ObjectMeta): Resource;
    getOrgId(): string;
    setOrgId(value: string): Resource;

    hasContent(): boolean;
    clearContent(): void;
    getContent(): google_protobuf_any_pb.Any | undefined;
    setContent(value?: google_protobuf_any_pb.Any): Resource;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): google_protobuf_any_pb.Any | undefined;
    setStatus(value?: google_protobuf_any_pb.Any): Resource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Resource.AsObject;
    static toObject(includeInstance: boolean, msg: Resource): Resource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Resource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Resource;
    static deserializeBinaryFromReader(message: Resource, reader: jspb.BinaryReader): Resource;
}

export namespace Resource {
    export type AsObject = {
        meta?: sandboxes_api_v1_object_pb.ObjectMeta.AsObject,
        orgId: string,
        content?: google_protobuf_any_pb.Any.AsObject,
        status?: google_protobuf_any_pb.Any.AsObject,
    }
}
