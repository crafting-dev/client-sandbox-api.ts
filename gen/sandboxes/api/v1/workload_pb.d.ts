// package: sandboxes.api.v1
// file: sandboxes/api/v1/workload.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as sandboxes_api_v1_common_pb from "../../../sandboxes/api/v1/common_pb";
import * as sandboxes_api_v1_endpoint_pb from "../../../sandboxes/api/v1/endpoint_pb";
import * as sandboxes_api_v1_org_pb from "../../../sandboxes/api/v1/org_pb";
import * as sandboxes_api_v1_sandbox_pb from "../../../sandboxes/api/v1/sandbox_pb";
import * as sandboxes_api_v1_user_pb from "../../../sandboxes/api/v1/user_pb";
import * as sandboxes_api_v1_resource_llmconfig_pb from "../../../sandboxes/api/v1/resource_llmconfig_pb";
import * as sandboxes_api_v1_resource_preference_pb from "../../../sandboxes/api/v1/resource_preference_pb";
import * as sandboxes_api_v1_resource_region_pb from "../../../sandboxes/api/v1/resource_region_pb";
import * as sandboxes_api_v1_system_pb from "../../../sandboxes/api/v1/system_pb";

export class Setup extends jspb.Message { 

    hasOrg(): boolean;
    clearOrg(): void;
    getOrg(): sandboxes_api_v1_org_pb.Org | undefined;
    setOrg(value?: sandboxes_api_v1_org_pb.Org): Setup;
    clearUsersList(): void;
    getUsersList(): Array<sandboxes_api_v1_user_pb.User>;
    setUsersList(value: Array<sandboxes_api_v1_user_pb.User>): Setup;
    addUsers(value?: sandboxes_api_v1_user_pb.User, index?: number): sandboxes_api_v1_user_pb.User;

    hasSandbox(): boolean;
    clearSandbox(): void;
    getSandbox(): sandboxes_api_v1_sandbox_pb.Sandbox | undefined;
    setSandbox(value?: sandboxes_api_v1_sandbox_pb.Sandbox): Setup;
    getWorkloadName(): string;
    setWorkloadName(value: string): Setup;
    getSysBaseUrl(): string;
    setSysBaseUrl(value: string): Setup;
    getSysDnsSuffix(): string;
    setSysDnsSuffix(value: string): Setup;
    getAppDnsSuffix(): string;
    setAppDnsSuffix(value: string): Setup;

    getUserDataMap(): jspb.Map<string, Setup.UserData>;
    clearUserDataMap(): void;
    getSandboxFolderPath(): string;
    setSandboxFolderPath(value: string): Setup;
    getAppFolderPath(): string;
    setAppFolderPath(value: string): Setup;

    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): sandboxes_api_v1_system_pb.SystemVersion | undefined;
    setVersion(value?: sandboxes_api_v1_system_pb.SystemVersion): Setup;

    hasRegion(): boolean;
    clearRegion(): void;
    getRegion(): sandboxes_api_v1_resource_region_pb.Region | undefined;
    setRegion(value?: sandboxes_api_v1_resource_region_pb.Region): Setup;

    hasOwnerInfo(): boolean;
    clearOwnerInfo(): void;
    getOwnerInfo(): Setup.UserData | undefined;
    setOwnerInfo(value?: Setup.UserData): Setup;

    hasSystemInfo(): boolean;
    clearSystemInfo(): void;
    getSystemInfo(): sandboxes_api_v1_system_pb.SystemInfo | undefined;
    setSystemInfo(value?: sandboxes_api_v1_system_pb.SystemInfo): Setup;

    hasLlmConfig(): boolean;
    clearLlmConfig(): void;
    getLlmConfig(): sandboxes_api_v1_resource_llmconfig_pb.LLMConfig | undefined;
    setLlmConfig(value?: sandboxes_api_v1_resource_llmconfig_pb.LLMConfig): Setup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Setup.AsObject;
    static toObject(includeInstance: boolean, msg: Setup): Setup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Setup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Setup;
    static deserializeBinaryFromReader(message: Setup, reader: jspb.BinaryReader): Setup;
}

