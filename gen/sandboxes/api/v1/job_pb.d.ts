// package: sandboxes.api.v1
// file: sandboxes/api/v1/job.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as sandboxes_api_v1_common_pb from "../../../sandboxes/api/v1/common_pb";
import * as sandboxes_api_v1_object_pb from "../../../sandboxes/api/v1/object_pb";
import * as sandboxes_api_v1_app_pb from "../../../sandboxes/api/v1/app_pb";
import * as sandboxes_api_v1_sandbox_pb from "../../../sandboxes/api/v1/sandbox_pb";
import * as sandboxes_api_v1_repo_pb from "../../../sandboxes/api/v1/repo_pb";

export class Job extends jspb.Message { 

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): sandboxes_api_v1_object_pb.ObjectMeta | undefined;
    setMeta(value?: sandboxes_api_v1_object_pb.ObjectMeta): Job;

    hasSpec(): boolean;
    clearSpec(): void;
    getSpec(): Job.Spec | undefined;
    setSpec(value?: Job.Spec): Job;
    clearExecutionsList(): void;
    getExecutionsList(): Array<Job.Execution>;
    setExecutionsList(value: Array<Job.Execution>): Job;
    addExecutions(value?: Job.Execution, index?: number): Job.Execution;

    hasStats(): boolean;
    clearStats(): void;
    getStats(): Job.Stats | undefined;
    setStats(value?: Job.Stats): Job;

    hasGoldenExecution(): boolean;
    clearGoldenExecution(): void;
    getGoldenExecution(): Job.GoldenExecution | undefined;
    setGoldenExecution(value?: Job.GoldenExecution): Job;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Job.AsObject;
    static toObject(includeInstance: boolean, msg: Job): Job.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Job, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Job;
    static deserializeBinaryFromReader(message: Job, reader: jspb.BinaryReader): Job;
}

export namespace Job {
    export type AsObject = {
        meta?: sandboxes_api_v1_object_pb.ObjectMeta.AsObject,
        spec?: Job.Spec.AsObject,
        executionsList: Array<Job.Execution.AsObject>,
        stats?: Job.Stats.AsObject,
        goldenExecution?: Job.GoldenExecution.AsObject,
    }


    export class SandboxCreation extends jspb.Message { 

        hasTemplate(): boolean;
        clearTemplate(): void;
        getTemplate(): string;
        setTemplate(value: string): SandboxCreation;

        hasDefinition(): boolean;
        clearDefinition(): void;
        getDefinition(): sandboxes_api_v1_app_pb.AppDefinition | undefined;
        setDefinition(value?: sandboxes_api_v1_app_pb.AppDefinition): SandboxCreation;
        clearEnvList(): void;
        getEnvList(): Array<string>;
        setEnvList(value: Array<string>): SandboxCreation;
        addEnv(value: string, index?: number): string;

        hasAccessControl(): boolean;
        clearAccessControl(): void;
        getAccessControl(): sandboxes_api_v1_sandbox_pb.Sandbox.AccessControl | undefined;
        setAccessControl(value?: sandboxes_api_v1_sandbox_pb.Sandbox.AccessControl): SandboxCreation;
        getFolder(): string;
        setFolder(value: string): SandboxCreation;

        getFromCase(): SandboxCreation.FromCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SandboxCreation.AsObject;
        static toObject(includeInstance: boolean, msg: SandboxCreation): SandboxCreation.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SandboxCreation, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SandboxCreation;
        static deserializeBinaryFromReader(message: SandboxCreation, reader: jspb.BinaryReader): SandboxCreation;
    }

    export namespace SandboxCreation {
        export type AsObject = {
            template: string,
            definition?: sandboxes_api_v1_app_pb.AppDefinition.AsObject,
            envList: Array<string>,
            accessControl?: sandboxes_api_v1_sandbox_pb.Sandbox.AccessControl.AsObject,
            folder: string,
        }

        export enum FromCase {
            FROM_NOT_SET = 0,
            TEMPLATE = 1,
            DEFINITION = 2,
        }

    }

    export class Cancellation extends jspb.Message { 

        hasRequestedAt(): boolean;
        clearRequestedAt(): void;
        getRequestedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setRequestedAt(value?: google_protobuf_timestamp_pb.Timestamp): Cancellation;

