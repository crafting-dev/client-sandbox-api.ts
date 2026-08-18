// package: sandboxes.api.v1
// file: sandboxes/api/v1/app.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as sandboxes_api_v1_common_pb from "../../../sandboxes/api/v1/common_pb";
import * as sandboxes_api_v1_object_pb from "../../../sandboxes/api/v1/object_pb";
import * as sandboxes_api_v1_endpoint_pb from "../../../sandboxes/api/v1/endpoint_pb";
import * as sandboxes_api_v1_repo_pb from "../../../sandboxes/api/v1/repo_pb";
import * as sandboxes_api_v1_process_pb from "../../../sandboxes/api/v1/process_pb";

export class App extends jspb.Message { 

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): sandboxes_api_v1_object_pb.ObjectMeta | undefined;
    setMeta(value?: sandboxes_api_v1_object_pb.ObjectMeta): App;
    getOrgId(): string;
    setOrgId(value: string): App;

    hasDefinition(): boolean;
    clearDefinition(): void;
    getDefinition(): AppDefinition | undefined;
    setDefinition(value?: AppDefinition): App;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): App.AsObject;
    static toObject(includeInstance: boolean, msg: App): App.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: App, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): App;
    static deserializeBinaryFromReader(message: App, reader: jspb.BinaryReader): App;
}

export namespace App {
    export type AsObject = {
        meta?: sandboxes_api_v1_object_pb.ObjectMeta.AsObject,
        orgId: string,
        definition?: AppDefinition.AsObject,
    }
}

export class AppDefinition extends jspb.Message { 
    clearEnvList(): void;
    getEnvList(): Array<string>;
    setEnvList(value: Array<string>): AppDefinition;
    addEnv(value: string, index?: number): string;
    clearVolumesList(): void;
    getVolumesList(): Array<Volume>;
    setVolumesList(value: Array<Volume>): AppDefinition;
    addVolumes(value?: Volume, index?: number): Volume;
    clearEndpointsList(): void;
    getEndpointsList(): Array<sandboxes_api_v1_endpoint_pb.Endpoint>;
    setEndpointsList(value: Array<sandboxes_api_v1_endpoint_pb.Endpoint>): AppDefinition;
    addEndpoints(value?: sandboxes_api_v1_endpoint_pb.Endpoint, index?: number): sandboxes_api_v1_endpoint_pb.Endpoint;
    clearWorkspacesList(): void;
    getWorkspacesList(): Array<AppDefinition.Workspace>;
    setWorkspacesList(value: Array<AppDefinition.Workspace>): AppDefinition;
    addWorkspaces(value?: AppDefinition.Workspace, index?: number): AppDefinition.Workspace;
    clearDependenciesList(): void;
    getDependenciesList(): Array<AppDefinition.Dependency>;
    setDependenciesList(value: Array<AppDefinition.Dependency>): AppDefinition;
    addDependencies(value?: AppDefinition.Dependency, index?: number): AppDefinition.Dependency;
    clearContainersList(): void;
    getContainersList(): Array<AppDefinition.Container>;
    setContainersList(value: Array<AppDefinition.Container>): AppDefinition;
    addContainers(value?: AppDefinition.Container, index?: number): AppDefinition.Container;
    getOverview(): string;
    setOverview(value: string): AppDefinition;

    hasScheduler(): boolean;
    clearScheduler(): void;
    getScheduler(): Scheduler | undefined;
    setScheduler(value?: Scheduler): AppDefinition;
    clearResourcesList(): void;
    getResourcesList(): Array<AppDefinition.ResourceGroup>;
    setResourcesList(value: Array<AppDefinition.ResourceGroup>): AppDefinition;
    addResources(value?: AppDefinition.ResourceGroup, index?: number): AppDefinition.ResourceGroup;
    clearCustomizationsList(): void;
    getCustomizationsList(): Array<AppDefinition.Customization>;
    setCustomizationsList(value: Array<AppDefinition.Customization>): AppDefinition;
    addCustomizations(value?: AppDefinition.Customization, index?: number): AppDefinition.Customization;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppDefinition.AsObject;
    static toObject(includeInstance: boolean, msg: AppDefinition): AppDefinition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppDefinition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppDefinition;
    static deserializeBinaryFromReader(message: AppDefinition, reader: jspb.BinaryReader): AppDefinition;
}

export namespace AppDefinition {
    export type AsObject = {
        envList: Array<string>,
        volumesList: Array<Volume.AsObject>,
        endpointsList: Array<sandboxes_api_v1_endpoint_pb.Endpoint.AsObject>,
        workspacesList: Array<AppDefinition.Workspace.AsObject>,
        dependenciesList: Array<AppDefinition.Dependency.AsObject>,
        containersList: Array<AppDefinition.Container.AsObject>,
        overview: string,
        scheduler?: Scheduler.AsObject,
        resourcesList: Array<AppDefinition.ResourceGroup.AsObject>,
        customizationsList: Array<AppDefinition.Customization.AsObject>,
    }


    export class Workspace extends jspb.Message { 
        getName(): string;
        setName(value: string): Workspace;
        getDescription(): string;
        setDescription(value: string): Workspace;
        clearPortsList(): void;
        getPortsList(): Array<sandboxes_api_v1_endpoint_pb.PortSpec>;
        setPortsList(value: Array<sandboxes_api_v1_endpoint_pb.PortSpec>): Workspace;
        addPorts(value?: sandboxes_api_v1_endpoint_pb.PortSpec, index?: number): sandboxes_api_v1_endpoint_pb.PortSpec;
        clearCheckoutsList(): void;
        getCheckoutsList(): Array<Checkout>;
        setCheckoutsList(value: Array<Checkout>): Workspace;
        addCheckouts(value?: Checkout, index?: number): Checkout;
        clearPackagesList(): void;
        getPackagesList(): Array<ToolPackageSpec>;
        setPackagesList(value: Array<ToolPackageSpec>): Workspace;
        addPackages(value?: ToolPackageSpec, index?: number): ToolPackageSpec;
        clearPortForwardRulesList(): void;
        getPortForwardRulesList(): Array<PortForwardRule>;
        setPortForwardRulesList(value: Array<PortForwardRule>): Workspace;
        addPortForwardRules(value?: PortForwardRule, index?: number): PortForwardRule;
        getBaseSnapshot(): string;
        setBaseSnapshot(value: string): Workspace;
        getHomeSnapshot(): string;
        setHomeSnapshot(value: string): Workspace;

        hasProbes(): boolean;
        clearProbes(): void;
        getProbes(): ServiceProbes | undefined;
        setProbes(value?: ServiceProbes): Workspace;
        clearEnvList(): void;
        getEnvList(): Array<string>;
        setEnvList(value: Array<string>): Workspace;
        addEnv(value: string, index?: number): string;

        hasScheduleSpec(): boolean;
        clearScheduleSpec(): void;
        getScheduleSpec(): ScheduleSpec | undefined;
        setScheduleSpec(value?: ScheduleSpec): Workspace;
        clearHostnamesList(): void;
        getHostnamesList(): Array<string>;
        setHostnamesList(value: Array<string>): Workspace;
        addHostnames(value: string, index?: number): string;
        clearWaitForList(): void;
        getWaitForList(): Array<string>;
        setWaitForList(value: Array<string>): Workspace;
        addWaitFor(value: string, index?: number): string;

        hasSystem(): boolean;
        clearSystem(): void;
        getSystem(): AppDefinition.Workspace.System | undefined;
        setSystem(value?: AppDefinition.Workspace.System): Workspace;
        getDisableServiceLinkingEnvs(): boolean;
        setDisableServiceLinkingEnvs(value: boolean): Workspace;

        hasRestriction(): boolean;
        clearRestriction(): void;
        getRestriction(): AppDefinition.Workspace.Restriction | undefined;
        setRestriction(value?: AppDefinition.Workspace.Restriction): Workspace;

        hasLifecycle(): boolean;
        clearLifecycle(): void;
        getLifecycle(): AppDefinition.Workspace.Lifecycle | undefined;
        setLifecycle(value?: AppDefinition.Workspace.Lifecycle): Workspace;

        getBaseImageByRegionMap(): jspb.Map<string, string>;
        clearBaseImageByRegionMap(): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Workspace.AsObject;
        static toObject(includeInstance: boolean, msg: Workspace): Workspace.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Workspace, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Workspace;
        static deserializeBinaryFromReader(message: Workspace, reader: jspb.BinaryReader): Workspace;
    }

    export namespace Workspace {
        export type AsObject = {
            name: string,
            description: string,
            portsList: Array<sandboxes_api_v1_endpoint_pb.PortSpec.AsObject>,
            checkoutsList: Array<Checkout.AsObject>,
            packagesList: Array<ToolPackageSpec.AsObject>,
            portForwardRulesList: Array<PortForwardRule.AsObject>,
            baseSnapshot: string,
            homeSnapshot: string,
            probes?: ServiceProbes.AsObject,
            envList: Array<string>,
            scheduleSpec?: ScheduleSpec.AsObject,
            hostnamesList: Array<string>,
            waitForList: Array<string>,
            system?: AppDefinition.Workspace.System.AsObject,
            disableServiceLinkingEnvs: boolean,
            restriction?: AppDefinition.Workspace.Restriction.AsObject,
            lifecycle?: AppDefinition.Workspace.Lifecycle.AsObject,

            baseImageByRegionMap: Array<[string, string]>,
        }


