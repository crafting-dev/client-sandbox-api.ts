// package: sandboxes.api.v1
// file: sandboxes/api/v1/sandbox.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as sandboxes_api_v1_common_pb from "../../../sandboxes/api/v1/common_pb";
import * as sandboxes_api_v1_object_pb from "../../../sandboxes/api/v1/object_pb";
import * as sandboxes_api_v1_app_pb from "../../../sandboxes/api/v1/app_pb";
import * as sandboxes_api_v1_endpoint_pb from "../../../sandboxes/api/v1/endpoint_pb";
import * as sandboxes_api_v1_process_pb from "../../../sandboxes/api/v1/process_pb";
import * as sandboxes_api_v1_system_pb from "../../../sandboxes/api/v1/system_pb";
import * as sandboxes_api_v1_notification_pb from "../../../sandboxes/api/v1/notification_pb";

export class Composer extends jspb.Message { 

    hasFromApp(): boolean;
    clearFromApp(): void;
    getFromApp(): Composer.FromApp | undefined;
    setFromApp(value?: Composer.FromApp): Composer;

    hasFromAppDefinition(): boolean;
    clearFromAppDefinition(): void;
    getFromAppDefinition(): Composer.FromAppDefinition | undefined;
    setFromAppDefinition(value?: Composer.FromAppDefinition): Composer;

    hasDynamic(): boolean;
    clearDynamic(): void;
    getDynamic(): Composer.Dynamic | undefined;
    setDynamic(value?: Composer.Dynamic): Composer;

    hasScheduler(): boolean;
    clearScheduler(): void;
    getScheduler(): sandboxes_api_v1_app_pb.Scheduler | undefined;
    setScheduler(value?: sandboxes_api_v1_app_pb.Scheduler): Composer;

    getExclusionsMap(): jspb.Map<string, Composer.Exclusion>;
    clearExclusionsMap(): void;

    getMethodCase(): Composer.MethodCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Composer.AsObject;
    static toObject(includeInstance: boolean, msg: Composer): Composer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Composer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Composer;
    static deserializeBinaryFromReader(message: Composer, reader: jspb.BinaryReader): Composer;
}

export namespace Composer {
    export type AsObject = {
        fromApp?: Composer.FromApp.AsObject,
        fromAppDefinition?: Composer.FromAppDefinition.AsObject,
        dynamic?: Composer.Dynamic.AsObject,
        scheduler?: sandboxes_api_v1_app_pb.Scheduler.AsObject,

        exclusionsMap: Array<[string, Composer.Exclusion.AsObject]>,
    }


    export class FromApp extends jspb.Message { 
        getAppId(): string;
        setAppId(value: string): FromApp;

        getOverridesMap(): jspb.Map<string, WorkloadOverrides>;
        clearOverridesMap(): void;

        getWorkloadConfigsMap(): jspb.Map<string, WorkloadConfig>;
        clearWorkloadConfigsMap(): void;

        getEndpointConfigsMap(): jspb.Map<string, EndpointConfig>;
        clearEndpointConfigsMap(): void;
        clearEnvList(): void;
        getEnvList(): Array<string>;
        setEnvList(value: Array<string>): FromApp;
        addEnv(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): FromApp.AsObject;
        static toObject(includeInstance: boolean, msg: FromApp): FromApp.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: FromApp, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): FromApp;
        static deserializeBinaryFromReader(message: FromApp, reader: jspb.BinaryReader): FromApp;
    }

    export namespace FromApp {
        export type AsObject = {
            appId: string,

            overridesMap: Array<[string, WorkloadOverrides.AsObject]>,

            workloadConfigsMap: Array<[string, WorkloadConfig.AsObject]>,

            endpointConfigsMap: Array<[string, EndpointConfig.AsObject]>,
            envList: Array<string>,
        }
    }

    export class FromAppDefinition extends jspb.Message { 

        hasAppDefinition(): boolean;
        clearAppDefinition(): void;
        getAppDefinition(): sandboxes_api_v1_app_pb.AppDefinition | undefined;
        setAppDefinition(value?: sandboxes_api_v1_app_pb.AppDefinition): FromAppDefinition;

        getWorkloadConfigsMap(): jspb.Map<string, WorkloadConfig>;
        clearWorkloadConfigsMap(): void;
        clearEnvList(): void;
        getEnvList(): Array<string>;
        setEnvList(value: Array<string>): FromAppDefinition;
        addEnv(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): FromAppDefinition.AsObject;
        static toObject(includeInstance: boolean, msg: FromAppDefinition): FromAppDefinition.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: FromAppDefinition, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): FromAppDefinition;
        static deserializeBinaryFromReader(message: FromAppDefinition, reader: jspb.BinaryReader): FromAppDefinition;
    }

    export namespace FromAppDefinition {
        export type AsObject = {
            appDefinition?: sandboxes_api_v1_app_pb.AppDefinition.AsObject,

            workloadConfigsMap: Array<[string, WorkloadConfig.AsObject]>,
            envList: Array<string>,
        }
    }

    export class Exclusion extends jspb.Message { 
        getMode(): Composer.Exclusion.Mode;
        setMode(value: Composer.Exclusion.Mode): Exclusion;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Exclusion.AsObject;
        static toObject(includeInstance: boolean, msg: Exclusion): Exclusion.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Exclusion, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Exclusion;
        static deserializeBinaryFromReader(message: Exclusion, reader: jspb.BinaryReader): Exclusion;
    }

    export namespace Exclusion {
        export type AsObject = {
            mode: Composer.Exclusion.Mode,
        }

        export enum Mode {
    UNSPECIFIED = 0,
    FULL = 1,
    DATA_PRESERVED = 2,
        }

    }

    export class Dynamic extends jspb.Message { 

        hasDefinition(): boolean;
        clearDefinition(): void;
        getDefinition(): sandboxes_api_v1_app_pb.AppDefinition | undefined;
        setDefinition(value?: sandboxes_api_v1_app_pb.AppDefinition): Dynamic;

        getWorkloadConfigsMap(): jspb.Map<string, WorkloadConfig>;
        clearWorkloadConfigsMap(): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Dynamic.AsObject;
        static toObject(includeInstance: boolean, msg: Dynamic): Dynamic.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Dynamic, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Dynamic;
        static deserializeBinaryFromReader(message: Dynamic, reader: jspb.BinaryReader): Dynamic;
    }

    export namespace Dynamic {
        export type AsObject = {
            definition?: sandboxes_api_v1_app_pb.AppDefinition.AsObject,

            workloadConfigsMap: Array<[string, WorkloadConfig.AsObject]>,
        }
    }


    export enum MethodCase {
        METHOD_NOT_SET = 0,
        FROM_APP = 1,
        FROM_APP_DEFINITION = 2,
    }

}

export class WorkloadOverrides extends jspb.Message { 
    clearRulesList(): void;
    getRulesList(): Array<WorkloadOverrides.Rule>;
    setRulesList(value: Array<WorkloadOverrides.Rule>): WorkloadOverrides;
    addRules(value?: WorkloadOverrides.Rule, index?: number): WorkloadOverrides.Rule;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorkloadOverrides.AsObject;
    static toObject(includeInstance: boolean, msg: WorkloadOverrides): WorkloadOverrides.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorkloadOverrides, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorkloadOverrides;
    static deserializeBinaryFromReader(message: WorkloadOverrides, reader: jspb.BinaryReader): WorkloadOverrides;
}

export namespace WorkloadOverrides {
    export type AsObject = {
        rulesList: Array<WorkloadOverrides.Rule.AsObject>,
    }


    export class Rule extends jspb.Message { 

        hasCheckout(): boolean;
        clearCheckout(): void;
        getCheckout(): WorkloadOverrides.Rule.Checkout | undefined;
        setCheckout(value?: WorkloadOverrides.Rule.Checkout): Rule;

        hasPackage(): boolean;
        clearPackage(): void;
        getPackage(): WorkloadOverrides.Rule.ToolPackageSpec | undefined;
        setPackage(value?: WorkloadOverrides.Rule.ToolPackageSpec): Rule;

        hasPortForwardRule(): boolean;
        clearPortForwardRule(): void;
        getPortForwardRule(): WorkloadOverrides.Rule.PortForwardRule | undefined;
        setPortForwardRule(value?: WorkloadOverrides.Rule.PortForwardRule): Rule;

        hasWorkspaceBaseSnapshot(): boolean;
        clearWorkspaceBaseSnapshot(): void;
        getWorkspaceBaseSnapshot(): string;
        setWorkspaceBaseSnapshot(value: string): Rule;

        hasWorkspaceHomeSnapshot(): boolean;
        clearWorkspaceHomeSnapshot(): void;
        getWorkspaceHomeSnapshot(): string;
        setWorkspaceHomeSnapshot(value: string): Rule;

        hasServiceVersion(): boolean;
        clearServiceVersion(): void;
        getServiceVersion(): string;
        setServiceVersion(value: string): Rule;

        hasServiceProperty(): boolean;
        clearServiceProperty(): void;
        getServiceProperty(): WorkloadOverrides.Rule.Property | undefined;
        setServiceProperty(value?: WorkloadOverrides.Rule.Property): Rule;

        hasServiceSnapshot(): boolean;
        clearServiceSnapshot(): void;
        getServiceSnapshot(): string;
        setServiceSnapshot(value: string): Rule;

        hasEnv(): boolean;
        clearEnv(): void;
        getEnv(): WorkloadOverrides.Rule.EnvVars | undefined;
        setEnv(value?: WorkloadOverrides.Rule.EnvVars): Rule;

        hasScheduleSpec(): boolean;
        clearScheduleSpec(): void;
        getScheduleSpec(): sandboxes_api_v1_app_pb.ScheduleSpec | undefined;
        setScheduleSpec(value?: sandboxes_api_v1_app_pb.ScheduleSpec): Rule;

        hasContainerSnapshot(): boolean;
        clearContainerSnapshot(): void;
        getContainerSnapshot(): string;
        setContainerSnapshot(value: string): Rule;