        hasCause(): boolean;
        clearCause(): void;
        getCause(): sandboxes_api_v1_common_pb.Error | undefined;
        setCause(value?: sandboxes_api_v1_common_pb.Error): Cancellation;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Cancellation.AsObject;
        static toObject(includeInstance: boolean, msg: Cancellation): Cancellation.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Cancellation, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Cancellation;
        static deserializeBinaryFromReader(message: Cancellation, reader: jspb.BinaryReader): Cancellation;
    }

    export namespace Cancellation {
        export type AsObject = {
            requestedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            cause?: sandboxes_api_v1_common_pb.Error.AsObject,
        }
    }

    export class Execution extends jspb.Message { 
        getId(): number;
        setId(value: number): Execution;

        hasEvent(): boolean;
        clearEvent(): void;
        getEvent(): Job.Event | undefined;
        setEvent(value?: Job.Event): Execution;

        hasSpec(): boolean;
        clearSpec(): void;
        getSpec(): Job.Spec | undefined;
        setSpec(value?: Job.Spec): Execution;

        hasStatus(): boolean;
        clearStatus(): void;
        getStatus(): sandboxes_api_v1_common_pb.RuntimeStatus | undefined;
        setStatus(value?: sandboxes_api_v1_common_pb.RuntimeStatus): Execution;

        hasCancellation(): boolean;
        clearCancellation(): void;
        getCancellation(): Job.Cancellation | undefined;
        setCancellation(value?: Job.Cancellation): Execution;

        hasState(): boolean;
        clearState(): void;
        getState(): Job.State | undefined;
        setState(value?: Job.State): Execution;
        getSandboxId(): string;
        setSandboxId(value: string): Execution;

        hasRetention(): boolean;
        clearRetention(): void;
        getRetention(): google_protobuf_duration_pb.Duration | undefined;
        setRetention(value?: google_protobuf_duration_pb.Duration): Execution;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Execution.AsObject;
        static toObject(includeInstance: boolean, msg: Execution): Execution.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Execution, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Execution;
        static deserializeBinaryFromReader(message: Execution, reader: jspb.BinaryReader): Execution;
    }

    export namespace Execution {
        export type AsObject = {
            id: number,
            event?: Job.Event.AsObject,
            spec?: Job.Spec.AsObject,
            status?: sandboxes_api_v1_common_pb.RuntimeStatus.AsObject,
            cancellation?: Job.Cancellation.AsObject,
            state?: Job.State.AsObject,
            sandboxId: string,
            retention?: google_protobuf_duration_pb.Duration.AsObject,
        }
    }

    export class Stats extends jspb.Message { 
        getExecutionCount(): number;
        setExecutionCount(value: number): Stats;
        getSuccessCount(): number;
        setSuccessCount(value: number): Stats;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Stats.AsObject;
        static toObject(includeInstance: boolean, msg: Stats): Stats.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Stats, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Stats;
        static deserializeBinaryFromReader(message: Stats, reader: jspb.BinaryReader): Stats;
    }

    export namespace Stats {
        export type AsObject = {
            executionCount: number,
            successCount: number,
        }
    }

    export class Trigger extends jspb.Message { 
        getDisabled(): boolean;
        setDisabled(value: boolean): Trigger;
        getOverrunPolicy(): Job.Trigger.OverrunPolicy;
        setOverrunPolicy(value: Job.Trigger.OverrunPolicy): Trigger;

        hasCron(): boolean;
        clearCron(): void;
        getCron(): Job.Trigger.Cron | undefined;
        setCron(value?: Job.Trigger.Cron): Trigger;

        getConditionCase(): Trigger.ConditionCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Trigger.AsObject;
        static toObject(includeInstance: boolean, msg: Trigger): Trigger.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Trigger, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Trigger;
        static deserializeBinaryFromReader(message: Trigger, reader: jspb.BinaryReader): Trigger;
    }

    export namespace Trigger {
        export type AsObject = {
            disabled: boolean,
            overrunPolicy: Job.Trigger.OverrunPolicy,
            cron?: Job.Trigger.Cron.AsObject,
        }


        export class Cron extends jspb.Message { 
            getSchedule(): string;
            setSchedule(value: string): Cron;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Cron.AsObject;
            static toObject(includeInstance: boolean, msg: Cron): Cron.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Cron, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Cron;
            static deserializeBinaryFromReader(message: Cron, reader: jspb.BinaryReader): Cron;
        }

        export namespace Cron {
            export type AsObject = {
                schedule: string,
            }
        }


        export enum OverrunPolicy {
    DEFAULT = 0,
    SKIP = 1,
    REPLACE = 2,
        }


        export enum ConditionCase {
            CONDITION_NOT_SET = 0,
            CRON = 10,
        }

    }