        export class System extends jspb.Message { 
            clearDaemonsList(): void;
            getDaemonsList(): Array<GlobalProcess>;
            setDaemonsList(value: Array<GlobalProcess>): System;
            addDaemons(value?: GlobalProcess, index?: number): GlobalProcess;
            clearFilesList(): void;
            getFilesList(): Array<SetupFile>;
            setFilesList(value: Array<SetupFile>): System;
            addFiles(value?: SetupFile, index?: number): SetupFile;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): System.AsObject;
            static toObject(includeInstance: boolean, msg: System): System.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: System, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): System;
            static deserializeBinaryFromReader(message: System, reader: jspb.BinaryReader): System;
        }

        export namespace System {
            export type AsObject = {
                daemonsList: Array<GlobalProcess.AsObject>,
                filesList: Array<SetupFile.AsObject>,
            }
        }

        export class Restriction extends jspb.Message { 
            getLifeTime(): AppDefinition.Workspace.Restriction.LifeTime;
            setLifeTime(value: AppDefinition.Workspace.Restriction.LifeTime): Restriction;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Restriction.AsObject;
            static toObject(includeInstance: boolean, msg: Restriction): Restriction.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Restriction, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Restriction;
            static deserializeBinaryFromReader(message: Restriction, reader: jspb.BinaryReader): Restriction;
        }

        export namespace Restriction {
            export type AsObject = {
                lifeTime: AppDefinition.Workspace.Restriction.LifeTime,
            }

            export enum LifeTime {
    NONE = 0,
    STARTUP = 1,
    ALWAYS = 2,
            }

        }

        export class Lifecycle extends jspb.Message { 

            hasOnCreate(): boolean;
            clearOnCreate(): void;
            getOnCreate(): AppDefinition.Workspace.Lifecycle.Handler | undefined;
            setOnCreate(value?: AppDefinition.Workspace.Lifecycle.Handler): Lifecycle;

            hasOnSuspend(): boolean;
            clearOnSuspend(): void;
            getOnSuspend(): AppDefinition.Workspace.Lifecycle.Handler | undefined;
            setOnSuspend(value?: AppDefinition.Workspace.Lifecycle.Handler): Lifecycle;

            hasOnResume(): boolean;
            clearOnResume(): void;
            getOnResume(): AppDefinition.Workspace.Lifecycle.Handler | undefined;
            setOnResume(value?: AppDefinition.Workspace.Lifecycle.Handler): Lifecycle;

            hasOnDelete(): boolean;
            clearOnDelete(): void;
            getOnDelete(): AppDefinition.Workspace.Lifecycle.Handler | undefined;
            setOnDelete(value?: AppDefinition.Workspace.Lifecycle.Handler): Lifecycle;

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
                onCreate?: AppDefinition.Workspace.Lifecycle.Handler.AsObject,
                onSuspend?: AppDefinition.Workspace.Lifecycle.Handler.AsObject,
                onResume?: AppDefinition.Workspace.Lifecycle.Handler.AsObject,
                onDelete?: AppDefinition.Workspace.Lifecycle.Handler.AsObject,
            }


            export class Handler extends jspb.Message { 

                hasRun(): boolean;
                clearRun(): void;
                getRun(): sandboxes_api_v1_repo_pb.Repo.Run | undefined;
                setRun(value?: sandboxes_api_v1_repo_pb.Repo.Run): Handler;
                getMaxRetries(): number;
                setMaxRetries(value: number): Handler;
                getRequireBuild(): boolean;
                setRequireBuild(value: boolean): Handler;

                hasTimeout(): boolean;
                clearTimeout(): void;
                getTimeout(): google_protobuf_duration_pb.Duration | undefined;
                setTimeout(value?: google_protobuf_duration_pb.Duration): Handler;

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
                    run?: sandboxes_api_v1_repo_pb.Repo.Run.AsObject,
                    maxRetries: number,
                    requireBuild: boolean,
                    timeout?: google_protobuf_duration_pb.Duration.AsObject,
                }
            }

        }

    }

    export class Dependency extends jspb.Message { 
        getName(): string;
        setName(value: string): Dependency;
        getDescription(): string;
        setDescription(value: string): Dependency;
        getServiceType(): string;
        setServiceType(value: string): Dependency;
        getVersion(): string;
        setVersion(value: string): Dependency;

        getPropertiesMap(): jspb.Map<string, string>;
        clearPropertiesMap(): void;
        getSnapshot(): string;
        setSnapshot(value: string): Dependency;

        hasScheduleSpec(): boolean;
        clearScheduleSpec(): void;
        getScheduleSpec(): ScheduleSpec | undefined;
        setScheduleSpec(value?: ScheduleSpec): Dependency;
        clearHostnamesList(): void;
        getHostnamesList(): Array<string>;
        setHostnamesList(value: Array<string>): Dependency;
        addHostnames(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Dependency.AsObject;
        static toObject(includeInstance: boolean, msg: Dependency): Dependency.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Dependency, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Dependency;
        static deserializeBinaryFromReader(message: Dependency, reader: jspb.BinaryReader): Dependency;
    }

    export namespace Dependency {
        export type AsObject = {
            name: string,
            description: string,
            serviceType: string,
            version: string,

            propertiesMap: Array<[string, string]>,
            snapshot: string,
            scheduleSpec?: ScheduleSpec.AsObject,
            hostnamesList: Array<string>,
        }
    }

    export class Container extends jspb.Message { 
        getName(): string;
        setName(value: string): Container;
        getDescription(): string;
        setDescription(value: string): Container;
        getImage(): string;
        setImage(value: string): Container;
        clearEntrypointList(): void;
        getEntrypointList(): Array<string>;
        setEntrypointList(value: Array<string>): Container;
        addEntrypoint(value: string, index?: number): string;
        clearArgsList(): void;
        getArgsList(): Array<string>;
        setArgsList(value: Array<string>): Container;
        addArgs(value: string, index?: number): string;
        clearEnvList(): void;
        getEnvList(): Array<string>;
        setEnvList(value: Array<string>): Container;
        addEnv(value: string, index?: number): string;
        getCwd(): string;
        setCwd(value: string): Container;
        clearPortsList(): void;
        getPortsList(): Array<sandboxes_api_v1_endpoint_pb.PortSpec>;
        setPortsList(value: Array<sandboxes_api_v1_endpoint_pb.PortSpec>): Container;
        addPorts(value?: sandboxes_api_v1_endpoint_pb.PortSpec, index?: number): sandboxes_api_v1_endpoint_pb.PortSpec;

        hasProbes(): boolean;
        clearProbes(): void;
        getProbes(): ServiceProbes | undefined;
        setProbes(value?: ServiceProbes): Container;
        clearVolumeMountsList(): void;
        getVolumeMountsList(): Array<VolumeMount>;
        setVolumeMountsList(value: Array<VolumeMount>): Container;
        addVolumeMounts(value?: VolumeMount, index?: number): VolumeMount;

        hasRunAs(): boolean;
        clearRunAs(): void;
        getRunAs(): UserContext | undefined;
        setRunAs(value?: UserContext): Container;

        hasScheduleSpec(): boolean;
        clearScheduleSpec(): void;
        getScheduleSpec(): ScheduleSpec | undefined;
        setScheduleSpec(value?: ScheduleSpec): Container;
        getSnapshot(): string;
        setSnapshot(value: string): Container;
        clearHostnamesList(): void;
        getHostnamesList(): Array<string>;
        setHostnamesList(value: Array<string>): Container;
        addHostnames(value: string, index?: number): string;
        clearWaitForList(): void;
        getWaitForList(): Array<string>;
        setWaitForList(value: Array<string>): Container;
        addWaitFor(value: string, index?: number): string;
        getDisableServiceLinkingEnvs(): boolean;
        setDisableServiceLinkingEnvs(value: boolean): Container;
        getVolatile(): boolean;
        setVolatile(value: boolean): Container;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Container.AsObject;
        static toObject(includeInstance: boolean, msg: Container): Container.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Container, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Container;
        static deserializeBinaryFromReader(message: Container, reader: jspb.BinaryReader): Container;
    }

    export namespace Container {
        export type AsObject = {
            name: string,
            description: string,
            image: string,
            entrypointList: Array<string>,
            argsList: Array<string>,
            envList: Array<string>,
            cwd: string,
            portsList: Array<sandboxes_api_v1_endpoint_pb.PortSpec.AsObject>,
            probes?: ServiceProbes.AsObject,
            volumeMountsList: Array<VolumeMount.AsObject>,
            runAs?: UserContext.AsObject,
            scheduleSpec?: ScheduleSpec.AsObject,
            snapshot: string,
            hostnamesList: Array<string>,
            waitForList: Array<string>,
            disableServiceLinkingEnvs: boolean,
            pb_volatile: boolean,
        }
    }

    export class ResourceGroup extends jspb.Message { 
        getName(): string;
        setName(value: string): ResourceGroup;
        getDescription(): string;
        setDescription(value: string): ResourceGroup;
        getBrief(): string;
        setBrief(value: string): ResourceGroup;
        getDetails(): string;
        setDetails(value: string): ResourceGroup;

        hasHandlers(): boolean;
        clearHandlers(): void;
        getHandlers(): AppDefinition.ResourceGroup.Handlers | undefined;
        setHandlers(value?: AppDefinition.ResourceGroup.Handlers): ResourceGroup;

        hasTerraform(): boolean;
        clearTerraform(): void;
        getTerraform(): AppDefinition.ResourceGroup.Terraform | undefined;
        setTerraform(value?: AppDefinition.ResourceGroup.Terraform): ResourceGroup;
        clearWaitForList(): void;
        getWaitForList(): Array<string>;
        setWaitForList(value: Array<string>): ResourceGroup;
        addWaitFor(value: string, index?: number): string;

        getControllerCase(): ResourceGroup.ControllerCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ResourceGroup.AsObject;
        static toObject(includeInstance: boolean, msg: ResourceGroup): ResourceGroup.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ResourceGroup, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ResourceGroup;
        static deserializeBinaryFromReader(message: ResourceGroup, reader: jspb.BinaryReader): ResourceGroup;
    }

    export namespace ResourceGroup {
        export type AsObject = {
            name: string,
            description: string,
            brief: string,
            details: string,
            handlers?: AppDefinition.ResourceGroup.Handlers.AsObject,
            terraform?: AppDefinition.ResourceGroup.Terraform.AsObject,
            waitForList: Array<string>,
        }


        export class Handlers extends jspb.Message { 

            hasOnCreate(): boolean;
            clearOnCreate(): void;
            getOnCreate(): ExecHandler | undefined;
            setOnCreate(value?: ExecHandler): Handlers;

            hasOnDelete(): boolean;
            clearOnDelete(): void;
            getOnDelete(): ExecHandler | undefined;
            setOnDelete(value?: ExecHandler): Handlers;

            hasOnSuspend(): boolean;
            clearOnSuspend(): void;
            getOnSuspend(): ExecHandler | undefined;
            setOnSuspend(value?: ExecHandler): Handlers;

            hasOnResume(): boolean;
            clearOnResume(): void;
            getOnResume(): ExecHandler | undefined;
            setOnResume(value?: ExecHandler): Handlers;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Handlers.AsObject;
            static toObject(includeInstance: boolean, msg: Handlers): Handlers.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Handlers, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Handlers;
            static deserializeBinaryFromReader(message: Handlers, reader: jspb.BinaryReader): Handlers;
        }

        export namespace Handlers {
            export type AsObject = {
                onCreate?: ExecHandler.AsObject,
                onDelete?: ExecHandler.AsObject,
                onSuspend?: ExecHandler.AsObject,
                onResume?: ExecHandler.AsObject,
            }
        }

        export class Terraform extends jspb.Message { 
            getWorkspace(): string;
            setWorkspace(value: string): Terraform;
            getDir(): string;
            setDir(value: string): Terraform;
            getRequireBuild(): boolean;
            setRequireBuild(value: boolean): Terraform;

            hasRun(): boolean;
            clearRun(): void;
            getRun(): AppDefinition.ResourceGroup.Terraform.Exec | undefined;
            setRun(value?: AppDefinition.ResourceGroup.Terraform.Exec): Terraform;

            hasOnSuspend(): boolean;
            clearOnSuspend(): void;
            getOnSuspend(): AppDefinition.ResourceGroup.Terraform.Exec | undefined;
            setOnSuspend(value?: AppDefinition.ResourceGroup.Terraform.Exec): Terraform;

            hasOnDelete(): boolean;
            clearOnDelete(): void;
            getOnDelete(): AppDefinition.ResourceGroup.Terraform.Exec | undefined;
            setOnDelete(value?: AppDefinition.ResourceGroup.Terraform.Exec): Terraform;
            getOutput(): string;
            setOutput(value: string): Terraform;
            getSaveState(): boolean;
            setSaveState(value: boolean): Terraform;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Terraform.AsObject;
            static toObject(includeInstance: boolean, msg: Terraform): Terraform.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Terraform, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Terraform;
            static deserializeBinaryFromReader(message: Terraform, reader: jspb.BinaryReader): Terraform;
        }

        export namespace Terraform {
            export type AsObject = {
                workspace: string,
                dir: string,
                requireBuild: boolean,
                run?: AppDefinition.ResourceGroup.Terraform.Exec.AsObject,
                onSuspend?: AppDefinition.ResourceGroup.Terraform.Exec.AsObject,
                onDelete?: AppDefinition.ResourceGroup.Terraform.Exec.AsObject,
                output: string,
                saveState: boolean,
            }


            export class Exec extends jspb.Message { 
                getMaxRetries(): number;
                setMaxRetries(value: number): Exec;

                hasTimeout(): boolean;
                clearTimeout(): void;
                getTimeout(): google_protobuf_duration_pb.Duration | undefined;
                setTimeout(value?: google_protobuf_duration_pb.Duration): Exec;
                getCommand(): string;
                setCommand(value: string): Exec;
                clearArgsList(): void;
                getArgsList(): Array<string>;
                setArgsList(value: Array<string>): Exec;
                addArgs(value: string, index?: number): string;
                clearEnvList(): void;
                getEnvList(): Array<string>;
                setEnvList(value: Array<string>): Exec;
                addEnv(value: string, index?: number): string;

                getVarsMap(): jspb.Map<string, string>;
                clearVarsMap(): void;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Exec.AsObject;
                static toObject(includeInstance: boolean, msg: Exec): Exec.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Exec, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Exec;
                static deserializeBinaryFromReader(message: Exec, reader: jspb.BinaryReader): Exec;
            }

            export namespace Exec {
                export type AsObject = {
                    maxRetries: number,
                    timeout?: google_protobuf_duration_pb.Duration.AsObject,
                    command: string,
                    argsList: Array<string>,
                    envList: Array<string>,

                    varsMap: Array<[string, string]>,
                }
            }

        }


        export enum ControllerCase {
            CONTROLLER_NOT_SET = 0,
            HANDLERS = 10,
            TERRAFORM = 11,
        }

    }

    export class Customization extends jspb.Message { 

        hasEnv(): boolean;
        clearEnv(): void;
        getEnv(): AppDefinition.Customization.Env | undefined;
        setEnv(value?: AppDefinition.Customization.Env): Customization;

        hasKubernetes(): boolean;
        clearKubernetes(): void;
        getKubernetes(): AppDefinition.Customization.Kubernetes | undefined;
        setKubernetes(value?: AppDefinition.Customization.Kubernetes): Customization;

        hasPropertySet(): boolean;
        clearPropertySet(): void;
        getPropertySet(): AppDefinition.Customization.PropertySet | undefined;
        setPropertySet(value?: AppDefinition.Customization.PropertySet): Customization;

        hasFlavor(): boolean;
        clearFlavor(): void;
        getFlavor(): AppDefinition.Customization.Flavor | undefined;
        setFlavor(value?: AppDefinition.Customization.Flavor): Customization;

        hasSettings(): boolean;
        clearSettings(): void;
        getSettings(): AppDefinition.Customization.OrgSettingsOverrides | undefined;
        setSettings(value?: AppDefinition.Customization.OrgSettingsOverrides): Customization;

        hasLockdown(): boolean;
        clearLockdown(): void;
        getLockdown(): AppDefinition.Customization.Lockdown | undefined;
        setLockdown(value?: AppDefinition.Customization.Lockdown): Customization;

        hasDetachEnv(): boolean;
        clearDetachEnv(): void;
        getDetachEnv(): AppDefinition.Customization.DetachEnv | undefined;
        setDetachEnv(value?: AppDefinition.Customization.DetachEnv): Customization;

        hasMcpServer(): boolean;
        clearMcpServer(): void;
        getMcpServer(): AppDefinition.Customization.MCPServer | undefined;
        setMcpServer(value?: AppDefinition.Customization.MCPServer): Customization;

        hasLlmAgent(): boolean;
        clearLlmAgent(): void;
        getLlmAgent(): AppDefinition.Customization.LLMAgent | undefined;
        setLlmAgent(value?: AppDefinition.Customization.LLMAgent): Customization;

        getRuleCase(): Customization.RuleCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Customization.AsObject;
        static toObject(includeInstance: boolean, msg: Customization): Customization.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Customization, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Customization;
        static deserializeBinaryFromReader(message: Customization, reader: jspb.BinaryReader): Customization;
    }

    export namespace Customization {
        export type AsObject = {
            env?: AppDefinition.Customization.Env.AsObject,
            kubernetes?: AppDefinition.Customization.Kubernetes.AsObject,
            propertySet?: AppDefinition.Customization.PropertySet.AsObject,
            flavor?: AppDefinition.Customization.Flavor.AsObject,
            settings?: AppDefinition.Customization.OrgSettingsOverrides.AsObject,
            lockdown?: AppDefinition.Customization.Lockdown.AsObject,
            detachEnv?: AppDefinition.Customization.DetachEnv.AsObject,
            mcpServer?: AppDefinition.Customization.MCPServer.AsObject,
            llmAgent?: AppDefinition.Customization.LLMAgent.AsObject,
        }


        export class Validator extends jspb.Message { 

            hasRegexp(): boolean;
            clearRegexp(): void;
            getRegexp(): string;
            setRegexp(value: string): Validator;

            getRuleCase(): Validator.RuleCase;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Validator.AsObject;
            static toObject(includeInstance: boolean, msg: Validator): Validator.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Validator, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Validator;
            static deserializeBinaryFromReader(message: Validator, reader: jspb.BinaryReader): Validator;
        }

        export namespace Validator {
            export type AsObject = {
                regexp: string,
            }

            export enum RuleCase {
                RULE_NOT_SET = 0,
                REGEXP = 1,
            }

        }

        export class StringChoice extends jspb.Message { 
            getDefault(): string;
            setDefault(value: string): StringChoice;
            clearOptionsList(): void;
            getOptionsList(): Array<string>;
            setOptionsList(value: Array<string>): StringChoice;
            addOptions(value: string, index?: number): string;
            getEditable(): boolean;
            setEditable(value: boolean): StringChoice;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): StringChoice.AsObject;
            static toObject(includeInstance: boolean, msg: StringChoice): StringChoice.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: StringChoice, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): StringChoice;
            static deserializeBinaryFromReader(message: StringChoice, reader: jspb.BinaryReader): StringChoice;
        }

        export namespace StringChoice {
            export type AsObject = {
                pb_default: string,
                optionsList: Array<string>,
                editable: boolean,
            }
        }

        export class Env extends jspb.Message { 
            getName(): string;
            setName(value: string): Env;
            getDisplayName(): string;
            setDisplayName(value: string): Env;
            getDescription(): string;
            setDescription(value: string): Env;
            clearValidatorsList(): void;
            getValidatorsList(): Array<AppDefinition.Customization.Validator>;
            setValidatorsList(value: Array<AppDefinition.Customization.Validator>): Env;
            addValidators(value?: AppDefinition.Customization.Validator, index?: number): AppDefinition.Customization.Validator;

            hasChoice(): boolean;
            clearChoice(): void;
            getChoice(): AppDefinition.Customization.StringChoice | undefined;
            setChoice(value?: AppDefinition.Customization.StringChoice): Env;

            getTypeCase(): Env.TypeCase;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Env.AsObject;
            static toObject(includeInstance: boolean, msg: Env): Env.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Env, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Env;
            static deserializeBinaryFromReader(message: Env, reader: jspb.BinaryReader): Env;
        }

        export namespace Env {
            export type AsObject = {
                name: string,
                displayName: string,
                description: string,
                validatorsList: Array<AppDefinition.Customization.Validator.AsObject>,
                choice?: AppDefinition.Customization.StringChoice.AsObject,
            }

            export enum TypeCase {
                TYPE_NOT_SET = 0,
                CHOICE = 10,
            }

        }

        export class Kubernetes extends jspb.Message { 
            getPlan(): string;
            setPlan(value: string): Kubernetes;
            getCluster(): string;
            setCluster(value: string): Kubernetes;
            clearWorkloadsList(): void;
            getWorkloadsList(): Array<AppDefinition.Customization.Kubernetes.Workload>;
            setWorkloadsList(value: Array<AppDefinition.Customization.Kubernetes.Workload>): Kubernetes;
            addWorkloads(value?: AppDefinition.Customization.Kubernetes.Workload, index?: number): AppDefinition.Customization.Kubernetes.Workload;
            clearIngressesList(): void;
            getIngressesList(): Array<AppDefinition.Customization.Kubernetes.Ingress>;
            setIngressesList(value: Array<AppDefinition.Customization.Kubernetes.Ingress>): Kubernetes;
            addIngresses(value?: AppDefinition.Customization.Kubernetes.Ingress, index?: number): AppDefinition.Customization.Kubernetes.Ingress;

            hasInterceptCondition(): boolean;
            clearInterceptCondition(): void;
            getInterceptCondition(): AppDefinition.Customization.Kubernetes.InterceptCondition | undefined;
            setInterceptCondition(value?: AppDefinition.Customization.Kubernetes.InterceptCondition): Kubernetes;
            getNamespace(): string;
            setNamespace(value: string): Kubernetes;
            getNetworkVia(): string;
            setNetworkVia(value: string): Kubernetes;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Kubernetes.AsObject;
            static toObject(includeInstance: boolean, msg: Kubernetes): Kubernetes.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Kubernetes, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Kubernetes;
            static deserializeBinaryFromReader(message: Kubernetes, reader: jspb.BinaryReader): Kubernetes;
        }

        export namespace Kubernetes {
            export type AsObject = {
                plan: string,
                cluster: string,
                workloadsList: Array<AppDefinition.Customization.Kubernetes.Workload.AsObject>,
                ingressesList: Array<AppDefinition.Customization.Kubernetes.Ingress.AsObject>,
                interceptCondition?: AppDefinition.Customization.Kubernetes.InterceptCondition.AsObject,
                namespace: string,
                networkVia: string,
            }


            export class InterceptCondition extends jspb.Message { 

                getCustomHeadersMap(): jspb.Map<string, string>;
                clearCustomHeadersMap(): void;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): InterceptCondition.AsObject;
                static toObject(includeInstance: boolean, msg: InterceptCondition): InterceptCondition.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: InterceptCondition, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): InterceptCondition;
                static deserializeBinaryFromReader(message: InterceptCondition, reader: jspb.BinaryReader): InterceptCondition;
            }

            export namespace InterceptCondition {
                export type AsObject = {

                    customHeadersMap: Array<[string, string]>,
                }
            }

            export class Workload extends jspb.Message { 
                getNamespace(): string;
                setNamespace(value: string): Workload;
                getKind(): string;
                setKind(value: string): Workload;
                getName(): string;
                setName(value: string): Workload;
                getContainer(): string;
                setContainer(value: string): Workload;
                getWorkload(): string;
                setWorkload(value: string): Workload;
                clearPortForwardList(): void;
                getPortForwardList(): Array<AppDefinition.Customization.Kubernetes.Workload.PortForward>;
                setPortForwardList(value: Array<AppDefinition.Customization.Kubernetes.Workload.PortForward>): Workload;
                addPortForward(value?: AppDefinition.Customization.Kubernetes.Workload.PortForward, index?: number): AppDefinition.Customization.Kubernetes.Workload.PortForward;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Workload.AsObject;
                static toObject(includeInstance: boolean, msg: Workload): Workload.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Workload, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Workload;
                static deserializeBinaryFromReader(message: Workload, reader: jspb.BinaryReader): Workload;
            }

            export namespace Workload {
                export type AsObject = {
                    namespace: string,
                    kind: string,
                    name: string,
                    container: string,
                    workload: string,
                    portForwardList: Array<AppDefinition.Customization.Kubernetes.Workload.PortForward.AsObject>,
                }


                export class PortForward extends jspb.Message { 
                    getPort(): number;
                    setPort(value: number): PortForward;
                    getTo(): number;
                    setTo(value: number): PortForward;
                    getProtocol(): string;
                    setProtocol(value: string): PortForward;
                    getDestProtocol(): string;
                    setDestProtocol(value: string): PortForward;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): PortForward.AsObject;
                    static toObject(includeInstance: boolean, msg: PortForward): PortForward.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: PortForward, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): PortForward;
                    static deserializeBinaryFromReader(message: PortForward, reader: jspb.BinaryReader): PortForward;
                }

                export namespace PortForward {
                    export type AsObject = {
                        port: number,
                        to: number,
                        protocol: string,
                        destProtocol: string,
                    }
                }

            }

            export class Ingress extends jspb.Message { 
                getNamespace(): string;
                setNamespace(value: string): Ingress;
                getKind(): string;
                setKind(value: string): Ingress;
                getName(): string;
                setName(value: string): Ingress;
                getEndpointName(): string;
                setEndpointName(value: string): Ingress;

                getCustomHeadersMap(): jspb.Map<string, string>;
                clearCustomHeadersMap(): void;
                getServicePort(): string;
                setServicePort(value: string): Ingress;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Ingress.AsObject;
                static toObject(includeInstance: boolean, msg: Ingress): Ingress.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Ingress, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Ingress;
                static deserializeBinaryFromReader(message: Ingress, reader: jspb.BinaryReader): Ingress;
            }

            export namespace Ingress {
                export type AsObject = {
                    namespace: string,
                    kind: string,
                    name: string,
                    endpointName: string,

                    customHeadersMap: Array<[string, string]>,
                    servicePort: string,
                }
            }

        }

        export class PropertySet extends jspb.Message { 
            getType(): string;
            setType(value: string): PropertySet;

            getPropertiesMap(): jspb.Map<string, string>;
            clearPropertiesMap(): void;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): PropertySet.AsObject;
            static toObject(includeInstance: boolean, msg: PropertySet): PropertySet.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: PropertySet, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): PropertySet;
            static deserializeBinaryFromReader(message: PropertySet, reader: jspb.BinaryReader): PropertySet;
        }

        export namespace PropertySet {
            export type AsObject = {
                type: string,

                propertiesMap: Array<[string, string]>,
            }
        }

        export class Flavor extends jspb.Message { 
            getName(): string;
            setName(value: string): Flavor;
            getDefault(): boolean;
            setDefault(value: boolean): Flavor;
            clearEnvList(): void;
            getEnvList(): Array<string>;
            setEnvList(value: Array<string>): Flavor;
            addEnv(value: string, index?: number): string;

            getWorkspacesMap(): jspb.Map<string, AppDefinition.Customization.Flavor.Workspace>;
            clearWorkspacesMap(): void;
            clearExcludesList(): void;
            getExcludesList(): Array<string>;
            setExcludesList(value: Array<string>): Flavor;
            addExcludes(value: string, index?: number): string;
            getKubernetesPlan(): string;
            setKubernetesPlan(value: string): Flavor;
            getDescription(): string;
            setDescription(value: string): Flavor;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Flavor.AsObject;
            static toObject(includeInstance: boolean, msg: Flavor): Flavor.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Flavor, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Flavor;
            static deserializeBinaryFromReader(message: Flavor, reader: jspb.BinaryReader): Flavor;
        }

        export namespace Flavor {
            export type AsObject = {
                name: string,
                pb_default: boolean,
                envList: Array<string>,

                workspacesMap: Array<[string, AppDefinition.Customization.Flavor.Workspace.AsObject]>,
                excludesList: Array<string>,
                kubernetesPlan: string,
                description: string,
            }


            export class Workspace extends jspb.Message { 
                getAuto(): boolean;
                setAuto(value: boolean): Workspace;
                clearCheckoutsList(): void;
                getCheckoutsList(): Array<AppDefinition.Customization.Flavor.Workspace.Checkout>;
                setCheckoutsList(value: Array<AppDefinition.Customization.Flavor.Workspace.Checkout>): Workspace;
                addCheckouts(value?: AppDefinition.Customization.Flavor.Workspace.Checkout, index?: number): AppDefinition.Customization.Flavor.Workspace.Checkout;
                clearEnvList(): void;
                getEnvList(): Array<string>;
                setEnvList(value: Array<string>): Workspace;
                addEnv(value: string, index?: number): string;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Workspace.AsObject;
                static toObject(includeInstance: boolean, msg: Workspace): Workspace.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Workspace, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Workspace;
                static deserializeBinaryFromReader(message: Workspace, reader: jspb.BinaryReader): Workspace;
            }

            export namespace Workspace {
                export type AsObject = {
                    auto: boolean,
                    checkoutsList: Array<AppDefinition.Customization.Flavor.Workspace.Checkout.AsObject>,
                    envList: Array<string>,
                }


                export class Checkout extends jspb.Message { 
                    getPath(): string;
                    setPath(value: string): Checkout;
                    getVersionSpec(): string;
                    setVersionSpec(value: string): Checkout;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): Checkout.AsObject;
                    static toObject(includeInstance: boolean, msg: Checkout): Checkout.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: Checkout, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): Checkout;
                    static deserializeBinaryFromReader(message: Checkout, reader: jspb.BinaryReader): Checkout;
                }

                export namespace Checkout {
                    export type AsObject = {
                        path: string,
                        versionSpec: string,
                    }
                }

            }

        }

        export class OrgSettingsOverrides extends jspb.Message { 
            clearOverridesList(): void;
            getOverridesList(): Array<string>;
            setOverridesList(value: Array<string>): OrgSettingsOverrides;
            addOverrides(value: string, index?: number): string;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): OrgSettingsOverrides.AsObject;
            static toObject(includeInstance: boolean, msg: OrgSettingsOverrides): OrgSettingsOverrides.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: OrgSettingsOverrides, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): OrgSettingsOverrides;
            static deserializeBinaryFromReader(message: OrgSettingsOverrides, reader: jspb.BinaryReader): OrgSettingsOverrides;
        }

        export namespace OrgSettingsOverrides {
            export type AsObject = {
                overridesList: Array<string>,
            }
        }

        export class Lockdown extends jspb.Message { 
            clearApplyToList(): void;
            getApplyToList(): Array<string>;
            setApplyToList(value: Array<string>): Lockdown;
            addApplyTo(value: string, index?: number): string;
            getAllowApiAccess(): boolean;
            setAllowApiAccess(value: boolean): Lockdown;
            getAllowSshKeypair(): boolean;
            setAllowSshKeypair(value: boolean): Lockdown;
            clearAccessibleSecretsList(): void;
            getAccessibleSecretsList(): Array<string>;
            setAccessibleSecretsList(value: Array<string>): Lockdown;
            addAccessibleSecrets(value: string, index?: number): string;
            clearOutboundIpFiltersList(): void;
            getOutboundIpFiltersList(): Array<AppDefinition.Customization.Lockdown.IPFilter>;
            setOutboundIpFiltersList(value: Array<AppDefinition.Customization.Lockdown.IPFilter>): Lockdown;
            addOutboundIpFilters(value?: AppDefinition.Customization.Lockdown.IPFilter, index?: number): AppDefinition.Customization.Lockdown.IPFilter;
            clearDnsFiltersList(): void;
            getDnsFiltersList(): Array<AppDefinition.Customization.Lockdown.DNSFilter>;
            setDnsFiltersList(value: Array<AppDefinition.Customization.Lockdown.DNSFilter>): Lockdown;
            addDnsFilters(value?: AppDefinition.Customization.Lockdown.DNSFilter, index?: number): AppDefinition.Customization.Lockdown.DNSFilter;
            clearRepoCredentialFiltersList(): void;
            getRepoCredentialFiltersList(): Array<AppDefinition.Customization.Lockdown.RepoCredentialFilter>;
            setRepoCredentialFiltersList(value: Array<AppDefinition.Customization.Lockdown.RepoCredentialFilter>): Lockdown;
            addRepoCredentialFilters(value?: AppDefinition.Customization.Lockdown.RepoCredentialFilter, index?: number): AppDefinition.Customization.Lockdown.RepoCredentialFilter;
            getAllowRequestEndpointAccess(): boolean;
            setAllowRequestEndpointAccess(value: boolean): Lockdown;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Lockdown.AsObject;
            static toObject(includeInstance: boolean, msg: Lockdown): Lockdown.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Lockdown, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Lockdown;
            static deserializeBinaryFromReader(message: Lockdown, reader: jspb.BinaryReader): Lockdown;
        }

        export namespace Lockdown {
            export type AsObject = {
                applyToList: Array<string>,
                allowApiAccess: boolean,
                allowSshKeypair: boolean,
                accessibleSecretsList: Array<string>,
                outboundIpFiltersList: Array<AppDefinition.Customization.Lockdown.IPFilter.AsObject>,
                dnsFiltersList: Array<AppDefinition.Customization.Lockdown.DNSFilter.AsObject>,
                repoCredentialFiltersList: Array<AppDefinition.Customization.Lockdown.RepoCredentialFilter.AsObject>,
                allowRequestEndpointAccess: boolean,
            }


            export class PortRange extends jspb.Message { 
                getStart(): number;
                setStart(value: number): PortRange;
                getEnd(): number;
                setEnd(value: number): PortRange;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): PortRange.AsObject;
                static toObject(includeInstance: boolean, msg: PortRange): PortRange.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: PortRange, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): PortRange;
                static deserializeBinaryFromReader(message: PortRange, reader: jspb.BinaryReader): PortRange;
            }

            export namespace PortRange {
                export type AsObject = {
                    start: number,
                    end: number,
                }
            }

            export class IPFilter extends jspb.Message { 
                clearCidrsList(): void;
                getCidrsList(): Array<string>;
                setCidrsList(value: Array<string>): IPFilter;
                addCidrs(value: string, index?: number): string;
                clearPortsList(): void;
                getPortsList(): Array<number>;
                setPortsList(value: Array<number>): IPFilter;
                addPorts(value: number, index?: number): number;
                clearPortRangesList(): void;
                getPortRangesList(): Array<AppDefinition.Customization.Lockdown.PortRange>;
                setPortRangesList(value: Array<AppDefinition.Customization.Lockdown.PortRange>): IPFilter;
                addPortRanges(value?: AppDefinition.Customization.Lockdown.PortRange, index?: number): AppDefinition.Customization.Lockdown.PortRange;

                hasBlock(): boolean;
                clearBlock(): void;
                getBlock(): boolean;
                setBlock(value: boolean): IPFilter;

                getActionCase(): IPFilter.ActionCase;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): IPFilter.AsObject;
                static toObject(includeInstance: boolean, msg: IPFilter): IPFilter.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: IPFilter, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): IPFilter;
                static deserializeBinaryFromReader(message: IPFilter, reader: jspb.BinaryReader): IPFilter;
            }

            export namespace IPFilter {
                export type AsObject = {
                    cidrsList: Array<string>,
                    portsList: Array<number>,
                    portRangesList: Array<AppDefinition.Customization.Lockdown.PortRange.AsObject>,
                    block: boolean,
                }

                export enum ActionCase {
                    ACTION_NOT_SET = 0,
                    BLOCK = 4,
                }

            }

            export class DNSFilter extends jspb.Message { 
                clearNamesList(): void;
                getNamesList(): Array<string>;
                setNamesList(value: Array<string>): DNSFilter;
                addNames(value: string, index?: number): string;

                hasBlock(): boolean;
                clearBlock(): void;
                getBlock(): boolean;
                setBlock(value: boolean): DNSFilter;

                getActionCase(): DNSFilter.ActionCase;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): DNSFilter.AsObject;
                static toObject(includeInstance: boolean, msg: DNSFilter): DNSFilter.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: DNSFilter, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): DNSFilter;
                static deserializeBinaryFromReader(message: DNSFilter, reader: jspb.BinaryReader): DNSFilter;
            }

            export namespace DNSFilter {
                export type AsObject = {
                    namesList: Array<string>,
                    block: boolean,
                }

                export enum ActionCase {
                    ACTION_NOT_SET = 0,
                    BLOCK = 2,
                }

            }

            export class RepoCredentialFilter extends jspb.Message { 
                clearRepoUrlList(): void;
                getRepoUrlList(): Array<sandboxes_api_v1_common_pb.StringMatcher>;
                setRepoUrlList(value: Array<sandboxes_api_v1_common_pb.StringMatcher>): RepoCredentialFilter;
                addRepoUrl(value?: sandboxes_api_v1_common_pb.StringMatcher, index?: number): sandboxes_api_v1_common_pb.StringMatcher;

                hasBlock(): boolean;
                clearBlock(): void;
                getBlock(): boolean;
                setBlock(value: boolean): RepoCredentialFilter;

                getActionCase(): RepoCredentialFilter.ActionCase;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): RepoCredentialFilter.AsObject;
                static toObject(includeInstance: boolean, msg: RepoCredentialFilter): RepoCredentialFilter.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: RepoCredentialFilter, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): RepoCredentialFilter;
                static deserializeBinaryFromReader(message: RepoCredentialFilter, reader: jspb.BinaryReader): RepoCredentialFilter;
            }

            export namespace RepoCredentialFilter {
                export type AsObject = {
                    repoUrlList: Array<sandboxes_api_v1_common_pb.StringMatcher.AsObject>,
                    block: boolean,
                }

                export enum ActionCase {
                    ACTION_NOT_SET = 0,
                    BLOCK = 2,
                }

            }

        }

        export class DetachEnv extends jspb.Message { 
            getEnabled(): boolean;
            setEnabled(value: boolean): DetachEnv;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): DetachEnv.AsObject;
            static toObject(includeInstance: boolean, msg: DetachEnv): DetachEnv.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: DetachEnv, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): DetachEnv;
            static deserializeBinaryFromReader(message: DetachEnv, reader: jspb.BinaryReader): DetachEnv;
        }

        export namespace DetachEnv {
            export type AsObject = {
                enabled: boolean,
            }
        }

        export class MCPServer extends jspb.Message { 
            getProtocol(): AppDefinition.Customization.MCPServer.Protocol;
            setProtocol(value: AppDefinition.Customization.MCPServer.Protocol): MCPServer;
            getEndpoint(): string;
            setEndpoint(value: string): MCPServer;

            hasAuth(): boolean;
            clearAuth(): void;
            getAuth(): AppDefinition.Customization.MCPServer.Auth | undefined;
            setAuth(value?: AppDefinition.Customization.MCPServer.Auth): MCPServer;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): MCPServer.AsObject;
            static toObject(includeInstance: boolean, msg: MCPServer): MCPServer.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: MCPServer, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): MCPServer;
            static deserializeBinaryFromReader(message: MCPServer, reader: jspb.BinaryReader): MCPServer;
        }

        export namespace MCPServer {
            export type AsObject = {
                protocol: AppDefinition.Customization.MCPServer.Protocol,
                endpoint: string,
                auth?: AppDefinition.Customization.MCPServer.Auth.AsObject,
            }


            export class Auth extends jspb.Message { 

                hasToken(): boolean;
                clearToken(): void;
                getToken(): AppDefinition.Customization.MCPServer.Auth.Token | undefined;
                setToken(value?: AppDefinition.Customization.MCPServer.Auth.Token): Auth;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Auth.AsObject;
                static toObject(includeInstance: boolean, msg: Auth): Auth.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Auth, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Auth;
                static deserializeBinaryFromReader(message: Auth, reader: jspb.BinaryReader): Auth;
            }

            export namespace Auth {
                export type AsObject = {
                    token?: AppDefinition.Customization.MCPServer.Auth.Token.AsObject,
                }


                export class Login extends jspb.Message { 
                    getName(): string;
                    setName(value: string): Login;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): Login.AsObject;
                    static toObject(includeInstance: boolean, msg: Login): Login.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: Login, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): Login;
                    static deserializeBinaryFromReader(message: Login, reader: jspb.BinaryReader): Login;
                }

                export namespace Login {
                    export type AsObject = {
                        name: string,
                    }
                }

                export class Secret extends jspb.Message { 
                    getName(): string;
                    setName(value: string): Secret;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): Secret.AsObject;
                    static toObject(includeInstance: boolean, msg: Secret): Secret.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: Secret, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): Secret;
                    static deserializeBinaryFromReader(message: Secret, reader: jspb.BinaryReader): Secret;
                }

                export namespace Secret {
                    export type AsObject = {
                        name: string,
                    }
                }

                export class Token extends jspb.Message { 
                    getType(): string;
                    setType(value: string): Token;
                    getHeader(): string;
                    setHeader(value: string): Token;

                    hasLogin(): boolean;
                    clearLogin(): void;
                    getLogin(): AppDefinition.Customization.MCPServer.Auth.Login | undefined;
                    setLogin(value?: AppDefinition.Customization.MCPServer.Auth.Login): Token;

                    hasSecret(): boolean;
                    clearSecret(): void;
                    getSecret(): AppDefinition.Customization.MCPServer.Auth.Secret | undefined;
                    setSecret(value?: AppDefinition.Customization.MCPServer.Auth.Secret): Token;

                    getSourceCase(): Token.SourceCase;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): Token.AsObject;
                    static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): Token;
                    static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
                }

                export namespace Token {
                    export type AsObject = {
                        type: string,
                        header: string,
                        login?: AppDefinition.Customization.MCPServer.Auth.Login.AsObject,
                        secret?: AppDefinition.Customization.MCPServer.Auth.Secret.AsObject,
                    }

                    export enum SourceCase {
                        SOURCE_NOT_SET = 0,
                        LOGIN = 3,
                        SECRET = 4,
                    }

                }

            }


            export enum Protocol {
    AUTO = 0,
    SSE = 1,
    STREAM = 2,
            }

        }

        export class LLMAgent extends jspb.Message { 
            getName(): string;
            setName(value: string): LLMAgent;
            getBrief(): string;
            setBrief(value: string): LLMAgent;
            getDetails(): string;
            setDetails(value: string): LLMAgent;

            hasExec(): boolean;
            clearExec(): void;
            getExec(): AppDefinition.Customization.LLMAgent.Exec | undefined;
            setExec(value?: AppDefinition.Customization.LLMAgent.Exec): LLMAgent;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): LLMAgent.AsObject;
            static toObject(includeInstance: boolean, msg: LLMAgent): LLMAgent.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: LLMAgent, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): LLMAgent;
            static deserializeBinaryFromReader(message: LLMAgent, reader: jspb.BinaryReader): LLMAgent;
        }

        export namespace LLMAgent {
            export type AsObject = {
                name: string,
                brief: string,
                details: string,
                exec?: AppDefinition.Customization.LLMAgent.Exec.AsObject,
            }


            export class Exec extends jspb.Message { 
                getWorkload(): string;
                setWorkload(value: string): Exec;

                hasRun(): boolean;
                clearRun(): void;
                getRun(): sandboxes_api_v1_repo_pb.Repo.Run | undefined;
                setRun(value?: sandboxes_api_v1_repo_pb.Repo.Run): Exec;
                getEventFormat(): AppDefinition.Customization.LLMAgent.Exec.EventFormat;
                setEventFormat(value: AppDefinition.Customization.LLMAgent.Exec.EventFormat): Exec;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Exec.AsObject;
                static toObject(includeInstance: boolean, msg: Exec): Exec.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Exec, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Exec;
                static deserializeBinaryFromReader(message: Exec, reader: jspb.BinaryReader): Exec;
            }

            export namespace Exec {
                export type AsObject = {
                    workload: string,
                    run?: sandboxes_api_v1_repo_pb.Repo.Run.AsObject,
                    eventFormat: AppDefinition.Customization.LLMAgent.Exec.EventFormat,
                }

                export enum EventFormat {
    DEFAULT = 0,
    CLAUDE_CODE = 1,
                }

            }

        }


        export enum RuleCase {
            RULE_NOT_SET = 0,
            ENV = 1,
            KUBERNETES = 2,
            PROPERTY_SET = 3,
            FLAVOR = 4,
            SETTINGS = 5,
            LOCKDOWN = 6,
            DETACH_ENV = 7,
            MCP_SERVER = 8,
            LLM_AGENT = 9,
        }

    }

}

