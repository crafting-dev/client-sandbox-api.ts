// package: sandboxes.api.v1
// file: sandboxes/api/v1/mgmtservice.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as sandboxes_api_v1_mgmtservice_pb from "../../../sandboxes/api/v1/mgmtservice_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as sandboxes_api_v1_common_pb from "../../../sandboxes/api/v1/common_pb";
import * as sandboxes_api_v1_app_pb from "../../../sandboxes/api/v1/app_pb";
import * as sandboxes_api_v1_job_pb from "../../../sandboxes/api/v1/job_pb";
import * as sandboxes_api_v1_org_pb from "../../../sandboxes/api/v1/org_pb";
import * as sandboxes_api_v1_object_pb from "../../../sandboxes/api/v1/object_pb";
import * as sandboxes_api_v1_resource_pb from "../../../sandboxes/api/v1/resource_pb";
import * as sandboxes_api_v1_resource_logintoken_pb from "../../../sandboxes/api/v1/resource_logintoken_pb";
import * as sandboxes_api_v1_sandbox_pb from "../../../sandboxes/api/v1/sandbox_pb";
import * as sandboxes_api_v1_secret_pb from "../../../sandboxes/api/v1/secret_pb";
import * as sandboxes_api_v1_subscription_pb from "../../../sandboxes/api/v1/subscription_pb";
import * as sandboxes_api_v1_system_pb from "../../../sandboxes/api/v1/system_pb";
import * as sandboxes_api_v1_user_pb from "../../../sandboxes/api/v1/user_pb";

interface IManagementServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    systemInfo: IManagementServiceService_ISystemInfo;
    currentUser: IManagementServiceService_ICurrentUser;
    updateUser: IManagementServiceService_IUpdateUser;
    listOrgs: IManagementServiceService_IListOrgs;
    updateOrg: IManagementServiceService_IUpdateOrg;
    listFolders: IManagementServiceService_IListFolders;
    createFolder: IManagementServiceService_ICreateFolder;
    updateFolder: IManagementServiceService_IUpdateFolder;
    deleteFolder: IManagementServiceService_IDeleteFolder;
    listServiceAccounts: IManagementServiceService_IListServiceAccounts;
    createServiceAccount: IManagementServiceService_ICreateServiceAccount;
    updateServiceAccount: IManagementServiceService_IUpdateServiceAccount;
    deleteServiceAccount: IManagementServiceService_IDeleteServiceAccount;
    listLoginTokens: IManagementServiceService_IListLoginTokens;
    createLoginToken: IManagementServiceService_ICreateLoginToken;
    deleteLoginToken: IManagementServiceService_IDeleteLoginToken;
    updateLoginToken: IManagementServiceService_IUpdateLoginToken;
    listApps: IManagementServiceService_IListApps;
    createApp: IManagementServiceService_ICreateApp;
    updateApp: IManagementServiceService_IUpdateApp;
    deleteApp: IManagementServiceService_IDeleteApp;
    listSandboxes: IManagementServiceService_IListSandboxes;
    createSandbox: IManagementServiceService_ICreateSandbox;
    updateSandbox: IManagementServiceService_IUpdateSandbox;
    deleteSandbox: IManagementServiceService_IDeleteSandbox;
    listSandboxesStream: IManagementServiceService_IListSandboxesStream;
    listSecrets: IManagementServiceService_IListSecrets;
    createSecret: IManagementServiceService_ICreateSecret;
    updateSecret: IManagementServiceService_IUpdateSecret;
    deleteSecret: IManagementServiceService_IDeleteSecret;
    signWithSecret: IManagementServiceService_ISignWithSecret;
    listJobs: IManagementServiceService_IListJobs;
    createJob: IManagementServiceService_ICreateJob;
    updateJob: IManagementServiceService_IUpdateJob;
    deleteJob: IManagementServiceService_IDeleteJob;
    listResources: IManagementServiceService_IListResources;
    createResource: IManagementServiceService_ICreateResource;
    updateResource: IManagementServiceService_IUpdateResource;
    deleteResource: IManagementServiceService_IDeleteResource;
    subscriptionStream: IManagementServiceService_ISubscriptionStream;
    reportEvents: IManagementServiceService_IReportEvents;
    reportMetrics: IManagementServiceService_IReportMetrics;
}

