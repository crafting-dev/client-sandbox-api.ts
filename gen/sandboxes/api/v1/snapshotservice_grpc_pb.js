// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sandboxes_api_v1_snapshotservice_pb = require('../../../sandboxes/api/v1/snapshotservice_pb.js');
var sandboxes_api_v1_snapshot_pb = require('../../../sandboxes/api/v1/snapshot_pb.js');

function serialize_sandboxes_api_v1_CopySnapshotRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_snapshotservice_pb.CopySnapshotRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.CopySnapshotRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_CopySnapshotRequest(buffer_arg) {
  return sandboxes_api_v1_snapshotservice_pb.CopySnapshotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_CopySnapshotResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_snapshotservice_pb.CopySnapshotResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.CopySnapshotResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_CopySnapshotResponse(buffer_arg) {
  return sandboxes_api_v1_snapshotservice_pb.CopySnapshotResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_DeleteSnapshotRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_snapshotservice_pb.DeleteSnapshotRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.DeleteSnapshotRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_DeleteSnapshotRequest(buffer_arg) {
  return sandboxes_api_v1_snapshotservice_pb.DeleteSnapshotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_DeleteSnapshotResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_snapshotservice_pb.DeleteSnapshotResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.DeleteSnapshotResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_DeleteSnapshotResponse(buffer_arg) {
  return sandboxes_api_v1_snapshotservice_pb.DeleteSnapshotResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ListSnapshotsRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_snapshotservice_pb.ListSnapshotsRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListSnapshotsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListSnapshotsRequest(buffer_arg) {
  return sandboxes_api_v1_snapshotservice_pb.ListSnapshotsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ListSnapshotsResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_snapshotservice_pb.ListSnapshotsResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListSnapshotsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListSnapshotsResponse(buffer_arg) {
  return sandboxes_api_v1_snapshotservice_pb.ListSnapshotsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_MoveSnapshotRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_snapshotservice_pb.MoveSnapshotRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.MoveSnapshotRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_MoveSnapshotRequest(buffer_arg) {
  return sandboxes_api_v1_snapshotservice_pb.MoveSnapshotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_MoveSnapshotResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_snapshotservice_pb.MoveSnapshotResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.MoveSnapshotResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_MoveSnapshotResponse(buffer_arg) {
  return sandboxes_api_v1_snapshotservice_pb.MoveSnapshotResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Snapshot Management API.
// These APIs are not for creating snapshots.
var SnapshotManagementServiceService = exports.SnapshotManagementServiceService = {
  listSnapshots: {
    path: '/sandboxes.api.v1.SnapshotManagementService/ListSnapshots',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_snapshotservice_pb.ListSnapshotsRequest,
    responseType: sandboxes_api_v1_snapshotservice_pb.ListSnapshotsResponse,
    requestSerialize: serialize_sandboxes_api_v1_ListSnapshotsRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_ListSnapshotsRequest,
    responseSerialize: serialize_sandboxes_api_v1_ListSnapshotsResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_ListSnapshotsResponse,
  },
  copySnapshot: {
    path: '/sandboxes.api.v1.SnapshotManagementService/CopySnapshot',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_snapshotservice_pb.CopySnapshotRequest,
    responseType: sandboxes_api_v1_snapshotservice_pb.CopySnapshotResponse,
    requestSerialize: serialize_sandboxes_api_v1_CopySnapshotRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_CopySnapshotRequest,
    responseSerialize: serialize_sandboxes_api_v1_CopySnapshotResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_CopySnapshotResponse,
  },
  deleteSnapshot: {
    path: '/sandboxes.api.v1.SnapshotManagementService/DeleteSnapshot',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_snapshotservice_pb.DeleteSnapshotRequest,
    responseType: sandboxes_api_v1_snapshotservice_pb.DeleteSnapshotResponse,
    requestSerialize: serialize_sandboxes_api_v1_DeleteSnapshotRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_DeleteSnapshotRequest,
    responseSerialize: serialize_sandboxes_api_v1_DeleteSnapshotResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_DeleteSnapshotResponse,
  },
  moveSnapshot: {
    path: '/sandboxes.api.v1.SnapshotManagementService/MoveSnapshot',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_snapshotservice_pb.MoveSnapshotRequest,
    responseType: sandboxes_api_v1_snapshotservice_pb.MoveSnapshotResponse,
    requestSerialize: serialize_sandboxes_api_v1_MoveSnapshotRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_MoveSnapshotRequest,
    responseSerialize: serialize_sandboxes_api_v1_MoveSnapshotResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_MoveSnapshotResponse,
  },
};

exports.SnapshotManagementServiceClient = grpc.makeGenericClientConstructor(SnapshotManagementServiceService, 'SnapshotManagementService');