export class ExecHandler extends jspb.Message { 
    getMaxRetries(): number;
    setMaxRetries(value: number): ExecHandler;

    hasTimeout(): boolean;
    clearTimeout(): void;
    getTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setTimeout(value?: google_protobuf_duration_pb.Duration): ExecHandler;
    getSaveState(): boolean;
    setSaveState(value: boolean): ExecHandler;

    hasUseWorkspace(): boolean;
    clearUseWorkspace(): void;
    getUseWorkspace(): ExecHandler.UseWorkspace | undefined;
    setUseWorkspace(value?: ExecHandler.UseWorkspace): ExecHandler;

    getTargetCase(): ExecHandler.TargetCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecHandler.AsObject;
    static toObject(includeInstance: boolean, msg: ExecHandler): ExecHandler.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecHandler, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecHandler;
    static deserializeBinaryFromReader(message: ExecHandler, reader: jspb.BinaryReader): ExecHandler;
}

export namespace ExecHandler {
    export type AsObject = {
        maxRetries: number,
        timeout?: google_protobuf_duration_pb.Duration.AsObject,
        saveState: boolean,
        useWorkspace?: ExecHandler.UseWorkspace.AsObject,
    }


    export class UseWorkspace extends jspb.Message { 
        getName(): string;
        setName(value: string): UseWorkspace;

