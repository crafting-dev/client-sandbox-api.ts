// package: sandboxes.api.v1
// file: sandboxes/api/v1/action_workspace.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as sandboxes_api_v1_common_pb from "../../../sandboxes/api/v1/common_pb";
import * as sandboxes_api_v1_process_pb from "../../../sandboxes/api/v1/process_pb";
import * as sandboxes_api_v1_repo_pb from "../../../sandboxes/api/v1/repo_pb";
import * as sandboxes_api_v1_workload_pb from "../../../sandboxes/api/v1/workload_pb";

export class GitLog extends jspb.Message { 
    getCommit(): string;
    setCommit(value: string): GitLog;
    getSubject(): string;
    setSubject(value: string): GitLog;
    getBody(): string;
    setBody(value: string): GitLog;

    hasAuthor(): boolean;
    clearAuthor(): void;
    getAuthor(): GitLog.Authoring | undefined;
    setAuthor(value?: GitLog.Authoring): GitLog;

    hasCommitter(): boolean;
    clearCommitter(): void;
    getCommitter(): GitLog.Authoring | undefined;
    setCommitter(value?: GitLog.Authoring): GitLog;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GitLog.AsObject;
    static toObject(includeInstance: boolean, msg: GitLog): GitLog.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GitLog, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GitLog;
    static deserializeBinaryFromReader(message: GitLog, reader: jspb.BinaryReader): GitLog;
}

export namespace GitLog {
    export type AsObject = {
        commit: string,
        subject: string,
        body: string,
        author?: GitLog.Authoring.AsObject,
        committer?: GitLog.Authoring.AsObject,
    }


    export class Authoring extends jspb.Message { 

        hasTime(): boolean;
        clearTime(): void;
        getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setTime(value?: google_protobuf_timestamp_pb.Timestamp): Authoring;
        getEmail(): string;
        setEmail(value: string): Authoring;
        getName(): string;
        setName(value: string): Authoring;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Authoring.AsObject;
        static toObject(includeInstance: boolean, msg: Authoring): Authoring.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Authoring, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Authoring;
        static deserializeBinaryFromReader(message: Authoring, reader: jspb.BinaryReader): Authoring;
    }

    export namespace Authoring {
        export type AsObject = {
            time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            email: string,
            name: string,
        }
    }

}

export class WorkspaceRepo extends jspb.Message { 
    getPath(): string;
    setPath(value: string): WorkspaceRepo;

    hasManifest(): boolean;
    clearManifest(): void;
    getManifest(): sandboxes_api_v1_repo_pb.Repo.Manifest | undefined;
    setManifest(value?: sandboxes_api_v1_repo_pb.Repo.Manifest): WorkspaceRepo;
    clearProcessesList(): void;
    getProcessesList(): Array<sandboxes_api_v1_process_pb.Process>;
    setProcessesList(value: Array<sandboxes_api_v1_process_pb.Process>): WorkspaceRepo;
    addProcesses(value?: sandboxes_api_v1_process_pb.Process, index?: number): sandboxes_api_v1_process_pb.Process;
    getBranch(): string;
    setBranch(value: string): WorkspaceRepo;

    hasLastCommit(): boolean;
    clearLastCommit(): void;
    getLastCommit(): GitLog | undefined;
    setLastCommit(value?: GitLog): WorkspaceRepo;
    getUncommittedChanges(): boolean;
    setUncommittedChanges(value: boolean): WorkspaceRepo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorkspaceRepo.AsObject;
    static toObject(includeInstance: boolean, msg: WorkspaceRepo): WorkspaceRepo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorkspaceRepo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorkspaceRepo;
    static deserializeBinaryFromReader(message: WorkspaceRepo, reader: jspb.BinaryReader): WorkspaceRepo;
}

export namespace WorkspaceRepo {
    export type AsObject = {
        path: string,
        manifest?: sandboxes_api_v1_repo_pb.Repo.Manifest.AsObject,
        processesList: Array<sandboxes_api_v1_process_pb.Process.AsObject>,
        branch: string,
        lastCommit?: GitLog.AsObject,
        uncommittedChanges: boolean,
    }
}

export class FetchReposAction extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FetchReposAction.AsObject;
    static toObject(includeInstance: boolean, msg: FetchReposAction): FetchReposAction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FetchReposAction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FetchReposAction;
    static deserializeBinaryFromReader(message: FetchReposAction, reader: jspb.BinaryReader): FetchReposAction;
}

export namespace FetchReposAction {
    export type AsObject = {
    }


    export class Result extends jspb.Message { 
        clearReposList(): void;
        getReposList(): Array<WorkspaceRepo>;
        setReposList(value: Array<WorkspaceRepo>): Result;
        addRepos(value?: WorkspaceRepo, index?: number): WorkspaceRepo;

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
            reposList: Array<WorkspaceRepo.AsObject>,
        }
    }

}

