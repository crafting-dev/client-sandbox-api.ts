// package: sandboxes.api.v1
// file: sandboxes/api/v1/systemadminservice.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as sandboxes_api_v1_common_pb from "../../../sandboxes/api/v1/common_pb";
import * as sandboxes_api_v1_sandbox_pb from "../../../sandboxes/api/v1/sandbox_pb";
import * as sandboxes_api_v1_org_pb from "../../../sandboxes/api/v1/org_pb";
import * as sandboxes_api_v1_user_pb from "../../../sandboxes/api/v1/user_pb";
import * as sandboxes_api_v1_resource_pb from "../../../sandboxes/api/v1/resource_pb";
import * as sandboxes_api_v1_resource_system_pb from "../../../sandboxes/api/v1/resource_system_pb";
import * as sandboxes_api_v1_resource_nodepool_pb from "../../../sandboxes/api/v1/resource_nodepool_pb";
import * as sandboxes_api_v1_systeminfra_pb from "../../../sandboxes/api/v1/systeminfra_pb";

export class EncodeRequest extends jspb.Message { 

    hasK8snodepoolConfig(): boolean;
    clearK8snodepoolConfig(): void;
    getK8snodepoolConfig(): sandboxes_api_v1_resource_nodepool_pb.K8sNodePool.Config | undefined;
    setK8snodepoolConfig(value?: sandboxes_api_v1_resource_nodepool_pb.K8sNodePool.Config): EncodeRequest;

    getFromCase(): EncodeRequest.FromCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EncodeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EncodeRequest): EncodeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EncodeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EncodeRequest;
    static deserializeBinaryFromReader(message: EncodeRequest, reader: jspb.BinaryReader): EncodeRequest;
}

export namespace EncodeRequest {
    export type AsObject = {
        k8snodepoolConfig?: sandboxes_api_v1_resource_nodepool_pb.K8sNodePool.Config.AsObject,
    }

    export enum FromCase {
        FROM_NOT_SET = 0,
        K8SNODEPOOL_CONFIG = 11,
    }

}

export class EncodeResponse extends jspb.Message { 
    getYaml(): string;
    setYaml(value: string): EncodeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EncodeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EncodeResponse): EncodeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EncodeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EncodeResponse;
    static deserializeBinaryFromReader(message: EncodeResponse, reader: jspb.BinaryReader): EncodeResponse;
}

export namespace EncodeResponse {
    export type AsObject = {
        yaml: string,
    }
}

export class DecodeRequest extends jspb.Message { 
    getType(): DecodeRequest.Type;
    setType(value: DecodeRequest.Type): DecodeRequest;

    hasYaml(): boolean;
    clearYaml(): void;
    getYaml(): string;
    setYaml(value: string): DecodeRequest;

    getInputCase(): DecodeRequest.InputCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DecodeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DecodeRequest): DecodeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DecodeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DecodeRequest;
    static deserializeBinaryFromReader(message: DecodeRequest, reader: jspb.BinaryReader): DecodeRequest;
}

export namespace DecodeRequest {
    export type AsObject = {
        type: DecodeRequest.Type,
        yaml: string,
    }

    export enum Type {
    UNSPECIFIED = 0,
    K8SNODEPOOL_CONFIG = 1,
    }


    export enum InputCase {
        INPUT_NOT_SET = 0,
        YAML = 11,
    }

}

export class DecodeResponse extends jspb.Message { 

    hasK8snodepoolConfig(): boolean;
    clearK8snodepoolConfig(): void;
    getK8snodepoolConfig(): sandboxes_api_v1_resource_nodepool_pb.K8sNodePool.Config | undefined;
    setK8snodepoolConfig(value?: sandboxes_api_v1_resource_nodepool_pb.K8sNodePool.Config): DecodeResponse;

    getResultCase(): DecodeResponse.ResultCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DecodeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DecodeResponse): DecodeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DecodeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DecodeResponse;
    static deserializeBinaryFromReader(message: DecodeResponse, reader: jspb.BinaryReader): DecodeResponse;
}

export namespace DecodeResponse {
    export type AsObject = {
        k8snodepoolConfig?: sandboxes_api_v1_resource_nodepool_pb.K8sNodePool.Config.AsObject,
    }

    export enum ResultCase {
        RESULT_NOT_SET = 0,
        K8SNODEPOOL_CONFIG = 11,
    }

}

export class SystemAlert extends jspb.Message { 
    getName(): string;
    setName(value: string): SystemAlert;
    getDescription(): string;
    setDescription(value: string): SystemAlert;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemAlert.AsObject;
    static toObject(includeInstance: boolean, msg: SystemAlert): SystemAlert.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemAlert, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemAlert;
    static deserializeBinaryFromReader(message: SystemAlert, reader: jspb.BinaryReader): SystemAlert;
}

export namespace SystemAlert {
    export type AsObject = {
        name: string,
        description: string,
    }
}

export class ListSystemAlertsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSystemAlertsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSystemAlertsRequest): ListSystemAlertsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSystemAlertsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSystemAlertsRequest;
    static deserializeBinaryFromReader(message: ListSystemAlertsRequest, reader: jspb.BinaryReader): ListSystemAlertsRequest;
}

export namespace ListSystemAlertsRequest {
    export type AsObject = {
    }
}

export class ListSystemAlertsResponse extends jspb.Message { 
    clearAlertsList(): void;
    getAlertsList(): Array<SystemAlert>;
    setAlertsList(value: Array<SystemAlert>): ListSystemAlertsResponse;
    addAlerts(value?: SystemAlert, index?: number): SystemAlert;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSystemAlertsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSystemAlertsResponse): ListSystemAlertsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSystemAlertsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSystemAlertsResponse;
    static deserializeBinaryFromReader(message: ListSystemAlertsResponse, reader: jspb.BinaryReader): ListSystemAlertsResponse;
}