        getRuleCase(): Rule.RuleCase;

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
            checkout?: WorkloadOverrides.Rule.Checkout.AsObject,
            pb_package?: WorkloadOverrides.Rule.ToolPackageSpec.AsObject,
            portForwardRule?: WorkloadOverrides.Rule.PortForwardRule.AsObject,
            workspaceBaseSnapshot: string,
            workspaceHomeSnapshot: string,
            serviceVersion: string,
            serviceProperty?: WorkloadOverrides.Rule.Property.AsObject,
            serviceSnapshot: string,
            env?: WorkloadOverrides.Rule.EnvVars.AsObject,
            scheduleSpec?: sandboxes_api_v1_app_pb.ScheduleSpec.AsObject,
            containerSnapshot: string,
        }


        export class Checkout extends jspb.Message { 
            getPath(): string;
            setPath(value: string): Checkout;

            hasRepo(): boolean;
            clearRepo(): void;
            getRepo(): sandboxes_api_v1_app_pb.Checkout.Repo | undefined;
            setRepo(value?: sandboxes_api_v1_app_pb.Checkout.Repo): Checkout;
            getVersionSpec(): string;
            setVersionSpec(value: string): Checkout;

            hasManifest(): boolean;
            clearManifest(): void;
            getManifest(): sandboxes_api_v1_app_pb.Checkout.Manifest | undefined;
            setManifest(value?: sandboxes_api_v1_app_pb.Checkout.Manifest): Checkout;

            hasHistory(): boolean;
            clearHistory(): void;
            getHistory(): sandboxes_api_v1_app_pb.Checkout.History | undefined;
            setHistory(value?: sandboxes_api_v1_app_pb.Checkout.History): Checkout;

            hasPrebuild(): boolean;
            clearPrebuild(): void;
            getPrebuild(): sandboxes_api_v1_app_pb.Checkout.Prebuild | undefined;
            setPrebuild(value?: sandboxes_api_v1_app_pb.Checkout.Prebuild): Checkout;

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
                repo?: sandboxes_api_v1_app_pb.Checkout.Repo.AsObject,
                versionSpec: string,
                manifest?: sandboxes_api_v1_app_pb.Checkout.Manifest.AsObject,
                history?: sandboxes_api_v1_app_pb.Checkout.History.AsObject,
                prebuild?: sandboxes_api_v1_app_pb.Checkout.Prebuild.AsObject,
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

        export class Property extends jspb.Message { 
            getName(): string;
            setName(value: string): Property;

            hasUpdate(): boolean;
            clearUpdate(): void;
            getUpdate(): string;
            setUpdate(value: string): Property;

            hasRemove(): boolean;
            clearRemove(): void;
            getRemove(): boolean;
            setRemove(value: boolean): Property;

            getActionCase(): Property.ActionCase;

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
                update: string,
                remove: boolean,
            }

            export enum ActionCase {
                ACTION_NOT_SET = 0,
                UPDATE = 2,
                REMOVE = 3,
            }

        }

        export class EnvVars extends jspb.Message { 
            clearEnvList(): void;
            getEnvList(): Array<string>;
            setEnvList(value: Array<string>): EnvVars;
            addEnv(value: string, index?: number): string;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): EnvVars.AsObject;
            static toObject(includeInstance: boolean, msg: EnvVars): EnvVars.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: EnvVars, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): EnvVars;
            static deserializeBinaryFromReader(message: EnvVars, reader: jspb.BinaryReader): EnvVars;
        }

        export namespace EnvVars {
            export type AsObject = {
                envList: Array<string>,
            }
        }


        export enum RuleCase {
            RULE_NOT_SET = 0,
            CHECKOUT = 1,
            PACKAGE = 2,
            PORT_FORWARD_RULE = 3,
            WORKSPACE_BASE_SNAPSHOT = 4,
            WORKSPACE_HOME_SNAPSHOT = 5,
            SERVICE_VERSION = 6,
            SERVICE_PROPERTY = 7,
            SERVICE_SNAPSHOT = 8,
            ENV = 9,
            SCHEDULE_SPEC = 10,
            CONTAINER_SNAPSHOT = 11,
        }

    }

}

export class Sandbox extends jspb.Message { 

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): sandboxes_api_v1_object_pb.ObjectMeta | undefined;
    setMeta(value?: sandboxes_api_v1_object_pb.ObjectMeta): Sandbox;
    getOrgId(): string;
    setOrgId(value: string): Sandbox;

    hasComposer(): boolean;
    clearComposer(): void;
    getComposer(): Composer | undefined;
    setComposer(value?: Composer): Sandbox;

    hasApp(): boolean;
    clearApp(): void;
    getApp(): sandboxes_api_v1_app_pb.App | undefined;
    setApp(value?: sandboxes_api_v1_app_pb.App): Sandbox;

    hasSpec(): boolean;
    clearSpec(): void;
    getSpec(): Sandbox.Spec | undefined;
    setSpec(value?: Sandbox.Spec): Sandbox;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): Sandbox.Status | undefined;
    setStatus(value?: Sandbox.Status): Sandbox;

    hasActivities(): boolean;
    clearActivities(): void;
    getActivities(): Sandbox.Activities | undefined;
    setActivities(value?: Sandbox.Activities): Sandbox;
    getRegion(): string;
    setRegion(value: string): Sandbox;

    hasLifecycle(): boolean;
    clearLifecycle(): void;
    getLifecycle(): Sandbox.Lifecycle | undefined;
    setLifecycle(value?: Sandbox.Lifecycle): Sandbox;

    hasDefinition(): boolean;
    clearDefinition(): void;
    getDefinition(): sandboxes_api_v1_app_pb.AppDefinition | undefined;
    setDefinition(value?: sandboxes_api_v1_app_pb.AppDefinition): Sandbox;

    hasSnapshot(): boolean;
    clearSnapshot(): void;
    getSnapshot(): Sandbox.Snapshot | undefined;
    setSnapshot(value?: Sandbox.Snapshot): Sandbox;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Sandbox.AsObject;
    static toObject(includeInstance: boolean, msg: Sandbox): Sandbox.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Sandbox, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Sandbox;
    static deserializeBinaryFromReader(message: Sandbox, reader: jspb.BinaryReader): Sandbox;
}

export namespace Sandbox {
    export type AsObject = {
        meta?: sandboxes_api_v1_object_pb.ObjectMeta.AsObject,
        orgId: string,
        composer?: Composer.AsObject,
        app?: sandboxes_api_v1_app_pb.App.AsObject,
        spec?: Sandbox.Spec.AsObject,
        status?: Sandbox.Status.AsObject,
        activities?: Sandbox.Activities.AsObject,
        region: string,
        lifecycle?: Sandbox.Lifecycle.AsObject,
        definition?: sandboxes_api_v1_app_pb.AppDefinition.AsObject,
        snapshot?: Sandbox.Snapshot.AsObject,
    }


    export class OperationalState extends jspb.Message { 
        getState(): Sandbox.OperationalState.State;
        setState(value: Sandbox.OperationalState.State): OperationalState;

        hasAlwaysOnExpiry(): boolean;
        clearAlwaysOnExpiry(): void;
        getAlwaysOnExpiry(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setAlwaysOnExpiry(value?: google_protobuf_timestamp_pb.Timestamp): OperationalState;

        hasMissionCriticalExpiry(): boolean;
        clearMissionCriticalExpiry(): void;
        getMissionCriticalExpiry(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setMissionCriticalExpiry(value?: google_protobuf_timestamp_pb.Timestamp): OperationalState;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): OperationalState.AsObject;
        static toObject(includeInstance: boolean, msg: OperationalState): OperationalState.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: OperationalState, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): OperationalState;
        static deserializeBinaryFromReader(message: OperationalState, reader: jspb.BinaryReader): OperationalState;
    }

    export namespace OperationalState {
        export type AsObject = {
            state: Sandbox.OperationalState.State,
            alwaysOnExpiry?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            missionCriticalExpiry?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        }

        export enum State {
    UNSPECIFIED = 0,
    SUSPENDED = 1,
    ALWAYS_ON = 2,
        }

    }

    export class AccessControl extends jspb.Message { 
        getSharedMode(): Sandbox.AccessControl.SharedMode;
        setSharedMode(value: Sandbox.AccessControl.SharedMode): AccessControl;
        clearAllowedUsersList(): void;
        getAllowedUsersList(): Array<string>;
        setAllowedUsersList(value: Array<string>): AccessControl;
        addAllowedUsers(value: string, index?: number): string;
        clearSharedSecretIdsList(): void;
        getSharedSecretIdsList(): Array<string>;
        setSharedSecretIdsList(value: Array<string>): AccessControl;
        addSharedSecretIds(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AccessControl.AsObject;
        static toObject(includeInstance: boolean, msg: AccessControl): AccessControl.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AccessControl, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AccessControl;
        static deserializeBinaryFromReader(message: AccessControl, reader: jspb.BinaryReader): AccessControl;
    }

    export namespace AccessControl {
        export type AsObject = {
            sharedMode: Sandbox.AccessControl.SharedMode,
            allowedUsersList: Array<string>,
            sharedSecretIdsList: Array<string>,
        }

        export enum SharedMode {
    DEFAULT = 0,
    EXPLICIT = 1,
    PRIVATE = 2,
        }

    }

    export class Spec extends jspb.Message { 
        clearWorkloadsList(): void;
        getWorkloadsList(): Array<Workload>;
        setWorkloadsList(value: Array<Workload>): Spec;
        addWorkloads(value?: Workload, index?: number): Workload;
        clearEndpointsList(): void;
        getEndpointsList(): Array<sandboxes_api_v1_endpoint_pb.Endpoint>;
        setEndpointsList(value: Array<sandboxes_api_v1_endpoint_pb.Endpoint>): Spec;
        addEndpoints(value?: sandboxes_api_v1_endpoint_pb.Endpoint, index?: number): sandboxes_api_v1_endpoint_pb.Endpoint;

        hasOpState(): boolean;
        clearOpState(): void;
        getOpState(): Sandbox.OperationalState | undefined;
        setOpState(value?: Sandbox.OperationalState): Spec;

        hasAccessControl(): boolean;
        clearAccessControl(): void;
        getAccessControl(): Sandbox.AccessControl | undefined;
        setAccessControl(value?: Sandbox.AccessControl): Spec;
        clearVolumesList(): void;
        getVolumesList(): Array<sandboxes_api_v1_app_pb.Volume>;
        setVolumesList(value: Array<sandboxes_api_v1_app_pb.Volume>): Spec;
        addVolumes(value?: sandboxes_api_v1_app_pb.Volume, index?: number): sandboxes_api_v1_app_pb.Volume;

