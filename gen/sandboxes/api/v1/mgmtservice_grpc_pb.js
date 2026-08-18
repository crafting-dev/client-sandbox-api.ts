// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sandboxes_api_v1_mgmtservice_pb = require('../../../sandboxes/api/v1/mgmtservice_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var sandboxes_api_v1_common_pb = require('../../../sandboxes/api/v1/common_pb.js');
var sandboxes_api_v1_app_pb = require('../../../sandboxes/api/v1/app_pb.js');
var sandboxes_api_v1_job_pb = require('../../../sandboxes/api/v1/job_pb.js');
var sandboxes_api_v1_org_pb = require('../../../sandboxes/api/v1/org_pb.js');
var sandboxes_api_v1_object_pb = require('../../../sandboxes/api/v1/object_pb.js');
var sandboxes_api_v1_resource_pb = require('../../../sandboxes/api/v1/resource_pb.js');
var sandboxes_api_v1_resource_logintoken_pb = require('../../../sandboxes/api/v1/resource_logintoken_pb.js');
var sandboxes_api_v1_sandbox_pb = require('../../../sandboxes/api/v1/sandbox_pb.js');
var sandboxes_api_v1_secret_pb = require('../../../sandboxes/api/v1/secret_pb.js');
var sandboxes_api_v1_subscription_pb = require('../../../sandboxes/api/v1/subscription_pb.js');
var sandboxes_api_v1_system_pb = require('../../../sandboxes/api/v1/system_pb.js');
var sandboxes_api_v1_user_pb = require('../../../sandboxes/api/v1/user_pb.js');