export namespace ListSystemAlertsResponse {
    export type AsObject = {
        alertsList: Array<SystemAlert.AsObject>,
    }
}

export class QuerySystemRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuerySystemRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QuerySystemRequest): QuerySystemRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuerySystemRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuerySystemRequest;
    static deserializeBinaryFromReader(message: QuerySystemRequest, reader: jspb.BinaryReader): QuerySystemRequest;
}

export namespace QuerySystemRequest {
    export type AsObject = {
    }
}

export class QuerySystemResponse extends jspb.Message { 

    hasSystem(): boolean;
    clearSystem(): void;
    getSystem(): sandboxes_api_v1_resource_pb.Resource | undefined;
    setSystem(value?: sandboxes_api_v1_resource_pb.Resource): QuerySystemResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuerySystemResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QuerySystemResponse): QuerySystemResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuerySystemResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuerySystemResponse;
    static deserializeBinaryFromReader(message: QuerySystemResponse, reader: jspb.BinaryReader): QuerySystemResponse;
}

export namespace QuerySystemResponse {
    export type AsObject = {
        system?: sandboxes_api_v1_resource_pb.Resource.AsObject,
    }
}

export class UpdateSystemRequest extends jspb.Message { 

    hasAlertConfig(): boolean;
    clearAlertConfig(): void;
    getAlertConfig(): sandboxes_api_v1_resource_system_pb.System.AlertConfig | undefined;
    setAlertConfig(value?: sandboxes_api_v1_resource_system_pb.System.AlertConfig): UpdateSystemRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSystemRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSystemRequest): UpdateSystemRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSystemRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSystemRequest;
    static deserializeBinaryFromReader(message: UpdateSystemRequest, reader: jspb.BinaryReader): UpdateSystemRequest;
}

export namespace UpdateSystemRequest {
    export type AsObject = {
        alertConfig?: sandboxes_api_v1_resource_system_pb.System.AlertConfig.AsObject,
    }
}

export class UpdateSystemResponse extends jspb.Message { 

    hasSystem(): boolean;
    clearSystem(): void;
    getSystem(): sandboxes_api_v1_resource_pb.Resource | undefined;
    setSystem(value?: sandboxes_api_v1_resource_pb.Resource): UpdateSystemResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSystemResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSystemResponse): UpdateSystemResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSystemResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSystemResponse;
    static deserializeBinaryFromReader(message: UpdateSystemResponse, reader: jspb.BinaryReader): UpdateSystemResponse;
}

export namespace UpdateSystemResponse {
    export type AsObject = {
        system?: sandboxes_api_v1_resource_pb.Resource.AsObject,
    }
}

export class QueryInfraRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryInfraRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryInfraRequest): QueryInfraRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryInfraRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryInfraRequest;
    static deserializeBinaryFromReader(message: QueryInfraRequest, reader: jspb.BinaryReader): QueryInfraRequest;
}

export namespace QueryInfraRequest {
    export type AsObject = {
    }
}

export class QueryInfraResponse extends jspb.Message { 
    clearInfraList(): void;
    getInfraList(): Array<sandboxes_api_v1_systeminfra_pb.SystemInfra>;
    setInfraList(value: Array<sandboxes_api_v1_systeminfra_pb.SystemInfra>): QueryInfraResponse;
    addInfra(value?: sandboxes_api_v1_systeminfra_pb.SystemInfra, index?: number): sandboxes_api_v1_systeminfra_pb.SystemInfra;
    clearRegionsList(): void;
    getRegionsList(): Array<string>;
    setRegionsList(value: Array<string>): QueryInfraResponse;
    addRegions(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryInfraResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryInfraResponse): QueryInfraResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryInfraResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryInfraResponse;
    static deserializeBinaryFromReader(message: QueryInfraResponse, reader: jspb.BinaryReader): QueryInfraResponse;
}

export namespace QueryInfraResponse {
    export type AsObject = {
        infraList: Array<sandboxes_api_v1_systeminfra_pb.SystemInfra.AsObject>,
        regionsList: Array<string>,
    }
}

export class InfraActionRequest extends jspb.Message { 
    getRegion(): string;
    setRegion(value: string): InfraActionRequest;

    hasAction(): boolean;
    clearAction(): void;
    getAction(): google_protobuf_any_pb.Any | undefined;
    setAction(value?: google_protobuf_any_pb.Any): InfraActionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InfraActionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InfraActionRequest): InfraActionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InfraActionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InfraActionRequest;
    static deserializeBinaryFromReader(message: InfraActionRequest, reader: jspb.BinaryReader): InfraActionRequest;
}

export namespace InfraActionRequest {
    export type AsObject = {
        region: string,
        action?: google_protobuf_any_pb.Any.AsObject,
    }
}

export class InfraActionResponse extends jspb.Message { 

    hasResult(): boolean;
    clearResult(): void;
    getResult(): google_protobuf_any_pb.Any | undefined;
    setResult(value?: google_protobuf_any_pb.Any): InfraActionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InfraActionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: InfraActionResponse): InfraActionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InfraActionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InfraActionResponse;
    static deserializeBinaryFromReader(message: InfraActionResponse, reader: jspb.BinaryReader): InfraActionResponse;
}

export namespace InfraActionResponse {
    export type AsObject = {
        result?: google_protobuf_any_pb.Any.AsObject,
    }
}

export class ListK8sNodePoolsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListK8sNodePoolsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListK8sNodePoolsRequest): ListK8sNodePoolsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListK8sNodePoolsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListK8sNodePoolsRequest;
    static deserializeBinaryFromReader(message: ListK8sNodePoolsRequest, reader: jspb.BinaryReader): ListK8sNodePoolsRequest;
}

export namespace ListK8sNodePoolsRequest {
    export type AsObject = {
    }
}