interface IManagementServiceService_ISystemInfo extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.SystemInfoRequest, sandboxes_api_v1_mgmtservice_pb.SystemInfoResponse> {
    path: "/sandboxes.api.v1.ManagementService/SystemInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.SystemInfoRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.SystemInfoRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.SystemInfoResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.SystemInfoResponse>;
}
interface IManagementServiceService_ICurrentUser extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.CurrentUserRequest, sandboxes_api_v1_mgmtservice_pb.CurrentUserResponse> {
    path: "/sandboxes.api.v1.ManagementService/CurrentUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.CurrentUserRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.CurrentUserRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.CurrentUserResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.CurrentUserResponse>;
}
interface IManagementServiceService_IUpdateUser extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.UpdateUserRequest, sandboxes_api_v1_mgmtservice_pb.UpdateUserResponse> {
    path: "/sandboxes.api.v1.ManagementService/UpdateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.UpdateUserRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.UpdateUserRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.UpdateUserResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.UpdateUserResponse>;
}
interface IManagementServiceService_IListOrgs extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.ListOrgsRequest, sandboxes_api_v1_mgmtservice_pb.ListOrgsResponse> {
    path: "/sandboxes.api.v1.ManagementService/ListOrgs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.ListOrgsRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.ListOrgsRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.ListOrgsResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.ListOrgsResponse>;
}
interface IManagementServiceService_IUpdateOrg extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.UpdateOrgRequest, sandboxes_api_v1_mgmtservice_pb.UpdateOrgResponse> {
    path: "/sandboxes.api.v1.ManagementService/UpdateOrg";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.UpdateOrgRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.UpdateOrgRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.UpdateOrgResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.UpdateOrgResponse>;
}
interface IManagementServiceService_IListFolders extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.ListFoldersRequest, sandboxes_api_v1_mgmtservice_pb.ListFoldersResponse> {
    path: "/sandboxes.api.v1.ManagementService/ListFolders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.ListFoldersRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.ListFoldersRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.ListFoldersResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.ListFoldersResponse>;
}
interface IManagementServiceService_ICreateFolder extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.CreateFolderRequest, sandboxes_api_v1_mgmtservice_pb.CreateFolderResponse> {
    path: "/sandboxes.api.v1.ManagementService/CreateFolder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.CreateFolderRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.CreateFolderRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.CreateFolderResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.CreateFolderResponse>;
}
interface IManagementServiceService_IUpdateFolder extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.UpdateFolderRequest, sandboxes_api_v1_mgmtservice_pb.UpdateFolderResponse> {
    path: "/sandboxes.api.v1.ManagementService/UpdateFolder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.UpdateFolderRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.UpdateFolderRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.UpdateFolderResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.UpdateFolderResponse>;
}
interface IManagementServiceService_IDeleteFolder extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.DeleteFolderRequest, sandboxes_api_v1_mgmtservice_pb.DeleteFolderResponse> {
    path: "/sandboxes.api.v1.ManagementService/DeleteFolder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.DeleteFolderRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.DeleteFolderRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.DeleteFolderResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.DeleteFolderResponse>;
}
interface IManagementServiceService_IListServiceAccounts extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.ListServiceAccountsRequest, sandboxes_api_v1_mgmtservice_pb.ListServiceAccountsResponse> {
    path: "/sandboxes.api.v1.ManagementService/ListServiceAccounts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.ListServiceAccountsRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.ListServiceAccountsRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.ListServiceAccountsResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.ListServiceAccountsResponse>;
}
interface IManagementServiceService_ICreateServiceAccount extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.CreateServiceAccountRequest, sandboxes_api_v1_mgmtservice_pb.CreateServiceAccountResponse> {
    path: "/sandboxes.api.v1.ManagementService/CreateServiceAccount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.CreateServiceAccountRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.CreateServiceAccountRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.CreateServiceAccountResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.CreateServiceAccountResponse>;
}
interface IManagementServiceService_IUpdateServiceAccount extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.UpdateServiceAccountRequest, sandboxes_api_v1_mgmtservice_pb.UpdateServiceAccountResponse> {
    path: "/sandboxes.api.v1.ManagementService/UpdateServiceAccount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.UpdateServiceAccountRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.UpdateServiceAccountRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.UpdateServiceAccountResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.UpdateServiceAccountResponse>;
}
interface IManagementServiceService_IDeleteServiceAccount extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.DeleteServiceAccountRequest, sandboxes_api_v1_mgmtservice_pb.DeleteServiceAccountResponse> {
    path: "/sandboxes.api.v1.ManagementService/DeleteServiceAccount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.DeleteServiceAccountRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.DeleteServiceAccountRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.DeleteServiceAccountResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.DeleteServiceAccountResponse>;
}
interface IManagementServiceService_IListLoginTokens extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.ListLoginTokensRequest, sandboxes_api_v1_mgmtservice_pb.ListLoginTokensResponse> {
    path: "/sandboxes.api.v1.ManagementService/ListLoginTokens";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.ListLoginTokensRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.ListLoginTokensRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.ListLoginTokensResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.ListLoginTokensResponse>;
}
interface IManagementServiceService_ICreateLoginToken extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.CreateLoginTokenRequest, sandboxes_api_v1_mgmtservice_pb.CreateLoginTokenResponse> {
    path: "/sandboxes.api.v1.ManagementService/CreateLoginToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.CreateLoginTokenRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.CreateLoginTokenRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.CreateLoginTokenResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.CreateLoginTokenResponse>;
}
interface IManagementServiceService_IDeleteLoginToken extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.DeleteLoginTokenRequest, sandboxes_api_v1_mgmtservice_pb.DeleteLoginTokenResponse> {
    path: "/sandboxes.api.v1.ManagementService/DeleteLoginToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.DeleteLoginTokenRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.DeleteLoginTokenRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.DeleteLoginTokenResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.DeleteLoginTokenResponse>;
}
interface IManagementServiceService_IUpdateLoginToken extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.UpdateLoginTokenRequest, sandboxes_api_v1_mgmtservice_pb.UpdateLoginTokenResponse> {
    path: "/sandboxes.api.v1.ManagementService/UpdateLoginToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.UpdateLoginTokenRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.UpdateLoginTokenRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.UpdateLoginTokenResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.UpdateLoginTokenResponse>;
}
interface IManagementServiceService_IListApps extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.ListAppsRequest, sandboxes_api_v1_mgmtservice_pb.ListAppsResponse> {
    path: "/sandboxes.api.v1.ManagementService/ListApps";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.ListAppsRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.ListAppsRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.ListAppsResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.ListAppsResponse>;
}
interface IManagementServiceService_ICreateApp extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.CreateAppRequest, sandboxes_api_v1_mgmtservice_pb.CreateAppResponse> {
    path: "/sandboxes.api.v1.ManagementService/CreateApp";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.CreateAppRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.CreateAppRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.CreateAppResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.CreateAppResponse>;
}
interface IManagementServiceService_IUpdateApp extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.UpdateAppRequest, sandboxes_api_v1_mgmtservice_pb.UpdateAppResponse> {
    path: "/sandboxes.api.v1.ManagementService/UpdateApp";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.UpdateAppRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.UpdateAppRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.UpdateAppResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.UpdateAppResponse>;
}
interface IManagementServiceService_IDeleteApp extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.DeleteAppRequest, sandboxes_api_v1_mgmtservice_pb.DeleteAppResponse> {
    path: "/sandboxes.api.v1.ManagementService/DeleteApp";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.DeleteAppRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.DeleteAppRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.DeleteAppResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.DeleteAppResponse>;
}
interface IManagementServiceService_IListSandboxes extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.ListSandboxesRequest, sandboxes_api_v1_mgmtservice_pb.ListSandboxesResponse> {
    path: "/sandboxes.api.v1.ManagementService/ListSandboxes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.ListSandboxesRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.ListSandboxesRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.ListSandboxesResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.ListSandboxesResponse>;
}
interface IManagementServiceService_ICreateSandbox extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.CreateSandboxRequest, sandboxes_api_v1_mgmtservice_pb.CreateSandboxResponse> {
    path: "/sandboxes.api.v1.ManagementService/CreateSandbox";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.CreateSandboxRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.CreateSandboxRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.CreateSandboxResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.CreateSandboxResponse>;
}
interface IManagementServiceService_IUpdateSandbox extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.UpdateSandboxRequest, sandboxes_api_v1_mgmtservice_pb.UpdateSandboxResponse> {
    path: "/sandboxes.api.v1.ManagementService/UpdateSandbox";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.UpdateSandboxRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.UpdateSandboxRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.UpdateSandboxResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.UpdateSandboxResponse>;
}
interface IManagementServiceService_IDeleteSandbox extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.DeleteSandboxRequest, sandboxes_api_v1_mgmtservice_pb.DeleteSandboxResponse> {
    path: "/sandboxes.api.v1.ManagementService/DeleteSandbox";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.DeleteSandboxRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.DeleteSandboxRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.DeleteSandboxResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.DeleteSandboxResponse>;
}
interface IManagementServiceService_IListSandboxesStream extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.ListSandboxesRequest, sandboxes_api_v1_mgmtservice_pb.ListSandboxesResponse> {
    path: "/sandboxes.api.v1.ManagementService/ListSandboxesStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.ListSandboxesRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.ListSandboxesRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.ListSandboxesResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.ListSandboxesResponse>;
}
interface IManagementServiceService_IListSecrets extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.ListSecretsRequest, sandboxes_api_v1_mgmtservice_pb.ListSecretsResponse> {
    path: "/sandboxes.api.v1.ManagementService/ListSecrets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.ListSecretsRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.ListSecretsRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.ListSecretsResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.ListSecretsResponse>;
}
interface IManagementServiceService_ICreateSecret extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.CreateSecretRequest, sandboxes_api_v1_mgmtservice_pb.CreateSecretResponse> {
    path: "/sandboxes.api.v1.ManagementService/CreateSecret";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.CreateSecretRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.CreateSecretRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.CreateSecretResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.CreateSecretResponse>;
}
interface IManagementServiceService_IUpdateSecret extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.UpdateSecretRequest, sandboxes_api_v1_mgmtservice_pb.UpdateSecretResponse> {
    path: "/sandboxes.api.v1.ManagementService/UpdateSecret";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.UpdateSecretRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.UpdateSecretRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.UpdateSecretResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.UpdateSecretResponse>;
}
interface IManagementServiceService_IDeleteSecret extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.DeleteSecretRequest, sandboxes_api_v1_mgmtservice_pb.DeleteSecretResponse> {
    path: "/sandboxes.api.v1.ManagementService/DeleteSecret";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.DeleteSecretRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.DeleteSecretRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.DeleteSecretResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.DeleteSecretResponse>;
}
interface IManagementServiceService_ISignWithSecret extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.SignWithSecretRequest, sandboxes_api_v1_mgmtservice_pb.SignWithSecretResponse> {
    path: "/sandboxes.api.v1.ManagementService/SignWithSecret";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.SignWithSecretRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.SignWithSecretRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.SignWithSecretResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.SignWithSecretResponse>;
}
interface IManagementServiceService_IListJobs extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.ListJobsRequest, sandboxes_api_v1_mgmtservice_pb.ListJobsResponse> {
    path: "/sandboxes.api.v1.ManagementService/ListJobs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.ListJobsRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.ListJobsRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.ListJobsResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.ListJobsResponse>;
}
interface IManagementServiceService_ICreateJob extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.CreateJobRequest, sandboxes_api_v1_mgmtservice_pb.CreateJobResponse> {
    path: "/sandboxes.api.v1.ManagementService/CreateJob";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.CreateJobRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.CreateJobRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.CreateJobResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.CreateJobResponse>;
}
interface IManagementServiceService_IUpdateJob extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.UpdateJobRequest, sandboxes_api_v1_mgmtservice_pb.UpdateJobResponse> {
    path: "/sandboxes.api.v1.ManagementService/UpdateJob";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.UpdateJobRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.UpdateJobRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.UpdateJobResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.UpdateJobResponse>;
}
interface IManagementServiceService_IDeleteJob extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.DeleteJobRequest, sandboxes_api_v1_mgmtservice_pb.DeleteJobResponse> {
    path: "/sandboxes.api.v1.ManagementService/DeleteJob";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.DeleteJobRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.DeleteJobRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.DeleteJobResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.DeleteJobResponse>;
}
interface IManagementServiceService_IListResources extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.ListResourcesRequest, sandboxes_api_v1_mgmtservice_pb.ListResourcesResponse> {
    path: "/sandboxes.api.v1.ManagementService/ListResources";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.ListResourcesRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.ListResourcesRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.ListResourcesResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.ListResourcesResponse>;
}
interface IManagementServiceService_ICreateResource extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.CreateResourceRequest, sandboxes_api_v1_mgmtservice_pb.CreateResourceResponse> {
    path: "/sandboxes.api.v1.ManagementService/CreateResource";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.CreateResourceRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.CreateResourceRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.CreateResourceResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.CreateResourceResponse>;
}
interface IManagementServiceService_IUpdateResource extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.UpdateResourceRequest, sandboxes_api_v1_mgmtservice_pb.UpdateResourceResponse> {
    path: "/sandboxes.api.v1.ManagementService/UpdateResource";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.UpdateResourceRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.UpdateResourceRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.UpdateResourceResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.UpdateResourceResponse>;
}
interface IManagementServiceService_IDeleteResource extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.DeleteResourceRequest, sandboxes_api_v1_mgmtservice_pb.DeleteResourceResponse> {
    path: "/sandboxes.api.v1.ManagementService/DeleteResource";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.DeleteResourceRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.DeleteResourceRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.DeleteResourceResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.DeleteResourceResponse>;
}
interface IManagementServiceService_ISubscriptionStream extends grpc.MethodDefinition<sandboxes_api_v1_subscription_pb.Subscription.Request, sandboxes_api_v1_subscription_pb.Subscription.Message> {
    path: "/sandboxes.api.v1.ManagementService/SubscriptionStream";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<sandboxes_api_v1_subscription_pb.Subscription.Request>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_subscription_pb.Subscription.Request>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_subscription_pb.Subscription.Message>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_subscription_pb.Subscription.Message>;
}
interface IManagementServiceService_IReportEvents extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.ReportEventsRequest, sandboxes_api_v1_mgmtservice_pb.ReportEventsResponse> {
    path: "/sandboxes.api.v1.ManagementService/ReportEvents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.ReportEventsRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.ReportEventsRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.ReportEventsResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.ReportEventsResponse>;
}
interface IManagementServiceService_IReportMetrics extends grpc.MethodDefinition<sandboxes_api_v1_mgmtservice_pb.ReportMetricsRequest, sandboxes_api_v1_mgmtservice_pb.ReportMetricsResponse> {
    path: "/sandboxes.api.v1.ManagementService/ReportMetrics";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.ReportMetricsRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.ReportMetricsRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_mgmtservice_pb.ReportMetricsResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_mgmtservice_pb.ReportMetricsResponse>;
}