export namespace Setup {
    export type AsObject = {
        org?: sandboxes_api_v1_org_pb.Org.AsObject,
        usersList: Array<sandboxes_api_v1_user_pb.User.AsObject>,
        sandbox?: sandboxes_api_v1_sandbox_pb.Sandbox.AsObject,
        workloadName: string,
        sysBaseUrl: string,
        sysDnsSuffix: string,
        appDnsSuffix: string,

        userDataMap: Array<[string, Setup.UserData.AsObject]>,
        sandboxFolderPath: string,
        appFolderPath: string,
        version?: sandboxes_api_v1_system_pb.SystemVersion.AsObject,
        region?: sandboxes_api_v1_resource_region_pb.Region.AsObject,
        ownerInfo?: Setup.UserData.AsObject,
        systemInfo?: sandboxes_api_v1_system_pb.SystemInfo.AsObject,
        llmConfig?: sandboxes_api_v1_resource_llmconfig_pb.LLMConfig.AsObject,
    }


    export class UserData extends jspb.Message { 

        hasPreference(): boolean;
        clearPreference(): void;
        getPreference(): sandboxes_api_v1_resource_preference_pb.Preference | undefined;
        setPreference(value?: sandboxes_api_v1_resource_preference_pb.Preference): UserData;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): UserData.AsObject;
        static toObject(includeInstance: boolean, msg: UserData): UserData.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: UserData, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): UserData;
        static deserializeBinaryFromReader(message: UserData, reader: jspb.BinaryReader): UserData;
    }

    export namespace UserData {
        export type AsObject = {
            preference?: sandboxes_api_v1_resource_preference_pb.Preference.AsObject,
        }
    }

}

export class WorkloadRef extends jspb.Message { 
    getOrgId(): string;
    setOrgId(value: string): WorkloadRef;
    getSandboxId(): string;
    setSandboxId(value: string): WorkloadRef;
    getWorkloadName(): string;
    setWorkloadName(value: string): WorkloadRef;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorkloadRef.AsObject;
    static toObject(includeInstance: boolean, msg: WorkloadRef): WorkloadRef.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorkloadRef, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorkloadRef;
    static deserializeBinaryFromReader(message: WorkloadRef, reader: jspb.BinaryReader): WorkloadRef;
}

export namespace WorkloadRef {
    export type AsObject = {
        orgId: string,
        sandboxId: string,
        workloadName: string,
    }
}

export class ProcessRef extends jspb.Message { 
    getKind(): ProcessRef.Kind;
    setKind(value: ProcessRef.Kind): ProcessRef;
    getPath(): string;
    setPath(value: string): ProcessRef;
    getName(): string;
    setName(value: string): ProcessRef;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProcessRef.AsObject;
    static toObject(includeInstance: boolean, msg: ProcessRef): ProcessRef.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProcessRef, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProcessRef;
    static deserializeBinaryFromReader(message: ProcessRef, reader: jspb.BinaryReader): ProcessRef;
}

export namespace ProcessRef {
    export type AsObject = {
        kind: ProcessRef.Kind,
        path: string,
        name: string,
    }

    export enum Kind {
    UNSPECIFIED = 0,
    DAEMON = 1,
    JOB = 2,
    COMMAND = 3,
    TEST = 4,
    }

}

export class TaskActionRef extends jspb.Message { 
    getTask(): string;
    setTask(value: string): TaskActionRef;
    getAction(): string;
    setAction(value: string): TaskActionRef;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskActionRef.AsObject;
    static toObject(includeInstance: boolean, msg: TaskActionRef): TaskActionRef.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskActionRef, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskActionRef;
    static deserializeBinaryFromReader(message: TaskActionRef, reader: jspb.BinaryReader): TaskActionRef;
}

export namespace TaskActionRef {
    export type AsObject = {
        task: string,
        action: string,
    }
}

export class LogRef extends jspb.Message { 

