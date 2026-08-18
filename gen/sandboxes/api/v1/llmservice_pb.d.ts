// package: sandboxes.api.v1
// file: sandboxes/api/v1/llmservice.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as sandboxes_api_v1_common_pb from "../../../sandboxes/api/v1/common_pb";
import * as sandboxes_api_v1_object_pb from "../../../sandboxes/api/v1/object_pb";
import * as sandboxes_api_v1_resource_pb from "../../../sandboxes/api/v1/resource_pb";
import * as sandboxes_api_v1_resource_llmsession_pb from "../../../sandboxes/api/v1/resource_llmsession_pb";

export class ListLLMSessionsRequest extends jspb.Message { 
    getOrgId(): string;
    setOrgId(value: string): ListLLMSessionsRequest;

    hasMetaFilter(): boolean;
    clearMetaFilter(): void;
    getMetaFilter(): sandboxes_api_v1_object_pb.ObjectMetaFilter | undefined;
    setMetaFilter(value?: sandboxes_api_v1_object_pb.ObjectMetaFilter): ListLLMSessionsRequest;

    hasPage(): boolean;
    clearPage(): void;
    getPage(): sandboxes_api_v1_common_pb.Pagination.Request | undefined;
    setPage(value?: sandboxes_api_v1_common_pb.Pagination.Request): ListLLMSessionsRequest;

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): ListLLMSessionsRequest.Filter | undefined;
    setFilter(value?: ListLLMSessionsRequest.Filter): ListLLMSessionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLLMSessionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListLLMSessionsRequest): ListLLMSessionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLLMSessionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLLMSessionsRequest;
    static deserializeBinaryFromReader(message: ListLLMSessionsRequest, reader: jspb.BinaryReader): ListLLMSessionsRequest;
}

export namespace ListLLMSessionsRequest {
    export type AsObject = {
        orgId: string,
        metaFilter?: sandboxes_api_v1_object_pb.ObjectMetaFilter.AsObject,
        page?: sandboxes_api_v1_common_pb.Pagination.Request.AsObject,
        filter?: ListLLMSessionsRequest.Filter.AsObject,
    }


    export class Filter extends jspb.Message { 
        getTaskInitiated(): boolean;
        setTaskInitiated(value: boolean): Filter;
        getInteractive(): boolean;
        setInteractive(value: boolean): Filter;
        getShared(): sandboxes_api_v1_resource_llmsession_pb.LLMSession.AccessControl.Level;
        setShared(value: sandboxes_api_v1_resource_llmsession_pb.LLMSession.AccessControl.Level): Filter;

        hasStatus(): boolean;
        clearStatus(): void;
        getStatus(): ListLLMSessionsRequest.Filter.Status | undefined;
        setStatus(value?: ListLLMSessionsRequest.Filter.Status): Filter;
        clearParentsList(): void;
        getParentsList(): Array<string>;
        setParentsList(value: Array<string>): Filter;
        addParents(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Filter.AsObject;
        static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Filter;
        static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
    }

    export namespace Filter {
        export type AsObject = {
            taskInitiated: boolean,
            interactive: boolean,
            shared: sandboxes_api_v1_resource_llmsession_pb.LLMSession.AccessControl.Level,
            status?: ListLLMSessionsRequest.Filter.Status.AsObject,
            parentsList: Array<string>,
        }


        export class Status extends jspb.Message { 
            getRunning(): boolean;
            setRunning(value: boolean): Status;
            clearStoppedForList(): void;
            getStoppedForList(): Array<sandboxes_api_v1_resource_llmsession_pb.LLMSession.Stop.Reason>;
            setStoppedForList(value: Array<sandboxes_api_v1_resource_llmsession_pb.LLMSession.Stop.Reason>): Status;
            addStoppedFor(value: sandboxes_api_v1_resource_llmsession_pb.LLMSession.Stop.Reason, index?: number): sandboxes_api_v1_resource_llmsession_pb.LLMSession.Stop.Reason;
            getWithError(): boolean;
            setWithError(value: boolean): Status;
            getArchived(): boolean;
            setArchived(value: boolean): Status;

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
                running: boolean,
                stoppedForList: Array<sandboxes_api_v1_resource_llmsession_pb.LLMSession.Stop.Reason>,
                withError: boolean,
                archived: boolean,
            }
        }

    }

}

export class ListLLMSessionsResponse extends jspb.Message { 
    clearSessionsList(): void;
    getSessionsList(): Array<sandboxes_api_v1_resource_pb.Resource>;
    setSessionsList(value: Array<sandboxes_api_v1_resource_pb.Resource>): ListLLMSessionsResponse;
    addSessions(value?: sandboxes_api_v1_resource_pb.Resource, index?: number): sandboxes_api_v1_resource_pb.Resource;

