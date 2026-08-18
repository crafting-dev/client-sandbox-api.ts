// package: sandboxes.api.v1
// file: sandboxes/api/v1/resource_nodepool.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as sandboxes_api_v1_common_pb from "../../../sandboxes/api/v1/common_pb";

export class K8sNodePool extends jspb.Message { 

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): K8sNodePool.Config | undefined;
    setConfig(value?: K8sNodePool.Config): K8sNodePool;
    getRegion(): string;
    setRegion(value: string): K8sNodePool;
    getUnmanaged(): boolean;
    setUnmanaged(value: boolean): K8sNodePool;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): K8sNodePool.AsObject;
    static toObject(includeInstance: boolean, msg: K8sNodePool): K8sNodePool.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: K8sNodePool, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): K8sNodePool;
    static deserializeBinaryFromReader(message: K8sNodePool, reader: jspb.BinaryReader): K8sNodePool;
}

export namespace K8sNodePool {
    export type AsObject = {
        config?: K8sNodePool.Config.AsObject,
        region: string,
        unmanaged: boolean,
    }


    export class Config extends jspb.Message { 
        clearSelectorNamesList(): void;
        getSelectorNamesList(): Array<string>;
        setSelectorNamesList(value: Array<string>): Config;
        addSelectorNames(value: string, index?: number): string;
        clearWorkloadKindsList(): void;
        getWorkloadKindsList(): Array<string>;
        setWorkloadKindsList(value: Array<string>): Config;
        addWorkloadKinds(value: string, index?: number): string;

        getLabelsMap(): jspb.Map<string, string>;
        clearLabelsMap(): void;
        clearTaintsList(): void;
        getTaintsList(): Array<string>;
        setTaintsList(value: Array<string>): Config;
        addTaints(value: string, index?: number): string;
        getDiskSize(): number;
        setDiskSize(value: number): Config;

        hasSwap(): boolean;
        clearSwap(): void;
        getSwap(): K8sNodePool.Swap | undefined;
        setSwap(value?: K8sNodePool.Swap): Config;

        hasProvider(): boolean;
        clearProvider(): void;
        getProvider(): K8sNodePool.Provider | undefined;
        setProvider(value?: K8sNodePool.Provider): Config;

        hasScale(): boolean;
        clearScale(): void;
        getScale(): K8sNodePool.Scale | undefined;
        setScale(value?: K8sNodePool.Scale): Config;

        hasGpu(): boolean;
        clearGpu(): void;
        getGpu(): K8sNodePool.GPU | undefined;
        setGpu(value?: K8sNodePool.GPU): Config;
        getMaxWorkloadsPerNode(): number;
        setMaxWorkloadsPerNode(value: number): Config;
        getMinMemoryReserveMb(): number;
        setMinMemoryReserveMb(value: number): Config;
        getNestedVirtualization(): boolean;
        setNestedVirtualization(value: boolean): Config;

        hasStorage(): boolean;
        clearStorage(): void;
        getStorage(): K8sNodePool.Storage | undefined;
        setStorage(value?: K8sNodePool.Storage): Config;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Config.AsObject;
        static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Config;
        static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
    }

    export namespace Config {
        export type AsObject = {
            selectorNamesList: Array<string>,
            workloadKindsList: Array<string>,

            labelsMap: Array<[string, string]>,
            taintsList: Array<string>,
            diskSize: number,
            swap?: K8sNodePool.Swap.AsObject,
            provider?: K8sNodePool.Provider.AsObject,
            scale?: K8sNodePool.Scale.AsObject,
            gpu?: K8sNodePool.GPU.AsObject,
            maxWorkloadsPerNode: number,
            minMemoryReserveMb: number,
            nestedVirtualization: boolean,
            storage?: K8sNodePool.Storage.AsObject,
        }
    }

    export class GPU extends jspb.Message { 

        hasNvidia(): boolean;
        clearNvidia(): void;
        getNvidia(): K8sNodePool.GPU.Nvidia | undefined;
        setNvidia(value?: K8sNodePool.GPU.Nvidia): GPU;