        hasScheduler(): boolean;
        clearScheduler(): void;
        getScheduler(): sandboxes_api_v1_app_pb.Scheduler | undefined;
        setScheduler(value?: sandboxes_api_v1_app_pb.Scheduler): Spec;
        clearResourcesList(): void;
        getResourcesList(): Array<ResourceGroup>;
        setResourcesList(value: Array<ResourceGroup>): Spec;
        addResources(value?: ResourceGroup, index?: number): ResourceGroup;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Spec.AsObject;
        static toObject(includeInstance: boolean, msg: Spec): Spec.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Spec, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Spec;
        static deserializeBinaryFromReader(message: Spec, reader: jspb.BinaryReader): Spec;
    }

    export namespace Spec {
        export type AsObject = {
            workloadsList: Array<Workload.AsObject>,
            endpointsList: Array<sandboxes_api_v1_endpoint_pb.Endpoint.AsObject>,
            opState?: Sandbox.OperationalState.AsObject,
            accessControl?: Sandbox.AccessControl.AsObject,
            volumesList: Array<sandboxes_api_v1_app_pb.Volume.AsObject>,
            scheduler?: sandboxes_api_v1_app_pb.Scheduler.AsObject,
            resourcesList: Array<ResourceGroup.AsObject>,
        }
    }

    export class Status extends jspb.Message { 
        clearWorkloadsList(): void;
        getWorkloadsList(): Array<WorkloadStatus>;
        setWorkloadsList(value: Array<WorkloadStatus>): Status;
        addWorkloads(value?: WorkloadStatus, index?: number): WorkloadStatus;
        clearResourcesList(): void;
        getResourcesList(): Array<ResourceGroupStatus>;
        setResourcesList(value: Array<ResourceGroupStatus>): Status;
        addResources(value?: ResourceGroupStatus, index?: number): ResourceGroupStatus;

        hasSandbox(): boolean;
        clearSandbox(): void;
        getSandbox(): Sandbox.Status.Aggregated | undefined;
        setSandbox(value?: Sandbox.Status.Aggregated): Status;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Status.AsObject;
        static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Status;
        static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
    }

    export namespace Status {
        export type AsObject = {
            workloadsList: Array<WorkloadStatus.AsObject>,
            resourcesList: Array<ResourceGroupStatus.AsObject>,
            sandbox?: Sandbox.Status.Aggregated.AsObject,
        }


        export class Aggregated extends jspb.Message { 
            getRunStage(): Sandbox.Status.Aggregated.RunStage;
            setRunStage(value: Sandbox.Status.Aggregated.RunStage): Aggregated;
            getAlertLevel(): Sandbox.Status.Aggregated.AlertLevel;
            setAlertLevel(value: Sandbox.Status.Aggregated.AlertLevel): Aggregated;
            getLifecycleStage(): Sandbox.Lifecycle.Stage;
            setLifecycleStage(value: Sandbox.Lifecycle.Stage): Aggregated;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Aggregated.AsObject;
            static toObject(includeInstance: boolean, msg: Aggregated): Aggregated.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Aggregated, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Aggregated;
            static deserializeBinaryFromReader(message: Aggregated, reader: jspb.BinaryReader): Aggregated;
        }

        export namespace Aggregated {
            export type AsObject = {
                runStage: Sandbox.Status.Aggregated.RunStage,
                alertLevel: Sandbox.Status.Aggregated.AlertLevel,
                lifecycleStage: Sandbox.Lifecycle.Stage,
            }

            export enum RunStage {
    UNAVAIL = 0,
    STARTING = 1,
    RUNNING = 2,
    READY = 3,
            }

            export enum AlertLevel {
    NONE = 0,
    NOTICE = 1,
    WARNING = 2,
    ERROR = 3,
            }

        }

    }

    export class Activities extends jspb.Message { 

        hasRecordTraffic(): boolean;
        clearRecordTraffic(): void;
        getRecordTraffic(): Sandbox.Activities.RecordTraffic | undefined;
        setRecordTraffic(value?: Sandbox.Activities.RecordTraffic): Activities;

        hasInterceptKubernetes(): boolean;
        clearInterceptKubernetes(): void;
        getInterceptKubernetes(): Sandbox.Activities.InterceptKubernetes | undefined;
        setInterceptKubernetes(value?: Sandbox.Activities.InterceptKubernetes): Activities;

        hasJobExecution(): boolean;
        clearJobExecution(): void;
        getJobExecution(): Sandbox.Activities.JobExecution | undefined;
        setJobExecution(value?: Sandbox.Activities.JobExecution): Activities;

        hasPooling(): boolean;
        clearPooling(): void;
        getPooling(): Sandbox.Activities.Pooling | undefined;
        setPooling(value?: Sandbox.Activities.Pooling): Activities;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Activities.AsObject;
        static toObject(includeInstance: boolean, msg: Activities): Activities.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Activities, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Activities;
        static deserializeBinaryFromReader(message: Activities, reader: jspb.BinaryReader): Activities;
    }

    export namespace Activities {
        export type AsObject = {
            recordTraffic?: Sandbox.Activities.RecordTraffic.AsObject,
            interceptKubernetes?: Sandbox.Activities.InterceptKubernetes.AsObject,
            jobExecution?: Sandbox.Activities.JobExecution.AsObject,
            pooling?: Sandbox.Activities.Pooling.AsObject,
        }


        export class RecordTraffic extends jspb.Message { 
            getSessionId(): string;
            setSessionId(value: string): RecordTraffic;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): RecordTraffic.AsObject;
            static toObject(includeInstance: boolean, msg: RecordTraffic): RecordTraffic.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: RecordTraffic, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): RecordTraffic;
            static deserializeBinaryFromReader(message: RecordTraffic, reader: jspb.BinaryReader): RecordTraffic;
        }

        export namespace RecordTraffic {
            export type AsObject = {
                sessionId: string,
            }
        }

        export class InterceptKubernetes extends jspb.Message { 
            getInfraName(): string;
            setInfraName(value: string): InterceptKubernetes;

            hasClusterNetwork(): boolean;
            clearClusterNetwork(): void;
            getClusterNetwork(): Sandbox.Activities.InterceptKubernetes.ClusterNetwork | undefined;
            setClusterNetwork(value?: Sandbox.Activities.InterceptKubernetes.ClusterNetwork): InterceptKubernetes;
            clearWorkloadInterceptionsList(): void;
            getWorkloadInterceptionsList(): Array<Sandbox.Activities.InterceptKubernetes.WorkloadInterception>;
            setWorkloadInterceptionsList(value: Array<Sandbox.Activities.InterceptKubernetes.WorkloadInterception>): InterceptKubernetes;
            addWorkloadInterceptions(value?: Sandbox.Activities.InterceptKubernetes.WorkloadInterception, index?: number): Sandbox.Activities.InterceptKubernetes.WorkloadInterception;
            clearIngressEndpointsList(): void;
            getIngressEndpointsList(): Array<sandboxes_api_v1_endpoint_pb.Endpoint>;
            setIngressEndpointsList(value: Array<sandboxes_api_v1_endpoint_pb.Endpoint>): InterceptKubernetes;
            addIngressEndpoints(value?: sandboxes_api_v1_endpoint_pb.Endpoint, index?: number): sandboxes_api_v1_endpoint_pb.Endpoint;