export const ManagementServiceService: IManagementServiceService;

export interface IManagementServiceServer extends grpc.UntypedServiceImplementation {
    systemInfo: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.SystemInfoRequest, sandboxes_api_v1_mgmtservice_pb.SystemInfoResponse>;
    currentUser: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.CurrentUserRequest, sandboxes_api_v1_mgmtservice_pb.CurrentUserResponse>;
    updateUser: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.UpdateUserRequest, sandboxes_api_v1_mgmtservice_pb.UpdateUserResponse>;
    listOrgs: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.ListOrgsRequest, sandboxes_api_v1_mgmtservice_pb.ListOrgsResponse>;
    updateOrg: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.UpdateOrgRequest, sandboxes_api_v1_mgmtservice_pb.UpdateOrgResponse>;
    listFolders: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.ListFoldersRequest, sandboxes_api_v1_mgmtservice_pb.ListFoldersResponse>;
    createFolder: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.CreateFolderRequest, sandboxes_api_v1_mgmtservice_pb.CreateFolderResponse>;
    updateFolder: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.UpdateFolderRequest, sandboxes_api_v1_mgmtservice_pb.UpdateFolderResponse>;
    deleteFolder: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.DeleteFolderRequest, sandboxes_api_v1_mgmtservice_pb.DeleteFolderResponse>;
    listServiceAccounts: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.ListServiceAccountsRequest, sandboxes_api_v1_mgmtservice_pb.ListServiceAccountsResponse>;
    createServiceAccount: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.CreateServiceAccountRequest, sandboxes_api_v1_mgmtservice_pb.CreateServiceAccountResponse>;
    updateServiceAccount: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.UpdateServiceAccountRequest, sandboxes_api_v1_mgmtservice_pb.UpdateServiceAccountResponse>;
    deleteServiceAccount: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.DeleteServiceAccountRequest, sandboxes_api_v1_mgmtservice_pb.DeleteServiceAccountResponse>;
    listLoginTokens: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.ListLoginTokensRequest, sandboxes_api_v1_mgmtservice_pb.ListLoginTokensResponse>;
    createLoginToken: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.CreateLoginTokenRequest, sandboxes_api_v1_mgmtservice_pb.CreateLoginTokenResponse>;
    deleteLoginToken: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.DeleteLoginTokenRequest, sandboxes_api_v1_mgmtservice_pb.DeleteLoginTokenResponse>;
    updateLoginToken: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.UpdateLoginTokenRequest, sandboxes_api_v1_mgmtservice_pb.UpdateLoginTokenResponse>;
    listApps: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.ListAppsRequest, sandboxes_api_v1_mgmtservice_pb.ListAppsResponse>;
    createApp: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.CreateAppRequest, sandboxes_api_v1_mgmtservice_pb.CreateAppResponse>;
    updateApp: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.UpdateAppRequest, sandboxes_api_v1_mgmtservice_pb.UpdateAppResponse>;
    deleteApp: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.DeleteAppRequest, sandboxes_api_v1_mgmtservice_pb.DeleteAppResponse>;
    listSandboxes: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.ListSandboxesRequest, sandboxes_api_v1_mgmtservice_pb.ListSandboxesResponse>;
    createSandbox: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.CreateSandboxRequest, sandboxes_api_v1_mgmtservice_pb.CreateSandboxResponse>;
    updateSandbox: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.UpdateSandboxRequest, sandboxes_api_v1_mgmtservice_pb.UpdateSandboxResponse>;
    deleteSandbox: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.DeleteSandboxRequest, sandboxes_api_v1_mgmtservice_pb.DeleteSandboxResponse>;
    listSandboxesStream: grpc.handleServerStreamingCall<sandboxes_api_v1_mgmtservice_pb.ListSandboxesRequest, sandboxes_api_v1_mgmtservice_pb.ListSandboxesResponse>;
    listSecrets: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.ListSecretsRequest, sandboxes_api_v1_mgmtservice_pb.ListSecretsResponse>;
    createSecret: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.CreateSecretRequest, sandboxes_api_v1_mgmtservice_pb.CreateSecretResponse>;
    updateSecret: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.UpdateSecretRequest, sandboxes_api_v1_mgmtservice_pb.UpdateSecretResponse>;
    deleteSecret: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.DeleteSecretRequest, sandboxes_api_v1_mgmtservice_pb.DeleteSecretResponse>;
    signWithSecret: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.SignWithSecretRequest, sandboxes_api_v1_mgmtservice_pb.SignWithSecretResponse>;
    listJobs: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.ListJobsRequest, sandboxes_api_v1_mgmtservice_pb.ListJobsResponse>;
    createJob: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.CreateJobRequest, sandboxes_api_v1_mgmtservice_pb.CreateJobResponse>;
    updateJob: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.UpdateJobRequest, sandboxes_api_v1_mgmtservice_pb.UpdateJobResponse>;
    deleteJob: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.DeleteJobRequest, sandboxes_api_v1_mgmtservice_pb.DeleteJobResponse>;
    listResources: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.ListResourcesRequest, sandboxes_api_v1_mgmtservice_pb.ListResourcesResponse>;
    createResource: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.CreateResourceRequest, sandboxes_api_v1_mgmtservice_pb.CreateResourceResponse>;
    updateResource: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.UpdateResourceRequest, sandboxes_api_v1_mgmtservice_pb.UpdateResourceResponse>;
    deleteResource: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.DeleteResourceRequest, sandboxes_api_v1_mgmtservice_pb.DeleteResourceResponse>;
    subscriptionStream: grpc.handleBidiStreamingCall<sandboxes_api_v1_subscription_pb.Subscription.Request, sandboxes_api_v1_subscription_pb.Subscription.Message>;
    reportEvents: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.ReportEventsRequest, sandboxes_api_v1_mgmtservice_pb.ReportEventsResponse>;
    reportMetrics: grpc.handleUnaryCall<sandboxes_api_v1_mgmtservice_pb.ReportMetricsRequest, sandboxes_api_v1_mgmtservice_pb.ReportMetricsResponse>;
}

