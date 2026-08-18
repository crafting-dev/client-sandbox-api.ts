// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sandboxes_api_v1_systemadminservice_pb = require('../../../sandboxes/api/v1/systemadminservice_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var sandboxes_api_v1_common_pb = require('../../../sandboxes/api/v1/common_pb.js');
var sandboxes_api_v1_sandbox_pb = require('../../../sandboxes/api/v1/sandbox_pb.js');
var sandboxes_api_v1_org_pb = require('../../../sandboxes/api/v1/org_pb.js');
var sandboxes_api_v1_user_pb = require('../../../sandboxes/api/v1/user_pb.js');
var sandboxes_api_v1_resource_pb = require('../../../sandboxes/api/v1/resource_pb.js');
var sandboxes_api_v1_resource_system_pb = require('../../../sandboxes/api/v1/resource_system_pb.js');
var sandboxes_api_v1_resource_nodepool_pb = require('../../../sandboxes/api/v1/resource_nodepool_pb.js');
var sandboxes_api_v1_systeminfra_pb = require('../../../sandboxes/api/v1/systeminfra_pb.js');

function serialize_sandboxes_api_v1_CreateK8sNodePoolRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.CreateK8sNodePoolRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.CreateK8sNodePoolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_CreateK8sNodePoolRequest(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.CreateK8sNodePoolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_CreateK8sNodePoolResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.CreateK8sNodePoolResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.CreateK8sNodePoolResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_CreateK8sNodePoolResponse(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.CreateK8sNodePoolResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_DecodeRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.DecodeRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.DecodeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_DecodeRequest(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.DecodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_DecodeResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.DecodeResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.DecodeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_DecodeResponse(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.DecodeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_DeleteK8sNodePoolRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.DeleteK8sNodePoolRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.DeleteK8sNodePoolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_DeleteK8sNodePoolRequest(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.DeleteK8sNodePoolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_DeleteK8sNodePoolResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.DeleteK8sNodePoolResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.DeleteK8sNodePoolResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_DeleteK8sNodePoolResponse(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.DeleteK8sNodePoolResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_EncodeRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.EncodeRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.EncodeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_EncodeRequest(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.EncodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_EncodeResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.EncodeResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.EncodeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_EncodeResponse(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.EncodeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_InfraActionRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.InfraActionRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.InfraActionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_InfraActionRequest(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.InfraActionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_InfraActionResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.InfraActionResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.InfraActionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_InfraActionResponse(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.InfraActionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ListK8sNodePoolsRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.ListK8sNodePoolsRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListK8sNodePoolsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListK8sNodePoolsRequest(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.ListK8sNodePoolsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ListK8sNodePoolsResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.ListK8sNodePoolsResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListK8sNodePoolsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListK8sNodePoolsResponse(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.ListK8sNodePoolsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ListSystemAlertsRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.ListSystemAlertsRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListSystemAlertsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListSystemAlertsRequest(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.ListSystemAlertsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_ListSystemAlertsResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.ListSystemAlertsResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.ListSystemAlertsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_ListSystemAlertsResponse(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.ListSystemAlertsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_PreviewK8sNodePoolUpdateRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.PreviewK8sNodePoolUpdateRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.PreviewK8sNodePoolUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_PreviewK8sNodePoolUpdateRequest(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.PreviewK8sNodePoolUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_PreviewK8sNodePoolUpdateResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.PreviewK8sNodePoolUpdateResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_PreviewK8sNodePoolUpdateResponse(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.PreviewK8sNodePoolUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_QueryInfraRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.QueryInfraRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.QueryInfraRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_QueryInfraRequest(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.QueryInfraRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_QueryInfraResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.QueryInfraResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.QueryInfraResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_QueryInfraResponse(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.QueryInfraResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_QueryNodeMetricsRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.QueryNodeMetricsRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.QueryNodeMetricsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_QueryNodeMetricsRequest(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.QueryNodeMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_QueryNodeMetricsResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.QueryNodeMetricsResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.QueryNodeMetricsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_QueryNodeMetricsResponse(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.QueryNodeMetricsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_QueryNodePoolMetricsRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.QueryNodePoolMetricsRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.QueryNodePoolMetricsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_QueryNodePoolMetricsRequest(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.QueryNodePoolMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_QueryNodePoolMetricsResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.QueryNodePoolMetricsResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.QueryNodePoolMetricsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_QueryNodePoolMetricsResponse(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.QueryNodePoolMetricsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_QueryNodeStatusRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.QueryNodeStatusRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.QueryNodeStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_QueryNodeStatusRequest(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.QueryNodeStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_QueryNodeStatusResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.QueryNodeStatusResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.QueryNodeStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_QueryNodeStatusResponse(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.QueryNodeStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_QuerySystemRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.QuerySystemRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.QuerySystemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_QuerySystemRequest(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.QuerySystemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_QuerySystemResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.QuerySystemResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.QuerySystemResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_QuerySystemResponse(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.QuerySystemResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_QueryWorkloadMetricsRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.QueryWorkloadMetricsRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.QueryWorkloadMetricsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_QueryWorkloadMetricsRequest(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.QueryWorkloadMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_QueryWorkloadMetricsResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.QueryWorkloadMetricsResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.QueryWorkloadMetricsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_QueryWorkloadMetricsResponse(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.QueryWorkloadMetricsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_UpdateK8sNodePoolRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.UpdateK8sNodePoolRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.UpdateK8sNodePoolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_UpdateK8sNodePoolRequest(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.UpdateK8sNodePoolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_UpdateK8sNodePoolResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.UpdateK8sNodePoolResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.UpdateK8sNodePoolResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_UpdateK8sNodePoolResponse(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.UpdateK8sNodePoolResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_UpdateSystemRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.UpdateSystemRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.UpdateSystemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_UpdateSystemRequest(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.UpdateSystemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_UpdateSystemResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_systemadminservice_pb.UpdateSystemResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.UpdateSystemResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_UpdateSystemResponse(buffer_arg) {
  return sandboxes_api_v1_systemadminservice_pb.UpdateSystemResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The System Administration Service served by a dedicated gRPC server.
// This service should be isolated from other services with
// - A dedicated sub-domain;
// - A dedicated set of authorized users;
// - Special `aud` in token.
var SystemAdminServiceService = exports.SystemAdminServiceService = {
  // General tools.
encode: {
    path: '/sandboxes.api.v1.SystemAdminService/Encode',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_systemadminservice_pb.EncodeRequest,
    responseType: sandboxes_api_v1_systemadminservice_pb.EncodeResponse,
    requestSerialize: serialize_sandboxes_api_v1_EncodeRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_EncodeRequest,
    responseSerialize: serialize_sandboxes_api_v1_EncodeResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_EncodeResponse,
  },
  decode: {
    path: '/sandboxes.api.v1.SystemAdminService/Decode',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_systemadminservice_pb.DecodeRequest,
    responseType: sandboxes_api_v1_systemadminservice_pb.DecodeResponse,
    requestSerialize: serialize_sandboxes_api_v1_DecodeRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_DecodeRequest,
    responseSerialize: serialize_sandboxes_api_v1_DecodeResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_DecodeResponse,
  },
  // System Management.
//
// Query the current global system resource.
querySystem: {
    path: '/sandboxes.api.v1.SystemAdminService/QuerySystem',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_systemadminservice_pb.QuerySystemRequest,
    responseType: sandboxes_api_v1_systemadminservice_pb.QuerySystemResponse,
    requestSerialize: serialize_sandboxes_api_v1_QuerySystemRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_QuerySystemRequest,
    responseSerialize: serialize_sandboxes_api_v1_QuerySystemResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_QuerySystemResponse,
  },
  // Update the current global system resource.
updateSystem: {
    path: '/sandboxes.api.v1.SystemAdminService/UpdateSystem',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_systemadminservice_pb.UpdateSystemRequest,
    responseType: sandboxes_api_v1_systemadminservice_pb.UpdateSystemResponse,
    requestSerialize: serialize_sandboxes_api_v1_UpdateSystemRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_UpdateSystemRequest,
    responseSerialize: serialize_sandboxes_api_v1_UpdateSystemResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_UpdateSystemResponse,
  },
  // List all the alerts defined in the system.
listSystemAlerts: {
    path: '/sandboxes.api.v1.SystemAdminService/ListSystemAlerts',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_systemadminservice_pb.ListSystemAlertsRequest,
    responseType: sandboxes_api_v1_systemadminservice_pb.ListSystemAlertsResponse,
    requestSerialize: serialize_sandboxes_api_v1_ListSystemAlertsRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_ListSystemAlertsRequest,
    responseSerialize: serialize_sandboxes_api_v1_ListSystemAlertsResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_ListSystemAlertsResponse,
  },
  // Infrastructure related.
//
// Query the information of the current infrastructure.
// This covers the infrastructures across all the regions if available.
queryInfra: {
    path: '/sandboxes.api.v1.SystemAdminService/QueryInfra',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_systemadminservice_pb.QueryInfraRequest,
    responseType: sandboxes_api_v1_systemadminservice_pb.QueryInfraResponse,
    requestSerialize: serialize_sandboxes_api_v1_QueryInfraRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_QueryInfraRequest,
    responseSerialize: serialize_sandboxes_api_v1_QueryInfraResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_QueryInfraResponse,
  },
  // Invoke an infrastructure specific action.
infraAction: {
    path: '/sandboxes.api.v1.SystemAdminService/InfraAction',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_systemadminservice_pb.InfraActionRequest,
    responseType: sandboxes_api_v1_systemadminservice_pb.InfraActionResponse,
    requestSerialize: serialize_sandboxes_api_v1_InfraActionRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_InfraActionRequest,
    responseSerialize: serialize_sandboxes_api_v1_InfraActionResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_InfraActionResponse,
  },
  // Performance and Metrics.
//
// Query performance metrics of nodes.
queryNodeMetrics: {
    path: '/sandboxes.api.v1.SystemAdminService/QueryNodeMetrics',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_systemadminservice_pb.QueryNodeMetricsRequest,
    responseType: sandboxes_api_v1_systemadminservice_pb.QueryNodeMetricsResponse,
    requestSerialize: serialize_sandboxes_api_v1_QueryNodeMetricsRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_QueryNodeMetricsRequest,
    responseSerialize: serialize_sandboxes_api_v1_QueryNodeMetricsResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_QueryNodeMetricsResponse,
  },
  // Query performance metrics of node pools.
queryNodePoolMetrics: {
    path: '/sandboxes.api.v1.SystemAdminService/QueryNodePoolMetrics',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_systemadminservice_pb.QueryNodePoolMetricsRequest,
    responseType: sandboxes_api_v1_systemadminservice_pb.QueryNodePoolMetricsResponse,
    requestSerialize: serialize_sandboxes_api_v1_QueryNodePoolMetricsRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_QueryNodePoolMetricsRequest,
    responseSerialize: serialize_sandboxes_api_v1_QueryNodePoolMetricsResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_QueryNodePoolMetricsResponse,
  },
  // Query workload metrics.
// Note: please carefully specify the span, resolution and filters. Otherwise the response
// may be too big and/or the query will be too heavy.
queryWorkloadMetrics: {
    path: '/sandboxes.api.v1.SystemAdminService/QueryWorkloadMetrics',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_systemadminservice_pb.QueryWorkloadMetricsRequest,
    responseType: sandboxes_api_v1_systemadminservice_pb.QueryWorkloadMetricsResponse,
    requestSerialize: serialize_sandboxes_api_v1_QueryWorkloadMetricsRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_QueryWorkloadMetricsRequest,
    responseSerialize: serialize_sandboxes_api_v1_QueryWorkloadMetricsResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_QueryWorkloadMetricsResponse,
  },
  // Query the real-time node status.
queryNodeStatus: {
    path: '/sandboxes.api.v1.SystemAdminService/QueryNodeStatus',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_systemadminservice_pb.QueryNodeStatusRequest,
    responseType: sandboxes_api_v1_systemadminservice_pb.QueryNodeStatusResponse,
    requestSerialize: serialize_sandboxes_api_v1_QueryNodeStatusRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_QueryNodeStatusRequest,
    responseSerialize: serialize_sandboxes_api_v1_QueryNodeStatusResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_QueryNodeStatusResponse,
  },
  // Kubernetes Node Pools related.
//
// List all existing Kubernetes node pools defined as Resource.
// The response contains all node pools except those with deletion completed.
listK8sNodePools: {
    path: '/sandboxes.api.v1.SystemAdminService/ListK8sNodePools',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_systemadminservice_pb.ListK8sNodePoolsRequest,
    responseType: sandboxes_api_v1_systemadminservice_pb.ListK8sNodePoolsResponse,
    requestSerialize: serialize_sandboxes_api_v1_ListK8sNodePoolsRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_ListK8sNodePoolsRequest,
    responseSerialize: serialize_sandboxes_api_v1_ListK8sNodePoolsResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_ListK8sNodePoolsResponse,
  },
  // Create a new Kubernetes node pool.
createK8sNodePool: {
    path: '/sandboxes.api.v1.SystemAdminService/CreateK8sNodePool',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_systemadminservice_pb.CreateK8sNodePoolRequest,
    responseType: sandboxes_api_v1_systemadminservice_pb.CreateK8sNodePoolResponse,
    requestSerialize: serialize_sandboxes_api_v1_CreateK8sNodePoolRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_CreateK8sNodePoolRequest,
    responseSerialize: serialize_sandboxes_api_v1_CreateK8sNodePoolResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_CreateK8sNodePoolResponse,
  },
  // Update the config of an existing Kubernetes node pool.
// A node pool is being deleted can't be updated.
updateK8sNodePool: {
    path: '/sandboxes.api.v1.SystemAdminService/UpdateK8sNodePool',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_systemadminservice_pb.UpdateK8sNodePoolRequest,
    responseType: sandboxes_api_v1_systemadminservice_pb.UpdateK8sNodePoolResponse,
    requestSerialize: serialize_sandboxes_api_v1_UpdateK8sNodePoolRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_UpdateK8sNodePoolRequest,
    responseSerialize: serialize_sandboxes_api_v1_UpdateK8sNodePoolResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_UpdateK8sNodePoolResponse,
  },
  // Preview the provisioning impact of an UpdateK8sNodePool request without applying any changes.
// Reports whether the update would trigger a node pool recreation or an in-place update.
previewK8sNodePoolUpdate: {
    path: '/sandboxes.api.v1.SystemAdminService/PreviewK8sNodePoolUpdate',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_systemadminservice_pb.PreviewK8sNodePoolUpdateRequest,
    responseType: sandboxes_api_v1_systemadminservice_pb.PreviewK8sNodePoolUpdateResponse,
    requestSerialize: serialize_sandboxes_api_v1_PreviewK8sNodePoolUpdateRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_PreviewK8sNodePoolUpdateRequest,
    responseSerialize: serialize_sandboxes_api_v1_PreviewK8sNodePoolUpdateResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_PreviewK8sNodePoolUpdateResponse,
  },
  // Initiate the deletion of the specified Kubernetes node pool.
// The node pool will still be listed in ListK8sNodePool as the deletion is a long, async process.
deleteK8sNodePool: {
    path: '/sandboxes.api.v1.SystemAdminService/DeleteK8sNodePool',
    requestStream: false,
    responseStream: false,
    requestType: sandboxes_api_v1_systemadminservice_pb.DeleteK8sNodePoolRequest,
    responseType: sandboxes_api_v1_systemadminservice_pb.DeleteK8sNodePoolResponse,
    requestSerialize: serialize_sandboxes_api_v1_DeleteK8sNodePoolRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_DeleteK8sNodePoolRequest,
    responseSerialize: serialize_sandboxes_api_v1_DeleteK8sNodePoolResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_DeleteK8sNodePoolResponse,
  },
};

exports.SystemAdminServiceClient = grpc.makeGenericClientConstructor(SystemAdminServiceService, 'SystemAdminService');