        getProviderCase(): GPU.ProviderCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GPU.AsObject;
        static toObject(includeInstance: boolean, msg: GPU): GPU.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GPU, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GPU;
        static deserializeBinaryFromReader(message: GPU, reader: jspb.BinaryReader): GPU;
    }

    export namespace GPU {
        export type AsObject = {
            nvidia?: K8sNodePool.GPU.Nvidia.AsObject,
        }


        export class Nvidia extends jspb.Message { 

            hasTimeSlicing(): boolean;
            clearTimeSlicing(): void;
            getTimeSlicing(): K8sNodePool.GPU.Nvidia.TimeSlicing | undefined;
            setTimeSlicing(value?: K8sNodePool.GPU.Nvidia.TimeSlicing): Nvidia;

            getSharingCase(): Nvidia.SharingCase;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Nvidia.AsObject;
            static toObject(includeInstance: boolean, msg: Nvidia): Nvidia.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Nvidia, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Nvidia;
            static deserializeBinaryFromReader(message: Nvidia, reader: jspb.BinaryReader): Nvidia;
        }

        export namespace Nvidia {
            export type AsObject = {
                timeSlicing?: K8sNodePool.GPU.Nvidia.TimeSlicing.AsObject,
            }


            export class TimeSlicing extends jspb.Message { 
                getReplicas(): number;
                setReplicas(value: number): TimeSlicing;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): TimeSlicing.AsObject;
                static toObject(includeInstance: boolean, msg: TimeSlicing): TimeSlicing.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: TimeSlicing, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): TimeSlicing;
                static deserializeBinaryFromReader(message: TimeSlicing, reader: jspb.BinaryReader): TimeSlicing;
            }

            export namespace TimeSlicing {
                export type AsObject = {
                    replicas: number,
                }
            }


