// package: sandboxes.api.v1
// file: sandboxes/api/v1/object.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Subject extends jspb.Message { 
    getId(): string;
    setId(value: string): Subject;
    getName(): string;
    setName(value: string): Subject;

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
        id: string,
        name: string,
    }
}

export class ObjectMeta extends jspb.Message { 
    getId(): string;
    setId(value: string): ObjectMeta;
    getName(): string;
    setName(value: string): ObjectMeta;
    getVersion(): string;
    setVersion(value: string): ObjectMeta;

    hasCreator(): boolean;
    clearCreator(): void;
    getCreator(): Subject | undefined;
    setCreator(value?: Subject): ObjectMeta;

    hasOwner(): boolean;
    clearOwner(): void;
    getOwner(): Subject | undefined;
    setOwner(value?: Subject): ObjectMeta;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ObjectMeta;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ObjectMeta;

    hasAccessedAt(): boolean;
    clearAccessedAt(): void;
    getAccessedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setAccessedAt(value?: google_protobuf_timestamp_pb.Timestamp): ObjectMeta;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasDeletion(): boolean;
    clearDeletion(): void;
    getDeletion(): ObjectMeta.Deletion | undefined;
    setDeletion(value?: ObjectMeta.Deletion): ObjectMeta;

    hasHierarchy(): boolean;
    clearHierarchy(): void;
    getHierarchy(): ObjectMeta.Hierarchy | undefined;
    setHierarchy(value?: ObjectMeta.Hierarchy): ObjectMeta;
    getDescription(): string;
    setDescription(value: string): ObjectMeta;

    getFinalizedMap(): jspb.Map<string, boolean>;
    clearFinalizedMap(): void;
    getPartition(): number;
    setPartition(value: number): ObjectMeta;
    getRevision(): number;
    setRevision(value: number): ObjectMeta;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ObjectMeta.AsObject;
    static toObject(includeInstance: boolean, msg: ObjectMeta): ObjectMeta.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ObjectMeta, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ObjectMeta;
    static deserializeBinaryFromReader(message: ObjectMeta, reader: jspb.BinaryReader): ObjectMeta;
}

export namespace ObjectMeta {
    export type AsObject = {
        id: string,
        name: string,
        version: string,
        creator?: Subject.AsObject,
        owner?: Subject.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        accessedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,

        labelsMap: Array<[string, string]>,
        deletion?: ObjectMeta.Deletion.AsObject,
        hierarchy?: ObjectMeta.Hierarchy.AsObject,
        description: string,

        finalizedMap: Array<[string, boolean]>,
        partition: number,
        revision: number,
    }


    export class Deletion extends jspb.Message { 

        hasInitiatedAt(): boolean;
        clearInitiatedAt(): void;
        getInitiatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setInitiatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Deletion;

        hasCompletedAt(): boolean;
        clearCompletedAt(): void;
        getCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): Deletion;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Deletion.AsObject;
        static toObject(includeInstance: boolean, msg: Deletion): Deletion.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Deletion, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Deletion;
        static deserializeBinaryFromReader(message: Deletion, reader: jspb.BinaryReader): Deletion;
    }

    export namespace Deletion {
        export type AsObject = {
            initiatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            completedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        }
    }

    export class Hierarchy extends jspb.Message { 
        getOrgId(): string;
        setOrgId(value: string): Hierarchy;
        getParentId(): string;
        setParentId(value: string): Hierarchy;
        getParentType(): ObjectMeta.Hierarchy.ParentType;
        setParentType(value: ObjectMeta.Hierarchy.ParentType): Hierarchy;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Hierarchy.AsObject;
        static toObject(includeInstance: boolean, msg: Hierarchy): Hierarchy.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Hierarchy, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Hierarchy;
        static deserializeBinaryFromReader(message: Hierarchy, reader: jspb.BinaryReader): Hierarchy;
    }

    export namespace Hierarchy {
        export type AsObject = {
            orgId: string,
            parentId: string,
            parentType: ObjectMeta.Hierarchy.ParentType,
        }

        export enum ParentType {
    DEFAULT = 0,
    PARENT = 1,
        }

    }

}

export class ObjectMetaFilter extends jspb.Message { 
    clearFilterByIdsList(): void;
    getFilterByIdsList(): Array<string>;
    setFilterByIdsList(value: Array<string>): ObjectMetaFilter;
    addFilterByIds(value: string, index?: number): string;
    clearFilterByNamesList(): void;
    getFilterByNamesList(): Array<string>;
    setFilterByNamesList(value: Array<string>): ObjectMetaFilter;
    addFilterByNames(value: string, index?: number): string;
    clearFilterByOwnerIdsList(): void;
    getFilterByOwnerIdsList(): Array<string>;
    setFilterByOwnerIdsList(value: Array<string>): ObjectMetaFilter;
    addFilterByOwnerIds(value: string, index?: number): string;

    hasCreatedSince(): boolean;
    clearCreatedSince(): void;
    getCreatedSince(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedSince(value?: google_protobuf_timestamp_pb.Timestamp): ObjectMetaFilter;

    hasCreatedBefore(): boolean;
    clearCreatedBefore(): void;
    getCreatedBefore(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedBefore(value?: google_protobuf_timestamp_pb.Timestamp): ObjectMetaFilter;

    hasUpdatedSince(): boolean;
    clearUpdatedSince(): void;
    getUpdatedSince(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedSince(value?: google_protobuf_timestamp_pb.Timestamp): ObjectMetaFilter;

    hasUpdatedBefore(): boolean;
    clearUpdatedBefore(): void;
    getUpdatedBefore(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedBefore(value?: google_protobuf_timestamp_pb.Timestamp): ObjectMetaFilter;
    getIncludeDeleting(): boolean;
    setIncludeDeleting(value: boolean): ObjectMetaFilter;
    getIncludeDeleted(): boolean;
    setIncludeDeleted(value: boolean): ObjectMetaFilter;

    hasInPartitions(): boolean;
    clearInPartitions(): void;
    getInPartitions(): ObjectMetaFilter.PartitionRange | undefined;
    setInPartitions(value?: ObjectMetaFilter.PartitionRange): ObjectMetaFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ObjectMetaFilter.AsObject;
    static toObject(includeInstance: boolean, msg: ObjectMetaFilter): ObjectMetaFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ObjectMetaFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ObjectMetaFilter;
    static deserializeBinaryFromReader(message: ObjectMetaFilter, reader: jspb.BinaryReader): ObjectMetaFilter;
}

export namespace ObjectMetaFilter {
    export type AsObject = {
        filterByIdsList: Array<string>,
        filterByNamesList: Array<string>,
        filterByOwnerIdsList: Array<string>,
        createdSince?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdBefore?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedSince?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedBefore?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        includeDeleting: boolean,
        includeDeleted: boolean,
        inPartitions?: ObjectMetaFilter.PartitionRange.AsObject,
    }


    export class PartitionRange extends jspb.Message { 
        getStart(): number;
        setStart(value: number): PartitionRange;
        getEnd(): number;
        setEnd(value: number): PartitionRange;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): PartitionRange.AsObject;
        static toObject(includeInstance: boolean, msg: PartitionRange): PartitionRange.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: PartitionRange, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): PartitionRange;
        static deserializeBinaryFromReader(message: PartitionRange, reader: jspb.BinaryReader): PartitionRange;
    }

    export namespace PartitionRange {
        export type AsObject = {
            start: number,
            end: number,
        }
    }

}