    hasPage(): boolean;
    clearPage(): void;
    getPage(): sandboxes_api_v1_common_pb.Pagination.Response | undefined;
    setPage(value?: sandboxes_api_v1_common_pb.Pagination.Response): ListLLMSessionsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLLMSessionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListLLMSessionsResponse): ListLLMSessionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLLMSessionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLLMSessionsResponse;
    static deserializeBinaryFromReader(message: ListLLMSessionsResponse, reader: jspb.BinaryReader): ListLLMSessionsResponse;
}

export namespace ListLLMSessionsResponse {
    export type AsObject = {
        sessionsList: Array<sandboxes_api_v1_resource_pb.Resource.AsObject>,
        page?: sandboxes_api_v1_common_pb.Pagination.Response.AsObject,
    }
}

export class StartLLMSessionRequest extends jspb.Message { 
    getOrgId(): string;
    setOrgId(value: string): StartLLMSessionRequest;
    getName(): string;
    setName(value: string): StartLLMSessionRequest;

    hasConversation(): boolean;
    clearConversation(): void;
    getConversation(): sandboxes_api_v1_resource_llmsession_pb.LLMSession.Conversation | undefined;
    setConversation(value?: sandboxes_api_v1_resource_llmsession_pb.LLMSession.Conversation): StartLLMSessionRequest;

    hasAccessControl(): boolean;
    clearAccessControl(): void;
    getAccessControl(): sandboxes_api_v1_resource_llmsession_pb.LLMSession.AccessControl | undefined;
    setAccessControl(value?: sandboxes_api_v1_resource_llmsession_pb.LLMSession.AccessControl): StartLLMSessionRequest;
    getOwner(): string;
    setOwner(value: string): StartLLMSessionRequest;
    getParentId(): string;
    setParentId(value: string): StartLLMSessionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartLLMSessionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartLLMSessionRequest): StartLLMSessionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartLLMSessionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartLLMSessionRequest;
    static deserializeBinaryFromReader(message: StartLLMSessionRequest, reader: jspb.BinaryReader): StartLLMSessionRequest;
}

export namespace StartLLMSessionRequest {
    export type AsObject = {
        orgId: string,
        name: string,
        conversation?: sandboxes_api_v1_resource_llmsession_pb.LLMSession.Conversation.AsObject,
        accessControl?: sandboxes_api_v1_resource_llmsession_pb.LLMSession.AccessControl.AsObject,
        owner: string,
        parentId: string,
    }
}

export class StartLLMSessionResponse extends jspb.Message { 

    hasResource(): boolean;
    clearResource(): void;
    getResource(): sandboxes_api_v1_resource_pb.Resource | undefined;
    setResource(value?: sandboxes_api_v1_resource_pb.Resource): StartLLMSessionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartLLMSessionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StartLLMSessionResponse): StartLLMSessionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartLLMSessionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartLLMSessionResponse;
    static deserializeBinaryFromReader(message: StartLLMSessionResponse, reader: jspb.BinaryReader): StartLLMSessionResponse;
}

export namespace StartLLMSessionResponse {
    export type AsObject = {
        resource?: sandboxes_api_v1_resource_pb.Resource.AsObject,
    }
}

export class ReplyLLMSessionRequest extends jspb.Message { 
    getSessionId(): string;
    setSessionId(value: string): ReplyLLMSessionRequest;
    getVersion(): string;
    setVersion(value: string): ReplyLLMSessionRequest;

    hasConversation(): boolean;
    clearConversation(): void;
    getConversation(): sandboxes_api_v1_resource_llmsession_pb.LLMSession.Conversation | undefined;
    setConversation(value?: sandboxes_api_v1_resource_llmsession_pb.LLMSession.Conversation): ReplyLLMSessionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReplyLLMSessionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReplyLLMSessionRequest): ReplyLLMSessionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReplyLLMSessionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReplyLLMSessionRequest;
    static deserializeBinaryFromReader(message: ReplyLLMSessionRequest, reader: jspb.BinaryReader): ReplyLLMSessionRequest;
}

export namespace ReplyLLMSessionRequest {
    export type AsObject = {
        sessionId: string,
        version: string,
        conversation?: sandboxes_api_v1_resource_llmsession_pb.LLMSession.Conversation.AsObject,
    }
}

export class ReplyLLMSessionResponse extends jspb.Message { 

    hasResource(): boolean;
    clearResource(): void;
    getResource(): sandboxes_api_v1_resource_pb.Resource | undefined;
    setResource(value?: sandboxes_api_v1_resource_pb.Resource): ReplyLLMSessionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReplyLLMSessionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ReplyLLMSessionResponse): ReplyLLMSessionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReplyLLMSessionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReplyLLMSessionResponse;
    static deserializeBinaryFromReader(message: ReplyLLMSessionResponse, reader: jspb.BinaryReader): ReplyLLMSessionResponse;
}

