// package: sandboxes.api.v1
// file: sandboxes/api/v1/llmservice.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as sandboxes_api_v1_llmservice_pb from "../../../sandboxes/api/v1/llmservice_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as sandboxes_api_v1_common_pb from "../../../sandboxes/api/v1/common_pb";
import * as sandboxes_api_v1_object_pb from "../../../sandboxes/api/v1/object_pb";
import * as sandboxes_api_v1_resource_pb from "../../../sandboxes/api/v1/resource_pb";
import * as sandboxes_api_v1_resource_llmsession_pb from "../../../sandboxes/api/v1/resource_llmsession_pb";

interface ILLMServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listLLMSessions: ILLMServiceService_IListLLMSessions;
    startLLMSession: ILLMServiceService_IStartLLMSession;
    replyLLMSession: ILLMServiceService_IReplyLLMSession;
    cancelLLMSession: ILLMServiceService_ICancelLLMSession;
    streamLLMSession: ILLMServiceService_IStreamLLMSession;
    queryLLMSessionMessages: ILLMServiceService_IQueryLLMSessionMessages;
}

interface ILLMServiceService_IListLLMSessions extends grpc.MethodDefinition<sandboxes_api_v1_llmservice_pb.ListLLMSessionsRequest, sandboxes_api_v1_llmservice_pb.ListLLMSessionsResponse> {
    path: "/sandboxes.api.v1.LLMService/ListLLMSessions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_llmservice_pb.ListLLMSessionsRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_llmservice_pb.ListLLMSessionsRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_llmservice_pb.ListLLMSessionsResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_llmservice_pb.ListLLMSessionsResponse>;
}
interface ILLMServiceService_IStartLLMSession extends grpc.MethodDefinition<sandboxes_api_v1_llmservice_pb.StartLLMSessionRequest, sandboxes_api_v1_llmservice_pb.StartLLMSessionResponse> {
    path: "/sandboxes.api.v1.LLMService/StartLLMSession";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_llmservice_pb.StartLLMSessionRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_llmservice_pb.StartLLMSessionRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_llmservice_pb.StartLLMSessionResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_llmservice_pb.StartLLMSessionResponse>;
}
interface ILLMServiceService_IReplyLLMSession extends grpc.MethodDefinition<sandboxes_api_v1_llmservice_pb.ReplyLLMSessionRequest, sandboxes_api_v1_llmservice_pb.ReplyLLMSessionResponse> {
    path: "/sandboxes.api.v1.LLMService/ReplyLLMSession";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_llmservice_pb.ReplyLLMSessionRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_llmservice_pb.ReplyLLMSessionRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_llmservice_pb.ReplyLLMSessionResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_llmservice_pb.ReplyLLMSessionResponse>;
}
interface ILLMServiceService_ICancelLLMSession extends grpc.MethodDefinition<sandboxes_api_v1_llmservice_pb.CancelLLMSessionRequest, sandboxes_api_v1_llmservice_pb.CancelLLMSessionResponse> {
    path: "/sandboxes.api.v1.LLMService/CancelLLMSession";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_llmservice_pb.CancelLLMSessionRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_llmservice_pb.CancelLLMSessionRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_llmservice_pb.CancelLLMSessionResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_llmservice_pb.CancelLLMSessionResponse>;
}
interface ILLMServiceService_IStreamLLMSession extends grpc.MethodDefinition<sandboxes_api_v1_llmservice_pb.LLMSessionStreamRequest, sandboxes_api_v1_llmservice_pb.LLMSessionStreamEvent> {
    path: "/sandboxes.api.v1.LLMService/StreamLLMSession";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<sandboxes_api_v1_llmservice_pb.LLMSessionStreamRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_llmservice_pb.LLMSessionStreamRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_llmservice_pb.LLMSessionStreamEvent>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_llmservice_pb.LLMSessionStreamEvent>;
}
interface ILLMServiceService_IQueryLLMSessionMessages extends grpc.MethodDefinition<sandboxes_api_v1_llmservice_pb.QueryLLMSessionMessagesRequest, sandboxes_api_v1_llmservice_pb.QueryLLMSessionMessagesResponse> {
    path: "/sandboxes.api.v1.LLMService/QueryLLMSessionMessages";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_llmservice_pb.QueryLLMSessionMessagesRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_llmservice_pb.QueryLLMSessionMessagesRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_llmservice_pb.QueryLLMSessionMessagesResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_llmservice_pb.QueryLLMSessionMessagesResponse>;
}

