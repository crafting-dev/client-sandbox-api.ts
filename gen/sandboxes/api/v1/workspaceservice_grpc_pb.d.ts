// package: sandboxes.api.v1
// file: sandboxes/api/v1/workspaceservice.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as sandboxes_api_v1_workspaceservice_pb from "../../../sandboxes/api/v1/workspaceservice_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as sandboxes_api_v1_workload_pb from "../../../sandboxes/api/v1/workload_pb";
import * as sandboxes_api_v1_org_pb from "../../../sandboxes/api/v1/org_pb";
import * as sandboxes_api_v1_process_pb from "../../../sandboxes/api/v1/process_pb";
import * as sandboxes_api_v1_resource_sourcecontrol_pb from "../../../sandboxes/api/v1/resource_sourcecontrol_pb";

interface IWorkspaceServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    syncStream: IWorkspaceServiceService_ISyncStream;
    currentSetup: IWorkspaceServiceService_ICurrentSetup;
    issueToken: IWorkspaceServiceService_IIssueToken;
    sourceControlCredential: IWorkspaceServiceService_ISourceControlCredential;
    mountOverlay: IWorkspaceServiceService_IMountOverlay;
    writeFile: IWorkspaceServiceService_IWriteFile;
    reportJetbrainsRemoteDevServerStatus: IWorkspaceServiceService_IReportJetbrainsRemoteDevServerStatus;
}

interface IWorkspaceServiceService_ISyncStream extends grpc.MethodDefinition<sandboxes_api_v1_workspaceservice_pb.SyncStreamCommand, sandboxes_api_v1_workspaceservice_pb.SyncStreamEvent> {
    path: "/sandboxes.api.v1.WorkspaceService/SyncStream";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<sandboxes_api_v1_workspaceservice_pb.SyncStreamCommand>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_workspaceservice_pb.SyncStreamCommand>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_workspaceservice_pb.SyncStreamEvent>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_workspaceservice_pb.SyncStreamEvent>;
}
interface IWorkspaceServiceService_ICurrentSetup extends grpc.MethodDefinition<sandboxes_api_v1_workspaceservice_pb.CurrentSetupRequest, sandboxes_api_v1_workspaceservice_pb.CurrentSetupResponse> {
    path: "/sandboxes.api.v1.WorkspaceService/CurrentSetup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_workspaceservice_pb.CurrentSetupRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_workspaceservice_pb.CurrentSetupRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_workspaceservice_pb.CurrentSetupResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_workspaceservice_pb.CurrentSetupResponse>;
}
interface IWorkspaceServiceService_IIssueToken extends grpc.MethodDefinition<sandboxes_api_v1_workspaceservice_pb.IssueTokenRequest, sandboxes_api_v1_workspaceservice_pb.IssueTokenResponse> {
    path: "/sandboxes.api.v1.WorkspaceService/IssueToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_workspaceservice_pb.IssueTokenRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_workspaceservice_pb.IssueTokenRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_workspaceservice_pb.IssueTokenResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_workspaceservice_pb.IssueTokenResponse>;
}
interface IWorkspaceServiceService_ISourceControlCredential extends grpc.MethodDefinition<sandboxes_api_v1_workspaceservice_pb.SourceControlCredentialRequest, sandboxes_api_v1_workspaceservice_pb.SourceControlCredentialResponse> {
    path: "/sandboxes.api.v1.WorkspaceService/SourceControlCredential";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_workspaceservice_pb.SourceControlCredentialRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_workspaceservice_pb.SourceControlCredentialRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_workspaceservice_pb.SourceControlCredentialResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_workspaceservice_pb.SourceControlCredentialResponse>;
}
interface IWorkspaceServiceService_IMountOverlay extends grpc.MethodDefinition<sandboxes_api_v1_workspaceservice_pb.MountOverlayRequest, sandboxes_api_v1_workspaceservice_pb.MountOverlayResponse> {
    path: "/sandboxes.api.v1.WorkspaceService/MountOverlay";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_workspaceservice_pb.MountOverlayRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_workspaceservice_pb.MountOverlayRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_workspaceservice_pb.MountOverlayResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_workspaceservice_pb.MountOverlayResponse>;
}
interface IWorkspaceServiceService_IWriteFile extends grpc.MethodDefinition<sandboxes_api_v1_workspaceservice_pb.WriteFileRequest, sandboxes_api_v1_workspaceservice_pb.WriteFileResponse> {
    path: "/sandboxes.api.v1.WorkspaceService/WriteFile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_workspaceservice_pb.WriteFileRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_workspaceservice_pb.WriteFileRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_workspaceservice_pb.WriteFileResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_workspaceservice_pb.WriteFileResponse>;
}
interface IWorkspaceServiceService_IReportJetbrainsRemoteDevServerStatus extends grpc.MethodDefinition<sandboxes_api_v1_workspaceservice_pb.ReportJetbrainsRemoteDevServerStatusRequest, sandboxes_api_v1_workspaceservice_pb.ReportJetbrainsRemoteDevServerStatusResponse> {
    path: "/sandboxes.api.v1.WorkspaceService/ReportJetbrainsRemoteDevServerStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_workspaceservice_pb.ReportJetbrainsRemoteDevServerStatusRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_workspaceservice_pb.ReportJetbrainsRemoteDevServerStatusRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_workspaceservice_pb.ReportJetbrainsRemoteDevServerStatusResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_workspaceservice_pb.ReportJetbrainsRemoteDevServerStatusResponse>;
}