        hasRun(): boolean;
        clearRun(): void;
        getRun(): sandboxes_api_v1_repo_pb.Repo.Run | undefined;
        setRun(value?: sandboxes_api_v1_repo_pb.Repo.Run): UseWorkspace;
        getRequireBuild(): boolean;
        setRequireBuild(value: boolean): UseWorkspace;
        clearArtifactsList(): void;
        getArtifactsList(): Array<string>;
        setArtifactsList(value: Array<string>): UseWorkspace;
        addArtifacts(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): UseWorkspace.AsObject;
        static toObject(includeInstance: boolean, msg: UseWorkspace): UseWorkspace.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: UseWorkspace, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): UseWorkspace;
        static deserializeBinaryFromReader(message: UseWorkspace, reader: jspb.BinaryReader): UseWorkspace;
    }

    export namespace UseWorkspace {
        export type AsObject = {
            name: string,
            run?: sandboxes_api_v1_repo_pb.Repo.Run.AsObject,
            requireBuild: boolean,
            artifactsList: Array<string>,
        }
    }


    export enum TargetCase {
        TARGET_NOT_SET = 0,
        USE_WORKSPACE = 10,
    }

}

export class Volume extends jspb.Message { 
    getName(): string;
    setName(value: string): Volume;
    getDescription(): string;
    setDescription(value: string): Volume;

