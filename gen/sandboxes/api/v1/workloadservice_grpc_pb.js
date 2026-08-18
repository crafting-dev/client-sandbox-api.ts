// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sandboxes_api_v1_workloadservice_pb = require('../../../sandboxes/api/v1/workloadservice_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var sandboxes_api_v1_workload_pb = require('../../../sandboxes/api/v1/workload_pb.js');
var sandboxes_api_v1_resource_pb = require('../../../sandboxes/api/v1/resource_pb.js');
var sandboxes_api_v1_resource_llmsession_pb = require('../../../sandboxes/api/v1/resource_llmsession_pb.js');

function serialize_sandboxes_api_v1_StreamLogEvent(arg) {
  if (!(arg instanceof sandboxes_api_v1_workloadservice_pb.StreamLogEvent)) {
    throw new Error('Expected argument of type sandboxes.api.v1.StreamLogEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_StreamLogEvent(buffer_arg) {
  return sandboxes_api_v1_workloadservice_pb.StreamLogEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_StreamLogRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_workloadservice_pb.StreamLogRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.StreamLogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_StreamLogRequest(buffer_arg) {
  return sandboxes_api_v1_workloadservice_pb.StreamLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_TrafficEventEntry(arg) {
  if (!(arg instanceof sandboxes_api_v1_workload_pb.TrafficEventEntry)) {
    throw new Error('Expected argument of type sandboxes.api.v1.TrafficEventEntry');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_TrafficEventEntry(buffer_arg) {
  return sandboxes_api_v1_workload_pb.TrafficEventEntry.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_TrafficInjection(arg) {
  if (!(arg instanceof sandboxes_api_v1_workloadservice_pb.TrafficInjection)) {
    throw new Error('Expected argument of type sandboxes.api.v1.TrafficInjection');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_TrafficInjection(buffer_arg) {
  return sandboxes_api_v1_workloadservice_pb.TrafficInjection.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_WorkloadActionRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_workloadservice_pb.WorkloadActionRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.WorkloadActionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_WorkloadActionRequest(buffer_arg) {
  return sandboxes_api_v1_workloadservice_pb.WorkloadActionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_WorkloadActionResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_workloadservice_pb.WorkloadActionResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.WorkloadActionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_WorkloadActionResponse(buffer_arg) {
  return sandboxes_api_v1_workloadservice_pb.WorkloadActionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Workload API.
var WorkloadServiceService = exports.WorkloadServiceService = {
  // Perform a action supported by the workload.
// The action is opaque to the API and is workload specific.
workloadAction: {
    path: '/sandboxes.api.v1.WorkloadService/WorkloadAction',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_workloadservice_pb.WorkloadActionRequest,
    responseType: sandboxes_api_v1_workloadservice_pb.WorkloadActionResponse,
    requestSerialize: serialize_sandboxes_api_v1_WorkloadActionRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_WorkloadActionRequest,
    responseSerialize: serialize_sandboxes_api_v1_WorkloadActionResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_WorkloadActionResponse,
  },
  // Tail/follow logs of a process from a workload.
streamLog: {
    path: '/sandboxes.api.v1.WorkloadService/StreamLog',
    requestStream: false,
    responseStream: true,
    requestType: sandboxes_api_v1_workloadservice_pb.StreamLogRequest,
    responseType: sandboxes_api_v1_workloadservice_pb.StreamLogEvent,
    requestSerialize: serialize_sandboxes_api_v1_StreamLogRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_StreamLogRequest,
    responseSerialize: serialize_sandboxes_api_v1_StreamLogEvent,
    responseDeserialize: deserialize_sandboxes_api_v1_StreamLogEvent,
  },
  // Connect to a port of a workload and inject some traffic.
// The client must send the TrafficInjection in two steps:
//   1. Send a TrafficInjection.Connect to target a port of a specified workload
//   2. Send a stream of TrafficInjection.Content.
// The API server will forward back any received messages.
// Particularly, for chunked or streamed payload, the client must specify
//   TrafficInjection.Content.http_request.body.stream_id
// In the request and upcoming stream/chunked data.
// When stream_id is specified in the request, the API server relies on header
// "Transfer-Encoding: chunked" to determine whether the payload is chunked or streamed.
// Similarly, the API server expects the behavior comforming to the HTTP standard when
// parsing the response.
injectTraffic: {
    path: '/sandboxes.api.v1.WorkloadService/InjectTraffic',
    requestStream: true,
    responseStream: true,
    requestType: sandboxes_api_v1_workloadservice_pb.TrafficInjection,
    responseType: sandboxes_api_v1_workload_pb.TrafficEventEntry,
    requestSerialize: serialize_sandboxes_api_v1_TrafficInjection,
    requestDeserialize: deserialize_sandboxes_api_v1_TrafficInjection,
    responseSerialize: serialize_sandboxes_api_v1_TrafficEventEntry,
    responseDeserialize: deserialize_sandboxes_api_v1_TrafficEventEntry,
  },
};

exports.WorkloadServiceClient = grpc.makeGenericClientConstructor(WorkloadServiceService, 'WorkloadService');