function serialize_sandboxes_api_v1_CreateAppRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.CreateAppRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.CreateAppRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_CreateAppRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.CreateAppRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_CreateAppResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.CreateAppResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.CreateAppResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_CreateAppResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.CreateAppResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_CreateFolderRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.CreateFolderRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.CreateFolderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_CreateFolderRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.CreateFolderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_CreateFolderResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.CreateFolderResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.CreateFolderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_CreateFolderResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.CreateFolderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_CreateJobRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.CreateJobRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.CreateJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_CreateJobRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.CreateJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_CreateJobResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.CreateJobResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.CreateJobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_CreateJobResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.CreateJobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_CreateLoginTokenRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.CreateLoginTokenRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.CreateLoginTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_CreateLoginTokenRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.CreateLoginTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_CreateLoginTokenResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.CreateLoginTokenResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.CreateLoginTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_CreateLoginTokenResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.CreateLoginTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_CreateResourceRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.CreateResourceRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.CreateResourceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_CreateResourceRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.CreateResourceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_CreateResourceResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.CreateResourceResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.CreateResourceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_CreateResourceResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.CreateResourceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_CreateSandboxRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.CreateSandboxRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.CreateSandboxRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_CreateSandboxRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.CreateSandboxRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_CreateSandboxResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.CreateSandboxResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.CreateSandboxResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_CreateSandboxResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.CreateSandboxResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_CreateSecretRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.CreateSecretRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.CreateSecretRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_CreateSecretRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.CreateSecretRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_CreateSecretResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.CreateSecretResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.CreateSecretResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_CreateSecretResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.CreateSecretResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_CreateServiceAccountRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.CreateServiceAccountRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.CreateServiceAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_CreateServiceAccountRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.CreateServiceAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_CreateServiceAccountResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.CreateServiceAccountResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.CreateServiceAccountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_CreateServiceAccountResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.CreateServiceAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_CurrentUserRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.CurrentUserRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.CurrentUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_CurrentUserRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.CurrentUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_CurrentUserResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.CurrentUserResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.CurrentUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_CurrentUserResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.CurrentUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_DeleteAppRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.DeleteAppRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.DeleteAppRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_DeleteAppRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.DeleteAppRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_DeleteAppResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.DeleteAppResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.DeleteAppResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_DeleteAppResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.DeleteAppResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_DeleteFolderRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.DeleteFolderRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.DeleteFolderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_DeleteFolderRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.DeleteFolderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_DeleteFolderResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.DeleteFolderResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.DeleteFolderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_DeleteFolderResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.DeleteFolderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_DeleteJobRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.DeleteJobRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.DeleteJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_DeleteJobRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.DeleteJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_DeleteJobResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.DeleteJobResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.DeleteJobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_DeleteJobResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.DeleteJobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_DeleteLoginTokenRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.DeleteLoginTokenRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.DeleteLoginTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_DeleteLoginTokenRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.DeleteLoginTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_DeleteLoginTokenResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.DeleteLoginTokenResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.DeleteLoginTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_DeleteLoginTokenResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.DeleteLoginTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_DeleteResourceRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.DeleteResourceRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.DeleteResourceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_DeleteResourceRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.DeleteResourceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_DeleteResourceResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.DeleteResourceResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.DeleteResourceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_DeleteResourceResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.DeleteResourceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_DeleteSandboxRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.DeleteSandboxRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.DeleteSandboxRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_DeleteSandboxRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.DeleteSandboxRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_DeleteSandboxResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.DeleteSandboxResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.DeleteSandboxResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_DeleteSandboxResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.DeleteSandboxResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_DeleteSecretRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.DeleteSecretRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.DeleteSecretRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_DeleteSecretRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.DeleteSecretRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_DeleteSecretResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.DeleteSecretResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.DeleteSecretResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_DeleteSecretResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.DeleteSecretResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_DeleteServiceAccountRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.DeleteServiceAccountRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.DeleteServiceAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_DeleteServiceAccountRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.DeleteServiceAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_DeleteServiceAccountResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.DeleteServiceAccountResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.DeleteServiceAccountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_DeleteServiceAccountResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.DeleteServiceAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ListAppsRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.ListAppsRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListAppsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListAppsRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.ListAppsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ListAppsResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.ListAppsResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListAppsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListAppsResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.ListAppsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ListFoldersRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.ListFoldersRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListFoldersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListFoldersRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.ListFoldersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ListFoldersResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.ListFoldersResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListFoldersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListFoldersResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.ListFoldersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ListJobsRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.ListJobsRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListJobsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListJobsRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.ListJobsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ListJobsResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.ListJobsResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListJobsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListJobsResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.ListJobsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ListLoginTokensRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.ListLoginTokensRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListLoginTokensRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListLoginTokensRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.ListLoginTokensRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ListLoginTokensResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.ListLoginTokensResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListLoginTokensResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListLoginTokensResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.ListLoginTokensResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ListOrgsRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.ListOrgsRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListOrgsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListOrgsRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.ListOrgsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ListOrgsResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.ListOrgsResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListOrgsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListOrgsResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.ListOrgsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ListResourcesRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.ListResourcesRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListResourcesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListResourcesRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.ListResourcesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ListResourcesResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.ListResourcesResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListResourcesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListResourcesResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.ListResourcesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ListSandboxesRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.ListSandboxesRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListSandboxesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListSandboxesRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.ListSandboxesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ListSandboxesResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.ListSandboxesResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListSandboxesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListSandboxesResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.ListSandboxesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ListSecretsRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.ListSecretsRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListSecretsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListSecretsRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.ListSecretsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ListSecretsResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.ListSecretsResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListSecretsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListSecretsResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.ListSecretsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ListServiceAccountsRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.ListServiceAccountsRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListServiceAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListServiceAccountsRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.ListServiceAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ListServiceAccountsResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.ListServiceAccountsResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListServiceAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListServiceAccountsResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.ListServiceAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ReportEventsRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.ReportEventsRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ReportEventsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ReportEventsRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.ReportEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ReportEventsResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.ReportEventsResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ReportEventsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ReportEventsResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.ReportEventsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ReportMetricsRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.ReportMetricsRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ReportMetricsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ReportMetricsRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.ReportMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ReportMetricsResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.ReportMetricsResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ReportMetricsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ReportMetricsResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.ReportMetricsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_SignWithSecretRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.SignWithSecretRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.SignWithSecretRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_SignWithSecretRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.SignWithSecretRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_SignWithSecretResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.SignWithSecretResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.SignWithSecretResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_SignWithSecretResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.SignWithSecretResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_Subscription_Message(arg) {
  if (!(arg instanceof sandboxes_api_v1_subscription_pb.Subscription.Message)) {
    throw new Error('Expected argument of type sandboxes.api.v1.Subscription.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_Subscription_Message(buffer_arg) {
  return sandboxes_api_v1_subscription_pb.Subscription.Message.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_Subscription_Request(arg) {
  if (!(arg instanceof sandboxes_api_v1_subscription_pb.Subscription.Request)) {
    throw new Error('Expected argument of type sandboxes.api.v1.Subscription.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_Subscription_Request(buffer_arg) {
  return sandboxes_api_v1_subscription_pb.Subscription.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_SystemInfoRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.SystemInfoRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.SystemInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_SystemInfoRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.SystemInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_SystemInfoResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.SystemInfoResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.SystemInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_SystemInfoResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.SystemInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_UpdateAppRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.UpdateAppRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.UpdateAppRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_UpdateAppRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.UpdateAppRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_UpdateAppResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.UpdateAppResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.UpdateAppResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_UpdateAppResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.UpdateAppResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_UpdateFolderRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.UpdateFolderRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.UpdateFolderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_UpdateFolderRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.UpdateFolderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_UpdateFolderResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.UpdateFolderResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.UpdateFolderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_UpdateFolderResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.UpdateFolderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_UpdateJobRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.UpdateJobRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.UpdateJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_UpdateJobRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.UpdateJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_UpdateJobResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.UpdateJobResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.UpdateJobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_UpdateJobResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.UpdateJobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_UpdateLoginTokenRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.UpdateLoginTokenRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.UpdateLoginTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_UpdateLoginTokenRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.UpdateLoginTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_UpdateLoginTokenResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.UpdateLoginTokenResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.UpdateLoginTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_UpdateLoginTokenResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.UpdateLoginTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_UpdateOrgRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.UpdateOrgRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.UpdateOrgRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_UpdateOrgRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.UpdateOrgRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_UpdateOrgResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.UpdateOrgResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.UpdateOrgResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_UpdateOrgResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.UpdateOrgResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_UpdateResourceRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.UpdateResourceRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.UpdateResourceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_UpdateResourceRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.UpdateResourceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_UpdateResourceResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.UpdateResourceResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.UpdateResourceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_UpdateResourceResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.UpdateResourceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_UpdateSandboxRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.UpdateSandboxRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.UpdateSandboxRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_UpdateSandboxRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.UpdateSandboxRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_UpdateSandboxResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.UpdateSandboxResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.UpdateSandboxResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_UpdateSandboxResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.UpdateSandboxResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_UpdateSecretRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.UpdateSecretRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.UpdateSecretRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_UpdateSecretRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.UpdateSecretRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_UpdateSecretResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.UpdateSecretResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.UpdateSecretResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_UpdateSecretResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.UpdateSecretResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_UpdateServiceAccountRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.UpdateServiceAccountRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.UpdateServiceAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_UpdateServiceAccountRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.UpdateServiceAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_UpdateServiceAccountResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.UpdateServiceAccountResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.UpdateServiceAccountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_UpdateServiceAccountResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.UpdateServiceAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_UpdateUserRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.UpdateUserRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.UpdateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_UpdateUserRequest(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.UpdateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_UpdateUserResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_mgmtservice_pb.UpdateUserResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.UpdateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_UpdateUserResponse(buffer_arg) {
  return sandboxes_api_v1_mgmtservice_pb.UpdateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Management API.
var ManagementServiceService = exports.ManagementServiceService = {
  // Retrieve basic information about the whole system.
// The client may request information about tool packages, managed services.
systemInfo: {
    path: '/sandboxes.api.v1.ManagementService/SystemInfo',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.SystemInfoRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.SystemInfoResponse,
    requestSerialize: serialize_sandboxes_api_v1_SystemInfoRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_SystemInfoRequest,
    responseSerialize: serialize_sandboxes_api_v1_SystemInfoResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_SystemInfoResponse,
  },
  // Retrieve the details of the current user.
currentUser: {
    path: '/sandboxes.api.v1.ManagementService/CurrentUser',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.CurrentUserRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.CurrentUserResponse,
    requestSerialize: serialize_sandboxes_api_v1_CurrentUserRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_CurrentUserRequest,
    responseSerialize: serialize_sandboxes_api_v1_CurrentUserResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_CurrentUserResponse,
  },
  // Update information of a user.
updateUser: {
    path: '/sandboxes.api.v1.ManagementService/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.UpdateUserRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.UpdateUserResponse,
    requestSerialize: serialize_sandboxes_api_v1_UpdateUserRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_UpdateUserRequest,
    responseSerialize: serialize_sandboxes_api_v1_UpdateUserResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_UpdateUserResponse,
  },
  // List orgs that the current user has memberships.
listOrgs: {
    path: '/sandboxes.api.v1.ManagementService/ListOrgs',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.ListOrgsRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.ListOrgsResponse,
    requestSerialize: serialize_sandboxes_api_v1_ListOrgsRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_ListOrgsRequest,
    responseSerialize: serialize_sandboxes_api_v1_ListOrgsResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_ListOrgsResponse,
  },
  updateOrg: {
    path: '/sandboxes.api.v1.ManagementService/UpdateOrg',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.UpdateOrgRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.UpdateOrgResponse,
    requestSerialize: serialize_sandboxes_api_v1_UpdateOrgRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_UpdateOrgRequest,
    responseSerialize: serialize_sandboxes_api_v1_UpdateOrgResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_UpdateOrgResponse,
  },
  listFolders: {
    path: '/sandboxes.api.v1.ManagementService/ListFolders',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.ListFoldersRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.ListFoldersResponse,
    requestSerialize: serialize_sandboxes_api_v1_ListFoldersRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_ListFoldersRequest,
    responseSerialize: serialize_sandboxes_api_v1_ListFoldersResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_ListFoldersResponse,
  },
  createFolder: {
    path: '/sandboxes.api.v1.ManagementService/CreateFolder',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.CreateFolderRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.CreateFolderResponse,
    requestSerialize: serialize_sandboxes_api_v1_CreateFolderRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_CreateFolderRequest,
    responseSerialize: serialize_sandboxes_api_v1_CreateFolderResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_CreateFolderResponse,
  },
  updateFolder: {
    path: '/sandboxes.api.v1.ManagementService/UpdateFolder',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.UpdateFolderRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.UpdateFolderResponse,
    requestSerialize: serialize_sandboxes_api_v1_UpdateFolderRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_UpdateFolderRequest,
    responseSerialize: serialize_sandboxes_api_v1_UpdateFolderResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_UpdateFolderResponse,
  },
  deleteFolder: {
    path: '/sandboxes.api.v1.ManagementService/DeleteFolder',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.DeleteFolderRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.DeleteFolderResponse,
    requestSerialize: serialize_sandboxes_api_v1_DeleteFolderRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_DeleteFolderRequest,
    responseSerialize: serialize_sandboxes_api_v1_DeleteFolderResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_DeleteFolderResponse,
  },
  // Service Accounts.
listServiceAccounts: {
    path: '/sandboxes.api.v1.ManagementService/ListServiceAccounts',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.ListServiceAccountsRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.ListServiceAccountsResponse,
    requestSerialize: serialize_sandboxes_api_v1_ListServiceAccountsRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_ListServiceAccountsRequest,
    responseSerialize: serialize_sandboxes_api_v1_ListServiceAccountsResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_ListServiceAccountsResponse,
  },
  createServiceAccount: {
    path: '/sandboxes.api.v1.ManagementService/CreateServiceAccount',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.CreateServiceAccountRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.CreateServiceAccountResponse,
    requestSerialize: serialize_sandboxes_api_v1_CreateServiceAccountRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_CreateServiceAccountRequest,
    responseSerialize: serialize_sandboxes_api_v1_CreateServiceAccountResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_CreateServiceAccountResponse,
  },
  updateServiceAccount: {
    path: '/sandboxes.api.v1.ManagementService/UpdateServiceAccount',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.UpdateServiceAccountRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.UpdateServiceAccountResponse,
    requestSerialize: serialize_sandboxes_api_v1_UpdateServiceAccountRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_UpdateServiceAccountRequest,
    responseSerialize: serialize_sandboxes_api_v1_UpdateServiceAccountResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_UpdateServiceAccountResponse,
  },
  deleteServiceAccount: {
    path: '/sandboxes.api.v1.ManagementService/DeleteServiceAccount',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.DeleteServiceAccountRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.DeleteServiceAccountResponse,
    requestSerialize: serialize_sandboxes_api_v1_DeleteServiceAccountRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_DeleteServiceAccountRequest,
    responseSerialize: serialize_sandboxes_api_v1_DeleteServiceAccountResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_DeleteServiceAccountResponse,
  },
  // LoginToken for Service accounts.
listLoginTokens: {
    path: '/sandboxes.api.v1.ManagementService/ListLoginTokens',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.ListLoginTokensRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.ListLoginTokensResponse,
    requestSerialize: serialize_sandboxes_api_v1_ListLoginTokensRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_ListLoginTokensRequest,
    responseSerialize: serialize_sandboxes_api_v1_ListLoginTokensResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_ListLoginTokensResponse,
  },
  createLoginToken: {
    path: '/sandboxes.api.v1.ManagementService/CreateLoginToken',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.CreateLoginTokenRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.CreateLoginTokenResponse,
    requestSerialize: serialize_sandboxes_api_v1_CreateLoginTokenRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_CreateLoginTokenRequest,
    responseSerialize: serialize_sandboxes_api_v1_CreateLoginTokenResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_CreateLoginTokenResponse,
  },
  deleteLoginToken: {
    path: '/sandboxes.api.v1.ManagementService/DeleteLoginToken',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.DeleteLoginTokenRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.DeleteLoginTokenResponse,
    requestSerialize: serialize_sandboxes_api_v1_DeleteLoginTokenRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_DeleteLoginTokenRequest,
    responseSerialize: serialize_sandboxes_api_v1_DeleteLoginTokenResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_DeleteLoginTokenResponse,
  },
  updateLoginToken: {
    path: '/sandboxes.api.v1.ManagementService/UpdateLoginToken',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.UpdateLoginTokenRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.UpdateLoginTokenResponse,
    requestSerialize: serialize_sandboxes_api_v1_UpdateLoginTokenRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_UpdateLoginTokenRequest,
    responseSerialize: serialize_sandboxes_api_v1_UpdateLoginTokenResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_UpdateLoginTokenResponse,
  },
  // App CRUD.
//
listApps: {
    path: '/sandboxes.api.v1.ManagementService/ListApps',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.ListAppsRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.ListAppsResponse,
    requestSerialize: serialize_sandboxes_api_v1_ListAppsRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_ListAppsRequest,
    responseSerialize: serialize_sandboxes_api_v1_ListAppsResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_ListAppsResponse,
  },
  createApp: {
    path: '/sandboxes.api.v1.ManagementService/CreateApp',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.CreateAppRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.CreateAppResponse,
    requestSerialize: serialize_sandboxes_api_v1_CreateAppRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_CreateAppRequest,
    responseSerialize: serialize_sandboxes_api_v1_CreateAppResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_CreateAppResponse,
  },
  updateApp: {
    path: '/sandboxes.api.v1.ManagementService/UpdateApp',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.UpdateAppRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.UpdateAppResponse,
    requestSerialize: serialize_sandboxes_api_v1_UpdateAppRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_UpdateAppRequest,
    responseSerialize: serialize_sandboxes_api_v1_UpdateAppResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_UpdateAppResponse,
  },
  deleteApp: {
    path: '/sandboxes.api.v1.ManagementService/DeleteApp',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.DeleteAppRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.DeleteAppResponse,
    requestSerialize: serialize_sandboxes_api_v1_DeleteAppRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_DeleteAppRequest,
    responseSerialize: serialize_sandboxes_api_v1_DeleteAppResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_DeleteAppResponse,
  },
  // Sandbox CRUD.
//
listSandboxes: {
    path: '/sandboxes.api.v1.ManagementService/ListSandboxes',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.ListSandboxesRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.ListSandboxesResponse,
    requestSerialize: serialize_sandboxes_api_v1_ListSandboxesRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_ListSandboxesRequest,
    responseSerialize: serialize_sandboxes_api_v1_ListSandboxesResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_ListSandboxesResponse,
  },
  createSandbox: {
    path: '/sandboxes.api.v1.ManagementService/CreateSandbox',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.CreateSandboxRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.CreateSandboxResponse,
    requestSerialize: serialize_sandboxes_api_v1_CreateSandboxRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_CreateSandboxRequest,
    responseSerialize: serialize_sandboxes_api_v1_CreateSandboxResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_CreateSandboxResponse,
  },
  updateSandbox: {
    path: '/sandboxes.api.v1.ManagementService/UpdateSandbox',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.UpdateSandboxRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.UpdateSandboxResponse,
    requestSerialize: serialize_sandboxes_api_v1_UpdateSandboxRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_UpdateSandboxRequest,
    responseSerialize: serialize_sandboxes_api_v1_UpdateSandboxResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_UpdateSandboxResponse,
  },
  deleteSandbox: {
    path: '/sandboxes.api.v1.ManagementService/DeleteSandbox',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.DeleteSandboxRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.DeleteSandboxResponse,
    requestSerialize: serialize_sandboxes_api_v1_DeleteSandboxRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_DeleteSandboxRequest,
    responseSerialize: serialize_sandboxes_api_v1_DeleteSandboxResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_DeleteSandboxResponse,
  },
  listSandboxesStream: {
    path: '/sandboxes.api.v1.ManagementService/ListSandboxesStream',
    requestStream: false,
    responseStream: true,
    requestType: sandboxes_api_v1_mgmtservice_pb.ListSandboxesRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.ListSandboxesResponse,
    requestSerialize: serialize_sandboxes_api_v1_ListSandboxesRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_ListSandboxesRequest,
    responseSerialize: serialize_sandboxes_api_v1_ListSandboxesResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_ListSandboxesResponse,
  },
  // Secret CRUD.
//
listSecrets: {
    path: '/sandboxes.api.v1.ManagementService/ListSecrets',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.ListSecretsRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.ListSecretsResponse,
    requestSerialize: serialize_sandboxes_api_v1_ListSecretsRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_ListSecretsRequest,
    responseSerialize: serialize_sandboxes_api_v1_ListSecretsResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_ListSecretsResponse,
  },
  createSecret: {
    path: '/sandboxes.api.v1.ManagementService/CreateSecret',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.CreateSecretRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.CreateSecretResponse,
    requestSerialize: serialize_sandboxes_api_v1_CreateSecretRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_CreateSecretRequest,
    responseSerialize: serialize_sandboxes_api_v1_CreateSecretResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_CreateSecretResponse,
  },
  updateSecret: {
    path: '/sandboxes.api.v1.ManagementService/UpdateSecret',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.UpdateSecretRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.UpdateSecretResponse,
    requestSerialize: serialize_sandboxes_api_v1_UpdateSecretRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_UpdateSecretRequest,
    responseSerialize: serialize_sandboxes_api_v1_UpdateSecretResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_UpdateSecretResponse,
  },
  deleteSecret: {
    path: '/sandboxes.api.v1.ManagementService/DeleteSecret',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.DeleteSecretRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.DeleteSecretResponse,
    requestSerialize: serialize_sandboxes_api_v1_DeleteSecretRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_DeleteSecretRequest,
    responseSerialize: serialize_sandboxes_api_v1_DeleteSecretResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_DeleteSecretResponse,
  },
  signWithSecret: {
    path: '/sandboxes.api.v1.ManagementService/SignWithSecret',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.SignWithSecretRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.SignWithSecretResponse,
    requestSerialize: serialize_sandboxes_api_v1_SignWithSecretRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_SignWithSecretRequest,
    responseSerialize: serialize_sandboxes_api_v1_SignWithSecretResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_SignWithSecretResponse,
  },
  // Jobs.
//
listJobs: {
    path: '/sandboxes.api.v1.ManagementService/ListJobs',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.ListJobsRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.ListJobsResponse,
    requestSerialize: serialize_sandboxes_api_v1_ListJobsRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_ListJobsRequest,
    responseSerialize: serialize_sandboxes_api_v1_ListJobsResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_ListJobsResponse,
  },
  createJob: {
    path: '/sandboxes.api.v1.ManagementService/CreateJob',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.CreateJobRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.CreateJobResponse,
    requestSerialize: serialize_sandboxes_api_v1_CreateJobRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_CreateJobRequest,
    responseSerialize: serialize_sandboxes_api_v1_CreateJobResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_CreateJobResponse,
  },
  updateJob: {
    path: '/sandboxes.api.v1.ManagementService/UpdateJob',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.UpdateJobRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.UpdateJobResponse,
    requestSerialize: serialize_sandboxes_api_v1_UpdateJobRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_UpdateJobRequest,
    responseSerialize: serialize_sandboxes_api_v1_UpdateJobResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_UpdateJobResponse,
  },
  deleteJob: {
    path: '/sandboxes.api.v1.ManagementService/DeleteJob',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.DeleteJobRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.DeleteJobResponse,
    requestSerialize: serialize_sandboxes_api_v1_DeleteJobRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_DeleteJobRequest,
    responseSerialize: serialize_sandboxes_api_v1_DeleteJobResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_DeleteJobResponse,
  },
  // Resources.
//
listResources: {
    path: '/sandboxes.api.v1.ManagementService/ListResources',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.ListResourcesRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.ListResourcesResponse,
    requestSerialize: serialize_sandboxes_api_v1_ListResourcesRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_ListResourcesRequest,
    responseSerialize: serialize_sandboxes_api_v1_ListResourcesResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_ListResourcesResponse,
  },
  createResource: {
    path: '/sandboxes.api.v1.ManagementService/CreateResource',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.CreateResourceRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.CreateResourceResponse,
    requestSerialize: serialize_sandboxes_api_v1_CreateResourceRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_CreateResourceRequest,
    responseSerialize: serialize_sandboxes_api_v1_CreateResourceResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_CreateResourceResponse,
  },
  updateResource: {
    path: '/sandboxes.api.v1.ManagementService/UpdateResource',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.UpdateResourceRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.UpdateResourceResponse,
    requestSerialize: serialize_sandboxes_api_v1_UpdateResourceRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_UpdateResourceRequest,
    responseSerialize: serialize_sandboxes_api_v1_UpdateResourceResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_UpdateResourceResponse,
  },
  deleteResource: {
    path: '/sandboxes.api.v1.ManagementService/DeleteResource',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.DeleteResourceRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.DeleteResourceResponse,
    requestSerialize: serialize_sandboxes_api_v1_DeleteResourceRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_DeleteResourceRequest,
    responseSerialize: serialize_sandboxes_api_v1_DeleteResourceResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_DeleteResourceResponse,
  },
  // Subscription.
//
subscriptionStream: {
    path: '/sandboxes.api.v1.ManagementService/SubscriptionStream',
    requestStream: true,
    responseStream: true,
    requestType: sandboxes_api_v1_subscription_pb.Subscription.Request,
    responseType: sandboxes_api_v1_subscription_pb.Subscription.Message,
    requestSerialize: serialize_sandboxes_api_v1_Subscription_Request,
    requestDeserialize: deserialize_sandboxes_api_v1_Subscription_Request,
    responseSerialize: serialize_sandboxes_api_v1_Subscription_Message,
    responseDeserialize: deserialize_sandboxes_api_v1_Subscription_Message,
  },
  // Event reporting.
//
reportEvents: {
    path: '/sandboxes.api.v1.ManagementService/ReportEvents',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.ReportEventsRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.ReportEventsResponse,
    requestSerialize: serialize_sandboxes_api_v1_ReportEventsRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_ReportEventsRequest,
    responseSerialize: serialize_sandboxes_api_v1_ReportEventsResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_ReportEventsResponse,
  },
  // Metrics reporting, allows clients to report custom metrics with dynamic labels.
reportMetrics: {
    path: '/sandboxes.api.v1.ManagementService/ReportMetrics',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_mgmtservice_pb.ReportMetricsRequest,
    responseType: sandboxes_api_v1_mgmtservice_pb.ReportMetricsResponse,
    requestSerialize: serialize_sandboxes_api_v1_ReportMetricsRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_ReportMetricsRequest,
    responseSerialize: serialize_sandboxes_api_v1_ReportMetricsResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_ReportMetricsResponse,
  },
};

exports.ManagementServiceClient = grpc.makeGenericClientConstructor(ManagementServiceService, 'ManagementService');