    hasContent(): boolean;
    clearContent(): void;
    getContent(): Volume.Content | undefined;
    setContent(value?: Volume.Content): Volume;

    hasSecret(): boolean;
    clearSecret(): void;
    getSecret(): Volume.Secret | undefined;
    setSecret(value?: Volume.Secret): Volume;

    hasWorkload(): boolean;
    clearWorkload(): void;
    getWorkload(): Volume.Workload | undefined;
    setWorkload(value?: Volume.Workload): Volume;

    getFromCase(): Volume.FromCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Volume.AsObject;
    static toObject(includeInstance: boolean, msg: Volume): Volume.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Volume, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Volume;
    static deserializeBinaryFromReader(message: Volume, reader: jspb.BinaryReader): Volume;
}

export namespace Volume {
    export type AsObject = {
        name: string,
        description: string,
        content?: Volume.Content.AsObject,
        secret?: Volume.Secret.AsObject,
        workload?: Volume.Workload.AsObject,
    }


    export class Content extends jspb.Message { 

        hasText(): boolean;
        clearText(): void;
        getText(): string;
        setText(value: string): Content;

        hasBinary(): boolean;
        clearBinary(): void;
        getBinary(): Uint8Array | string;
        getBinary_asU8(): Uint8Array;
        getBinary_asB64(): string;
        setBinary(value: Uint8Array | string): Content;