export const LLMServiceService: ILLMServiceService;

export interface ILLMServiceServer extends grpc.UntypedServiceImplementation {
    listLLMSessions: grpc.handleUnaryCall<sandboxes_api_v1_llmservice_pb.ListLLMSessionsRequest, sandboxes_api_v1_llmservice_pb.ListLLMSessionsResponse>;
    startLLMSession: grpc.handleUnaryCall<sandboxes_api_v1_llmservice_pb.StartLLMSessionRequest, sandboxes_api_v1_llmservice_pb.StartLLMSessionResponse>;
    replyLLMSession: grpc.handleUnaryCall<sandboxes_api_v1_llmservice_pb.ReplyLLMSessionRequest, sandboxes_api_v1_llmservice_pb.ReplyLLMSessionResponse>;
    cancelLLMSession: grpc.handleUnaryCall<sandboxes_api_v1_llmservice_pb.CancelLLMSessionRequest, sandboxes_api_v1_llmservice_pb.CancelLLMSessionResponse>;
    streamLLMSession: grpc.handleServerStreamingCall<sandboxes_api_v1_llmservice_pb.LLMSessionStreamRequest, sandboxes_api_v1_llmservice_pb.LLMSessionStreamEvent>;
    queryLLMSessionMessages: grpc.handleUnaryCall<sandboxes_api_v1_llmservice_pb.QueryLLMSessionMessagesRequest, sandboxes_api_v1_llmservice_pb.QueryLLMSessionMessagesResponse>;
}

export interface ILLMServiceClient {
    listLLMSessions(request: sandboxes_api_v1_llmservice_pb.ListLLMSessionsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.ListLLMSessionsResponse) => void): grpc.ClientUnaryCall;
    listLLMSessions(request: sandboxes_api_v1_llmservice_pb.ListLLMSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.ListLLMSessionsResponse) => void): grpc.ClientUnaryCall;
    listLLMSessions(request: sandboxes_api_v1_llmservice_pb.ListLLMSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.ListLLMSessionsResponse) => void): grpc.ClientUnaryCall;
    startLLMSession(request: sandboxes_api_v1_llmservice_pb.StartLLMSessionRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.StartLLMSessionResponse) => void): grpc.ClientUnaryCall;
    startLLMSession(request: sandboxes_api_v1_llmservice_pb.StartLLMSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.StartLLMSessionResponse) => void): grpc.ClientUnaryCall;
    startLLMSession(request: sandboxes_api_v1_llmservice_pb.StartLLMSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.StartLLMSessionResponse) => void): grpc.ClientUnaryCall;
    replyLLMSession(request: sandboxes_api_v1_llmservice_pb.ReplyLLMSessionRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.ReplyLLMSessionResponse) => void): grpc.ClientUnaryCall;
    replyLLMSession(request: sandboxes_api_v1_llmservice_pb.ReplyLLMSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.ReplyLLMSessionResponse) => void): grpc.ClientUnaryCall;
    replyLLMSession(request: sandboxes_api_v1_llmservice_pb.ReplyLLMSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.ReplyLLMSessionResponse) => void): grpc.ClientUnaryCall;
    cancelLLMSession(request: sandboxes_api_v1_llmservice_pb.CancelLLMSessionRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.CancelLLMSessionResponse) => void): grpc.ClientUnaryCall;
    cancelLLMSession(request: sandboxes_api_v1_llmservice_pb.CancelLLMSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.CancelLLMSessionResponse) => void): grpc.ClientUnaryCall;
    cancelLLMSession(request: sandboxes_api_v1_llmservice_pb.CancelLLMSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.CancelLLMSessionResponse) => void): grpc.ClientUnaryCall;
    streamLLMSession(request: sandboxes_api_v1_llmservice_pb.LLMSessionStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sandboxes_api_v1_llmservice_pb.LLMSessionStreamEvent>;
    streamLLMSession(request: sandboxes_api_v1_llmservice_pb.LLMSessionStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sandboxes_api_v1_llmservice_pb.LLMSessionStreamEvent>;
    queryLLMSessionMessages(request: sandboxes_api_v1_llmservice_pb.QueryLLMSessionMessagesRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.QueryLLMSessionMessagesResponse) => void): grpc.ClientUnaryCall;
    queryLLMSessionMessages(request: sandboxes_api_v1_llmservice_pb.QueryLLMSessionMessagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.QueryLLMSessionMessagesResponse) => void): grpc.ClientUnaryCall;
    queryLLMSessionMessages(request: sandboxes_api_v1_llmservice_pb.QueryLLMSessionMessagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.QueryLLMSessionMessagesResponse) => void): grpc.ClientUnaryCall;
}

