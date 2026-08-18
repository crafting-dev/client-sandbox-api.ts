// package: sandboxes.api.v1
// file: sandboxes/api/v1/trafficservice.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as sandboxes_api_v1_trafficservice_pb from "../../../sandboxes/api/v1/trafficservice_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as sandboxes_api_v1_resource_pb from "../../../sandboxes/api/v1/resource_pb";
import * as sandboxes_api_v1_resource_trafficsession_pb from "../../../sandboxes/api/v1/resource_trafficsession_pb";
import * as sandboxes_api_v1_workload_pb from "../../../sandboxes/api/v1/workload_pb";

interface ITrafficServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listTrafficSessions: ITrafficServiceService_IListTrafficSessions;
    createTrafficSession: ITrafficServiceService_ICreateTrafficSession;
    updateTrafficSession: ITrafficServiceService_IUpdateTrafficSession;
    deleteTrafficSession: ITrafficServiceService_IDeleteTrafficSession;
    queryTrafficEvents: ITrafficServiceService_IQueryTrafficEvents;
}

interface ITrafficServiceService_IListTrafficSessions extends grpc.MethodDefinition<sandboxes_api_v1_trafficservice_pb.ListTrafficSessionsRequest, sandboxes_api_v1_trafficservice_pb.ListTrafficSessionsResponse> {
    path: "/sandboxes.api.v1.TrafficService/ListTrafficSessions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_trafficservice_pb.ListTrafficSessionsRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_trafficservice_pb.ListTrafficSessionsRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_trafficservice_pb.ListTrafficSessionsResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_trafficservice_pb.ListTrafficSessionsResponse>;
}
interface ITrafficServiceService_ICreateTrafficSession extends grpc.MethodDefinition<sandboxes_api_v1_trafficservice_pb.CreateTrafficSessionRequest, sandboxes_api_v1_trafficservice_pb.CreateTrafficSessionResponse> {
    path: "/sandboxes.api.v1.TrafficService/CreateTrafficSession";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_trafficservice_pb.CreateTrafficSessionRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_trafficservice_pb.CreateTrafficSessionRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_trafficservice_pb.CreateTrafficSessionResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_trafficservice_pb.CreateTrafficSessionResponse>;
}
interface ITrafficServiceService_IUpdateTrafficSession extends grpc.MethodDefinition<sandboxes_api_v1_trafficservice_pb.UpdateTrafficSessionRequest, sandboxes_api_v1_trafficservice_pb.UpdateTrafficSessionResponse> {
    path: "/sandboxes.api.v1.TrafficService/UpdateTrafficSession";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_trafficservice_pb.UpdateTrafficSessionRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_trafficservice_pb.UpdateTrafficSessionRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_trafficservice_pb.UpdateTrafficSessionResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_trafficservice_pb.UpdateTrafficSessionResponse>;
}
interface ITrafficServiceService_IDeleteTrafficSession extends grpc.MethodDefinition<sandboxes_api_v1_trafficservice_pb.DeleteTrafficSessionRequest, sandboxes_api_v1_trafficservice_pb.DeleteTrafficSessionResponse> {
    path: "/sandboxes.api.v1.TrafficService/DeleteTrafficSession";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_trafficservice_pb.DeleteTrafficSessionRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_trafficservice_pb.DeleteTrafficSessionRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_trafficservice_pb.DeleteTrafficSessionResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_trafficservice_pb.DeleteTrafficSessionResponse>;
}
interface ITrafficServiceService_IQueryTrafficEvents extends grpc.MethodDefinition<sandboxes_api_v1_trafficservice_pb.QueryTrafficEventsRequest, sandboxes_api_v1_trafficservice_pb.QueryTrafficEventsResponse> {
    path: "/sandboxes.api.v1.TrafficService/QueryTrafficEvents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_trafficservice_pb.QueryTrafficEventsRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_trafficservice_pb.QueryTrafficEventsRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_trafficservice_pb.QueryTrafficEventsResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_trafficservice_pb.QueryTrafficEventsResponse>;
}

export const TrafficServiceService: ITrafficServiceService;

export interface ITrafficServiceServer extends grpc.UntypedServiceImplementation {
    listTrafficSessions: grpc.handleUnaryCall<sandboxes_api_v1_trafficservice_pb.ListTrafficSessionsRequest, sandboxes_api_v1_trafficservice_pb.ListTrafficSessionsResponse>;
    createTrafficSession: grpc.handleUnaryCall<sandboxes_api_v1_trafficservice_pb.CreateTrafficSessionRequest, sandboxes_api_v1_trafficservice_pb.CreateTrafficSessionResponse>;
    updateTrafficSession: grpc.handleUnaryCall<sandboxes_api_v1_trafficservice_pb.UpdateTrafficSessionRequest, sandboxes_api_v1_trafficservice_pb.UpdateTrafficSessionResponse>;
    deleteTrafficSession: grpc.handleUnaryCall<sandboxes_api_v1_trafficservice_pb.DeleteTrafficSessionRequest, sandboxes_api_v1_trafficservice_pb.DeleteTrafficSessionResponse>;
    queryTrafficEvents: grpc.handleUnaryCall<sandboxes_api_v1_trafficservice_pb.QueryTrafficEventsRequest, sandboxes_api_v1_trafficservice_pb.QueryTrafficEventsResponse>;
}