            hasInterceptCondition(): boolean;
            clearInterceptCondition(): void;
            getInterceptCondition(): Sandbox.Activities.InterceptKubernetes.InterceptCondition | undefined;
            setInterceptCondition(value?: Sandbox.Activities.InterceptKubernetes.InterceptCondition): InterceptKubernetes;
            clearIngressEndpointsMappingList(): void;
            getIngressEndpointsMappingList(): Array<Sandbox.Activities.InterceptKubernetes.IngressEndpoint>;
            setIngressEndpointsMappingList(value: Array<Sandbox.Activities.InterceptKubernetes.IngressEndpoint>): InterceptKubernetes;
            addIngressEndpointsMapping(value?: Sandbox.Activities.InterceptKubernetes.IngressEndpoint, index?: number): Sandbox.Activities.InterceptKubernetes.IngressEndpoint;
            clearExposeWorkloadsList(): void;
            getExposeWorkloadsList(): Array<Sandbox.Activities.InterceptKubernetes.ExposeWorkload>;
            setExposeWorkloadsList(value: Array<Sandbox.Activities.InterceptKubernetes.ExposeWorkload>): InterceptKubernetes;
            addExposeWorkloads(value?: Sandbox.Activities.InterceptKubernetes.ExposeWorkload, index?: number): Sandbox.Activities.InterceptKubernetes.ExposeWorkload;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): InterceptKubernetes.AsObject;
            static toObject(includeInstance: boolean, msg: InterceptKubernetes): InterceptKubernetes.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: InterceptKubernetes, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): InterceptKubernetes;
            static deserializeBinaryFromReader(message: InterceptKubernetes, reader: jspb.BinaryReader): InterceptKubernetes;
        }

        export namespace InterceptKubernetes {
            export type AsObject = {
                infraName: string,
                clusterNetwork?: Sandbox.Activities.InterceptKubernetes.ClusterNetwork.AsObject,
                workloadInterceptionsList: Array<Sandbox.Activities.InterceptKubernetes.WorkloadInterception.AsObject>,
                ingressEndpointsList: Array<sandboxes_api_v1_endpoint_pb.Endpoint.AsObject>,
                interceptCondition?: Sandbox.Activities.InterceptKubernetes.InterceptCondition.AsObject,
                ingressEndpointsMappingList: Array<Sandbox.Activities.InterceptKubernetes.IngressEndpoint.AsObject>,
                exposeWorkloadsList: Array<Sandbox.Activities.InterceptKubernetes.ExposeWorkload.AsObject>,
            }


            export class ClusterNetwork extends jspb.Message { 
                getConnectGateway(): boolean;
                setConnectGateway(value: boolean): ClusterNetwork;
                getCurrentNamespace(): string;
                setCurrentNamespace(value: string): ClusterNetwork;

                hasViaWorkload(): boolean;
                clearViaWorkload(): void;
                getViaWorkload(): Sandbox.Activities.InterceptKubernetes.TargetWorkload | undefined;
                setViaWorkload(value?: Sandbox.Activities.InterceptKubernetes.TargetWorkload): ClusterNetwork;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): ClusterNetwork.AsObject;
                static toObject(includeInstance: boolean, msg: ClusterNetwork): ClusterNetwork.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: ClusterNetwork, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): ClusterNetwork;
                static deserializeBinaryFromReader(message: ClusterNetwork, reader: jspb.BinaryReader): ClusterNetwork;
            }

            export namespace ClusterNetwork {
                export type AsObject = {
                    connectGateway: boolean,
                    currentNamespace: string,
                    viaWorkload?: Sandbox.Activities.InterceptKubernetes.TargetWorkload.AsObject,
                }
            }

            export class ResourceRef extends jspb.Message { 
                getKind(): string;
                setKind(value: string): ResourceRef;
                getNamespace(): string;
                setNamespace(value: string): ResourceRef;
                getName(): string;
                setName(value: string): ResourceRef;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): ResourceRef.AsObject;
                static toObject(includeInstance: boolean, msg: ResourceRef): ResourceRef.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: ResourceRef, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): ResourceRef;
                static deserializeBinaryFromReader(message: ResourceRef, reader: jspb.BinaryReader): ResourceRef;
            }

            export namespace ResourceRef {
                export type AsObject = {
                    kind: string,
                    namespace: string,
                    name: string,
                }
            }

            export class TargetWorkload extends jspb.Message { 
                getKind(): string;
                setKind(value: string): TargetWorkload;
                getNamespace(): string;
                setNamespace(value: string): TargetWorkload;
                getName(): string;
                setName(value: string): TargetWorkload;
                getContainer(): string;
                setContainer(value: string): TargetWorkload;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): TargetWorkload.AsObject;
                static toObject(includeInstance: boolean, msg: TargetWorkload): TargetWorkload.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: TargetWorkload, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): TargetWorkload;
                static deserializeBinaryFromReader(message: TargetWorkload, reader: jspb.BinaryReader): TargetWorkload;
            }

            export namespace TargetWorkload {
                export type AsObject = {
                    kind: string,
                    namespace: string,
                    name: string,
                    container: string,
                }
            }

            export class WorkloadInterception extends jspb.Message { 
                getWorkload(): string;
                setWorkload(value: string): WorkloadInterception;

                hasTarget(): boolean;
                clearTarget(): void;
                getTarget(): Sandbox.Activities.InterceptKubernetes.TargetWorkload | undefined;
                setTarget(value?: Sandbox.Activities.InterceptKubernetes.TargetWorkload): WorkloadInterception;
                clearPortForwardRulesList(): void;
                getPortForwardRulesList(): Array<Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward>;
                setPortForwardRulesList(value: Array<Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward>): WorkloadInterception;
                addPortForwardRules(value?: Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward, index?: number): Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward;

                hasVolumeMount(): boolean;
                clearVolumeMount(): void;
                getVolumeMount(): Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount | undefined;
                setVolumeMount(value?: Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount): WorkloadInterception;

                hasEnvMapping(): boolean;
                clearEnvMapping(): void;
                getEnvMapping(): Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping | undefined;
                setEnvMapping(value?: Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping): WorkloadInterception;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): WorkloadInterception.AsObject;
                static toObject(includeInstance: boolean, msg: WorkloadInterception): WorkloadInterception.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: WorkloadInterception, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): WorkloadInterception;
                static deserializeBinaryFromReader(message: WorkloadInterception, reader: jspb.BinaryReader): WorkloadInterception;
            }

            export namespace WorkloadInterception {
                export type AsObject = {
                    workload: string,
                    target?: Sandbox.Activities.InterceptKubernetes.TargetWorkload.AsObject,
                    portForwardRulesList: Array<Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward.AsObject>,
                    volumeMount?: Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount.AsObject,
                    envMapping?: Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping.AsObject,
                }


                export class PortForward extends jspb.Message { 
                    getRemotePort(): number;
                    setRemotePort(value: number): PortForward;
                    getLocalPort(): number;
                    setLocalPort(value: number): PortForward;
                    getProtocol(): string;
                    setProtocol(value: string): PortForward;
                    getLocalProtocol(): string;
                    setLocalProtocol(value: string): PortForward;

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
                        remotePort: number,
                        localPort: number,
                        protocol: string,
                        localProtocol: string,
                    }
                }

                export class VolumeMount extends jspb.Message { 

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
                    }
                }

                export class EnvMapping extends jspb.Message { 

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): EnvMapping.AsObject;
                    static toObject(includeInstance: boolean, msg: EnvMapping): EnvMapping.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: EnvMapping, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): EnvMapping;
                    static deserializeBinaryFromReader(message: EnvMapping, reader: jspb.BinaryReader): EnvMapping;
                }

                export namespace EnvMapping {
                    export type AsObject = {
                    }
                }

            }

            export class InterceptCondition extends jspb.Message { 
                clearCustomHeadersList(): void;
                getCustomHeadersList(): Array<Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader>;
                setCustomHeadersList(value: Array<Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader>): InterceptCondition;
                addCustomHeaders(value?: Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader, index?: number): Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader;

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
                    customHeadersList: Array<Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader.AsObject>,
                }


                export class CustomHeader extends jspb.Message { 
                    getHeader(): string;
                    setHeader(value: string): CustomHeader;
                    getTemplate(): string;
                    setTemplate(value: string): CustomHeader;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): CustomHeader.AsObject;
                    static toObject(includeInstance: boolean, msg: CustomHeader): CustomHeader.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: CustomHeader, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): CustomHeader;
                    static deserializeBinaryFromReader(message: CustomHeader, reader: jspb.BinaryReader): CustomHeader;
                }

                export namespace CustomHeader {
                    export type AsObject = {
                        header: string,
                        template: string,
                    }
                }

            }

            export class IngressEndpoint extends jspb.Message { 

                hasTarget(): boolean;
                clearTarget(): void;
                getTarget(): Sandbox.Activities.InterceptKubernetes.ResourceRef | undefined;
                setTarget(value?: Sandbox.Activities.InterceptKubernetes.ResourceRef): IngressEndpoint;

                hasEndpoint(): boolean;
                clearEndpoint(): void;
                getEndpoint(): sandboxes_api_v1_endpoint_pb.Endpoint | undefined;
                setEndpoint(value?: sandboxes_api_v1_endpoint_pb.Endpoint): IngressEndpoint;
                getServicePort(): string;
                setServicePort(value: string): IngressEndpoint;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): IngressEndpoint.AsObject;
                static toObject(includeInstance: boolean, msg: IngressEndpoint): IngressEndpoint.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: IngressEndpoint, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): IngressEndpoint;
                static deserializeBinaryFromReader(message: IngressEndpoint, reader: jspb.BinaryReader): IngressEndpoint;
            }

            export namespace IngressEndpoint {
                export type AsObject = {
                    target?: Sandbox.Activities.InterceptKubernetes.ResourceRef.AsObject,
                    endpoint?: sandboxes_api_v1_endpoint_pb.Endpoint.AsObject,
                    servicePort: string,
                }
            }

            export class ExposeWorkload extends jspb.Message { 
                getServiceName(): string;
                setServiceName(value: string): ExposeWorkload;
                getWorkload(): string;
                setWorkload(value: string): ExposeWorkload;
                clearPortsList(): void;
                getPortsList(): Array<Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port>;
                setPortsList(value: Array<Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port>): ExposeWorkload;
                addPorts(value?: Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port, index?: number): Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): ExposeWorkload.AsObject;
                static toObject(includeInstance: boolean, msg: ExposeWorkload): ExposeWorkload.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: ExposeWorkload, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): ExposeWorkload;
                static deserializeBinaryFromReader(message: ExposeWorkload, reader: jspb.BinaryReader): ExposeWorkload;
            }

            export namespace ExposeWorkload {
                export type AsObject = {
                    serviceName: string,
                    workload: string,
                    portsList: Array<Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port.AsObject>,
                }


                export class Port extends jspb.Message { 
                    getLocalPort(): number;
                    setLocalPort(value: number): Port;
                    getRemotePort(): number;
                    setRemotePort(value: number): Port;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): Port.AsObject;
                    static toObject(includeInstance: boolean, msg: Port): Port.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: Port, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): Port;
                    static deserializeBinaryFromReader(message: Port, reader: jspb.BinaryReader): Port;
                }

                export namespace Port {
                    export type AsObject = {
                        localPort: number,
                        remotePort: number,
                    }
                }

            }

        }

        export class JobExecution extends jspb.Message { 
            getJobId(): string;
            setJobId(value: string): JobExecution;
            getExecutionId(): number;
            setExecutionId(value: number): JobExecution;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): JobExecution.AsObject;
            static toObject(includeInstance: boolean, msg: JobExecution): JobExecution.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: JobExecution, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): JobExecution;
            static deserializeBinaryFromReader(message: JobExecution, reader: jspb.BinaryReader): JobExecution;
        }

        export namespace JobExecution {
            export type AsObject = {
                jobId: string,
                executionId: number,
            }
        }

        export class Pooling extends jspb.Message { 
            getPoolId(): string;
            setPoolId(value: string): Pooling;
            getState(): Sandbox.Activities.Pooling.State;
            setState(value: Sandbox.Activities.Pooling.State): Pooling;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Pooling.AsObject;
            static toObject(includeInstance: boolean, msg: Pooling): Pooling.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Pooling, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Pooling;
            static deserializeBinaryFromReader(message: Pooling, reader: jspb.BinaryReader): Pooling;
        }

        export namespace Pooling {
            export type AsObject = {
                poolId: string,
                state: Sandbox.Activities.Pooling.State,
            }

            export enum State {
    UNSPECIFIED = 0,
    STANDBY = 1,
            }

        }

    }

    export class Lifecycle extends jspb.Message { 
        getStage(): Sandbox.Lifecycle.Stage;
        setStage(value: Sandbox.Lifecycle.Stage): Lifecycle;
        getStageVersion(): number;
        setStageVersion(value: number): Lifecycle;

        getHandlersMap(): jspb.Map<string, Sandbox.Lifecycle.HandlerState>;
        clearHandlersMap(): void;

        getStatesMap(): jspb.Map<string, string>;
        clearStatesMap(): void;

        getTransitionsMap(): jspb.Map<string, Sandbox.Lifecycle.Transition>;
        clearTransitionsMap(): void;
        getSeq(): number;
        setSeq(value: number): Lifecycle;

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
            stage: Sandbox.Lifecycle.Stage,
            stageVersion: number,

            handlersMap: Array<[string, Sandbox.Lifecycle.HandlerState.AsObject]>,

            statesMap: Array<[string, string]>,

            transitionsMap: Array<[string, Sandbox.Lifecycle.Transition.AsObject]>,
            seq: number,
        }


        export class Transition extends jspb.Message { 
            getCurrent(): Sandbox.Lifecycle.Stage;
            setCurrent(value: Sandbox.Lifecycle.Stage): Transition;
            getSeq(): number;
            setSeq(value: number): Transition;

            hasStatus(): boolean;
            clearStatus(): void;
            getStatus(): sandboxes_api_v1_common_pb.RuntimeStatus | undefined;
            setStatus(value?: sandboxes_api_v1_common_pb.RuntimeStatus): Transition;

            hasBlocker(): boolean;
            clearBlocker(): void;
            getBlocker(): Sandbox.Lifecycle.Transition.Blocker | undefined;
            setBlocker(value?: Sandbox.Lifecycle.Transition.Blocker): Transition;
            getRecreate(): boolean;
            setRecreate(value: boolean): Transition;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Transition.AsObject;
            static toObject(includeInstance: boolean, msg: Transition): Transition.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Transition, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Transition;
            static deserializeBinaryFromReader(message: Transition, reader: jspb.BinaryReader): Transition;
        }

        export namespace Transition {
            export type AsObject = {
                current: Sandbox.Lifecycle.Stage,
                seq: number,
                status?: sandboxes_api_v1_common_pb.RuntimeStatus.AsObject,
                blocker?: Sandbox.Lifecycle.Transition.Blocker.AsObject,
                recreate: boolean,
            }


            export class Blocker extends jspb.Message { 
                getStage(): Sandbox.Lifecycle.Stage;
                setStage(value: Sandbox.Lifecycle.Stage): Blocker;
                getSeq(): number;
                setSeq(value: number): Blocker;

                hasStatus(): boolean;
                clearStatus(): void;
                getStatus(): sandboxes_api_v1_common_pb.RuntimeStatus | undefined;
                setStatus(value?: sandboxes_api_v1_common_pb.RuntimeStatus): Blocker;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Blocker.AsObject;
                static toObject(includeInstance: boolean, msg: Blocker): Blocker.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Blocker, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Blocker;
                static deserializeBinaryFromReader(message: Blocker, reader: jspb.BinaryReader): Blocker;
            }

            export namespace Blocker {
                export type AsObject = {
                    stage: Sandbox.Lifecycle.Stage,
                    seq: number,
                    status?: sandboxes_api_v1_common_pb.RuntimeStatus.AsObject,
                }
            }

        }

        export class HandlerState extends jspb.Message { 

            hasStatus(): boolean;
            clearStatus(): void;
            getStatus(): sandboxes_api_v1_common_pb.RuntimeStatus | undefined;
            setStatus(value?: sandboxes_api_v1_common_pb.RuntimeStatus): HandlerState;
            getOutput(): string;
            setOutput(value: string): HandlerState;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): HandlerState.AsObject;
            static toObject(includeInstance: boolean, msg: HandlerState): HandlerState.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: HandlerState, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): HandlerState;
            static deserializeBinaryFromReader(message: HandlerState, reader: jspb.BinaryReader): HandlerState;
        }

        export namespace HandlerState {
            export type AsObject = {
                status?: sandboxes_api_v1_common_pb.RuntimeStatus.AsObject,
                output: string,
            }
        }


        export enum Stage {
    NONE = 0,
    CREATING = 1,
    RUNNING = 2,
    SUSPENDING = 3,
    SUSPENDED = 4,
    RESUMING = 5,
    DELETING = 6,
    DELETED = 7,
        }

    }

    export class Snapshot extends jspb.Message { 
        getSeq(): number;
        setSeq(value: number): Snapshot;
        getSnapshotId(): string;
        setSnapshotId(value: string): Snapshot;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Snapshot.AsObject;
        static toObject(includeInstance: boolean, msg: Snapshot): Snapshot.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Snapshot, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Snapshot;
        static deserializeBinaryFromReader(message: Snapshot, reader: jspb.BinaryReader): Snapshot;
    }

    export namespace Snapshot {
        export type AsObject = {
            seq: number,
            snapshotId: string,
        }
    }

}

