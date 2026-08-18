// package: sandboxes.api.v1
// file: sandboxes/api/v1/resource_sourcecontrol.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class SourceControlProvider extends jspb.Message { 
    clearRepositoriesList(): void;
    getRepositoriesList(): Array<SourceControlProvider.Repo>;
    setRepositoriesList(value: Array<SourceControlProvider.Repo>): SourceControlProvider;
    addRepositories(value?: SourceControlProvider.Repo, index?: number): SourceControlProvider.Repo;

    hasGithub(): boolean;
    clearGithub(): void;
    getGithub(): SourceControlProvider.GitHub | undefined;
    setGithub(value?: SourceControlProvider.GitHub): SourceControlProvider;

    getProviderCase(): SourceControlProvider.ProviderCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SourceControlProvider.AsObject;
    static toObject(includeInstance: boolean, msg: SourceControlProvider): SourceControlProvider.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SourceControlProvider, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SourceControlProvider;
    static deserializeBinaryFromReader(message: SourceControlProvider, reader: jspb.BinaryReader): SourceControlProvider;
}

export namespace SourceControlProvider {
    export type AsObject = {
        repositoriesList: Array<SourceControlProvider.Repo.AsObject>,
        github?: SourceControlProvider.GitHub.AsObject,
    }


    export class PullRequest extends jspb.Message { 
        getNumber(): number;
        setNumber(value: number): PullRequest;
        getState(): string;
        setState(value: string): PullRequest;
        getTitle(): string;
        setTitle(value: string): PullRequest;
        getBody(): string;
        setBody(value: string): PullRequest;
        getUser(): string;
        setUser(value: string): PullRequest;

        hasCreatedAt(): boolean;
        clearCreatedAt(): void;
        getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): PullRequest;

        hasUpdatedAt(): boolean;
        clearUpdatedAt(): void;
        getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): PullRequest;
        getHeadRef(): string;
        setHeadRef(value: string): PullRequest;
        getHeadSha(): string;
        setHeadSha(value: string): PullRequest;
        getBaseRef(): string;
        setBaseRef(value: string): PullRequest;
        getBaseSha(): string;
        setBaseSha(value: string): PullRequest;
        getCommits(): number;
        setCommits(value: number): PullRequest;
        getChangedFiles(): number;
        setChangedFiles(value: number): PullRequest;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): PullRequest.AsObject;
        static toObject(includeInstance: boolean, msg: PullRequest): PullRequest.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: PullRequest, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): PullRequest;
        static deserializeBinaryFromReader(message: PullRequest, reader: jspb.BinaryReader): PullRequest;
    }

    export namespace PullRequest {
        export type AsObject = {
            number: number,
            state: string,
            title: string,
            body: string,
            user: string,
            createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            headRef: string,
            headSha: string,
            baseRef: string,
            baseSha: string,
            commits: number,
            changedFiles: number,
        }
    }

    export class Push extends jspb.Message { 
        getRef(): string;
        setRef(value: string): Push;
        getBeforeSha(): string;
        setBeforeSha(value: string): Push;
        getAfterSha(): string;
        setAfterSha(value: string): Push;
        getPusherName(): string;
        setPusherName(value: string): Push;
        getPusherEmail(): string;
        setPusherEmail(value: string): Push;

        hasPushedAt(): boolean;
        clearPushedAt(): void;
        getPushedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setPushedAt(value?: google_protobuf_timestamp_pb.Timestamp): Push;
        getHeadCommitterName(): string;
        setHeadCommitterName(value: string): Push;
        getHeadCommitterEmail(): string;
        setHeadCommitterEmail(value: string): Push;
        getHeadCommitterUsername(): string;
        setHeadCommitterUsername(value: string): Push;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Push.AsObject;
        static toObject(includeInstance: boolean, msg: Push): Push.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Push, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Push;
        static deserializeBinaryFromReader(message: Push, reader: jspb.BinaryReader): Push;
    }

    export namespace Push {
        export type AsObject = {
            ref: string,
            beforeSha: string,
            afterSha: string,
            pusherName: string,
            pusherEmail: string,
            pushedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            headCommitterName: string,
            headCommitterEmail: string,
            headCommitterUsername: string,
        }
    }

    export class Repo extends jspb.Message { 
        getName(): string;
        setName(value: string): Repo;
        getFullName(): string;
        setFullName(value: string): Repo;
        getPrivate(): boolean;
        setPrivate(value: boolean): Repo;
        getDefaultBranch(): string;
        setDefaultBranch(value: string): Repo;

        getRecentPushesMap(): jspb.Map<string, SourceControlProvider.Push>;
        clearRecentPushesMap(): void;

        getOpenPullRequestsMap(): jspb.Map<number, SourceControlProvider.PullRequest>;
        clearOpenPullRequestsMap(): void;

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
            name: string,
            fullName: string,
            pb_private: boolean,
            defaultBranch: string,

            recentPushesMap: Array<[string, SourceControlProvider.Push.AsObject]>,

            openPullRequestsMap: Array<[number, SourceControlProvider.PullRequest.AsObject]>,
        }
    }

    export class GitHub extends jspb.Message { 
        getInstallationId(): number;
        setInstallationId(value: number): GitHub;
        getLogin(): string;
        setLogin(value: string): GitHub;
        getId(): number;
        setId(value: number): GitHub;
        getType(): string;
        setType(value: string): GitHub;
        getRepositorySelection(): string;
        setRepositorySelection(value: string): GitHub;

        getPermissionsMap(): jspb.Map<string, string>;
        clearPermissionsMap(): void;
        clearEventsList(): void;
        getEventsList(): Array<string>;
        setEventsList(value: Array<string>): GitHub;
        addEvents(value: string, index?: number): string;
        getSuspended(): boolean;
        setSuspended(value: boolean): GitHub;
        getInstallationJson(): string;
        setInstallationJson(value: string): GitHub;

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
            installationId: number,
            login: string,
            id: number,
            type: string,
            repositorySelection: string,

            permissionsMap: Array<[string, string]>,
            eventsList: Array<string>,
            suspended: boolean,
            installationJson: string,
        }
    }


    export enum ProviderCase {
        PROVIDER_NOT_SET = 0,
        GITHUB = 11,
    }

}

export class SourceControlCredential extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): SourceControlCredential;
    getPassword(): string;
    setPassword(value: string): SourceControlCredential;

    hasExpireAt(): boolean;
    clearExpireAt(): void;
    getExpireAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpireAt(value?: google_protobuf_timestamp_pb.Timestamp): SourceControlCredential;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SourceControlCredential.AsObject;
    static toObject(includeInstance: boolean, msg: SourceControlCredential): SourceControlCredential.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SourceControlCredential, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SourceControlCredential;
    static deserializeBinaryFromReader(message: SourceControlCredential, reader: jspb.BinaryReader): SourceControlCredential;
}

export namespace SourceControlCredential {
    export type AsObject = {
        username: string,
        password: string,
        expireAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}
