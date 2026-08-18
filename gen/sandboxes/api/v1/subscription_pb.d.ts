// package: sandboxes.api.v1
// file: sandboxes/api/v1/subscription.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as sandboxes_api_v1_common_pb from "../../../sandboxes/api/v1/common_pb";

export class Subscription extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Subscription.AsObject;
    static toObject(includeInstance: boolean, msg: Subscription): Subscription.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Subscription, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Subscription;
    static deserializeBinaryFromReader(message: Subscription, reader: jspb.BinaryReader): Subscription;
}

export namespace Subscription {
    export type AsObject = {
    }


    export class Subject extends jspb.Message { 
        getTopic(): Subscription.Subject.Topic;
        setTopic(value: Subscription.Subject.Topic): Subject;
        getId(): string;
        setId(value: string): Subject;
        getResourceType(): string;
        setResourceType(value: string): Subject;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Subject.AsObject;
        static toObject(includeInstance: boolean, msg: Subject): Subject.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Subject, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Subject;
        static deserializeBinaryFromReader(message: Subject, reader: jspb.BinaryReader): Subject;
    }

    export namespace Subject {
        export type AsObject = {
            topic: Subscription.Subject.Topic,
            id: string,
            resourceType: string,
        }

        export enum Topic {
    NONE = 0,
    ORG = 1,
    ORG_LIST = 2,
    APP = 3,
    APP_LIST = 4,
    SANDBOX = 5,
    SANDBOX_LIST = 6,
    SNAPSHOT = 7,
    SNAPSHOT_LIST = 8,
    RESOURCE = 9,
    FOLDER = 10,
    FOLDER_LIST = 11,
    JOB = 12,
    JOB_LIST = 13,
    RESOURCE_LIST = 14,
    SECRET = 15,
    SECRET_LIST = 16,
        }

    }

    export class Request extends jspb.Message { 
        getSeq(): number;
        setSeq(value: number): Request;
        getOrgId(): string;
        setOrgId(value: string): Request;

        hasSubscribe(): boolean;
        clearSubscribe(): void;
        getSubscribe(): Subscription.Request.Subscribe | undefined;
        setSubscribe(value?: Subscription.Request.Subscribe): Request;

        hasUnsubscribe(): boolean;
        clearUnsubscribe(): void;
        getUnsubscribe(): Subscription.Request.Unsubscribe | undefined;
        setUnsubscribe(value?: Subscription.Request.Unsubscribe): Request;

        getActionCase(): Request.ActionCase;

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
            seq: number,
            orgId: string,
            subscribe?: Subscription.Request.Subscribe.AsObject,
            unsubscribe?: Subscription.Request.Unsubscribe.AsObject,
        }


        export class Subscribe extends jspb.Message { 

            hasSubject(): boolean;
            clearSubject(): void;
            getSubject(): Subscription.Subject | undefined;
            setSubject(value?: Subscription.Subject): Subscribe;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Subscribe.AsObject;
            static toObject(includeInstance: boolean, msg: Subscribe): Subscribe.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Subscribe, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Subscribe;
            static deserializeBinaryFromReader(message: Subscribe, reader: jspb.BinaryReader): Subscribe;
        }

        export namespace Subscribe {
            export type AsObject = {
                subject?: Subscription.Subject.AsObject,
            }
        }

        export class Unsubscribe extends jspb.Message { 

            hasSubject(): boolean;
            clearSubject(): void;
            getSubject(): Subscription.Subject | undefined;
            setSubject(value?: Subscription.Subject): Unsubscribe;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Unsubscribe.AsObject;
            static toObject(includeInstance: boolean, msg: Unsubscribe): Unsubscribe.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Unsubscribe, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Unsubscribe;
            static deserializeBinaryFromReader(message: Unsubscribe, reader: jspb.BinaryReader): Unsubscribe;
        }

        export namespace Unsubscribe {
            export type AsObject = {
                subject?: Subscription.Subject.AsObject,
            }
        }


        export enum ActionCase {
            ACTION_NOT_SET = 0,
            SUBSCRIBE = 3,
            UNSUBSCRIBE = 4,
        }

    }

    export class Message extends jspb.Message { 

        hasNotification(): boolean;
        clearNotification(): void;
        getNotification(): Subscription.Message.Notification | undefined;
        setNotification(value?: Subscription.Message.Notification): Message;

        hasResponse(): boolean;
        clearResponse(): void;
        getResponse(): Subscription.Message.Response | undefined;
        setResponse(value?: Subscription.Message.Response): Message;

        hasError(): boolean;
        clearError(): void;
        getError(): sandboxes_api_v1_common_pb.Error | undefined;
        setError(value?: sandboxes_api_v1_common_pb.Error): Message;

        getContentCase(): Message.ContentCase;

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
            notification?: Subscription.Message.Notification.AsObject,
            response?: Subscription.Message.Response.AsObject,
            error?: sandboxes_api_v1_common_pb.Error.AsObject,
        }


        export class Notification extends jspb.Message { 
            getType(): Subscription.Message.Notification.Type;
            setType(value: Subscription.Message.Notification.Type): Notification;

            hasSubject(): boolean;
            clearSubject(): void;
            getSubject(): Subscription.Subject | undefined;
            setSubject(value?: Subscription.Subject): Notification;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Notification.AsObject;
            static toObject(includeInstance: boolean, msg: Notification): Notification.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Notification, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Notification;
            static deserializeBinaryFromReader(message: Notification, reader: jspb.BinaryReader): Notification;
        }

        export namespace Notification {
            export type AsObject = {
                type: Subscription.Message.Notification.Type,
                subject?: Subscription.Subject.AsObject,
            }

            export enum Type {
    UNSPECIFIED = 0,
    CHANGED = 1,
    DELETED = 2,
            }

        }

        export class Response extends jspb.Message { 
            getSeq(): number;
            setSeq(value: number): Response;

            hasError(): boolean;
            clearError(): void;
            getError(): sandboxes_api_v1_common_pb.Error | undefined;
            setError(value?: sandboxes_api_v1_common_pb.Error): Response;

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
                seq: number,
                error?: sandboxes_api_v1_common_pb.Error.AsObject,
            }
        }


        export enum ContentCase {
            CONTENT_NOT_SET = 0,
            NOTIFICATION = 1,
            RESPONSE = 2,
            ERROR = 3,
        }

    }

}