export class ListK8sNodePoolsResponse extends jspb.Message { 
    clearNodePoolsList(): void;
    getNodePoolsList(): Array<sandboxes_api_v1_resource_pb.Resource>;
    setNodePoolsList(value: Array<sandboxes_api_v1_resource_pb.Resource>): ListK8sNodePoolsResponse;
    addNodePools(value?: sandboxes_api_v1_resource_pb.Resource, index?: number): sandboxes_api_v1_resource_pb.Resource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListK8sNodePoolsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListK8sNodePoolsResponse): ListK8sNodePoolsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListK8sNodePoolsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListK8sNodePoolsResponse;
    static deserializeBinaryFromReader(message: ListK8sNodePoolsResponse, reader: jspb.BinaryReader): ListK8sNodePoolsResponse;
}

export namespace ListK8sNodePoolsResponse {
    export type AsObject = {
        nodePoolsList: Array<sandboxes_api_v1_resource_pb.Resource.AsObject>,
    }
}

export class CreateK8sNodePoolRequest extends jspb.Message { 

    hasNodePool(): boolean;
    clearNodePool(): void;
    getNodePool(): sandboxes_api_v1_resource_pb.Resource | undefined;
    setNodePool(value?: sandboxes_api_v1_resource_pb.Resource): CreateK8sNodePoolRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateK8sNodePoolRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateK8sNodePoolRequest): CreateK8sNodePoolRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateK8sNodePoolRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateK8sNodePoolRequest;
    static deserializeBinaryFromReader(message: CreateK8sNodePoolRequest, reader: jspb.BinaryReader): CreateK8sNodePoolRequest;
}

export namespace CreateK8sNodePoolRequest {
    export type AsObject = {
        nodePool?: sandboxes_api_v1_resource_pb.Resource.AsObject,
    }
}

export class CreateK8sNodePoolResponse extends jspb.Message { 

    hasNodePool(): boolean;
    clearNodePool(): void;
    getNodePool(): sandboxes_api_v1_resource_pb.Resource | undefined;
    setNodePool(value?: sandboxes_api_v1_resource_pb.Resource): CreateK8sNodePoolResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateK8sNodePoolResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateK8sNodePoolResponse): CreateK8sNodePoolResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateK8sNodePoolResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateK8sNodePoolResponse;
    static deserializeBinaryFromReader(message: CreateK8sNodePoolResponse, reader: jspb.BinaryReader): CreateK8sNodePoolResponse;
}

export namespace CreateK8sNodePoolResponse {
    export type AsObject = {
        nodePool?: sandboxes_api_v1_resource_pb.Resource.AsObject,
    }
}

export class UpdateK8sNodePoolRequest extends jspb.Message { 

    hasNodePool(): boolean;
    clearNodePool(): void;
    getNodePool(): sandboxes_api_v1_resource_pb.Resource | undefined;
    setNodePool(value?: sandboxes_api_v1_resource_pb.Resource): UpdateK8sNodePoolRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateK8sNodePoolRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateK8sNodePoolRequest): UpdateK8sNodePoolRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateK8sNodePoolRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateK8sNodePoolRequest;
    static deserializeBinaryFromReader(message: UpdateK8sNodePoolRequest, reader: jspb.BinaryReader): UpdateK8sNodePoolRequest;
}

export namespace UpdateK8sNodePoolRequest {
    export type AsObject = {
        nodePool?: sandboxes_api_v1_resource_pb.Resource.AsObject,
    }
}

export class UpdateK8sNodePoolResponse extends jspb.Message { 

    hasNodePool(): boolean;
    clearNodePool(): void;
    getNodePool(): sandboxes_api_v1_resource_pb.Resource | undefined;
    setNodePool(value?: sandboxes_api_v1_resource_pb.Resource): UpdateK8sNodePoolResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateK8sNodePoolResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateK8sNodePoolResponse): UpdateK8sNodePoolResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateK8sNodePoolResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateK8sNodePoolResponse;
    static deserializeBinaryFromReader(message: UpdateK8sNodePoolResponse, reader: jspb.BinaryReader): UpdateK8sNodePoolResponse;
}

export namespace UpdateK8sNodePoolResponse {
    export type AsObject = {
        nodePool?: sandboxes_api_v1_resource_pb.Resource.AsObject,
    }
}

export class PreviewK8sNodePoolUpdateRequest extends jspb.Message { 

    hasNodePool(): boolean;
    clearNodePool(): void;
    getNodePool(): sandboxes_api_v1_resource_pb.Resource | undefined;
    setNodePool(value?: sandboxes_api_v1_resource_pb.Resource): PreviewK8sNodePoolUpdateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PreviewK8sNodePoolUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PreviewK8sNodePoolUpdateRequest): PreviewK8sNodePoolUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PreviewK8sNodePoolUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PreviewK8sNodePoolUpdateRequest;
    static deserializeBinaryFromReader(message: PreviewK8sNodePoolUpdateRequest, reader: jspb.BinaryReader): PreviewK8sNodePoolUpdateRequest;
}

export namespace PreviewK8sNodePoolUpdateRequest {
    export type AsObject = {
        nodePool?: sandboxes_api_v1_resource_pb.Resource.AsObject,
    }
}

export class PreviewK8sNodePoolUpdateResponse extends jspb.Message { 

    hasRecreation(): boolean;
    clearRecreation(): void;
    getRecreation(): PreviewK8sNodePoolUpdateResponse.Recreation | undefined;
    setRecreation(value?: PreviewK8sNodePoolUpdateResponse.Recreation): PreviewK8sNodePoolUpdateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PreviewK8sNodePoolUpdateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PreviewK8sNodePoolUpdateResponse): PreviewK8sNodePoolUpdateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PreviewK8sNodePoolUpdateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PreviewK8sNodePoolUpdateResponse;
    static deserializeBinaryFromReader(message: PreviewK8sNodePoolUpdateResponse, reader: jspb.BinaryReader): PreviewK8sNodePoolUpdateResponse;
}

