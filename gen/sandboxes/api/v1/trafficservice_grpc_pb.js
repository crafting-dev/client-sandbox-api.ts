// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sandboxes_api_v1_trafficservice_pb = require('../../../sandboxes/api/v1/trafficservice_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var sandboxes_api_v1_resource_pb = require('../../../sandboxes/api/v1/resource_pb.js');
var sandboxes_api_v1_resource_trafficsession_pb = require('../../../sandboxes/api/v1/resource_trafficsession_pb.js');
var sandboxes_api_v1_workload_pb = require('../../../sandboxes/api/v1/workload_pb.js');

function serialize_sandboxes_api_v1_CreateTrafficSessionRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_trafficservice_pb.CreateTrafficSessionRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.CreateTrafficSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_CreateTrafficSessionRequest(buffer_arg) {
  return sandboxes_api_v1_trafficservice_pb.CreateTrafficSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_CreateTrafficSessionResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_trafficservice_pb.CreateTrafficSessionResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.CreateTrafficSessionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_CreateTrafficSessionResponse(buffer_arg) {
  return sandboxes_api_v1_trafficservice_pb.CreateTrafficSessionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_DeleteTrafficSessionRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_trafficservice_pb.DeleteTrafficSessionRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.DeleteTrafficSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_DeleteTrafficSessionRequest(buffer_arg) {
  return sandboxes_api_v1_trafficservice_pb.DeleteTrafficSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_DeleteTrafficSessionResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_trafficservice_pb.DeleteTrafficSessionResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.DeleteTrafficSessionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_DeleteTrafficSessionResponse(buffer_arg) {
  return sandboxes_api_v1_trafficservice_pb.DeleteTrafficSessionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ListTrafficSessionsRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_trafficservice_pb.ListTrafficSessionsRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListTrafficSessionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListTrafficSessionsRequest(buffer_arg) {
  return sandboxes_api_v1_trafficservice_pb.ListTrafficSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ListTrafficSessionsResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_trafficservice_pb.ListTrafficSessionsResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListTrafficSessionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListTrafficSessionsResponse(buffer_arg) {
  return sandboxes_api_v1_trafficservice_pb.ListTrafficSessionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_QueryTrafficEventsRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_trafficservice_pb.QueryTrafficEventsRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.QueryTrafficEventsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_QueryTrafficEventsRequest(buffer_arg) {
  return sandboxes_api_v1_trafficservice_pb.QueryTrafficEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_QueryTrafficEventsResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_trafficservice_pb.QueryTrafficEventsResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.QueryTrafficEventsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_QueryTrafficEventsResponse(buffer_arg) {
  return sandboxes_api_v1_trafficservice_pb.QueryTrafficEventsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_UpdateTrafficSessionRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_trafficservice_pb.UpdateTrafficSessionRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.UpdateTrafficSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_UpdateTrafficSessionRequest(buffer_arg) {
  return sandboxes_api_v1_trafficservice_pb.UpdateTrafficSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_UpdateTrafficSessionResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_trafficservice_pb.UpdateTrafficSessionResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.UpdateTrafficSessionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_UpdateTrafficSessionResponse(buffer_arg) {
  return sandboxes_api_v1_trafficservice_pb.UpdateTrafficSessionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Traffic API.
var TrafficServiceService = exports.TrafficServiceService = {
  // Queries existing traffic recording sessions in the specified org.
listTrafficSessions: {
    path: '/sandboxes.api.v1.TrafficService/ListTrafficSessions',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_trafficservice_pb.ListTrafficSessionsRequest,
    responseType: sandboxes_api_v1_trafficservice_pb.ListTrafficSessionsResponse,
    requestSerialize: serialize_sandboxes_api_v1_ListTrafficSessionsRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_ListTrafficSessionsRequest,
    responseSerialize: serialize_sandboxes_api_v1_ListTrafficSessionsResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_ListTrafficSessionsResponse,
  },
  // Start a traffic recording session by creating the session and activating it
// on the specified sandbox.
// It will fail if the sandbox already has an active recording session.
createTrafficSession: {
    path: '/sandboxes.api.v1.TrafficService/CreateTrafficSession',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_trafficservice_pb.CreateTrafficSessionRequest,
    responseType: sandboxes_api_v1_trafficservice_pb.CreateTrafficSessionResponse,
    requestSerialize: serialize_sandboxes_api_v1_CreateTrafficSessionRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_CreateTrafficSessionRequest,
    responseSerialize: serialize_sandboxes_api_v1_CreateTrafficSessionResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_CreateTrafficSessionResponse,
  },
  // Update the recording session. Currently it's only used to complete the
// recording session.
// It will fail if the specified session is not currently active on a sandbox.
updateTrafficSession: {
    path: '/sandboxes.api.v1.TrafficService/UpdateTrafficSession',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_trafficservice_pb.UpdateTrafficSessionRequest,
    responseType: sandboxes_api_v1_trafficservice_pb.UpdateTrafficSessionResponse,
    requestSerialize: serialize_sandboxes_api_v1_UpdateTrafficSessionRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_UpdateTrafficSessionRequest,
    responseSerialize: serialize_sandboxes_api_v1_UpdateTrafficSessionResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_UpdateTrafficSessionResponse,
  },
  // Delete selected recording session. All active sessions will be filtered out
// automatically.
deleteTrafficSession: {
    path: '/sandboxes.api.v1.TrafficService/DeleteTrafficSession',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_trafficservice_pb.DeleteTrafficSessionRequest,
    responseType: sandboxes_api_v1_trafficservice_pb.DeleteTrafficSessionResponse,
    requestSerialize: serialize_sandboxes_api_v1_DeleteTrafficSessionRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_DeleteTrafficSessionRequest,
    responseSerialize: serialize_sandboxes_api_v1_DeleteTrafficSessionResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_DeleteTrafficSessionResponse,
  },
  // Query the recorded events in the specified session.
queryTrafficEvents: {
    path: '/sandboxes.api.v1.TrafficService/QueryTrafficEvents',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_trafficservice_pb.QueryTrafficEventsRequest,
    responseType: sandboxes_api_v1_trafficservice_pb.QueryTrafficEventsResponse,
    requestSerialize: serialize_sandboxes_api_v1_QueryTrafficEventsRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_QueryTrafficEventsRequest,
    responseSerialize: serialize_sandboxes_api_v1_QueryTrafficEventsResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_QueryTrafficEventsResponse,
  },
};

exports.TrafficServiceClient = grpc.makeGenericClientConstructor(TrafficServiceService, 'TrafficService');