    hasProcess(): boolean;
    clearProcess(): void;
    getProcess(): ProcessRef | undefined;
    setProcess(value?: ProcessRef): LogRef;

    hasTaskAction(): boolean;
    clearTaskAction(): void;
    getTaskAction(): TaskActionRef | undefined;
    setTaskAction(value?: TaskActionRef): LogRef;

    getOriginCase(): LogRef.OriginCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogRef.AsObject;
    static toObject(includeInstance: boolean, msg: LogRef): LogRef.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogRef, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogRef;
    static deserializeBinaryFromReader(message: LogRef, reader: jspb.BinaryReader): LogRef;
}

export namespace LogRef {
    export type AsObject = {
        process?: ProcessRef.AsObject,
        taskAction?: TaskActionRef.AsObject,
    }

    export enum OriginCase {
        ORIGIN_NOT_SET = 0,
        PROCESS = 1,
        TASK_ACTION = 2,
    }

}

export class LogTail extends jspb.Message { 
    getFollow(): boolean;
    setFollow(value: boolean): LogTail;
    getLines(): number;
    setLines(value: number): LogTail;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogTail.AsObject;
    static toObject(includeInstance: boolean, msg: LogTail): LogTail.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogTail, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogTail;
    static deserializeBinaryFromReader(message: LogTail, reader: jspb.BinaryReader): LogTail;
}

export namespace LogTail {
    export type AsObject = {
        follow: boolean,
        lines: number,
    }
}

export class PortForwardStream extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PortForwardStream.AsObject;
    static toObject(includeInstance: boolean, msg: PortForwardStream): PortForwardStream.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PortForwardStream, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PortForwardStream;
    static deserializeBinaryFromReader(message: PortForwardStream, reader: jspb.BinaryReader): PortForwardStream;
}

export namespace PortForwardStream {
    export type AsObject = {
    }


    export class Control extends jspb.Message { 

        hasSetup(): boolean;
        clearSetup(): void;
        getSetup(): PortForwardStream.Control.Setup | undefined;
        setSetup(value?: PortForwardStream.Control.Setup): Control;

        getControlCase(): Control.ControlCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Control.AsObject;
        static toObject(includeInstance: boolean, msg: Control): Control.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Control, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Control;
        static deserializeBinaryFromReader(message: Control, reader: jspb.BinaryReader): Control;
    }

    export namespace Control {
        export type AsObject = {
            setup?: PortForwardStream.Control.Setup.AsObject,
        }


        export class Setup extends jspb.Message { 
            clearReversePortsList(): void;
            getReversePortsList(): Array<sandboxes_api_v1_endpoint_pb.Port>;
            setReversePortsList(value: Array<sandboxes_api_v1_endpoint_pb.Port>): Setup;
            addReversePorts(value?: sandboxes_api_v1_endpoint_pb.Port, index?: number): sandboxes_api_v1_endpoint_pb.Port;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Setup.AsObject;
            static toObject(includeInstance: boolean, msg: Setup): Setup.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Setup, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Setup;
            static deserializeBinaryFromReader(message: Setup, reader: jspb.BinaryReader): Setup;
        }

        export namespace Setup {
            export type AsObject = {
                reversePortsList: Array<sandboxes_api_v1_endpoint_pb.Port.AsObject>,
            }
        }


        export enum ControlCase {
            CONTROL_NOT_SET = 0,
            SETUP = 1,
        }

    }

    export class Status extends jspb.Message { 

        hasError(): boolean;
        clearError(): void;
        getError(): sandboxes_api_v1_common_pb.Error | undefined;
        setError(value?: sandboxes_api_v1_common_pb.Error): Status;

        hasSetup(): boolean;
        clearSetup(): void;
        getSetup(): PortForwardStream.Status.Setup | undefined;
        setSetup(value?: PortForwardStream.Status.Setup): Status;

        getStatusCase(): Status.StatusCase;

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
            error?: sandboxes_api_v1_common_pb.Error.AsObject,
            setup?: PortForwardStream.Status.Setup.AsObject,
        }