export interface IManagementServiceClient {
    systemInfo(request: sandboxes_api_v1_mgmtservice_pb.SystemInfoRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.SystemInfoResponse) => void): grpc.ClientUnaryCall;
    systemInfo(request: sandboxes_api_v1_mgmtservice_pb.SystemInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.SystemInfoResponse) => void): grpc.ClientUnaryCall;
    systemInfo(request: sandboxes_api_v1_mgmtservice_pb.SystemInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.SystemInfoResponse) => void): grpc.ClientUnaryCall;
    currentUser(request: sandboxes_api_v1_mgmtservice_pb.CurrentUserRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CurrentUserResponse) => void): grpc.ClientUnaryCall;
    currentUser(request: sandboxes_api_v1_mgmtservice_pb.CurrentUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CurrentUserResponse) => void): grpc.ClientUnaryCall;
    currentUser(request: sandboxes_api_v1_mgmtservice_pb.CurrentUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CurrentUserResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: sandboxes_api_v1_mgmtservice_pb.UpdateUserRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: sandboxes_api_v1_mgmtservice_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: sandboxes_api_v1_mgmtservice_pb.UpdateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    listOrgs(request: sandboxes_api_v1_mgmtservice_pb.ListOrgsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListOrgsResponse) => void): grpc.ClientUnaryCall;
    listOrgs(request: sandboxes_api_v1_mgmtservice_pb.ListOrgsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListOrgsResponse) => void): grpc.ClientUnaryCall;
    listOrgs(request: sandboxes_api_v1_mgmtservice_pb.ListOrgsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListOrgsResponse) => void): grpc.ClientUnaryCall;
    updateOrg(request: sandboxes_api_v1_mgmtservice_pb.UpdateOrgRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateOrgResponse) => void): grpc.ClientUnaryCall;
    updateOrg(request: sandboxes_api_v1_mgmtservice_pb.UpdateOrgRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateOrgResponse) => void): grpc.ClientUnaryCall;
    updateOrg(request: sandboxes_api_v1_mgmtservice_pb.UpdateOrgRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateOrgResponse) => void): grpc.ClientUnaryCall;
    listFolders(request: sandboxes_api_v1_mgmtservice_pb.ListFoldersRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListFoldersResponse) => void): grpc.ClientUnaryCall;
    listFolders(request: sandboxes_api_v1_mgmtservice_pb.ListFoldersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListFoldersResponse) => void): grpc.ClientUnaryCall;
    listFolders(request: sandboxes_api_v1_mgmtservice_pb.ListFoldersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListFoldersResponse) => void): grpc.ClientUnaryCall;
    createFolder(request: sandboxes_api_v1_mgmtservice_pb.CreateFolderRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateFolderResponse) => void): grpc.ClientUnaryCall;
    createFolder(request: sandboxes_api_v1_mgmtservice_pb.CreateFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateFolderResponse) => void): grpc.ClientUnaryCall;
    createFolder(request: sandboxes_api_v1_mgmtservice_pb.CreateFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateFolderResponse) => void): grpc.ClientUnaryCall;
    updateFolder(request: sandboxes_api_v1_mgmtservice_pb.UpdateFolderRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateFolderResponse) => void): grpc.ClientUnaryCall;
    updateFolder(request: sandboxes_api_v1_mgmtservice_pb.UpdateFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateFolderResponse) => void): grpc.ClientUnaryCall;
    updateFolder(request: sandboxes_api_v1_mgmtservice_pb.UpdateFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateFolderResponse) => void): grpc.ClientUnaryCall;
    deleteFolder(request: sandboxes_api_v1_mgmtservice_pb.DeleteFolderRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteFolderResponse) => void): grpc.ClientUnaryCall;
    deleteFolder(request: sandboxes_api_v1_mgmtservice_pb.DeleteFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteFolderResponse) => void): grpc.ClientUnaryCall;
    deleteFolder(request: sandboxes_api_v1_mgmtservice_pb.DeleteFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteFolderResponse) => void): grpc.ClientUnaryCall;
    listServiceAccounts(request: sandboxes_api_v1_mgmtservice_pb.ListServiceAccountsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListServiceAccountsResponse) => void): grpc.ClientUnaryCall;
    listServiceAccounts(request: sandboxes_api_v1_mgmtservice_pb.ListServiceAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListServiceAccountsResponse) => void): grpc.ClientUnaryCall;
    listServiceAccounts(request: sandboxes_api_v1_mgmtservice_pb.ListServiceAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListServiceAccountsResponse) => void): grpc.ClientUnaryCall;
    createServiceAccount(request: sandboxes_api_v1_mgmtservice_pb.CreateServiceAccountRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateServiceAccountResponse) => void): grpc.ClientUnaryCall;
    createServiceAccount(request: sandboxes_api_v1_mgmtservice_pb.CreateServiceAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateServiceAccountResponse) => void): grpc.ClientUnaryCall;
    createServiceAccount(request: sandboxes_api_v1_mgmtservice_pb.CreateServiceAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateServiceAccountResponse) => void): grpc.ClientUnaryCall;
    updateServiceAccount(request: sandboxes_api_v1_mgmtservice_pb.UpdateServiceAccountRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateServiceAccountResponse) => void): grpc.ClientUnaryCall;
    updateServiceAccount(request: sandboxes_api_v1_mgmtservice_pb.UpdateServiceAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateServiceAccountResponse) => void): grpc.ClientUnaryCall;
    updateServiceAccount(request: sandboxes_api_v1_mgmtservice_pb.UpdateServiceAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateServiceAccountResponse) => void): grpc.ClientUnaryCall;
    deleteServiceAccount(request: sandboxes_api_v1_mgmtservice_pb.DeleteServiceAccountRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteServiceAccountResponse) => void): grpc.ClientUnaryCall;
    deleteServiceAccount(request: sandboxes_api_v1_mgmtservice_pb.DeleteServiceAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteServiceAccountResponse) => void): grpc.ClientUnaryCall;
    deleteServiceAccount(request: sandboxes_api_v1_mgmtservice_pb.DeleteServiceAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteServiceAccountResponse) => void): grpc.ClientUnaryCall;
    listLoginTokens(request: sandboxes_api_v1_mgmtservice_pb.ListLoginTokensRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListLoginTokensResponse) => void): grpc.ClientUnaryCall;
    listLoginTokens(request: sandboxes_api_v1_mgmtservice_pb.ListLoginTokensRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListLoginTokensResponse) => void): grpc.ClientUnaryCall;
    listLoginTokens(request: sandboxes_api_v1_mgmtservice_pb.ListLoginTokensRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListLoginTokensResponse) => void): grpc.ClientUnaryCall;
    createLoginToken(request: sandboxes_api_v1_mgmtservice_pb.CreateLoginTokenRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateLoginTokenResponse) => void): grpc.ClientUnaryCall;
    createLoginToken(request: sandboxes_api_v1_mgmtservice_pb.CreateLoginTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateLoginTokenResponse) => void): grpc.ClientUnaryCall;
    createLoginToken(request: sandboxes_api_v1_mgmtservice_pb.CreateLoginTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateLoginTokenResponse) => void): grpc.ClientUnaryCall;
    deleteLoginToken(request: sandboxes_api_v1_mgmtservice_pb.DeleteLoginTokenRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteLoginTokenResponse) => void): grpc.ClientUnaryCall;
    deleteLoginToken(request: sandboxes_api_v1_mgmtservice_pb.DeleteLoginTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteLoginTokenResponse) => void): grpc.ClientUnaryCall;
    deleteLoginToken(request: sandboxes_api_v1_mgmtservice_pb.DeleteLoginTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteLoginTokenResponse) => void): grpc.ClientUnaryCall;
    updateLoginToken(request: sandboxes_api_v1_mgmtservice_pb.UpdateLoginTokenRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateLoginTokenResponse) => void): grpc.ClientUnaryCall;
    updateLoginToken(request: sandboxes_api_v1_mgmtservice_pb.UpdateLoginTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateLoginTokenResponse) => void): grpc.ClientUnaryCall;
    updateLoginToken(request: sandboxes_api_v1_mgmtservice_pb.UpdateLoginTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateLoginTokenResponse) => void): grpc.ClientUnaryCall;
    listApps(request: sandboxes_api_v1_mgmtservice_pb.ListAppsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListAppsResponse) => void): grpc.ClientUnaryCall;
    listApps(request: sandboxes_api_v1_mgmtservice_pb.ListAppsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListAppsResponse) => void): grpc.ClientUnaryCall;
    listApps(request: sandboxes_api_v1_mgmtservice_pb.ListAppsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListAppsResponse) => void): grpc.ClientUnaryCall;
    createApp(request: sandboxes_api_v1_mgmtservice_pb.CreateAppRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateAppResponse) => void): grpc.ClientUnaryCall;
    createApp(request: sandboxes_api_v1_mgmtservice_pb.CreateAppRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateAppResponse) => void): grpc.ClientUnaryCall;
    createApp(request: sandboxes_api_v1_mgmtservice_pb.CreateAppRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateAppResponse) => void): grpc.ClientUnaryCall;
    updateApp(request: sandboxes_api_v1_mgmtservice_pb.UpdateAppRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateAppResponse) => void): grpc.ClientUnaryCall;
    updateApp(request: sandboxes_api_v1_mgmtservice_pb.UpdateAppRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateAppResponse) => void): grpc.ClientUnaryCall;
    updateApp(request: sandboxes_api_v1_mgmtservice_pb.UpdateAppRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateAppResponse) => void): grpc.ClientUnaryCall;
    deleteApp(request: sandboxes_api_v1_mgmtservice_pb.DeleteAppRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteAppResponse) => void): grpc.ClientUnaryCall;
    deleteApp(request: sandboxes_api_v1_mgmtservice_pb.DeleteAppRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteAppResponse) => void): grpc.ClientUnaryCall;
    deleteApp(request: sandboxes_api_v1_mgmtservice_pb.DeleteAppRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteAppResponse) => void): grpc.ClientUnaryCall;
    listSandboxes(request: sandboxes_api_v1_mgmtservice_pb.ListSandboxesRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListSandboxesResponse) => void): grpc.ClientUnaryCall;
    listSandboxes(request: sandboxes_api_v1_mgmtservice_pb.ListSandboxesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListSandboxesResponse) => void): grpc.ClientUnaryCall;
    listSandboxes(request: sandboxes_api_v1_mgmtservice_pb.ListSandboxesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListSandboxesResponse) => void): grpc.ClientUnaryCall;
    createSandbox(request: sandboxes_api_v1_mgmtservice_pb.CreateSandboxRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateSandboxResponse) => void): grpc.ClientUnaryCall;
    createSandbox(request: sandboxes_api_v1_mgmtservice_pb.CreateSandboxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateSandboxResponse) => void): grpc.ClientUnaryCall;
    createSandbox(request: sandboxes_api_v1_mgmtservice_pb.CreateSandboxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateSandboxResponse) => void): grpc.ClientUnaryCall;
    updateSandbox(request: sandboxes_api_v1_mgmtservice_pb.UpdateSandboxRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateSandboxResponse) => void): grpc.ClientUnaryCall;
    updateSandbox(request: sandboxes_api_v1_mgmtservice_pb.UpdateSandboxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateSandboxResponse) => void): grpc.ClientUnaryCall;
    updateSandbox(request: sandboxes_api_v1_mgmtservice_pb.UpdateSandboxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateSandboxResponse) => void): grpc.ClientUnaryCall;
    deleteSandbox(request: sandboxes_api_v1_mgmtservice_pb.DeleteSandboxRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteSandboxResponse) => void): grpc.ClientUnaryCall;
    deleteSandbox(request: sandboxes_api_v1_mgmtservice_pb.DeleteSandboxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteSandboxResponse) => void): grpc.ClientUnaryCall;
    deleteSandbox(request: sandboxes_api_v1_mgmtservice_pb.DeleteSandboxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteSandboxResponse) => void): grpc.ClientUnaryCall;
    listSandboxesStream(request: sandboxes_api_v1_mgmtservice_pb.ListSandboxesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sandboxes_api_v1_mgmtservice_pb.ListSandboxesResponse>;
    listSandboxesStream(request: sandboxes_api_v1_mgmtservice_pb.ListSandboxesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sandboxes_api_v1_mgmtservice_pb.ListSandboxesResponse>;
    listSecrets(request: sandboxes_api_v1_mgmtservice_pb.ListSecretsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListSecretsResponse) => void): grpc.ClientUnaryCall;
    listSecrets(request: sandboxes_api_v1_mgmtservice_pb.ListSecretsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListSecretsResponse) => void): grpc.ClientUnaryCall;
    listSecrets(request: sandboxes_api_v1_mgmtservice_pb.ListSecretsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListSecretsResponse) => void): grpc.ClientUnaryCall;
    createSecret(request: sandboxes_api_v1_mgmtservice_pb.CreateSecretRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateSecretResponse) => void): grpc.ClientUnaryCall;
    createSecret(request: sandboxes_api_v1_mgmtservice_pb.CreateSecretRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateSecretResponse) => void): grpc.ClientUnaryCall;
    createSecret(request: sandboxes_api_v1_mgmtservice_pb.CreateSecretRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateSecretResponse) => void): grpc.ClientUnaryCall;
    updateSecret(request: sandboxes_api_v1_mgmtservice_pb.UpdateSecretRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateSecretResponse) => void): grpc.ClientUnaryCall;
    updateSecret(request: sandboxes_api_v1_mgmtservice_pb.UpdateSecretRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateSecretResponse) => void): grpc.ClientUnaryCall;
    updateSecret(request: sandboxes_api_v1_mgmtservice_pb.UpdateSecretRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateSecretResponse) => void): grpc.ClientUnaryCall;
    deleteSecret(request: sandboxes_api_v1_mgmtservice_pb.DeleteSecretRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteSecretResponse) => void): grpc.ClientUnaryCall;
    deleteSecret(request: sandboxes_api_v1_mgmtservice_pb.DeleteSecretRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteSecretResponse) => void): grpc.ClientUnaryCall;
    deleteSecret(request: sandboxes_api_v1_mgmtservice_pb.DeleteSecretRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteSecretResponse) => void): grpc.ClientUnaryCall;
    signWithSecret(request: sandboxes_api_v1_mgmtservice_pb.SignWithSecretRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.SignWithSecretResponse) => void): grpc.ClientUnaryCall;
    signWithSecret(request: sandboxes_api_v1_mgmtservice_pb.SignWithSecretRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.SignWithSecretResponse) => void): grpc.ClientUnaryCall;
    signWithSecret(request: sandboxes_api_v1_mgmtservice_pb.SignWithSecretRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.SignWithSecretResponse) => void): grpc.ClientUnaryCall;
    listJobs(request: sandboxes_api_v1_mgmtservice_pb.ListJobsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListJobsResponse) => void): grpc.ClientUnaryCall;
    listJobs(request: sandboxes_api_v1_mgmtservice_pb.ListJobsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListJobsResponse) => void): grpc.ClientUnaryCall;
    listJobs(request: sandboxes_api_v1_mgmtservice_pb.ListJobsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListJobsResponse) => void): grpc.ClientUnaryCall;
    createJob(request: sandboxes_api_v1_mgmtservice_pb.CreateJobRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateJobResponse) => void): grpc.ClientUnaryCall;
    createJob(request: sandboxes_api_v1_mgmtservice_pb.CreateJobRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateJobResponse) => void): grpc.ClientUnaryCall;
    createJob(request: sandboxes_api_v1_mgmtservice_pb.CreateJobRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateJobResponse) => void): grpc.ClientUnaryCall;
    updateJob(request: sandboxes_api_v1_mgmtservice_pb.UpdateJobRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateJobResponse) => void): grpc.ClientUnaryCall;
    updateJob(request: sandboxes_api_v1_mgmtservice_pb.UpdateJobRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateJobResponse) => void): grpc.ClientUnaryCall;
    updateJob(request: sandboxes_api_v1_mgmtservice_pb.UpdateJobRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateJobResponse) => void): grpc.ClientUnaryCall;
    deleteJob(request: sandboxes_api_v1_mgmtservice_pb.DeleteJobRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteJobResponse) => void): grpc.ClientUnaryCall;
    deleteJob(request: sandboxes_api_v1_mgmtservice_pb.DeleteJobRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteJobResponse) => void): grpc.ClientUnaryCall;
    deleteJob(request: sandboxes_api_v1_mgmtservice_pb.DeleteJobRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteJobResponse) => void): grpc.ClientUnaryCall;
    listResources(request: sandboxes_api_v1_mgmtservice_pb.ListResourcesRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListResourcesResponse) => void): grpc.ClientUnaryCall;
    listResources(request: sandboxes_api_v1_mgmtservice_pb.ListResourcesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListResourcesResponse) => void): grpc.ClientUnaryCall;
    listResources(request: sandboxes_api_v1_mgmtservice_pb.ListResourcesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListResourcesResponse) => void): grpc.ClientUnaryCall;
    createResource(request: sandboxes_api_v1_mgmtservice_pb.CreateResourceRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateResourceResponse) => void): grpc.ClientUnaryCall;
    createResource(request: sandboxes_api_v1_mgmtservice_pb.CreateResourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateResourceResponse) => void): grpc.ClientUnaryCall;
    createResource(request: sandboxes_api_v1_mgmtservice_pb.CreateResourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateResourceResponse) => void): grpc.ClientUnaryCall;
    updateResource(request: sandboxes_api_v1_mgmtservice_pb.UpdateResourceRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateResourceResponse) => void): grpc.ClientUnaryCall;
    updateResource(request: sandboxes_api_v1_mgmtservice_pb.UpdateResourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateResourceResponse) => void): grpc.ClientUnaryCall;
    updateResource(request: sandboxes_api_v1_mgmtservice_pb.UpdateResourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateResourceResponse) => void): grpc.ClientUnaryCall;
    deleteResource(request: sandboxes_api_v1_mgmtservice_pb.DeleteResourceRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteResourceResponse) => void): grpc.ClientUnaryCall;
    deleteResource(request: sandboxes_api_v1_mgmtservice_pb.DeleteResourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteResourceResponse) => void): grpc.ClientUnaryCall;
    deleteResource(request: sandboxes_api_v1_mgmtservice_pb.DeleteResourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteResourceResponse) => void): grpc.ClientUnaryCall;
    subscriptionStream(): grpc.ClientDuplexStream<sandboxes_api_v1_subscription_pb.Subscription.Request, sandboxes_api_v1_subscription_pb.Subscription.Message>;
    subscriptionStream(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<sandboxes_api_v1_subscription_pb.Subscription.Request, sandboxes_api_v1_subscription_pb.Subscription.Message>;
    subscriptionStream(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<sandboxes_api_v1_subscription_pb.Subscription.Request, sandboxes_api_v1_subscription_pb.Subscription.Message>;
    reportEvents(request: sandboxes_api_v1_mgmtservice_pb.ReportEventsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ReportEventsResponse) => void): grpc.ClientUnaryCall;
    reportEvents(request: sandboxes_api_v1_mgmtservice_pb.ReportEventsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ReportEventsResponse) => void): grpc.ClientUnaryCall;
    reportEvents(request: sandboxes_api_v1_mgmtservice_pb.ReportEventsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ReportEventsResponse) => void): grpc.ClientUnaryCall;
    reportMetrics(request: sandboxes_api_v1_mgmtservice_pb.ReportMetricsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ReportMetricsResponse) => void): grpc.ClientUnaryCall;
    reportMetrics(request: sandboxes_api_v1_mgmtservice_pb.ReportMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ReportMetricsResponse) => void): grpc.ClientUnaryCall;
    reportMetrics(request: sandboxes_api_v1_mgmtservice_pb.ReportMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ReportMetricsResponse) => void): grpc.ClientUnaryCall;
}

