// package: sandboxes.api.v1
// file: sandboxes/api/v1/systemadminservice.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as sandboxes_api_v1_systemadminservice_pb from "../../../sandboxes/api/v1/systemadminservice_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as sandboxes_api_v1_common_pb from "../../../sandboxes/api/v1/common_pb";
import * as sandboxes_api_v1_sandbox_pb from "../../../sandboxes/api/v1/sandbox_pb";
import * as sandboxes_api_v1_org_pb from "../../../sandboxes/api/v1/org_pb";
import * as sandboxes_api_v1_user_pb from "../../../sandboxes/api/v1/user_pb";
import * as sandboxes_api_v1_resource_pb from "../../../sandboxes/api/v1/resource_pb";
import * as sandboxes_api_v1_resource_system_pb from "../../../sandboxes/api/v1/resource_system_pb";
import * as sandboxes_api_v1_resource_nodepool_pb from "../../../sandboxes/api/v1/resource_nodepool_pb";
import * as sandboxes_api_v1_systeminfra_pb from "../../../sandboxes/api/v1/systeminfra_pb";

interface ISystemAdminServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    encode: ISystemAdminServiceService_IEncode;
    decode: ISystemAdminServiceService_IDecode;
    querySystem: ISystemAdminServiceService_IQuerySystem;
    updateSystem: ISystemAdminServiceService_IUpdateSystem;
    listSystemAlerts: ISystemAdminServiceService_IListSystemAlerts;
    queryInfra: ISystemAdminServiceService_IQueryInfra;
    infraAction: ISystemAdminServiceService_IInfraAction;
    queryNodeMetrics: ISystemAdminServiceService_IQueryNodeMetrics;
    queryNodePoolMetrics: ISystemAdminServiceService_IQueryNodePoolMetrics;
    queryWorkloadMetrics: ISystemAdminServiceService_IQueryWorkloadMetrics;
    queryNodeStatus: ISystemAdminServiceService_IQueryNodeStatus;
    listK8sNodePools: ISystemAdminServiceService_IListK8sNodePools;
    createK8sNodePool: ISystemAdminServiceService_ICreateK8sNodePool;
    updateK8sNodePool: ISystemAdminServiceService_IUpdateK8sNodePool;
    previewK8sNodePoolUpdate: ISystemAdminServiceService_IPreviewK8sNodePoolUpdate;
    deleteK8sNodePool: ISystemAdminServiceService_IDeleteK8sNodePool;
}

