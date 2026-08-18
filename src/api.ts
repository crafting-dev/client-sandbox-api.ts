// The `sandboxes.api.v1` protobuf package.
//
// This module re-exports every protobuf message, enum and gRPC service client
// generated from `protos/proto/sandboxes/api/v1` into a single namespace, so the
// end user only ever imports one symbol:
//
//     import {api} from "@crafting/sandbox-api";
//     const req = new api.CreateSandboxRequest();
//
// All the protobuf messages live in the same protobuf package, so their names
// are unique across the files below and can safely be flattened.
//
// NOTE: this list mirrors the files under `gen/sandboxes/api/v1` produced by
// `generate-proto.sh`. When a proto file is added to or removed from
// `sandboxes/api/v1`, update the corresponding line here.

// Messages and enums.
export * from '../gen/sandboxes/api/v1/action_generic_pb';
export * from '../gen/sandboxes/api/v1/action_snapshot_pb';
export * from '../gen/sandboxes/api/v1/action_workspace_pb';
export * from '../gen/sandboxes/api/v1/app_pb';
export * from '../gen/sandboxes/api/v1/common_pb';
export * from '../gen/sandboxes/api/v1/endpoint_pb';
export * from '../gen/sandboxes/api/v1/infoservice_pb';
export * from '../gen/sandboxes/api/v1/job_pb';
export * from '../gen/sandboxes/api/v1/llm_pb';
export * from '../gen/sandboxes/api/v1/llmservice_pb';
export * from '../gen/sandboxes/api/v1/log_query_pb';
export * from '../gen/sandboxes/api/v1/mgmtservice_pb';
export * from '../gen/sandboxes/api/v1/notification_pb';
export * from '../gen/sandboxes/api/v1/object_pb';
export * from '../gen/sandboxes/api/v1/org_pb';
export * from '../gen/sandboxes/api/v1/process_pb';
export * from '../gen/sandboxes/api/v1/repo_pb';
export * from '../gen/sandboxes/api/v1/resource_pb';
export * from '../gen/sandboxes/api/v1/resource_connectedinfra_pb';
export * from '../gen/sandboxes/api/v1/resource_endpointalias_pb';
export * from '../gen/sandboxes/api/v1/resource_llmagent_pb';
export * from '../gen/sandboxes/api/v1/resource_llmconfig_pb';
export * from '../gen/sandboxes/api/v1/resource_llmsession_pb';
export * from '../gen/sandboxes/api/v1/resource_loginprovider_pb';
export * from '../gen/sandboxes/api/v1/resource_logintoken_pb';
export * from '../gen/sandboxes/api/v1/resource_nodepool_pb';
export * from '../gen/sandboxes/api/v1/resource_preference_pb';
export * from '../gen/sandboxes/api/v1/resource_quotacontroller_pb';
export * from '../gen/sandboxes/api/v1/resource_region_pb';
export * from '../gen/sandboxes/api/v1/resource_sandboxpool_pb';
export * from '../gen/sandboxes/api/v1/resource_site_pb';
export * from '../gen/sandboxes/api/v1/resource_sourcecontrol_pb';
export * from '../gen/sandboxes/api/v1/resource_system_pb';
export * from '../gen/sandboxes/api/v1/resource_toolpkg_pb';
export * from '../gen/sandboxes/api/v1/resource_trafficsession_pb';
export * from '../gen/sandboxes/api/v1/sandbox_pb';
export * from '../gen/sandboxes/api/v1/secret_pb';
export * from '../gen/sandboxes/api/v1/snapshot_pb';
export * from '../gen/sandboxes/api/v1/snapshotservice_pb';
export * from '../gen/sandboxes/api/v1/subscription_pb';
export * from '../gen/sandboxes/api/v1/system_pb';
export * from '../gen/sandboxes/api/v1/systemadminservice_pb';
export * from '../gen/sandboxes/api/v1/systeminfra_pb';
export * from '../gen/sandboxes/api/v1/systeminfra_aws_pb';
export * from '../gen/sandboxes/api/v1/systeminfra_azure_pb';
export * from '../gen/sandboxes/api/v1/systeminfra_gcp_pb';
export * from '../gen/sandboxes/api/v1/systeminfra_oci_pb';
export * from '../gen/sandboxes/api/v1/timeseriesservice_pb';
export * from '../gen/sandboxes/api/v1/trafficservice_pb';
export * from '../gen/sandboxes/api/v1/user_pb';
export * from '../gen/sandboxes/api/v1/workload_pb';
export * from '../gen/sandboxes/api/v1/workloadservice_pb';
export * from '../gen/sandboxes/api/v1/workspaceservice_pb';

// gRPC services: clients, service definitions and server interfaces.
export * from '../gen/sandboxes/api/v1/infoservice_grpc_pb';
export * from '../gen/sandboxes/api/v1/llmservice_grpc_pb';
export * from '../gen/sandboxes/api/v1/mgmtservice_grpc_pb';
export * from '../gen/sandboxes/api/v1/snapshotservice_grpc_pb';
export * from '../gen/sandboxes/api/v1/systemadminservice_grpc_pb';
export * from '../gen/sandboxes/api/v1/timeseriesservice_grpc_pb';
export * from '../gen/sandboxes/api/v1/trafficservice_grpc_pb';
export * from '../gen/sandboxes/api/v1/workloadservice_grpc_pb';
export * from '../gen/sandboxes/api/v1/workspaceservice_grpc_pb';