export class WorkloadConfig extends jspb.Message { 

    hasWorkspace(): boolean;
    clearWorkspace(): void;
    getWorkspace(): WorkloadConfig.Workspace | undefined;
    setWorkspace(value?: WorkloadConfig.Workspace): WorkloadConfig;

    getConfigCase(): WorkloadConfig.ConfigCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorkloadConfig.AsObject;
    static toObject(includeInstance: boolean, msg: WorkloadConfig): WorkloadConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorkloadConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorkloadConfig;
    static deserializeBinaryFromReader(message: WorkloadConfig, reader: jspb.BinaryReader): WorkloadConfig;
}

export namespace WorkloadConfig {
    export type AsObject = {
        workspace?: WorkloadConfig.Workspace.AsObject,
    }


    export class Workspace extends jspb.Message { 
        getMode(): Workload.Workspace.Mode;
        setMode(value: Workload.Workspace.Mode): Workspace;

        hasSetupControl(): boolean;
        clearSetupControl(): void;
        getSetupControl(): Workload.Workspace.SetupControl | undefined;
        setSetupControl(value?: Workload.Workspace.SetupControl): Workspace;

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
            mode: Workload.Workspace.Mode,
            setupControl?: Workload.Workspace.SetupControl.AsObject,
        }
    }


    export enum ConfigCase {
        CONFIG_NOT_SET = 0,
        WORKSPACE = 1,
    }

}

export class EndpointConfig extends jspb.Message { 

    hasAuthProxy(): boolean;
    clearAuthProxy(): void;
    getAuthProxy(): EndpointConfig.AuthProxyConfig | undefined;
    setAuthProxy(value?: EndpointConfig.AuthProxyConfig): EndpointConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EndpointConfig.AsObject;
    static toObject(includeInstance: boolean, msg: EndpointConfig): EndpointConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EndpointConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EndpointConfig;
    static deserializeBinaryFromReader(message: EndpointConfig, reader: jspb.BinaryReader): EndpointConfig;
}

export namespace EndpointConfig {
    export type AsObject = {
        authProxy?: EndpointConfig.AuthProxyConfig.AsObject,
    }


    export class AuthProxyConfig extends jspb.Message { 
        getState(): EndpointConfig.AuthProxyConfig.State;
        setState(value: EndpointConfig.AuthProxyConfig.State): AuthProxyConfig;

        hasRules(): boolean;
        clearRules(): void;
        getRules(): EndpointConfig.AuthProxyConfig.Rules | undefined;
        setRules(value?: EndpointConfig.AuthProxyConfig.Rules): AuthProxyConfig;

        hasSetMode(): boolean;
        clearSetMode(): void;
        getSetMode(): EndpointConfig.AuthProxyConfig.SetMode | undefined;
        setSetMode(value?: EndpointConfig.AuthProxyConfig.SetMode): AuthProxyConfig;
        clearAdditionalRequiredHeadersList(): void;
        getAdditionalRequiredHeadersList(): Array<sandboxes_api_v1_endpoint_pb.HTTPRoutingRule.HeaderRegexp>;
        setAdditionalRequiredHeadersList(value: Array<sandboxes_api_v1_endpoint_pb.HTTPRoutingRule.HeaderRegexp>): AuthProxyConfig;
        addAdditionalRequiredHeaders(value?: sandboxes_api_v1_endpoint_pb.HTTPRoutingRule.HeaderRegexp, index?: number): sandboxes_api_v1_endpoint_pb.HTTPRoutingRule.HeaderRegexp;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AuthProxyConfig.AsObject;
        static toObject(includeInstance: boolean, msg: AuthProxyConfig): AuthProxyConfig.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AuthProxyConfig, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AuthProxyConfig;
        static deserializeBinaryFromReader(message: AuthProxyConfig, reader: jspb.BinaryReader): AuthProxyConfig;
    }

    export namespace AuthProxyConfig {
        export type AsObject = {
            state: EndpointConfig.AuthProxyConfig.State,
            rules?: EndpointConfig.AuthProxyConfig.Rules.AsObject,
            setMode?: EndpointConfig.AuthProxyConfig.SetMode.AsObject,
            additionalRequiredHeadersList: Array<sandboxes_api_v1_endpoint_pb.HTTPRoutingRule.HeaderRegexp.AsObject>,
        }


        export class Rules extends jspb.Message { 
            clearRulesList(): void;
            getRulesList(): Array<sandboxes_api_v1_endpoint_pb.AuthProxy.Rule>;
            setRulesList(value: Array<sandboxes_api_v1_endpoint_pb.AuthProxy.Rule>): Rules;
            addRules(value?: sandboxes_api_v1_endpoint_pb.AuthProxy.Rule, index?: number): sandboxes_api_v1_endpoint_pb.AuthProxy.Rule;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Rules.AsObject;
            static toObject(includeInstance: boolean, msg: Rules): Rules.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Rules, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Rules;
            static deserializeBinaryFromReader(message: Rules, reader: jspb.BinaryReader): Rules;
        }

        export namespace Rules {
            export type AsObject = {
                rulesList: Array<sandboxes_api_v1_endpoint_pb.AuthProxy.Rule.AsObject>,
            }
        }

        export class SetMode extends jspb.Message { 
            getMode(): sandboxes_api_v1_endpoint_pb.AuthProxy.Mode;
            setMode(value: sandboxes_api_v1_endpoint_pb.AuthProxy.Mode): SetMode;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): SetMode.AsObject;
            static toObject(includeInstance: boolean, msg: SetMode): SetMode.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: SetMode, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): SetMode;
            static deserializeBinaryFromReader(message: SetMode, reader: jspb.BinaryReader): SetMode;
        }

        export namespace SetMode {
            export type AsObject = {
                mode: sandboxes_api_v1_endpoint_pb.AuthProxy.Mode,
            }
        }


        export enum State {
    UNSPECIFIED = 0,
    ENABLED = 1,
    DISABLED = 2,
        }

    }

}

export class Workload extends jspb.Message { 
    getName(): string;
    setName(value: string): Workload;

    hasWorkspace(): boolean;
    clearWorkspace(): void;
    getWorkspace(): Workload.Workspace | undefined;
    setWorkspace(value?: Workload.Workspace): Workload;

