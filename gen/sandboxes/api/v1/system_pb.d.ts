// package: sandboxes.api.v1
// file: sandboxes/api/v1/system.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as sandboxes_api_v1_app_pb from "../../../sandboxes/api/v1/app_pb";
import * as sandboxes_api_v1_endpoint_pb from "../../../sandboxes/api/v1/endpoint_pb";

export class DependencyServiceDescriptor extends jspb.Message { 
    getServiceType(): string;
    setServiceType(value: string): DependencyServiceDescriptor;
    getDisplayName(): string;
    setDisplayName(value: string): DependencyServiceDescriptor;

    hasInstance(): boolean;
    clearInstance(): void;
    getInstance(): DependencyServiceDescriptor.Instance | undefined;
    setInstance(value?: DependencyServiceDescriptor.Instance): DependencyServiceDescriptor;
    clearPropertiesList(): void;
    getPropertiesList(): Array<DependencyServiceDescriptor.Property>;
    setPropertiesList(value: Array<DependencyServiceDescriptor.Property>): DependencyServiceDescriptor;
    addProperties(value?: DependencyServiceDescriptor.Property, index?: number): DependencyServiceDescriptor.Property;
    clearVersionsList(): void;
    getVersionsList(): Array<DependencyServiceDescriptor.Version>;
    setVersionsList(value: Array<DependencyServiceDescriptor.Version>): DependencyServiceDescriptor;
    addVersions(value?: DependencyServiceDescriptor.Version, index?: number): DependencyServiceDescriptor.Version;

    hasLifecycle(): boolean;
    clearLifecycle(): void;
    getLifecycle(): DependencyServiceDescriptor.Lifecycle | undefined;
    setLifecycle(value?: DependencyServiceDescriptor.Lifecycle): DependencyServiceDescriptor;

    hasImage(): boolean;
    clearImage(): void;
    getImage(): DependencyServiceDescriptor.Image | undefined;
    setImage(value?: DependencyServiceDescriptor.Image): DependencyServiceDescriptor;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DependencyServiceDescriptor.AsObject;
    static toObject(includeInstance: boolean, msg: DependencyServiceDescriptor): DependencyServiceDescriptor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DependencyServiceDescriptor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DependencyServiceDescriptor;
    static deserializeBinaryFromReader(message: DependencyServiceDescriptor, reader: jspb.BinaryReader): DependencyServiceDescriptor;
}

export namespace DependencyServiceDescriptor {
    export type AsObject = {
        serviceType: string,
        displayName: string,
        instance?: DependencyServiceDescriptor.Instance.AsObject,
        propertiesList: Array<DependencyServiceDescriptor.Property.AsObject>,
        versionsList: Array<DependencyServiceDescriptor.Version.AsObject>,
        lifecycle?: DependencyServiceDescriptor.Lifecycle.AsObject,
        image?: DependencyServiceDescriptor.Image.AsObject,
    }


    export class Image extends jspb.Message { 
        getBase(): string;
        setBase(value: string): Image;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Image.AsObject;
        static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Image;
        static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
    }

    export namespace Image {
        export type AsObject = {
            base: string,
        }
    }

    export class Instance extends jspb.Message { 
        clearPortsList(): void;
        getPortsList(): Array<sandboxes_api_v1_endpoint_pb.PortSpec>;
        setPortsList(value: Array<sandboxes_api_v1_endpoint_pb.PortSpec>): Instance;
        addPorts(value?: sandboxes_api_v1_endpoint_pb.PortSpec, index?: number): sandboxes_api_v1_endpoint_pb.PortSpec;

        hasProbes(): boolean;
        clearProbes(): void;
        getProbes(): sandboxes_api_v1_app_pb.ServiceProbes | undefined;
        setProbes(value?: sandboxes_api_v1_app_pb.ServiceProbes): Instance;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Instance.AsObject;
        static toObject(includeInstance: boolean, msg: Instance): Instance.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Instance, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Instance;
        static deserializeBinaryFromReader(message: Instance, reader: jspb.BinaryReader): Instance;
    }

    export namespace Instance {
        export type AsObject = {
            portsList: Array<sandboxes_api_v1_endpoint_pb.PortSpec.AsObject>,
            probes?: sandboxes_api_v1_app_pb.ServiceProbes.AsObject,
        }
    }

    export class Property extends jspb.Message { 
        getName(): string;
        setName(value: string): Property;
        getDescription(): string;
        setDescription(value: string): Property;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Property.AsObject;
        static toObject(includeInstance: boolean, msg: Property): Property.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Property, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Property;
        static deserializeBinaryFromReader(message: Property, reader: jspb.BinaryReader): Property;
    }

    export namespace Property {
        export type AsObject = {
            name: string,
            description: string,
        }
    }

    export class Version extends jspb.Message { 
        getVersion(): string;
        setVersion(value: string): Version;
        getDefault(): boolean;
        setDefault(value: boolean): Version;

        hasImage(): boolean;
        clearImage(): void;
        getImage(): DependencyServiceDescriptor.Image | undefined;
        setImage(value?: DependencyServiceDescriptor.Image): Version;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Version.AsObject;
        static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Version;
        static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
    }

    export namespace Version {
        export type AsObject = {
            version: string,
            pb_default: boolean,
            image?: DependencyServiceDescriptor.Image.AsObject,
        }
    }

    export class Lifecycle extends jspb.Message { 

