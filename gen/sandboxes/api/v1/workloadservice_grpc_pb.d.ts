// package: sandboxes.api.v1
// file: sandboxes/api/v1/workloadservice.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as sandboxes_api_v1_workloadservice_pb from "../../../sandboxes/api/v1/workloadservice_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as sandboxes_api_v1_workload_pb from "../../../sandboxes/api/v1/workload_pb";
import * as sandboxes_api_v1_resource_pb from "../../../sandboxes/api/v1/resource_pb";
import * as sandboxes_api_v1_resource_llmsession_pb from "../../../sandboxes/api/v1/resource_llmsession_pb";

interface IWorkloadServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    workloadAction: IWorkloadServiceService_IWorkloadAction;
    streamLog: IWorkloadServiceService_IStreamLog;
    injectTraffic: IWorkloadServiceService_IInjectTraffic;
}

interface IWorkloadServiceService_IWorkloadAction extends grpc.MethodDefinition<sandboxes_api_v1_workloadservice_pb.WorkloadActionRequest, sandboxes_api_v1_workloadservice_pb.WorkloadActionResponse> {
    path: "/sandboxes.api.v1.WorkloadService/WorkloadAction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_workloadservice_pb.WorkloadActionRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_workloadservice_pb.WorkloadActionRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_workloadservice_pb.WorkloadActionResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_workloadservice_pb.WorkloadActionResponse>;
}
interface IWorkloadServiceService_IStreamLog extends grpc.MethodDefinition<sandboxes_api_v1_workloadservice_pb.StreamLogRequest, sandboxes_api_v1_workloadservice_pb.StreamLogEvent> {
    path: "/sandboxes.api.v1.WorkloadService/StreamLog";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<sandboxes_api_v1_workloadservice_pb.StreamLogRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_workloadservice_pb.StreamLogRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_workloadservice_pb.StreamLogEvent>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_workloadservice_pb.StreamLogEvent>;
}
interface IWorkloadServiceService_IInjectTraffic extends grpc.MethodDefinition<sandboxes_api_v1_workloadservice_pb.TrafficInjection, sandboxes_api_v1_workload_pb.TrafficEventEntry> {
    path: "/sandboxes.api.v1.WorkloadService/InjectTraffic";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<sandboxes_api_v1_workloadservice_pb.TrafficInjection>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_workloadservice_pb.TrafficInjection>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_workload_pb.TrafficEventEntry>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_workload_pb.TrafficEventEntry>;
}

export const WorkloadServiceService: IWorkloadServiceService;

export interface IWorkloadServiceServer extends grpc.UntypedServiceImplementation {
    workloadAction: grpc.handleUnaryCall<sandboxes_api_v1_workloadservice_pb.WorkloadActionRequest, sandboxes_api_v1_workloadservice_pb.WorkloadActionResponse>;
    streamLog: grpc.handleServerStreamingCall<sandboxes_api_v1_workloadservice_pb.StreamLogRequest, sandboxes_api_v1_workloadservice_pb.StreamLogEvent>;
    injectTraffic: grpc.handleBidiStreamingCall<sandboxes_api_v1_workloadservice_pb.TrafficInjection, sandboxes_api_v1_workload_pb.TrafficEventEntry>;
}

export interface IWorkloadServiceClient {
    workloadAction(request: sandboxes_api_v1_workloadservice_pb.WorkloadActionRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workloadservice_pb.WorkloadActionResponse) => void): grpc.ClientUnaryCall;
    workloadAction(request: sandboxes_api_v1_workloadservice_pb.WorkloadActionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workloadservice_pb.WorkloadActionResponse) => void): grpc.ClientUnaryCall;
    workloadAction(request: sandboxes_api_v1_workloadservice_pb.WorkloadActionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workloadservice_pb.WorkloadActionResponse) => void): grpc.ClientUnaryCall;
    streamLog(request: sandboxes_api_v1_workloadservice_pb.StreamLogRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sandboxes_api_v1_workloadservice_pb.StreamLogEvent>;
    streamLog(request: sandboxes_api_v1_workloadservice_pb.StreamLogRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sandboxes_api_v1_workloadservice_pb.StreamLogEvent>;
    injectTraffic(): grpc.ClientDuplexStream<sandboxes_api_v1_workloadservice_pb.TrafficInjection, sandboxes_api_v1_workload_pb.TrafficEventEntry>;
    injectTraffic(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<sandboxes_api_v1_workloadservice_pb.TrafficInjection, sandboxes_api_v1_workload_pb.TrafficEventEntry>;
    injectTraffic(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<sandboxes_api_v1_workloadservice_pb.TrafficInjection, sandboxes_api_v1_workload_pb.TrafficEventEntry>;
}

export class WorkloadServiceClient extends grpc.Client implements IWorkloadServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public workloadAction(request: sandboxes_api_v1_workloadservice_pb.WorkloadActionRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workloadservice_pb.WorkloadActionResponse) => void): grpc.ClientUnaryCall;
    public workloadAction(request: sandboxes_api_v1_workloadservice_pb.WorkloadActionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workloadservice_pb.WorkloadActionResponse) => void): grpc.ClientUnaryCall;
    public workloadAction(request: sandboxes_api_v1_workloadservice_pb.WorkloadActionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workloadservice_pb.WorkloadActionResponse) => void): grpc.ClientUnaryCall;
    public streamLog(request: sandboxes_api_v1_workloadservice_pb.StreamLogRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sandboxes_api_v1_workloadservice_pb.StreamLogEvent>;
    public streamLog(request: sandboxes_api_v1_workloadservice_pb.StreamLogRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sandboxes_api_v1_workloadservice_pb.StreamLogEvent>;
    public injectTraffic(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<sandboxes_api_v1_workloadservice_pb.TrafficInjection, sandboxes_api_v1_workload_pb.TrafficEventEntry>;
    public injectTraffic(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<sandboxes_api_v1_workloadservice_pb.TrafficInjection, sandboxes_api_v1_workload_pb.TrafficEventEntry>;
}