    export class Event extends jspb.Message { 
        getId(): string;
        setId(value: string): Event;

        hasTime(): boolean;
        clearTime(): void;
        getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setTime(value?: google_protobuf_timestamp_pb.Timestamp): Event;
        getSource(): Job.Event.Source;
        setSource(value: Job.Event.Source): Event;

        hasData(): boolean;
        clearData(): void;
        getData(): google_protobuf_any_pb.Any | undefined;
        setData(value?: google_protobuf_any_pb.Any): Event;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Event.AsObject;
        static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Event;
        static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
    }

    export namespace Event {
        export type AsObject = {
            id: string,
            time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            source: Job.Event.Source,
            data?: google_protobuf_any_pb.Any.AsObject,
        }

        export enum Source {
    DEFAULT = 0,
    OOB = 1,
        }

    }

    export class Action extends jspb.Message { 
        getOwner(): string;
        setOwner(value: string): Action;

        hasRetention(): boolean;
        clearRetention(): void;
        getRetention(): google_protobuf_duration_pb.Duration | undefined;
        setRetention(value?: google_protobuf_duration_pb.Duration): Action;

        hasSandbox(): boolean;
        clearSandbox(): void;
        getSandbox(): Job.SandboxCreation | undefined;
        setSandbox(value?: Job.SandboxCreation): Action;

        hasPrebuild(): boolean;
        clearPrebuild(): void;
        getPrebuild(): Prebuild.Action | undefined;
        setPrebuild(value?: Prebuild.Action): Action;

        hasCustom(): boolean;
        clearCustom(): void;
        getCustom(): CustomRun.Action | undefined;
        setCustom(value?: CustomRun.Action): Action;

        getActionCase(): Action.ActionCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Action.AsObject;
        static toObject(includeInstance: boolean, msg: Action): Action.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Action, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Action;
        static deserializeBinaryFromReader(message: Action, reader: jspb.BinaryReader): Action;
    }

    export namespace Action {
        export type AsObject = {
            owner: string,
            retention?: google_protobuf_duration_pb.Duration.AsObject,
            sandbox?: Job.SandboxCreation.AsObject,
            prebuild?: Prebuild.Action.AsObject,
            custom?: CustomRun.Action.AsObject,
        }

        export enum ActionCase {
            ACTION_NOT_SET = 0,
            PREBUILD = 11,
            CUSTOM = 12,
        }

    }

    export class State extends jspb.Message { 

        hasPrebuild(): boolean;
        clearPrebuild(): void;
        getPrebuild(): Prebuild.State | undefined;
        setPrebuild(value?: Prebuild.State): State;

        hasCustom(): boolean;
        clearCustom(): void;
        getCustom(): CustomRun.State | undefined;
        setCustom(value?: CustomRun.State): State;

        getStateCase(): State.StateCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): State.AsObject;
        static toObject(includeInstance: boolean, msg: State): State.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: State, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): State;
        static deserializeBinaryFromReader(message: State, reader: jspb.BinaryReader): State;
    }

    export namespace State {
        export type AsObject = {
            prebuild?: Prebuild.State.AsObject,
            custom?: CustomRun.State.AsObject,
        }

        export enum StateCase {
            STATE_NOT_SET = 0,
            PREBUILD = 11,
            CUSTOM = 12,
        }

    }

    export class Spec extends jspb.Message { 
        getBrief(): string;
        setBrief(value: string): Spec;
        getOverview(): string;
        setOverview(value: string): Spec;

        hasTrigger(): boolean;
        clearTrigger(): void;
        getTrigger(): Job.Trigger | undefined;
        setTrigger(value?: Job.Trigger): Spec;

        hasAction(): boolean;
        clearAction(): void;
        getAction(): Job.Action | undefined;
        setAction(value?: Job.Action): Spec;

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
            brief: string,
            overview: string,
            trigger?: Job.Trigger.AsObject,
            action?: Job.Action.AsObject,
        }
    }

    export class GoldenExecution extends jspb.Message { 
        getSelection(): Job.GoldenExecution.Selection;
        setSelection(value: Job.GoldenExecution.Selection): GoldenExecution;
        getExecutionId(): number;
        setExecutionId(value: number): GoldenExecution;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GoldenExecution.AsObject;
        static toObject(includeInstance: boolean, msg: GoldenExecution): GoldenExecution.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GoldenExecution, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GoldenExecution;
        static deserializeBinaryFromReader(message: GoldenExecution, reader: jspb.BinaryReader): GoldenExecution;
    }

    export namespace GoldenExecution {
        export type AsObject = {
            selection: Job.GoldenExecution.Selection,
            executionId: number,
        }

        export enum Selection {
    UNSPECIFIED = 0,
    LAST_SUCCESS = 1,
    EXPLICIT = 2,
        }

    }

}