        hasOnCreate(): boolean;
        clearOnCreate(): void;
        getOnCreate(): DependencyServiceDescriptor.Lifecycle.Handler | undefined;
        setOnCreate(value?: DependencyServiceDescriptor.Lifecycle.Handler): Lifecycle;

        hasOnSuspend(): boolean;
        clearOnSuspend(): void;
        getOnSuspend(): DependencyServiceDescriptor.Lifecycle.Handler | undefined;
        setOnSuspend(value?: DependencyServiceDescriptor.Lifecycle.Handler): Lifecycle;

        hasOnResume(): boolean;
        clearOnResume(): void;
        getOnResume(): DependencyServiceDescriptor.Lifecycle.Handler | undefined;
        setOnResume(value?: DependencyServiceDescriptor.Lifecycle.Handler): Lifecycle;

        hasOnDelete(): boolean;
        clearOnDelete(): void;
        getOnDelete(): DependencyServiceDescriptor.Lifecycle.Handler | undefined;
        setOnDelete(value?: DependencyServiceDescriptor.Lifecycle.Handler): Lifecycle;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Lifecycle.AsObject;
        static toObject(includeInstance: boolean, msg: Lifecycle): Lifecycle.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Lifecycle, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Lifecycle;
        static deserializeBinaryFromReader(message: Lifecycle, reader: jspb.BinaryReader): Lifecycle;
    }

    export namespace Lifecycle {
        export type AsObject = {
            onCreate?: DependencyServiceDescriptor.Lifecycle.Handler.AsObject,
            onSuspend?: DependencyServiceDescriptor.Lifecycle.Handler.AsObject,
            onResume?: DependencyServiceDescriptor.Lifecycle.Handler.AsObject,
            onDelete?: DependencyServiceDescriptor.Lifecycle.Handler.AsObject,
        }


        export class Handler extends jspb.Message { 
            getHook(): string;
            setHook(value: string): Handler;
            getMaxRetries(): number;
            setMaxRetries(value: number): Handler;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Handler.AsObject;
            static toObject(includeInstance: boolean, msg: Handler): Handler.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Handler, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Handler;
            static deserializeBinaryFromReader(message: Handler, reader: jspb.BinaryReader): Handler;
        }

        export namespace Handler {
            export type AsObject = {
                hook: string,
                maxRetries: number,
            }
        }

    }

}

export class SystemVersion extends jspb.Message { 
    getVersion(): string;
    setVersion(value: string): SystemVersion;
    getCommit(): string;
    setCommit(value: string): SystemVersion;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDate(value?: google_protobuf_timestamp_pb.Timestamp): SystemVersion;
    getEdition(): string;
    setEdition(value: string): SystemVersion;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemVersion.AsObject;
    static toObject(includeInstance: boolean, msg: SystemVersion): SystemVersion.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemVersion, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemVersion;
    static deserializeBinaryFromReader(message: SystemVersion, reader: jspb.BinaryReader): SystemVersion;
}

export namespace SystemVersion {
    export type AsObject = {
        version: string,
        commit: string,
        date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        edition: string,
    }
}

export class SystemInfo extends jspb.Message { 
    getTimeZone(): string;
    setTimeZone(value: string): SystemInfo;
    getSysBaseUrl(): string;
    setSysBaseUrl(value: string): SystemInfo;
    getSysDnsSuffix(): string;
    setSysDnsSuffix(value: string): SystemInfo;
    getAppDnsSuffix(): string;
    setAppDnsSuffix(value: string): SystemInfo;
    clearPackagesList(): void;
    getPackagesList(): Array<ToolPackageInfo>;
    setPackagesList(value: Array<ToolPackageInfo>): SystemInfo;
    addPackages(value?: ToolPackageInfo, index?: number): ToolPackageInfo;
    clearDependencyServicesList(): void;
    getDependencyServicesList(): Array<DependencyServiceDescriptor>;
    setDependencyServicesList(value: Array<DependencyServiceDescriptor>): SystemInfo;
    addDependencyServices(value?: DependencyServiceDescriptor, index?: number): DependencyServiceDescriptor;
    getInternalEndpointDnsSuffix(): string;
    setInternalEndpointDnsSuffix(value: string): SystemInfo;

    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): SystemVersion | undefined;
    setVersion(value?: SystemVersion): SystemInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemInfo.AsObject;
    static toObject(includeInstance: boolean, msg: SystemInfo): SystemInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemInfo;
    static deserializeBinaryFromReader(message: SystemInfo, reader: jspb.BinaryReader): SystemInfo;
}

export namespace SystemInfo {
    export type AsObject = {
        timeZone: string,
        sysBaseUrl: string,
        sysDnsSuffix: string,
        appDnsSuffix: string,
        packagesList: Array<ToolPackageInfo.AsObject>,
        dependencyServicesList: Array<DependencyServiceDescriptor.AsObject>,
        internalEndpointDnsSuffix: string,
        version?: SystemVersion.AsObject,
    }
}

export class ToolPackageInfo extends jspb.Message { 
    getName(): string;
    setName(value: string): ToolPackageInfo;
    getDescription(): string;
    setDescription(value: string): ToolPackageInfo;
    getVersion(): string;
    setVersion(value: string): ToolPackageInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ToolPackageInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ToolPackageInfo): ToolPackageInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ToolPackageInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ToolPackageInfo;
    static deserializeBinaryFromReader(message: ToolPackageInfo, reader: jspb.BinaryReader): ToolPackageInfo;
}

export namespace ToolPackageInfo {
    export type AsObject = {
        name: string,
        description: string,
        version: string,
    }
}