            export enum SharingCase {
                SHARING_NOT_SET = 0,
                TIME_SLICING = 1,
            }

        }


        export enum ProviderCase {
            PROVIDER_NOT_SET = 0,
            NVIDIA = 1,
        }

    }

    export class Swap extends jspb.Message { 
        getFileSize(): number;
        setFileSize(value: number): Swap;
        clearDevicesList(): void;
        getDevicesList(): Array<string>;
        setDevicesList(value: Array<string>): Swap;
        addDevices(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Swap.AsObject;
        static toObject(includeInstance: boolean, msg: Swap): Swap.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Swap, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Swap;
        static deserializeBinaryFromReader(message: Swap, reader: jspb.BinaryReader): Swap;
    }

    export namespace Swap {
        export type AsObject = {
            fileSize: number,
            devicesList: Array<string>,
        }
    }

    export class Storage extends jspb.Message { 
        clearServersList(): void;
        getServersList(): Array<K8sNodePool.Storage.Server>;
        setServersList(value: Array<K8sNodePool.Storage.Server>): Storage;
        addServers(value?: K8sNodePool.Storage.Server, index?: number): K8sNodePool.Storage.Server;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Storage.AsObject;
        static toObject(includeInstance: boolean, msg: Storage): Storage.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Storage, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Storage;
        static deserializeBinaryFromReader(message: Storage, reader: jspb.BinaryReader): Storage;
    }

    export namespace Storage {
        export type AsObject = {
            serversList: Array<K8sNodePool.Storage.Server.AsObject>,
        }


        export class Server extends jspb.Message { 
            getName(): string;
            setName(value: string): Server;
            clearMountOptionsList(): void;
            getMountOptionsList(): Array<string>;
            setMountOptionsList(value: Array<string>): Server;
            addMountOptions(value: string, index?: number): string;

            hasUri(): boolean;
            clearUri(): void;
            getUri(): string;
            setUri(value: string): Server;

            getSourceCase(): Server.SourceCase;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Server.AsObject;
            static toObject(includeInstance: boolean, msg: Server): Server.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Server, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Server;
            static deserializeBinaryFromReader(message: Server, reader: jspb.BinaryReader): Server;
        }

        export namespace Server {
            export type AsObject = {
                name: string,
                mountOptionsList: Array<string>,
                uri: string,
            }

            export enum SourceCase {
                SOURCE_NOT_SET = 0,
                URI = 3,
            }

        }

    }

    export class Provider extends jspb.Message { 

        hasGke(): boolean;
        clearGke(): void;
        getGke(): K8sNodePool.GKE | undefined;
        setGke(value?: K8sNodePool.GKE): Provider;

        hasEks(): boolean;
        clearEks(): void;
        getEks(): K8sNodePool.EKS | undefined;
        setEks(value?: K8sNodePool.EKS): Provider;

        hasAks(): boolean;
        clearAks(): void;
        getAks(): K8sNodePool.AKS | undefined;
        setAks(value?: K8sNodePool.AKS): Provider;

        hasOke(): boolean;
        clearOke(): void;
        getOke(): K8sNodePool.OKE | undefined;
        setOke(value?: K8sNodePool.OKE): Provider;

        getProviderCase(): Provider.ProviderCase;

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
            gke?: K8sNodePool.GKE.AsObject,
            eks?: K8sNodePool.EKS.AsObject,
            aks?: K8sNodePool.AKS.AsObject,
            oke?: K8sNodePool.OKE.AsObject,
        }

        export enum ProviderCase {
            PROVIDER_NOT_SET = 0,
            GKE = 1,
            EKS = 2,
            AKS = 3,
            OKE = 4,
        }

    }

    export class GKE extends jspb.Message { 
        getServiceAccount(): string;
        setServiceAccount(value: string): GKE;
        getMachineType(): string;
        setMachineType(value: string): GKE;
        getDiskType(): string;
        setDiskType(value: string): GKE;
        getNestedVirtualization(): boolean;
        setNestedVirtualization(value: boolean): GKE;
        getMinCpuPlatform(): string;
        setMinCpuPlatform(value: string): GKE;
        clearAcceleratorsList(): void;
        getAcceleratorsList(): Array<K8sNodePool.GKE.Accelerator>;
        setAcceleratorsList(value: Array<K8sNodePool.GKE.Accelerator>): GKE;
        addAccelerators(value?: K8sNodePool.GKE.Accelerator, index?: number): K8sNodePool.GKE.Accelerator;
        getEnableConfidentialStorage(): boolean;
        setEnableConfidentialStorage(value: boolean): GKE;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GKE.AsObject;
        static toObject(includeInstance: boolean, msg: GKE): GKE.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GKE, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GKE;
        static deserializeBinaryFromReader(message: GKE, reader: jspb.BinaryReader): GKE;
    }

    export namespace GKE {
        export type AsObject = {
            serviceAccount: string,
            machineType: string,
            diskType: string,
            nestedVirtualization: boolean,
            minCpuPlatform: string,
            acceleratorsList: Array<K8sNodePool.GKE.Accelerator.AsObject>,
            enableConfidentialStorage: boolean,
        }


        export class Accelerator extends jspb.Message { 
            getType(): string;
            setType(value: string): Accelerator;
            getCount(): number;
            setCount(value: number): Accelerator;
            getGpuDriverVersion(): string;
            setGpuDriverVersion(value: string): Accelerator;

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
                type: string,
                count: number,
                gpuDriverVersion: string,
            }
        }

    }

    export class EKS extends jspb.Message { 
        clearInstanceTypesList(): void;
        getInstanceTypesList(): Array<string>;
        setInstanceTypesList(value: Array<string>): EKS;
        addInstanceTypes(value: string, index?: number): string;
        getAmiType(): string;
        setAmiType(value: string): EKS;
        getImageId(): string;
        setImageId(value: string): EKS;

        getTagsMap(): jspb.Map<string, string>;
        clearTagsMap(): void;

        hasSubnets(): boolean;
        clearSubnets(): void;
        getSubnets(): K8sNodePool.EKS.SubnetSelector | undefined;
        setSubnets(value?: K8sNodePool.EKS.SubnetSelector): EKS;
        clearLocalAttachedVolumesList(): void;
        getLocalAttachedVolumesList(): Array<K8sNodePool.EKS.LocalAttachedVolume>;
        setLocalAttachedVolumesList(value: Array<K8sNodePool.EKS.LocalAttachedVolume>): EKS;
        addLocalAttachedVolumes(value?: K8sNodePool.EKS.LocalAttachedVolume, index?: number): K8sNodePool.EKS.LocalAttachedVolume;
        getCapacityType(): K8sNodePool.EKS.CapacityType;
        setCapacityType(value: K8sNodePool.EKS.CapacityType): EKS;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): EKS.AsObject;
        static toObject(includeInstance: boolean, msg: EKS): EKS.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: EKS, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): EKS;
        static deserializeBinaryFromReader(message: EKS, reader: jspb.BinaryReader): EKS;
    }

    export namespace EKS {
        export type AsObject = {
            instanceTypesList: Array<string>,
            amiType: string,
            imageId: string,

            tagsMap: Array<[string, string]>,
            subnets?: K8sNodePool.EKS.SubnetSelector.AsObject,
            localAttachedVolumesList: Array<K8sNodePool.EKS.LocalAttachedVolume.AsObject>,
            capacityType: K8sNodePool.EKS.CapacityType,
        }


        export class SubnetSelector extends jspb.Message { 
            clearIndicesList(): void;
            getIndicesList(): Array<number>;
            setIndicesList(value: Array<number>): SubnetSelector;
            addIndices(value: number, index?: number): number;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): SubnetSelector.AsObject;
            static toObject(includeInstance: boolean, msg: SubnetSelector): SubnetSelector.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: SubnetSelector, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): SubnetSelector;
            static deserializeBinaryFromReader(message: SubnetSelector, reader: jspb.BinaryReader): SubnetSelector;
        }

        export namespace SubnetSelector {
            export type AsObject = {
                indicesList: Array<number>,
            }
        }

        export class LocalAttachedVolume extends jspb.Message { 
            getDevice(): string;
            setDevice(value: string): LocalAttachedVolume;
            getFilesystem(): string;
            setFilesystem(value: string): LocalAttachedVolume;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): LocalAttachedVolume.AsObject;
            static toObject(includeInstance: boolean, msg: LocalAttachedVolume): LocalAttachedVolume.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: LocalAttachedVolume, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): LocalAttachedVolume;
            static deserializeBinaryFromReader(message: LocalAttachedVolume, reader: jspb.BinaryReader): LocalAttachedVolume;
        }

        export namespace LocalAttachedVolume {
            export type AsObject = {
                device: string,
                filesystem: string,
            }
        }


        export enum CapacityType {
    DEFAULT = 0,
    SPOT = 1,
        }

    }

    export class AKS extends jspb.Message { 
        getVmSize(): string;
        setVmSize(value: string): AKS;
        getEnableUltraSsd(): boolean;
        setEnableUltraSsd(value: boolean): AKS;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AKS.AsObject;
        static toObject(includeInstance: boolean, msg: AKS): AKS.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AKS, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AKS;
        static deserializeBinaryFromReader(message: AKS, reader: jspb.BinaryReader): AKS;
    }

    export namespace AKS {
        export type AsObject = {
            vmSize: string,
            enableUltraSsd: boolean,
        }
    }

    export class OKE extends jspb.Message { 
        getNodeShape(): string;
        setNodeShape(value: string): OKE;

        hasNodeShapeConfig(): boolean;
        clearNodeShapeConfig(): void;
        getNodeShapeConfig(): K8sNodePool.OKE.NodeShapeConfig | undefined;
        setNodeShapeConfig(value?: K8sNodePool.OKE.NodeShapeConfig): OKE;
        getImageId(): string;
        setImageId(value: string): OKE;
        getCapacityType(): K8sNodePool.OKE.CapacityType;
        setCapacityType(value: K8sNodePool.OKE.CapacityType): OKE;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): OKE.AsObject;
        static toObject(includeInstance: boolean, msg: OKE): OKE.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: OKE, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): OKE;
        static deserializeBinaryFromReader(message: OKE, reader: jspb.BinaryReader): OKE;
    }

    export namespace OKE {
        export type AsObject = {
            nodeShape: string,
            nodeShapeConfig?: K8sNodePool.OKE.NodeShapeConfig.AsObject,
            imageId: string,
            capacityType: K8sNodePool.OKE.CapacityType,
        }


        export class NodeShapeConfig extends jspb.Message { 
            getCpus(): number;
            setCpus(value: number): NodeShapeConfig;
            getMemorySizeGb(): number;
            setMemorySizeGb(value: number): NodeShapeConfig;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): NodeShapeConfig.AsObject;
            static toObject(includeInstance: boolean, msg: NodeShapeConfig): NodeShapeConfig.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: NodeShapeConfig, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): NodeShapeConfig;
            static deserializeBinaryFromReader(message: NodeShapeConfig, reader: jspb.BinaryReader): NodeShapeConfig;
        }

        export namespace NodeShapeConfig {
            export type AsObject = {
                cpus: number,
                memorySizeGb: number,
            }
        }


        export enum CapacityType {
    DEFAULT = 0,
    PREEMPTIBLE = 1,
        }

    }

    export class Scale extends jspb.Message { 
        getEnabled(): boolean;
        setEnabled(value: boolean): Scale;
        getNodeCount(): number;
        setNodeCount(value: number): Scale;
        clearRulesList(): void;
        getRulesList(): Array<K8sNodePool.Scale.Rule>;
        setRulesList(value: Array<K8sNodePool.Scale.Rule>): Scale;
        addRules(value?: K8sNodePool.Scale.Rule, index?: number): K8sNodePool.Scale.Rule;
        getMaxCount(): number;
        setMaxCount(value: number): Scale;
        getMinCount(): number;
        setMinCount(value: number): Scale;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Scale.AsObject;
        static toObject(includeInstance: boolean, msg: Scale): Scale.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Scale, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Scale;
        static deserializeBinaryFromReader(message: Scale, reader: jspb.BinaryReader): Scale;
    }

    export namespace Scale {
        export type AsObject = {
            enabled: boolean,
            nodeCount: number,
            rulesList: Array<K8sNodePool.Scale.Rule.AsObject>,
            maxCount: number,
            minCount: number,
        }


        export class Condition extends jspb.Message { 

            hasWeeklyTimeWindow(): boolean;
            clearWeeklyTimeWindow(): void;
            getWeeklyTimeWindow(): sandboxes_api_v1_common_pb.WeeklyTimeWindow | undefined;
            setWeeklyTimeWindow(value?: sandboxes_api_v1_common_pb.WeeklyTimeWindow): Condition;

            hasCombination(): boolean;
            clearCombination(): void;
            getCombination(): K8sNodePool.Scale.Condition.Combination | undefined;
            setCombination(value?: K8sNodePool.Scale.Condition.Combination): Condition;

            getConditionCase(): Condition.ConditionCase;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Condition.AsObject;
            static toObject(includeInstance: boolean, msg: Condition): Condition.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Condition, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Condition;
            static deserializeBinaryFromReader(message: Condition, reader: jspb.BinaryReader): Condition;
        }

        export namespace Condition {
            export type AsObject = {
                weeklyTimeWindow?: sandboxes_api_v1_common_pb.WeeklyTimeWindow.AsObject,
                combination?: K8sNodePool.Scale.Condition.Combination.AsObject,
            }


            export class Combination extends jspb.Message { 
                getOp(): K8sNodePool.Scale.Condition.Combination.Op;
                setOp(value: K8sNodePool.Scale.Condition.Combination.Op): Combination;
                clearConditionsList(): void;
                getConditionsList(): Array<K8sNodePool.Scale.Condition>;
                setConditionsList(value: Array<K8sNodePool.Scale.Condition>): Combination;
                addConditions(value?: K8sNodePool.Scale.Condition, index?: number): K8sNodePool.Scale.Condition;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Combination.AsObject;
                static toObject(includeInstance: boolean, msg: Combination): Combination.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Combination, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Combination;
                static deserializeBinaryFromReader(message: Combination, reader: jspb.BinaryReader): Combination;
            }

            export namespace Combination {
                export type AsObject = {
                    op: K8sNodePool.Scale.Condition.Combination.Op,
                    conditionsList: Array<K8sNodePool.Scale.Condition.AsObject>,
                }

                export enum Op {
    AND = 0,
    OR = 1,
    NOT = 2,
                }

            }


            export enum ConditionCase {
                CONDITION_NOT_SET = 0,
                WEEKLY_TIME_WINDOW = 1,
                COMBINATION = 2,
            }

        }

        export class Policy extends jspb.Message { 
            getMinNodes(): number;
            setMinNodes(value: number): Policy;

            hasAvailableWorkloads(): boolean;
            clearAvailableWorkloads(): void;
            getAvailableWorkloads(): K8sNodePool.Scale.Policy.AvailableWorkloads | undefined;
            setAvailableWorkloads(value?: K8sNodePool.Scale.Policy.AvailableWorkloads): Policy;
            getDisableScaleIn(): boolean;
            setDisableScaleIn(value: boolean): Policy;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Policy.AsObject;
            static toObject(includeInstance: boolean, msg: Policy): Policy.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Policy, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Policy;
            static deserializeBinaryFromReader(message: Policy, reader: jspb.BinaryReader): Policy;
        }

        export namespace Policy {
            export type AsObject = {
                minNodes: number,
                availableWorkloads?: K8sNodePool.Scale.Policy.AvailableWorkloads.AsObject,
                disableScaleIn: boolean,
            }


            export class AvailableWorkloads extends jspb.Message { 
                getMin(): number;
                setMin(value: number): AvailableWorkloads;
                getMax(): number;
                setMax(value: number): AvailableWorkloads;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): AvailableWorkloads.AsObject;
                static toObject(includeInstance: boolean, msg: AvailableWorkloads): AvailableWorkloads.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: AvailableWorkloads, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): AvailableWorkloads;
                static deserializeBinaryFromReader(message: AvailableWorkloads, reader: jspb.BinaryReader): AvailableWorkloads;
            }

            export namespace AvailableWorkloads {
                export type AsObject = {
                    min: number,
                    max: number,
                }
            }

        }

        export class Rule extends jspb.Message { 

            hasCondition(): boolean;
            clearCondition(): void;
            getCondition(): K8sNodePool.Scale.Condition | undefined;
            setCondition(value?: K8sNodePool.Scale.Condition): Rule;

            hasPolicy(): boolean;
            clearPolicy(): void;
            getPolicy(): K8sNodePool.Scale.Policy | undefined;
            setPolicy(value?: K8sNodePool.Scale.Policy): Rule;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Rule.AsObject;
            static toObject(includeInstance: boolean, msg: Rule): Rule.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Rule, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Rule;
            static deserializeBinaryFromReader(message: Rule, reader: jspb.BinaryReader): Rule;
        }

        export namespace Rule {
            export type AsObject = {
                condition?: K8sNodePool.Scale.Condition.AsObject,
                policy?: K8sNodePool.Scale.Policy.AsObject,
            }
        }

    }

}