export namespace PreviewK8sNodePoolUpdateResponse {
    export type AsObject = {
        recreation?: PreviewK8sNodePoolUpdateResponse.Recreation.AsObject,
    }


    export class Change extends jspb.Message { 
        getField(): string;
        setField(value: string): Change;
        getFrom(): string;
        setFrom(value: string): Change;
        getTo(): string;
        setTo(value: string): Change;
        getExplain(): string;
        setExplain(value: string): Change;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Change.AsObject;
        static toObject(includeInstance: boolean, msg: Change): Change.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Change, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Change;
        static deserializeBinaryFromReader(message: Change, reader: jspb.BinaryReader): Change;
    }

    export namespace Change {
        export type AsObject = {
            field: string,
            from: string,
            to: string,
            explain: string,
        }
    }

    export class Recreation extends jspb.Message { 
        clearChangesList(): void;
        getChangesList(): Array<PreviewK8sNodePoolUpdateResponse.Change>;
        setChangesList(value: Array<PreviewK8sNodePoolUpdateResponse.Change>): Recreation;
        addChanges(value?: PreviewK8sNodePoolUpdateResponse.Change, index?: number): PreviewK8sNodePoolUpdateResponse.Change;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Recreation.AsObject;
        static toObject(includeInstance: boolean, msg: Recreation): Recreation.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Recreation, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Recreation;
        static deserializeBinaryFromReader(message: Recreation, reader: jspb.BinaryReader): Recreation;
    }

    export namespace Recreation {
        export type AsObject = {
            changesList: Array<PreviewK8sNodePoolUpdateResponse.Change.AsObject>,
        }
    }

}

export class DeleteK8sNodePoolRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteK8sNodePoolRequest;
    getVersion(): string;
    setVersion(value: string): DeleteK8sNodePoolRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteK8sNodePoolRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteK8sNodePoolRequest): DeleteK8sNodePoolRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteK8sNodePoolRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteK8sNodePoolRequest;
    static deserializeBinaryFromReader(message: DeleteK8sNodePoolRequest, reader: jspb.BinaryReader): DeleteK8sNodePoolRequest;
}

export namespace DeleteK8sNodePoolRequest {
    export type AsObject = {
        id: string,
        version: string,
    }
}

export class DeleteK8sNodePoolResponse extends jspb.Message { 

    hasNodePool(): boolean;
    clearNodePool(): void;
    getNodePool(): sandboxes_api_v1_resource_pb.Resource | undefined;
    setNodePool(value?: sandboxes_api_v1_resource_pb.Resource): DeleteK8sNodePoolResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteK8sNodePoolResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteK8sNodePoolResponse): DeleteK8sNodePoolResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteK8sNodePoolResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteK8sNodePoolResponse;
    static deserializeBinaryFromReader(message: DeleteK8sNodePoolResponse, reader: jspb.BinaryReader): DeleteK8sNodePoolResponse;
}

export namespace DeleteK8sNodePoolResponse {
    export type AsObject = {
        nodePool?: sandboxes_api_v1_resource_pb.Resource.AsObject,
    }
}

export class NodeMetrics extends jspb.Message { 
    getName(): string;
    setName(value: string): NodeMetrics;
    getNodePool(): string;
    setNodePool(value: string): NodeMetrics;
    getRegion(): string;
    setRegion(value: string): NodeMetrics;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    clearLoadavgList(): void;
    getLoadavgList(): Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>;
    setLoadavgList(value: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>): NodeMetrics;
    addLoadavg(value?: sandboxes_api_v1_common_pb.TimeSeriesDataPoint, index?: number): sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
    clearCpuUsageList(): void;
    getCpuUsageList(): Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>;
    setCpuUsageList(value: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>): NodeMetrics;
    addCpuUsage(value?: sandboxes_api_v1_common_pb.TimeSeriesDataPoint, index?: number): sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
    clearMemoryUsageList(): void;
    getMemoryUsageList(): Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>;
    setMemoryUsageList(value: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>): NodeMetrics;
    addMemoryUsage(value?: sandboxes_api_v1_common_pb.TimeSeriesDataPoint, index?: number): sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
    clearSwapUsageList(): void;
    getSwapUsageList(): Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>;
    setSwapUsageList(value: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>): NodeMetrics;
    addSwapUsage(value?: sandboxes_api_v1_common_pb.TimeSeriesDataPoint, index?: number): sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
    clearBootDiskUsageList(): void;
    getBootDiskUsageList(): Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>;
    setBootDiskUsageList(value: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>): NodeMetrics;
    addBootDiskUsage(value?: sandboxes_api_v1_common_pb.TimeSeriesDataPoint, index?: number): sandboxes_api_v1_common_pb.TimeSeriesDataPoint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodeMetrics.AsObject;
    static toObject(includeInstance: boolean, msg: NodeMetrics): NodeMetrics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NodeMetrics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodeMetrics;
    static deserializeBinaryFromReader(message: NodeMetrics, reader: jspb.BinaryReader): NodeMetrics;
}

export namespace NodeMetrics {
    export type AsObject = {
        name: string,
        nodePool: string,
        region: string,

        labelsMap: Array<[string, string]>,
        loadavgList: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint.AsObject>,
        cpuUsageList: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint.AsObject>,
        memoryUsageList: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint.AsObject>,
        swapUsageList: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint.AsObject>,
        bootDiskUsageList: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint.AsObject>,
    }
}

export class QueryNodeMetricsRequest extends jspb.Message { 