    hasDependency(): boolean;
    clearDependency(): void;
    getDependency(): Workload.Dependency | undefined;
    setDependency(value?: Workload.Dependency): Workload;

    hasContainer(): boolean;
    clearContainer(): void;
    getContainer(): Workload.Container | undefined;
    setContainer(value?: Workload.Container): Workload;

    getWorkloadCase(): Workload.WorkloadCase;

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
        workspace?: Workload.Workspace.AsObject,
        dependency?: Workload.Dependency.AsObject,
        container?: Workload.Container.AsObject,
    }


    export class Workspace extends jspb.Message { 
        getMode(): Workload.Workspace.Mode;
        setMode(value: Workload.Workspace.Mode): Workspace;

        hasSpec(): boolean;
        clearSpec(): void;
        getSpec(): sandboxes_api_v1_app_pb.AppDefinition.Workspace | undefined;
        setSpec(value?: sandboxes_api_v1_app_pb.AppDefinition.Workspace): Workspace;

        hasSetupControl(): boolean;
        clearSetupControl(): void;
        getSetupControl(): Workload.Workspace.SetupControl | undefined;
        setSetupControl(value?: Workload.Workspace.SetupControl): Workspace;

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
            mode: Workload.Workspace.Mode,
            spec?: sandboxes_api_v1_app_pb.AppDefinition.Workspace.AsObject,
            setupControl?: Workload.Workspace.SetupControl.AsObject,
        }


        export class SetupControl extends jspb.Message { 
            getPauseOnFailure(): boolean;
            setPauseOnFailure(value: boolean): SetupControl;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): SetupControl.AsObject;
            static toObject(includeInstance: boolean, msg: SetupControl): SetupControl.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: SetupControl, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): SetupControl;
            static deserializeBinaryFromReader(message: SetupControl, reader: jspb.BinaryReader): SetupControl;
        }

        export namespace SetupControl {
            export type AsObject = {
                pauseOnFailure: boolean,
            }
        }


        export enum Mode {
    UNSPECIFIED = 0,
    MANUAL = 1,
    AUTO = 2,
        }

    }

    export class Dependency extends jspb.Message { 

        hasSpec(): boolean;
        clearSpec(): void;
        getSpec(): sandboxes_api_v1_app_pb.AppDefinition.Dependency | undefined;
        setSpec(value?: sandboxes_api_v1_app_pb.AppDefinition.Dependency): Dependency;

        hasServiceDescriptor(): boolean;
        clearServiceDescriptor(): void;
        getServiceDescriptor(): sandboxes_api_v1_system_pb.DependencyServiceDescriptor | undefined;
        setServiceDescriptor(value?: sandboxes_api_v1_system_pb.DependencyServiceDescriptor): Dependency;

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
            spec?: sandboxes_api_v1_app_pb.AppDefinition.Dependency.AsObject,
            serviceDescriptor?: sandboxes_api_v1_system_pb.DependencyServiceDescriptor.AsObject,
        }
    }

    export class Container extends jspb.Message { 

        hasSpec(): boolean;
        clearSpec(): void;
        getSpec(): sandboxes_api_v1_app_pb.AppDefinition.Container | undefined;
        setSpec(value?: sandboxes_api_v1_app_pb.AppDefinition.Container): Container;

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
            spec?: sandboxes_api_v1_app_pb.AppDefinition.Container.AsObject,
        }
    }


    export enum WorkloadCase {
        WORKLOAD_NOT_SET = 0,
        WORKSPACE = 10,
        DEPENDENCY = 11,
        CONTAINER = 12,
    }

}

export class WorkloadStatus extends jspb.Message { 
    getName(): string;
    setName(value: string): WorkloadStatus;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): sandboxes_api_v1_common_pb.RuntimeStatus | undefined;
    setStatus(value?: sandboxes_api_v1_common_pb.RuntimeStatus): WorkloadStatus;

    hasAgent(): boolean;
    clearAgent(): void;
    getAgent(): AgentStatus | undefined;
    setAgent(value?: AgentStatus): WorkloadStatus;

    hasActivities(): boolean;
    clearActivities(): void;
    getActivities(): WorkloadStatus.Activities | undefined;
    setActivities(value?: WorkloadStatus.Activities): WorkloadStatus;
    getSandboxVersion(): string;
    setSandboxVersion(value: string): WorkloadStatus;
    getAgentVersion(): string;
    setAgentVersion(value: string): WorkloadStatus;

    hasAggregatedStatus(): boolean;
    clearAggregatedStatus(): void;
    getAggregatedStatus(): Sandbox.Status.Aggregated | undefined;
    setAggregatedStatus(value?: Sandbox.Status.Aggregated): WorkloadStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorkloadStatus.AsObject;
    static toObject(includeInstance: boolean, msg: WorkloadStatus): WorkloadStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorkloadStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorkloadStatus;
    static deserializeBinaryFromReader(message: WorkloadStatus, reader: jspb.BinaryReader): WorkloadStatus;
}

export namespace WorkloadStatus {
    export type AsObject = {
        name: string,
        status?: sandboxes_api_v1_common_pb.RuntimeStatus.AsObject,
        agent?: AgentStatus.AsObject,
        activities?: WorkloadStatus.Activities.AsObject,
        sandboxVersion: string,
        agentVersion: string,
        aggregatedStatus?: Sandbox.Status.Aggregated.AsObject,
    }


    export class Usage extends jspb.Message { 

        hasCpu(): boolean;
        clearCpu(): void;
        getCpu(): WorkloadStatus.Usage.CPU | undefined;
        setCpu(value?: WorkloadStatus.Usage.CPU): Usage;

        hasMemory(): boolean;
        clearMemory(): void;
        getMemory(): WorkloadStatus.Usage.Memory | undefined;
        setMemory(value?: WorkloadStatus.Usage.Memory): Usage;

        hasStorage(): boolean;
        clearStorage(): void;
        getStorage(): WorkloadStatus.Usage.Storage | undefined;
        setStorage(value?: WorkloadStatus.Usage.Storage): Usage;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Usage.AsObject;
        static toObject(includeInstance: boolean, msg: Usage): Usage.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Usage, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Usage;
        static deserializeBinaryFromReader(message: Usage, reader: jspb.BinaryReader): Usage;
    }

    export namespace Usage {
        export type AsObject = {
            cpu?: WorkloadStatus.Usage.CPU.AsObject,
            memory?: WorkloadStatus.Usage.Memory.AsObject,
            storage?: WorkloadStatus.Usage.Storage.AsObject,
        }