export const WorkspaceServiceService: IWorkspaceServiceService;

export interface IWorkspaceServiceServer extends grpc.UntypedServiceImplementation {
    syncStream: grpc.handleBidiStreamingCall<sandboxes_api_v1_workspaceservice_pb.SyncStreamCommand, sandboxes_api_v1_workspaceservice_pb.SyncStreamEvent>;
    currentSetup: grpc.handleUnaryCall<sandboxes_api_v1_workspaceservice_pb.CurrentSetupRequest, sandboxes_api_v1_workspaceservice_pb.CurrentSetupResponse>;
    issueToken: grpc.handleUnaryCall<sandboxes_api_v1_workspaceservice_pb.IssueTokenRequest, sandboxes_api_v1_workspaceservice_pb.IssueTokenResponse>;
    sourceControlCredential: grpc.handleUnaryCall<sandboxes_api_v1_workspaceservice_pb.SourceControlCredentialRequest, sandboxes_api_v1_workspaceservice_pb.SourceControlCredentialResponse>;
    mountOverlay: grpc.handleUnaryCall<sandboxes_api_v1_workspaceservice_pb.MountOverlayRequest, sandboxes_api_v1_workspaceservice_pb.MountOverlayResponse>;
    writeFile: grpc.handleUnaryCall<sandboxes_api_v1_workspaceservice_pb.WriteFileRequest, sandboxes_api_v1_workspaceservice_pb.WriteFileResponse>;
    reportJetbrainsRemoteDevServerStatus: grpc.handleUnaryCall<sandboxes_api_v1_workspaceservice_pb.ReportJetbrainsRemoteDevServerStatusRequest, sandboxes_api_v1_workspaceservice_pb.ReportJetbrainsRemoteDevServerStatusResponse>;
}

export interface IWorkspaceServiceClient {
    syncStream(): grpc.ClientDuplexStream<sandboxes_api_v1_workspaceservice_pb.SyncStreamCommand, sandboxes_api_v1_workspaceservice_pb.SyncStreamEvent>;
    syncStream(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<sandboxes_api_v1_workspaceservice_pb.SyncStreamCommand, sandboxes_api_v1_workspaceservice_pb.SyncStreamEvent>;
    syncStream(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<sandboxes_api_v1_workspaceservice_pb.SyncStreamCommand, sandboxes_api_v1_workspaceservice_pb.SyncStreamEvent>;
    currentSetup(request: sandboxes_api_v1_workspaceservice_pb.CurrentSetupRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.CurrentSetupResponse) => void): grpc.ClientUnaryCall;
    currentSetup(request: sandboxes_api_v1_workspaceservice_pb.CurrentSetupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.CurrentSetupResponse) => void): grpc.ClientUnaryCall;
    currentSetup(request: sandboxes_api_v1_workspaceservice_pb.CurrentSetupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.CurrentSetupResponse) => void): grpc.ClientUnaryCall;
    issueToken(request: sandboxes_api_v1_workspaceservice_pb.IssueTokenRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.IssueTokenResponse) => void): grpc.ClientUnaryCall;
    issueToken(request: sandboxes_api_v1_workspaceservice_pb.IssueTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.IssueTokenResponse) => void): grpc.ClientUnaryCall;
    issueToken(request: sandboxes_api_v1_workspaceservice_pb.IssueTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.IssueTokenResponse) => void): grpc.ClientUnaryCall;
    sourceControlCredential(request: sandboxes_api_v1_workspaceservice_pb.SourceControlCredentialRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.SourceControlCredentialResponse) => void): grpc.ClientUnaryCall;
    sourceControlCredential(request: sandboxes_api_v1_workspaceservice_pb.SourceControlCredentialRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.SourceControlCredentialResponse) => void): grpc.ClientUnaryCall;
    sourceControlCredential(request: sandboxes_api_v1_workspaceservice_pb.SourceControlCredentialRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.SourceControlCredentialResponse) => void): grpc.ClientUnaryCall;
    mountOverlay(request: sandboxes_api_v1_workspaceservice_pb.MountOverlayRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.MountOverlayResponse) => void): grpc.ClientUnaryCall;
    mountOverlay(request: sandboxes_api_v1_workspaceservice_pb.MountOverlayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.MountOverlayResponse) => void): grpc.ClientUnaryCall;
    mountOverlay(request: sandboxes_api_v1_workspaceservice_pb.MountOverlayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.MountOverlayResponse) => void): grpc.ClientUnaryCall;
    writeFile(request: sandboxes_api_v1_workspaceservice_pb.WriteFileRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.WriteFileResponse) => void): grpc.ClientUnaryCall;
    writeFile(request: sandboxes_api_v1_workspaceservice_pb.WriteFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.WriteFileResponse) => void): grpc.ClientUnaryCall;
    writeFile(request: sandboxes_api_v1_workspaceservice_pb.WriteFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.WriteFileResponse) => void): grpc.ClientUnaryCall;
    reportJetbrainsRemoteDevServerStatus(request: sandboxes_api_v1_workspaceservice_pb.ReportJetbrainsRemoteDevServerStatusRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.ReportJetbrainsRemoteDevServerStatusResponse) => void): grpc.ClientUnaryCall;
    reportJetbrainsRemoteDevServerStatus(request: sandboxes_api_v1_workspaceservice_pb.ReportJetbrainsRemoteDevServerStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.ReportJetbrainsRemoteDevServerStatusResponse) => void): grpc.ClientUnaryCall;
    reportJetbrainsRemoteDevServerStatus(request: sandboxes_api_v1_workspaceservice_pb.ReportJetbrainsRemoteDevServerStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.ReportJetbrainsRemoteDevServerStatusResponse) => void): grpc.ClientUnaryCall;
}