    hasSpan(): boolean;
    clearSpan(): void;
    getSpan(): sandboxes_api_v1_common_pb.TimeSeriesSpan | undefined;
    setSpan(value?: sandboxes_api_v1_common_pb.TimeSeriesSpan): QueryNodeMetricsRequest;
    clearFilterByNamesList(): void;
    getFilterByNamesList(): Array<string>;
    setFilterByNamesList(value: Array<string>): QueryNodeMetricsRequest;
    addFilterByNames(value: string, index?: number): string;
    clearFilterByNodePoolsList(): void;
    getFilterByNodePoolsList(): Array<string>;
    setFilterByNodePoolsList(value: Array<string>): QueryNodeMetricsRequest;
    addFilterByNodePools(value: string, index?: number): string;
    clearFilterByRegionsList(): void;
    getFilterByRegionsList(): Array<string>;
    setFilterByRegionsList(value: Array<string>): QueryNodeMetricsRequest;
    addFilterByRegions(value: string, index?: number): string;
    getIncludeCpu(): boolean;
    setIncludeCpu(value: boolean): QueryNodeMetricsRequest;
    getIncludeMemory(): boolean;
    setIncludeMemory(value: boolean): QueryNodeMetricsRequest;
    getIncludeStorage(): boolean;
    setIncludeStorage(value: boolean): QueryNodeMetricsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryNodeMetricsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryNodeMetricsRequest): QueryNodeMetricsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryNodeMetricsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryNodeMetricsRequest;
    static deserializeBinaryFromReader(message: QueryNodeMetricsRequest, reader: jspb.BinaryReader): QueryNodeMetricsRequest;
}

export namespace QueryNodeMetricsRequest {
    export type AsObject = {
        span?: sandboxes_api_v1_common_pb.TimeSeriesSpan.AsObject,
        filterByNamesList: Array<string>,
        filterByNodePoolsList: Array<string>,
        filterByRegionsList: Array<string>,
        includeCpu: boolean,
        includeMemory: boolean,
        includeStorage: boolean,
    }
}

export class QueryNodeMetricsResponse extends jspb.Message { 
    clearNodesList(): void;
    getNodesList(): Array<NodeMetrics>;
    setNodesList(value: Array<NodeMetrics>): QueryNodeMetricsResponse;
    addNodes(value?: NodeMetrics, index?: number): NodeMetrics;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryNodeMetricsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryNodeMetricsResponse): QueryNodeMetricsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryNodeMetricsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryNodeMetricsResponse;
    static deserializeBinaryFromReader(message: QueryNodeMetricsResponse, reader: jspb.BinaryReader): QueryNodeMetricsResponse;
}

export namespace QueryNodeMetricsResponse {
    export type AsObject = {
        nodesList: Array<NodeMetrics.AsObject>,
    }
}

export class NodePoolMetrics extends jspb.Message { 
    getName(): string;
    setName(value: string): NodePoolMetrics;
    getRegion(): string;
    setRegion(value: string): NodePoolMetrics;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    clearNodeCountList(): void;
    getNodeCountList(): Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>;
    setNodeCountList(value: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>): NodePoolMetrics;
    addNodeCount(value?: sandboxes_api_v1_common_pb.TimeSeriesDataPoint, index?: number): sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
    clearCpuUsageAvgList(): void;
    getCpuUsageAvgList(): Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>;
    setCpuUsageAvgList(value: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>): NodePoolMetrics;
    addCpuUsageAvg(value?: sandboxes_api_v1_common_pb.TimeSeriesDataPoint, index?: number): sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
    clearCpuUsageMaxList(): void;
    getCpuUsageMaxList(): Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>;
    setCpuUsageMaxList(value: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>): NodePoolMetrics;
    addCpuUsageMax(value?: sandboxes_api_v1_common_pb.TimeSeriesDataPoint, index?: number): sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
    clearMemoryUsageAvgList(): void;
    getMemoryUsageAvgList(): Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>;
    setMemoryUsageAvgList(value: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>): NodePoolMetrics;
    addMemoryUsageAvg(value?: sandboxes_api_v1_common_pb.TimeSeriesDataPoint, index?: number): sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
    clearMemoryUsageMaxList(): void;
    getMemoryUsageMaxList(): Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>;
    setMemoryUsageMaxList(value: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>): NodePoolMetrics;
    addMemoryUsageMax(value?: sandboxes_api_v1_common_pb.TimeSeriesDataPoint, index?: number): sandboxes_api_v1_common_pb.TimeSeriesDataPoint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodePoolMetrics.AsObject;
    static toObject(includeInstance: boolean, msg: NodePoolMetrics): NodePoolMetrics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NodePoolMetrics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodePoolMetrics;
    static deserializeBinaryFromReader(message: NodePoolMetrics, reader: jspb.BinaryReader): NodePoolMetrics;
}

export namespace NodePoolMetrics {
    export type AsObject = {
        name: string,
        region: string,

        labelsMap: Array<[string, string]>,
        nodeCountList: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint.AsObject>,
        cpuUsageAvgList: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint.AsObject>,
        cpuUsageMaxList: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint.AsObject>,
        memoryUsageAvgList: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint.AsObject>,
        memoryUsageMaxList: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint.AsObject>,
    }
}

export class QueryNodePoolMetricsRequest extends jspb.Message { 

