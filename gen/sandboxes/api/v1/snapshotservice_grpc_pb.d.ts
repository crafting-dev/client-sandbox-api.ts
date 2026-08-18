// package: sandboxes.api.v1
// file: sandboxes/api/v1/snapshotservice.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as sandboxes_api_v1_snapshotservice_pb from "../../../sandboxes/api/v1/snapshotservice_pb";
import * as sandboxes_api_v1_snapshot_pb from "../../../sandboxes/api/v1/snapshot_pb";

interface ISnapshotManagementServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listSnapshots: ISnapshotManagementServiceService_IListSnapshots;
    copySnapshot: ISnapshotManagementServiceService_ICopySnapshot;
    deleteSnapshot: ISnapshotManagementServiceService_IDeleteSnapshot;
    moveSnapshot: ISnapshotManagementServiceService_IMoveSnapshot;
}

interface ISnapshotManagementServiceService_IListSnapshots extends grpc.MethodDefinition<sandboxes_api_v1_snapshotservice_pb.ListSnapshotsRequest, sandboxes_api_v1_snapshotservice_pb.ListSnapshotsResponse> {
    path: "/sandboxes.api.v1.SnapshotManagementService/ListSnapshots";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_snapshotservice_pb.ListSnapshotsRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_snapshotservice_pb.ListSnapshotsRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_snapshotservice_pb.ListSnapshotsResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_snapshotservice_pb.ListSnapshotsResponse>;
}
interface ISnapshotManagementServiceService_ICopySnapshot extends grpc.MethodDefinition<sandboxes_api_v1_snapshotservice_pb.CopySnapshotRequest, sandboxes_api_v1_snapshotservice_pb.CopySnapshotResponse> {
    path: "/sandboxes.api.v1.SnapshotManagementService/CopySnapshot";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_snapshotservice_pb.CopySnapshotRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_snapshotservice_pb.CopySnapshotRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_snapshotservice_pb.CopySnapshotResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_snapshotservice_pb.CopySnapshotResponse>;
}
interface ISnapshotManagementServiceService_IDeleteSnapshot extends grpc.MethodDefinition<sandboxes_api_v1_snapshotservice_pb.DeleteSnapshotRequest, sandboxes_api_v1_snapshotservice_pb.DeleteSnapshotResponse> {
    path: "/sandboxes.api.v1.SnapshotManagementService/DeleteSnapshot";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_snapshotservice_pb.DeleteSnapshotRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_snapshotservice_pb.DeleteSnapshotRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_snapshotservice_pb.DeleteSnapshotResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_snapshotservice_pb.DeleteSnapshotResponse>;
}
interface ISnapshotManagementServiceService_IMoveSnapshot extends grpc.MethodDefinition<sandboxes_api_v1_snapshotservice_pb.MoveSnapshotRequest, sandboxes_api_v1_snapshotservice_pb.MoveSnapshotResponse> {
    path: "/sandboxes.api.v1.SnapshotManagementService/MoveSnapshot";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_snapshotservice_pb.MoveSnapshotRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_snapshotservice_pb.MoveSnapshotRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_snapshotservice_pb.MoveSnapshotResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_snapshotservice_pb.MoveSnapshotResponse>;
}

export const SnapshotManagementServiceService: ISnapshotManagementServiceService;

export interface ISnapshotManagementServiceServer extends grpc.UntypedServiceImplementation {
    listSnapshots: grpc.handleUnaryCall<sandboxes_api_v1_snapshotservice_pb.ListSnapshotsRequest, sandboxes_api_v1_snapshotservice_pb.ListSnapshotsResponse>;
    copySnapshot: grpc.handleUnaryCall<sandboxes_api_v1_snapshotservice_pb.CopySnapshotRequest, sandboxes_api_v1_snapshotservice_pb.CopySnapshotResponse>;
    deleteSnapshot: grpc.handleUnaryCall<sandboxes_api_v1_snapshotservice_pb.DeleteSnapshotRequest, sandboxes_api_v1_snapshotservice_pb.DeleteSnapshotResponse>;
    moveSnapshot: grpc.handleUnaryCall<sandboxes_api_v1_snapshotservice_pb.MoveSnapshotRequest, sandboxes_api_v1_snapshotservice_pb.MoveSnapshotResponse>;
}