interface ISystemAdminServiceService_IEncode extends grpc.MethodDefinition<sandboxes_api_v1_systemadminservice_pb.EncodeRequest, sandboxes_api_v1_systemadminservice_pb.EncodeResponse> {
    path: "/sandboxes.api.v1.SystemAdminService/Encode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.EncodeRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.EncodeRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.EncodeResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.EncodeResponse>;
}
interface ISystemAdminServiceService_IDecode extends grpc.MethodDefinition<sandboxes_api_v1_systemadminservice_pb.DecodeRequest, sandboxes_api_v1_systemadminservice_pb.DecodeResponse> {
    path: "/sandboxes.api.v1.SystemAdminService/Decode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.DecodeRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.DecodeRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.DecodeResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.DecodeResponse>;
}
interface ISystemAdminServiceService_IQuerySystem extends grpc.MethodDefinition<sandboxes_api_v1_systemadminservice_pb.QuerySystemRequest, sandboxes_api_v1_systemadminservice_pb.QuerySystemResponse> {
    path: "/sandboxes.api.v1.SystemAdminService/QuerySystem";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.QuerySystemRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.QuerySystemRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.QuerySystemResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.QuerySystemResponse>;
}
interface ISystemAdminServiceService_IUpdateSystem extends grpc.MethodDefinition<sandboxes_api_v1_systemadminservice_pb.UpdateSystemRequest, sandboxes_api_v1_systemadminservice_pb.UpdateSystemResponse> {
    path: "/sandboxes.api.v1.SystemAdminService/UpdateSystem";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.UpdateSystemRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.UpdateSystemRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.UpdateSystemResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.UpdateSystemResponse>;
}
interface ISystemAdminServiceService_IListSystemAlerts extends grpc.MethodDefinition<sandboxes_api_v1_systemadminservice_pb.ListSystemAlertsRequest, sandboxes_api_v1_systemadminservice_pb.ListSystemAlertsResponse> {
    path: "/sandboxes.api.v1.SystemAdminService/ListSystemAlerts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.ListSystemAlertsRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.ListSystemAlertsRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.ListSystemAlertsResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.ListSystemAlertsResponse>;
}
interface ISystemAdminServiceService_IQueryInfra extends grpc.MethodDefinition<sandboxes_api_v1_systemadminservice_pb.QueryInfraRequest, sandboxes_api_v1_systemadminservice_pb.QueryInfraResponse> {
    path: "/sandboxes.api.v1.SystemAdminService/QueryInfra";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.QueryInfraRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.QueryInfraRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.QueryInfraResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.QueryInfraResponse>;
}
interface ISystemAdminServiceService_IInfraAction extends grpc.MethodDefinition<sandboxes_api_v1_systemadminservice_pb.InfraActionRequest, sandboxes_api_v1_systemadminservice_pb.InfraActionResponse> {
    path: "/sandboxes.api.v1.SystemAdminService/InfraAction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.InfraActionRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.InfraActionRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.InfraActionResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.InfraActionResponse>;
}
interface ISystemAdminServiceService_IQueryNodeMetrics extends grpc.MethodDefinition<sandboxes_api_v1_systemadminservice_pb.QueryNodeMetricsRequest, sandboxes_api_v1_systemadminservice_pb.QueryNodeMetricsResponse> {
    path: "/sandboxes.api.v1.SystemAdminService/QueryNodeMetrics";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.QueryNodeMetricsRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.QueryNodeMetricsRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.QueryNodeMetricsResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.QueryNodeMetricsResponse>;
}
interface ISystemAdminServiceService_IQueryNodePoolMetrics extends grpc.MethodDefinition<sandboxes_api_v1_systemadminservice_pb.QueryNodePoolMetricsRequest, sandboxes_api_v1_systemadminservice_pb.QueryNodePoolMetricsResponse> {
    path: "/sandboxes.api.v1.SystemAdminService/QueryNodePoolMetrics";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.QueryNodePoolMetricsRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.QueryNodePoolMetricsRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.QueryNodePoolMetricsResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.QueryNodePoolMetricsResponse>;
}
interface ISystemAdminServiceService_IQueryWorkloadMetrics extends grpc.MethodDefinition<sandboxes_api_v1_systemadminservice_pb.QueryWorkloadMetricsRequest, sandboxes_api_v1_systemadminservice_pb.QueryWorkloadMetricsResponse> {
    path: "/sandboxes.api.v1.SystemAdminService/QueryWorkloadMetrics";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.QueryWorkloadMetricsRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.QueryWorkloadMetricsRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.QueryWorkloadMetricsResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.QueryWorkloadMetricsResponse>;
}
interface ISystemAdminServiceService_IQueryNodeStatus extends grpc.MethodDefinition<sandboxes_api_v1_systemadminservice_pb.QueryNodeStatusRequest, sandboxes_api_v1_systemadminservice_pb.QueryNodeStatusResponse> {
    path: "/sandboxes.api.v1.SystemAdminService/QueryNodeStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.QueryNodeStatusRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.QueryNodeStatusRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.QueryNodeStatusResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.QueryNodeStatusResponse>;
}
interface ISystemAdminServiceService_IListK8sNodePools extends grpc.MethodDefinition<sandboxes_api_v1_systemadminservice_pb.ListK8sNodePoolsRequest, sandboxes_api_v1_systemadminservice_pb.ListK8sNodePoolsResponse> {
    path: "/sandboxes.api.v1.SystemAdminService/ListK8sNodePools";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.ListK8sNodePoolsRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.ListK8sNodePoolsRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.ListK8sNodePoolsResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.ListK8sNodePoolsResponse>;
}
interface ISystemAdminServiceService_ICreateK8sNodePool extends grpc.MethodDefinition<sandboxes_api_v1_systemadminservice_pb.CreateK8sNodePoolRequest, sandboxes_api_v1_systemadminservice_pb.CreateK8sNodePoolResponse> {
    path: "/sandboxes.api.v1.SystemAdminService/CreateK8sNodePool";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.CreateK8sNodePoolRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.CreateK8sNodePoolRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.CreateK8sNodePoolResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.CreateK8sNodePoolResponse>;
}
interface ISystemAdminServiceService_IUpdateK8sNodePool extends grpc.MethodDefinition<sandboxes_api_v1_systemadminservice_pb.UpdateK8sNodePoolRequest, sandboxes_api_v1_systemadminservice_pb.UpdateK8sNodePoolResponse> {
    path: "/sandboxes.api.v1.SystemAdminService/UpdateK8sNodePool";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.UpdateK8sNodePoolRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.UpdateK8sNodePoolRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.UpdateK8sNodePoolResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.UpdateK8sNodePoolResponse>;
}
interface ISystemAdminServiceService_IPreviewK8sNodePoolUpdate extends grpc.MethodDefinition<sandboxes_api_v1_systemadminservice_pb.PreviewK8sNodePoolUpdateRequest, sandboxes_api_v1_systemadminservice_pb.PreviewK8sNodePoolUpdateResponse> {
    path: "/sandboxes.api.v1.SystemAdminService/PreviewK8sNodePoolUpdate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.PreviewK8sNodePoolUpdateRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.PreviewK8sNodePoolUpdateRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.PreviewK8sNodePoolUpdateResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.PreviewK8sNodePoolUpdateResponse>;
}
interface ISystemAdminServiceService_IDeleteK8sNodePool extends grpc.MethodDefinition<sandboxes_api_v1_systemadminservice_pb.DeleteK8sNodePoolRequest, sandboxes_api_v1_systemadminservice_pb.DeleteK8sNodePoolResponse> {
    path: "/sandboxes.api.v1.SystemAdminService/DeleteK8sNodePool";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.DeleteK8sNodePoolRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.DeleteK8sNodePoolRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_systemadminservice_pb.DeleteK8sNodePoolResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_systemadminservice_pb.DeleteK8sNodePoolResponse>;
}

