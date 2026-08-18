// package: sandboxes.api.v1
// file: sandboxes/api/v1/infoservice.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as sandboxes_api_v1_infoservice_pb from "../../../sandboxes/api/v1/infoservice_pb";
import * as sandboxes_api_v1_app_pb from "../../../sandboxes/api/v1/app_pb";
import * as sandboxes_api_v1_org_pb from "../../../sandboxes/api/v1/org_pb";
import * as sandboxes_api_v1_resource_pb from "../../../sandboxes/api/v1/resource_pb";
import * as sandboxes_api_v1_sandbox_pb from "../../../sandboxes/api/v1/sandbox_pb";
import * as sandboxes_api_v1_secret_pb from "../../../sandboxes/api/v1/secret_pb";
import * as sandboxes_api_v1_system_pb from "../../../sandboxes/api/v1/system_pb";
import * as sandboxes_api_v1_user_pb from "../../../sandboxes/api/v1/user_pb";

interface IInformationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listSandboxInfo: IInformationServiceService_IListSandboxInfo;
}

interface IInformationServiceService_IListSandboxInfo extends grpc.MethodDefinition<sandboxes_api_v1_infoservice_pb.ListSandboxInfoRequest, sandboxes_api_v1_infoservice_pb.ListSandboxInfoResponse> {
    path: "/sandboxes.api.v1.InformationService/ListSandboxInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_infoservice_pb.ListSandboxInfoRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_infoservice_pb.ListSandboxInfoRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_infoservice_pb.ListSandboxInfoResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_infoservice_pb.ListSandboxInfoResponse>;
}

export const InformationServiceService: IInformationServiceService;

export interface IInformationServiceServer extends grpc.UntypedServiceImplementation {
    listSandboxInfo: grpc.handleUnaryCall<sandboxes_api_v1_infoservice_pb.ListSandboxInfoRequest, sandboxes_api_v1_infoservice_pb.ListSandboxInfoResponse>;
}

export interface IInformationServiceClient {
    listSandboxInfo(request: sandboxes_api_v1_infoservice_pb.ListSandboxInfoRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_infoservice_pb.ListSandboxInfoResponse) => void): grpc.ClientUnaryCall;
    listSandboxInfo(request: sandboxes_api_v1_infoservice_pb.ListSandboxInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_infoservice_pb.ListSandboxInfoResponse) => void): grpc.ClientUnaryCall;
    listSandboxInfo(request: sandboxes_api_v1_infoservice_pb.ListSandboxInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_infoservice_pb.ListSandboxInfoResponse) => void): grpc.ClientUnaryCall;
}

export class InformationServiceClient extends grpc.Client implements IInformationServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listSandboxInfo(request: sandboxes_api_v1_infoservice_pb.ListSandboxInfoRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_infoservice_pb.ListSandboxInfoResponse) => void): grpc.ClientUnaryCall;
    public listSandboxInfo(request: sandboxes_api_v1_infoservice_pb.ListSandboxInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_infoservice_pb.ListSandboxInfoResponse) => void): grpc.ClientUnaryCall;
    public listSandboxInfo(request: sandboxes_api_v1_infoservice_pb.ListSandboxInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_infoservice_pb.ListSandboxInfoResponse) => void): grpc.ClientUnaryCall;
}
