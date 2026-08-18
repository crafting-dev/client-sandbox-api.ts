// package: sandboxes.api.v1
// file: sandboxes/api/v1/notification.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Notification extends jspb.Message { 
    getContent(): string;
    setContent(value: string): Notification;

    hasExpireAt(): boolean;
    clearExpireAt(): void;
    getExpireAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpireAt(value?: google_protobuf_timestamp_pb.Timestamp): Notification;
    getPriorityLevel(): Notification.PriorityLevel;
    setPriorityLevel(value: Notification.PriorityLevel): Notification;
    getPriorityRank(): number;
    setPriorityRank(value: number): Notification;

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
        content: string,
        expireAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        priorityLevel: Notification.PriorityLevel,
        priorityRank: number,
    }

    export enum PriorityLevel {
    DEFAULT = 0,
    IMPORTANT = 1,
    }

}
