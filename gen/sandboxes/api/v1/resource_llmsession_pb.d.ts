// package: sandboxes.api.v1
// file: sandboxes/api/v1/resource_llmsession.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as sandboxes_api_v1_common_pb from "../../../sandboxes/api/v1/common_pb";
import * as sandboxes_api_v1_object_pb from "../../../sandboxes/api/v1/object_pb";
import * as sandboxes_api_v1_llm_pb from "../../../sandboxes/api/v1/llm_pb";

export class LLMSession extends jspb.Message { 

    hasConversation(): boolean;
    clearConversation(): void;
    getConversation(): LLMSession.Conversation | undefined;
    setConversation(value?: LLMSession.Conversation): LLMSession;

    hasPromptContext(): boolean;
    clearPromptContext(): void;
    getPromptContext(): LLMSession.PromptContext | undefined;
    setPromptContext(value?: LLMSession.PromptContext): LLMSession;

    hasSharedState(): boolean;
    clearSharedState(): void;
    getSharedState(): LLMSession.SharedState | undefined;
    setSharedState(value?: LLMSession.SharedState): LLMSession;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): sandboxes_api_v1_common_pb.RuntimeStatus | undefined;
    setStatus(value?: sandboxes_api_v1_common_pb.RuntimeStatus): LLMSession;

    hasStop(): boolean;
    clearStop(): void;
    getStop(): LLMSession.Stop | undefined;
    setStop(value?: LLMSession.Stop): LLMSession;

    hasContext(): boolean;
    clearContext(): void;
    getContext(): LLMSession.Context | undefined;
    setContext(value?: LLMSession.Context): LLMSession;

    hasUsage(): boolean;
    clearUsage(): void;
    getUsage(): LLMSession.Usage | undefined;
    setUsage(value?: LLMSession.Usage): LLMSession;

    hasArchive(): boolean;
    clearArchive(): void;
    getArchive(): LLMSession.Archive | undefined;
    setArchive(value?: LLMSession.Archive): LLMSession;

    hasContextWindowStatus(): boolean;
    clearContextWindowStatus(): void;
    getContextWindowStatus(): LLMSession.ContextWindowStatus | undefined;
    setContextWindowStatus(value?: LLMSession.ContextWindowStatus): LLMSession;

    hasAccessControl(): boolean;
    clearAccessControl(): void;
    getAccessControl(): LLMSession.AccessControl | undefined;
    setAccessControl(value?: LLMSession.AccessControl): LLMSession;
    getRootSessionId(): string;
    setRootSessionId(value: string): LLMSession;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LLMSession.AsObject;
    static toObject(includeInstance: boolean, msg: LLMSession): LLMSession.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LLMSession, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LLMSession;
    static deserializeBinaryFromReader(message: LLMSession, reader: jspb.BinaryReader): LLMSession;
}

export namespace LLMSession {
    export type AsObject = {
        conversation?: LLMSession.Conversation.AsObject,
        promptContext?: LLMSession.PromptContext.AsObject,
        sharedState?: LLMSession.SharedState.AsObject,
        status?: sandboxes_api_v1_common_pb.RuntimeStatus.AsObject,
        stop?: LLMSession.Stop.AsObject,
        context?: LLMSession.Context.AsObject,
        usage?: LLMSession.Usage.AsObject,
        archive?: LLMSession.Archive.AsObject,
        contextWindowStatus?: LLMSession.ContextWindowStatus.AsObject,
        accessControl?: LLMSession.AccessControl.AsObject,
        rootSessionId: string,
    }


    export class Message extends jspb.Message { 
        getId(): string;
        setId(value: string): Message;

        hasTime(): boolean;
        clearTime(): void;
        getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setTime(value?: google_protobuf_timestamp_pb.Timestamp): Message;
        getRole(): LLMSession.Role;
        setRole(value: LLMSession.Role): Message;

        hasContent(): boolean;
        clearContent(): void;
        getContent(): LLMSession.Content | undefined;
        setContent(value?: LLMSession.Content): Message;