export interface ITrafficServiceClient {
    listTrafficSessions(request: sandboxes_api_v1_trafficservice_pb.ListTrafficSessionsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.ListTrafficSessionsResponse) => void): grpc.ClientUnaryCall;
    listTrafficSessions(request: sandboxes_api_v1_trafficservice_pb.ListTrafficSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.ListTrafficSessionsResponse) => void): grpc.ClientUnaryCall;
    listTrafficSessions(request: sandboxes_api_v1_trafficservice_pb.ListTrafficSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.ListTrafficSessionsResponse) => void): grpc.ClientUnaryCall;
    createTrafficSession(request: sandboxes_api_v1_trafficservice_pb.CreateTrafficSessionRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.CreateTrafficSessionResponse) => void): grpc.ClientUnaryCall;
    createTrafficSession(request: sandboxes_api_v1_trafficservice_pb.CreateTrafficSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.CreateTrafficSessionResponse) => void): grpc.ClientUnaryCall;
    createTrafficSession(request: sandboxes_api_v1_trafficservice_pb.CreateTrafficSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.CreateTrafficSessionResponse) => void): grpc.ClientUnaryCall;
    updateTrafficSession(request: sandboxes_api_v1_trafficservice_pb.UpdateTrafficSessionRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.UpdateTrafficSessionResponse) => void): grpc.ClientUnaryCall;
    updateTrafficSession(request: sandboxes_api_v1_trafficservice_pb.UpdateTrafficSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.UpdateTrafficSessionResponse) => void): grpc.ClientUnaryCall;
    updateTrafficSession(request: sandboxes_api_v1_trafficservice_pb.UpdateTrafficSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.UpdateTrafficSessionResponse) => void): grpc.ClientUnaryCall;
    deleteTrafficSession(request: sandboxes_api_v1_trafficservice_pb.DeleteTrafficSessionRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.DeleteTrafficSessionResponse) => void): grpc.ClientUnaryCall;
    deleteTrafficSession(request: sandboxes_api_v1_trafficservice_pb.DeleteTrafficSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.DeleteTrafficSessionResponse) => void): grpc.ClientUnaryCall;
    deleteTrafficSession(request: sandboxes_api_v1_trafficservice_pb.DeleteTrafficSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.DeleteTrafficSessionResponse) => void): grpc.ClientUnaryCall;
    queryTrafficEvents(request: sandboxes_api_v1_trafficservice_pb.QueryTrafficEventsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.QueryTrafficEventsResponse) => void): grpc.ClientUnaryCall;
    queryTrafficEvents(request: sandboxes_api_v1_trafficservice_pb.QueryTrafficEventsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.QueryTrafficEventsResponse) => void): grpc.ClientUnaryCall;
    queryTrafficEvents(request: sandboxes_api_v1_trafficservice_pb.QueryTrafficEventsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.QueryTrafficEventsResponse) => void): grpc.ClientUnaryCall;
}

export class TrafficServiceClient extends grpc.Client implements ITrafficServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listTrafficSessions(request: sandboxes_api_v1_trafficservice_pb.ListTrafficSessionsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.ListTrafficSessionsResponse) => void): grpc.ClientUnaryCall;
    public listTrafficSessions(request: sandboxes_api_v1_trafficservice_pb.ListTrafficSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.ListTrafficSessionsResponse) => void): grpc.ClientUnaryCall;
    public listTrafficSessions(request: sandboxes_api_v1_trafficservice_pb.ListTrafficSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.ListTrafficSessionsResponse) => void): grpc.ClientUnaryCall;
    public createTrafficSession(request: sandboxes_api_v1_trafficservice_pb.CreateTrafficSessionRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.CreateTrafficSessionResponse) => void): grpc.ClientUnaryCall;
    public createTrafficSession(request: sandboxes_api_v1_trafficservice_pb.CreateTrafficSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.CreateTrafficSessionResponse) => void): grpc.ClientUnaryCall;
    public createTrafficSession(request: sandboxes_api_v1_trafficservice_pb.CreateTrafficSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.CreateTrafficSessionResponse) => void): grpc.ClientUnaryCall;
    public updateTrafficSession(request: sandboxes_api_v1_trafficservice_pb.UpdateTrafficSessionRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.UpdateTrafficSessionResponse) => void): grpc.ClientUnaryCall;
    public updateTrafficSession(request: sandboxes_api_v1_trafficservice_pb.UpdateTrafficSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.UpdateTrafficSessionResponse) => void): grpc.ClientUnaryCall;
    public updateTrafficSession(request: sandboxes_api_v1_trafficservice_pb.UpdateTrafficSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.UpdateTrafficSessionResponse) => void): grpc.ClientUnaryCall;
    public deleteTrafficSession(request: sandboxes_api_v1_trafficservice_pb.DeleteTrafficSessionRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.DeleteTrafficSessionResponse) => void): grpc.ClientUnaryCall;
    public deleteTrafficSession(request: sandboxes_api_v1_trafficservice_pb.DeleteTrafficSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.DeleteTrafficSessionResponse) => void): grpc.ClientUnaryCall;
    public deleteTrafficSession(request: sandboxes_api_v1_trafficservice_pb.DeleteTrafficSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.DeleteTrafficSessionResponse) => void): grpc.ClientUnaryCall;
    public queryTrafficEvents(request: sandboxes_api_v1_trafficservice_pb.QueryTrafficEventsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.QueryTrafficEventsResponse) => void): grpc.ClientUnaryCall;
    public queryTrafficEvents(request: sandboxes_api_v1_trafficservice_pb.QueryTrafficEventsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.QueryTrafficEventsResponse) => void): grpc.ClientUnaryCall;
    public queryTrafficEvents(request: sandboxes_api_v1_trafficservice_pb.QueryTrafficEventsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_trafficservice_pb.QueryTrafficEventsResponse) => void): grpc.ClientUnaryCall;
}