export class LLMServiceClient extends grpc.Client implements ILLMServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listLLMSessions(request: sandboxes_api_v1_llmservice_pb.ListLLMSessionsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.ListLLMSessionsResponse) => void): grpc.ClientUnaryCall;
    public listLLMSessions(request: sandboxes_api_v1_llmservice_pb.ListLLMSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.ListLLMSessionsResponse) => void): grpc.ClientUnaryCall;
    public listLLMSessions(request: sandboxes_api_v1_llmservice_pb.ListLLMSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.ListLLMSessionsResponse) => void): grpc.ClientUnaryCall;
    public startLLMSession(request: sandboxes_api_v1_llmservice_pb.StartLLMSessionRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.StartLLMSessionResponse) => void): grpc.ClientUnaryCall;
    public startLLMSession(request: sandboxes_api_v1_llmservice_pb.StartLLMSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.StartLLMSessionResponse) => void): grpc.ClientUnaryCall;
    public startLLMSession(request: sandboxes_api_v1_llmservice_pb.StartLLMSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.StartLLMSessionResponse) => void): grpc.ClientUnaryCall;
    public replyLLMSession(request: sandboxes_api_v1_llmservice_pb.ReplyLLMSessionRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.ReplyLLMSessionResponse) => void): grpc.ClientUnaryCall;
    public replyLLMSession(request: sandboxes_api_v1_llmservice_pb.ReplyLLMSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.ReplyLLMSessionResponse) => void): grpc.ClientUnaryCall;
    public replyLLMSession(request: sandboxes_api_v1_llmservice_pb.ReplyLLMSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.ReplyLLMSessionResponse) => void): grpc.ClientUnaryCall;
    public cancelLLMSession(request: sandboxes_api_v1_llmservice_pb.CancelLLMSessionRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.CancelLLMSessionResponse) => void): grpc.ClientUnaryCall;
    public cancelLLMSession(request: sandboxes_api_v1_llmservice_pb.CancelLLMSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.CancelLLMSessionResponse) => void): grpc.ClientUnaryCall;
    public cancelLLMSession(request: sandboxes_api_v1_llmservice_pb.CancelLLMSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.CancelLLMSessionResponse) => void): grpc.ClientUnaryCall;
    public streamLLMSession(request: sandboxes_api_v1_llmservice_pb.LLMSessionStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sandboxes_api_v1_llmservice_pb.LLMSessionStreamEvent>;
    public streamLLMSession(request: sandboxes_api_v1_llmservice_pb.LLMSessionStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sandboxes_api_v1_llmservice_pb.LLMSessionStreamEvent>;
    public queryLLMSessionMessages(request: sandboxes_api_v1_llmservice_pb.QueryLLMSessionMessagesRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.QueryLLMSessionMessagesResponse) => void): grpc.ClientUnaryCall;
    public queryLLMSessionMessages(request: sandboxes_api_v1_llmservice_pb.QueryLLMSessionMessagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.QueryLLMSessionMessagesResponse) => void): grpc.ClientUnaryCall;
    public queryLLMSessionMessages(request: sandboxes_api_v1_llmservice_pb.QueryLLMSessionMessagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_llmservice_pb.QueryLLMSessionMessagesResponse) => void): grpc.ClientUnaryCall;
}
