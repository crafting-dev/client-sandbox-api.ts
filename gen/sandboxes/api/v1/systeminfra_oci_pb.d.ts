// package: sandboxes.api.v1
// file: sandboxes/api/v1/systeminfra_oci.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class OCI extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OCI.AsObject;
    static toObject(includeInstance: boolean, msg: OCI): OCI.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OCI, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OCI;
    static deserializeBinaryFromReader(message: OCI, reader: jspb.BinaryReader): OCI;
}

export namespace OCI {
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

    export class ComputeShape extends jspb.Message { 
        getName(): string;
        setName(value: string): ComputeShape;
        getFlexible(): boolean;
        setFlexible(value: boolean): ComputeShape;

        hasOcpu(): boolean;
        clearOcpu(): void;
        getOcpu(): OCI.ComputeShape.OCPU | undefined;
        setOcpu(value?: OCI.ComputeShape.OCPU): ComputeShape;

        hasMemory(): boolean;
        clearMemory(): void;
        getMemory(): OCI.ComputeShape.Memory | undefined;
        setMemory(value?: OCI.ComputeShape.Memory): ComputeShape;

        hasGpu(): boolean;
        clearGpu(): void;
        getGpu(): OCI.ComputeShape.Gpu | undefined;
        setGpu(value?: OCI.ComputeShape.Gpu): ComputeShape;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ComputeShape.AsObject;
        static toObject(includeInstance: boolean, msg: ComputeShape): ComputeShape.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ComputeShape, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ComputeShape;
        static deserializeBinaryFromReader(message: ComputeShape, reader: jspb.BinaryReader): ComputeShape;
    }

    export namespace ComputeShape {
        export type AsObject = {
            name: string,
            flexible: boolean,
            ocpu?: OCI.ComputeShape.OCPU.AsObject,
            memory?: OCI.ComputeShape.Memory.AsObject,
            gpu?: OCI.ComputeShape.Gpu.AsObject,
        }


        export class OCPU extends jspb.Message { 
            getOcpus(): number;
            setOcpus(value: number): OCPU;

            hasOptions(): boolean;
            clearOptions(): void;
            getOptions(): OCI.ComputeShape.OCPU.Options | undefined;
            setOptions(value?: OCI.ComputeShape.OCPU.Options): OCPU;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): OCPU.AsObject;
            static toObject(includeInstance: boolean, msg: OCPU): OCPU.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: OCPU, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): OCPU;
            static deserializeBinaryFromReader(message: OCPU, reader: jspb.BinaryReader): OCPU;
        }

        export namespace OCPU {
            export type AsObject = {
                ocpus: number,
                options?: OCI.ComputeShape.OCPU.Options.AsObject,
            }


            export class Options extends jspb.Message { 
                getMin(): number;
                setMin(value: number): Options;
                getMax(): number;
                setMax(value: number): Options;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Options.AsObject;
                static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Options, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Options;
                static deserializeBinaryFromReader(message: Options, reader: jspb.BinaryReader): Options;
            }

            export namespace Options {
                export type AsObject = {
                    min: number,
                    max: number,
                }
            }

        }

        export class Memory extends jspb.Message { 
            getMemory(): number;
            setMemory(value: number): Memory;

            hasOptions(): boolean;
            clearOptions(): void;
            getOptions(): OCI.ComputeShape.Memory.Options | undefined;
            setOptions(value?: OCI.ComputeShape.Memory.Options): Memory;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Memory.AsObject;
            static toObject(includeInstance: boolean, msg: Memory): Memory.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Memory, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Memory;
            static deserializeBinaryFromReader(message: Memory, reader: jspb.BinaryReader): Memory;
        }

        export namespace Memory {
            export type AsObject = {
                memory: number,
                options?: OCI.ComputeShape.Memory.Options.AsObject,
            }


            export class Options extends jspb.Message { 
                getDefaultPerOcpuGb(): number;
                setDefaultPerOcpuGb(value: number): Options;
                getMinSizeGb(): number;
                setMinSizeGb(value: number): Options;
                getMinPerOcpuGb(): number;
                setMinPerOcpuGb(value: number): Options;
                getMaxSizeGb(): number;
                setMaxSizeGb(value: number): Options;
                getMaxPerOcpuGb(): number;
                setMaxPerOcpuGb(value: number): Options;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Options.AsObject;
                static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Options, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Options;
                static deserializeBinaryFromReader(message: Options, reader: jspb.BinaryReader): Options;
            }

            export namespace Options {
                export type AsObject = {
                    defaultPerOcpuGb: number,
                    minSizeGb: number,
                    minPerOcpuGb: number,
                    maxSizeGb: number,
                    maxPerOcpuGb: number,
                }
            }

        }

        export class Gpu extends jspb.Message { 
            getCount(): number;
            setCount(value: number): Gpu;
            getDescription(): string;
            setDescription(value: string): Gpu;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Gpu.AsObject;
            static toObject(includeInstance: boolean, msg: Gpu): Gpu.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Gpu, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Gpu;
            static deserializeBinaryFromReader(message: Gpu, reader: jspb.BinaryReader): Gpu;
        }

        export namespace Gpu {
            export type AsObject = {
                count: number,
                description: string,
            }
        }

    }

    export class ListComputeShapesAction extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ListComputeShapesAction.AsObject;
        static toObject(includeInstance: boolean, msg: ListComputeShapesAction): ListComputeShapesAction.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ListComputeShapesAction, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ListComputeShapesAction;
        static deserializeBinaryFromReader(message: ListComputeShapesAction, reader: jspb.BinaryReader): ListComputeShapesAction;
    }

    export namespace ListComputeShapesAction {
        export type AsObject = {
        }


        export class Result extends jspb.Message { 
            clearComputeShapesList(): void;
            getComputeShapesList(): Array<OCI.ComputeShape>;
            setComputeShapesList(value: Array<OCI.ComputeShape>): Result;
            addComputeShapes(value?: OCI.ComputeShape, index?: number): OCI.ComputeShape;

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
                computeShapesList: Array<OCI.ComputeShape.AsObject>,
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
            getNodePoolsList(): Array<OCI.ListNodePoolsAction.Result.NodePool>;
            setNodePoolsList(value: Array<OCI.ListNodePoolsAction.Result.NodePool>): Result;
            addNodePools(value?: OCI.ListNodePoolsAction.Result.NodePool, index?: number): OCI.ListNodePoolsAction.Result.NodePool;

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
                nodePoolsList: Array<OCI.ListNodePoolsAction.Result.NodePool.AsObject>,
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
