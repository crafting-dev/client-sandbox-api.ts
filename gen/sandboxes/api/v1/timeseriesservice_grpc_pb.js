// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sandboxes_api_v1_timeseriesservice_pb = require('../../../sandboxes/api/v1/timeseriesservice_pb.js');
var sandboxes_api_v1_common_pb = require('../../../sandboxes/api/v1/common_pb.js');
var sandboxes_api_v1_object_pb = require('../../../sandboxes/api/v1/object_pb.js');
var sandboxes_api_v1_resource_pb = require('../../../sandboxes/api/v1/resource_pb.js');

function serialize_sandboxes_api_v1_QueryTimeSeriesRequest(arg) {
  if (!(arg instanceof sandboxes_api_v1_timeseriesservice_pb.QueryTimeSeriesRequest)) {
    throw new Error('Expected argument of type sandboxes.api.v1.QueryTimeSeriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_QueryTimeSeriesRequest(buffer_arg) {
  return sandboxes_api_v1_timeseriesservice_pb.QueryTimeSeriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sandboxes_api_v1_QueryTimeSeriesResponse(arg) {
  if (!(arg instanceof sandboxes_api_v1_timeseriesservice_pb.QueryTimeSeriesResponse)) {
    throw new Error('Expected argument of type sandboxes.api.v1.QueryTimeSeriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sandboxes_api_v1_QueryTimeSeriesResponse(buffer_arg) {
  return sandboxes_api_v1_timeseriesservice_pb.QueryTimeSeriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// TimeSeriesService exposes time series data stored for sandboxes.
var TimeSeriesServiceService = exports.TimeSeriesServiceService = {
  // QueryTimeSeries streams matching time series data for the requested metric,
// label filters, and time span. Results are paginated via next_key.
queryTimeSeries: {
    path: '/sandboxes.api.v1.TimeSeriesService/QueryTimeSeries',
    requestStream: false,
    responseStream: true,
    requestType: sandboxes_api_v1_timeseriesservice_pb.QueryTimeSeriesRequest,
    responseType: sandboxes_api_v1_timeseriesservice_pb.QueryTimeSeriesResponse,
    requestSerialize: serialize_sandboxes_api_v1_QueryTimeSeriesRequest,
    requestDeserialize: deserialize_sandboxes_api_v1_QueryTimeSeriesRequest,
    responseSerialize: serialize_sandboxes_api_v1_QueryTimeSeriesResponse,
    responseDeserialize: deserialize_sandboxes_api_v1_QueryTimeSeriesResponse,
  },
};

exports.TimeSeriesServiceClient = grpc.makeGenericClientConstructor(TimeSeriesServiceService, 'TimeSeriesService');
