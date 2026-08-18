// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sandboxes_api_v1_infoservice_pb = require('../../../sandboxes/api/v1/infoservice_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var sandboxes_api_v1_app_pb = require('../../../sandboxes/api/v1/app_pb.js');
var sandboxes_api_v1_org_pb = require('../../../sandboxes/api/v1/org_pb.js');
var sandboxes_api_v1_resource_pb = require('../../../sandboxes/api/v1/resource_pb.js');
var sandboxes_api_v1_sandbox_pb = require('../../../sandboxes/api/v1/sandbox_pb.js');
var sandboxes_api_v1_secret_pb = require('../../../sandboxes/api/v1/secret_pb.js');
var sandboxes_api_v1_system_pb = require('../../../sandboxes/api/v1/system_pb.js');
var sandboxes_api_v1_user_pb = require('../../../sandboxes/api/v1/user_pb.js');

function serialize_sandboxes_api_v1_ListSandboxInfoRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_infoservice_pb.ListSandboxInfoRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListSandboxInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListSandboxInfoRequest(buffer_arg) {
  return sandboxes_api_v1_infoservice_pb.ListSandboxInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ListSandboxInfoResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_infoservice_pb.ListSandboxInfoResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListSandboxInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListSandboxInfoResponse(buffer_arg) {
  return sandboxes_api_v1_infoservice_pb.ListSandboxInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Information API.
var InformationServiceService = exports.InformationServiceService = {
  listSandboxInfo: {
    path: '/sandboxes.api.v1.InformationService/ListSandboxInfo',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_infoservice_pb.ListSandboxInfoRequest,
    responseType: sandboxes_api_v1_infoservice_pb.ListSandboxInfoResponse,
    requestSerialize: serialize_sandboxes_api_v1_ListSandboxInfoRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_ListSandboxInfoRequest,
    responseSerialize: serialize_sandboxes_api_v1_ListSandboxInfoResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_ListSandboxInfoResponse,
  },
};

exports.InformationServiceClient = grpc.makeGenericClientConstructor(InformationServiceService, 'InformationService');