export namespace ReplyLLMSessionResponse {
    export type AsObject = {
        resource?: sandboxes_api_v1_resource_pb.Resource.AsObject,
    }
}

export class CancelLLMSessionRequest extends jspb.Message { 
    getSessionId(): string;
    setSessionId(value: string): CancelLLMSessionRequest;
    getVersion(): string;
    setVersion(value: string): CancelLLMSessionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelLLMSessionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CancelLLMSessionRequest): CancelLLMSessionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelLLMSessionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelLLMSessionRequest;
    static deserializeBinaryFromReader(message: CancelLLMSessionRequest, reader: jspb.BinaryReader): CancelLLMSessionRequest;
}

export namespace CancelLLMSessionRequest {
    export type AsObject = {
        sessionId: string,
        version: string,
    }
}

export class CancelLLMSessionResponse extends jspb.Message { 

    hasResource(): boolean;
    clearResource(): void;
    getResource(): sandboxes_api_v1_resource_pb.Resource | undefined;
    setResource(value?: sandboxes_api_v1_resource_pb.Resource): CancelLLMSessionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelLLMSessionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CancelLLMSessionResponse): CancelLLMSessionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelLLMSessionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelLLMSessionResponse;
    static deserializeBinaryFromReader(message: CancelLLMSessionResponse, reader: jspb.BinaryReader): CancelLLMSessionResponse;
}

export namespace CancelLLMSessionResponse {
    export type AsObject = {
        resource?: sandboxes_api_v1_resource_pb.Resource.AsObject,
    }
}

export class LLMSessionStreamRequest extends jspb.Message { 
    getSessionId(): string;
    setSessionId(value: string): LLMSessionStreamRequest;

    hasStartRequest(): boolean;
    clearStartRequest(): void;
    getStartRequest(): StartLLMSessionRequest | undefined;
    setStartRequest(value?: StartLLMSessionRequest): LLMSessionStreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LLMSessionStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LLMSessionStreamRequest): LLMSessionStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LLMSessionStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LLMSessionStreamRequest;
    static deserializeBinaryFromReader(message: LLMSessionStreamRequest, reader: jspb.BinaryReader): LLMSessionStreamRequest;
}

export namespace LLMSessionStreamRequest {
    export type AsObject = {
        sessionId: string,
        startRequest?: StartLLMSessionRequest.AsObject,
    }
}

export class LLMSessionStreamEvent extends jspb.Message { 
    getVersion(): string;
    setVersion(value: string): LLMSessionStreamEvent;

    hasFullSync(): boolean;
    clearFullSync(): void;
    getFullSync(): LLMSessionStreamEvent.FullSync | undefined;
    setFullSync(value?: LLMSessionStreamEvent.FullSync): LLMSessionStreamEvent;

    hasAppendMessage(): boolean;
    clearAppendMessage(): void;
    getAppendMessage(): LLMSessionStreamEvent.AppendMessage | undefined;
    setAppendMessage(value?: LLMSessionStreamEvent.AppendMessage): LLMSessionStreamEvent;

    hasUpdateStatus(): boolean;
    clearUpdateStatus(): void;
    getUpdateStatus(): LLMSessionStreamEvent.UpdateStatus | undefined;
    setUpdateStatus(value?: LLMSessionStreamEvent.UpdateStatus): LLMSessionStreamEvent;

    getEventCase(): LLMSessionStreamEvent.EventCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LLMSessionStreamEvent.AsObject;
    static toObject(includeInstance: boolean, msg: LLMSessionStreamEvent): LLMSessionStreamEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LLMSessionStreamEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LLMSessionStreamEvent;
    static deserializeBinaryFromReader(message: LLMSessionStreamEvent, reader: jspb.BinaryReader): LLMSessionStreamEvent;
}

export namespace LLMSessionStreamEvent {
    export type AsObject = {
        version: string,
        fullSync?: LLMSessionStreamEvent.FullSync.AsObject,
        appendMessage?: LLMSessionStreamEvent.AppendMessage.AsObject,
        updateStatus?: LLMSessionStreamEvent.UpdateStatus.AsObject,
    }


    export class FullSync extends jspb.Message { 