        export class Setup extends jspb.Message { 
            clearReversePortsList(): void;
            getReversePortsList(): Array<sandboxes_api_v1_endpoint_pb.Port>;
            setReversePortsList(value: Array<sandboxes_api_v1_endpoint_pb.Port>): Setup;
            addReversePorts(value?: sandboxes_api_v1_endpoint_pb.Port, index?: number): sandboxes_api_v1_endpoint_pb.Port;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Setup.AsObject;
            static toObject(includeInstance: boolean, msg: Setup): Setup.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Setup, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Setup;
            static deserializeBinaryFromReader(message: Setup, reader: jspb.BinaryReader): Setup;
        }

        export namespace Setup {
            export type AsObject = {
                reversePortsList: Array<sandboxes_api_v1_endpoint_pb.Port.AsObject>,
            }
        }


        export enum StatusCase {
            STATUS_NOT_SET = 0,
            ERROR = 1,
            SETUP = 2,
        }

    }

    export class Connect extends jspb.Message { 
        getHost(): string;
        setHost(value: string): Connect;
        getPort(): number;
        setPort(value: number): Connect;
        getSocket(): string;
        setSocket(value: string): Connect;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Connect.AsObject;
        static toObject(includeInstance: boolean, msg: Connect): Connect.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Connect, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Connect;
        static deserializeBinaryFromReader(message: Connect, reader: jspb.BinaryReader): Connect;
    }

    export namespace Connect {
        export type AsObject = {
            host: string,
            port: number,
            socket: string,
        }
    }

    export class Accept extends jspb.Message { 
        getReversePort(): number;
        setReversePort(value: number): Accept;
        getHost(): string;
        setHost(value: string): Accept;
        getPort(): number;
        setPort(value: number): Accept;
        getSourceIp(): string;
        setSourceIp(value: string): Accept;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Accept.AsObject;
        static toObject(includeInstance: boolean, msg: Accept): Accept.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Accept, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Accept;
        static deserializeBinaryFromReader(message: Accept, reader: jspb.BinaryReader): Accept;
    }

    export namespace Accept {
        export type AsObject = {
            reversePort: number,
            host: string,
            port: number,
            sourceIp: string,
        }
    }

    export class Result extends jspb.Message { 

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
            error?: sandboxes_api_v1_common_pb.Error.AsObject,
        }
    }

}

export class TrafficContent extends jspb.Message { 

    hasStreamData(): boolean;
    clearStreamData(): void;
    getStreamData(): Uint8Array | string;
    getStreamData_asU8(): Uint8Array;
    getStreamData_asB64(): string;
    setStreamData(value: Uint8Array | string): TrafficContent;

    hasHttpRequest(): boolean;
    clearHttpRequest(): void;
    getHttpRequest(): TrafficContent.Http.Request | undefined;
    setHttpRequest(value?: TrafficContent.Http.Request): TrafficContent;

    hasHttpResponse(): boolean;
    clearHttpResponse(): void;
    getHttpResponse(): TrafficContent.Http.Response | undefined;
    setHttpResponse(value?: TrafficContent.Http.Response): TrafficContent;

    hasHttpChunk(): boolean;
    clearHttpChunk(): void;
    getHttpChunk(): TrafficContent.Http.Chunk | undefined;
    setHttpChunk(value?: TrafficContent.Http.Chunk): TrafficContent;

    hasHttpStreamData(): boolean;
    clearHttpStreamData(): void;
    getHttpStreamData(): TrafficContent.Http.Body | undefined;
    setHttpStreamData(value?: TrafficContent.Http.Body): TrafficContent;

    getContentCase(): TrafficContent.ContentCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrafficContent.AsObject;
    static toObject(includeInstance: boolean, msg: TrafficContent): TrafficContent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrafficContent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrafficContent;
    static deserializeBinaryFromReader(message: TrafficContent, reader: jspb.BinaryReader): TrafficContent;
}