export interface ISnapshotManagementServiceClient {
    listSnapshots(request: sandboxes_api_v1_snapshotservice_pb.ListSnapshotsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_snapshotservice_pb.ListSnapshotsResponse) => void): grpc.ClientUnaryCall;
    listSnapshots(request: sandboxes_api_v1_snapshotservice_pb.ListSnapshotsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_snapshotservice_pb.ListSnapshotsResponse) => void): grpc.ClientUnaryCall;
    listSnapshots(request: sandboxes_api_v1_snapshotservice_pb.ListSnapshotsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_snapshotservice_pb.ListSnapshotsResponse) => void): grpc.ClientUnaryCall;
    copySnapshot(request: sandboxes_api_v1_snapshotservice_pb.CopySnapshotRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_snapshotservice_pb.CopySnapshotResponse) => void): grpc.ClientUnaryCall;
    copySnapshot(request: sandboxes_api_v1_snapshotservice_pb.CopySnapshotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_snapshotservice_pb.CopySnapshotResponse) => void): grpc.ClientUnaryCall;
    copySnapshot(request: sandboxes_api_v1_snapshotservice_pb.CopySnapshotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_snapshotservice_pb.CopySnapshotResponse) => void): grpc.ClientUnaryCall;
    deleteSnapshot(request: sandboxes_api_v1_snapshotservice_pb.DeleteSnapshotRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_snapshotservice_pb.DeleteSnapshotResponse) => void): grpc.ClientUnaryCall;
    deleteSnapshot(request: sandboxes_api_v1_snapshotservice_pb.DeleteSnapshotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_snapshotservice_pb.DeleteSnapshotResponse) => void): grpc.ClientUnaryCall;
    deleteSnapshot(request: sandboxes_api_v1_snapshotservice_pb.DeleteSnapshotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_snapshotservice_pb.DeleteSnapshotResponse) => void): grpc.ClientUnaryCall;
    moveSnapshot(request: sandboxes_api_v1_snapshotservice_pb.MoveSnapshotRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_snapshotservice_pb.MoveSnapshotResponse) => void): grpc.ClientUnaryCall;
    moveSnapshot(request: sandboxes_api_v1_snapshotservice_pb.MoveSnapshotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_snapshotservice_pb.MoveSnapshotResponse) => void): grpc.ClientUnaryCall;
    moveSnapshot(request: sandboxes_api_v1_snapshotservice_pb.MoveSnapshotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_snapshotservice_pb.MoveSnapshotResponse) => void): grpc.ClientUnaryCall;
}

export class SnapshotManagementServiceClient extends grpc.Client implements ISnapshotManagementServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listSnapshots(request: sandboxes_api_v1_snapshotservice_pb.ListSnapshotsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_snapshotservice_pb.ListSnapshotsResponse) => void): grpc.ClientUnaryCall;
    public listSnapshots(request: sandboxes_api_v1_snapshotservice_pb.ListSnapshotsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_snapshotservice_pb.ListSnapshotsResponse) => void): grpc.ClientUnaryCall;
    public listSnapshots(request: sandboxes_api_v1_snapshotservice_pb.ListSnapshotsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_snapshotservice_pb.ListSnapshotsResponse) => void): grpc.ClientUnaryCall;
    public copySnapshot(request: sandboxes_api_v1_snapshotservice_pb.CopySnapshotRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_snapshotservice_pb.CopySnapshotResponse) => void): grpc.ClientUnaryCall;
    public copySnapshot(request: sandboxes_api_v1_snapshotservice_pb.CopySnapshotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_snapshotservice_pb.CopySnapshotResponse) => void): grpc.ClientUnaryCall;
    public copySnapshot(request: sandboxes_api_v1_snapshotservice_pb.CopySnapshotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_snapshotservice_pb.CopySnapshotResponse) => void): grpc.ClientUnaryCall;
    public deleteSnapshot(request: sandboxes_api_v1_snapshotservice_pb.DeleteSnapshotRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_snapshotservice_pb.DeleteSnapshotResponse) => void): grpc.ClientUnaryCall;
    public deleteSnapshot(request: sandboxes_api_v1_snapshotservice_pb.DeleteSnapshotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_snapshotservice_pb.DeleteSnapshotResponse) => void): grpc.ClientUnaryCall;
    public deleteSnapshot(request: sandboxes_api_v1_snapshotservice_pb.DeleteSnapshotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_snapshotservice_pb.DeleteSnapshotResponse) => void): grpc.ClientUnaryCall;
    public moveSnapshot(request: sandboxes_api_v1_snapshotservice_pb.MoveSnapshotRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_snapshotservice_pb.MoveSnapshotResponse) => void): grpc.ClientUnaryCall;
    public moveSnapshot(request: sandboxes_api_v1_snapshotservice_pb.MoveSnapshotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_snapshotservice_pb.MoveSnapshotResponse) => void): grpc.ClientUnaryCall;
    public moveSnapshot(request: sandboxes_api_v1_snapshotservice_pb.MoveSnapshotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_snapshotservice_pb.MoveSnapshotResponse) => void): grpc.ClientUnaryCall;
}