export const SystemAdminServiceService: ISystemAdminServiceService;

export interface ISystemAdminServiceServer extends grpc.UntypedServiceImplementation {
    encode: grpc.handleUnaryCall<sandboxes_api_v1_systemadminservice_pb.EncodeRequest, sandboxes_api_v1_systemadminservice_pb.EncodeResponse>;
    decode: grpc.handleUnaryCall<sandboxes_api_v1_systemadminservice_pb.DecodeRequest, sandboxes_api_v1_systemadminservice_pb.DecodeResponse>;
    querySystem: grpc.handleUnaryCall<sandboxes_api_v1_systemadminservice_pb.QuerySystemRequest, sandboxes_api_v1_systemadminservice_pb.QuerySystemResponse>;
    updateSystem: grpc.handleUnaryCall<sandboxes_api_v1_systemadminservice_pb.UpdateSystemRequest, sandboxes_api_v1_systemadminservice_pb.UpdateSystemResponse>;
    listSystemAlerts: grpc.handleUnaryCall<sandboxes_api_v1_systemadminservice_pb.ListSystemAlertsRequest, sandboxes_api_v1_systemadminservice_pb.ListSystemAlertsResponse>;
    queryInfra: grpc.handleUnaryCall<sandboxes_api_v1_systemadminservice_pb.QueryInfraRequest, sandboxes_api_v1_systemadminservice_pb.QueryInfraResponse>;
    infraAction: grpc.handleUnaryCall<sandboxes_api_v1_systemadminservice_pb.InfraActionRequest, sandboxes_api_v1_systemadminservice_pb.InfraActionResponse>;
    queryNodeMetrics: grpc.handleUnaryCall<sandboxes_api_v1_systemadminservice_pb.QueryNodeMetricsRequest, sandboxes_api_v1_systemadminservice_pb.QueryNodeMetricsResponse>;
    queryNodePoolMetrics: grpc.handleUnaryCall<sandboxes_api_v1_systemadminservice_pb.QueryNodePoolMetricsRequest, sandboxes_api_v1_systemadminservice_pb.QueryNodePoolMetricsResponse>;
    queryWorkloadMetrics: grpc.handleUnaryCall<sandboxes_api_v1_systemadminservice_pb.QueryWorkloadMetricsRequest, sandboxes_api_v1_systemadminservice_pb.QueryWorkloadMetricsResponse>;
    queryNodeStatus: grpc.handleUnaryCall<sandboxes_api_v1_systemadminservice_pb.QueryNodeStatusRequest, sandboxes_api_v1_systemadminservice_pb.QueryNodeStatusResponse>;
    listK8sNodePools: grpc.handleUnaryCall<sandboxes_api_v1_systemadminservice_pb.ListK8sNodePoolsRequest, sandboxes_api_v1_systemadminservice_pb.ListK8sNodePoolsResponse>;
    createK8sNodePool: grpc.handleUnaryCall<sandboxes_api_v1_systemadminservice_pb.CreateK8sNodePoolRequest, sandboxes_api_v1_systemadminservice_pb.CreateK8sNodePoolResponse>;
    updateK8sNodePool: grpc.handleUnaryCall<sandboxes_api_v1_systemadminservice_pb.UpdateK8sNodePoolRequest, sandboxes_api_v1_systemadminservice_pb.UpdateK8sNodePoolResponse>;
    previewK8sNodePoolUpdate: grpc.handleUnaryCall<sandboxes_api_v1_systemadminservice_pb.PreviewK8sNodePoolUpdateRequest, sandboxes_api_v1_systemadminservice_pb.PreviewK8sNodePoolUpdateResponse>;
    deleteK8sNodePool: grpc.handleUnaryCall<sandboxes_api_v1_systemadminservice_pb.DeleteK8sNodePoolRequest, sandboxes_api_v1_systemadminservice_pb.DeleteK8sNodePoolResponse>;
}