        hasToolCall(): boolean;
        clearToolCall(): void;
        getToolCall(): LLMSession.ToolCall | undefined;
        setToolCall(value?: LLMSession.ToolCall): Message;

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
            time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            role: LLMSession.Role,
            content?: LLMSession.Content.AsObject,
            toolCall?: LLMSession.ToolCall.AsObject,
        }
    }

    export class Content extends jspb.Message { 
        getText(): string;
        setText(value: string): Content;
        clearPartsList(): void;
        getPartsList(): Array<LLMSession.Part>;
        setPartsList(value: Array<LLMSession.Part>): Content;
        addParts(value?: LLMSession.Part, index?: number): LLMSession.Part;

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
            partsList: Array<LLMSession.Part.AsObject>,
        }
    }

    export class Part extends jspb.Message { 
        getMimeType(): string;
        setMimeType(value: string): Part;
        getData(): Uint8Array | string;
        getData_asU8(): Uint8Array;
        getData_asB64(): string;
        setData(value: Uint8Array | string): Part;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Part.AsObject;
        static toObject(includeInstance: boolean, msg: Part): Part.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Part, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Part;
        static deserializeBinaryFromReader(message: Part, reader: jspb.BinaryReader): Part;
    }

    export namespace Part {
        export type AsObject = {
            mimeType: string,
            data: Uint8Array | string,
        }
    }

    export class ToolCall extends jspb.Message { 
        getId(): string;
        setId(value: string): ToolCall;
        getName(): string;
        setName(value: string): ToolCall;
        getArgs(): string;
        setArgs(value: string): ToolCall;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ToolCall.AsObject;
        static toObject(includeInstance: boolean, msg: ToolCall): ToolCall.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ToolCall, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ToolCall;
        static deserializeBinaryFromReader(message: ToolCall, reader: jspb.BinaryReader): ToolCall;
    }

    export namespace ToolCall {
        export type AsObject = {
            id: string,
            name: string,
            args: string,
        }
    }

    export class MessageList extends jspb.Message { 
        clearMessagesList(): void;
        getMessagesList(): Array<LLMSession.Message>;
        setMessagesList(value: Array<LLMSession.Message>): MessageList;
        addMessages(value?: LLMSession.Message, index?: number): LLMSession.Message;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MessageList.AsObject;
        static toObject(includeInstance: boolean, msg: MessageList): MessageList.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MessageList, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MessageList;
        static deserializeBinaryFromReader(message: MessageList, reader: jspb.BinaryReader): MessageList;
    }

    export namespace MessageList {
        export type AsObject = {
            messagesList: Array<LLMSession.Message.AsObject>,
        }
    }

    export class MessageListRef extends jspb.Message { 
        getId(): string;
        setId(value: string): MessageListRef;

        hasFirstAt(): boolean;
        clearFirstAt(): void;
        getFirstAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setFirstAt(value?: google_protobuf_timestamp_pb.Timestamp): MessageListRef;

        hasLastAt(): boolean;
        clearLastAt(): void;
        getLastAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setLastAt(value?: google_protobuf_timestamp_pb.Timestamp): MessageListRef;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MessageListRef.AsObject;
        static toObject(includeInstance: boolean, msg: MessageListRef): MessageListRef.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MessageListRef, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MessageListRef;
        static deserializeBinaryFromReader(message: MessageListRef, reader: jspb.BinaryReader): MessageListRef;
    }

    export namespace MessageListRef {
        export type AsObject = {
            id: string,
            firstAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            lastAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        }
    }

    export class Context extends jspb.Message { 
        getAgent(): string;
        setAgent(value: string): Context;

        hasSandbox(): boolean;
        clearSandbox(): void;
        getSandbox(): LLMSession.Context.Sandbox | undefined;
        setSandbox(value?: LLMSession.Context.Sandbox): Context;

        hasTask(): boolean;
        clearTask(): void;
        getTask(): LLMSession.Context.Task | undefined;
        setTask(value?: LLMSession.Context.Task): Context;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): LLMSession.Context.Resources | undefined;
        setResources(value?: LLMSession.Context.Resources): Context;

        hasAuthorizedTemplates(): boolean;
        clearAuthorizedTemplates(): void;
        getAuthorizedTemplates(): LLMSession.Context.AuthorizedTemplates | undefined;
        setAuthorizedTemplates(value?: LLMSession.Context.AuthorizedTemplates): Context;

        hasModelMapping(): boolean;
        clearModelMapping(): void;
        getModelMapping(): sandboxes_api_v1_llm_pb.LLM.ModelMapping | undefined;
        setModelMapping(value?: sandboxes_api_v1_llm_pb.LLM.ModelMapping): Context;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Context.AsObject;
        static toObject(includeInstance: boolean, msg: Context): Context.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Context, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Context;
        static deserializeBinaryFromReader(message: Context, reader: jspb.BinaryReader): Context;
    }

    export namespace Context {
        export type AsObject = {
            agent: string,
            sandbox?: LLMSession.Context.Sandbox.AsObject,
            task?: LLMSession.Context.Task.AsObject,
            resources?: LLMSession.Context.Resources.AsObject,
            authorizedTemplates?: LLMSession.Context.AuthorizedTemplates.AsObject,
            modelMapping?: sandboxes_api_v1_llm_pb.LLM.ModelMapping.AsObject,
        }


        export class Sandbox extends jspb.Message { 
            getId(): string;
            setId(value: string): Sandbox;
            getWorkload(): string;
            setWorkload(value: string): Sandbox;
            getSandboxName(): string;
            setSandboxName(value: string): Sandbox;
            getRegion(): string;
            setRegion(value: string): Sandbox;

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
                id: string,
                workload: string,
                sandboxName: string,
                region: string,
            }
        }

        export class Task extends jspb.Message { 

            getLabelsMap(): jspb.Map<string, string>;
            clearLabelsMap(): void;

            hasInitiator(): boolean;
            clearInitiator(): void;
            getInitiator(): sandboxes_api_v1_object_pb.Subject | undefined;
            setInitiator(value?: sandboxes_api_v1_object_pb.Subject): Task;
            getInteractive(): boolean;
            setInteractive(value: boolean): Task;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Task.AsObject;
            static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Task;
            static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
        }

        export namespace Task {
            export type AsObject = {

                labelsMap: Array<[string, string]>,
                initiator?: sandboxes_api_v1_object_pb.Subject.AsObject,
                interactive: boolean,
            }
        }

        export class Resources extends jspb.Message { 

            getLinksMap(): jspb.Map<string, LLMSession.Context.Resources.Link>;
            clearLinksMap(): void;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Resources.AsObject;
            static toObject(includeInstance: boolean, msg: Resources): Resources.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Resources, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Resources;
            static deserializeBinaryFromReader(message: Resources, reader: jspb.BinaryReader): Resources;
        }

        export namespace Resources {
            export type AsObject = {

                linksMap: Array<[string, LLMSession.Context.Resources.Link.AsObject]>,
            }


            export class Ref extends jspb.Message { 
                getId(): string;
                setId(value: string): Ref;
                getName(): string;
                setName(value: string): Ref;
                getFolderId(): string;
                setFolderId(value: string): Ref;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Ref.AsObject;
                static toObject(includeInstance: boolean, msg: Ref): Ref.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Ref, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Ref;
                static deserializeBinaryFromReader(message: Ref, reader: jspb.BinaryReader): Ref;
            }

            export namespace Ref {
                export type AsObject = {
                    id: string,
                    name: string,
                    folderId: string,
                }
            }

            export class Link extends jspb.Message { 
                getType(): LLMSession.Context.Resources.Link.Type;
                setType(value: LLMSession.Context.Resources.Link.Type): Link;
                getResourceType(): string;
                setResourceType(value: string): Link;

                hasRef(): boolean;
                clearRef(): void;
                getRef(): LLMSession.Context.Resources.Ref | undefined;
                setRef(value?: LLMSession.Context.Resources.Ref): Link;
                getOwnership(): LLMSession.Context.Resources.Link.Ownership;
                setOwnership(value: LLMSession.Context.Resources.Link.Ownership): Link;

                hasSubSessionStart(): boolean;
                clearSubSessionStart(): void;
                getSubSessionStart(): LLMSession.Context.Resources.Link.SubSessionStart | undefined;
                setSubSessionStart(value?: LLMSession.Context.Resources.Link.SubSessionStart): Link;

                hasSubSessionComplete(): boolean;
                clearSubSessionComplete(): void;
                getSubSessionComplete(): LLMSession.Context.Resources.Link.SubSessionComplete | undefined;
                setSubSessionComplete(value?: LLMSession.Context.Resources.Link.SubSessionComplete): Link;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Link.AsObject;
                static toObject(includeInstance: boolean, msg: Link): Link.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Link, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Link;
                static deserializeBinaryFromReader(message: Link, reader: jspb.BinaryReader): Link;
            }

            export namespace Link {
                export type AsObject = {
                    type: LLMSession.Context.Resources.Link.Type,
                    resourceType: string,
                    ref?: LLMSession.Context.Resources.Ref.AsObject,
                    ownership: LLMSession.Context.Resources.Link.Ownership,
                    subSessionStart?: LLMSession.Context.Resources.Link.SubSessionStart.AsObject,
                    subSessionComplete?: LLMSession.Context.Resources.Link.SubSessionComplete.AsObject,
                }


                export class SubSessionStart extends jspb.Message { 

                    hasConversation(): boolean;
                    clearConversation(): void;
                    getConversation(): LLMSession.Conversation | undefined;
                    setConversation(value?: LLMSession.Conversation): SubSessionStart;

                    hasError(): boolean;
                    clearError(): void;
                    getError(): sandboxes_api_v1_common_pb.Error | undefined;
                    setError(value?: sandboxes_api_v1_common_pb.Error): SubSessionStart;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): SubSessionStart.AsObject;
                    static toObject(includeInstance: boolean, msg: SubSessionStart): SubSessionStart.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: SubSessionStart, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): SubSessionStart;
                    static deserializeBinaryFromReader(message: SubSessionStart, reader: jspb.BinaryReader): SubSessionStart;
                }

                export namespace SubSessionStart {
                    export type AsObject = {
                        conversation?: LLMSession.Conversation.AsObject,
                        error?: sandboxes_api_v1_common_pb.Error.AsObject,
                    }
                }

                export class SubSessionComplete extends jspb.Message { 
                    getPropagatedId(): string;
                    setPropagatedId(value: string): SubSessionComplete;

                    hasPropagatedTime(): boolean;
                    clearPropagatedTime(): void;
                    getPropagatedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
                    setPropagatedTime(value?: google_protobuf_timestamp_pb.Timestamp): SubSessionComplete;
                    getOutputMessageId(): string;
                    setOutputMessageId(value: string): SubSessionComplete;

                    hasStatus(): boolean;
                    clearStatus(): void;
                    getStatus(): sandboxes_api_v1_common_pb.RuntimeStatus | undefined;
                    setStatus(value?: sandboxes_api_v1_common_pb.RuntimeStatus): SubSessionComplete;

                    hasStop(): boolean;
                    clearStop(): void;
                    getStop(): LLMSession.Stop | undefined;
                    setStop(value?: LLMSession.Stop): SubSessionComplete;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): SubSessionComplete.AsObject;
                    static toObject(includeInstance: boolean, msg: SubSessionComplete): SubSessionComplete.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: SubSessionComplete, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): SubSessionComplete;
                    static deserializeBinaryFromReader(message: SubSessionComplete, reader: jspb.BinaryReader): SubSessionComplete;
                }

                export namespace SubSessionComplete {
                    export type AsObject = {
                        propagatedId: string,
                        propagatedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
                        outputMessageId: string,
                        status?: sandboxes_api_v1_common_pb.RuntimeStatus.AsObject,
                        stop?: LLMSession.Stop.AsObject,
                    }
                }


                export enum Type {
    UNSPECIFIED = 0,
    SANDBOX = 1,
    RESOURCE = 2,
    SUB_SESSION = 3,
                }

                export enum Ownership {
    NONE = 0,
    OWNED = 1,
    UNLINKED = 2,
                }

            }

        }

        export class AuthorizedTemplates extends jspb.Message { 
            getEnabled(): boolean;
            setEnabled(value: boolean): AuthorizedTemplates;
            clearAllowedList(): void;
            getAllowedList(): Array<LLMSession.Context.AuthorizedTemplates.Match>;
            setAllowedList(value: Array<LLMSession.Context.AuthorizedTemplates.Match>): AuthorizedTemplates;
            addAllowed(value?: LLMSession.Context.AuthorizedTemplates.Match, index?: number): LLMSession.Context.AuthorizedTemplates.Match;
            clearExcludedList(): void;
            getExcludedList(): Array<LLMSession.Context.AuthorizedTemplates.Match>;
            setExcludedList(value: Array<LLMSession.Context.AuthorizedTemplates.Match>): AuthorizedTemplates;
            addExcluded(value?: LLMSession.Context.AuthorizedTemplates.Match, index?: number): LLMSession.Context.AuthorizedTemplates.Match;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): AuthorizedTemplates.AsObject;
            static toObject(includeInstance: boolean, msg: AuthorizedTemplates): AuthorizedTemplates.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: AuthorizedTemplates, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): AuthorizedTemplates;
            static deserializeBinaryFromReader(message: AuthorizedTemplates, reader: jspb.BinaryReader): AuthorizedTemplates;
        }

        export namespace AuthorizedTemplates {
            export type AsObject = {
                enabled: boolean,
                allowedList: Array<LLMSession.Context.AuthorizedTemplates.Match.AsObject>,
                excludedList: Array<LLMSession.Context.AuthorizedTemplates.Match.AsObject>,
            }


            export class Match extends jspb.Message { 

                hasPattern(): boolean;
                clearPattern(): void;
                getPattern(): string;
                setPattern(value: string): Match;

                hasRegexp(): boolean;
                clearRegexp(): void;
                getRegexp(): string;
                setRegexp(value: string): Match;

                getMethodCase(): Match.MethodCase;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Match.AsObject;
                static toObject(includeInstance: boolean, msg: Match): Match.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Match, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Match;
                static deserializeBinaryFromReader(message: Match, reader: jspb.BinaryReader): Match;
            }

            export namespace Match {
                export type AsObject = {
                    pattern: string,
                    regexp: string,
                }

                export enum MethodCase {
                    METHOD_NOT_SET = 0,
                    PATTERN = 1,
                    REGEXP = 2,
                }

            }

        }

    }

    export class Conversation extends jspb.Message { 
        clearMessagesList(): void;
        getMessagesList(): Array<LLMSession.Message>;
        setMessagesList(value: Array<LLMSession.Message>): Conversation;
        addMessages(value?: LLMSession.Message, index?: number): LLMSession.Message;

        hasCancellation(): boolean;
        clearCancellation(): void;
        getCancellation(): LLMSession.Conversation.Cancellation | undefined;
        setCancellation(value?: LLMSession.Conversation.Cancellation): Conversation;

        hasInitialContext(): boolean;
        clearInitialContext(): void;
        getInitialContext(): LLMSession.Context | undefined;
        setInitialContext(value?: LLMSession.Context): Conversation;

        hasExecutionControl(): boolean;
        clearExecutionControl(): void;
        getExecutionControl(): LLMSession.Conversation.ExecutionControl | undefined;
        setExecutionControl(value?: LLMSession.Conversation.ExecutionControl): Conversation;

        hasActiveMessageList(): boolean;
        clearActiveMessageList(): void;
        getActiveMessageList(): LLMSession.MessageListRef | undefined;
        setActiveMessageList(value?: LLMSession.MessageListRef): Conversation;
        clearArchivedMessageListsList(): void;
        getArchivedMessageListsList(): Array<LLMSession.MessageListRef>;
        setArchivedMessageListsList(value: Array<LLMSession.MessageListRef>): Conversation;
        addArchivedMessageLists(value?: LLMSession.MessageListRef, index?: number): LLMSession.MessageListRef;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Conversation.AsObject;
        static toObject(includeInstance: boolean, msg: Conversation): Conversation.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Conversation, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Conversation;
        static deserializeBinaryFromReader(message: Conversation, reader: jspb.BinaryReader): Conversation;
    }

    export namespace Conversation {
        export type AsObject = {
            messagesList: Array<LLMSession.Message.AsObject>,
            cancellation?: LLMSession.Conversation.Cancellation.AsObject,
            initialContext?: LLMSession.Context.AsObject,
            executionControl?: LLMSession.Conversation.ExecutionControl.AsObject,
            activeMessageList?: LLMSession.MessageListRef.AsObject,
            archivedMessageListsList: Array<LLMSession.MessageListRef.AsObject>,
        }


        export class Cancellation extends jspb.Message { 

            hasTime(): boolean;
            clearTime(): void;
            getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
            setTime(value?: google_protobuf_timestamp_pb.Timestamp): Cancellation;
            getMessageId(): string;
            setMessageId(value: string): Cancellation;

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
                time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
                messageId: string,
            }
        }

        export class ExecutionControl extends jspb.Message { 
            getApprovalMode(): LLMSession.Conversation.ExecutionControl.ApprovalMode;
            setApprovalMode(value: LLMSession.Conversation.ExecutionControl.ApprovalMode): ExecutionControl;

            hasStreaming(): boolean;
            clearStreaming(): void;
            getStreaming(): LLMSession.Conversation.ExecutionControl.Streaming | undefined;
            setStreaming(value?: LLMSession.Conversation.ExecutionControl.Streaming): ExecutionControl;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): ExecutionControl.AsObject;
            static toObject(includeInstance: boolean, msg: ExecutionControl): ExecutionControl.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: ExecutionControl, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): ExecutionControl;
            static deserializeBinaryFromReader(message: ExecutionControl, reader: jspb.BinaryReader): ExecutionControl;
        }

        export namespace ExecutionControl {
            export type AsObject = {
                approvalMode: LLMSession.Conversation.ExecutionControl.ApprovalMode,
                streaming?: LLMSession.Conversation.ExecutionControl.Streaming.AsObject,
            }


            export class Streaming extends jspb.Message { 
                getEnabled(): boolean;
                setEnabled(value: boolean): Streaming;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Streaming.AsObject;
                static toObject(includeInstance: boolean, msg: Streaming): Streaming.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Streaming, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Streaming;
                static deserializeBinaryFromReader(message: Streaming, reader: jspb.BinaryReader): Streaming;
            }

            export namespace Streaming {
                export type AsObject = {
                    enabled: boolean,
                }
            }


            export enum ApprovalMode {
    DEFAULT = 0,
    ALL_APPROVED = 1,
            }

        }

    }

    export class PromptContext extends jspb.Message { 
        clearMessagesList(): void;
        getMessagesList(): Array<LLMSession.Message>;
        setMessagesList(value: Array<LLMSession.Message>): PromptContext;
        addMessages(value?: LLMSession.Message, index?: number): LLMSession.Message;
        getAgent(): string;
        setAgent(value: string): PromptContext;

        hasUsage(): boolean;
        clearUsage(): void;
        getUsage(): LLMSession.Usage | undefined;
        setUsage(value?: LLMSession.Usage): PromptContext;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): PromptContext.AsObject;
        static toObject(includeInstance: boolean, msg: PromptContext): PromptContext.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: PromptContext, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): PromptContext;
        static deserializeBinaryFromReader(message: PromptContext, reader: jspb.BinaryReader): PromptContext;
    }

    export namespace PromptContext {
        export type AsObject = {
            messagesList: Array<LLMSession.Message.AsObject>,
            agent: string,
            usage?: LLMSession.Usage.AsObject,
        }
    }

    export class SharedStateData extends jspb.Message { 
        getOpaque(): string;
        setOpaque(value: string): SharedStateData;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SharedStateData.AsObject;
        static toObject(includeInstance: boolean, msg: SharedStateData): SharedStateData.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SharedStateData, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SharedStateData;
        static deserializeBinaryFromReader(message: SharedStateData, reader: jspb.BinaryReader): SharedStateData;
    }

    export namespace SharedStateData {
        export type AsObject = {
            opaque: string,
        }
    }

    export class SharedState extends jspb.Message { 

        getDataMap(): jspb.Map<string, string>;
        clearDataMap(): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SharedState.AsObject;
        static toObject(includeInstance: boolean, msg: SharedState): SharedState.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SharedState, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SharedState;
        static deserializeBinaryFromReader(message: SharedState, reader: jspb.BinaryReader): SharedState;
    }

    export namespace SharedState {
        export type AsObject = {

            dataMap: Array<[string, string]>,
        }
    }

    export class Stop extends jspb.Message { 
        getReason(): LLMSession.Stop.Reason;
        setReason(value: LLMSession.Stop.Reason): Stop;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Stop.AsObject;
        static toObject(includeInstance: boolean, msg: Stop): Stop.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Stop, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Stop;
        static deserializeBinaryFromReader(message: Stop, reader: jspb.BinaryReader): Stop;
    }

    export namespace Stop {
        export type AsObject = {
            reason: LLMSession.Stop.Reason,
        }

        export enum Reason {
    NORMAL = 0,
    CANCELED = 1,
    APPROVAL_PENDING = 2,
    INPUT_PENDING = 3,
    WAIT_SUB_SESSIONS = 4,
        }

    }

    export class Usage extends jspb.Message { 
        getPromptTokens(): number;
        setPromptTokens(value: number): Usage;
        getCompletionTokens(): number;
        setCompletionTokens(value: number): Usage;
        getReasoningTokens(): number;
        setReasoningTokens(value: number): Usage;
        getCachedTokens(): number;
        setCachedTokens(value: number): Usage;
        getCacheWriteTokens(): number;
        setCacheWriteTokens(value: number): Usage;

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
            promptTokens: number,
            completionTokens: number,
            reasoningTokens: number,
            cachedTokens: number,
            cacheWriteTokens: number,
        }
    }

    export class ContextWindowStatus extends jspb.Message { 

        hasUsage(): boolean;
        clearUsage(): void;
        getUsage(): LLMSession.Usage | undefined;
        setUsage(value?: LLMSession.Usage): ContextWindowStatus;
        getTokenLimit(): number;
        setTokenLimit(value: number): ContextWindowStatus;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ContextWindowStatus.AsObject;
        static toObject(includeInstance: boolean, msg: ContextWindowStatus): ContextWindowStatus.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ContextWindowStatus, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ContextWindowStatus;
        static deserializeBinaryFromReader(message: ContextWindowStatus, reader: jspb.BinaryReader): ContextWindowStatus;
    }

    export namespace ContextWindowStatus {
        export type AsObject = {
            usage?: LLMSession.Usage.AsObject,
            tokenLimit: number,
        }
    }

    export class Archive extends jspb.Message { 

        hasStartAt(): boolean;
        clearStartAt(): void;
        getStartAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setStartAt(value?: google_protobuf_timestamp_pb.Timestamp): Archive;

        hasCompleteAt(): boolean;
        clearCompleteAt(): void;
        getCompleteAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setCompleteAt(value?: google_protobuf_timestamp_pb.Timestamp): Archive;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Archive.AsObject;
        static toObject(includeInstance: boolean, msg: Archive): Archive.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Archive, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Archive;
        static deserializeBinaryFromReader(message: Archive, reader: jspb.BinaryReader): Archive;
    }

    export namespace Archive {
        export type AsObject = {
            startAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            completeAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        }
    }

    export class AccessControl extends jspb.Message { 

        getUsersMap(): jspb.Map<string, LLMSession.AccessControl.Level>;
        clearUsersMap(): void;
        getAll(): LLMSession.AccessControl.Level;
        setAll(value: LLMSession.AccessControl.Level): AccessControl;

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

            usersMap: Array<[string, LLMSession.AccessControl.Level]>,
            all: LLMSession.AccessControl.Level,
        }

        export enum Level {
    NONE = 0,
    VIEW = 1,
    FULL = 2,
        }

    }


    export enum Role {
    UNKNOWN = 0,
    SYSTEM = 1,
    USER = 2,
    ASSISTANT = 3,
    TOOL = 4,
    }

}
