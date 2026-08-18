// package: sandboxes.api.v1
// file: sandboxes/api/v1/resource_toolpkg.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ToolPackage extends jspb.Message { 
    getName(): string;
    setName(value: string): ToolPackage;
    getVersion(): string;
    setVersion(value: string): ToolPackage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ToolPackage.AsObject;
    static toObject(includeInstance: boolean, msg: ToolPackage): ToolPackage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ToolPackage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ToolPackage;
    static deserializeBinaryFromReader(message: ToolPackage, reader: jspb.BinaryReader): ToolPackage;
}

export namespace ToolPackage {
    export type AsObject = {
        name: string,
        version: string,
    }
}