    hasSpan(): boolean;
    clearSpan(): void;
    getSpan(): sandboxes_api_v1_common_pb.TimeSeriesSpan | undefined;
    setSpan(value?: sandboxes_api_v1_common_pb.TimeSeriesSpan): QueryNodePoolMetricsRequest;
    clearFilterByNamesList(): void;
    getFilterByNamesList(): Array<string>;
    setFilterByNamesList(value: Array<string>): QueryNodePoolMetricsRequest;
    addFilterByNames(value: string, index?: number): string;
    clearFilterByRegionsList(): void;
    getFilterByRegionsList(): Array<string>;
    setFilterByRegionsList(value: Array<string>): QueryNodePoolMetricsRequest;
    addFilterByRegions(value: string, index?: number): string;
    getIncludeNodeCount(): boolean;
    setIncludeNodeCount(value: boolean): QueryNodePoolMetricsRequest;
    getIncludeCpu(): boolean;
    setIncludeCpu(value: boolean): QueryNodePoolMetricsRequest;
    getIncludeMemory(): boolean;
    setIncludeMemory(value: boolean): QueryNodePoolMetricsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryNodePoolMetricsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryNodePoolMetricsRequest): QueryNodePoolMetricsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryNodePoolMetricsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryNodePoolMetricsRequest;
    static deserializeBinaryFromReader(message: QueryNodePoolMetricsRequest, reader: jspb.BinaryReader): QueryNodePoolMetricsRequest;
}

export namespace QueryNodePoolMetricsRequest {
    export type AsObject = {
        span?: sandboxes_api_v1_common_pb.TimeSeriesSpan.AsObject,
        filterByNamesList: Array<string>,
        filterByRegionsList: Array<string>,
        includeNodeCount: boolean,
        includeCpu: boolean,
        includeMemory: boolean,
    }
}

export class QueryNodePoolMetricsResponse extends jspb.Message { 
    clearNodePoolsList(): void;
    getNodePoolsList(): Array<NodePoolMetrics>;
    setNodePoolsList(value: Array<NodePoolMetrics>): QueryNodePoolMetricsResponse;
    addNodePools(value?: NodePoolMetrics, index?: number): NodePoolMetrics;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryNodePoolMetricsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryNodePoolMetricsResponse): QueryNodePoolMetricsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryNodePoolMetricsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryNodePoolMetricsResponse;
    static deserializeBinaryFromReader(message: QueryNodePoolMetricsResponse, reader: jspb.BinaryReader): QueryNodePoolMetricsResponse;
}

export namespace QueryNodePoolMetricsResponse {
    export type AsObject = {
        nodePoolsList: Array<NodePoolMetrics.AsObject>,
    }
}

export class WorkloadMetrics extends jspb.Message { 
    getOrg(): string;
    setOrg(value: string): WorkloadMetrics;
    getSandbox(): string;
    setSandbox(value: string): WorkloadMetrics;
    getWorkload(): string;
    setWorkload(value: string): WorkloadMetrics;
    getRegion(): string;
    setRegion(value: string): WorkloadMetrics;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    clearCpuUsageList(): void;
    getCpuUsageList(): Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>;
    setCpuUsageList(value: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>): WorkloadMetrics;
    addCpuUsage(value?: sandboxes_api_v1_common_pb.TimeSeriesDataPoint, index?: number): sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
    clearMemoryCapMbList(): void;
    getMemoryCapMbList(): Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>;
    setMemoryCapMbList(value: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>): WorkloadMetrics;
    addMemoryCapMb(value?: sandboxes_api_v1_common_pb.TimeSeriesDataPoint, index?: number): sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
    clearMemoryUsedMbList(): void;
    getMemoryUsedMbList(): Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>;
    setMemoryUsedMbList(value: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>): WorkloadMetrics;
    addMemoryUsedMb(value?: sandboxes_api_v1_common_pb.TimeSeriesDataPoint, index?: number): sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
    clearMemoryUsageList(): void;
    getMemoryUsageList(): Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>;
    setMemoryUsageList(value: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>): WorkloadMetrics;
    addMemoryUsage(value?: sandboxes_api_v1_common_pb.TimeSeriesDataPoint, index?: number): sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
    clearSwapUsedMbList(): void;
    getSwapUsedMbList(): Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>;
    setSwapUsedMbList(value: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>): WorkloadMetrics;
    addSwapUsedMb(value?: sandboxes_api_v1_common_pb.TimeSeriesDataPoint, index?: number): sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
    clearSwapUsageHostList(): void;
    getSwapUsageHostList(): Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>;
    setSwapUsageHostList(value: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>): WorkloadMetrics;
    addSwapUsageHost(value?: sandboxes_api_v1_common_pb.TimeSeriesDataPoint, index?: number): sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
    clearStorageBlocksTotalList(): void;
    getStorageBlocksTotalList(): Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>;
    setStorageBlocksTotalList(value: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>): WorkloadMetrics;
    addStorageBlocksTotal(value?: sandboxes_api_v1_common_pb.TimeSeriesDataPoint, index?: number): sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
    clearStorageBlocksUsedList(): void;
    getStorageBlocksUsedList(): Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>;
    setStorageBlocksUsedList(value: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>): WorkloadMetrics;
    addStorageBlocksUsed(value?: sandboxes_api_v1_common_pb.TimeSeriesDataPoint, index?: number): sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
    clearStorageBlocksUsageList(): void;
    getStorageBlocksUsageList(): Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>;
    setStorageBlocksUsageList(value: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>): WorkloadMetrics;
    addStorageBlocksUsage(value?: sandboxes_api_v1_common_pb.TimeSeriesDataPoint, index?: number): sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
    clearStorageInodesTotalList(): void;
    getStorageInodesTotalList(): Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>;
    setStorageInodesTotalList(value: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>): WorkloadMetrics;
    addStorageInodesTotal(value?: sandboxes_api_v1_common_pb.TimeSeriesDataPoint, index?: number): sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
    clearStorageInodesUsedList(): void;
    getStorageInodesUsedList(): Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>;
    setStorageInodesUsedList(value: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>): WorkloadMetrics;
    addStorageInodesUsed(value?: sandboxes_api_v1_common_pb.TimeSeriesDataPoint, index?: number): sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
    clearStorageInodesUsageList(): void;
    getStorageInodesUsageList(): Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>;
    setStorageInodesUsageList(value: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint>): WorkloadMetrics;
    addStorageInodesUsage(value?: sandboxes_api_v1_common_pb.TimeSeriesDataPoint, index?: number): sandboxes_api_v1_common_pb.TimeSeriesDataPoint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorkloadMetrics.AsObject;
    static toObject(includeInstance: boolean, msg: WorkloadMetrics): WorkloadMetrics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorkloadMetrics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorkloadMetrics;
    static deserializeBinaryFromReader(message: WorkloadMetrics, reader: jspb.BinaryReader): WorkloadMetrics;
}