export interface ISystemAdminServiceClient {
    encode(request: sandboxes_api_v1_systemadminservice_pb.EncodeRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.EncodeResponse) => void): grpc.ClientUnaryCall;
    encode(request: sandboxes_api_v1_systemadminservice_pb.EncodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.EncodeResponse) => void): grpc.ClientUnaryCall;
    encode(request: sandboxes_api_v1_systemadminservice_pb.EncodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.EncodeResponse) => void): grpc.ClientUnaryCall;
    decode(request: sandboxes_api_v1_systemadminservice_pb.DecodeRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.DecodeResponse) => void): grpc.ClientUnaryCall;
    decode(request: sandboxes_api_v1_systemadminservice_pb.DecodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.DecodeResponse) => void): grpc.ClientUnaryCall;
    decode(request: sandboxes_api_v1_systemadminservice_pb.DecodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.DecodeResponse) => void): grpc.ClientUnaryCall;
    querySystem(request: sandboxes_api_v1_systemadminservice_pb.QuerySystemRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QuerySystemResponse) => void): grpc.ClientUnaryCall;
    querySystem(request: sandboxes_api_v1_systemadminservice_pb.QuerySystemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QuerySystemResponse) => void): grpc.ClientUnaryCall;
    querySystem(request: sandboxes_api_v1_systemadminservice_pb.QuerySystemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QuerySystemResponse) => void): grpc.ClientUnaryCall;
    updateSystem(request: sandboxes_api_v1_systemadminservice_pb.UpdateSystemRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.UpdateSystemResponse) => void): grpc.ClientUnaryCall;
    updateSystem(request: sandboxes_api_v1_systemadminservice_pb.UpdateSystemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.UpdateSystemResponse) => void): grpc.ClientUnaryCall;
    updateSystem(request: sandboxes_api_v1_systemadminservice_pb.UpdateSystemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.UpdateSystemResponse) => void): grpc.ClientUnaryCall;
    listSystemAlerts(request: sandboxes_api_v1_systemadminservice_pb.ListSystemAlertsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.ListSystemAlertsResponse) => void): grpc.ClientUnaryCall;
    listSystemAlerts(request: sandboxes_api_v1_systemadminservice_pb.ListSystemAlertsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.ListSystemAlertsResponse) => void): grpc.ClientUnaryCall;
    listSystemAlerts(request: sandboxes_api_v1_systemadminservice_pb.ListSystemAlertsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.ListSystemAlertsResponse) => void): grpc.ClientUnaryCall;
    queryInfra(request: sandboxes_api_v1_systemadminservice_pb.QueryInfraRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryInfraResponse) => void): grpc.ClientUnaryCall;
    queryInfra(request: sandboxes_api_v1_systemadminservice_pb.QueryInfraRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryInfraResponse) => void): grpc.ClientUnaryCall;
    queryInfra(request: sandboxes_api_v1_systemadminservice_pb.QueryInfraRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryInfraResponse) => void): grpc.ClientUnaryCall;
    infraAction(request: sandboxes_api_v1_systemadminservice_pb.InfraActionRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.InfraActionResponse) => void): grpc.ClientUnaryCall;
    infraAction(request: sandboxes_api_v1_systemadminservice_pb.InfraActionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.InfraActionResponse) => void): grpc.ClientUnaryCall;
    infraAction(request: sandboxes_api_v1_systemadminservice_pb.InfraActionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.InfraActionResponse) => void): grpc.ClientUnaryCall;
    queryNodeMetrics(request: sandboxes_api_v1_systemadminservice_pb.QueryNodeMetricsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryNodeMetricsResponse) => void): grpc.ClientUnaryCall;
    queryNodeMetrics(request: sandboxes_api_v1_systemadminservice_pb.QueryNodeMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryNodeMetricsResponse) => void): grpc.ClientUnaryCall;
    queryNodeMetrics(request: sandboxes_api_v1_systemadminservice_pb.QueryNodeMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryNodeMetricsResponse) => void): grpc.ClientUnaryCall;
    queryNodePoolMetrics(request: sandboxes_api_v1_systemadminservice_pb.QueryNodePoolMetricsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryNodePoolMetricsResponse) => void): grpc.ClientUnaryCall;
    queryNodePoolMetrics(request: sandboxes_api_v1_systemadminservice_pb.QueryNodePoolMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryNodePoolMetricsResponse) => void): grpc.ClientUnaryCall;
    queryNodePoolMetrics(request: sandboxes_api_v1_systemadminservice_pb.QueryNodePoolMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryNodePoolMetricsResponse) => void): grpc.ClientUnaryCall;
    queryWorkloadMetrics(request: sandboxes_api_v1_systemadminservice_pb.QueryWorkloadMetricsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryWorkloadMetricsResponse) => void): grpc.ClientUnaryCall;
    queryWorkloadMetrics(request: sandboxes_api_v1_systemadminservice_pb.QueryWorkloadMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryWorkloadMetricsResponse) => void): grpc.ClientUnaryCall;
    queryWorkloadMetrics(request: sandboxes_api_v1_systemadminservice_pb.QueryWorkloadMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryWorkloadMetricsResponse) => void): grpc.ClientUnaryCall;
    queryNodeStatus(request: sandboxes_api_v1_systemadminservice_pb.QueryNodeStatusRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryNodeStatusResponse) => void): grpc.ClientUnaryCall;
    queryNodeStatus(request: sandboxes_api_v1_systemadminservice_pb.QueryNodeStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryNodeStatusResponse) => void): grpc.ClientUnaryCall;
    queryNodeStatus(request: sandboxes_api_v1_systemadminservice_pb.QueryNodeStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryNodeStatusResponse) => void): grpc.ClientUnaryCall;
    listK8sNodePools(request: sandboxes_api_v1_systemadminservice_pb.ListK8sNodePoolsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.ListK8sNodePoolsResponse) => void): grpc.ClientUnaryCall;
    listK8sNodePools(request: sandboxes_api_v1_systemadminservice_pb.ListK8sNodePoolsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.ListK8sNodePoolsResponse) => void): grpc.ClientUnaryCall;
    listK8sNodePools(request: sandboxes_api_v1_systemadminservice_pb.ListK8sNodePoolsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.ListK8sNodePoolsResponse) => void): grpc.ClientUnaryCall;
    createK8sNodePool(request: sandboxes_api_v1_systemadminservice_pb.CreateK8sNodePoolRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.CreateK8sNodePoolResponse) => void): grpc.ClientUnaryCall;
    createK8sNodePool(request: sandboxes_api_v1_systemadminservice_pb.CreateK8sNodePoolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.CreateK8sNodePoolResponse) => void): grpc.ClientUnaryCall;
    createK8sNodePool(request: sandboxes_api_v1_systemadminservice_pb.CreateK8sNodePoolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.CreateK8sNodePoolResponse) => void): grpc.ClientUnaryCall;
    updateK8sNodePool(request: sandboxes_api_v1_systemadminservice_pb.UpdateK8sNodePoolRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.UpdateK8sNodePoolResponse) => void): grpc.ClientUnaryCall;
    updateK8sNodePool(request: sandboxes_api_v1_systemadminservice_pb.UpdateK8sNodePoolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.UpdateK8sNodePoolResponse) => void): grpc.ClientUnaryCall;
    updateK8sNodePool(request: sandboxes_api_v1_systemadminservice_pb.UpdateK8sNodePoolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.UpdateK8sNodePoolResponse) => void): grpc.ClientUnaryCall;
    previewK8sNodePoolUpdate(request: sandboxes_api_v1_systemadminservice_pb.PreviewK8sNodePoolUpdateRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.PreviewK8sNodePoolUpdateResponse) => void): grpc.ClientUnaryCall;
    previewK8sNodePoolUpdate(request: sandboxes_api_v1_systemadminservice_pb.PreviewK8sNodePoolUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.PreviewK8sNodePoolUpdateResponse) => void): grpc.ClientUnaryCall;
    previewK8sNodePoolUpdate(request: sandboxes_api_v1_systemadminservice_pb.PreviewK8sNodePoolUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.PreviewK8sNodePoolUpdateResponse) => void): grpc.ClientUnaryCall;
    deleteK8sNodePool(request: sandboxes_api_v1_systemadminservice_pb.DeleteK8sNodePoolRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.DeleteK8sNodePoolResponse) => void): grpc.ClientUnaryCall;
    deleteK8sNodePool(request: sandboxes_api_v1_systemadminservice_pb.DeleteK8sNodePoolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.DeleteK8sNodePoolResponse) => void): grpc.ClientUnaryCall;
    deleteK8sNodePool(request: sandboxes_api_v1_systemadminservice_pb.DeleteK8sNodePoolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.DeleteK8sNodePoolResponse) => void): grpc.ClientUnaryCall;
}

