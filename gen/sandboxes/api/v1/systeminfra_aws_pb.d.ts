// package: sandboxes.api.v1
// file: sandboxes/api/v1/systeminfra_aws.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AWS extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AWS.AsObject;
    static toObject(includeInstance: boolean, msg: AWS): AWS.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AWS, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AWS;
    static deserializeBinaryFromReader(message: AWS, reader: jspb.BinaryReader): AWS;
}

export namespace AWS {
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

    export class InstanceType extends jspb.Message { 
        getName(): string;
        setName(value: string): InstanceType;
        getCpus(): number;
        setCpus(value: number): InstanceType;
        getMemory(): number;
        setMemory(value: number): InstanceType;
        clearArchitecturesList(): void;
        getArchitecturesList(): Array<string>;
        setArchitecturesList(value: Array<string>): InstanceType;
        addArchitectures(value: string, index?: number): string;
        clearGpusList(): void;
        getGpusList(): Array<AWS.InstanceType.Gpu>;
        setGpusList(value: Array<AWS.InstanceType.Gpu>): InstanceType;
        addGpus(value?: AWS.InstanceType.Gpu, index?: number): AWS.InstanceType.Gpu;

        hasLocalStorage(): boolean;
        clearLocalStorage(): void;
        getLocalStorage(): AWS.InstanceType.LocalStorage | undefined;
        setLocalStorage(value?: AWS.InstanceType.LocalStorage): InstanceType;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): InstanceType.AsObject;
        static toObject(includeInstance: boolean, msg: InstanceType): InstanceType.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: InstanceType, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): InstanceType;
        static deserializeBinaryFromReader(message: InstanceType, reader: jspb.BinaryReader): InstanceType;
    }

    export namespace InstanceType {
        export type AsObject = {
            name: string,
            cpus: number,
            memory: number,
            architecturesList: Array<string>,
            gpusList: Array<AWS.InstanceType.Gpu.AsObject>,
            localStorage?: AWS.InstanceType.LocalStorage.AsObject,
        }


        export class Gpu extends jspb.Message { 
            getCount(): number;
            setCount(value: number): Gpu;
            getManufacturer(): string;
            setManufacturer(value: string): Gpu;
            getName(): string;
            setName(value: string): Gpu;

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
                manufacturer: string,
                name: string,
            }
        }

        export class LocalStorage extends jspb.Message { 
            getTotalSizeGb(): number;
            setTotalSizeGb(value: number): LocalStorage;
            getNvmeAvailable(): boolean;
            setNvmeAvailable(value: boolean): LocalStorage;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): LocalStorage.AsObject;
            static toObject(includeInstance: boolean, msg: LocalStorage): LocalStorage.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: LocalStorage, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): LocalStorage;
            static deserializeBinaryFromReader(message: LocalStorage, reader: jspb.BinaryReader): LocalStorage;
        }

        export namespace LocalStorage {
            export type AsObject = {
                totalSizeGb: number,
                nvmeAvailable: boolean,
            }
        }

    }

    export class ListInstanceTypesAction extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ListInstanceTypesAction.AsObject;
        static toObject(includeInstance: boolean, msg: ListInstanceTypesAction): ListInstanceTypesAction.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ListInstanceTypesAction, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ListInstanceTypesAction;
        static deserializeBinaryFromReader(message: ListInstanceTypesAction, reader: jspb.BinaryReader): ListInstanceTypesAction;
    }

    export namespace ListInstanceTypesAction {
        export type AsObject = {
        }


        export class Result extends jspb.Message { 
            clearInstanceTypesList(): void;
            getInstanceTypesList(): Array<AWS.InstanceType>;
            setInstanceTypesList(value: Array<AWS.InstanceType>): Result;
            addInstanceTypes(value?: AWS.InstanceType, index?: number): AWS.InstanceType;

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
                instanceTypesList: Array<AWS.InstanceType.AsObject>,
            }
        }

    }

    export class ListAMITypesAction extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ListAMITypesAction.AsObject;
        static toObject(includeInstance: boolean, msg: ListAMITypesAction): ListAMITypesAction.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ListAMITypesAction, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ListAMITypesAction;
        static deserializeBinaryFromReader(message: ListAMITypesAction, reader: jspb.BinaryReader): ListAMITypesAction;
    }

    export namespace ListAMITypesAction {
        export type AsObject = {
        }


        export class Result extends jspb.Message { 
            clearAmiTypesList(): void;
            getAmiTypesList(): Array<string>;
            setAmiTypesList(value: Array<string>): Result;
            addAmiTypes(value: string, index?: number): string;

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
                amiTypesList: Array<string>,
            }
        }

    }

    export class ListAvailabilityZonesAction extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ListAvailabilityZonesAction.AsObject;
        static toObject(includeInstance: boolean, msg: ListAvailabilityZonesAction): ListAvailabilityZonesAction.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ListAvailabilityZonesAction, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ListAvailabilityZonesAction;
        static deserializeBinaryFromReader(message: ListAvailabilityZonesAction, reader: jspb.BinaryReader): ListAvailabilityZonesAction;
    }

    export namespace ListAvailabilityZonesAction {
        export type AsObject = {
        }


        export class Result extends jspb.Message { 
            clearAvailabilityZonesList(): void;
            getAvailabilityZonesList(): Array<AWS.ListAvailabilityZonesAction.Result.AvailabilityZone>;
            setAvailabilityZonesList(value: Array<AWS.ListAvailabilityZonesAction.Result.AvailabilityZone>): Result;
            addAvailabilityZones(value?: AWS.ListAvailabilityZonesAction.Result.AvailabilityZone, index?: number): AWS.ListAvailabilityZonesAction.Result.AvailabilityZone;

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
                availabilityZonesList: Array<AWS.ListAvailabilityZonesAction.Result.AvailabilityZone.AsObject>,
            }


            export class AvailabilityZone extends jspb.Message { 
                getName(): string;
                setName(value: string): AvailabilityZone;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): AvailabilityZone.AsObject;
                static toObject(includeInstance: boolean, msg: AvailabilityZone): AvailabilityZone.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: AvailabilityZone, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): AvailabilityZone;
                static deserializeBinaryFromReader(message: AvailabilityZone, reader: jspb.BinaryReader): AvailabilityZone;
            }

            export namespace AvailabilityZone {
                export type AsObject = {
                    name: string,
                }
            }

        }

    }

    export class DescribeImageAction extends jspb.Message { 

        hasAmiType(): boolean;
        clearAmiType(): void;
        getAmiType(): string;
        setAmiType(value: string): DescribeImageAction;

        hasImageId(): boolean;
        clearImageId(): void;
        getImageId(): string;
        setImageId(value: string): DescribeImageAction;

        getImageCase(): DescribeImageAction.ImageCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DescribeImageAction.AsObject;
        static toObject(includeInstance: boolean, msg: DescribeImageAction): DescribeImageAction.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DescribeImageAction, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DescribeImageAction;
        static deserializeBinaryFromReader(message: DescribeImageAction, reader: jspb.BinaryReader): DescribeImageAction;
    }

    export namespace DescribeImageAction {
        export type AsObject = {
            amiType: string,
            imageId: string,
        }


        export class Result extends jspb.Message { 
            getArchitecture(): string;
            setArchitecture(value: string): Result;
            getName(): string;
            setName(value: string): Result;
            getDescription(): string;
            setDescription(value: string): Result;

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
                architecture: string,
                name: string,
                description: string,
            }
        }


        export enum ImageCase {
            IMAGE_NOT_SET = 0,
            AMI_TYPE = 1,
            IMAGE_ID = 2,
        }

    }

    export class ListNodeGroupsAction extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ListNodeGroupsAction.AsObject;
        static toObject(includeInstance: boolean, msg: ListNodeGroupsAction): ListNodeGroupsAction.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ListNodeGroupsAction, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ListNodeGroupsAction;
        static deserializeBinaryFromReader(message: ListNodeGroupsAction, reader: jspb.BinaryReader): ListNodeGroupsAction;
    }

    export namespace ListNodeGroupsAction {
        export type AsObject = {
        }


        export class Result extends jspb.Message { 
            clearNodeGroupsList(): void;
            getNodeGroupsList(): Array<AWS.ListNodeGroupsAction.Result.NodeGroup>;
            setNodeGroupsList(value: Array<AWS.ListNodeGroupsAction.Result.NodeGroup>): Result;
            addNodeGroups(value?: AWS.ListNodeGroupsAction.Result.NodeGroup, index?: number): AWS.ListNodeGroupsAction.Result.NodeGroup;

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
                nodeGroupsList: Array<AWS.ListNodeGroupsAction.Result.NodeGroup.AsObject>,
            }


            export class NodeGroup extends jspb.Message { 
                getName(): string;
                setName(value: string): NodeGroup;
                getManaged(): boolean;
                setManaged(value: boolean): NodeGroup;

                getLabelsMap(): jspb.Map<string, string>;
                clearLabelsMap(): void;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): NodeGroup.AsObject;
                static toObject(includeInstance: boolean, msg: NodeGroup): NodeGroup.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: NodeGroup, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): NodeGroup;
                static deserializeBinaryFromReader(message: NodeGroup, reader: jspb.BinaryReader): NodeGroup;
            }

            export namespace NodeGroup {
                export type AsObject = {
                    name: string,
                    managed: boolean,

                    labelsMap: Array<[string, string]>,
                }
            }

        }

    }

}