export class Prebuild extends jspb.Message { 

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
    }


    export class Snapshot extends jspb.Message { 
        getFolder(): string;
        setFolder(value: string): Snapshot;
        getNamePrefix(): string;
        setNamePrefix(value: string): Snapshot;

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
            folder: string,
            namePrefix: string,
        }
    }

    export class Action extends jspb.Message { 

        hasSandboxComposer(): boolean;
        clearSandboxComposer(): void;
        getSandboxComposer(): sandboxes_api_v1_sandbox_pb.Composer | undefined;
        setSandboxComposer(value?: sandboxes_api_v1_sandbox_pb.Composer): Action;

        hasSandboxAccessControl(): boolean;
        clearSandboxAccessControl(): void;
        getSandboxAccessControl(): sandboxes_api_v1_sandbox_pb.Sandbox.AccessControl | undefined;
        setSandboxAccessControl(value?: sandboxes_api_v1_sandbox_pb.Sandbox.AccessControl): Action;
        getSandboxFolderId(): string;
        setSandboxFolderId(value: string): Action;
        getSnapshotFolderId(): string;
        setSnapshotFolderId(value: string): Action;
        getSnapshotNamePrefix(): string;
        setSnapshotNamePrefix(value: string): Action;
        getExplicit(): boolean;
        setExplicit(value: boolean): Action;
        clearCachesList(): void;
        getCachesList(): Array<Prebuild.Action.Cache>;
        setCachesList(value: Array<Prebuild.Action.Cache>): Action;
        addCaches(value?: Prebuild.Action.Cache, index?: number): Prebuild.Action.Cache;

        hasSnapshot(): boolean;
        clearSnapshot(): void;
        getSnapshot(): Prebuild.Snapshot | undefined;
        setSnapshot(value?: Prebuild.Snapshot): Action;
        clearScopesList(): void;
        getScopesList(): Array<string>;
        setScopesList(value: Array<string>): Action;
        addScopes(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Action.AsObject;
        static toObject(includeInstance: boolean, msg: Action): Action.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Action, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Action;
        static deserializeBinaryFromReader(message: Action, reader: jspb.BinaryReader): Action;
    }

    export namespace Action {
        export type AsObject = {
            sandboxComposer?: sandboxes_api_v1_sandbox_pb.Composer.AsObject,
            sandboxAccessControl?: sandboxes_api_v1_sandbox_pb.Sandbox.AccessControl.AsObject,
            sandboxFolderId: string,
            snapshotFolderId: string,
            snapshotNamePrefix: string,
            explicit: boolean,
            cachesList: Array<Prebuild.Action.Cache.AsObject>,
            snapshot?: Prebuild.Snapshot.AsObject,
            scopesList: Array<string>,
        }


        export class Cache extends jspb.Message { 
            getWorkspace(): string;
            setWorkspace(value: string): Cache;
            getCheckoutPath(): string;
            setCheckoutPath(value: string): Cache;
            getExcluded(): boolean;
            setExcluded(value: boolean): Cache;
            clearIncludeDirsList(): void;
            getIncludeDirsList(): Array<string>;
            setIncludeDirsList(value: Array<string>): Cache;
            addIncludeDirs(value: string, index?: number): string;

            hasPreArchive(): boolean;
            clearPreArchive(): void;
            getPreArchive(): sandboxes_api_v1_repo_pb.Repo.Run | undefined;
            setPreArchive(value?: sandboxes_api_v1_repo_pb.Repo.Run): Cache;

            hasPostRestore(): boolean;
            clearPostRestore(): void;
            getPostRestore(): sandboxes_api_v1_repo_pb.Repo.Run | undefined;
            setPostRestore(value?: sandboxes_api_v1_repo_pb.Repo.Run): Cache;

            hasBuild(): boolean;
            clearBuild(): void;
            getBuild(): sandboxes_api_v1_repo_pb.Repo.Run | undefined;
            setBuild(value?: sandboxes_api_v1_repo_pb.Repo.Run): Cache;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Cache.AsObject;
            static toObject(includeInstance: boolean, msg: Cache): Cache.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Cache, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Cache;
            static deserializeBinaryFromReader(message: Cache, reader: jspb.BinaryReader): Cache;
        }

        export namespace Cache {
            export type AsObject = {
                workspace: string,
                checkoutPath: string,
                excluded: boolean,
                includeDirsList: Array<string>,
                preArchive?: sandboxes_api_v1_repo_pb.Repo.Run.AsObject,
                postRestore?: sandboxes_api_v1_repo_pb.Repo.Run.AsObject,
                build?: sandboxes_api_v1_repo_pb.Repo.Run.AsObject,
            }
        }

    }

    export class State extends jspb.Message { 
        clearReposList(): void;
        getReposList(): Array<Prebuild.State.CachedRepo>;
        setReposList(value: Array<Prebuild.State.CachedRepo>): State;
        addRepos(value?: Prebuild.State.CachedRepo, index?: number): Prebuild.State.CachedRepo;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): State.AsObject;
        static toObject(includeInstance: boolean, msg: State): State.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: State, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): State;
        static deserializeBinaryFromReader(message: State, reader: jspb.BinaryReader): State;
    }

    export namespace State {
        export type AsObject = {
            reposList: Array<Prebuild.State.CachedRepo.AsObject>,
        }


        export class CachedRepo extends jspb.Message { 

            hasRepo(): boolean;
            clearRepo(): void;
            getRepo(): sandboxes_api_v1_app_pb.Checkout.Repo | undefined;
            setRepo(value?: sandboxes_api_v1_app_pb.Checkout.Repo): CachedRepo;
            getVersionSpec(): string;
            setVersionSpec(value: string): CachedRepo;
            getBuildPath(): string;
            setBuildPath(value: string): CachedRepo;
            getVersion(): string;
            setVersion(value: string): CachedRepo;
            getSnapshotId(): string;
            setSnapshotId(value: string): CachedRepo;
            getWorkloadName(): string;
            setWorkloadName(value: string): CachedRepo;

            hasStatus(): boolean;
            clearStatus(): void;
            getStatus(): sandboxes_api_v1_common_pb.RuntimeStatus | undefined;
            setStatus(value?: sandboxes_api_v1_common_pb.RuntimeStatus): CachedRepo;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): CachedRepo.AsObject;
            static toObject(includeInstance: boolean, msg: CachedRepo): CachedRepo.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: CachedRepo, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): CachedRepo;
            static deserializeBinaryFromReader(message: CachedRepo, reader: jspb.BinaryReader): CachedRepo;
        }

        export namespace CachedRepo {
            export type AsObject = {
                repo?: sandboxes_api_v1_app_pb.Checkout.Repo.AsObject,
                versionSpec: string,
                buildPath: string,
                version: string,
                snapshotId: string,
                workloadName: string,
                status?: sandboxes_api_v1_common_pb.RuntimeStatus.AsObject,
            }
        }

    }

}