        getDataCase(): Content.DataCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Content.AsObject;
        static toObject(includeInstance: boolean, msg: Content): Content.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Content, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Content;
        static deserializeBinaryFromReader(message: Content, reader: jspb.BinaryReader): Content;
    }

    export namespace Content {
        export type AsObject = {
            text: string,
            binary: Uint8Array | string,
        }

        export enum DataCase {
            DATA_NOT_SET = 0,
            TEXT = 1,
            BINARY = 2,
        }

    }

    export class Secret extends jspb.Message { 
        getName(): string;
        setName(value: string): Secret;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Secret.AsObject;
        static toObject(includeInstance: boolean, msg: Secret): Secret.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Secret, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Secret;
        static deserializeBinaryFromReader(message: Secret, reader: jspb.BinaryReader): Secret;
    }

    export namespace Secret {
        export type AsObject = {
            name: string,
        }
    }

    export class Workload extends jspb.Message { 
        getName(): string;
        setName(value: string): Workload;
        getPrefix(): string;
        setPrefix(value: string): Workload;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Workload.AsObject;
        static toObject(includeInstance: boolean, msg: Workload): Workload.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Workload, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Workload;
        static deserializeBinaryFromReader(message: Workload, reader: jspb.BinaryReader): Workload;
    }

    export namespace Workload {
        export type AsObject = {
            name: string,
            prefix: string,
        }
    }


    export enum FromCase {
        FROM_NOT_SET = 0,
        CONTENT = 11,
        SECRET = 12,
        WORKLOAD = 13,
    }

}

export class UserContext extends jspb.Message { 

    hasUid(): boolean;
    clearUid(): void;
    getUid(): number;
    setUid(value: number): UserContext;

    hasUser(): boolean;
    clearUser(): void;
    getUser(): string;
    setUser(value: string): UserContext;

    hasGid(): boolean;
    clearGid(): void;
    getGid(): number;
    setGid(value: number): UserContext;

    hasGroup(): boolean;
    clearGroup(): void;
    getGroup(): string;
    setGroup(value: string): UserContext;

    getUserSpecCase(): UserContext.UserSpecCase;
    getGroupSpecCase(): UserContext.GroupSpecCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserContext.AsObject;
    static toObject(includeInstance: boolean, msg: UserContext): UserContext.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserContext, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserContext;
    static deserializeBinaryFromReader(message: UserContext, reader: jspb.BinaryReader): UserContext;
}

export namespace UserContext {
    export type AsObject = {
        uid: number,
        user: string,
        gid: number,
        group: string,
    }

    export enum UserSpecCase {
        USER_SPEC_NOT_SET = 0,
        UID = 1,
        USER = 2,
    }

    export enum GroupSpecCase {
        GROUP_SPEC_NOT_SET = 0,
        GID = 3,
        GROUP = 4,
    }

}

export class VolumeMount extends jspb.Message { 
    getName(): string;
    setName(value: string): VolumeMount;
    getPath(): string;
    setPath(value: string): VolumeMount;
    getSubPath(): string;
    setSubPath(value: string): VolumeMount;

    hasFrom(): boolean;
    clearFrom(): void;
    getFrom(): VolumeMount.VolumeFrom | undefined;
    setFrom(value?: VolumeMount.VolumeFrom): VolumeMount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeMount.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeMount): VolumeMount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeMount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeMount;
    static deserializeBinaryFromReader(message: VolumeMount, reader: jspb.BinaryReader): VolumeMount;
}

export namespace VolumeMount {
    export type AsObject = {
        name: string,
        path: string,
        subPath: string,
        from?: VolumeMount.VolumeFrom.AsObject,
    }


    export class VolumeFrom extends jspb.Message { 

        hasVolumeName(): boolean;
        clearVolumeName(): void;
        getVolumeName(): string;
        setVolumeName(value: string): VolumeFrom;

        hasVolume(): boolean;
        clearVolume(): void;
        getVolume(): Volume | undefined;
        setVolume(value?: Volume): VolumeFrom;

        getFromCase(): VolumeFrom.FromCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): VolumeFrom.AsObject;
        static toObject(includeInstance: boolean, msg: VolumeFrom): VolumeFrom.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: VolumeFrom, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): VolumeFrom;
        static deserializeBinaryFromReader(message: VolumeFrom, reader: jspb.BinaryReader): VolumeFrom;
    }

    export namespace VolumeFrom {
        export type AsObject = {
            volumeName: string,
            volume?: Volume.AsObject,
        }

        export enum FromCase {
            FROM_NOT_SET = 0,
            VOLUME_NAME = 1,
            VOLUME = 2,
        }

    }

}

export class Probe extends jspb.Message { 
    getName(): string;
    setName(value: string): Probe;

    hasInterval(): boolean;
    clearInterval(): void;
    getInterval(): google_protobuf_duration_pb.Duration | undefined;
    setInterval(value?: google_protobuf_duration_pb.Duration): Probe;
    getPositiveThreshold(): number;
    setPositiveThreshold(value: number): Probe;
    getNegativeThreshold(): number;
    setNegativeThreshold(value: number): Probe;

    hasInitialDelay(): boolean;
    clearInitialDelay(): void;
    getInitialDelay(): google_protobuf_duration_pb.Duration | undefined;
    setInitialDelay(value?: google_protobuf_duration_pb.Duration): Probe;
    getInitialNegativeThreshold(): number;
    setInitialNegativeThreshold(value: number): Probe;

    hasCommand(): boolean;
    clearCommand(): void;
    getCommand(): string;
    setCommand(value: string): Probe;

    hasTcpPort(): boolean;
    clearTcpPort(): void;
    getTcpPort(): number;
    setTcpPort(value: number): Probe;

    hasHttpGet(): boolean;
    clearHttpGet(): void;
    getHttpGet(): Probe.HttpGet | undefined;
    setHttpGet(value?: Probe.HttpGet): Probe;

    getActionCase(): Probe.ActionCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Probe.AsObject;
    static toObject(includeInstance: boolean, msg: Probe): Probe.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Probe, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Probe;
    static deserializeBinaryFromReader(message: Probe, reader: jspb.BinaryReader): Probe;
}

export namespace Probe {
    export type AsObject = {
        name: string,
        interval?: google_protobuf_duration_pb.Duration.AsObject,
        positiveThreshold: number,
        negativeThreshold: number,
        initialDelay?: google_protobuf_duration_pb.Duration.AsObject,
        initialNegativeThreshold: number,
        command: string,
        tcpPort: number,
        httpGet?: Probe.HttpGet.AsObject,
    }