export namespace WorkloadMetrics {
    export type AsObject = {
        org: string,
        sandbox: string,
        workload: string,
        region: string,

        labelsMap: Array<[string, string]>,
        cpuUsageList: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint.AsObject>,
        memoryCapMbList: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint.AsObject>,
        memoryUsedMbList: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint.AsObject>,
        memoryUsageList: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint.AsObject>,
        swapUsedMbList: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint.AsObject>,
        swapUsageHostList: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint.AsObject>,
        storageBlocksTotalList: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint.AsObject>,
        storageBlocksUsedList: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint.AsObject>,
        storageBlocksUsageList: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint.AsObject>,
        storageInodesTotalList: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint.AsObject>,
        storageInodesUsedList: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint.AsObject>,
        storageInodesUsageList: Array<sandboxes_api_v1_common_pb.TimeSeriesDataPoint.AsObject>,
    }
}

export class QueryWorkloadMetricsRequest extends jspb.Message { 

    hasSpan(): boolean;
    clearSpan(): void;
    getSpan(): sandboxes_api_v1_common_pb.TimeSeriesSpan | undefined;
    setSpan(value?: sandboxes_api_v1_common_pb.TimeSeriesSpan): QueryWorkloadMetricsRequest;
    clearWorkloadsList(): void;
    getWorkloadsList(): Array<QueryWorkloadMetricsRequest.WorkloadFilter>;
    setWorkloadsList(value: Array<QueryWorkloadMetricsRequest.WorkloadFilter>): QueryWorkloadMetricsRequest;
    addWorkloads(value?: QueryWorkloadMetricsRequest.WorkloadFilter, index?: number): QueryWorkloadMetricsRequest.WorkloadFilter;
    getIncludeCpu(): boolean;
    setIncludeCpu(value: boolean): QueryWorkloadMetricsRequest;
    getIncludeMemory(): boolean;
    setIncludeMemory(value: boolean): QueryWorkloadMetricsRequest;
    getIncludeStorage(): boolean;
    setIncludeStorage(value: boolean): QueryWorkloadMetricsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryWorkloadMetricsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryWorkloadMetricsRequest): QueryWorkloadMetricsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryWorkloadMetricsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryWorkloadMetricsRequest;
    static deserializeBinaryFromReader(message: QueryWorkloadMetricsRequest, reader: jspb.BinaryReader): QueryWorkloadMetricsRequest;
}

export namespace QueryWorkloadMetricsRequest {
    export type AsObject = {
        span?: sandboxes_api_v1_common_pb.TimeSeriesSpan.AsObject,
        workloadsList: Array<QueryWorkloadMetricsRequest.WorkloadFilter.AsObject>,
        includeCpu: boolean,
        includeMemory: boolean,
        includeStorage: boolean,
    }


    export class WorkloadFilter extends jspb.Message { 
        getRegion(): string;
        setRegion(value: string): WorkloadFilter;
        getOrgId(): string;
        setOrgId(value: string): WorkloadFilter;
        getSandboxId(): string;
        setSandboxId(value: string): WorkloadFilter;
        getWorkload(): string;
        setWorkload(value: string): WorkloadFilter;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): WorkloadFilter.AsObject;
        static toObject(includeInstance: boolean, msg: WorkloadFilter): WorkloadFilter.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: WorkloadFilter, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): WorkloadFilter;
        static deserializeBinaryFromReader(message: WorkloadFilter, reader: jspb.BinaryReader): WorkloadFilter;
    }

    export namespace WorkloadFilter {
        export type AsObject = {
            region: string,
            orgId: string,
            sandboxId: string,
            workload: string,
        }
    }

}

export class QueryWorkloadMetricsResponse extends jspb.Message { 
    clearWorkloadsList(): void;
    getWorkloadsList(): Array<WorkloadMetrics>;
    setWorkloadsList(value: Array<WorkloadMetrics>): QueryWorkloadMetricsResponse;
    addWorkloads(value?: WorkloadMetrics, index?: number): WorkloadMetrics;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryWorkloadMetricsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryWorkloadMetricsResponse): QueryWorkloadMetricsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryWorkloadMetricsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryWorkloadMetricsResponse;
    static deserializeBinaryFromReader(message: QueryWorkloadMetricsResponse, reader: jspb.BinaryReader): QueryWorkloadMetricsResponse;
}

export namespace QueryWorkloadMetricsResponse {
    export type AsObject = {
        workloadsList: Array<WorkloadMetrics.AsObject>,
    }
}