export class ManagementServiceClient extends grpc.Client implements IManagementServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public systemInfo(request: sandboxes_api_v1_mgmtservice_pb.SystemInfoRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.SystemInfoResponse) => void): grpc.ClientUnaryCall;
    public systemInfo(request: sandboxes_api_v1_mgmtservice_pb.SystemInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.SystemInfoResponse) => void): grpc.ClientUnaryCall;
    public systemInfo(request: sandboxes_api_v1_mgmtservice_pb.SystemInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.SystemInfoResponse) => void): grpc.ClientUnaryCall;
    public currentUser(request: sandboxes_api_v1_mgmtservice_pb.CurrentUserRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CurrentUserResponse) => void): grpc.ClientUnaryCall;
    public currentUser(request: sandboxes_api_v1_mgmtservice_pb.CurrentUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CurrentUserResponse) => void): grpc.ClientUnaryCall;
    public currentUser(request: sandboxes_api_v1_mgmtservice_pb.CurrentUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CurrentUserResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: sandboxes_api_v1_mgmtservice_pb.UpdateUserRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: sandboxes_api_v1_mgmtservice_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: sandboxes_api_v1_mgmtservice_pb.UpdateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    public listOrgs(request: sandboxes_api_v1_mgmtservice_pb.ListOrgsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListOrgsResponse) => void): grpc.ClientUnaryCall;
    public listOrgs(request: sandboxes_api_v1_mgmtservice_pb.ListOrgsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListOrgsResponse) => void): grpc.ClientUnaryCall;
    public listOrgs(request: sandboxes_api_v1_mgmtservice_pb.ListOrgsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListOrgsResponse) => void): grpc.ClientUnaryCall;
    public updateOrg(request: sandboxes_api_v1_mgmtservice_pb.UpdateOrgRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateOrgResponse) => void): grpc.ClientUnaryCall;
    public updateOrg(request: sandboxes_api_v1_mgmtservice_pb.UpdateOrgRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateOrgResponse) => void): grpc.ClientUnaryCall;
    public updateOrg(request: sandboxes_api_v1_mgmtservice_pb.UpdateOrgRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateOrgResponse) => void): grpc.ClientUnaryCall;
    public listFolders(request: sandboxes_api_v1_mgmtservice_pb.ListFoldersRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListFoldersResponse) => void): grpc.ClientUnaryCall;
    public listFolders(request: sandboxes_api_v1_mgmtservice_pb.ListFoldersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListFoldersResponse) => void): grpc.ClientUnaryCall;
    public listFolders(request: sandboxes_api_v1_mgmtservice_pb.ListFoldersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListFoldersResponse) => void): grpc.ClientUnaryCall;
    public createFolder(request: sandboxes_api_v1_mgmtservice_pb.CreateFolderRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateFolderResponse) => void): grpc.ClientUnaryCall;
    public createFolder(request: sandboxes_api_v1_mgmtservice_pb.CreateFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateFolderResponse) => void): grpc.ClientUnaryCall;
    public createFolder(request: sandboxes_api_v1_mgmtservice_pb.CreateFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateFolderResponse) => void): grpc.ClientUnaryCall;
    public updateFolder(request: sandboxes_api_v1_mgmtservice_pb.UpdateFolderRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateFolderResponse) => void): grpc.ClientUnaryCall;
    public updateFolder(request: sandboxes_api_v1_mgmtservice_pb.UpdateFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateFolderResponse) => void): grpc.ClientUnaryCall;
    public updateFolder(request: sandboxes_api_v1_mgmtservice_pb.UpdateFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateFolderResponse) => void): grpc.ClientUnaryCall;
    public deleteFolder(request: sandboxes_api_v1_mgmtservice_pb.DeleteFolderRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteFolderResponse) => void): grpc.ClientUnaryCall;
    public deleteFolder(request: sandboxes_api_v1_mgmtservice_pb.DeleteFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteFolderResponse) => void): grpc.ClientUnaryCall;
    public deleteFolder(request: sandboxes_api_v1_mgmtservice_pb.DeleteFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteFolderResponse) => void): grpc.ClientUnaryCall;
    public listServiceAccounts(request: sandboxes_api_v1_mgmtservice_pb.ListServiceAccountsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListServiceAccountsResponse) => void): grpc.ClientUnaryCall;
    public listServiceAccounts(request: sandboxes_api_v1_mgmtservice_pb.ListServiceAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListServiceAccountsResponse) => void): grpc.ClientUnaryCall;
    public listServiceAccounts(request: sandboxes_api_v1_mgmtservice_pb.ListServiceAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListServiceAccountsResponse) => void): grpc.ClientUnaryCall;
    public createServiceAccount(request: sandboxes_api_v1_mgmtservice_pb.CreateServiceAccountRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateServiceAccountResponse) => void): grpc.ClientUnaryCall;
    public createServiceAccount(request: sandboxes_api_v1_mgmtservice_pb.CreateServiceAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateServiceAccountResponse) => void): grpc.ClientUnaryCall;
    public createServiceAccount(request: sandboxes_api_v1_mgmtservice_pb.CreateServiceAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateServiceAccountResponse) => void): grpc.ClientUnaryCall;
    public updateServiceAccount(request: sandboxes_api_v1_mgmtservice_pb.UpdateServiceAccountRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateServiceAccountResponse) => void): grpc.ClientUnaryCall;
    public updateServiceAccount(request: sandboxes_api_v1_mgmtservice_pb.UpdateServiceAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateServiceAccountResponse) => void): grpc.ClientUnaryCall;
    public updateServiceAccount(request: sandboxes_api_v1_mgmtservice_pb.UpdateServiceAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateServiceAccountResponse) => void): grpc.ClientUnaryCall;
    public deleteServiceAccount(request: sandboxes_api_v1_mgmtservice_pb.DeleteServiceAccountRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteServiceAccountResponse) => void): grpc.ClientUnaryCall;
    public deleteServiceAccount(request: sandboxes_api_v1_mgmtservice_pb.DeleteServiceAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteServiceAccountResponse) => void): grpc.ClientUnaryCall;
    public deleteServiceAccount(request: sandboxes_api_v1_mgmtservice_pb.DeleteServiceAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteServiceAccountResponse) => void): grpc.ClientUnaryCall;
    public listLoginTokens(request: sandboxes_api_v1_mgmtservice_pb.ListLoginTokensRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListLoginTokensResponse) => void): grpc.ClientUnaryCall;
    public listLoginTokens(request: sandboxes_api_v1_mgmtservice_pb.ListLoginTokensRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListLoginTokensResponse) => void): grpc.ClientUnaryCall;
    public listLoginTokens(request: sandboxes_api_v1_mgmtservice_pb.ListLoginTokensRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListLoginTokensResponse) => void): grpc.ClientUnaryCall;
    public createLoginToken(request: sandboxes_api_v1_mgmtservice_pb.CreateLoginTokenRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateLoginTokenResponse) => void): grpc.ClientUnaryCall;
    public createLoginToken(request: sandboxes_api_v1_mgmtservice_pb.CreateLoginTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateLoginTokenResponse) => void): grpc.ClientUnaryCall;
    public createLoginToken(request: sandboxes_api_v1_mgmtservice_pb.CreateLoginTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateLoginTokenResponse) => void): grpc.ClientUnaryCall;
    public deleteLoginToken(request: sandboxes_api_v1_mgmtservice_pb.DeleteLoginTokenRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteLoginTokenResponse) => void): grpc.ClientUnaryCall;
    public deleteLoginToken(request: sandboxes_api_v1_mgmtservice_pb.DeleteLoginTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteLoginTokenResponse) => void): grpc.ClientUnaryCall;
    public deleteLoginToken(request: sandboxes_api_v1_mgmtservice_pb.DeleteLoginTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteLoginTokenResponse) => void): grpc.ClientUnaryCall;
    public updateLoginToken(request: sandboxes_api_v1_mgmtservice_pb.UpdateLoginTokenRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateLoginTokenResponse) => void): grpc.ClientUnaryCall;
    public updateLoginToken(request: sandboxes_api_v1_mgmtservice_pb.UpdateLoginTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateLoginTokenResponse) => void): grpc.ClientUnaryCall;
    public updateLoginToken(request: sandboxes_api_v1_mgmtservice_pb.UpdateLoginTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateLoginTokenResponse) => void): grpc.ClientUnaryCall;
    public listApps(request: sandboxes_api_v1_mgmtservice_pb.ListAppsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListAppsResponse) => void): grpc.ClientUnaryCall;
    public listApps(request: sandboxes_api_v1_mgmtservice_pb.ListAppsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListAppsResponse) => void): grpc.ClientUnaryCall;
    public listApps(request: sandboxes_api_v1_mgmtservice_pb.ListAppsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListAppsResponse) => void): grpc.ClientUnaryCall;
    public createApp(request: sandboxes_api_v1_mgmtservice_pb.CreateAppRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateAppResponse) => void): grpc.ClientUnaryCall;
    public createApp(request: sandboxes_api_v1_mgmtservice_pb.CreateAppRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateAppResponse) => void): grpc.ClientUnaryCall;
    public createApp(request: sandboxes_api_v1_mgmtservice_pb.CreateAppRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateAppResponse) => void): grpc.ClientUnaryCall;
    public updateApp(request: sandboxes_api_v1_mgmtservice_pb.UpdateAppRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateAppResponse) => void): grpc.ClientUnaryCall;
    public updateApp(request: sandboxes_api_v1_mgmtservice_pb.UpdateAppRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateAppResponse) => void): grpc.ClientUnaryCall;
    public updateApp(request: sandboxes_api_v1_mgmtservice_pb.UpdateAppRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateAppResponse) => void): grpc.ClientUnaryCall;
    public deleteApp(request: sandboxes_api_v1_mgmtservice_pb.DeleteAppRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteAppResponse) => void): grpc.ClientUnaryCall;
    public deleteApp(request: sandboxes_api_v1_mgmtservice_pb.DeleteAppRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteAppResponse) => void): grpc.ClientUnaryCall;
    public deleteApp(request: sandboxes_api_v1_mgmtservice_pb.DeleteAppRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteAppResponse) => void): grpc.ClientUnaryCall;
    public listSandboxes(request: sandboxes_api_v1_mgmtservice_pb.ListSandboxesRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListSandboxesResponse) => void): grpc.ClientUnaryCall;
    public listSandboxes(request: sandboxes_api_v1_mgmtservice_pb.ListSandboxesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListSandboxesResponse) => void): grpc.ClientUnaryCall;
    public listSandboxes(request: sandboxes_api_v1_mgmtservice_pb.ListSandboxesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListSandboxesResponse) => void): grpc.ClientUnaryCall;
    public createSandbox(request: sandboxes_api_v1_mgmtservice_pb.CreateSandboxRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateSandboxResponse) => void): grpc.ClientUnaryCall;
    public createSandbox(request: sandboxes_api_v1_mgmtservice_pb.CreateSandboxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateSandboxResponse) => void): grpc.ClientUnaryCall;
    public createSandbox(request: sandboxes_api_v1_mgmtservice_pb.CreateSandboxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateSandboxResponse) => void): grpc.ClientUnaryCall;
    public updateSandbox(request: sandboxes_api_v1_mgmtservice_pb.UpdateSandboxRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateSandboxResponse) => void): grpc.ClientUnaryCall;
    public updateSandbox(request: sandboxes_api_v1_mgmtservice_pb.UpdateSandboxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateSandboxResponse) => void): grpc.ClientUnaryCall;
    public updateSandbox(request: sandboxes_api_v1_mgmtservice_pb.UpdateSandboxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateSandboxResponse) => void): grpc.ClientUnaryCall;
    public deleteSandbox(request: sandboxes_api_v1_mgmtservice_pb.DeleteSandboxRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteSandboxResponse) => void): grpc.ClientUnaryCall;
    public deleteSandbox(request: sandboxes_api_v1_mgmtservice_pb.DeleteSandboxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteSandboxResponse) => void): grpc.ClientUnaryCall;
    public deleteSandbox(request: sandboxes_api_v1_mgmtservice_pb.DeleteSandboxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteSandboxResponse) => void): grpc.ClientUnaryCall;
    public listSandboxesStream(request: sandboxes_api_v1_mgmtservice_pb.ListSandboxesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sandboxes_api_v1_mgmtservice_pb.ListSandboxesResponse>;
    public listSandboxesStream(request: sandboxes_api_v1_mgmtservice_pb.ListSandboxesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sandboxes_api_v1_mgmtservice_pb.ListSandboxesResponse>;
    public listSecrets(request: sandboxes_api_v1_mgmtservice_pb.ListSecretsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListSecretsResponse) => void): grpc.ClientUnaryCall;
    public listSecrets(request: sandboxes_api_v1_mgmtservice_pb.ListSecretsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListSecretsResponse) => void): grpc.ClientUnaryCall;
    public listSecrets(request: sandboxes_api_v1_mgmtservice_pb.ListSecretsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListSecretsResponse) => void): grpc.ClientUnaryCall;
    public createSecret(request: sandboxes_api_v1_mgmtservice_pb.CreateSecretRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateSecretResponse) => void): grpc.ClientUnaryCall;
    public createSecret(request: sandboxes_api_v1_mgmtservice_pb.CreateSecretRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateSecretResponse) => void): grpc.ClientUnaryCall;
    public createSecret(request: sandboxes_api_v1_mgmtservice_pb.CreateSecretRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateSecretResponse) => void): grpc.ClientUnaryCall;
    public updateSecret(request: sandboxes_api_v1_mgmtservice_pb.UpdateSecretRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateSecretResponse) => void): grpc.ClientUnaryCall;
    public updateSecret(request: sandboxes_api_v1_mgmtservice_pb.UpdateSecretRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateSecretResponse) => void): grpc.ClientUnaryCall;
    public updateSecret(request: sandboxes_api_v1_mgmtservice_pb.UpdateSecretRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateSecretResponse) => void): grpc.ClientUnaryCall;
    public deleteSecret(request: sandboxes_api_v1_mgmtservice_pb.DeleteSecretRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteSecretResponse) => void): grpc.ClientUnaryCall;
    public deleteSecret(request: sandboxes_api_v1_mgmtservice_pb.DeleteSecretRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteSecretResponse) => void): grpc.ClientUnaryCall;
    public deleteSecret(request: sandboxes_api_v1_mgmtservice_pb.DeleteSecretRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteSecretResponse) => void): grpc.ClientUnaryCall;
    public signWithSecret(request: sandboxes_api_v1_mgmtservice_pb.SignWithSecretRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.SignWithSecretResponse) => void): grpc.ClientUnaryCall;
    public signWithSecret(request: sandboxes_api_v1_mgmtservice_pb.SignWithSecretRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.SignWithSecretResponse) => void): grpc.ClientUnaryCall;
    public signWithSecret(request: sandboxes_api_v1_mgmtservice_pb.SignWithSecretRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.SignWithSecretResponse) => void): grpc.ClientUnaryCall;
    public listJobs(request: sandboxes_api_v1_mgmtservice_pb.ListJobsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListJobsResponse) => void): grpc.ClientUnaryCall;
    public listJobs(request: sandboxes_api_v1_mgmtservice_pb.ListJobsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListJobsResponse) => void): grpc.ClientUnaryCall;
    public listJobs(request: sandboxes_api_v1_mgmtservice_pb.ListJobsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListJobsResponse) => void): grpc.ClientUnaryCall;
    public createJob(request: sandboxes_api_v1_mgmtservice_pb.CreateJobRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateJobResponse) => void): grpc.ClientUnaryCall;
    public createJob(request: sandboxes_api_v1_mgmtservice_pb.CreateJobRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateJobResponse) => void): grpc.ClientUnaryCall;
    public createJob(request: sandboxes_api_v1_mgmtservice_pb.CreateJobRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateJobResponse) => void): grpc.ClientUnaryCall;
    public updateJob(request: sandboxes_api_v1_mgmtservice_pb.UpdateJobRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateJobResponse) => void): grpc.ClientUnaryCall;
    public updateJob(request: sandboxes_api_v1_mgmtservice_pb.UpdateJobRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateJobResponse) => void): grpc.ClientUnaryCall;
    public updateJob(request: sandboxes_api_v1_mgmtservice_pb.UpdateJobRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateJobResponse) => void): grpc.ClientUnaryCall;
    public deleteJob(request: sandboxes_api_v1_mgmtservice_pb.DeleteJobRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteJobResponse) => void): grpc.ClientUnaryCall;
    public deleteJob(request: sandboxes_api_v1_mgmtservice_pb.DeleteJobRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteJobResponse) => void): grpc.ClientUnaryCall;
    public deleteJob(request: sandboxes_api_v1_mgmtservice_pb.DeleteJobRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteJobResponse) => void): grpc.ClientUnaryCall;
    public listResources(request: sandboxes_api_v1_mgmtservice_pb.ListResourcesRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListResourcesResponse) => void): grpc.ClientUnaryCall;
    public listResources(request: sandboxes_api_v1_mgmtservice_pb.ListResourcesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListResourcesResponse) => void): grpc.ClientUnaryCall;
    public listResources(request: sandboxes_api_v1_mgmtservice_pb.ListResourcesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ListResourcesResponse) => void): grpc.ClientUnaryCall;
    public createResource(request: sandboxes_api_v1_mgmtservice_pb.CreateResourceRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateResourceResponse) => void): grpc.ClientUnaryCall;
    public createResource(request: sandboxes_api_v1_mgmtservice_pb.CreateResourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateResourceResponse) => void): grpc.ClientUnaryCall;
    public createResource(request: sandboxes_api_v1_mgmtservice_pb.CreateResourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.CreateResourceResponse) => void): grpc.ClientUnaryCall;
    public updateResource(request: sandboxes_api_v1_mgmtservice_pb.UpdateResourceRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateResourceResponse) => void): grpc.ClientUnaryCall;
    public updateResource(request: sandboxes_api_v1_mgmtservice_pb.UpdateResourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateResourceResponse) => void): grpc.ClientUnaryCall;
    public updateResource(request: sandboxes_api_v1_mgmtservice_pb.UpdateResourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.UpdateResourceResponse) => void): grpc.ClientUnaryCall;
    public deleteResource(request: sandboxes_api_v1_mgmtservice_pb.DeleteResourceRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteResourceResponse) => void): grpc.ClientUnaryCall;
    public deleteResource(request: sandboxes_api_v1_mgmtservice_pb.DeleteResourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteResourceResponse) => void): grpc.ClientUnaryCall;
    public deleteResource(request: sandboxes_api_v1_mgmtservice_pb.DeleteResourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.DeleteResourceResponse) => void): grpc.ClientUnaryCall;
    public subscriptionStream(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<sandboxes_api_v1_subscription_pb.Subscription.Request, sandboxes_api_v1_subscription_pb.Subscription.Message>;
    public subscriptionStream(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<sandboxes_api_v1_subscription_pb.Subscription.Request, sandboxes_api_v1_subscription_pb.Subscription.Message>;
    public reportEvents(request: sandboxes_api_v1_mgmtservice_pb.ReportEventsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ReportEventsResponse) => void): grpc.ClientUnaryCall;
    public reportEvents(request: sandboxes_api_v1_mgmtservice_pb.ReportEventsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ReportEventsResponse) => void): grpc.ClientUnaryCall;
    public reportEvents(request: sandboxes_api_v1_mgmtservice_pb.ReportEventsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ReportEventsResponse) => void): grpc.ClientUnaryCall;
    public reportMetrics(request: sandboxes_api_v1_mgmtservice_pb.ReportMetricsRequest, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ReportMetricsResponse) => void): grpc.ClientUnaryCall;
    public reportMetrics(request: sandboxes_api_v1_mgmtservice_pb.ReportMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ReportMetricsResponse) => void): grpc.ClientUnaryCall;
    public reportMetrics(request: sandboxes_api_v1_mgmtservice_pb.ReportMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandboxes_api_v1_mgmtservice_pb.ReportMetricsResponse) => void): grpc.ClientUnaryCall;
}