export class WorkspaceServiceClient extends grpc.Client implements IWorkspaceServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public syncStream(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<sandboxes_api_v1_workspaceservice_pb.SyncStreamCommand, sandboxes_api_v1_workspaceservice_pb.SyncStreamEvent>;
    public syncStream(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<sandboxes_api_v1_workspaceservice_pb.SyncStreamCommand, sandboxes_api_v1_workspaceservice_pb.SyncStreamEvent>;
    public currentSetup(request: sandboxes_api_v1_workspaceservice_pb.CurrentSetupRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.CurrentSetupResponse) => void): grpc.ClientUnaryCall;
    public currentSetup(request: sandboxes_api_v1_workspaceservice_pb.CurrentSetupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.CurrentSetupResponse) => void): grpc.ClientUnaryCall;
    public currentSetup(request: sandboxes_api_v1_workspaceservice_pb.CurrentSetupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.CurrentSetupResponse) => void): grpc.ClientUnaryCall;
    public issueToken(request: sandboxes_api_v1_workspaceservice_pb.IssueTokenRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.IssueTokenResponse) => void): grpc.ClientUnaryCall;
    public issueToken(request: sandboxes_api_v1_workspaceservice_pb.IssueTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.IssueTokenResponse) => void): grpc.ClientUnaryCall;
    public issueToken(request: sandboxes_api_v1_workspaceservice_pb.IssueTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.IssueTokenResponse) => void): grpc.ClientUnaryCall;
    public sourceControlCredential(request: sandboxes_api_v1_workspaceservice_pb.SourceControlCredentialRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.SourceControlCredentialResponse) => void): grpc.ClientUnaryCall;
    public sourceControlCredential(request: sandboxes_api_v1_workspaceservice_pb.SourceControlCredentialRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.SourceControlCredentialResponse) => void): grpc.ClientUnaryCall;
    public sourceControlCredential(request: sandboxes_api_v1_workspaceservice_pb.SourceControlCredentialRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.SourceControlCredentialResponse) => void): grpc.ClientUnaryCall;
    public mountOverlay(request: sandboxes_api_v1_workspaceservice_pb.MountOverlayRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.MountOverlayResponse) => void): grpc.ClientUnaryCall;
    public mountOverlay(request: sandboxes_api_v1_workspaceservice_pb.MountOverlayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.MountOverlayResponse) => void): grpc.ClientUnaryCall;
    public mountOverlay(request: sandboxes_api_v1_workspaceservice_pb.MountOverlayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.MountOverlayResponse) => void): grpc.ClientUnaryCall;
    public writeFile(request: sandboxes_api_v1_workspaceservice_pb.WriteFileRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.WriteFileResponse) => void): grpc.ClientUnaryCall;
    public writeFile(request: sandboxes_api_v1_workspaceservice_pb.WriteFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.WriteFileResponse) => void): grpc.ClientUnaryCall;
    public writeFile(request: sandboxes_api_v1_workspaceservice_pb.WriteFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.WriteFileResponse) => void): grpc.ClientUnaryCall;
    public reportJetbrainsRemoteDevServerStatus(request: sandboxes_api_v1_workspaceservice_pb.ReportJetbrainsRemoteDevServerStatusRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.ReportJetbrainsRemoteDevServerStatusResponse) => void): grpc.ClientUnaryCall;
    public reportJetbrainsRemoteDevServerStatus(request: sandboxes_api_v1_workspaceservice_pb.ReportJetbrainsRemoteDevServerStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.ReportJetbrainsRemoteDevServerStatusResponse) => void): grpc.ClientUnaryCall;
    public reportJetbrainsRemoteDevServerStatus(request: sandboxes_api_v1_workspaceservice_pb.ReportJetbrainsRemoteDevServerStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_workspaceservice_pb.ReportJetbrainsRemoteDevServerStatusResponse) => void): grpc.ClientUnaryCall;
}