export class CustomRun extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomRun.AsObject;
    static toObject(includeInstance: boolean, msg: CustomRun): CustomRun.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomRun, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomRun;
    static deserializeBinaryFromReader(message: CustomRun, reader: jspb.BinaryReader): CustomRun;
}

export namespace CustomRun {
    export type AsObject = {
    }


    export class Action extends jspb.Message { 

        hasRun(): boolean;
        clearRun(): void;
        getRun(): sandboxes_api_v1_repo_pb.Repo.Run | undefined;
        setRun(value?: sandboxes_api_v1_repo_pb.Repo.Run): Action;
        getWorkspace(): string;
        setWorkspace(value: string): Action;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Action.AsObject;
        static toObject(includeInstance: boolean, msg: Action): Action.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Action, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Action;
        static deserializeBinaryFromReader(message: Action, reader: jspb.BinaryReader): Action;
    }

    export namespace Action {
        export type AsObject = {
            run?: sandboxes_api_v1_repo_pb.Repo.Run.AsObject,
            workspace: string,
        }
    }

    export class State extends jspb.Message { 

        hasStatus(): boolean;
        clearStatus(): void;
        getStatus(): sandboxes_api_v1_common_pb.RuntimeStatus | undefined;
        setStatus(value?: sandboxes_api_v1_common_pb.RuntimeStatus): State;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): State.AsObject;
        static toObject(includeInstance: boolean, msg: State): State.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: State, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): State;
        static deserializeBinaryFromReader(message: State, reader: jspb.BinaryReader): State;
    }

    export namespace State {
        export type AsObject = {
            status?: sandboxes_api_v1_common_pb.RuntimeStatus.AsObject,
        }
    }

}