        export class CPU extends jspb.Message { 
            getCount(): number;
            setCount(value: number): CPU;
            getPercentage(): number;
            setPercentage(value: number): CPU;
            getLoadavg(): number;
            setLoadavg(value: number): CPU;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): CPU.AsObject;
            static toObject(includeInstance: boolean, msg: CPU): CPU.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: CPU, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): CPU;
            static deserializeBinaryFromReader(message: CPU, reader: jspb.BinaryReader): CPU;
        }

        export namespace CPU {
            export type AsObject = {
                count: number,
                percentage: number,
                loadavg: number,
            }
        }

        export class Memory extends jspb.Message { 
            getUnit(): number;
            setUnit(value: number): Memory;
            getCapacity(): number;
            setCapacity(value: number): Memory;
            getLimit(): number;
            setLimit(value: number): Memory;
            getUsage(): number;
            setUsage(value: number): Memory;
            getSwapUsage(): number;
            setSwapUsage(value: number): Memory;
            getPressure(): boolean;
            setPressure(value: boolean): Memory;

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
                unit: number,
                capacity: number,
                limit: number,
                usage: number,
                swapUsage: number,
                pressure: boolean,
            }
        }

        export class Storage extends jspb.Message { 
            getCapacity(): number;
            setCapacity(value: number): Storage;
            getUsed(): number;
            setUsed(value: number): Storage;
            getUnit(): number;
            setUnit(value: number): Storage;
            getInodeTotal(): number;
            setInodeTotal(value: number): Storage;
            getInodeUsed(): number;
            setInodeUsed(value: number): Storage;

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
                capacity: number,
                used: number,
                unit: number,
                inodeTotal: number,
                inodeUsed: number,
            }
        }

    }

    export class Activities extends jspb.Message { 

        hasRecordTraffic(): boolean;
        clearRecordTraffic(): void;
        getRecordTraffic(): WorkloadStatus.Activities.RecordTraffic | undefined;
        setRecordTraffic(value?: WorkloadStatus.Activities.RecordTraffic): Activities;

        hasInterceptKubernetes(): boolean;
        clearInterceptKubernetes(): void;
        getInterceptKubernetes(): WorkloadStatus.Activities.InterceptKubernetes | undefined;
        setInterceptKubernetes(value?: WorkloadStatus.Activities.InterceptKubernetes): Activities;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Activities.AsObject;
        static toObject(includeInstance: boolean, msg: Activities): Activities.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Activities, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Activities;
        static deserializeBinaryFromReader(message: Activities, reader: jspb.BinaryReader): Activities;
    }

    export namespace Activities {
        export type AsObject = {
            recordTraffic?: WorkloadStatus.Activities.RecordTraffic.AsObject,
            interceptKubernetes?: WorkloadStatus.Activities.InterceptKubernetes.AsObject,
        }


        export class RecordTraffic extends jspb.Message { 

            getPortsMap(): jspb.Map<number, WorkloadStatus.Activities.RecordTraffic.PortState>;
            clearPortsMap(): void;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): RecordTraffic.AsObject;
            static toObject(includeInstance: boolean, msg: RecordTraffic): RecordTraffic.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: RecordTraffic, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): RecordTraffic;
            static deserializeBinaryFromReader(message: RecordTraffic, reader: jspb.BinaryReader): RecordTraffic;
        }

        export namespace RecordTraffic {
            export type AsObject = {

                portsMap: Array<[number, WorkloadStatus.Activities.RecordTraffic.PortState.AsObject]>,
            }


            export class PortState extends jspb.Message { 
                getPort(): number;
                setPort(value: number): PortState;
                getSessionId(): string;
                setSessionId(value: string): PortState;

                hasError(): boolean;
                clearError(): void;
                getError(): sandboxes_api_v1_common_pb.Error | undefined;
                setError(value?: sandboxes_api_v1_common_pb.Error): PortState;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): PortState.AsObject;
                static toObject(includeInstance: boolean, msg: PortState): PortState.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: PortState, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): PortState;
                static deserializeBinaryFromReader(message: PortState, reader: jspb.BinaryReader): PortState;
            }

            export namespace PortState {
                export type AsObject = {
                    port: number,
                    sessionId: string,
                    error?: sandboxes_api_v1_common_pb.Error.AsObject,
                }
            }

        }

        export class InterceptKubernetes extends jspb.Message { 
            getInfraName(): string;
            setInfraName(value: string): InterceptKubernetes;

            hasClusterNetwork(): boolean;
            clearClusterNetwork(): void;
            getClusterNetwork(): WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork | undefined;
            setClusterNetwork(value?: WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork): InterceptKubernetes;
            clearWorkloadInterceptionsList(): void;
            getWorkloadInterceptionsList(): Array<WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception>;
            setWorkloadInterceptionsList(value: Array<WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception>): InterceptKubernetes;
            addWorkloadInterceptions(value?: WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception, index?: number): WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception;
            clearExposeWorloadsList(): void;
            getExposeWorloadsList(): Array<WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload>;
            setExposeWorloadsList(value: Array<WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload>): InterceptKubernetes;
            addExposeWorloads(value?: WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload, index?: number): WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): InterceptKubernetes.AsObject;
            static toObject(includeInstance: boolean, msg: InterceptKubernetes): InterceptKubernetes.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: InterceptKubernetes, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): InterceptKubernetes;
            static deserializeBinaryFromReader(message: InterceptKubernetes, reader: jspb.BinaryReader): InterceptKubernetes;
        }

        export namespace InterceptKubernetes {
            export type AsObject = {
                infraName: string,
                clusterNetwork?: WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork.AsObject,
                workloadInterceptionsList: Array<WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.AsObject>,
                exposeWorloadsList: Array<WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload.AsObject>,
            }


            export class ClusterNetwork extends jspb.Message { 

                hasGatewayConnection(): boolean;
                clearGatewayConnection(): void;
                getGatewayConnection(): sandboxes_api_v1_common_pb.RuntimeStatus | undefined;
                setGatewayConnection(value?: sandboxes_api_v1_common_pb.RuntimeStatus): ClusterNetwork;
                getViaPod(): string;
                setViaPod(value: string): ClusterNetwork;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): ClusterNetwork.AsObject;
                static toObject(includeInstance: boolean, msg: ClusterNetwork): ClusterNetwork.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: ClusterNetwork, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): ClusterNetwork;
                static deserializeBinaryFromReader(message: ClusterNetwork, reader: jspb.BinaryReader): ClusterNetwork;
            }

            export namespace ClusterNetwork {
                export type AsObject = {
                    gatewayConnection?: sandboxes_api_v1_common_pb.RuntimeStatus.AsObject,
                    viaPod: string,
                }
            }

            export class WorkloadInterception extends jspb.Message { 

                hasTarget(): boolean;
                clearTarget(): void;
                getTarget(): Sandbox.Activities.InterceptKubernetes.TargetWorkload | undefined;
                setTarget(value?: Sandbox.Activities.InterceptKubernetes.TargetWorkload): WorkloadInterception;

                hasPortForwardStatus(): boolean;
                clearPortForwardStatus(): void;
                getPortForwardStatus(): sandboxes_api_v1_common_pb.RuntimeStatus | undefined;
                setPortForwardStatus(value?: sandboxes_api_v1_common_pb.RuntimeStatus): WorkloadInterception;

                hasVolumeMountStatus(): boolean;
                clearVolumeMountStatus(): void;
                getVolumeMountStatus(): sandboxes_api_v1_common_pb.RuntimeStatus | undefined;
                setVolumeMountStatus(value?: sandboxes_api_v1_common_pb.RuntimeStatus): WorkloadInterception;

                hasEnvMappingStatus(): boolean;
                clearEnvMappingStatus(): void;
                getEnvMappingStatus(): sandboxes_api_v1_common_pb.RuntimeStatus | undefined;
                setEnvMappingStatus(value?: sandboxes_api_v1_common_pb.RuntimeStatus): WorkloadInterception;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): WorkloadInterception.AsObject;
                static toObject(includeInstance: boolean, msg: WorkloadInterception): WorkloadInterception.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: WorkloadInterception, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): WorkloadInterception;
                static deserializeBinaryFromReader(message: WorkloadInterception, reader: jspb.BinaryReader): WorkloadInterception;
            }

            export namespace WorkloadInterception {
                export type AsObject = {
                    target?: Sandbox.Activities.InterceptKubernetes.TargetWorkload.AsObject,
                    portForwardStatus?: sandboxes_api_v1_common_pb.RuntimeStatus.AsObject,
                    volumeMountStatus?: sandboxes_api_v1_common_pb.RuntimeStatus.AsObject,
                    envMappingStatus?: sandboxes_api_v1_common_pb.RuntimeStatus.AsObject,
                }
            }

            export class ExposeWorkload extends jspb.Message { 
                getService(): string;
                setService(value: string): ExposeWorkload;
                getWorkload(): string;
                setWorkload(value: string): ExposeWorkload;

                hasStatus(): boolean;
                clearStatus(): void;
                getStatus(): sandboxes_api_v1_common_pb.RuntimeStatus | undefined;
                setStatus(value?: sandboxes_api_v1_common_pb.RuntimeStatus): ExposeWorkload;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): ExposeWorkload.AsObject;
                static toObject(includeInstance: boolean, msg: ExposeWorkload): ExposeWorkload.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: ExposeWorkload, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): ExposeWorkload;
                static deserializeBinaryFromReader(message: ExposeWorkload, reader: jspb.BinaryReader): ExposeWorkload;
            }

            export namespace ExposeWorkload {
                export type AsObject = {
                    service: string,
                    workload: string,
                    status?: sandboxes_api_v1_common_pb.RuntimeStatus.AsObject,
                }
            }

        }

    }

}

export class ResourceGroup extends jspb.Message { 
    getName(): string;
    setName(value: string): ResourceGroup;

    hasSpec(): boolean;
    clearSpec(): void;
    getSpec(): sandboxes_api_v1_app_pb.AppDefinition.ResourceGroup | undefined;
    setSpec(value?: sandboxes_api_v1_app_pb.AppDefinition.ResourceGroup): ResourceGroup;

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
        spec?: sandboxes_api_v1_app_pb.AppDefinition.ResourceGroup.AsObject,
    }
}

export class ResourceGroupStatus extends jspb.Message { 
    getName(): string;
    setName(value: string): ResourceGroupStatus;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): sandboxes_api_v1_common_pb.RuntimeStatus | undefined;
    setStatus(value?: sandboxes_api_v1_common_pb.RuntimeStatus): ResourceGroupStatus;

    hasAggregatedStatus(): boolean;
    clearAggregatedStatus(): void;
    getAggregatedStatus(): Sandbox.Status.Aggregated | undefined;
    setAggregatedStatus(value?: Sandbox.Status.Aggregated): ResourceGroupStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResourceGroupStatus.AsObject;
    static toObject(includeInstance: boolean, msg: ResourceGroupStatus): ResourceGroupStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResourceGroupStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResourceGroupStatus;
    static deserializeBinaryFromReader(message: ResourceGroupStatus, reader: jspb.BinaryReader): ResourceGroupStatus;
}

export namespace ResourceGroupStatus {
    export type AsObject = {
        name: string,
        status?: sandboxes_api_v1_common_pb.RuntimeStatus.AsObject,
        aggregatedStatus?: Sandbox.Status.Aggregated.AsObject,
    }
}

export class ProbeStatus extends jspb.Message { 
    getName(): string;
    setName(value: string): ProbeStatus;

    hasResult(): boolean;
    clearResult(): void;
    getResult(): ProbeStatus.Result | undefined;
    setResult(value?: ProbeStatus.Result): ProbeStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProbeStatus.AsObject;
    static toObject(includeInstance: boolean, msg: ProbeStatus): ProbeStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProbeStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProbeStatus;
    static deserializeBinaryFromReader(message: ProbeStatus, reader: jspb.BinaryReader): ProbeStatus;
}

export namespace ProbeStatus {
    export type AsObject = {
        name: string,
        result?: ProbeStatus.Result.AsObject,
    }


    export class Result extends jspb.Message { 
        getPositive(): boolean;
        setPositive(value: boolean): Result;

        hasError(): boolean;
        clearError(): void;
        getError(): sandboxes_api_v1_common_pb.Error | undefined;
        setError(value?: sandboxes_api_v1_common_pb.Error): Result;

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
            positive: boolean,
            error?: sandboxes_api_v1_common_pb.Error.AsObject,
        }
    }

}

export class AgentInfo extends jspb.Message { 
    getType(): string;
    setType(value: string): AgentInfo;
    getVersion(): string;
    setVersion(value: string): AgentInfo;
    clearSupportedActionsList(): void;
    getSupportedActionsList(): Array<string>;
    setSupportedActionsList(value: Array<string>): AgentInfo;
    addSupportedActions(value: string, index?: number): string;
    getSandboxVersion(): string;
    setSandboxVersion(value: string): AgentInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AgentInfo.AsObject;
    static toObject(includeInstance: boolean, msg: AgentInfo): AgentInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AgentInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AgentInfo;
    static deserializeBinaryFromReader(message: AgentInfo, reader: jspb.BinaryReader): AgentInfo;
}

export namespace AgentInfo {
    export type AsObject = {
        type: string,
        version: string,
        supportedActionsList: Array<string>,
        sandboxVersion: string,
    }
}

export class AgentStatus extends jspb.Message { 

    hasInfo(): boolean;
    clearInfo(): void;
    getInfo(): AgentInfo | undefined;
    setInfo(value?: AgentInfo): AgentStatus;

    hasOverview(): boolean;
    clearOverview(): void;
    getOverview(): AgentStatus.Overview | undefined;
    setOverview(value?: AgentStatus.Overview): AgentStatus;
    clearHealthProbeStatusList(): void;
    getHealthProbeStatusList(): Array<ProbeStatus>;
    setHealthProbeStatusList(value: Array<ProbeStatus>): AgentStatus;
    addHealthProbeStatus(value?: ProbeStatus, index?: number): ProbeStatus;
    clearReadinessProbeStatusList(): void;
    getReadinessProbeStatusList(): Array<ProbeStatus>;
    setReadinessProbeStatusList(value: Array<ProbeStatus>): AgentStatus;
    addReadinessProbeStatus(value?: ProbeStatus, index?: number): ProbeStatus;

