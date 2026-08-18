// package: sandboxes.api.v1
// file: sandboxes/api/v1/action_generic.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class RestartWorkloadAction extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RestartWorkloadAction.AsObject;
    static toObject(includeInstance: boolean, msg: RestartWorkloadAction): RestartWorkloadAction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RestartWorkloadAction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RestartWorkloadAction;
    static deserializeBinaryFromReader(message: RestartWorkloadAction, reader: jspb.BinaryReader): RestartWorkloadAction;
}

export namespace RestartWorkloadAction {
    export type AsObject = {
    }


    export class Result extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Result.AsObject;
        static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Result;
        static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
    }

    export namespace Result {
        export type AsObject = {
        }
    }

}