        hasResource(): boolean;
        clearResource(): void;
        getResource(): sandboxes_api_v1_resource_pb.Resource | undefined;
        setResource(value?: sandboxes_api_v1_resource_pb.Resource): FullSync;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): FullSync.AsObject;
        static toObject(includeInstance: boolean, msg: FullSync): FullSync.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: FullSync, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): FullSync;
        static deserializeBinaryFromReader(message: FullSync, reader: jspb.BinaryReader): FullSync;
    }

    export namespace FullSync {
        export type AsObject = {
            resource?: sandboxes_api_v1_resource_pb.Resource.AsObject,
        }
    }

    export class AppendMessage extends jspb.Message { 

        hasMessage(): boolean;
        clearMessage(): void;
        getMessage(): sandboxes_api_v1_resource_llmsession_pb.LLMSession.Message | undefined;
        setMessage(value?: sandboxes_api_v1_resource_llmsession_pb.LLMSession.Message): AppendMessage;
        getStart(): boolean;
        setStart(value: boolean): AppendMessage;
        getEnd(): boolean;
        setEnd(value: boolean): AppendMessage;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AppendMessage.AsObject;
        static toObject(includeInstance: boolean, msg: AppendMessage): AppendMessage.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AppendMessage, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AppendMessage;
        static deserializeBinaryFromReader(message: AppendMessage, reader: jspb.BinaryReader): AppendMessage;
    }

    export namespace AppendMessage {
        export type AsObject = {
            message?: sandboxes_api_v1_resource_llmsession_pb.LLMSession.Message.AsObject,
            start: boolean,
            end: boolean,
        }
    }

    export class UpdateStatus extends jspb.Message { 

        hasSession(): boolean;
        clearSession(): void;
        getSession(): sandboxes_api_v1_resource_llmsession_pb.LLMSession | undefined;
        setSession(value?: sandboxes_api_v1_resource_llmsession_pb.LLMSession): UpdateStatus;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): UpdateStatus.AsObject;
        static toObject(includeInstance: boolean, msg: UpdateStatus): UpdateStatus.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: UpdateStatus, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): UpdateStatus;
        static deserializeBinaryFromReader(message: UpdateStatus, reader: jspb.BinaryReader): UpdateStatus;
    }

    export namespace UpdateStatus {
        export type AsObject = {
            session?: sandboxes_api_v1_resource_llmsession_pb.LLMSession.AsObject,
        }
    }


    export enum EventCase {
        EVENT_NOT_SET = 0,
        FULL_SYNC = 2,
        APPEND_MESSAGE = 3,
        UPDATE_STATUS = 4,
    }

}

export class QueryLLMSessionMessagesRequest extends jspb.Message { 
    getSessionId(): string;
    setSessionId(value: string): QueryLLMSessionMessagesRequest;

    hasSince(): boolean;
    clearSince(): void;
    getSince(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setSince(value?: google_protobuf_timestamp_pb.Timestamp): QueryLLMSessionMessagesRequest;

    hasBefore(): boolean;
    clearBefore(): void;
    getBefore(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setBefore(value?: google_protobuf_timestamp_pb.Timestamp): QueryLLMSessionMessagesRequest;
    getAfterMessageId(): string;
    setAfterMessageId(value: string): QueryLLMSessionMessagesRequest;
    getBackward(): boolean;
    setBackward(value: boolean): QueryLLMSessionMessagesRequest;
    getLimit(): number;
    setLimit(value: number): QueryLLMSessionMessagesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryLLMSessionMessagesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryLLMSessionMessagesRequest): QueryLLMSessionMessagesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryLLMSessionMessagesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryLLMSessionMessagesRequest;
    static deserializeBinaryFromReader(message: QueryLLMSessionMessagesRequest, reader: jspb.BinaryReader): QueryLLMSessionMessagesRequest;
}

export namespace QueryLLMSessionMessagesRequest {
    export type AsObject = {
        sessionId: string,
        since?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        before?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        afterMessageId: string,
        backward: boolean,
        limit: number,
    }
}

export class QueryLLMSessionMessagesResponse extends jspb.Message { 
    clearMessagesList(): void;
    getMessagesList(): Array<sandboxes_api_v1_resource_llmsession_pb.LLMSession.Message>;
    setMessagesList(value: Array<sandboxes_api_v1_resource_llmsession_pb.LLMSession.Message>): QueryLLMSessionMessagesResponse;
    addMessages(value?: sandboxes_api_v1_resource_llmsession_pb.LLMSession.Message, index?: number): sandboxes_api_v1_resource_llmsession_pb.LLMSession.Message;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryLLMSessionMessagesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryLLMSessionMessagesResponse): QueryLLMSessionMessagesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryLLMSessionMessagesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryLLMSessionMessagesResponse;
    static deserializeBinaryFromReader(message: QueryLLMSessionMessagesResponse, reader: jspb.BinaryReader): QueryLLMSessionMessagesResponse;
}

export namespace QueryLLMSessionMessagesResponse {
    export type AsObject = {
        messagesList: Array<sandboxes_api_v1_resource_llmsession_pb.LLMSession.Message.AsObject>,
    }
}