export class EnableProcessesAction extends jspb.Message { 
    getEnabled(): boolean;
    setEnabled(value: boolean): EnableProcessesAction;

    hasSpecific(): boolean;
    clearSpecific(): void;
    getSpecific(): EnableProcessesAction.SpecificProcesses | undefined;
    setSpecific(value?: EnableProcessesAction.SpecificProcesses): EnableProcessesAction;

    hasAll(): boolean;
    clearAll(): void;
    getAll(): EnableProcessesAction.AllProcesses | undefined;
    setAll(value?: EnableProcessesAction.AllProcesses): EnableProcessesAction;

    getProcessesCase(): EnableProcessesAction.ProcessesCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EnableProcessesAction.AsObject;
    static toObject(includeInstance: boolean, msg: EnableProcessesAction): EnableProcessesAction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EnableProcessesAction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EnableProcessesAction;
    static deserializeBinaryFromReader(message: EnableProcessesAction, reader: jspb.BinaryReader): EnableProcessesAction;
}

export namespace EnableProcessesAction {
    export type AsObject = {
        enabled: boolean,
        specific?: EnableProcessesAction.SpecificProcesses.AsObject,
        all?: EnableProcessesAction.AllProcesses.AsObject,
    }


    export class SpecificProcesses extends jspb.Message { 
        clearProcessesList(): void;
        getProcessesList(): Array<sandboxes_api_v1_workload_pb.ProcessRef>;
        setProcessesList(value: Array<sandboxes_api_v1_workload_pb.ProcessRef>): SpecificProcesses;
        addProcesses(value?: sandboxes_api_v1_workload_pb.ProcessRef, index?: number): sandboxes_api_v1_workload_pb.ProcessRef;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SpecificProcesses.AsObject;
        static toObject(includeInstance: boolean, msg: SpecificProcesses): SpecificProcesses.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SpecificProcesses, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SpecificProcesses;
        static deserializeBinaryFromReader(message: SpecificProcesses, reader: jspb.BinaryReader): SpecificProcesses;
    }

    export namespace SpecificProcesses {
        export type AsObject = {
            processesList: Array<sandboxes_api_v1_workload_pb.ProcessRef.AsObject>,
        }
    }

    export class AllProcesses extends jspb.Message { 
        clearKindsList(): void;
        getKindsList(): Array<sandboxes_api_v1_workload_pb.ProcessRef.Kind>;
        setKindsList(value: Array<sandboxes_api_v1_workload_pb.ProcessRef.Kind>): AllProcesses;
        addKinds(value: sandboxes_api_v1_workload_pb.ProcessRef.Kind, index?: number): sandboxes_api_v1_workload_pb.ProcessRef.Kind;
        clearFromReposList(): void;
        getFromReposList(): Array<string>;
        setFromReposList(value: Array<string>): AllProcesses;
        addFromRepos(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AllProcesses.AsObject;
        static toObject(includeInstance: boolean, msg: AllProcesses): AllProcesses.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AllProcesses, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AllProcesses;
        static deserializeBinaryFromReader(message: AllProcesses, reader: jspb.BinaryReader): AllProcesses;
    }

    export namespace AllProcesses {
        export type AsObject = {
            kindsList: Array<sandboxes_api_v1_workload_pb.ProcessRef.Kind>,
            fromReposList: Array<string>,
        }
    }

    export class Result extends jspb.Message { 
        clearProcessesList(): void;
        getProcessesList(): Array<EnableProcessesAction.Result.ProcessResult>;
        setProcessesList(value: Array<EnableProcessesAction.Result.ProcessResult>): Result;
        addProcesses(value?: EnableProcessesAction.Result.ProcessResult, index?: number): EnableProcessesAction.Result.ProcessResult;

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
            processesList: Array<EnableProcessesAction.Result.ProcessResult.AsObject>,
        }


        export class ProcessResult extends jspb.Message { 

            hasProcess(): boolean;
            clearProcess(): void;
            getProcess(): sandboxes_api_v1_process_pb.Process | undefined;
            setProcess(value?: sandboxes_api_v1_process_pb.Process): ProcessResult;

            hasError(): boolean;
            clearError(): void;
            getError(): sandboxes_api_v1_common_pb.Error | undefined;
            setError(value?: sandboxes_api_v1_common_pb.Error): ProcessResult;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): ProcessResult.AsObject;
            static toObject(includeInstance: boolean, msg: ProcessResult): ProcessResult.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: ProcessResult, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): ProcessResult;
            static deserializeBinaryFromReader(message: ProcessResult, reader: jspb.BinaryReader): ProcessResult;
        }

        export namespace ProcessResult {
            export type AsObject = {
                process?: sandboxes_api_v1_process_pb.Process.AsObject,
                error?: sandboxes_api_v1_common_pb.Error.AsObject,
            }
        }

    }


    export enum ProcessesCase {
        PROCESSES_NOT_SET = 0,
        SPECIFIC = 2,
        ALL = 3,
    }

}