export class NodeStatus extends jspb.Message { 
    getName(): string;
    setName(value: string): NodeStatus;
    getNodePool(): string;
    setNodePool(value: string): NodeStatus;
    getRegion(): string;
    setRegion(value: string): NodeStatus;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): sandboxes_api_v1_common_pb.RuntimeStatus | undefined;
    setStatus(value?: sandboxes_api_v1_common_pb.RuntimeStatus): NodeStatus;
    getCpuCores(): number;
    setCpuCores(value: number): NodeStatus;
    getLoadavg(): number;
    setLoadavg(value: number): NodeStatus;
    getCpuUsage(): number;
    setCpuUsage(value: number): NodeStatus;
    getMemoryTotalMb(): number;
    setMemoryTotalMb(value: number): NodeStatus;
    getMemoryUsedMb(): number;
    setMemoryUsedMb(value: number): NodeStatus;
    getMemoryCapacityMb(): number;
    setMemoryCapacityMb(value: number): NodeStatus;
    getBufferCacheMb(): number;
    setBufferCacheMb(value: number): NodeStatus;
    getSwapTotalGb(): number;
    setSwapTotalGb(value: number): NodeStatus;
    getSwapUsedGb(): number;
    setSwapUsedGb(value: number): NodeStatus;
    getBootDiskSizeGb(): number;
    setBootDiskSizeGb(value: number): NodeStatus;
    getBootDiskUsedGb(): number;
    setBootDiskUsedGb(value: number): NodeStatus;
    getWorkloadsLimit(): number;
    setWorkloadsLimit(value: number): NodeStatus;
    getVolumesLimit(): number;
    setVolumesLimit(value: number): NodeStatus;
    clearWorkloadsList(): void;
    getWorkloadsList(): Array<NodeStatus.Workload>;
    setWorkloadsList(value: Array<NodeStatus.Workload>): NodeStatus;
    addWorkloads(value?: NodeStatus.Workload, index?: number): NodeStatus.Workload;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodeStatus.AsObject;
    static toObject(includeInstance: boolean, msg: NodeStatus): NodeStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NodeStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodeStatus;
    static deserializeBinaryFromReader(message: NodeStatus, reader: jspb.BinaryReader): NodeStatus;
}

export namespace NodeStatus {
    export type AsObject = {
        name: string,
        nodePool: string,
        region: string,
        status?: sandboxes_api_v1_common_pb.RuntimeStatus.AsObject,
        cpuCores: number,
        loadavg: number,
        cpuUsage: number,
        memoryTotalMb: number,
        memoryUsedMb: number,
        memoryCapacityMb: number,
        bufferCacheMb: number,
        swapTotalGb: number,
        swapUsedGb: number,
        bootDiskSizeGb: number,
        bootDiskUsedGb: number,
        workloadsLimit: number,
        volumesLimit: number,
        workloadsList: Array<NodeStatus.Workload.AsObject>,
    }


    export class Workload extends jspb.Message { 
        getOrg(): string;
        setOrg(value: string): Workload;
        getSandboxId(): string;
        setSandboxId(value: string): Workload;
        getSandboxName(): string;
        setSandboxName(value: string): Workload;
        getName(): string;
        setName(value: string): Workload;
        getPid(): number;
        setPid(value: number): Workload;

        hasOperationalState(): boolean;
        clearOperationalState(): void;
        getOperationalState(): sandboxes_api_v1_sandbox_pb.Sandbox.OperationalState | undefined;
        setOperationalState(value?: sandboxes_api_v1_sandbox_pb.Sandbox.OperationalState): Workload;
        getCpuUsage(): number;
        setCpuUsage(value: number): Workload;
        getMemoryCapMb(): number;
        setMemoryCapMb(value: number): Workload;
        getMemoryUsedMb(): number;
        setMemoryUsedMb(value: number): Workload;
        getSwapUsedMb(): number;
        setSwapUsedMb(value: number): Workload;
        getStorageCapacityGb(): number;
        setStorageCapacityGb(value: number): Workload;
        getStorageUsedGb(): number;
        setStorageUsedGb(value: number): Workload;
        getStorageInodesUsage(): number;
        setStorageInodesUsage(value: number): Workload;

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
            org: string,
            sandboxId: string,
            sandboxName: string,
            name: string,
            pid: number,
            operationalState?: sandboxes_api_v1_sandbox_pb.Sandbox.OperationalState.AsObject,
            cpuUsage: number,
            memoryCapMb: number,
            memoryUsedMb: number,
            swapUsedMb: number,
            storageCapacityGb: number,
            storageUsedGb: number,
            storageInodesUsage: number,
        }
    }

}

export class QueryNodeStatusRequest extends jspb.Message { 
    clearFilterByNamesList(): void;
    getFilterByNamesList(): Array<string>;
    setFilterByNamesList(value: Array<string>): QueryNodeStatusRequest;
    addFilterByNames(value: string, index?: number): string;
    clearFilterByNodePoolsList(): void;
    getFilterByNodePoolsList(): Array<string>;
    setFilterByNodePoolsList(value: Array<string>): QueryNodeStatusRequest;
    addFilterByNodePools(value: string, index?: number): string;
    clearFilterByRegionsList(): void;
    getFilterByRegionsList(): Array<string>;
    setFilterByRegionsList(value: Array<string>): QueryNodeStatusRequest;
    addFilterByRegions(value: string, index?: number): string;
    getIncludeWorkloads(): boolean;
    setIncludeWorkloads(value: boolean): QueryNodeStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryNodeStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryNodeStatusRequest): QueryNodeStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryNodeStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryNodeStatusRequest;
    static deserializeBinaryFromReader(message: QueryNodeStatusRequest, reader: jspb.BinaryReader): QueryNodeStatusRequest;
}

export namespace QueryNodeStatusRequest {
    export type AsObject = {
        filterByNamesList: Array<string>,
        filterByNodePoolsList: Array<string>,
        filterByRegionsList: Array<string>,
        includeWorkloads: boolean,
    }
}

export class QueryNodeStatusResponse extends jspb.Message { 
    clearNodesList(): void;
    getNodesList(): Array<NodeStatus>;
    setNodesList(value: Array<NodeStatus>): QueryNodeStatusResponse;
    addNodes(value?: NodeStatus, index?: number): NodeStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryNodeStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryNodeStatusResponse): QueryNodeStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryNodeStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryNodeStatusResponse;
    static deserializeBinaryFromReader(message: QueryNodeStatusResponse, reader: jspb.BinaryReader): QueryNodeStatusResponse;
}

export namespace QueryNodeStatusResponse {
    export type AsObject = {
        nodesList: Array<NodeStatus.AsObject>,
    }
}