export class K8sNodePoolStatus extends jspb.Message { 
    getState(): K8sNodePoolStatus.State;
    setState(value: K8sNodePoolStatus.State): K8sNodePoolStatus;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): sandboxes_api_v1_common_pb.RuntimeStatus | undefined;
    setStatus(value?: sandboxes_api_v1_common_pb.RuntimeStatus): K8sNodePoolStatus;
    getDesiredCount(): number;
    setDesiredCount(value: number): K8sNodePoolStatus;
    getActualCount(): number;
    setActualCount(value: number): K8sNodePoolStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): K8sNodePoolStatus.AsObject;
    static toObject(includeInstance: boolean, msg: K8sNodePoolStatus): K8sNodePoolStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: K8sNodePoolStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): K8sNodePoolStatus;
    static deserializeBinaryFromReader(message: K8sNodePoolStatus, reader: jspb.BinaryReader): K8sNodePoolStatus;
}

export namespace K8sNodePoolStatus {
    export type AsObject = {
        state: K8sNodePoolStatus.State,
        status?: sandboxes_api_v1_common_pb.RuntimeStatus.AsObject,
        desiredCount: number,
        actualCount: number,
    }

    export enum State {
    UNKNOWN = 0,
    CREATING = 1,
    ACTIVE = 2,
    UPDATING = 3,
    ERROR = 4,
    }

}