export class SystemAdminServiceClient extends grpc.Client implements ISystemAdminServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public encode(request: sandboxes_api_v1_systemadminservice_pb.EncodeRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.EncodeResponse) => void): grpc.ClientUnaryCall;
    public encode(request: sandboxes_api_v1_systemadminservice_pb.EncodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.EncodeResponse) => void): grpc.ClientUnaryCall;
    public encode(request: sandboxes_api_v1_systemadminservice_pb.EncodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.EncodeResponse) => void): grpc.ClientUnaryCall;
    public decode(request: sandboxes_api_v1_systemadminservice_pb.DecodeRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.DecodeResponse) => void): grpc.ClientUnaryCall;
    public decode(request: sandboxes_api_v1_systemadminservice_pb.DecodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.DecodeResponse) => void): grpc.ClientUnaryCall;
    public decode(request: sandboxes_api_v1_systemadminservice_pb.DecodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.DecodeResponse) => void): grpc.ClientUnaryCall;
    public querySystem(request: sandboxes_api_v1_systemadminservice_pb.QuerySystemRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QuerySystemResponse) => void): grpc.ClientUnaryCall;
    public querySystem(request: sandboxes_api_v1_systemadminservice_pb.QuerySystemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QuerySystemResponse) => void): grpc.ClientUnaryCall;
    public querySystem(request: sandboxes_api_v1_systemadminservice_pb.QuerySystemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QuerySystemResponse) => void): grpc.ClientUnaryCall;
    public updateSystem(request: sandboxes_api_v1_systemadminservice_pb.UpdateSystemRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.UpdateSystemResponse) => void): grpc.ClientUnaryCall;
    public updateSystem(request: sandboxes_api_v1_systemadminservice_pb.UpdateSystemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.UpdateSystemResponse) => void): grpc.ClientUnaryCall;
    public updateSystem(request: sandboxes_api_v1_systemadminservice_pb.UpdateSystemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.UpdateSystemResponse) => void): grpc.ClientUnaryCall;
    public listSystemAlerts(request: sandboxes_api_v1_systemadminservice_pb.ListSystemAlertsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.ListSystemAlertsResponse) => void): grpc.ClientUnaryCall;
    public listSystemAlerts(request: sandboxes_api_v1_systemadminservice_pb.ListSystemAlertsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.ListSystemAlertsResponse) => void): grpc.ClientUnaryCall;
    public listSystemAlerts(request: sandboxes_api_v1_systemadminservice_pb.ListSystemAlertsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.ListSystemAlertsResponse) => void): grpc.ClientUnaryCall;
    public queryInfra(request: sandboxes_api_v1_systemadminservice_pb.QueryInfraRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryInfraResponse) => void): grpc.ClientUnaryCall;
    public queryInfra(request: sandboxes_api_v1_systemadminservice_pb.QueryInfraRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryInfraResponse) => void): grpc.ClientUnaryCall;
    public queryInfra(request: sandboxes_api_v1_systemadminservice_pb.QueryInfraRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryInfraResponse) => void): grpc.ClientUnaryCall;
    public infraAction(request: sandboxes_api_v1_systemadminservice_pb.InfraActionRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.InfraActionResponse) => void): grpc.ClientUnaryCall;
    public infraAction(request: sandboxes_api_v1_systemadminservice_pb.InfraActionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.InfraActionResponse) => void): grpc.ClientUnaryCall;
    public infraAction(request: sandboxes_api_v1_systemadminservice_pb.InfraActionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.InfraActionResponse) => void): grpc.ClientUnaryCall;
    public queryNodeMetrics(request: sandboxes_api_v1_systemadminservice_pb.QueryNodeMetricsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryNodeMetricsResponse) => void): grpc.ClientUnaryCall;
    public queryNodeMetrics(request: sandboxes_api_v1_systemadminservice_pb.QueryNodeMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryNodeMetricsResponse) => void): grpc.ClientUnaryCall;
    public queryNodeMetrics(request: sandboxes_api_v1_systemadminservice_pb.QueryNodeMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryNodeMetricsResponse) => void): grpc.ClientUnaryCall;
    public queryNodePoolMetrics(request: sandboxes_api_v1_systemadminservice_pb.QueryNodePoolMetricsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryNodePoolMetricsResponse) => void): grpc.ClientUnaryCall;
    public queryNodePoolMetrics(request: sandboxes_api_v1_systemadminservice_pb.QueryNodePoolMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryNodePoolMetricsResponse) => void): grpc.ClientUnaryCall;
    public queryNodePoolMetrics(request: sandboxes_api_v1_systemadminservice_pb.QueryNodePoolMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryNodePoolMetricsResponse) => void): grpc.ClientUnaryCall;
    public queryWorkloadMetrics(request: sandboxes_api_v1_systemadminservice_pb.QueryWorkloadMetricsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryWorkloadMetricsResponse) => void): grpc.ClientUnaryCall;
    public queryWorkloadMetrics(request: sandboxes_api_v1_systemadminservice_pb.QueryWorkloadMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryWorkloadMetricsResponse) => void): grpc.ClientUnaryCall;
    public queryWorkloadMetrics(request: sandboxes_api_v1_systemadminservice_pb.QueryWorkloadMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryWorkloadMetricsResponse) => void): grpc.ClientUnaryCall;
    public queryNodeStatus(request: sandboxes_api_v1_systemadminservice_pb.QueryNodeStatusRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryNodeStatusResponse) => void): grpc.ClientUnaryCall;
    public queryNodeStatus(request: sandboxes_api_v1_systemadminservice_pb.QueryNodeStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryNodeStatusResponse) => void): grpc.ClientUnaryCall;
    public queryNodeStatus(request: sandboxes_api_v1_systemadminservice_pb.QueryNodeStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.QueryNodeStatusResponse) => void): grpc.ClientUnaryCall;
    public listK8sNodePools(request: sandboxes_api_v1_systemadminservice_pb.ListK8sNodePoolsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.ListK8sNodePoolsResponse) => void): grpc.ClientUnaryCall;
    public listK8sNodePools(request: sandboxes_api_v1_systemadminservice_pb.ListK8sNodePoolsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.ListK8sNodePoolsResponse) => void): grpc.ClientUnaryCall;
    public listK8sNodePools(request: sandboxes_api_v1_systemadminservice_pb.ListK8sNodePoolsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.ListK8sNodePoolsResponse) => void): grpc.ClientUnaryCall;
    public createK8sNodePool(request: sandboxes_api_v1_systemadminservice_pb.CreateK8sNodePoolRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.CreateK8sNodePoolResponse) => void): grpc.ClientUnaryCall;
    public createK8sNodePool(request: sandboxes_api_v1_systemadminservice_pb.CreateK8sNodePoolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.CreateK8sNodePoolResponse) => void): grpc.ClientUnaryCall;
    public createK8sNodePool(request: sandboxes_api_v1_systemadminservice_pb.CreateK8sNodePoolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.CreateK8sNodePoolResponse) => void): grpc.ClientUnaryCall;
    public updateK8sNodePool(request: sandboxes_api_v1_systemadminservice_pb.UpdateK8sNodePoolRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.UpdateK8sNodePoolResponse) => void): grpc.ClientUnaryCall;
    public updateK8sNodePool(request: sandboxes_api_v1_systemadminservice_pb.UpdateK8sNodePoolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.UpdateK8sNodePoolResponse) => void): grpc.ClientUnaryCall;
    public updateK8sNodePool(request: sandboxes_api_v1_systemadminservice_pb.UpdateK8sNodePoolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.UpdateK8sNodePoolResponse) => void): grpc.ClientUnaryCall;
    public previewK8sNodePoolUpdate(request: sandboxes_api_v1_systemadminservice_pb.PreviewK8sNodePoolUpdateRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.PreviewK8sNodePoolUpdateResponse) => void): grpc.ClientUnaryCall;
    public previewK8sNodePoolUpdate(request: sandboxes_api_v1_systemadminservice_pb.PreviewK8sNodePoolUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.PreviewK8sNodePoolUpdateResponse) => void): grpc.ClientUnaryCall;
    public previewK8sNodePoolUpdate(request: sandboxes_api_v1_systemadminservice_pb.PreviewK8sNodePoolUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.PreviewK8sNodePoolUpdateResponse) => void): grpc.ClientUnaryCall;
    public deleteK8sNodePool(request: sandboxes_api_v1_systemadminservice_pb.DeleteK8sNodePoolRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.DeleteK8sNodePoolResponse) => void): grpc.ClientUnaryCall;
    public deleteK8sNodePool(request: sandboxes_api_v1_systemadminservice_pb.DeleteK8sNodePoolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.DeleteK8sNodePoolResponse) => void): grpc.ClientUnaryCall;
    public deleteK8sNodePool(request: sandboxes_api_v1_systemadminservice_pb.DeleteK8sNodePoolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_systemadminservice_pb.DeleteK8sNodePoolResponse) => void): grpc.ClientUnaryCall;
}