    export class HttpGet extends jspb.Message { 
        getPort(): number;
        setPort(value: number): HttpGet;
        getPath(): string;
        setPath(value: string): HttpGet;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): HttpGet.AsObject;
        static toObject(includeInstance: boolean, msg: HttpGet): HttpGet.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: HttpGet, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): HttpGet;
        static deserializeBinaryFromReader(message: HttpGet, reader: jspb.BinaryReader): HttpGet;
    }

    export namespace HttpGet {
        export type AsObject = {
            port: number,
            path: string,
        }
    }


    export enum ActionCase {
        ACTION_NOT_SET = 0,
        COMMAND = 10,
        TCP_PORT = 11,
        HTTP_GET = 12,
    }

}

export class ServiceProbes extends jspb.Message { 
    clearHealthList(): void;
    getHealthList(): Array<Probe>;
    setHealthList(value: Array<Probe>): ServiceProbes;
    addHealth(value?: Probe, index?: number): Probe;
    clearReadinessList(): void;
    getReadinessList(): Array<Probe>;
    setReadinessList(value: Array<Probe>): ServiceProbes;
    addReadiness(value?: Probe, index?: number): Probe;
    clearActivityList(): void;
    getActivityList(): Array<Probe>;
    setActivityList(value: Array<Probe>): ServiceProbes;
    addActivity(value?: Probe, index?: number): Probe;

    hasActivityDetection(): boolean;
    clearActivityDetection(): void;
    getActivityDetection(): ServiceProbes.ActivityDetection | undefined;
    setActivityDetection(value?: ServiceProbes.ActivityDetection): ServiceProbes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProbes.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProbes): ServiceProbes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProbes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProbes;
    static deserializeBinaryFromReader(message: ServiceProbes, reader: jspb.BinaryReader): ServiceProbes;
}

export namespace ServiceProbes {
    export type AsObject = {
        healthList: Array<Probe.AsObject>,
        readinessList: Array<Probe.AsObject>,
        activityList: Array<Probe.AsObject>,
        activityDetection?: ServiceProbes.ActivityDetection.AsObject,
    }


    export class ActivityDetection extends jspb.Message { 
        clearDisableBuiltinProbesList(): void;
        getDisableBuiltinProbesList(): Array<UserActivity.SessionType>;
        setDisableBuiltinProbesList(value: Array<UserActivity.SessionType>): ActivityDetection;
        addDisableBuiltinProbes(value: UserActivity.SessionType, index?: number): UserActivity.SessionType;
        clearEnableBuiltinProbesList(): void;
        getEnableBuiltinProbesList(): Array<UserActivity.SessionType>;
        setEnableBuiltinProbesList(value: Array<UserActivity.SessionType>): ActivityDetection;
        addEnableBuiltinProbes(value: UserActivity.SessionType, index?: number): UserActivity.SessionType;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ActivityDetection.AsObject;
        static toObject(includeInstance: boolean, msg: ActivityDetection): ActivityDetection.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ActivityDetection, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ActivityDetection;
        static deserializeBinaryFromReader(message: ActivityDetection, reader: jspb.BinaryReader): ActivityDetection;
    }

    export namespace ActivityDetection {
        export type AsObject = {
            disableBuiltinProbesList: Array<UserActivity.SessionType>,
            enableBuiltinProbesList: Array<UserActivity.SessionType>,
        }
    }

}

export class UserActivity extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserActivity.AsObject;
    static toObject(includeInstance: boolean, msg: UserActivity): UserActivity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserActivity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserActivity;
    static deserializeBinaryFromReader(message: UserActivity, reader: jspb.BinaryReader): UserActivity;
}

export namespace UserActivity {
    export type AsObject = {
    }

    export enum SessionType {
    ANY = 0,
    SSH = 1,
    PORT_FORWARD = 2,
    EXEC = 3,
    CLIENT = 4,
    WEB_TERMINAL = 5,
    WEB_IDE = 6,
    RDP = 7,
    JETBRAINS = 8,
    ENDPOINT = 9,
    AGENT = 10,
    }

}

export class Checkout extends jspb.Message { 
    getPath(): string;
    setPath(value: string): Checkout;

    hasRepo(): boolean;
    clearRepo(): void;
    getRepo(): Checkout.Repo | undefined;
    setRepo(value?: Checkout.Repo): Checkout;
    getVersionSpec(): string;
    setVersionSpec(value: string): Checkout;

    hasManifest(): boolean;
    clearManifest(): void;
    getManifest(): Checkout.Manifest | undefined;
    setManifest(value?: Checkout.Manifest): Checkout;
    getRecursive(): boolean;
    setRecursive(value: boolean): Checkout;
    getTemplate(): string;
    setTemplate(value: string): Checkout;
    getDisableRecursiveCheckout(): boolean;
    setDisableRecursiveCheckout(value: boolean): Checkout;

    hasHistory(): boolean;
    clearHistory(): void;
    getHistory(): Checkout.History | undefined;
    setHistory(value?: Checkout.History): Checkout;

    hasPrebuild(): boolean;
    clearPrebuild(): void;
    getPrebuild(): Checkout.Prebuild | undefined;
    setPrebuild(value?: Checkout.Prebuild): Checkout;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Checkout.AsObject;
    static toObject(includeInstance: boolean, msg: Checkout): Checkout.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Checkout, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Checkout;
    static deserializeBinaryFromReader(message: Checkout, reader: jspb.BinaryReader): Checkout;
}

export namespace Checkout {
    export type AsObject = {
        path: string,
        repo?: Checkout.Repo.AsObject,
        versionSpec: string,
        manifest?: Checkout.Manifest.AsObject,
        recursive: boolean,
        template: string,
        disableRecursiveCheckout: boolean,
        history?: Checkout.History.AsObject,
        prebuild?: Checkout.Prebuild.AsObject,
    }


    export class Repo extends jspb.Message { 

        hasGit(): boolean;
        clearGit(): void;
        getGit(): string;
        setGit(value: string): Repo;

        hasGithub(): boolean;
        clearGithub(): void;
        getGithub(): Checkout.Repo.GitHub | undefined;
        setGithub(value?: Checkout.Repo.GitHub): Repo;

        getRepoCase(): Repo.RepoCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Repo.AsObject;
        static toObject(includeInstance: boolean, msg: Repo): Repo.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Repo, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Repo;
        static deserializeBinaryFromReader(message: Repo, reader: jspb.BinaryReader): Repo;
    }

    export namespace Repo {
        export type AsObject = {
            git: string,
            github?: Checkout.Repo.GitHub.AsObject,
        }


        export class GitHub extends jspb.Message { 
            getOrg(): string;
            setOrg(value: string): GitHub;
            getRepo(): string;
            setRepo(value: string): GitHub;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): GitHub.AsObject;
            static toObject(includeInstance: boolean, msg: GitHub): GitHub.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: GitHub, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): GitHub;
            static deserializeBinaryFromReader(message: GitHub, reader: jspb.BinaryReader): GitHub;
        }

        export namespace GitHub {
            export type AsObject = {
                org: string,
                repo: string,
            }
        }


        export enum RepoCase {
            REPO_NOT_SET = 0,
            GIT = 1,
            GITHUB = 2,
        }

    }

    export class Manifest extends jspb.Message { 
        getOverride(): string;
        setOverride(value: string): Manifest;
        clearOverlaysList(): void;
        getOverlaysList(): Array<Checkout.Manifest.Overlay>;
        setOverlaysList(value: Array<Checkout.Manifest.Overlay>): Manifest;
        addOverlays(value?: Checkout.Manifest.Overlay, index?: number): Checkout.Manifest.Overlay;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Manifest.AsObject;
        static toObject(includeInstance: boolean, msg: Manifest): Manifest.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Manifest, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Manifest;
        static deserializeBinaryFromReader(message: Manifest, reader: jspb.BinaryReader): Manifest;
    }

    export namespace Manifest {
        export type AsObject = {
            override: string,
            overlaysList: Array<Checkout.Manifest.Overlay.AsObject>,
        }


        export class Overlay extends jspb.Message { 
            getName(): string;
            setName(value: string): Overlay;
            getOptional(): boolean;
            setOptional(value: boolean): Overlay;

            hasFile(): boolean;
            clearFile(): void;
            getFile(): string;
            setFile(value: string): Overlay;

            hasContent(): boolean;
            clearContent(): void;
            getContent(): string;
            setContent(value: string): Overlay;

            hasInline(): boolean;
            clearInline(): void;
            getInline(): sandboxes_api_v1_repo_pb.Repo.Manifest | undefined;
            setInline(value?: sandboxes_api_v1_repo_pb.Repo.Manifest): Overlay;

            getSourceCase(): Overlay.SourceCase;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Overlay.AsObject;
            static toObject(includeInstance: boolean, msg: Overlay): Overlay.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Overlay, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Overlay;
            static deserializeBinaryFromReader(message: Overlay, reader: jspb.BinaryReader): Overlay;
        }

        export namespace Overlay {
            export type AsObject = {
                name: string,
                optional: boolean,
                file: string,
                content: string,
                inline?: sandboxes_api_v1_repo_pb.Repo.Manifest.AsObject,
            }

            export enum SourceCase {
                SOURCE_NOT_SET = 0,
                FILE = 3,
                CONTENT = 4,
                INLINE = 5,
            }

        }

    }

    export class History extends jspb.Message { 
        getDepth(): number;
        setDepth(value: number): History;
        getSince(): string;
        setSince(value: string): History;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): History.AsObject;
        static toObject(includeInstance: boolean, msg: History): History.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: History, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): History;
        static deserializeBinaryFromReader(message: History, reader: jspb.BinaryReader): History;
    }

    export namespace History {
        export type AsObject = {
            depth: number,
            since: string,
        }
    }

    export class Prebuild extends jspb.Message { 
        getDisabled(): boolean;
        setDisabled(value: boolean): Prebuild;
        clearScopesList(): void;
        getScopesList(): Array<string>;
        setScopesList(value: Array<string>): Prebuild;
        addScopes(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Prebuild.AsObject;
        static toObject(includeInstance: boolean, msg: Prebuild): Prebuild.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Prebuild, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Prebuild;
        static deserializeBinaryFromReader(message: Prebuild, reader: jspb.BinaryReader): Prebuild;
    }

    export namespace Prebuild {
        export type AsObject = {
            disabled: boolean,
            scopesList: Array<string>,
        }
    }

}

export class GlobalProcess extends jspb.Message { 
    getName(): string;
    setName(value: string): GlobalProcess;

    hasRun(): boolean;
    clearRun(): void;
    getRun(): sandboxes_api_v1_repo_pb.Repo.Run | undefined;
    setRun(value?: sandboxes_api_v1_repo_pb.Repo.Run): GlobalProcess;

