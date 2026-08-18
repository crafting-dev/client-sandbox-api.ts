// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sandboxes_api_v1_llmservice_pb = require('../../../sandboxes/api/v1/llmservice_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var sandboxes_api_v1_common_pb = require('../../../sandboxes/api/v1/common_pb.js');
var sandboxes_api_v1_object_pb = require('../../../sandboxes/api/v1/object_pb.js');
var sandboxes_api_v1_resource_pb = require('../../../sandboxes/api/v1/resource_pb.js');
var sandboxes_api_v1_resource_llmsession_pb = require('../../../sandboxes/api/v1/resource_llmsession_pb.js');

function serialize_sandboxes_api_v1_CancelLLMSessionRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_llmservice_pb.CancelLLMSessionRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.CancelLLMSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_CancelLLMSessionRequest(buffer_arg) {
  return sandboxes_api_v1_llmservice_pb.CancelLLMSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_CancelLLMSessionResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_llmservice_pb.CancelLLMSessionResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.CancelLLMSessionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_CancelLLMSessionResponse(buffer_arg) {
  return sandboxes_api_v1_llmservice_pb.CancelLLMSessionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_LLMSessionStreamEvent(arg) {
  if (!(arg instanceof sandboxes_api_v1_llmservice_pb.LLMSessionStreamEvent)) {
    throw new Error('Expected argument of type sandboxes.api.v1.LLMSessionStreamEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_LLMSessionStreamEvent(buffer_arg) {
  return sandboxes_api_v1_llmservice_pb.LLMSessionStreamEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_LLMSessionStreamRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_llmservice_pb.LLMSessionStreamRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.LLMSessionStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_LLMSessionStreamRequest(buffer_arg) {
  return sandboxes_api_v1_llmservice_pb.LLMSessionStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ListLLMSessionsRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_llmservice_pb.ListLLMSessionsRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListLLMSessionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListLLMSessionsRequest(buffer_arg) {
  return sandboxes_api_v1_llmservice_pb.ListLLMSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ListLLMSessionsResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_llmservice_pb.ListLLMSessionsResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListLLMSessionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListLLMSessionsResponse(buffer_arg) {
  return sandboxes_api_v1_llmservice_pb.ListLLMSessionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_QueryLLMSessionMessagesRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_llmservice_pb.QueryLLMSessionMessagesRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.QueryLLMSessionMessagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_QueryLLMSessionMessagesRequest(buffer_arg) {
  return sandboxes_api_v1_llmservice_pb.QueryLLMSessionMessagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_QueryLLMSessionMessagesResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_llmservice_pb.QueryLLMSessionMessagesResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.QueryLLMSessionMessagesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_QueryLLMSessionMessagesResponse(buffer_arg) {
  return sandboxes_api_v1_llmservice_pb.QueryLLMSessionMessagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ReplyLLMSessionRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_llmservice_pb.ReplyLLMSessionRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ReplyLLMSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ReplyLLMSessionRequest(buffer_arg) {
  return sandboxes_api_v1_llmservice_pb.ReplyLLMSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ReplyLLMSessionResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_llmservice_pb.ReplyLLMSessionResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ReplyLLMSessionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ReplyLLMSessionResponse(buffer_arg) {
  return sandboxes_api_v1_llmservice_pb.ReplyLLMSessionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_StartLLMSessionRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_llmservice_pb.StartLLMSessionRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.StartLLMSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_StartLLMSessionRequest(buffer_arg) {
  return sandboxes_api_v1_llmservice_pb.StartLLMSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_StartLLMSessionResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_llmservice_pb.StartLLMSessionResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.StartLLMSessionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_StartLLMSessionResponse(buffer_arg) {
  return sandboxes_api_v1_llmservice_pb.StartLLMSessionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The LLM (Large Language Model) related service.
// For List and Delete, use Resource APIs.
var LLMServiceService = exports.LLMServiceService = {
  // List and filter LLMSession resources.
// The returned sessions don't include messages. Use QueryLLMSessionMessages for messages.
listLLMSessions: {
    path: '/sandboxes.api.v1.LLMService/ListLLMSessions',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_llmservice_pb.ListLLMSessionsRequest,
    responseType: sandboxes_api_v1_llmservice_pb.ListLLMSessionsResponse,
    requestSerialize: serialize_sandboxes_api_v1_ListLLMSessionsRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_ListLLMSessionsRequest,
    responseSerialize: serialize_sandboxes_api_v1_ListLLMSessionsResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_ListLLMSessionsResponse,
  },
  // Start a new LLMSession.
startLLMSession: {
    path: '/sandboxes.api.v1.LLMService/StartLLMSession',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_llmservice_pb.StartLLMSessionRequest,
    responseType: sandboxes_api_v1_llmservice_pb.StartLLMSessionResponse,
    requestSerialize: serialize_sandboxes_api_v1_StartLLMSessionRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_StartLLMSessionRequest,
    responseSerialize: serialize_sandboxes_api_v1_StartLLMSessionResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_StartLLMSessionResponse,
  },
  // Reply a message to the LLMSession.
// The session must be in STOPPED state. If the session was previously canceled, the reply
// will automatically resume the session by discarding messages after the cancellation point
// and trimming trailing tool calls before appending the new message.
replyLLMSession: {
    path: '/sandboxes.api.v1.LLMService/ReplyLLMSession',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_llmservice_pb.ReplyLLMSessionRequest,
    responseType: sandboxes_api_v1_llmservice_pb.ReplyLLMSessionResponse,
    requestSerialize: serialize_sandboxes_api_v1_ReplyLLMSessionRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_ReplyLLMSessionRequest,
    responseSerialize: serialize_sandboxes_api_v1_ReplyLLMSessionResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_ReplyLLMSessionResponse,
  },
  // Cancel a running LLMSession.
// An LLMSession is eligible for cancellation:
// - The session is in RUNNING or PENDING state.
// Otherwise this RPC has no effect (not a failure).
cancelLLMSession: {
    path: '/sandboxes.api.v1.LLMService/CancelLLMSession',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_llmservice_pb.CancelLLMSessionRequest,
    responseType: sandboxes_api_v1_llmservice_pb.CancelLLMSessionResponse,
    requestSerialize: serialize_sandboxes_api_v1_CancelLLMSessionRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_CancelLLMSessionRequest,
    responseSerialize: serialize_sandboxes_api_v1_CancelLLMSessionResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_CancelLLMSessionResponse,
  },
  // A server-to-client streaming for start/subscribe a conversation session.
streamLLMSession: {
    path: '/sandboxes.api.v1.LLMService/StreamLLMSession',
    requestStream: false,
    responseStream: true,
    requestType: sandboxes_api_v1_llmservice_pb.LLMSessionStreamRequest,
    responseType: sandboxes_api_v1_llmservice_pb.LLMSessionStreamEvent,
    requestSerialize: serialize_sandboxes_api_v1_LLMSessionStreamRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_LLMSessionStreamRequest,
    responseSerialize: serialize_sandboxes_api_v1_LLMSessionStreamEvent,
    responseDeserialize: deserialize_sandboxes_api_v1_LLMSessionStreamEvent,
  },
  // Query messages from an LLMSession.
// This queries existing messages only.
queryLLMSessionMessages: {
    path: '/sandboxes.api.v1.LLMService/QueryLLMSessionMessages',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_llmservice_pb.QueryLLMSessionMessagesRequest,
    responseType: sandboxes_api_v1_llmservice_pb.QueryLLMSessionMessagesResponse,
    requestSerialize: serialize_sandboxes_api_v1_QueryLLMSessionMessagesRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_QueryLLMSessionMessagesRequest,
    responseSerialize: serialize_sandboxes_api_v1_QueryLLMSessionMessagesResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_QueryLLMSessionMessagesResponse,
  },
};

exports.LLMServiceClient = grpc.makeGenericClientConstructor(LLMServiceService, 'LLMService');