    getTasksMap(): jspb.Map<string, sandboxes_api_v1_common_pb.TaskStatus>;
    clearTasksMap(): void;

    getProcessesMap(): jspb.Map<string, sandboxes_api_v1_process_pb.Process>;
    clearProcessesMap(): void;
    clearForwardedPortsList(): void;
    getForwardedPortsList(): Array<AgentStatus.PortForward>;
    setForwardedPortsList(value: Array<AgentStatus.PortForward>): AgentStatus;
    addForwardedPorts(value?: AgentStatus.PortForward, index?: number): AgentStatus.PortForward;

    hasUserSessions(): boolean;
    clearUserSessions(): void;
    getUserSessions(): AgentStatus.UserSessions | undefined;
    setUserSessions(value?: AgentStatus.UserSessions): AgentStatus;
    clearActivityProbeStatusList(): void;
    getActivityProbeStatusList(): Array<ProbeStatus>;
    setActivityProbeStatusList(value: Array<ProbeStatus>): AgentStatus;
    addActivityProbeStatus(value?: ProbeStatus, index?: number): ProbeStatus;

    hasFeatures(): boolean;
    clearFeatures(): void;
    getFeatures(): AgentStatus.Features | undefined;
    setFeatures(value?: AgentStatus.Features): AgentStatus;

    hasRestarting(): boolean;
    clearRestarting(): void;
    getRestarting(): AgentStatus.Restarting | undefined;
    setRestarting(value?: AgentStatus.Restarting): AgentStatus;

    hasRestriction(): boolean;
    clearRestriction(): void;
    getRestriction(): AgentStatus.Restriction | undefined;
    setRestriction(value?: AgentStatus.Restriction): AgentStatus;

    hasNotice(): boolean;
    clearNotice(): void;
    getNotice(): AgentStatus.Notice | undefined;
    setNotice(value?: AgentStatus.Notice): AgentStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AgentStatus.AsObject;
    static toObject(includeInstance: boolean, msg: AgentStatus): AgentStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AgentStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AgentStatus;
    static deserializeBinaryFromReader(message: AgentStatus, reader: jspb.BinaryReader): AgentStatus;
}

export namespace AgentStatus {
    export type AsObject = {
        info?: AgentInfo.AsObject,
        overview?: AgentStatus.Overview.AsObject,
        healthProbeStatusList: Array<ProbeStatus.AsObject>,
        readinessProbeStatusList: Array<ProbeStatus.AsObject>,

        tasksMap: Array<[string, sandboxes_api_v1_common_pb.TaskStatus.AsObject]>,

        processesMap: Array<[string, sandboxes_api_v1_process_pb.Process.AsObject]>,
        forwardedPortsList: Array<AgentStatus.PortForward.AsObject>,
        userSessions?: AgentStatus.UserSessions.AsObject,
        activityProbeStatusList: Array<ProbeStatus.AsObject>,
        features?: AgentStatus.Features.AsObject,
        restarting?: AgentStatus.Restarting.AsObject,
        restriction?: AgentStatus.Restriction.AsObject,
        notice?: AgentStatus.Notice.AsObject,
    }


    export class Overview extends jspb.Message { 
        getState(): AgentStatus.Overview.State;
        setState(value: AgentStatus.Overview.State): Overview;
        getSetupRunning(): boolean;
        setSetupRunning(value: boolean): Overview;

        hasHealth(): boolean;
        clearHealth(): void;
        getHealth(): ProbeStatus.Result | undefined;
        setHealth(value?: ProbeStatus.Result): Overview;

        hasReadiness(): boolean;
        clearReadiness(): void;
        getReadiness(): ProbeStatus.Result | undefined;
        setReadiness(value?: ProbeStatus.Result): Overview;

        hasFailure(): boolean;
        clearFailure(): void;
        getFailure(): sandboxes_api_v1_common_pb.Error | undefined;
        setFailure(value?: sandboxes_api_v1_common_pb.Error): Overview;

        hasActivity(): boolean;
        clearActivity(): void;
        getActivity(): ProbeStatus.Result | undefined;
        setActivity(value?: ProbeStatus.Result): Overview;
        getLifecycleRunning(): boolean;
        setLifecycleRunning(value: boolean): Overview;
        getSetupPausedOnFailure(): boolean;
        setSetupPausedOnFailure(value: boolean): Overview;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Overview.AsObject;
        static toObject(includeInstance: boolean, msg: Overview): Overview.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Overview, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Overview;
        static deserializeBinaryFromReader(message: Overview, reader: jspb.BinaryReader): Overview;
    }

    export namespace Overview {
        export type AsObject = {
            state: AgentStatus.Overview.State,
            setupRunning: boolean,
            health?: ProbeStatus.Result.AsObject,
            readiness?: ProbeStatus.Result.AsObject,
            failure?: sandboxes_api_v1_common_pb.Error.AsObject,
            activity?: ProbeStatus.Result.AsObject,
            lifecycleRunning: boolean,
            setupPausedOnFailure: boolean,
        }

        export enum State {
    UNKNOWN = 0,
    PROGRESSING = 1,
    READY = 2,
    PROBLEMATIC = 3,
    FAILED = 4,
        }

    }

    export class PortForward extends jspb.Message { 
        getLocal(): string;
        setLocal(value: string): PortForward;
        getRemoteService(): string;
        setRemoteService(value: string): PortForward;
        getRemotePort(): number;
        setRemotePort(value: number): PortForward;
        clearTagsList(): void;
        getTagsList(): Array<string>;
        setTagsList(value: Array<string>): PortForward;
        addTags(value: string, index?: number): string;

        hasStatus(): boolean;
        clearStatus(): void;
        getStatus(): sandboxes_api_v1_common_pb.RuntimeStatus | undefined;
        setStatus(value?: sandboxes_api_v1_common_pb.RuntimeStatus): PortForward;
        getRemote(): string;
        setRemote(value: string): PortForward;

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
            local: string,
            remoteService: string,
            remotePort: number,
            tagsList: Array<string>,
            status?: sandboxes_api_v1_common_pb.RuntimeStatus.AsObject,
            remote: string,
        }
    }

    export class UserSessions extends jspb.Message { 

        getStatsMap(): jspb.Map<string, number>;
        clearStatsMap(): void;

        hasReportedAt(): boolean;
        clearReportedAt(): void;
        getReportedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setReportedAt(value?: google_protobuf_timestamp_pb.Timestamp): UserSessions;

        getIdlesMap(): jspb.Map<string, number>;
        clearIdlesMap(): void;

        hasIdleSince(): boolean;
        clearIdleSince(): void;
        getIdleSince(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setIdleSince(value?: google_protobuf_timestamp_pb.Timestamp): UserSessions;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): UserSessions.AsObject;
        static toObject(includeInstance: boolean, msg: UserSessions): UserSessions.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: UserSessions, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): UserSessions;
        static deserializeBinaryFromReader(message: UserSessions, reader: jspb.BinaryReader): UserSessions;
    }

    export namespace UserSessions {
        export type AsObject = {

            statsMap: Array<[string, number]>,
            reportedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,

            idlesMap: Array<[string, number]>,
            idleSince?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        }
    }

    export class Features extends jspb.Message { 

        hasRdp(): boolean;
        clearRdp(): void;
        getRdp(): AgentStatus.Features.RDP | undefined;
        setRdp(value?: AgentStatus.Features.RDP): Features;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Features.AsObject;
        static toObject(includeInstance: boolean, msg: Features): Features.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Features, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Features;
        static deserializeBinaryFromReader(message: Features, reader: jspb.BinaryReader): Features;
    }

    export namespace Features {
        export type AsObject = {
            rdp?: AgentStatus.Features.RDP.AsObject,
        }


        export class RDP extends jspb.Message { 
            getWebAccess(): string;
            setWebAccess(value: string): RDP;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): RDP.AsObject;
            static toObject(includeInstance: boolean, msg: RDP): RDP.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: RDP, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): RDP;
            static deserializeBinaryFromReader(message: RDP, reader: jspb.BinaryReader): RDP;
        }

        export namespace RDP {
            export type AsObject = {
                webAccess: string,
            }
        }

    }

    export class Restarting extends jspb.Message { 
        getInProgress(): boolean;
        setInProgress(value: boolean): Restarting;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Restarting.AsObject;
        static toObject(includeInstance: boolean, msg: Restarting): Restarting.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Restarting, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Restarting;
        static deserializeBinaryFromReader(message: Restarting, reader: jspb.BinaryReader): Restarting;
    }

    export namespace Restarting {
        export type AsObject = {
            inProgress: boolean,
        }
    }

    export class Notice extends jspb.Message { 
        clearMessagesList(): void;
        getMessagesList(): Array<AgentStatus.Notice.Message>;
        setMessagesList(value: Array<AgentStatus.Notice.Message>): Notice;
        addMessages(value?: AgentStatus.Notice.Message, index?: number): AgentStatus.Notice.Message;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Notice.AsObject;
        static toObject(includeInstance: boolean, msg: Notice): Notice.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Notice, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Notice;
        static deserializeBinaryFromReader(message: Notice, reader: jspb.BinaryReader): Notice;
    }

    export namespace Notice {
        export type AsObject = {
            messagesList: Array<AgentStatus.Notice.Message.AsObject>,
        }


        export class Message extends jspb.Message { 
            getId(): string;
            setId(value: string): Message;

            hasPostedAt(): boolean;
            clearPostedAt(): void;
            getPostedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
            setPostedAt(value?: google_protobuf_timestamp_pb.Timestamp): Message;

            hasMessage(): boolean;
            clearMessage(): void;
            getMessage(): sandboxes_api_v1_notification_pb.Notification | undefined;
            setMessage(value?: sandboxes_api_v1_notification_pb.Notification): Message;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Message.AsObject;
            static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Message;
            static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
        }

        export namespace Message {
            export type AsObject = {
                id: string,
                postedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
                message?: sandboxes_api_v1_notification_pb.Notification.AsObject,
            }
        }

    }

    export class Restriction extends jspb.Message { 
        getRestricted(): boolean;
        setRestricted(value: boolean): Restriction;
        getAllowChange(): boolean;
        setAllowChange(value: boolean): Restriction;

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
            restricted: boolean,
            allowChange: boolean,
        }
    }

}
