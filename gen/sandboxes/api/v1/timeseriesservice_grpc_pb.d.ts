// package: sandboxes.api.v1
// file: sandboxes/api/v1/timeseriesservice.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as sandboxes_api_v1_timeseriesservice_pb from "../../../sandboxes/api/v1/timeseriesservice_pb";
import * as sandboxes_api_v1_common_pb from "../../../sandboxes/api/v1/common_pb";
import * as sandboxes_api_v1_object_pb from "../../../sandboxes/api/v1/object_pb";
import * as sandboxes_api_v1_resource_pb from "../../../sandboxes/api/v1/resource_pb";

interface ITimeSeriesServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    queryTimeSeries: ITimeSeriesServiceService_IQueryTimeSeries;
}

interface ITimeSeriesServiceService_IQueryTimeSeries extends grpc.MethodDefinition<sandboxes_api_v1_timeseriesservice_pb.QueryTimeSeriesRequest, sandboxes_api_v1_timeseriesservice_pb.QueryTimeSeriesResponse> {
    path: "/sandboxes.api.v1.TimeSeriesService/QueryTimeSeries";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<sandboxes_api_v1_timeseriesservice_pb.QueryTimeSeriesRequest>;
    requestDeserialize: grpc.deserialize<sandboxes_api_v1_timeseriesservice_pb.QueryTimeSeriesRequest>;
    responseSerialize: grpc.serialize<sandboxes_api_v1_timeseriesservice_pb.QueryTimeSeriesResponse>;
    responseDeserialize: grpc.deserialize<sandboxes_api_v1_timeseriesservice_pb.QueryTimeSeriesResponse>;
}

export const TimeSeriesServiceService: ITimeSeriesServiceService;

export interface ITimeSeriesServiceServer extends grpc.UntypedServiceImplementation {
    queryTimeSeries: grpc.handleServerStreamingCall<sandboxes_api_v1_timeseriesservice_pb.QueryTimeSeriesRequest, sandboxes_api_v1_timeseriesservice_pb.QueryTimeSeriesResponse>;
}

export interface ITimeSeriesServiceClient {
    queryTimeSeries(request: sandboxes_api_v1_timeseriesservice_pb.QueryTimeSeriesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sandboxes_api_v1_timeseriesservice_pb.QueryTimeSeriesResponse>;
    queryTimeSeries(request: sandboxes_api_v1_timeseriesservice_pb.QueryTimeSeriesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sandboxes_api_v1_timeseriesservice_pb.QueryTimeSeriesResponse>;
}

export class TimeSeriesServiceClient extends grpc.Client implements ITimeSeriesServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public queryTimeSeries(request: sandboxes_api_v1_timeseriesservice_pb.QueryTimeSeriesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sandboxes_api_v1_timeseriesservice_pb.QueryTimeSeriesResponse>;
    public queryTimeSeries(request: sandboxes_api_v1_timeseriesservice_pb.QueryTimeSeriesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sandboxes_api_v1_timeseriesservice_pb.QueryTimeSeriesResponse>;
}