export namespace TrafficContent {
    export type AsObject = {
        streamData: Uint8Array | string,
        httpRequest?: TrafficContent.Http.Request.AsObject,
        httpResponse?: TrafficContent.Http.Response.AsObject,
        httpChunk?: TrafficContent.Http.Chunk.AsObject,
        httpStreamData?: TrafficContent.Http.Body.AsObject,
    }


    export class Http extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Http.AsObject;
        static toObject(includeInstance: boolean, msg: Http): Http.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Http, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Http;
        static deserializeBinaryFromReader(message: Http, reader: jspb.BinaryReader): Http;
    }

    export namespace Http {
        export type AsObject = {
        }


        export class Header extends jspb.Message { 
            getKey(): string;
            setKey(value: string): Header;
            getValue(): string;
            setValue(value: string): Header;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Header.AsObject;
            static toObject(includeInstance: boolean, msg: Header): Header.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Header, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Header;
            static deserializeBinaryFromReader(message: Header, reader: jspb.BinaryReader): Header;
        }

        export namespace Header {
            export type AsObject = {
                key: string,
                value: string,
            }
        }

        export class Body extends jspb.Message { 
            getData(): Uint8Array | string;
            getData_asU8(): Uint8Array;
            getData_asB64(): string;
            setData(value: Uint8Array | string): Body;
            getOriginalBytes(): number;
            setOriginalBytes(value: number): Body;
            getStreamId(): string;
            setStreamId(value: string): Body;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Body.AsObject;
            static toObject(includeInstance: boolean, msg: Body): Body.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Body, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Body;
            static deserializeBinaryFromReader(message: Body, reader: jspb.BinaryReader): Body;
        }

        export namespace Body {
            export type AsObject = {
                data: Uint8Array | string,
                originalBytes: number,
                streamId: string,
            }
        }

        export class Chunk extends jspb.Message { 

            hasBody(): boolean;
            clearBody(): void;
            getBody(): TrafficContent.Http.Body | undefined;
            setBody(value?: TrafficContent.Http.Body): Chunk;
            clearTrailersList(): void;
            getTrailersList(): Array<TrafficContent.Http.Header>;
            setTrailersList(value: Array<TrafficContent.Http.Header>): Chunk;
            addTrailers(value?: TrafficContent.Http.Header, index?: number): TrafficContent.Http.Header;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Chunk.AsObject;
            static toObject(includeInstance: boolean, msg: Chunk): Chunk.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Chunk, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Chunk;
            static deserializeBinaryFromReader(message: Chunk, reader: jspb.BinaryReader): Chunk;
        }

        export namespace Chunk {
            export type AsObject = {
                body?: TrafficContent.Http.Body.AsObject,
                trailersList: Array<TrafficContent.Http.Header.AsObject>,
            }
        }

        export class Request extends jspb.Message { 
            getMethod(): string;
            setMethod(value: string): Request;
            getPath(): string;
            setPath(value: string): Request;
            getProtocol(): string;
            setProtocol(value: string): Request;
            clearHeadersList(): void;
            getHeadersList(): Array<TrafficContent.Http.Header>;
            setHeadersList(value: Array<TrafficContent.Http.Header>): Request;
            addHeaders(value?: TrafficContent.Http.Header, index?: number): TrafficContent.Http.Header;

            hasBody(): boolean;
            clearBody(): void;
            getBody(): TrafficContent.Http.Body | undefined;
            setBody(value?: TrafficContent.Http.Body): Request;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Request.AsObject;
            static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Request;
            static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
        }

        export namespace Request {
            export type AsObject = {
                method: string,
                path: string,
                protocol: string,
                headersList: Array<TrafficContent.Http.Header.AsObject>,
                body?: TrafficContent.Http.Body.AsObject,
            }
        }

        export class Response extends jspb.Message { 
            getProtocol(): string;
            setProtocol(value: string): Response;
            getStatusCode(): number;
            setStatusCode(value: number): Response;
            getStatusText(): string;
            setStatusText(value: string): Response;
            clearHeadersList(): void;
            getHeadersList(): Array<TrafficContent.Http.Header>;
            setHeadersList(value: Array<TrafficContent.Http.Header>): Response;
            addHeaders(value?: TrafficContent.Http.Header, index?: number): TrafficContent.Http.Header;

            hasBody(): boolean;
            clearBody(): void;
            getBody(): TrafficContent.Http.Body | undefined;
            setBody(value?: TrafficContent.Http.Body): Response;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Response.AsObject;
            static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Response;
            static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
        }

        export namespace Response {
            export type AsObject = {
                protocol: string,
                statusCode: number,
                statusText: string,
                headersList: Array<TrafficContent.Http.Header.AsObject>,
                body?: TrafficContent.Http.Body.AsObject,
            }
        }

    }


    export enum ContentCase {
        CONTENT_NOT_SET = 0,
        STREAM_DATA = 10,
        HTTP_REQUEST = 11,
        HTTP_RESPONSE = 12,
        HTTP_CHUNK = 13,
        HTTP_STREAM_DATA = 14,
    }

}

