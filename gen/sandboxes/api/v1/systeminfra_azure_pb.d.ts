// package: sandboxes.api.v1
// file: sandboxes/api/v1/systeminfra_azure.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Azure extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Azure.AsObject;
    static toObject(includeInstance: boolean, msg: Azure): Azure.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Azure, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Azure;
    static deserializeBinaryFromReader(message: Azure, reader: jspb.BinaryReader): Azure;
}

export namespace Azure {
    export type AsObject = {
    }


    export class Provider extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Provider.AsObject;
        static toObject(includeInstance: boolean, msg: Provider): Provider.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Provider, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Provider;
        static deserializeBinaryFromReader(message: Provider, reader: jspb.BinaryReader): Provider;
    }

    export namespace Provider {
        export type AsObject = {
        }
    }

    export class VmSize extends jspb.Message { 
        getName(): string;
        setName(value: string): VmSize;
        getCpus(): number;
        setCpus(value: number): VmSize;
        getMemory(): number;
        setMemory(value: number): VmSize;
        getArchitecture(): string;
        setArchitecture(value: string): VmSize;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): VmSize.AsObject;
        static toObject(includeInstance: boolean, msg: VmSize): VmSize.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: VmSize, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): VmSize;
        static deserializeBinaryFromReader(message: VmSize, reader: jspb.BinaryReader): VmSize;
    }

    export namespace VmSize {
        export type AsObject = {
            name: string,
            cpus: number,
            memory: number,
            architecture: string,
        }
    }

    export class ListVmSizesAction extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ListVmSizesAction.AsObject;
        static toObject(includeInstance: boolean, msg: ListVmSizesAction): ListVmSizesAction.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ListVmSizesAction, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ListVmSizesAction;
        static deserializeBinaryFromReader(message: ListVmSizesAction, reader: jspb.BinaryReader): ListVmSizesAction;
    }

    export namespace ListVmSizesAction {
        export type AsObject = {
        }


        export class Result extends jspb.Message { 
            clearVmSizesList(): void;
            getVmSizesList(): Array<Azure.VmSize>;
            setVmSizesList(value: Array<Azure.VmSize>): Result;
            addVmSizes(value?: Azure.VmSize, index?: number): Azure.VmSize;

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
                vmSizesList: Array<Azure.VmSize.AsObject>,
            }
        }

    }

    export class ListNodePoolsAction extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ListNodePoolsAction.AsObject;
        static toObject(includeInstance: boolean, msg: ListNodePoolsAction): ListNodePoolsAction.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ListNodePoolsAction, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ListNodePoolsAction;
        static deserializeBinaryFromReader(message: ListNodePoolsAction, reader: jspb.BinaryReader): ListNodePoolsAction;
    }

    export namespace ListNodePoolsAction {
        export type AsObject = {
        }


        export class Result extends jspb.Message { 
            clearNodePoolsList(): void;
            getNodePoolsList(): Array<Azure.ListNodePoolsAction.Result.NodePool>;
            setNodePoolsList(value: Array<Azure.ListNodePoolsAction.Result.NodePool>): Result;
            addNodePools(value?: Azure.ListNodePoolsAction.Result.NodePool, index?: number): Azure.ListNodePoolsAction.Result.NodePool;

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
                nodePoolsList: Array<Azure.ListNodePoolsAction.Result.NodePool.AsObject>,
            }


            export class NodePool extends jspb.Message { 
                getName(): string;
                setName(value: string): NodePool;
                getManaged(): boolean;
                setManaged(value: boolean): NodePool;

                getLabelsMap(): jspb.Map<string, string>;
                clearLabelsMap(): void;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): NodePool.AsObject;
                static toObject(includeInstance: boolean, msg: NodePool): NodePool.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: NodePool, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): NodePool;
                static deserializeBinaryFromReader(message: NodePool, reader: jspb.BinaryReader): NodePool;
            }

            export namespace NodePool {
                export type AsObject = {
                    name: string,
                    managed: boolean,

                    labelsMap: Array<[string, string]>,
                }
            }

        }

    }

}