export class PrepareHomeSnapshotAction extends jspb.Message { 
    getGenerateIfAbsent(): boolean;
    setGenerateIfAbsent(value: boolean): PrepareHomeSnapshotAction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PrepareHomeSnapshotAction.AsObject;
    static toObject(includeInstance: boolean, msg: PrepareHomeSnapshotAction): PrepareHomeSnapshotAction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PrepareHomeSnapshotAction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PrepareHomeSnapshotAction;
    static deserializeBinaryFromReader(message: PrepareHomeSnapshotAction, reader: jspb.BinaryReader): PrepareHomeSnapshotAction;
}

export namespace PrepareHomeSnapshotAction {
    export type AsObject = {
        generateIfAbsent: boolean,
    }


    export class Result extends jspb.Message { 
        clearIncludesList(): void;
        getIncludesList(): Array<string>;
        setIncludesList(value: Array<string>): Result;
        addIncludes(value: string, index?: number): string;
        clearExcludesList(): void;
        getExcludesList(): Array<string>;
        setExcludesList(value: Array<string>): Result;
        addExcludes(value: string, index?: number): string;
        getGeneratedIncludes(): boolean;
        setGeneratedIncludes(value: boolean): Result;
        getGeneratedExcludes(): boolean;
        setGeneratedExcludes(value: boolean): Result;

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
            includesList: Array<string>,
            excludesList: Array<string>,
            generatedIncludes: boolean,
            generatedExcludes: boolean,
        }
    }

}

export class RunRepoTestAction extends jspb.Message { 
    getRepoPath(): string;
    setRepoPath(value: string): RunRepoTestAction;
    getTestName(): string;
    setTestName(value: string): RunRepoTestAction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RunRepoTestAction.AsObject;
    static toObject(includeInstance: boolean, msg: RunRepoTestAction): RunRepoTestAction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RunRepoTestAction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RunRepoTestAction;
    static deserializeBinaryFromReader(message: RunRepoTestAction, reader: jspb.BinaryReader): RunRepoTestAction;
}

export namespace RunRepoTestAction {
    export type AsObject = {
        repoPath: string,
        testName: string,
    }


    export class Result extends jspb.Message { 
        getTaskId(): string;
        setTaskId(value: string): Result;

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
            taskId: string,
        }
    }

}

export class FetchRepoTestResultAction extends jspb.Message { 
    getRepoPath(): string;
    setRepoPath(value: string): FetchRepoTestResultAction;
    getTestName(): string;
    setTestName(value: string): FetchRepoTestResultAction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FetchRepoTestResultAction.AsObject;
    static toObject(includeInstance: boolean, msg: FetchRepoTestResultAction): FetchRepoTestResultAction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FetchRepoTestResultAction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FetchRepoTestResultAction;
    static deserializeBinaryFromReader(message: FetchRepoTestResultAction, reader: jspb.BinaryReader): FetchRepoTestResultAction;
}

export namespace FetchRepoTestResultAction {
    export type AsObject = {
        repoPath: string,
        testName: string,
    }


    export class Result extends jspb.Message { 
        getFound(): boolean;
        setFound(value: boolean): Result;
        getIsLastRunSuccessful(): boolean;
        setIsLastRunSuccessful(value: boolean): Result;
        getResult(): string;
        setResult(value: string): Result;
        getResultType(): string;
        setResultType(value: string): Result;

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
            found: boolean,
            isLastRunSuccessful: boolean,
            result: string,
            resultType: string,
        }
    }

}

export class ConnectAuthorizeAction extends jspb.Message { 
    getCsr(): string;
    setCsr(value: string): ConnectAuthorizeAction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConnectAuthorizeAction.AsObject;
    static toObject(includeInstance: boolean, msg: ConnectAuthorizeAction): ConnectAuthorizeAction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConnectAuthorizeAction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConnectAuthorizeAction;
    static deserializeBinaryFromReader(message: ConnectAuthorizeAction, reader: jspb.BinaryReader): ConnectAuthorizeAction;
}

export namespace ConnectAuthorizeAction {
    export type AsObject = {
        csr: string,
    }


    export class Result extends jspb.Message { 
        getCertificate(): string;
        setCertificate(value: string): Result;
        getCa(): string;
        setCa(value: string): Result;
        getServerName(): string;
        setServerName(value: string): Result;
        getEndpoint(): string;
        setEndpoint(value: string): Result;

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
            certificate: string,
            ca: string,
            serverName: string,
            endpoint: string,
        }
    }

}

export class DisableRestriction extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DisableRestriction.AsObject;
    static toObject(includeInstance: boolean, msg: DisableRestriction): DisableRestriction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DisableRestriction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DisableRestriction;
    static deserializeBinaryFromReader(message: DisableRestriction, reader: jspb.BinaryReader): DisableRestriction;
}

export namespace DisableRestriction {
    export type AsObject = {
    }


    export class Result extends jspb.Message { 

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
        }
    }

}
