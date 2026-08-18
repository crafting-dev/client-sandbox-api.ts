// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sandboxes_api_v1_workspaceservice_pb = require('../../../sandboxes/api/v1/workspaceservice_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var sandboxes_api_v1_workload_pb = require('../../../sandboxes/api/v1/workload_pb.js');
var sandboxes_api_v1_org_pb = require('../../../sandboxes/api/v1/org_pb.js');
var sandboxes_api_v1_process_pb = require('../../../sandboxes/api/v1/process_pb.js');
var sandboxes_api_v1_resource_sourcecontrol_pb = require('../../../sandboxes/api/v1/resource_sourcecontrol_pb.js');

function serialize_sandboxes_api_v1_CurrentSetupRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_workspaceservice_pb.CurrentSetupRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.CurrentSetupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_CurrentSetupRequest(buffer_arg) {
  return sandboxes_api_v1_workspaceservice_pb.CurrentSetupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_CurrentSetupResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_workspaceservice_pb.CurrentSetupResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.CurrentSetupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_CurrentSetupResponse(buffer_arg) {
  return sandboxes_api_v1_workspaceservice_pb.CurrentSetupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_IssueTokenRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_workspaceservice_pb.IssueTokenRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.IssueTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_IssueTokenRequest(buffer_arg) {
  return sandboxes_api_v1_workspaceservice_pb.IssueTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_IssueTokenResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_workspaceservice_pb.IssueTokenResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.IssueTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_IssueTokenResponse(buffer_arg) {
  return sandboxes_api_v1_workspaceservice_pb.IssueTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_MountOverlayRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_workspaceservice_pb.MountOverlayRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.MountOverlayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_MountOverlayRequest(buffer_arg) {
  return sandboxes_api_v1_workspaceservice_pb.MountOverlayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_MountOverlayResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_workspaceservice_pb.MountOverlayResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.MountOverlayResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_MountOverlayResponse(buffer_arg) {
  return sandboxes_api_v1_workspaceservice_pb.MountOverlayResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ReportJetbrainsRemoteDevServerStatusRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_workspaceservice_pb.ReportJetbrainsRemoteDevServerStatusRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ReportJetbrainsRemoteDevServerStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ReportJetbrainsRemoteDevServerStatusRequest(buffer_arg) {
  return sandboxes_api_v1_workspaceservice_pb.ReportJetbrainsRemoteDevServerStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ReportJetbrainsRemoteDevServerStatusResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_workspaceservice_pb.ReportJetbrainsRemoteDevServerStatusResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ReportJetbrainsRemoteDevServerStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ReportJetbrainsRemoteDevServerStatusResponse(buffer_arg) {
  return sandboxes_api_v1_workspaceservice_pb.ReportJetbrainsRemoteDevServerStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_SourceControlCredentialRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_workspaceservice_pb.SourceControlCredentialRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.SourceControlCredentialRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_SourceControlCredentialRequest(buffer_arg) {
  return sandboxes_api_v1_workspaceservice_pb.SourceControlCredentialRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_SourceControlCredentialResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_workspaceservice_pb.SourceControlCredentialResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.SourceControlCredentialResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_SourceControlCredentialResponse(buffer_arg) {
  return sandboxes_api_v1_workspaceservice_pb.SourceControlCredentialResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_SyncStreamCommand(arg) {
  if (!(arg instanceof sandboxes_api_v1_workspaceservice_pb.SyncStreamCommand)) {
    throw new Error('Expected argument of type sandboxes.api.v1.SyncStreamCommand');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_SyncStreamCommand(buffer_arg) {
  return sandboxes_api_v1_workspaceservice_pb.SyncStreamCommand.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_SyncStreamEvent(arg) {
  if (!(arg instanceof sandboxes_api_v1_workspaceservice_pb.SyncStreamEvent)) {
    throw new Error('Expected argument of type sandboxes.api.v1.SyncStreamEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_SyncStreamEvent(buffer_arg) {
  return sandboxes_api_v1_workspaceservice_pb.SyncStreamEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_WriteFileRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_workspaceservice_pb.WriteFileRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.WriteFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_WriteFileRequest(buffer_arg) {
  return sandboxes_api_v1_workspaceservice_pb.WriteFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_WriteFileResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_workspaceservice_pb.WriteFileResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.WriteFileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_WriteFileResponse(buffer_arg) {
  return sandboxes_api_v1_workspaceservice_pb.WriteFileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The service is exposed into the user container when the workload is running
// as a workspace.
var WorkspaceServiceService = exports.WorkspaceServiceService = {
  // A long-running stream syncing states/events bidirectionally.
syncStream: {
    path: '/sandboxes.api.v1.WorkspaceService/SyncStream',
    requestStream: true,
    responseStream: true,
    requestType: sandboxes_api_v1_workspaceservice_pb.SyncStreamCommand,
    responseType: sandboxes_api_v1_workspaceservice_pb.SyncStreamEvent,
    requestSerialize: serialize_sandboxes_api_v1_SyncStreamCommand,
    requestDeserialize: deserialize_sandboxes_api_v1_SyncStreamCommand,
    responseSerialize: serialize_sandboxes_api_v1_SyncStreamEvent,
    responseDeserialize: deserialize_sandboxes_api_v1_SyncStreamEvent,
  },
  // Returns the current workspace setup.
currentSetup: {
    path: '/sandboxes.api.v1.WorkspaceService/CurrentSetup',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_workspaceservice_pb.CurrentSetupRequest,
    responseType: sandboxes_api_v1_workspaceservice_pb.CurrentSetupResponse,
    requestSerialize: serialize_sandboxes_api_v1_CurrentSetupRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_CurrentSetupRequest,
    responseSerialize: serialize_sandboxes_api_v1_CurrentSetupResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_CurrentSetupResponse,
  },
  // Issue a JWT token for the current user.
issueToken: {
    path: '/sandboxes.api.v1.WorkspaceService/IssueToken',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_workspaceservice_pb.IssueTokenRequest,
    responseType: sandboxes_api_v1_workspaceservice_pb.IssueTokenResponse,
    requestSerialize: serialize_sandboxes_api_v1_IssueTokenRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_IssueTokenRequest,
    responseSerialize: serialize_sandboxes_api_v1_IssueTokenResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_IssueTokenResponse,
  },
  // Retrieve credential for source control provider based on the current checkout path.
sourceControlCredential: {
    path: '/sandboxes.api.v1.WorkspaceService/SourceControlCredential',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_workspaceservice_pb.SourceControlCredentialRequest,
    responseType: sandboxes_api_v1_workspaceservice_pb.SourceControlCredentialResponse,
    requestSerialize: serialize_sandboxes_api_v1_SourceControlCredentialRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_SourceControlCredentialRequest,
    responseSerialize: serialize_sandboxes_api_v1_SourceControlCredentialResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_SourceControlCredentialResponse,
  },
  // Use out container root to mount overlay filesystem to the user container.
mountOverlay: {
    path: '/sandboxes.api.v1.WorkspaceService/MountOverlay',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_workspaceservice_pb.MountOverlayRequest,
    responseType: sandboxes_api_v1_workspaceservice_pb.MountOverlayResponse,
    requestSerialize: serialize_sandboxes_api_v1_MountOverlayRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_MountOverlayRequest,
    responseSerialize: serialize_sandboxes_api_v1_MountOverlayResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_MountOverlayResponse,
  },
  // Using the root user of out container to write file.
writeFile: {
    path: '/sandboxes.api.v1.WorkspaceService/WriteFile',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_workspaceservice_pb.WriteFileRequest,
    responseType: sandboxes_api_v1_workspaceservice_pb.WriteFileResponse,
    requestSerialize: serialize_sandboxes_api_v1_WriteFileRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_WriteFileRequest,
    responseSerialize: serialize_sandboxes_api_v1_WriteFileResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_WriteFileResponse,
  },
  // Report jetbrains dev server status.
reportJetbrainsRemoteDevServerStatus: {
    path: '/sandboxes.api.v1.WorkspaceService/ReportJetbrainsRemoteDevServerStatus',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_workspaceservice_pb.ReportJetbrainsRemoteDevServerStatusRequest,
    responseType: sandboxes_api_v1_workspaceservice_pb.ReportJetbrainsRemoteDevServerStatusResponse,
    requestSerialize: serialize_sandboxes_api_v1_ReportJetbrainsRemoteDevServerStatusRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_ReportJetbrainsRemoteDevServerStatusRequest,
    responseSerialize: serialize_sandboxes_api_v1_ReportJetbrainsRemoteDevServerStatusResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_ReportJetbrainsRemoteDevServerStatusResponse,
  },
};

exports.WorkspaceServiceClient = grpc.makeGenericClientConstructor(WorkspaceServiceService, 'WorkspaceService');
