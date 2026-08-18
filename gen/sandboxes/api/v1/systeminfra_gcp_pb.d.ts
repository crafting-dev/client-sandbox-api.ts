// package: sandboxes.api.v1
// file: sandboxes/api/v1/systeminfra_gcp.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GCP extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GCP.AsObject;
    static toObject(includeInstance: boolean, msg: GCP): GCP.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GCP, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GCP;
    static deserializeBinaryFromReader(message: GCP, reader: jspb.BinaryReader): GCP;
}

export namespace GCP {
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

    export class MachineType extends jspb.Message { 
        getName(): string;
        setName(value: string): MachineType;
        getCpus(): number;
        setCpus(value: number): MachineType;
        getMemory(): number;
        setMemory(value: number): MachineType;
        getArchitecture(): string;
        setArchitecture(value: string): MachineType;
        clearAcceleratorsList(): void;
        getAcceleratorsList(): Array<GCP.MachineType.Accelerator>;
        setAcceleratorsList(value: Array<GCP.MachineType.Accelerator>): MachineType;
        addAccelerators(value?: GCP.MachineType.Accelerator, index?: number): GCP.MachineType.Accelerator;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MachineType.AsObject;
        static toObject(includeInstance: boolean, msg: MachineType): MachineType.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MachineType, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MachineType;
        static deserializeBinaryFromReader(message: MachineType, reader: jspb.BinaryReader): MachineType;
    }

    export namespace MachineType {
        export type AsObject = {
            name: string,
            cpus: number,
            memory: number,
            architecture: string,
            acceleratorsList: Array<GCP.MachineType.Accelerator.AsObject>,
        }


        export class Accelerator extends jspb.Message { 
            getCount(): number;
            setCount(value: number): Accelerator;
            getType(): string;
            setType(value: string): Accelerator;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Accelerator.AsObject;
            static toObject(includeInstance: boolean, msg: Accelerator): Accelerator.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Accelerator, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Accelerator;
            static deserializeBinaryFromReader(message: Accelerator, reader: jspb.BinaryReader): Accelerator;
        }

        export namespace Accelerator {
            export type AsObject = {
                count: number,
                type: string,
            }
        }

    }

    export class DiskType extends jspb.Message { 
        getName(): string;
        setName(value: string): DiskType;
        getDescription(): string;
        setDescription(value: string): DiskType;
        getDefaultSizeGb(): number;
        setDefaultSizeGb(value: number): DiskType;
        getValidSize(): string;
        setValidSize(value: string): DiskType;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DiskType.AsObject;
        static toObject(includeInstance: boolean, msg: DiskType): DiskType.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DiskType, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DiskType;
        static deserializeBinaryFromReader(message: DiskType, reader: jspb.BinaryReader): DiskType;
    }

    export namespace DiskType {
        export type AsObject = {
            name: string,
            description: string,
            defaultSizeGb: number,
            validSize: string,
        }
    }

    export class AcceleratorType extends jspb.Message { 
        getName(): string;
        setName(value: string): AcceleratorType;
        getDescription(): string;
        setDescription(value: string): AcceleratorType;
        getMaxPerInstance(): number;
        setMaxPerInstance(value: number): AcceleratorType;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AcceleratorType.AsObject;
        static toObject(includeInstance: boolean, msg: AcceleratorType): AcceleratorType.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AcceleratorType, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AcceleratorType;
        static deserializeBinaryFromReader(message: AcceleratorType, reader: jspb.BinaryReader): AcceleratorType;
    }

    export namespace AcceleratorType {
        export type AsObject = {
            name: string,
            description: string,
            maxPerInstance: number,
        }
    }

    export class ListMachineTypesAction extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ListMachineTypesAction.AsObject;
        static toObject(includeInstance: boolean, msg: ListMachineTypesAction): ListMachineTypesAction.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ListMachineTypesAction, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ListMachineTypesAction;
        static deserializeBinaryFromReader(message: ListMachineTypesAction, reader: jspb.BinaryReader): ListMachineTypesAction;
    }

    export namespace ListMachineTypesAction {
        export type AsObject = {
        }


        export class Result extends jspb.Message { 
            clearMachineTypesList(): void;
            getMachineTypesList(): Array<GCP.MachineType>;
            setMachineTypesList(value: Array<GCP.MachineType>): Result;
            addMachineTypes(value?: GCP.MachineType, index?: number): GCP.MachineType;

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
                machineTypesList: Array<GCP.MachineType.AsObject>,
            }
        }

    }

    export class ListDiskTypesAction extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ListDiskTypesAction.AsObject;
        static toObject(includeInstance: boolean, msg: ListDiskTypesAction): ListDiskTypesAction.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ListDiskTypesAction, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ListDiskTypesAction;
        static deserializeBinaryFromReader(message: ListDiskTypesAction, reader: jspb.BinaryReader): ListDiskTypesAction;
    }

    export namespace ListDiskTypesAction {
        export type AsObject = {
        }


        export class Result extends jspb.Message { 
            clearDiskTypesList(): void;
            getDiskTypesList(): Array<GCP.DiskType>;
            setDiskTypesList(value: Array<GCP.DiskType>): Result;
            addDiskTypes(value?: GCP.DiskType, index?: number): GCP.DiskType;

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
                diskTypesList: Array<GCP.DiskType.AsObject>,
            }
        }

    }

    export class ListAcceleratorTypesAction extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ListAcceleratorTypesAction.AsObject;
        static toObject(includeInstance: boolean, msg: ListAcceleratorTypesAction): ListAcceleratorTypesAction.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ListAcceleratorTypesAction, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ListAcceleratorTypesAction;
        static deserializeBinaryFromReader(message: ListAcceleratorTypesAction, reader: jspb.BinaryReader): ListAcceleratorTypesAction;
    }

    export namespace ListAcceleratorTypesAction {
        export type AsObject = {
        }


        export class Result extends jspb.Message { 
            clearAcceleratorTypesList(): void;
            getAcceleratorTypesList(): Array<GCP.AcceleratorType>;
            setAcceleratorTypesList(value: Array<GCP.AcceleratorType>): Result;
            addAcceleratorTypes(value?: GCP.AcceleratorType, index?: number): GCP.AcceleratorType;

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
                acceleratorTypesList: Array<GCP.AcceleratorType.AsObject>,
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
            getNodePoolsList(): Array<GCP.ListNodePoolsAction.Result.NodePool>;
            setNodePoolsList(value: Array<GCP.ListNodePoolsAction.Result.NodePool>): Result;
            addNodePools(value?: GCP.ListNodePoolsAction.Result.NodePool, index?: number): GCP.ListNodePoolsAction.Result.NodePool;

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
                nodePoolsList: Array<GCP.ListNodePoolsAction.Result.NodePool.AsObject>,
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