export class TrafficEventEntry extends jspb.Message { 

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): TrafficEventEntry;
    getId(): string;
    setId(value: string): TrafficEventEntry;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): TrafficEventEntry.Metadata | undefined;
    setMetadata(value?: TrafficEventEntry.Metadata): TrafficEventEntry;

    hasContent(): boolean;
    clearContent(): void;
    getContent(): TrafficContent | undefined;
    setContent(value?: TrafficContent): TrafficEventEntry;

    hasError(): boolean;
    clearError(): void;
    getError(): sandboxes_api_v1_common_pb.Error | undefined;
    setError(value?: sandboxes_api_v1_common_pb.Error): TrafficEventEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrafficEventEntry.AsObject;
    static toObject(includeInstance: boolean, msg: TrafficEventEntry): TrafficEventEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrafficEventEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrafficEventEntry;
    static deserializeBinaryFromReader(message: TrafficEventEntry, reader: jspb.BinaryReader): TrafficEventEntry;
}

export namespace TrafficEventEntry {
    export type AsObject = {
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        id: string,
        metadata?: TrafficEventEntry.Metadata.AsObject,
        content?: TrafficContent.AsObject,
        error?: sandboxes_api_v1_common_pb.Error.AsObject,
    }


    export class Source extends jspb.Message { 
        getSandboxName(): string;
        setSandboxName(value: string): Source;
        getWorkload(): string;
        setWorkload(value: string): Source;
        getPort(): number;
        setPort(value: number): Source;
        getConnection(): string;
        setConnection(value: string): Source;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Source.AsObject;
        static toObject(includeInstance: boolean, msg: Source): Source.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Source, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Source;
        static deserializeBinaryFromReader(message: Source, reader: jspb.BinaryReader): Source;
    }

    export namespace Source {
        export type AsObject = {
            sandboxName: string,
            workload: string,
            port: number,
            connection: string,
        }
    }

    export class Metadata extends jspb.Message { 

        hasSource(): boolean;
        clearSource(): void;
        getSource(): TrafficEventEntry.Source | undefined;
        setSource(value?: TrafficEventEntry.Source): Metadata;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Metadata.AsObject;
        static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Metadata;
        static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
    }

    export namespace Metadata {
        export type AsObject = {
            source?: TrafficEventEntry.Source.AsObject,
        }
    }

}

export class TokenSpec extends jspb.Message { 
    getDomain(): TokenSpec.Domain;
    setDomain(value: TokenSpec.Domain): TokenSpec;
    getTtl(): number;
    setTtl(value: number): TokenSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TokenSpec.AsObject;
    static toObject(includeInstance: boolean, msg: TokenSpec): TokenSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TokenSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TokenSpec;
    static deserializeBinaryFromReader(message: TokenSpec, reader: jspb.BinaryReader): TokenSpec;
}

export namespace TokenSpec {
    export type AsObject = {
        domain: TokenSpec.Domain,
        ttl: number,
    }

    export enum Domain {
    DEFAULT = 0,
    ENDPOINT = 1,
    }

}