    hasSpec(): boolean;
    clearSpec(): void;
    getSpec(): sandboxes_api_v1_process_pb.Process.Spec | undefined;
    setSpec(value?: sandboxes_api_v1_process_pb.Process.Spec): GlobalProcess;

    getProcessCase(): GlobalProcess.ProcessCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GlobalProcess.AsObject;
    static toObject(includeInstance: boolean, msg: GlobalProcess): GlobalProcess.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GlobalProcess, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GlobalProcess;
    static deserializeBinaryFromReader(message: GlobalProcess, reader: jspb.BinaryReader): GlobalProcess;
}

export namespace GlobalProcess {
    export type AsObject = {
        name: string,
        run?: sandboxes_api_v1_repo_pb.Repo.Run.AsObject,
        spec?: sandboxes_api_v1_process_pb.Process.Spec.AsObject,
    }

    export enum ProcessCase {
        PROCESS_NOT_SET = 0,
        RUN = 2,
        SPEC = 3,
    }

}

export class SetupFile extends jspb.Message { 
    getPath(): string;
    setPath(value: string): SetupFile;
    getOwner(): string;
    setOwner(value: string): SetupFile;
    getMode(): string;
    setMode(value: string): SetupFile;
    getOverwrite(): boolean;
    setOverwrite(value: boolean): SetupFile;

    hasContent(): boolean;
    clearContent(): void;
    getContent(): string;
    setContent(value: string): SetupFile;

    hasTemplate(): boolean;
    clearTemplate(): void;
    getTemplate(): string;
    setTemplate(value: string): SetupFile;

    hasSymlink(): boolean;
    clearSymlink(): void;
    getSymlink(): string;
    setSymlink(value: string): SetupFile;

    hasSecret(): boolean;
    clearSecret(): void;
    getSecret(): SetupFile.Secret | undefined;
    setSecret(value?: SetupFile.Secret): SetupFile;

    getDataCase(): SetupFile.DataCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetupFile.AsObject;
    static toObject(includeInstance: boolean, msg: SetupFile): SetupFile.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetupFile, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetupFile;
    static deserializeBinaryFromReader(message: SetupFile, reader: jspb.BinaryReader): SetupFile;
}

export namespace SetupFile {
    export type AsObject = {
        path: string,
        owner: string,
        mode: string,
        overwrite: boolean,
        content: string,
        template: string,
        symlink: string,
        secret?: SetupFile.Secret.AsObject,
    }


    export class Secret extends jspb.Message { 
        getName(): string;
        setName(value: string): Secret;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Secret.AsObject;
        static toObject(includeInstance: boolean, msg: Secret): Secret.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Secret, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Secret;
        static deserializeBinaryFromReader(message: Secret, reader: jspb.BinaryReader): Secret;
    }

    export namespace Secret {
        export type AsObject = {
            name: string,
        }
    }


    export enum DataCase {
        DATA_NOT_SET = 0,
        CONTENT = 5,
        TEMPLATE = 6,
        SYMLINK = 7,
        SECRET = 8,
    }

}

export class ToolPackageSpec extends jspb.Message { 
    getName(): string;
    setName(value: string): ToolPackageSpec;
    getVersion(): string;
    setVersion(value: string): ToolPackageSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ToolPackageSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ToolPackageSpec): ToolPackageSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ToolPackageSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ToolPackageSpec;
    static deserializeBinaryFromReader(message: ToolPackageSpec, reader: jspb.BinaryReader): ToolPackageSpec;
}

export namespace ToolPackageSpec {
    export type AsObject = {
        name: string,
        version: string,
    }
}

export class PortForwardRule extends jspb.Message { 
    getLocal(): string;
    setLocal(value: string): PortForwardRule;

    hasRemote(): boolean;
    clearRemote(): void;
    getRemote(): sandboxes_api_v1_endpoint_pb.TargetPort | undefined;
    setRemote(value?: sandboxes_api_v1_endpoint_pb.TargetPort): PortForwardRule;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PortForwardRule.AsObject;
    static toObject(includeInstance: boolean, msg: PortForwardRule): PortForwardRule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PortForwardRule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PortForwardRule;
    static deserializeBinaryFromReader(message: PortForwardRule, reader: jspb.BinaryReader): PortForwardRule;
}

export namespace PortForwardRule {
    export type AsObject = {
        local: string,
        remote?: sandboxes_api_v1_endpoint_pb.TargetPort.AsObject,
    }
}

export class Scheduler extends jspb.Message { 
    getSelector(): string;
    setSelector(value: string): Scheduler;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): google_protobuf_any_pb.Any | undefined;
    setConfig(value?: google_protobuf_any_pb.Any): Scheduler;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Scheduler.AsObject;
    static toObject(includeInstance: boolean, msg: Scheduler): Scheduler.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Scheduler, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Scheduler;
    static deserializeBinaryFromReader(message: Scheduler, reader: jspb.BinaryReader): Scheduler;
}

export namespace Scheduler {
    export type AsObject = {
        selector: string,
        config?: google_protobuf_any_pb.Any.AsObject,
    }
}

export class ScheduleSpec extends jspb.Message { 

    hasSelector(): boolean;
    clearSelector(): void;
    getSelector(): ScheduleSpec.PoolSelector | undefined;
    setSelector(value?: ScheduleSpec.PoolSelector): ScheduleSpec;
    clearResourceRequestsList(): void;
    getResourceRequestsList(): Array<ScheduleSpec.ResourceRequest>;
    setResourceRequestsList(value: Array<ScheduleSpec.ResourceRequest>): ScheduleSpec;
    addResourceRequests(value?: ScheduleSpec.ResourceRequest, index?: number): ScheduleSpec.ResourceRequest;

    hasScheduler(): boolean;
    clearScheduler(): void;
    getScheduler(): Scheduler | undefined;
    setScheduler(value?: Scheduler): ScheduleSpec;

    hasStorage(): boolean;
    clearStorage(): void;
    getStorage(): ScheduleSpec.Storage | undefined;
    setStorage(value?: ScheduleSpec.Storage): ScheduleSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScheduleSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ScheduleSpec): ScheduleSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScheduleSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScheduleSpec;
    static deserializeBinaryFromReader(message: ScheduleSpec, reader: jspb.BinaryReader): ScheduleSpec;
}

export namespace ScheduleSpec {
    export type AsObject = {
        selector?: ScheduleSpec.PoolSelector.AsObject,
        resourceRequestsList: Array<ScheduleSpec.ResourceRequest.AsObject>,
        scheduler?: Scheduler.AsObject,
        storage?: ScheduleSpec.Storage.AsObject,
    }


    export class PoolSelector extends jspb.Message { 

        hasName(): boolean;
        clearName(): void;
        getName(): string;
        setName(value: string): PoolSelector;

        getMatcherCase(): PoolSelector.MatcherCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): PoolSelector.AsObject;
        static toObject(includeInstance: boolean, msg: PoolSelector): PoolSelector.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: PoolSelector, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): PoolSelector;
        static deserializeBinaryFromReader(message: PoolSelector, reader: jspb.BinaryReader): PoolSelector;
    }

    export namespace PoolSelector {
        export type AsObject = {
            name: string,
        }

        export enum MatcherCase {
            MATCHER_NOT_SET = 0,
            NAME = 1,
        }

    }

    export class ResourceRequest extends jspb.Message { 
        getResourceType(): string;
        setResourceType(value: string): ResourceRequest;
        getRequest(): string;
        setRequest(value: string): ResourceRequest;
        getLimit(): string;
        setLimit(value: string): ResourceRequest;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ResourceRequest.AsObject;
        static toObject(includeInstance: boolean, msg: ResourceRequest): ResourceRequest.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ResourceRequest, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ResourceRequest;
        static deserializeBinaryFromReader(message: ResourceRequest, reader: jspb.BinaryReader): ResourceRequest;
    }

    export namespace ResourceRequest {
        export type AsObject = {
            resourceType: string,
            request: string,
            limit: string,
        }
    }

    export class Storage extends jspb.Message { 
        getStorageClass(): string;
        setStorageClass(value: string): Storage;
        getRequestSizeGb(): number;
        setRequestSizeGb(value: number): Storage;
        getLimitSizeGb(): number;
        setLimitSizeGb(value: number): Storage;

        hasLocalDisk(): boolean;
        clearLocalDisk(): void;
        getLocalDisk(): ScheduleSpec.Storage.LocalDisk | undefined;
        setLocalDisk(value?: ScheduleSpec.Storage.LocalDisk): Storage;

        hasEngine(): boolean;
        clearEngine(): void;
        getEngine(): ScheduleSpec.Storage.Engine | undefined;
        setEngine(value?: ScheduleSpec.Storage.Engine): Storage;

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
            storageClass: string,
            requestSizeGb: number,
            limitSizeGb: number,
            localDisk?: ScheduleSpec.Storage.LocalDisk.AsObject,
            engine?: ScheduleSpec.Storage.Engine.AsObject,
        }


        export class LocalDisk extends jspb.Message { 
            getMountPoint(): string;
            setMountPoint(value: string): LocalDisk;
            getFallbackEmptyDir(): boolean;
            setFallbackEmptyDir(value: boolean): LocalDisk;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): LocalDisk.AsObject;
            static toObject(includeInstance: boolean, msg: LocalDisk): LocalDisk.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: LocalDisk, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): LocalDisk;
            static deserializeBinaryFromReader(message: LocalDisk, reader: jspb.BinaryReader): LocalDisk;
        }

        export namespace LocalDisk {
            export type AsObject = {
                mountPoint: string,
                fallbackEmptyDir: boolean,
            }
        }

        export class Engine extends jspb.Message { 

            hasFile(): boolean;
            clearFile(): void;
            getFile(): ScheduleSpec.Storage.Engine.File | undefined;
            setFile(value?: ScheduleSpec.Storage.Engine.File): Engine;

            getBackendCase(): Engine.BackendCase;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Engine.AsObject;
            static toObject(includeInstance: boolean, msg: Engine): Engine.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Engine, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Engine;
            static deserializeBinaryFromReader(message: Engine, reader: jspb.BinaryReader): Engine;
        }

        export namespace Engine {
            export type AsObject = {
                file?: ScheduleSpec.Storage.Engine.File.AsObject,
            }


            export class File extends jspb.Message { 
                getServer(): string;
                setServer(value: string): File;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): File.AsObject;
                static toObject(includeInstance: boolean, msg: File): File.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: File, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): File;
                static deserializeBinaryFromReader(message: File, reader: jspb.BinaryReader): File;
            }

            export namespace File {
                export type AsObject = {
                    server: string,
                }
            }


            export enum BackendCase {
                BACKEND_NOT_SET = 0,
                FILE = 1,
            }

        }

    }

}
