// package: sandboxes.api.v1
// file: sandboxes/api/v1/resource_quotacontroller.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class QuotaController extends jspb.Message { 

    getAllocationsMap(): jspb.Map<string, number>;
    clearAllocationsMap(): void;
    getLimit(): number;
    setLimit(value: number): QuotaController;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuotaController.AsObject;
    static toObject(includeInstance: boolean, msg: QuotaController): QuotaController.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuotaController, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuotaController;
    static deserializeBinaryFromReader(message: QuotaController, reader: jspb.BinaryReader): QuotaController;
}

export namespace QuotaController {
    export type AsObject = {

        allocationsMap: Array<[string, number]>,
        limit: number,
    }
}
