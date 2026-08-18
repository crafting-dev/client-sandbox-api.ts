// source: sandboxes/api/v1/mgmtservice.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var sandboxes_api_v1_common_pb = require('../../../sandboxes/api/v1/common_pb.js');
goog.object.extend(proto, sandboxes_api_v1_common_pb);
var sandboxes_api_v1_app_pb = require('../../../sandboxes/api/v1/app_pb.js');
goog.object.extend(proto, sandboxes_api_v1_app_pb);
var sandboxes_api_v1_job_pb = require('../../../sandboxes/api/v1/job_pb.js');
goog.object.extend(proto, sandboxes_api_v1_job_pb);
var sandboxes_api_v1_org_pb = require('../../../sandboxes/api/v1/org_pb.js');
goog.object.extend(proto, sandboxes_api_v1_org_pb);
var sandboxes_api_v1_object_pb = require('../../../sandboxes/api/v1/object_pb.js');
goog.object.extend(proto, sandboxes_api_v1_object_pb);
var sandboxes_api_v1_resource_pb = require('../../../sandboxes/api/v1/resource_pb.js');
goog.object.extend(proto, sandboxes_api_v1_resource_pb);
var sandboxes_api_v1_resource_logintoken_pb = require('../../../sandboxes/api/v1/resource_logintoken_pb.js');
goog.object.extend(proto, sandboxes_api_v1_resource_logintoken_pb);
var sandboxes_api_v1_sandbox_pb = require('../../../sandboxes/api/v1/sandbox_pb.js');
goog.object.extend(proto, sandboxes_api_v1_sandbox_pb);
var sandboxes_api_v1_secret_pb = require('../../../sandboxes/api/v1/secret_pb.js');
goog.object.extend(proto, sandboxes_api_v1_secret_pb);
var sandboxes_api_v1_subscription_pb = require('../../../sandboxes/api/v1/subscription_pb.js');
goog.object.extend(proto, sandboxes_api_v1_subscription_pb);
var sandboxes_api_v1_system_pb = require('../../../sandboxes/api/v1/system_pb.js');
goog.object.extend(proto, sandboxes_api_v1_system_pb);
var sandboxes_api_v1_user_pb = require('../../../sandboxes/api/v1/user_pb.js');
goog.object.extend(proto, sandboxes_api_v1_user_pb);
goog.exportSymbol('proto.sandboxes.api.v1.ClientMetric', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.CreateAppRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.CreateAppResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.CreateFolderRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.CreateFolderResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.CreateJobRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.CreateJobResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.CreateLoginTokenRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.CreateLoginTokenResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.CreateResourceRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.CreateResourceResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.CreateSandboxRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.CreateSandboxRequest.UsePool', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.CreateSandboxResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.CreateSecretRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.CreateSecretResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.CreateServiceAccountRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.CreateServiceAccountResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.CurrentUserRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.CurrentUserResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.DeleteAppRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.DeleteAppResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.DeleteFolderRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.DeleteFolderResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.DeleteJobRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.DeleteJobResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.DeleteLoginTokenRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.DeleteLoginTokenResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.DeleteResourceRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.DeleteResourceResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.DeleteSandboxRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.DeleteSandboxResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.DeleteSecretRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.DeleteSecretResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.DeleteServiceAccountRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.DeleteServiceAccountResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ListAppsRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ListAppsResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ListFoldersRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ListFoldersResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ListJobsRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ListJobsResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ListLoginTokensRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ListLoginTokensResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ListOrgsRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo.Level', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ListOrgsResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ListResourcesRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ListResourcesResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ListSandboxesRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ListSandboxesResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ListSecretsRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ListSecretsResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ListServiceAccountsRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ListServiceAccountsResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ReportEventsRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ReportEventsResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ReportMetricsRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ReportMetricsResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.SignWithSecretRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.SignWithSecretRequest.Hash', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.SignWithSecretResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.SystemInfoRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.SystemInfoResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateAppRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateAppResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateFolderRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateFolderRequest.Move', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateFolderRequest.Rename', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateFolderRequest.UpdateCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateFolderResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateJobRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateJobRequest.Cancel', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateJobRequest.Spec', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateJobRequest.UpdateCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateJobResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateLoginTokenRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateLoginTokenResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateOrgRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateOrgRequest.AddMember', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateOrgRequest.Settings', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateOrgRequest.Update', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateOrgRequest.Update.UpdateCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateOrgResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateResourceRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateResourceResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateSandboxRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateSandboxRequest.Activities', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution.Action', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateSandboxRequest.UpdateCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateSandboxResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateSecretRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateSecretResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateServiceAccountRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateServiceAccountResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateUserRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateUserRequest.Membership', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateUserResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.SystemInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.SystemInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.SystemInfoRequest.displayName = 'proto.sandboxes.api.v1.SystemInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.SystemInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.SystemInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.SystemInfoResponse.displayName = 'proto.sandboxes.api.v1.SystemInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.CurrentUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.CurrentUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.CurrentUserRequest.displayName = 'proto.sandboxes.api.v1.CurrentUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.CurrentUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.CurrentUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.CurrentUserResponse.displayName = 'proto.sandboxes.api.v1.CurrentUserResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin.displayName = 'proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.UpdateUserRequest.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateUserRequest.displayName = 'proto.sandboxes.api.v1.UpdateUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateUserRequest.Membership = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateUserRequest.Membership, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateUserRequest.Membership.displayName = 'proto.sandboxes.api.v1.UpdateUserRequest.Membership';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateUserResponse.displayName = 'proto.sandboxes.api.v1.UpdateUserResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.ListOrgsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.ListOrgsRequest.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.ListOrgsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ListOrgsRequest.displayName = 'proto.sandboxes.api.v1.ListOrgsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo.displayName = 'proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.ListOrgsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.ListOrgsResponse.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.ListOrgsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ListOrgsResponse.displayName = 'proto.sandboxes.api.v1.ListOrgsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateOrgRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.UpdateOrgRequest.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateOrgRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateOrgRequest.displayName = 'proto.sandboxes.api.v1.UpdateOrgRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers.displayName = 'proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateOrgRequest.AddMember = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateOrgRequest.AddMember, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.displayName = 'proto.sandboxes.api.v1.UpdateOrgRequest.AddMember';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification.displayName = 'proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Settings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateOrgRequest.Settings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateOrgRequest.Settings.displayName = 'proto.sandboxes.api.v1.UpdateOrgRequest.Settings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode.displayName = 'proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy.displayName = 'proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains.displayName = 'proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides.displayName = 'proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sandboxes.api.v1.UpdateOrgRequest.Update.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.UpdateOrgRequest.Update, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateOrgRequest.Update.displayName = 'proto.sandboxes.api.v1.UpdateOrgRequest.Update';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateOrgResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateOrgResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateOrgResponse.displayName = 'proto.sandboxes.api.v1.UpdateOrgResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.CreateFolderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.CreateFolderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.CreateFolderRequest.displayName = 'proto.sandboxes.api.v1.CreateFolderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.CreateFolderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.CreateFolderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.CreateFolderResponse.displayName = 'proto.sandboxes.api.v1.CreateFolderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.ListFoldersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.ListFoldersRequest.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.ListFoldersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ListFoldersRequest.displayName = 'proto.sandboxes.api.v1.ListFoldersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.ListFoldersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.ListFoldersResponse.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.ListFoldersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ListFoldersResponse.displayName = 'proto.sandboxes.api.v1.ListFoldersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateFolderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sandboxes.api.v1.UpdateFolderRequest.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.UpdateFolderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateFolderRequest.displayName = 'proto.sandboxes.api.v1.UpdateFolderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy.displayName = 'proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateFolderRequest.Rename = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateFolderRequest.Rename, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateFolderRequest.Rename.displayName = 'proto.sandboxes.api.v1.UpdateFolderRequest.Rename';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateFolderRequest.Move = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateFolderRequest.Move, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateFolderRequest.Move.displayName = 'proto.sandboxes.api.v1.UpdateFolderRequest.Move';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateFolderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateFolderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateFolderResponse.displayName = 'proto.sandboxes.api.v1.UpdateFolderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.DeleteFolderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.DeleteFolderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.DeleteFolderRequest.displayName = 'proto.sandboxes.api.v1.DeleteFolderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.DeleteFolderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.DeleteFolderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.DeleteFolderResponse.displayName = 'proto.sandboxes.api.v1.DeleteFolderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.ListServiceAccountsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.ListServiceAccountsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ListServiceAccountsRequest.displayName = 'proto.sandboxes.api.v1.ListServiceAccountsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.ListServiceAccountsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.ListServiceAccountsResponse.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.ListServiceAccountsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ListServiceAccountsResponse.displayName = 'proto.sandboxes.api.v1.ListServiceAccountsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.CreateServiceAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.CreateServiceAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.CreateServiceAccountRequest.displayName = 'proto.sandboxes.api.v1.CreateServiceAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.CreateServiceAccountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.CreateServiceAccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.CreateServiceAccountResponse.displayName = 'proto.sandboxes.api.v1.CreateServiceAccountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateServiceAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateServiceAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateServiceAccountRequest.displayName = 'proto.sandboxes.api.v1.UpdateServiceAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateServiceAccountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateServiceAccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateServiceAccountResponse.displayName = 'proto.sandboxes.api.v1.UpdateServiceAccountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.DeleteServiceAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.DeleteServiceAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.DeleteServiceAccountRequest.displayName = 'proto.sandboxes.api.v1.DeleteServiceAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.DeleteServiceAccountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.DeleteServiceAccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.DeleteServiceAccountResponse.displayName = 'proto.sandboxes.api.v1.DeleteServiceAccountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.ListLoginTokensRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.ListLoginTokensRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ListLoginTokensRequest.displayName = 'proto.sandboxes.api.v1.ListLoginTokensRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.ListLoginTokensResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.ListLoginTokensResponse.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.ListLoginTokensResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ListLoginTokensResponse.displayName = 'proto.sandboxes.api.v1.ListLoginTokensResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.CreateLoginTokenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.CreateLoginTokenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.CreateLoginTokenRequest.displayName = 'proto.sandboxes.api.v1.CreateLoginTokenRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.CreateLoginTokenResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.CreateLoginTokenResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.CreateLoginTokenResponse.displayName = 'proto.sandboxes.api.v1.CreateLoginTokenResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.DeleteLoginTokenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.DeleteLoginTokenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.DeleteLoginTokenRequest.displayName = 'proto.sandboxes.api.v1.DeleteLoginTokenRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.DeleteLoginTokenResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.DeleteLoginTokenResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.DeleteLoginTokenResponse.displayName = 'proto.sandboxes.api.v1.DeleteLoginTokenResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateLoginTokenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateLoginTokenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateLoginTokenRequest.displayName = 'proto.sandboxes.api.v1.UpdateLoginTokenRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateLoginTokenResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateLoginTokenResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateLoginTokenResponse.displayName = 'proto.sandboxes.api.v1.UpdateLoginTokenResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.ListAppsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.ListAppsRequest.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.ListAppsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ListAppsRequest.displayName = 'proto.sandboxes.api.v1.ListAppsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.ListAppsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.ListAppsResponse.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.ListAppsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ListAppsResponse.displayName = 'proto.sandboxes.api.v1.ListAppsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.CreateAppRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.CreateAppRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.CreateAppRequest.displayName = 'proto.sandboxes.api.v1.CreateAppRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.CreateAppResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.CreateAppResponse.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.CreateAppResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.CreateAppResponse.displayName = 'proto.sandboxes.api.v1.CreateAppResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateAppRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateAppRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateAppRequest.displayName = 'proto.sandboxes.api.v1.UpdateAppRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateAppResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateAppResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateAppResponse.displayName = 'proto.sandboxes.api.v1.UpdateAppResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.DeleteAppRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.DeleteAppRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.DeleteAppRequest.displayName = 'proto.sandboxes.api.v1.DeleteAppRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.DeleteAppResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.DeleteAppResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.DeleteAppResponse.displayName = 'proto.sandboxes.api.v1.DeleteAppResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.ListSandboxesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.ListSandboxesRequest.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.ListSandboxesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ListSandboxesRequest.displayName = 'proto.sandboxes.api.v1.ListSandboxesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.ListSandboxesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.ListSandboxesResponse.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.ListSandboxesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ListSandboxesResponse.displayName = 'proto.sandboxes.api.v1.ListSandboxesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.CreateSandboxRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.CreateSandboxRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.CreateSandboxRequest.displayName = 'proto.sandboxes.api.v1.CreateSandboxRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.CreateSandboxRequest.UsePool = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.CreateSandboxRequest.UsePool, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.CreateSandboxRequest.UsePool.displayName = 'proto.sandboxes.api.v1.CreateSandboxRequest.UsePool';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.CreateSandboxResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.CreateSandboxResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.CreateSandboxResponse.displayName = 'proto.sandboxes.api.v1.CreateSandboxResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateSandboxRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sandboxes.api.v1.UpdateSandboxRequest.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.UpdateSandboxRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateSandboxRequest.displayName = 'proto.sandboxes.api.v1.UpdateSandboxRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList.displayName = 'proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync.displayName = 'proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose.displayName = 'proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic.displayName = 'proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig.displayName = 'proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig.displayName = 'proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv.displayName = 'proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState.displayName = 'proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl.displayName = 'proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads.displayName = 'proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.Activities = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateSandboxRequest.Activities, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateSandboxRequest.Activities.displayName = 'proto.sandboxes.api.v1.UpdateSandboxRequest.Activities';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool.displayName = 'proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.displayName = 'proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution.displayName = 'proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateSandboxResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateSandboxResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateSandboxResponse.displayName = 'proto.sandboxes.api.v1.UpdateSandboxResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.DeleteSandboxRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.DeleteSandboxRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.DeleteSandboxRequest.displayName = 'proto.sandboxes.api.v1.DeleteSandboxRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.DeleteSandboxResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.DeleteSandboxResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.DeleteSandboxResponse.displayName = 'proto.sandboxes.api.v1.DeleteSandboxResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.ListSecretsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.ListSecretsRequest.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.ListSecretsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ListSecretsRequest.displayName = 'proto.sandboxes.api.v1.ListSecretsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.ListSecretsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.ListSecretsResponse.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.ListSecretsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ListSecretsResponse.displayName = 'proto.sandboxes.api.v1.ListSecretsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.CreateSecretRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.CreateSecretRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.CreateSecretRequest.displayName = 'proto.sandboxes.api.v1.CreateSecretRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.CreateSecretResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.CreateSecretResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.CreateSecretResponse.displayName = 'proto.sandboxes.api.v1.CreateSecretResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateSecretRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateSecretRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateSecretRequest.displayName = 'proto.sandboxes.api.v1.UpdateSecretRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateSecretResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateSecretResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateSecretResponse.displayName = 'proto.sandboxes.api.v1.UpdateSecretResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.DeleteSecretRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.DeleteSecretRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.DeleteSecretRequest.displayName = 'proto.sandboxes.api.v1.DeleteSecretRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.DeleteSecretResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.DeleteSecretResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.DeleteSecretResponse.displayName = 'proto.sandboxes.api.v1.DeleteSecretResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.SignWithSecretRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.SignWithSecretRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.SignWithSecretRequest.displayName = 'proto.sandboxes.api.v1.SignWithSecretRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.SignWithSecretResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.SignWithSecretResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.SignWithSecretResponse.displayName = 'proto.sandboxes.api.v1.SignWithSecretResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.ListJobsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.ListJobsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ListJobsRequest.displayName = 'proto.sandboxes.api.v1.ListJobsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.ListJobsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.ListJobsResponse.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.ListJobsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ListJobsResponse.displayName = 'proto.sandboxes.api.v1.ListJobsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.CreateJobRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.CreateJobRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.CreateJobRequest.displayName = 'proto.sandboxes.api.v1.CreateJobRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.CreateJobResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.CreateJobResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.CreateJobResponse.displayName = 'proto.sandboxes.api.v1.CreateJobResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateJobRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sandboxes.api.v1.UpdateJobRequest.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.UpdateJobRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateJobRequest.displayName = 'proto.sandboxes.api.v1.UpdateJobRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateJobRequest.Spec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateJobRequest.Spec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateJobRequest.Spec.displayName = 'proto.sandboxes.api.v1.UpdateJobRequest.Spec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateJobRequest.Cancel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateJobRequest.Cancel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateJobRequest.Cancel.displayName = 'proto.sandboxes.api.v1.UpdateJobRequest.Cancel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig.displayName = 'proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger.displayName = 'proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution.displayName = 'proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateJobResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateJobResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateJobResponse.displayName = 'proto.sandboxes.api.v1.UpdateJobResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.DeleteJobRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.DeleteJobRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.DeleteJobRequest.displayName = 'proto.sandboxes.api.v1.DeleteJobRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.DeleteJobResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.DeleteJobResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.DeleteJobResponse.displayName = 'proto.sandboxes.api.v1.DeleteJobResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.ListResourcesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.ListResourcesRequest.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.ListResourcesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ListResourcesRequest.displayName = 'proto.sandboxes.api.v1.ListResourcesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.ListResourcesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.ListResourcesResponse.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.ListResourcesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ListResourcesResponse.displayName = 'proto.sandboxes.api.v1.ListResourcesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.CreateResourceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.CreateResourceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.CreateResourceRequest.displayName = 'proto.sandboxes.api.v1.CreateResourceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.CreateResourceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.CreateResourceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.CreateResourceResponse.displayName = 'proto.sandboxes.api.v1.CreateResourceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateResourceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateResourceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateResourceRequest.displayName = 'proto.sandboxes.api.v1.UpdateResourceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateResourceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateResourceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateResourceResponse.displayName = 'proto.sandboxes.api.v1.UpdateResourceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.DeleteResourceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.DeleteResourceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.DeleteResourceRequest.displayName = 'proto.sandboxes.api.v1.DeleteResourceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.DeleteResourceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.DeleteResourceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.DeleteResourceResponse.displayName = 'proto.sandboxes.api.v1.DeleteResourceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.ReportEventsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.ReportEventsRequest.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.ReportEventsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ReportEventsRequest.displayName = 'proto.sandboxes.api.v1.ReportEventsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent.displayName = 'proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.ReportEventsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.ReportEventsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ReportEventsResponse.displayName = 'proto.sandboxes.api.v1.ReportEventsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.ClientMetric = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.ClientMetric, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ClientMetric.displayName = 'proto.sandboxes.api.v1.ClientMetric';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.ReportMetricsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.ReportMetricsRequest.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.ReportMetricsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ReportMetricsRequest.displayName = 'proto.sandboxes.api.v1.ReportMetricsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.ReportMetricsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.ReportMetricsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ReportMetricsResponse.displayName = 'proto.sandboxes.api.v1.ReportMetricsResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.SystemInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.SystemInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.SystemInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.SystemInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    includePackages: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    includeServices: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.SystemInfoRequest}
 */
proto.sandboxes.api.v1.SystemInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.SystemInfoRequest;
  return proto.sandboxes.api.v1.SystemInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.SystemInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.SystemInfoRequest}
 */
proto.sandboxes.api.v1.SystemInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludePackages(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeServices(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.SystemInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.SystemInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.SystemInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.SystemInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIncludePackages();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getIncludeServices();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional bool include_packages = 1;
 * @return {boolean}
 */
proto.sandboxes.api.v1.SystemInfoRequest.prototype.getIncludePackages = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.SystemInfoRequest} returns this
 */
proto.sandboxes.api.v1.SystemInfoRequest.prototype.setIncludePackages = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool include_services = 2;
 * @return {boolean}
 */
proto.sandboxes.api.v1.SystemInfoRequest.prototype.getIncludeServices = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.SystemInfoRequest} returns this
 */
proto.sandboxes.api.v1.SystemInfoRequest.prototype.setIncludeServices = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.SystemInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.SystemInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.SystemInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.SystemInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && sandboxes_api_v1_system_pb.SystemInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.SystemInfoResponse}
 */
proto.sandboxes.api.v1.SystemInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.SystemInfoResponse;
  return proto.sandboxes.api.v1.SystemInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.SystemInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.SystemInfoResponse}
 */
proto.sandboxes.api.v1.SystemInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_system_pb.SystemInfo;
      reader.readMessage(value,sandboxes_api_v1_system_pb.SystemInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.SystemInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.SystemInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.SystemInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.SystemInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_system_pb.SystemInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional SystemInfo info = 1;
 * @return {?proto.sandboxes.api.v1.SystemInfo}
 */
proto.sandboxes.api.v1.SystemInfoResponse.prototype.getInfo = function() {
  return /** @type{?proto.sandboxes.api.v1.SystemInfo} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_system_pb.SystemInfo, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.SystemInfo|undefined} value
 * @return {!proto.sandboxes.api.v1.SystemInfoResponse} returns this
*/
proto.sandboxes.api.v1.SystemInfoResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.SystemInfoResponse} returns this
 */
proto.sandboxes.api.v1.SystemInfoResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.SystemInfoResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.CurrentUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.CurrentUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.CurrentUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CurrentUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.CurrentUserRequest}
 */
proto.sandboxes.api.v1.CurrentUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.CurrentUserRequest;
  return proto.sandboxes.api.v1.CurrentUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.CurrentUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.CurrentUserRequest}
 */
proto.sandboxes.api.v1.CurrentUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.CurrentUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.CurrentUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.CurrentUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CurrentUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.CurrentUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.CurrentUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.CurrentUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CurrentUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: (f = msg.getUser()) && sandboxes_api_v1_user_pb.User.toObject(includeInstance, f),
    systemAdmin: (f = msg.getSystemAdmin()) && proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.CurrentUserResponse}
 */
proto.sandboxes.api.v1.CurrentUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.CurrentUserResponse;
  return proto.sandboxes.api.v1.CurrentUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.CurrentUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.CurrentUserResponse}
 */
proto.sandboxes.api.v1.CurrentUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_user_pb.User;
      reader.readMessage(value,sandboxes_api_v1_user_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 2:
      var value = new proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin;
      reader.readMessage(value,proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin.deserializeBinaryFromReader);
      msg.setSystemAdmin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.CurrentUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.CurrentUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.CurrentUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CurrentUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_user_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getSystemAdmin();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin.toObject = function(includeInstance, msg) {
  var f, obj = {
    adminBaseUrl: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin}
 */
proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin;
  return proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin}
 */
proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAdminBaseUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAdminBaseUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string admin_base_url = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin.prototype.getAdminBaseUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin} returns this
 */
proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin.prototype.setAdminBaseUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional User user = 1;
 * @return {?proto.sandboxes.api.v1.User}
 */
proto.sandboxes.api.v1.CurrentUserResponse.prototype.getUser = function() {
  return /** @type{?proto.sandboxes.api.v1.User} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_user_pb.User, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.User|undefined} value
 * @return {!proto.sandboxes.api.v1.CurrentUserResponse} returns this
*/
proto.sandboxes.api.v1.CurrentUserResponse.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.CurrentUserResponse} returns this
 */
proto.sandboxes.api.v1.CurrentUserResponse.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.CurrentUserResponse.prototype.hasUser = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SystemAdmin system_admin = 2;
 * @return {?proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin}
 */
proto.sandboxes.api.v1.CurrentUserResponse.prototype.getSystemAdmin = function() {
  return /** @type{?proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.CurrentUserResponse.SystemAdmin|undefined} value
 * @return {!proto.sandboxes.api.v1.CurrentUserResponse} returns this
*/
proto.sandboxes.api.v1.CurrentUserResponse.prototype.setSystemAdmin = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.CurrentUserResponse} returns this
 */
proto.sandboxes.api.v1.CurrentUserResponse.prototype.clearSystemAdmin = function() {
  return this.setSystemAdmin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.CurrentUserResponse.prototype.hasSystemAdmin = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.UpdateUserRequest.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    displayName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    avatarLink: jspb.Message.getFieldWithDefault(msg, 2, ""),
    addAuthorizedKeysList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    removeAuthorizedKeysList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    membership: (f = msg.getMembership()) && proto.sandboxes.api.v1.UpdateUserRequest.Membership.toObject(includeInstance, f),
    removeDefaultSshKeypair: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    userId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    stateJson: jspb.Message.getFieldWithDefault(msg, 100, ""),
    updateStateJson: jspb.Message.getBooleanFieldWithDefault(msg, 101, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateUserRequest}
 */
proto.sandboxes.api.v1.UpdateUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateUserRequest;
  return proto.sandboxes.api.v1.UpdateUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateUserRequest}
 */
proto.sandboxes.api.v1.UpdateUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatarLink(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addAddAuthorizedKeys(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addRemoveAuthorizedKeys(value);
      break;
    case 5:
      var value = new proto.sandboxes.api.v1.UpdateUserRequest.Membership;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateUserRequest.Membership.deserializeBinaryFromReader);
      msg.setMembership(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRemoveDefaultSshKeypair(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 100:
      var value = /** @type {string} */ (reader.readString());
      msg.setStateJson(value);
      break;
    case 101:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdateStateJson(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAvatarLink();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddAuthorizedKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getRemoveAuthorizedKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getMembership();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.sandboxes.api.v1.UpdateUserRequest.Membership.serializeBinaryToWriter
    );
  }
  f = message.getRemoveDefaultSshKeypair();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getStateJson();
  if (f.length > 0) {
    writer.writeString(
      100,
      f
    );
  }
  f = message.getUpdateStateJson();
  if (f) {
    writer.writeBool(
      101,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateUserRequest.Membership.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateUserRequest.Membership.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateUserRequest.Membership} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateUserRequest.Membership.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgVersion: jspb.Message.getFieldWithDefault(msg, 2, ""),
    opaque: (f = msg.getOpaque()) && sandboxes_api_v1_org_pb.Org.Membership.Opaque.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateUserRequest.Membership}
 */
proto.sandboxes.api.v1.UpdateUserRequest.Membership.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateUserRequest.Membership;
  return proto.sandboxes.api.v1.UpdateUserRequest.Membership.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateUserRequest.Membership} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateUserRequest.Membership}
 */
proto.sandboxes.api.v1.UpdateUserRequest.Membership.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgVersion(value);
      break;
    case 3:
      var value = new sandboxes_api_v1_org_pb.Org.Membership.Opaque;
      reader.readMessage(value,sandboxes_api_v1_org_pb.Org.Membership.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateUserRequest.Membership.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateUserRequest.Membership.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateUserRequest.Membership} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateUserRequest.Membership.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrgVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      sandboxes_api_v1_org_pb.Org.Membership.Opaque.serializeBinaryToWriter
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateUserRequest.Membership.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateUserRequest.Membership} returns this
 */
proto.sandboxes.api.v1.UpdateUserRequest.Membership.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_version = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateUserRequest.Membership.prototype.getOrgVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateUserRequest.Membership} returns this
 */
proto.sandboxes.api.v1.UpdateUserRequest.Membership.prototype.setOrgVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Org.Membership.Opaque opaque = 3;
 * @return {?proto.sandboxes.api.v1.Org.Membership.Opaque}
 */
proto.sandboxes.api.v1.UpdateUserRequest.Membership.prototype.getOpaque = function() {
  return /** @type{?proto.sandboxes.api.v1.Org.Membership.Opaque} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_org_pb.Org.Membership.Opaque, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.Org.Membership.Opaque|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateUserRequest.Membership} returns this
*/
proto.sandboxes.api.v1.UpdateUserRequest.Membership.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateUserRequest.Membership} returns this
 */
proto.sandboxes.api.v1.UpdateUserRequest.Membership.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateUserRequest.Membership.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string display_name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateUserRequest.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateUserRequest} returns this
 */
proto.sandboxes.api.v1.UpdateUserRequest.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string avatar_link = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateUserRequest.prototype.getAvatarLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateUserRequest} returns this
 */
proto.sandboxes.api.v1.UpdateUserRequest.prototype.setAvatarLink = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string add_authorized_keys = 3;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.UpdateUserRequest.prototype.getAddAuthorizedKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.UpdateUserRequest} returns this
 */
proto.sandboxes.api.v1.UpdateUserRequest.prototype.setAddAuthorizedKeysList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.UpdateUserRequest} returns this
 */
proto.sandboxes.api.v1.UpdateUserRequest.prototype.addAddAuthorizedKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.UpdateUserRequest} returns this
 */
proto.sandboxes.api.v1.UpdateUserRequest.prototype.clearAddAuthorizedKeysList = function() {
  return this.setAddAuthorizedKeysList([]);
};


/**
 * repeated string remove_authorized_keys = 4;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.UpdateUserRequest.prototype.getRemoveAuthorizedKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.UpdateUserRequest} returns this
 */
proto.sandboxes.api.v1.UpdateUserRequest.prototype.setRemoveAuthorizedKeysList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.UpdateUserRequest} returns this
 */
proto.sandboxes.api.v1.UpdateUserRequest.prototype.addRemoveAuthorizedKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.UpdateUserRequest} returns this
 */
proto.sandboxes.api.v1.UpdateUserRequest.prototype.clearRemoveAuthorizedKeysList = function() {
  return this.setRemoveAuthorizedKeysList([]);
};


/**
 * optional Membership membership = 5;
 * @return {?proto.sandboxes.api.v1.UpdateUserRequest.Membership}
 */
proto.sandboxes.api.v1.UpdateUserRequest.prototype.getMembership = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateUserRequest.Membership} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateUserRequest.Membership, 5));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateUserRequest.Membership|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateUserRequest} returns this
*/
proto.sandboxes.api.v1.UpdateUserRequest.prototype.setMembership = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateUserRequest} returns this
 */
proto.sandboxes.api.v1.UpdateUserRequest.prototype.clearMembership = function() {
  return this.setMembership(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateUserRequest.prototype.hasMembership = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool remove_default_ssh_keypair = 6;
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateUserRequest.prototype.getRemoveDefaultSshKeypair = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.UpdateUserRequest} returns this
 */
proto.sandboxes.api.v1.UpdateUserRequest.prototype.setRemoveDefaultSshKeypair = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional string user_id = 7;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateUserRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateUserRequest} returns this
 */
proto.sandboxes.api.v1.UpdateUserRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string org_id = 8;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateUserRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateUserRequest} returns this
 */
proto.sandboxes.api.v1.UpdateUserRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string state_json = 100;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateUserRequest.prototype.getStateJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 100, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateUserRequest} returns this
 */
proto.sandboxes.api.v1.UpdateUserRequest.prototype.setStateJson = function(value) {
  return jspb.Message.setProto3StringField(this, 100, value);
};


/**
 * optional bool update_state_json = 101;
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateUserRequest.prototype.getUpdateStateJson = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 101, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.UpdateUserRequest} returns this
 */
proto.sandboxes.api.v1.UpdateUserRequest.prototype.setUpdateStateJson = function(value) {
  return jspb.Message.setProto3BooleanField(this, 101, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: (f = msg.getUser()) && sandboxes_api_v1_user_pb.User.toObject(includeInstance, f),
    membership: (f = msg.getMembership()) && sandboxes_api_v1_org_pb.Org.Membership.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateUserResponse}
 */
proto.sandboxes.api.v1.UpdateUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateUserResponse;
  return proto.sandboxes.api.v1.UpdateUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateUserResponse}
 */
proto.sandboxes.api.v1.UpdateUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_user_pb.User;
      reader.readMessage(value,sandboxes_api_v1_user_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 2:
      var value = new sandboxes_api_v1_org_pb.Org.Membership;
      reader.readMessage(value,sandboxes_api_v1_org_pb.Org.Membership.deserializeBinaryFromReader);
      msg.setMembership(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_user_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getMembership();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sandboxes_api_v1_org_pb.Org.Membership.serializeBinaryToWriter
    );
  }
};


/**
 * optional User user = 1;
 * @return {?proto.sandboxes.api.v1.User}
 */
proto.sandboxes.api.v1.UpdateUserResponse.prototype.getUser = function() {
  return /** @type{?proto.sandboxes.api.v1.User} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_user_pb.User, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.User|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateUserResponse} returns this
*/
proto.sandboxes.api.v1.UpdateUserResponse.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateUserResponse} returns this
 */
proto.sandboxes.api.v1.UpdateUserResponse.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateUserResponse.prototype.hasUser = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Org.Membership membership = 2;
 * @return {?proto.sandboxes.api.v1.Org.Membership}
 */
proto.sandboxes.api.v1.UpdateUserResponse.prototype.getMembership = function() {
  return /** @type{?proto.sandboxes.api.v1.Org.Membership} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_org_pb.Org.Membership, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.Org.Membership|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateUserResponse} returns this
*/
proto.sandboxes.api.v1.UpdateUserResponse.prototype.setMembership = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateUserResponse} returns this
 */
proto.sandboxes.api.v1.UpdateUserResponse.prototype.clearMembership = function() {
  return this.setMembership(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateUserResponse.prototype.hasMembership = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.ListOrgsRequest.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.ListOrgsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ListOrgsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ListOrgsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListOrgsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    expandMembers: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    filterByIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    filterByNamesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    membersInfo: (f = msg.getMembersInfo()) && proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.ListOrgsRequest}
 */
proto.sandboxes.api.v1.ListOrgsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ListOrgsRequest;
  return proto.sandboxes.api.v1.ListOrgsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ListOrgsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ListOrgsRequest}
 */
proto.sandboxes.api.v1.ListOrgsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExpandMembers(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilterByIds(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilterByNames(value);
      break;
    case 4:
      var value = new proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo;
      reader.readMessage(value,proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo.deserializeBinaryFromReader);
      msg.setMembersInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.ListOrgsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ListOrgsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ListOrgsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListOrgsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExpandMembers();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getFilterByIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getFilterByNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getMembersInfo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    level: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo}
 */
proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo;
  return proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo}
 */
proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo.Level} */ (reader.readEnum());
      msg.setLevel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLevel();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo.Level = {
  NONE: 0,
  FULL: 1,
  FULL_CALLER: 2
};

/**
 * optional Level level = 1;
 * @return {!proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo.Level}
 */
proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo.prototype.getLevel = function() {
  return /** @type {!proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo.Level} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo.Level} value
 * @return {!proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo} returns this
 */
proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo.prototype.setLevel = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool expand_members = 1;
 * @return {boolean}
 */
proto.sandboxes.api.v1.ListOrgsRequest.prototype.getExpandMembers = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.ListOrgsRequest} returns this
 */
proto.sandboxes.api.v1.ListOrgsRequest.prototype.setExpandMembers = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated string filter_by_ids = 2;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.ListOrgsRequest.prototype.getFilterByIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.ListOrgsRequest} returns this
 */
proto.sandboxes.api.v1.ListOrgsRequest.prototype.setFilterByIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.ListOrgsRequest} returns this
 */
proto.sandboxes.api.v1.ListOrgsRequest.prototype.addFilterByIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ListOrgsRequest} returns this
 */
proto.sandboxes.api.v1.ListOrgsRequest.prototype.clearFilterByIdsList = function() {
  return this.setFilterByIdsList([]);
};


/**
 * repeated string filter_by_names = 3;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.ListOrgsRequest.prototype.getFilterByNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.ListOrgsRequest} returns this
 */
proto.sandboxes.api.v1.ListOrgsRequest.prototype.setFilterByNamesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.ListOrgsRequest} returns this
 */
proto.sandboxes.api.v1.ListOrgsRequest.prototype.addFilterByNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ListOrgsRequest} returns this
 */
proto.sandboxes.api.v1.ListOrgsRequest.prototype.clearFilterByNamesList = function() {
  return this.setFilterByNamesList([]);
};


/**
 * optional MembersInfo members_info = 4;
 * @return {?proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo}
 */
proto.sandboxes.api.v1.ListOrgsRequest.prototype.getMembersInfo = function() {
  return /** @type{?proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.ListOrgsRequest.MembersInfo|undefined} value
 * @return {!proto.sandboxes.api.v1.ListOrgsRequest} returns this
*/
proto.sandboxes.api.v1.ListOrgsRequest.prototype.setMembersInfo = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.ListOrgsRequest} returns this
 */
proto.sandboxes.api.v1.ListOrgsRequest.prototype.clearMembersInfo = function() {
  return this.setMembersInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.ListOrgsRequest.prototype.hasMembersInfo = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.ListOrgsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.ListOrgsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ListOrgsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ListOrgsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListOrgsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgsList: jspb.Message.toObjectList(msg.getOrgsList(),
    sandboxes_api_v1_org_pb.OrgWithMembers.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.ListOrgsResponse}
 */
proto.sandboxes.api.v1.ListOrgsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ListOrgsResponse;
  return proto.sandboxes.api.v1.ListOrgsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ListOrgsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ListOrgsResponse}
 */
proto.sandboxes.api.v1.ListOrgsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_org_pb.OrgWithMembers;
      reader.readMessage(value,sandboxes_api_v1_org_pb.OrgWithMembers.deserializeBinaryFromReader);
      msg.addOrgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.ListOrgsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ListOrgsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ListOrgsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListOrgsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      sandboxes_api_v1_org_pb.OrgWithMembers.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OrgWithMembers orgs = 1;
 * @return {!Array<!proto.sandboxes.api.v1.OrgWithMembers>}
 */
proto.sandboxes.api.v1.ListOrgsResponse.prototype.getOrgsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.OrgWithMembers>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_org_pb.OrgWithMembers, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.OrgWithMembers>} value
 * @return {!proto.sandboxes.api.v1.ListOrgsResponse} returns this
*/
proto.sandboxes.api.v1.ListOrgsResponse.prototype.setOrgsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sandboxes.api.v1.OrgWithMembers=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.OrgWithMembers}
 */
proto.sandboxes.api.v1.ListOrgsResponse.prototype.addOrgs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sandboxes.api.v1.OrgWithMembers, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ListOrgsResponse} returns this
 */
proto.sandboxes.api.v1.ListOrgsResponse.prototype.clearOrgsList = function() {
  return this.setOrgsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.UpdateOrgRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateOrgRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateOrgRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    updatesList: jspb.Message.toObjectList(msg.getUpdatesList(),
    proto.sandboxes.api.v1.UpdateOrgRequest.Update.toObject, includeInstance),
    version: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateOrgRequest;
  return proto.sandboxes.api.v1.UpdateOrgRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 2:
      var value = new proto.sandboxes.api.v1.UpdateOrgRequest.Update;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateOrgRequest.Update.deserializeBinaryFromReader);
      msg.addUpdates(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateOrgRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateOrgRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUpdatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.sandboxes.api.v1.UpdateOrgRequest.Update.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers.toObject = function(includeInstance, msg) {
  var f, obj = {
    membersList: jspb.Message.toObjectList(msg.getMembersList(),
    sandboxes_api_v1_org_pb.Org.Membership.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers;
  return proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_org_pb.Org.Membership;
      reader.readMessage(value,sandboxes_api_v1_org_pb.Org.Membership.deserializeBinaryFromReader);
      msg.addMembers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMembersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      sandboxes_api_v1_org_pb.Org.Membership.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Org.Membership members = 1;
 * @return {!Array<!proto.sandboxes.api.v1.Org.Membership>}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers.prototype.getMembersList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.Org.Membership>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_org_pb.Org.Membership, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.Org.Membership>} value
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers} returns this
*/
proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers.prototype.setMembersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sandboxes.api.v1.Org.Membership=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Org.Membership}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers.prototype.addMembers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sandboxes.api.v1.Org.Membership, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers} returns this
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers.prototype.clearMembersList = function() {
  return this.setMembersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest.AddMember} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: (f = msg.getUser()) && sandboxes_api_v1_user_pb.User.toObject(includeInstance, f),
    membership: (f = msg.getMembership()) && sandboxes_api_v1_org_pb.Org.Membership.toObject(includeInstance, f),
    notification: (f = msg.getNotification()) && proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.AddMember}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateOrgRequest.AddMember;
  return proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest.AddMember} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.AddMember}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_user_pb.User;
      reader.readMessage(value,sandboxes_api_v1_user_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 2:
      var value = new sandboxes_api_v1_org_pb.Org.Membership;
      reader.readMessage(value,sandboxes_api_v1_org_pb.Org.Membership.deserializeBinaryFromReader);
      msg.setMembership(value);
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification.deserializeBinaryFromReader);
      msg.setNotification(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest.AddMember} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_user_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getMembership();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sandboxes_api_v1_org_pb.Org.Membership.serializeBinaryToWriter
    );
  }
  f = message.getNotification();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification;
  return proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification} returns this
 */
proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional User user = 1;
 * @return {?proto.sandboxes.api.v1.User}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.prototype.getUser = function() {
  return /** @type{?proto.sandboxes.api.v1.User} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_user_pb.User, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.User|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.AddMember} returns this
*/
proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.AddMember} returns this
 */
proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.prototype.hasUser = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Org.Membership membership = 2;
 * @return {?proto.sandboxes.api.v1.Org.Membership}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.prototype.getMembership = function() {
  return /** @type{?proto.sandboxes.api.v1.Org.Membership} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_org_pb.Org.Membership, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.Org.Membership|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.AddMember} returns this
*/
proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.prototype.setMembership = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.AddMember} returns this
 */
proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.prototype.clearMembership = function() {
  return this.setMembership(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.prototype.hasMembership = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Notification notification = 3;
 * @return {?proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.prototype.getNotification = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.Notification|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.AddMember} returns this
*/
proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.prototype.setNotification = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.AddMember} returns this
 */
proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.prototype.clearNotification = function() {
  return this.setNotification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.prototype.hasNotification = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Settings.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateOrgRequest.Settings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest.Settings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Settings.toObject = function(includeInstance, msg) {
  var f, obj = {
    settings: (f = msg.getSettings()) && sandboxes_api_v1_org_pb.Org.Settings.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.Settings}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Settings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateOrgRequest.Settings;
  return proto.sandboxes.api.v1.UpdateOrgRequest.Settings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest.Settings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.Settings}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Settings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_org_pb.Org.Settings;
      reader.readMessage(value,sandboxes_api_v1_org_pb.Org.Settings.deserializeBinaryFromReader);
      msg.setSettings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Settings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateOrgRequest.Settings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest.Settings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Settings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_org_pb.Org.Settings.serializeBinaryToWriter
    );
  }
};


/**
 * optional Org.Settings settings = 1;
 * @return {?proto.sandboxes.api.v1.Org.Settings}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Settings.prototype.getSettings = function() {
  return /** @type{?proto.sandboxes.api.v1.Org.Settings} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_org_pb.Org.Settings, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Org.Settings|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.Settings} returns this
*/
proto.sandboxes.api.v1.UpdateOrgRequest.Settings.prototype.setSettings = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.Settings} returns this
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Settings.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Settings.prototype.hasSettings = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode.toObject = function(includeInstance, msg) {
  var f, obj = {
    mode: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode;
  return proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sandboxes.api.v1.Org.DomainSignInMode} */ (reader.readEnum());
      msg.setMode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional Org.DomainSignInMode mode = 1;
 * @return {!proto.sandboxes.api.v1.Org.DomainSignInMode}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode.prototype.getMode = function() {
  return /** @type {!proto.sandboxes.api.v1.Org.DomainSignInMode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sandboxes.api.v1.Org.DomainSignInMode} value
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode} returns this
 */
proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode.prototype.setMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    policy: (f = msg.getPolicy()) && sandboxes_api_v1_org_pb.Policy.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy;
  return proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_org_pb.Policy;
      reader.readMessage(value,sandboxes_api_v1_org_pb.Policy.deserializeBinaryFromReader);
      msg.setPolicy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolicy();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_org_pb.Policy.serializeBinaryToWriter
    );
  }
};


/**
 * optional Policy policy = 1;
 * @return {?proto.sandboxes.api.v1.Policy}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy.prototype.getPolicy = function() {
  return /** @type{?proto.sandboxes.api.v1.Policy} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_org_pb.Policy, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Policy|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy} returns this
*/
proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy.prototype.setPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy} returns this
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy.prototype.clearPolicy = function() {
  return this.setPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy.prototype.hasPolicy = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains.toObject = function(includeInstance, msg) {
  var f, obj = {
    domainsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains;
  return proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addDomains(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomainsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string domains = 1;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains.prototype.getDomainsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains} returns this
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains.prototype.setDomainsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains} returns this
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains.prototype.addDomains = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains} returns this
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains.prototype.clearDomainsList = function() {
  return this.setDomainsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides.toObject = function(includeInstance, msg) {
  var f, obj = {
    settingsOverridesList: jspb.Message.toObjectList(msg.getSettingsOverridesList(),
    sandboxes_api_v1_org_pb.Org.SettingsOverride.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides;
  return proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_org_pb.Org.SettingsOverride;
      reader.readMessage(value,sandboxes_api_v1_org_pb.Org.SettingsOverride.deserializeBinaryFromReader);
      msg.addSettingsOverrides(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSettingsOverridesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      sandboxes_api_v1_org_pb.Org.SettingsOverride.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Org.SettingsOverride settings_overrides = 1;
 * @return {!Array<!proto.sandboxes.api.v1.Org.SettingsOverride>}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides.prototype.getSettingsOverridesList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.Org.SettingsOverride>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_org_pb.Org.SettingsOverride, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.Org.SettingsOverride>} value
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides} returns this
*/
proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides.prototype.setSettingsOverridesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sandboxes.api.v1.Org.SettingsOverride=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Org.SettingsOverride}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides.prototype.addSettingsOverrides = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sandboxes.api.v1.Org.SettingsOverride, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides} returns this
 */
proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides.prototype.clearSettingsOverridesList = function() {
  return this.setSettingsOverridesList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.oneofGroups_ = [[1,2,3,4,5,6,7,8,9]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.UpdateCase = {
  UPDATE_NOT_SET: 0,
  SET_MEMBERS: 1,
  SETTINGS: 2,
  DOMAIN_SIGNIN_MODE: 3,
  SET_POLICY: 4,
  ADD_MEMBER: 5,
  UPDATE_MEMBER: 6,
  REMOVE_MEMBER: 7,
  SET_DOMAINS: 8,
  SETTINGS_OVERRIDES: 9
};

/**
 * @return {proto.sandboxes.api.v1.UpdateOrgRequest.Update.UpdateCase}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.getUpdateCase = function() {
  return /** @type {proto.sandboxes.api.v1.UpdateOrgRequest.Update.UpdateCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.UpdateOrgRequest.Update.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateOrgRequest.Update.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest.Update} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.toObject = function(includeInstance, msg) {
  var f, obj = {
    setMembers: (f = msg.getSetMembers()) && proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers.toObject(includeInstance, f),
    settings: (f = msg.getSettings()) && proto.sandboxes.api.v1.UpdateOrgRequest.Settings.toObject(includeInstance, f),
    domainSigninMode: (f = msg.getDomainSigninMode()) && proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode.toObject(includeInstance, f),
    setPolicy: (f = msg.getSetPolicy()) && proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy.toObject(includeInstance, f),
    addMember: (f = msg.getAddMember()) && proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.toObject(includeInstance, f),
    updateMember: (f = msg.getUpdateMember()) && sandboxes_api_v1_org_pb.Org.Membership.toObject(includeInstance, f),
    removeMember: jspb.Message.getFieldWithDefault(msg, 7, ""),
    setDomains: (f = msg.getSetDomains()) && proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains.toObject(includeInstance, f),
    settingsOverrides: (f = msg.getSettingsOverrides()) && proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.Update}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateOrgRequest.Update;
  return proto.sandboxes.api.v1.UpdateOrgRequest.Update.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest.Update} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.Update}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers.deserializeBinaryFromReader);
      msg.setSetMembers(value);
      break;
    case 2:
      var value = new proto.sandboxes.api.v1.UpdateOrgRequest.Settings;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateOrgRequest.Settings.deserializeBinaryFromReader);
      msg.setSettings(value);
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode.deserializeBinaryFromReader);
      msg.setDomainSigninMode(value);
      break;
    case 4:
      var value = new proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy.deserializeBinaryFromReader);
      msg.setSetPolicy(value);
      break;
    case 5:
      var value = new proto.sandboxes.api.v1.UpdateOrgRequest.AddMember;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.deserializeBinaryFromReader);
      msg.setAddMember(value);
      break;
    case 6:
      var value = new sandboxes_api_v1_org_pb.Org.Membership;
      reader.readMessage(value,sandboxes_api_v1_org_pb.Org.Membership.deserializeBinaryFromReader);
      msg.setUpdateMember(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemoveMember(value);
      break;
    case 8:
      var value = new proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains.deserializeBinaryFromReader);
      msg.setSetDomains(value);
      break;
    case 9:
      var value = new proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides.deserializeBinaryFromReader);
      msg.setSettingsOverrides(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateOrgRequest.Update.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest.Update} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSetMembers();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers.serializeBinaryToWriter
    );
  }
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sandboxes.api.v1.UpdateOrgRequest.Settings.serializeBinaryToWriter
    );
  }
  f = message.getDomainSigninMode();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode.serializeBinaryToWriter
    );
  }
  f = message.getSetPolicy();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy.serializeBinaryToWriter
    );
  }
  f = message.getAddMember();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.sandboxes.api.v1.UpdateOrgRequest.AddMember.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMember();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      sandboxes_api_v1_org_pb.Org.Membership.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSetDomains();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains.serializeBinaryToWriter
    );
  }
  f = message.getSettingsOverrides();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides.serializeBinaryToWriter
    );
  }
};


/**
 * optional SetMembers set_members = 1;
 * @return {?proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.getSetMembers = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateOrgRequest.SetMembers|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.Update} returns this
*/
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.setSetMembers = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.sandboxes.api.v1.UpdateOrgRequest.Update.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.Update} returns this
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.clearSetMembers = function() {
  return this.setSetMembers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.hasSetMembers = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Settings settings = 2;
 * @return {?proto.sandboxes.api.v1.UpdateOrgRequest.Settings}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.getSettings = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateOrgRequest.Settings} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateOrgRequest.Settings, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateOrgRequest.Settings|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.Update} returns this
*/
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.setSettings = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.sandboxes.api.v1.UpdateOrgRequest.Update.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.Update} returns this
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.hasSettings = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DomainSignInMode domain_signin_mode = 3;
 * @return {?proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.getDomainSigninMode = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateOrgRequest.DomainSignInMode|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.Update} returns this
*/
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.setDomainSigninMode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.sandboxes.api.v1.UpdateOrgRequest.Update.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.Update} returns this
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.clearDomainSigninMode = function() {
  return this.setDomainSigninMode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.hasDomainSigninMode = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SetPolicy set_policy = 4;
 * @return {?proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.getSetPolicy = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateOrgRequest.SetPolicy|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.Update} returns this
*/
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.setSetPolicy = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.sandboxes.api.v1.UpdateOrgRequest.Update.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.Update} returns this
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.clearSetPolicy = function() {
  return this.setSetPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.hasSetPolicy = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AddMember add_member = 5;
 * @return {?proto.sandboxes.api.v1.UpdateOrgRequest.AddMember}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.getAddMember = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateOrgRequest.AddMember} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateOrgRequest.AddMember, 5));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateOrgRequest.AddMember|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.Update} returns this
*/
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.setAddMember = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.sandboxes.api.v1.UpdateOrgRequest.Update.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.Update} returns this
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.clearAddMember = function() {
  return this.setAddMember(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.hasAddMember = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Org.Membership update_member = 6;
 * @return {?proto.sandboxes.api.v1.Org.Membership}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.getUpdateMember = function() {
  return /** @type{?proto.sandboxes.api.v1.Org.Membership} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_org_pb.Org.Membership, 6));
};


/**
 * @param {?proto.sandboxes.api.v1.Org.Membership|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.Update} returns this
*/
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.setUpdateMember = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.sandboxes.api.v1.UpdateOrgRequest.Update.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.Update} returns this
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.clearUpdateMember = function() {
  return this.setUpdateMember(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.hasUpdateMember = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string remove_member = 7;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.getRemoveMember = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.Update} returns this
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.setRemoveMember = function(value) {
  return jspb.Message.setOneofField(this, 7, proto.sandboxes.api.v1.UpdateOrgRequest.Update.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.Update} returns this
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.clearRemoveMember = function() {
  return jspb.Message.setOneofField(this, 7, proto.sandboxes.api.v1.UpdateOrgRequest.Update.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.hasRemoveMember = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional SetDomains set_domains = 8;
 * @return {?proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.getSetDomains = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains, 8));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateOrgRequest.SetDomains|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.Update} returns this
*/
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.setSetDomains = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.sandboxes.api.v1.UpdateOrgRequest.Update.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.Update} returns this
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.clearSetDomains = function() {
  return this.setSetDomains(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.hasSetDomains = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional SettingsOverrides settings_overrides = 9;
 * @return {?proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.getSettingsOverrides = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides, 9));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateOrgRequest.SettingsOverrides|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.Update} returns this
*/
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.setSettingsOverrides = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.sandboxes.api.v1.UpdateOrgRequest.Update.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.Update} returns this
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.clearSettingsOverrides = function() {
  return this.setSettingsOverrides(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.Update.prototype.hasSettingsOverrides = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest} returns this
 */
proto.sandboxes.api.v1.UpdateOrgRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Update updates = 2;
 * @return {!Array<!proto.sandboxes.api.v1.UpdateOrgRequest.Update>}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.prototype.getUpdatesList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.UpdateOrgRequest.Update>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.UpdateOrgRequest.Update, 2));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.UpdateOrgRequest.Update>} value
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest} returns this
*/
proto.sandboxes.api.v1.UpdateOrgRequest.prototype.setUpdatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sandboxes.api.v1.UpdateOrgRequest.Update=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest.Update}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.prototype.addUpdates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sandboxes.api.v1.UpdateOrgRequest.Update, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest} returns this
 */
proto.sandboxes.api.v1.UpdateOrgRequest.prototype.clearUpdatesList = function() {
  return this.setUpdatesList([]);
};


/**
 * optional string version = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateOrgRequest.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateOrgRequest} returns this
 */
proto.sandboxes.api.v1.UpdateOrgRequest.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateOrgResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateOrgResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateOrgResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateOrgResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    org: (f = msg.getOrg()) && sandboxes_api_v1_org_pb.OrgWithMembers.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateOrgResponse}
 */
proto.sandboxes.api.v1.UpdateOrgResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateOrgResponse;
  return proto.sandboxes.api.v1.UpdateOrgResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateOrgResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateOrgResponse}
 */
proto.sandboxes.api.v1.UpdateOrgResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_org_pb.OrgWithMembers;
      reader.readMessage(value,sandboxes_api_v1_org_pb.OrgWithMembers.deserializeBinaryFromReader);
      msg.setOrg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateOrgResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateOrgResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateOrgResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateOrgResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrg();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_org_pb.OrgWithMembers.serializeBinaryToWriter
    );
  }
};


/**
 * optional OrgWithMembers org = 1;
 * @return {?proto.sandboxes.api.v1.OrgWithMembers}
 */
proto.sandboxes.api.v1.UpdateOrgResponse.prototype.getOrg = function() {
  return /** @type{?proto.sandboxes.api.v1.OrgWithMembers} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_org_pb.OrgWithMembers, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.OrgWithMembers|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateOrgResponse} returns this
*/
proto.sandboxes.api.v1.UpdateOrgResponse.prototype.setOrg = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateOrgResponse} returns this
 */
proto.sandboxes.api.v1.UpdateOrgResponse.prototype.clearOrg = function() {
  return this.setOrg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateOrgResponse.prototype.hasOrg = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.CreateFolderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.CreateFolderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.CreateFolderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateFolderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    folder: (f = msg.getFolder()) && sandboxes_api_v1_org_pb.Folder.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.CreateFolderRequest}
 */
proto.sandboxes.api.v1.CreateFolderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.CreateFolderRequest;
  return proto.sandboxes.api.v1.CreateFolderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.CreateFolderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.CreateFolderRequest}
 */
proto.sandboxes.api.v1.CreateFolderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_org_pb.Folder;
      reader.readMessage(value,sandboxes_api_v1_org_pb.Folder.deserializeBinaryFromReader);
      msg.setFolder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.CreateFolderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.CreateFolderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.CreateFolderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateFolderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFolder();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_org_pb.Folder.serializeBinaryToWriter
    );
  }
};


/**
 * optional Folder folder = 1;
 * @return {?proto.sandboxes.api.v1.Folder}
 */
proto.sandboxes.api.v1.CreateFolderRequest.prototype.getFolder = function() {
  return /** @type{?proto.sandboxes.api.v1.Folder} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_org_pb.Folder, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Folder|undefined} value
 * @return {!proto.sandboxes.api.v1.CreateFolderRequest} returns this
*/
proto.sandboxes.api.v1.CreateFolderRequest.prototype.setFolder = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.CreateFolderRequest} returns this
 */
proto.sandboxes.api.v1.CreateFolderRequest.prototype.clearFolder = function() {
  return this.setFolder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.CreateFolderRequest.prototype.hasFolder = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.CreateFolderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.CreateFolderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.CreateFolderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateFolderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    folder: (f = msg.getFolder()) && sandboxes_api_v1_org_pb.Folder.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.CreateFolderResponse}
 */
proto.sandboxes.api.v1.CreateFolderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.CreateFolderResponse;
  return proto.sandboxes.api.v1.CreateFolderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.CreateFolderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.CreateFolderResponse}
 */
proto.sandboxes.api.v1.CreateFolderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_org_pb.Folder;
      reader.readMessage(value,sandboxes_api_v1_org_pb.Folder.deserializeBinaryFromReader);
      msg.setFolder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.CreateFolderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.CreateFolderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.CreateFolderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateFolderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFolder();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_org_pb.Folder.serializeBinaryToWriter
    );
  }
};


/**
 * optional Folder folder = 1;
 * @return {?proto.sandboxes.api.v1.Folder}
 */
proto.sandboxes.api.v1.CreateFolderResponse.prototype.getFolder = function() {
  return /** @type{?proto.sandboxes.api.v1.Folder} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_org_pb.Folder, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Folder|undefined} value
 * @return {!proto.sandboxes.api.v1.CreateFolderResponse} returns this
*/
proto.sandboxes.api.v1.CreateFolderResponse.prototype.setFolder = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.CreateFolderResponse} returns this
 */
proto.sandboxes.api.v1.CreateFolderResponse.prototype.clearFolder = function() {
  return this.setFolder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.CreateFolderResponse.prototype.hasFolder = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.ListFoldersRequest.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.ListFoldersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ListFoldersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ListFoldersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListFoldersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filterByIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    filterByNamesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.ListFoldersRequest}
 */
proto.sandboxes.api.v1.ListFoldersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ListFoldersRequest;
  return proto.sandboxes.api.v1.ListFoldersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ListFoldersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ListFoldersRequest}
 */
proto.sandboxes.api.v1.ListFoldersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilterByIds(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilterByNames(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.ListFoldersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ListFoldersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ListFoldersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListFoldersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilterByIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getFilterByNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.ListFoldersRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.ListFoldersRequest} returns this
 */
proto.sandboxes.api.v1.ListFoldersRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string filter_by_ids = 2;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.ListFoldersRequest.prototype.getFilterByIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.ListFoldersRequest} returns this
 */
proto.sandboxes.api.v1.ListFoldersRequest.prototype.setFilterByIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.ListFoldersRequest} returns this
 */
proto.sandboxes.api.v1.ListFoldersRequest.prototype.addFilterByIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ListFoldersRequest} returns this
 */
proto.sandboxes.api.v1.ListFoldersRequest.prototype.clearFilterByIdsList = function() {
  return this.setFilterByIdsList([]);
};


/**
 * repeated string filter_by_names = 3;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.ListFoldersRequest.prototype.getFilterByNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.ListFoldersRequest} returns this
 */
proto.sandboxes.api.v1.ListFoldersRequest.prototype.setFilterByNamesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.ListFoldersRequest} returns this
 */
proto.sandboxes.api.v1.ListFoldersRequest.prototype.addFilterByNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ListFoldersRequest} returns this
 */
proto.sandboxes.api.v1.ListFoldersRequest.prototype.clearFilterByNamesList = function() {
  return this.setFilterByNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.ListFoldersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.ListFoldersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ListFoldersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ListFoldersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListFoldersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    foldersList: jspb.Message.toObjectList(msg.getFoldersList(),
    sandboxes_api_v1_org_pb.Folder.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.ListFoldersResponse}
 */
proto.sandboxes.api.v1.ListFoldersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ListFoldersResponse;
  return proto.sandboxes.api.v1.ListFoldersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ListFoldersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ListFoldersResponse}
 */
proto.sandboxes.api.v1.ListFoldersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_org_pb.Folder;
      reader.readMessage(value,sandboxes_api_v1_org_pb.Folder.deserializeBinaryFromReader);
      msg.addFolders(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.ListFoldersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ListFoldersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ListFoldersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListFoldersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFoldersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      sandboxes_api_v1_org_pb.Folder.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Folder folders = 1;
 * @return {!Array<!proto.sandboxes.api.v1.Folder>}
 */
proto.sandboxes.api.v1.ListFoldersResponse.prototype.getFoldersList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.Folder>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_org_pb.Folder, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.Folder>} value
 * @return {!proto.sandboxes.api.v1.ListFoldersResponse} returns this
*/
proto.sandboxes.api.v1.ListFoldersResponse.prototype.setFoldersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sandboxes.api.v1.Folder=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Folder}
 */
proto.sandboxes.api.v1.ListFoldersResponse.prototype.addFolders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sandboxes.api.v1.Folder, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ListFoldersResponse} returns this
 */
proto.sandboxes.api.v1.ListFoldersResponse.prototype.clearFoldersList = function() {
  return this.setFoldersList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sandboxes.api.v1.UpdateFolderRequest.oneofGroups_ = [[3,4,5]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.UpdateCase = {
  UPDATE_NOT_SET: 0,
  SET_POLICY: 3,
  RENAME: 4,
  MOVE: 5
};

/**
 * @return {proto.sandboxes.api.v1.UpdateFolderRequest.UpdateCase}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.prototype.getUpdateCase = function() {
  return /** @type {proto.sandboxes.api.v1.UpdateFolderRequest.UpdateCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.UpdateFolderRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateFolderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateFolderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateFolderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, ""),
    setPolicy: (f = msg.getSetPolicy()) && proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy.toObject(includeInstance, f),
    rename: (f = msg.getRename()) && proto.sandboxes.api.v1.UpdateFolderRequest.Rename.toObject(includeInstance, f),
    move: (f = msg.getMove()) && proto.sandboxes.api.v1.UpdateFolderRequest.Move.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateFolderRequest}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateFolderRequest;
  return proto.sandboxes.api.v1.UpdateFolderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateFolderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateFolderRequest}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy.deserializeBinaryFromReader);
      msg.setSetPolicy(value);
      break;
    case 4:
      var value = new proto.sandboxes.api.v1.UpdateFolderRequest.Rename;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateFolderRequest.Rename.deserializeBinaryFromReader);
      msg.setRename(value);
      break;
    case 5:
      var value = new proto.sandboxes.api.v1.UpdateFolderRequest.Move;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateFolderRequest.Move.deserializeBinaryFromReader);
      msg.setMove(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateFolderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateFolderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateFolderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSetPolicy();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy.serializeBinaryToWriter
    );
  }
  f = message.getRename();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sandboxes.api.v1.UpdateFolderRequest.Rename.serializeBinaryToWriter
    );
  }
  f = message.getMove();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.sandboxes.api.v1.UpdateFolderRequest.Move.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    policy: (f = msg.getPolicy()) && sandboxes_api_v1_org_pb.Policy.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy;
  return proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_org_pb.Policy;
      reader.readMessage(value,sandboxes_api_v1_org_pb.Policy.deserializeBinaryFromReader);
      msg.setPolicy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolicy();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_org_pb.Policy.serializeBinaryToWriter
    );
  }
};


/**
 * optional Policy policy = 1;
 * @return {?proto.sandboxes.api.v1.Policy}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy.prototype.getPolicy = function() {
  return /** @type{?proto.sandboxes.api.v1.Policy} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_org_pb.Policy, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Policy|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy} returns this
*/
proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy.prototype.setPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy} returns this
 */
proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy.prototype.clearPolicy = function() {
  return this.setPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy.prototype.hasPolicy = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.Rename.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateFolderRequest.Rename.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateFolderRequest.Rename} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateFolderRequest.Rename.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateFolderRequest.Rename}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.Rename.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateFolderRequest.Rename;
  return proto.sandboxes.api.v1.UpdateFolderRequest.Rename.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateFolderRequest.Rename} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateFolderRequest.Rename}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.Rename.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.Rename.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateFolderRequest.Rename.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateFolderRequest.Rename} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateFolderRequest.Rename.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.Rename.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateFolderRequest.Rename} returns this
 */
proto.sandboxes.api.v1.UpdateFolderRequest.Rename.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.Move.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateFolderRequest.Move.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateFolderRequest.Move} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateFolderRequest.Move.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parentId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateFolderRequest.Move}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.Move.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateFolderRequest.Move;
  return proto.sandboxes.api.v1.UpdateFolderRequest.Move.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateFolderRequest.Move} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateFolderRequest.Move}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.Move.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.Move.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateFolderRequest.Move.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateFolderRequest.Move} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateFolderRequest.Move.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParentId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.Move.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateFolderRequest.Move} returns this
 */
proto.sandboxes.api.v1.UpdateFolderRequest.Move.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string parent_id = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.Move.prototype.getParentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateFolderRequest.Move} returns this
 */
proto.sandboxes.api.v1.UpdateFolderRequest.Move.prototype.setParentId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateFolderRequest} returns this
 */
proto.sandboxes.api.v1.UpdateFolderRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateFolderRequest} returns this
 */
proto.sandboxes.api.v1.UpdateFolderRequest.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional SetPolicy set_policy = 3;
 * @return {?proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.prototype.getSetPolicy = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateFolderRequest.SetPolicy|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateFolderRequest} returns this
*/
proto.sandboxes.api.v1.UpdateFolderRequest.prototype.setSetPolicy = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.sandboxes.api.v1.UpdateFolderRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateFolderRequest} returns this
 */
proto.sandboxes.api.v1.UpdateFolderRequest.prototype.clearSetPolicy = function() {
  return this.setSetPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.prototype.hasSetPolicy = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Rename rename = 4;
 * @return {?proto.sandboxes.api.v1.UpdateFolderRequest.Rename}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.prototype.getRename = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateFolderRequest.Rename} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateFolderRequest.Rename, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateFolderRequest.Rename|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateFolderRequest} returns this
*/
proto.sandboxes.api.v1.UpdateFolderRequest.prototype.setRename = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.sandboxes.api.v1.UpdateFolderRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateFolderRequest} returns this
 */
proto.sandboxes.api.v1.UpdateFolderRequest.prototype.clearRename = function() {
  return this.setRename(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.prototype.hasRename = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Move move = 5;
 * @return {?proto.sandboxes.api.v1.UpdateFolderRequest.Move}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.prototype.getMove = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateFolderRequest.Move} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateFolderRequest.Move, 5));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateFolderRequest.Move|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateFolderRequest} returns this
*/
proto.sandboxes.api.v1.UpdateFolderRequest.prototype.setMove = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.sandboxes.api.v1.UpdateFolderRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateFolderRequest} returns this
 */
proto.sandboxes.api.v1.UpdateFolderRequest.prototype.clearMove = function() {
  return this.setMove(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateFolderRequest.prototype.hasMove = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateFolderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateFolderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateFolderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateFolderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    folder: (f = msg.getFolder()) && sandboxes_api_v1_org_pb.Folder.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateFolderResponse}
 */
proto.sandboxes.api.v1.UpdateFolderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateFolderResponse;
  return proto.sandboxes.api.v1.UpdateFolderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateFolderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateFolderResponse}
 */
proto.sandboxes.api.v1.UpdateFolderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_org_pb.Folder;
      reader.readMessage(value,sandboxes_api_v1_org_pb.Folder.deserializeBinaryFromReader);
      msg.setFolder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateFolderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateFolderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateFolderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateFolderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFolder();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_org_pb.Folder.serializeBinaryToWriter
    );
  }
};


/**
 * optional Folder folder = 1;
 * @return {?proto.sandboxes.api.v1.Folder}
 */
proto.sandboxes.api.v1.UpdateFolderResponse.prototype.getFolder = function() {
  return /** @type{?proto.sandboxes.api.v1.Folder} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_org_pb.Folder, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Folder|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateFolderResponse} returns this
*/
proto.sandboxes.api.v1.UpdateFolderResponse.prototype.setFolder = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateFolderResponse} returns this
 */
proto.sandboxes.api.v1.UpdateFolderResponse.prototype.clearFolder = function() {
  return this.setFolder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateFolderResponse.prototype.hasFolder = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.DeleteFolderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.DeleteFolderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.DeleteFolderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteFolderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.DeleteFolderRequest}
 */
proto.sandboxes.api.v1.DeleteFolderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.DeleteFolderRequest;
  return proto.sandboxes.api.v1.DeleteFolderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.DeleteFolderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.DeleteFolderRequest}
 */
proto.sandboxes.api.v1.DeleteFolderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.DeleteFolderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.DeleteFolderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.DeleteFolderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteFolderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.DeleteFolderRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.DeleteFolderRequest} returns this
 */
proto.sandboxes.api.v1.DeleteFolderRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.DeleteFolderRequest.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.DeleteFolderRequest} returns this
 */
proto.sandboxes.api.v1.DeleteFolderRequest.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.DeleteFolderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.DeleteFolderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.DeleteFolderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteFolderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    folder: (f = msg.getFolder()) && sandboxes_api_v1_org_pb.Folder.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.DeleteFolderResponse}
 */
proto.sandboxes.api.v1.DeleteFolderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.DeleteFolderResponse;
  return proto.sandboxes.api.v1.DeleteFolderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.DeleteFolderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.DeleteFolderResponse}
 */
proto.sandboxes.api.v1.DeleteFolderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_org_pb.Folder;
      reader.readMessage(value,sandboxes_api_v1_org_pb.Folder.deserializeBinaryFromReader);
      msg.setFolder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.DeleteFolderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.DeleteFolderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.DeleteFolderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteFolderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFolder();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_org_pb.Folder.serializeBinaryToWriter
    );
  }
};


/**
 * optional Folder folder = 1;
 * @return {?proto.sandboxes.api.v1.Folder}
 */
proto.sandboxes.api.v1.DeleteFolderResponse.prototype.getFolder = function() {
  return /** @type{?proto.sandboxes.api.v1.Folder} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_org_pb.Folder, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Folder|undefined} value
 * @return {!proto.sandboxes.api.v1.DeleteFolderResponse} returns this
*/
proto.sandboxes.api.v1.DeleteFolderResponse.prototype.setFolder = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.DeleteFolderResponse} returns this
 */
proto.sandboxes.api.v1.DeleteFolderResponse.prototype.clearFolder = function() {
  return this.setFolder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.DeleteFolderResponse.prototype.hasFolder = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.ListServiceAccountsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ListServiceAccountsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ListServiceAccountsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListServiceAccountsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.ListServiceAccountsRequest}
 */
proto.sandboxes.api.v1.ListServiceAccountsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ListServiceAccountsRequest;
  return proto.sandboxes.api.v1.ListServiceAccountsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ListServiceAccountsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ListServiceAccountsRequest}
 */
proto.sandboxes.api.v1.ListServiceAccountsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.ListServiceAccountsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ListServiceAccountsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ListServiceAccountsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListServiceAccountsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.ListServiceAccountsRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.ListServiceAccountsRequest} returns this
 */
proto.sandboxes.api.v1.ListServiceAccountsRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.ListServiceAccountsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.ListServiceAccountsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ListServiceAccountsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ListServiceAccountsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListServiceAccountsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountsList: jspb.Message.toObjectList(msg.getAccountsList(),
    sandboxes_api_v1_user_pb.User.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.ListServiceAccountsResponse}
 */
proto.sandboxes.api.v1.ListServiceAccountsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ListServiceAccountsResponse;
  return proto.sandboxes.api.v1.ListServiceAccountsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ListServiceAccountsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ListServiceAccountsResponse}
 */
proto.sandboxes.api.v1.ListServiceAccountsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_user_pb.User;
      reader.readMessage(value,sandboxes_api_v1_user_pb.User.deserializeBinaryFromReader);
      msg.addAccounts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.ListServiceAccountsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ListServiceAccountsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ListServiceAccountsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListServiceAccountsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      sandboxes_api_v1_user_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * repeated User accounts = 1;
 * @return {!Array<!proto.sandboxes.api.v1.User>}
 */
proto.sandboxes.api.v1.ListServiceAccountsResponse.prototype.getAccountsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_user_pb.User, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.User>} value
 * @return {!proto.sandboxes.api.v1.ListServiceAccountsResponse} returns this
*/
proto.sandboxes.api.v1.ListServiceAccountsResponse.prototype.setAccountsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sandboxes.api.v1.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.User}
 */
proto.sandboxes.api.v1.ListServiceAccountsResponse.prototype.addAccounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sandboxes.api.v1.User, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ListServiceAccountsResponse} returns this
 */
proto.sandboxes.api.v1.ListServiceAccountsResponse.prototype.clearAccountsList = function() {
  return this.setAccountsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.CreateServiceAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.CreateServiceAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.CreateServiceAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateServiceAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    membership: (f = msg.getMembership()) && sandboxes_api_v1_org_pb.Org.Membership.toObject(includeInstance, f),
    linkedEmail: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.CreateServiceAccountRequest}
 */
proto.sandboxes.api.v1.CreateServiceAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.CreateServiceAccountRequest;
  return proto.sandboxes.api.v1.CreateServiceAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.CreateServiceAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.CreateServiceAccountRequest}
 */
proto.sandboxes.api.v1.CreateServiceAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 4:
      var value = new sandboxes_api_v1_org_pb.Org.Membership;
      reader.readMessage(value,sandboxes_api_v1_org_pb.Org.Membership.deserializeBinaryFromReader);
      msg.setMembership(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLinkedEmail(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.CreateServiceAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.CreateServiceAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.CreateServiceAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateServiceAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMembership();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      sandboxes_api_v1_org_pb.Org.Membership.serializeBinaryToWriter
    );
  }
  f = message.getLinkedEmail();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.CreateServiceAccountRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.CreateServiceAccountRequest} returns this
 */
proto.sandboxes.api.v1.CreateServiceAccountRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.CreateServiceAccountRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.CreateServiceAccountRequest} returns this
 */
proto.sandboxes.api.v1.CreateServiceAccountRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string display_name = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.CreateServiceAccountRequest.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.CreateServiceAccountRequest} returns this
 */
proto.sandboxes.api.v1.CreateServiceAccountRequest.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Org.Membership membership = 4;
 * @return {?proto.sandboxes.api.v1.Org.Membership}
 */
proto.sandboxes.api.v1.CreateServiceAccountRequest.prototype.getMembership = function() {
  return /** @type{?proto.sandboxes.api.v1.Org.Membership} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_org_pb.Org.Membership, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.Org.Membership|undefined} value
 * @return {!proto.sandboxes.api.v1.CreateServiceAccountRequest} returns this
*/
proto.sandboxes.api.v1.CreateServiceAccountRequest.prototype.setMembership = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.CreateServiceAccountRequest} returns this
 */
proto.sandboxes.api.v1.CreateServiceAccountRequest.prototype.clearMembership = function() {
  return this.setMembership(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.CreateServiceAccountRequest.prototype.hasMembership = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string linked_email = 5;
 * @return {string}
 */
proto.sandboxes.api.v1.CreateServiceAccountRequest.prototype.getLinkedEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.CreateServiceAccountRequest} returns this
 */
proto.sandboxes.api.v1.CreateServiceAccountRequest.prototype.setLinkedEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.CreateServiceAccountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.CreateServiceAccountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.CreateServiceAccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateServiceAccountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: (f = msg.getAccount()) && sandboxes_api_v1_user_pb.User.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.CreateServiceAccountResponse}
 */
proto.sandboxes.api.v1.CreateServiceAccountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.CreateServiceAccountResponse;
  return proto.sandboxes.api.v1.CreateServiceAccountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.CreateServiceAccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.CreateServiceAccountResponse}
 */
proto.sandboxes.api.v1.CreateServiceAccountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_user_pb.User;
      reader.readMessage(value,sandboxes_api_v1_user_pb.User.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.CreateServiceAccountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.CreateServiceAccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.CreateServiceAccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateServiceAccountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_user_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional User account = 1;
 * @return {?proto.sandboxes.api.v1.User}
 */
proto.sandboxes.api.v1.CreateServiceAccountResponse.prototype.getAccount = function() {
  return /** @type{?proto.sandboxes.api.v1.User} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_user_pb.User, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.User|undefined} value
 * @return {!proto.sandboxes.api.v1.CreateServiceAccountResponse} returns this
*/
proto.sandboxes.api.v1.CreateServiceAccountResponse.prototype.setAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.CreateServiceAccountResponse} returns this
 */
proto.sandboxes.api.v1.CreateServiceAccountResponse.prototype.clearAccount = function() {
  return this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.CreateServiceAccountResponse.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateServiceAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateServiceAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateServiceAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateServiceAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accountId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    membership: (f = msg.getMembership()) && sandboxes_api_v1_org_pb.Org.Membership.toObject(includeInstance, f),
    version: jspb.Message.getFieldWithDefault(msg, 5, ""),
    linkedEmail: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateServiceAccountRequest}
 */
proto.sandboxes.api.v1.UpdateServiceAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateServiceAccountRequest;
  return proto.sandboxes.api.v1.UpdateServiceAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateServiceAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateServiceAccountRequest}
 */
proto.sandboxes.api.v1.UpdateServiceAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 4:
      var value = new sandboxes_api_v1_org_pb.Org.Membership;
      reader.readMessage(value,sandboxes_api_v1_org_pb.Org.Membership.deserializeBinaryFromReader);
      msg.setMembership(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLinkedEmail(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateServiceAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateServiceAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateServiceAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateServiceAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMembership();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      sandboxes_api_v1_org_pb.Org.Membership.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLinkedEmail();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateServiceAccountRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateServiceAccountRequest} returns this
 */
proto.sandboxes.api.v1.UpdateServiceAccountRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string account_id = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateServiceAccountRequest.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateServiceAccountRequest} returns this
 */
proto.sandboxes.api.v1.UpdateServiceAccountRequest.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string display_name = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateServiceAccountRequest.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateServiceAccountRequest} returns this
 */
proto.sandboxes.api.v1.UpdateServiceAccountRequest.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Org.Membership membership = 4;
 * @return {?proto.sandboxes.api.v1.Org.Membership}
 */
proto.sandboxes.api.v1.UpdateServiceAccountRequest.prototype.getMembership = function() {
  return /** @type{?proto.sandboxes.api.v1.Org.Membership} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_org_pb.Org.Membership, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.Org.Membership|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateServiceAccountRequest} returns this
*/
proto.sandboxes.api.v1.UpdateServiceAccountRequest.prototype.setMembership = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateServiceAccountRequest} returns this
 */
proto.sandboxes.api.v1.UpdateServiceAccountRequest.prototype.clearMembership = function() {
  return this.setMembership(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateServiceAccountRequest.prototype.hasMembership = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string version = 5;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateServiceAccountRequest.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateServiceAccountRequest} returns this
 */
proto.sandboxes.api.v1.UpdateServiceAccountRequest.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string linked_email = 6;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateServiceAccountRequest.prototype.getLinkedEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateServiceAccountRequest} returns this
 */
proto.sandboxes.api.v1.UpdateServiceAccountRequest.prototype.setLinkedEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateServiceAccountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateServiceAccountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateServiceAccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateServiceAccountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: (f = msg.getAccount()) && sandboxes_api_v1_user_pb.User.toObject(includeInstance, f),
    membership: (f = msg.getMembership()) && sandboxes_api_v1_org_pb.Org.Membership.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateServiceAccountResponse}
 */
proto.sandboxes.api.v1.UpdateServiceAccountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateServiceAccountResponse;
  return proto.sandboxes.api.v1.UpdateServiceAccountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateServiceAccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateServiceAccountResponse}
 */
proto.sandboxes.api.v1.UpdateServiceAccountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_user_pb.User;
      reader.readMessage(value,sandboxes_api_v1_user_pb.User.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    case 2:
      var value = new sandboxes_api_v1_org_pb.Org.Membership;
      reader.readMessage(value,sandboxes_api_v1_org_pb.Org.Membership.deserializeBinaryFromReader);
      msg.setMembership(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateServiceAccountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateServiceAccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateServiceAccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateServiceAccountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_user_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getMembership();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sandboxes_api_v1_org_pb.Org.Membership.serializeBinaryToWriter
    );
  }
};


/**
 * optional User account = 1;
 * @return {?proto.sandboxes.api.v1.User}
 */
proto.sandboxes.api.v1.UpdateServiceAccountResponse.prototype.getAccount = function() {
  return /** @type{?proto.sandboxes.api.v1.User} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_user_pb.User, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.User|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateServiceAccountResponse} returns this
*/
proto.sandboxes.api.v1.UpdateServiceAccountResponse.prototype.setAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateServiceAccountResponse} returns this
 */
proto.sandboxes.api.v1.UpdateServiceAccountResponse.prototype.clearAccount = function() {
  return this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateServiceAccountResponse.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Org.Membership membership = 2;
 * @return {?proto.sandboxes.api.v1.Org.Membership}
 */
proto.sandboxes.api.v1.UpdateServiceAccountResponse.prototype.getMembership = function() {
  return /** @type{?proto.sandboxes.api.v1.Org.Membership} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_org_pb.Org.Membership, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.Org.Membership|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateServiceAccountResponse} returns this
*/
proto.sandboxes.api.v1.UpdateServiceAccountResponse.prototype.setMembership = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateServiceAccountResponse} returns this
 */
proto.sandboxes.api.v1.UpdateServiceAccountResponse.prototype.clearMembership = function() {
  return this.setMembership(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateServiceAccountResponse.prototype.hasMembership = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.DeleteServiceAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.DeleteServiceAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.DeleteServiceAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteServiceAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accountId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.DeleteServiceAccountRequest}
 */
proto.sandboxes.api.v1.DeleteServiceAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.DeleteServiceAccountRequest;
  return proto.sandboxes.api.v1.DeleteServiceAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.DeleteServiceAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.DeleteServiceAccountRequest}
 */
proto.sandboxes.api.v1.DeleteServiceAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.DeleteServiceAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.DeleteServiceAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.DeleteServiceAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteServiceAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.DeleteServiceAccountRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.DeleteServiceAccountRequest} returns this
 */
proto.sandboxes.api.v1.DeleteServiceAccountRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string account_id = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.DeleteServiceAccountRequest.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.DeleteServiceAccountRequest} returns this
 */
proto.sandboxes.api.v1.DeleteServiceAccountRequest.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.DeleteServiceAccountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.DeleteServiceAccountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.DeleteServiceAccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteServiceAccountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.DeleteServiceAccountResponse}
 */
proto.sandboxes.api.v1.DeleteServiceAccountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.DeleteServiceAccountResponse;
  return proto.sandboxes.api.v1.DeleteServiceAccountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.DeleteServiceAccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.DeleteServiceAccountResponse}
 */
proto.sandboxes.api.v1.DeleteServiceAccountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.DeleteServiceAccountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.DeleteServiceAccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.DeleteServiceAccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteServiceAccountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.ListLoginTokensRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ListLoginTokensRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ListLoginTokensRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListLoginTokensRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.ListLoginTokensRequest}
 */
proto.sandboxes.api.v1.ListLoginTokensRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ListLoginTokensRequest;
  return proto.sandboxes.api.v1.ListLoginTokensRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ListLoginTokensRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ListLoginTokensRequest}
 */
proto.sandboxes.api.v1.ListLoginTokensRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.ListLoginTokensRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ListLoginTokensRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ListLoginTokensRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListLoginTokensRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.ListLoginTokensRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.ListLoginTokensRequest} returns this
 */
proto.sandboxes.api.v1.ListLoginTokensRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.ListLoginTokensResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.ListLoginTokensResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ListLoginTokensResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ListLoginTokensResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListLoginTokensResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokensList: jspb.Message.toObjectList(msg.getTokensList(),
    sandboxes_api_v1_resource_logintoken_pb.LoginToken.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.ListLoginTokensResponse}
 */
proto.sandboxes.api.v1.ListLoginTokensResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ListLoginTokensResponse;
  return proto.sandboxes.api.v1.ListLoginTokensResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ListLoginTokensResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ListLoginTokensResponse}
 */
proto.sandboxes.api.v1.ListLoginTokensResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_resource_logintoken_pb.LoginToken;
      reader.readMessage(value,sandboxes_api_v1_resource_logintoken_pb.LoginToken.deserializeBinaryFromReader);
      msg.addTokens(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.ListLoginTokensResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ListLoginTokensResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ListLoginTokensResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListLoginTokensResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokensList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      sandboxes_api_v1_resource_logintoken_pb.LoginToken.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LoginToken tokens = 1;
 * @return {!Array<!proto.sandboxes.api.v1.LoginToken>}
 */
proto.sandboxes.api.v1.ListLoginTokensResponse.prototype.getTokensList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.LoginToken>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_resource_logintoken_pb.LoginToken, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.LoginToken>} value
 * @return {!proto.sandboxes.api.v1.ListLoginTokensResponse} returns this
*/
proto.sandboxes.api.v1.ListLoginTokensResponse.prototype.setTokensList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sandboxes.api.v1.LoginToken=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.LoginToken}
 */
proto.sandboxes.api.v1.ListLoginTokensResponse.prototype.addTokens = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sandboxes.api.v1.LoginToken, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ListLoginTokensResponse} returns this
 */
proto.sandboxes.api.v1.ListLoginTokensResponse.prototype.clearTokensList = function() {
  return this.setTokensList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.CreateLoginTokenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.CreateLoginTokenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.CreateLoginTokenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateLoginTokenRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accountId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    validSince: (f = msg.getValidSince()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    expireAt: (f = msg.getExpireAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    webRedirectPath: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.CreateLoginTokenRequest}
 */
proto.sandboxes.api.v1.CreateLoginTokenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.CreateLoginTokenRequest;
  return proto.sandboxes.api.v1.CreateLoginTokenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.CreateLoginTokenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.CreateLoginTokenRequest}
 */
proto.sandboxes.api.v1.CreateLoginTokenRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountId(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setValidSince(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpireAt(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setWebRedirectPath(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.CreateLoginTokenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.CreateLoginTokenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.CreateLoginTokenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateLoginTokenRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValidSince();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExpireAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getWebRedirectPath();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.CreateLoginTokenRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.CreateLoginTokenRequest} returns this
 */
proto.sandboxes.api.v1.CreateLoginTokenRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string account_id = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.CreateLoginTokenRequest.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.CreateLoginTokenRequest} returns this
 */
proto.sandboxes.api.v1.CreateLoginTokenRequest.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp valid_since = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sandboxes.api.v1.CreateLoginTokenRequest.prototype.getValidSince = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.sandboxes.api.v1.CreateLoginTokenRequest} returns this
*/
proto.sandboxes.api.v1.CreateLoginTokenRequest.prototype.setValidSince = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.CreateLoginTokenRequest} returns this
 */
proto.sandboxes.api.v1.CreateLoginTokenRequest.prototype.clearValidSince = function() {
  return this.setValidSince(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.CreateLoginTokenRequest.prototype.hasValidSince = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp expire_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sandboxes.api.v1.CreateLoginTokenRequest.prototype.getExpireAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.sandboxes.api.v1.CreateLoginTokenRequest} returns this
*/
proto.sandboxes.api.v1.CreateLoginTokenRequest.prototype.setExpireAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.CreateLoginTokenRequest} returns this
 */
proto.sandboxes.api.v1.CreateLoginTokenRequest.prototype.clearExpireAt = function() {
  return this.setExpireAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.CreateLoginTokenRequest.prototype.hasExpireAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string web_redirect_path = 5;
 * @return {string}
 */
proto.sandboxes.api.v1.CreateLoginTokenRequest.prototype.getWebRedirectPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.CreateLoginTokenRequest} returns this
 */
proto.sandboxes.api.v1.CreateLoginTokenRequest.prototype.setWebRedirectPath = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.CreateLoginTokenResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.CreateLoginTokenResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.CreateLoginTokenResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateLoginTokenResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: (f = msg.getToken()) && sandboxes_api_v1_resource_logintoken_pb.LoginToken.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.CreateLoginTokenResponse}
 */
proto.sandboxes.api.v1.CreateLoginTokenResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.CreateLoginTokenResponse;
  return proto.sandboxes.api.v1.CreateLoginTokenResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.CreateLoginTokenResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.CreateLoginTokenResponse}
 */
proto.sandboxes.api.v1.CreateLoginTokenResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_resource_logintoken_pb.LoginToken;
      reader.readMessage(value,sandboxes_api_v1_resource_logintoken_pb.LoginToken.deserializeBinaryFromReader);
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.CreateLoginTokenResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.CreateLoginTokenResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.CreateLoginTokenResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateLoginTokenResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_resource_logintoken_pb.LoginToken.serializeBinaryToWriter
    );
  }
};


/**
 * optional LoginToken token = 1;
 * @return {?proto.sandboxes.api.v1.LoginToken}
 */
proto.sandboxes.api.v1.CreateLoginTokenResponse.prototype.getToken = function() {
  return /** @type{?proto.sandboxes.api.v1.LoginToken} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_resource_logintoken_pb.LoginToken, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.LoginToken|undefined} value
 * @return {!proto.sandboxes.api.v1.CreateLoginTokenResponse} returns this
*/
proto.sandboxes.api.v1.CreateLoginTokenResponse.prototype.setToken = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.CreateLoginTokenResponse} returns this
 */
proto.sandboxes.api.v1.CreateLoginTokenResponse.prototype.clearToken = function() {
  return this.setToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.CreateLoginTokenResponse.prototype.hasToken = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.DeleteLoginTokenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.DeleteLoginTokenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.DeleteLoginTokenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteLoginTokenRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    encodedToken: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.DeleteLoginTokenRequest}
 */
proto.sandboxes.api.v1.DeleteLoginTokenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.DeleteLoginTokenRequest;
  return proto.sandboxes.api.v1.DeleteLoginTokenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.DeleteLoginTokenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.DeleteLoginTokenRequest}
 */
proto.sandboxes.api.v1.DeleteLoginTokenRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEncodedToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.DeleteLoginTokenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.DeleteLoginTokenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.DeleteLoginTokenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteLoginTokenRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEncodedToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string encoded_token = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.DeleteLoginTokenRequest.prototype.getEncodedToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.DeleteLoginTokenRequest} returns this
 */
proto.sandboxes.api.v1.DeleteLoginTokenRequest.prototype.setEncodedToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.DeleteLoginTokenResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.DeleteLoginTokenResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.DeleteLoginTokenResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteLoginTokenResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.DeleteLoginTokenResponse}
 */
proto.sandboxes.api.v1.DeleteLoginTokenResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.DeleteLoginTokenResponse;
  return proto.sandboxes.api.v1.DeleteLoginTokenResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.DeleteLoginTokenResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.DeleteLoginTokenResponse}
 */
proto.sandboxes.api.v1.DeleteLoginTokenResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.DeleteLoginTokenResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.DeleteLoginTokenResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.DeleteLoginTokenResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteLoginTokenResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateLoginTokenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateLoginTokenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateLoginTokenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateLoginTokenRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    encodedToken: jspb.Message.getFieldWithDefault(msg, 1, ""),
    validSince: (f = msg.getValidSince()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    expireAt: (f = msg.getExpireAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    webRedirectPath: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateLoginTokenRequest}
 */
proto.sandboxes.api.v1.UpdateLoginTokenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateLoginTokenRequest;
  return proto.sandboxes.api.v1.UpdateLoginTokenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateLoginTokenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateLoginTokenRequest}
 */
proto.sandboxes.api.v1.UpdateLoginTokenRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEncodedToken(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setValidSince(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpireAt(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWebRedirectPath(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateLoginTokenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateLoginTokenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateLoginTokenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateLoginTokenRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEncodedToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValidSince();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExpireAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getWebRedirectPath();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string encoded_token = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateLoginTokenRequest.prototype.getEncodedToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateLoginTokenRequest} returns this
 */
proto.sandboxes.api.v1.UpdateLoginTokenRequest.prototype.setEncodedToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp valid_since = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sandboxes.api.v1.UpdateLoginTokenRequest.prototype.getValidSince = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateLoginTokenRequest} returns this
*/
proto.sandboxes.api.v1.UpdateLoginTokenRequest.prototype.setValidSince = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateLoginTokenRequest} returns this
 */
proto.sandboxes.api.v1.UpdateLoginTokenRequest.prototype.clearValidSince = function() {
  return this.setValidSince(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateLoginTokenRequest.prototype.hasValidSince = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp expire_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sandboxes.api.v1.UpdateLoginTokenRequest.prototype.getExpireAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateLoginTokenRequest} returns this
*/
proto.sandboxes.api.v1.UpdateLoginTokenRequest.prototype.setExpireAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateLoginTokenRequest} returns this
 */
proto.sandboxes.api.v1.UpdateLoginTokenRequest.prototype.clearExpireAt = function() {
  return this.setExpireAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateLoginTokenRequest.prototype.hasExpireAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string web_redirect_path = 4;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateLoginTokenRequest.prototype.getWebRedirectPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateLoginTokenRequest} returns this
 */
proto.sandboxes.api.v1.UpdateLoginTokenRequest.prototype.setWebRedirectPath = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateLoginTokenResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateLoginTokenResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateLoginTokenResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateLoginTokenResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateLoginTokenResponse}
 */
proto.sandboxes.api.v1.UpdateLoginTokenResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateLoginTokenResponse;
  return proto.sandboxes.api.v1.UpdateLoginTokenResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateLoginTokenResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateLoginTokenResponse}
 */
proto.sandboxes.api.v1.UpdateLoginTokenResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateLoginTokenResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateLoginTokenResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateLoginTokenResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateLoginTokenResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.ListAppsRequest.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.ListAppsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ListAppsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ListAppsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListAppsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filterByIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    filterByNamesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.ListAppsRequest}
 */
proto.sandboxes.api.v1.ListAppsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ListAppsRequest;
  return proto.sandboxes.api.v1.ListAppsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ListAppsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ListAppsRequest}
 */
proto.sandboxes.api.v1.ListAppsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilterByIds(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilterByNames(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.ListAppsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ListAppsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ListAppsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListAppsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilterByIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getFilterByNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.ListAppsRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.ListAppsRequest} returns this
 */
proto.sandboxes.api.v1.ListAppsRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string filter_by_ids = 2;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.ListAppsRequest.prototype.getFilterByIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.ListAppsRequest} returns this
 */
proto.sandboxes.api.v1.ListAppsRequest.prototype.setFilterByIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.ListAppsRequest} returns this
 */
proto.sandboxes.api.v1.ListAppsRequest.prototype.addFilterByIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ListAppsRequest} returns this
 */
proto.sandboxes.api.v1.ListAppsRequest.prototype.clearFilterByIdsList = function() {
  return this.setFilterByIdsList([]);
};


/**
 * repeated string filter_by_names = 3;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.ListAppsRequest.prototype.getFilterByNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.ListAppsRequest} returns this
 */
proto.sandboxes.api.v1.ListAppsRequest.prototype.setFilterByNamesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.ListAppsRequest} returns this
 */
proto.sandboxes.api.v1.ListAppsRequest.prototype.addFilterByNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ListAppsRequest} returns this
 */
proto.sandboxes.api.v1.ListAppsRequest.prototype.clearFilterByNamesList = function() {
  return this.setFilterByNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.ListAppsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.ListAppsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ListAppsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ListAppsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListAppsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    appsList: jspb.Message.toObjectList(msg.getAppsList(),
    sandboxes_api_v1_app_pb.App.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.ListAppsResponse}
 */
proto.sandboxes.api.v1.ListAppsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ListAppsResponse;
  return proto.sandboxes.api.v1.ListAppsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ListAppsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ListAppsResponse}
 */
proto.sandboxes.api.v1.ListAppsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_app_pb.App;
      reader.readMessage(value,sandboxes_api_v1_app_pb.App.deserializeBinaryFromReader);
      msg.addApps(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.ListAppsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ListAppsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ListAppsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListAppsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      sandboxes_api_v1_app_pb.App.serializeBinaryToWriter
    );
  }
};


/**
 * repeated App apps = 1;
 * @return {!Array<!proto.sandboxes.api.v1.App>}
 */
proto.sandboxes.api.v1.ListAppsResponse.prototype.getAppsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.App>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_app_pb.App, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.App>} value
 * @return {!proto.sandboxes.api.v1.ListAppsResponse} returns this
*/
proto.sandboxes.api.v1.ListAppsResponse.prototype.setAppsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sandboxes.api.v1.App=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.App}
 */
proto.sandboxes.api.v1.ListAppsResponse.prototype.addApps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sandboxes.api.v1.App, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ListAppsResponse} returns this
 */
proto.sandboxes.api.v1.ListAppsResponse.prototype.clearAppsList = function() {
  return this.setAppsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.CreateAppRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.CreateAppRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.CreateAppRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateAppRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    app: (f = msg.getApp()) && sandboxes_api_v1_app_pb.App.toObject(includeInstance, f),
    onlyValidateSpec: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.CreateAppRequest}
 */
proto.sandboxes.api.v1.CreateAppRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.CreateAppRequest;
  return proto.sandboxes.api.v1.CreateAppRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.CreateAppRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.CreateAppRequest}
 */
proto.sandboxes.api.v1.CreateAppRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_app_pb.App;
      reader.readMessage(value,sandboxes_api_v1_app_pb.App.deserializeBinaryFromReader);
      msg.setApp(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOnlyValidateSpec(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.CreateAppRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.CreateAppRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.CreateAppRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateAppRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_app_pb.App.serializeBinaryToWriter
    );
  }
  f = message.getOnlyValidateSpec();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional App app = 1;
 * @return {?proto.sandboxes.api.v1.App}
 */
proto.sandboxes.api.v1.CreateAppRequest.prototype.getApp = function() {
  return /** @type{?proto.sandboxes.api.v1.App} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_app_pb.App, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.App|undefined} value
 * @return {!proto.sandboxes.api.v1.CreateAppRequest} returns this
*/
proto.sandboxes.api.v1.CreateAppRequest.prototype.setApp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.CreateAppRequest} returns this
 */
proto.sandboxes.api.v1.CreateAppRequest.prototype.clearApp = function() {
  return this.setApp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.CreateAppRequest.prototype.hasApp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool only_validate_spec = 2;
 * @return {boolean}
 */
proto.sandboxes.api.v1.CreateAppRequest.prototype.getOnlyValidateSpec = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.CreateAppRequest} returns this
 */
proto.sandboxes.api.v1.CreateAppRequest.prototype.setOnlyValidateSpec = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.CreateAppResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.CreateAppResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.CreateAppResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.CreateAppResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateAppResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    app: (f = msg.getApp()) && sandboxes_api_v1_app_pb.App.toObject(includeInstance, f),
    validationErrorsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.CreateAppResponse}
 */
proto.sandboxes.api.v1.CreateAppResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.CreateAppResponse;
  return proto.sandboxes.api.v1.CreateAppResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.CreateAppResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.CreateAppResponse}
 */
proto.sandboxes.api.v1.CreateAppResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_app_pb.App;
      reader.readMessage(value,sandboxes_api_v1_app_pb.App.deserializeBinaryFromReader);
      msg.setApp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addValidationErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.CreateAppResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.CreateAppResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.CreateAppResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateAppResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_app_pb.App.serializeBinaryToWriter
    );
  }
  f = message.getValidationErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional App app = 1;
 * @return {?proto.sandboxes.api.v1.App}
 */
proto.sandboxes.api.v1.CreateAppResponse.prototype.getApp = function() {
  return /** @type{?proto.sandboxes.api.v1.App} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_app_pb.App, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.App|undefined} value
 * @return {!proto.sandboxes.api.v1.CreateAppResponse} returns this
*/
proto.sandboxes.api.v1.CreateAppResponse.prototype.setApp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.CreateAppResponse} returns this
 */
proto.sandboxes.api.v1.CreateAppResponse.prototype.clearApp = function() {
  return this.setApp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.CreateAppResponse.prototype.hasApp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string validation_errors = 2;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.CreateAppResponse.prototype.getValidationErrorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.CreateAppResponse} returns this
 */
proto.sandboxes.api.v1.CreateAppResponse.prototype.setValidationErrorsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.CreateAppResponse} returns this
 */
proto.sandboxes.api.v1.CreateAppResponse.prototype.addValidationErrors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.CreateAppResponse} returns this
 */
proto.sandboxes.api.v1.CreateAppResponse.prototype.clearValidationErrorsList = function() {
  return this.setValidationErrorsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateAppRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateAppRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateAppRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateAppRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    app: (f = msg.getApp()) && sandboxes_api_v1_app_pb.App.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateAppRequest}
 */
proto.sandboxes.api.v1.UpdateAppRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateAppRequest;
  return proto.sandboxes.api.v1.UpdateAppRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateAppRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateAppRequest}
 */
proto.sandboxes.api.v1.UpdateAppRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_app_pb.App;
      reader.readMessage(value,sandboxes_api_v1_app_pb.App.deserializeBinaryFromReader);
      msg.setApp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateAppRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateAppRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateAppRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateAppRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_app_pb.App.serializeBinaryToWriter
    );
  }
};


/**
 * optional App app = 1;
 * @return {?proto.sandboxes.api.v1.App}
 */
proto.sandboxes.api.v1.UpdateAppRequest.prototype.getApp = function() {
  return /** @type{?proto.sandboxes.api.v1.App} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_app_pb.App, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.App|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateAppRequest} returns this
*/
proto.sandboxes.api.v1.UpdateAppRequest.prototype.setApp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateAppRequest} returns this
 */
proto.sandboxes.api.v1.UpdateAppRequest.prototype.clearApp = function() {
  return this.setApp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateAppRequest.prototype.hasApp = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateAppResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateAppResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateAppResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateAppResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    app: (f = msg.getApp()) && sandboxes_api_v1_app_pb.App.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateAppResponse}
 */
proto.sandboxes.api.v1.UpdateAppResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateAppResponse;
  return proto.sandboxes.api.v1.UpdateAppResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateAppResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateAppResponse}
 */
proto.sandboxes.api.v1.UpdateAppResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_app_pb.App;
      reader.readMessage(value,sandboxes_api_v1_app_pb.App.deserializeBinaryFromReader);
      msg.setApp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateAppResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateAppResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateAppResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateAppResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_app_pb.App.serializeBinaryToWriter
    );
  }
};


/**
 * optional App app = 1;
 * @return {?proto.sandboxes.api.v1.App}
 */
proto.sandboxes.api.v1.UpdateAppResponse.prototype.getApp = function() {
  return /** @type{?proto.sandboxes.api.v1.App} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_app_pb.App, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.App|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateAppResponse} returns this
*/
proto.sandboxes.api.v1.UpdateAppResponse.prototype.setApp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateAppResponse} returns this
 */
proto.sandboxes.api.v1.UpdateAppResponse.prototype.clearApp = function() {
  return this.setApp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateAppResponse.prototype.hasApp = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.DeleteAppRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.DeleteAppRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.DeleteAppRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteAppRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    app: (f = msg.getApp()) && sandboxes_api_v1_app_pb.App.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.DeleteAppRequest}
 */
proto.sandboxes.api.v1.DeleteAppRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.DeleteAppRequest;
  return proto.sandboxes.api.v1.DeleteAppRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.DeleteAppRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.DeleteAppRequest}
 */
proto.sandboxes.api.v1.DeleteAppRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_app_pb.App;
      reader.readMessage(value,sandboxes_api_v1_app_pb.App.deserializeBinaryFromReader);
      msg.setApp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.DeleteAppRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.DeleteAppRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.DeleteAppRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteAppRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_app_pb.App.serializeBinaryToWriter
    );
  }
};


/**
 * optional App app = 1;
 * @return {?proto.sandboxes.api.v1.App}
 */
proto.sandboxes.api.v1.DeleteAppRequest.prototype.getApp = function() {
  return /** @type{?proto.sandboxes.api.v1.App} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_app_pb.App, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.App|undefined} value
 * @return {!proto.sandboxes.api.v1.DeleteAppRequest} returns this
*/
proto.sandboxes.api.v1.DeleteAppRequest.prototype.setApp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.DeleteAppRequest} returns this
 */
proto.sandboxes.api.v1.DeleteAppRequest.prototype.clearApp = function() {
  return this.setApp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.DeleteAppRequest.prototype.hasApp = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.DeleteAppResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.DeleteAppResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.DeleteAppResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteAppResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    app: (f = msg.getApp()) && sandboxes_api_v1_app_pb.App.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.DeleteAppResponse}
 */
proto.sandboxes.api.v1.DeleteAppResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.DeleteAppResponse;
  return proto.sandboxes.api.v1.DeleteAppResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.DeleteAppResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.DeleteAppResponse}
 */
proto.sandboxes.api.v1.DeleteAppResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_app_pb.App;
      reader.readMessage(value,sandboxes_api_v1_app_pb.App.deserializeBinaryFromReader);
      msg.setApp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.DeleteAppResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.DeleteAppResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.DeleteAppResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteAppResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_app_pb.App.serializeBinaryToWriter
    );
  }
};


/**
 * optional App app = 1;
 * @return {?proto.sandboxes.api.v1.App}
 */
proto.sandboxes.api.v1.DeleteAppResponse.prototype.getApp = function() {
  return /** @type{?proto.sandboxes.api.v1.App} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_app_pb.App, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.App|undefined} value
 * @return {!proto.sandboxes.api.v1.DeleteAppResponse} returns this
*/
proto.sandboxes.api.v1.DeleteAppResponse.prototype.setApp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.DeleteAppResponse} returns this
 */
proto.sandboxes.api.v1.DeleteAppResponse.prototype.clearApp = function() {
  return this.setApp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.DeleteAppResponse.prototype.hasApp = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.ListSandboxesRequest.repeatedFields_ = [2,3,4,7,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ListSandboxesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ListSandboxesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListSandboxesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filterByIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    filterByNamesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    filterByAppIdsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    includeStatus: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    includeManaged: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    filterByOwnerIdsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    filterByRegionsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    onlyAccessible: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    metaOnly: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    pagination: (f = msg.getPagination()) && sandboxes_api_v1_common_pb.Pagination.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.ListSandboxesRequest}
 */
proto.sandboxes.api.v1.ListSandboxesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ListSandboxesRequest;
  return proto.sandboxes.api.v1.ListSandboxesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ListSandboxesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ListSandboxesRequest}
 */
proto.sandboxes.api.v1.ListSandboxesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilterByIds(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilterByNames(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilterByAppIds(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeStatus(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeManaged(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilterByOwnerIds(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilterByRegions(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOnlyAccessible(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMetaOnly(value);
      break;
    case 11:
      var value = new sandboxes_api_v1_common_pb.Pagination.Request;
      reader.readMessage(value,sandboxes_api_v1_common_pb.Pagination.Request.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ListSandboxesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ListSandboxesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListSandboxesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilterByIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getFilterByNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getFilterByAppIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getIncludeStatus();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getIncludeManaged();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getFilterByOwnerIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getFilterByRegionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getOnlyAccessible();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getMetaOnly();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      sandboxes_api_v1_common_pb.Pagination.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.ListSandboxesRequest} returns this
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string filter_by_ids = 2;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.getFilterByIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.ListSandboxesRequest} returns this
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.setFilterByIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.ListSandboxesRequest} returns this
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.addFilterByIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ListSandboxesRequest} returns this
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.clearFilterByIdsList = function() {
  return this.setFilterByIdsList([]);
};


/**
 * repeated string filter_by_names = 3;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.getFilterByNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.ListSandboxesRequest} returns this
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.setFilterByNamesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.ListSandboxesRequest} returns this
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.addFilterByNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ListSandboxesRequest} returns this
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.clearFilterByNamesList = function() {
  return this.setFilterByNamesList([]);
};


/**
 * repeated string filter_by_app_ids = 4;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.getFilterByAppIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.ListSandboxesRequest} returns this
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.setFilterByAppIdsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.ListSandboxesRequest} returns this
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.addFilterByAppIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ListSandboxesRequest} returns this
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.clearFilterByAppIdsList = function() {
  return this.setFilterByAppIdsList([]);
};


/**
 * optional bool include_status = 5;
 * @return {boolean}
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.getIncludeStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.ListSandboxesRequest} returns this
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.setIncludeStatus = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool include_managed = 6;
 * @return {boolean}
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.getIncludeManaged = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.ListSandboxesRequest} returns this
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.setIncludeManaged = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * repeated string filter_by_owner_ids = 7;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.getFilterByOwnerIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.ListSandboxesRequest} returns this
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.setFilterByOwnerIdsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.ListSandboxesRequest} returns this
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.addFilterByOwnerIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ListSandboxesRequest} returns this
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.clearFilterByOwnerIdsList = function() {
  return this.setFilterByOwnerIdsList([]);
};


/**
 * repeated string filter_by_regions = 8;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.getFilterByRegionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.ListSandboxesRequest} returns this
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.setFilterByRegionsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.ListSandboxesRequest} returns this
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.addFilterByRegions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ListSandboxesRequest} returns this
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.clearFilterByRegionsList = function() {
  return this.setFilterByRegionsList([]);
};


/**
 * optional bool only_accessible = 9;
 * @return {boolean}
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.getOnlyAccessible = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.ListSandboxesRequest} returns this
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.setOnlyAccessible = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool meta_only = 10;
 * @return {boolean}
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.getMetaOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.ListSandboxesRequest} returns this
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.setMetaOnly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional Pagination.Request pagination = 11;
 * @return {?proto.sandboxes.api.v1.Pagination.Request}
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.getPagination = function() {
  return /** @type{?proto.sandboxes.api.v1.Pagination.Request} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_common_pb.Pagination.Request, 11));
};


/**
 * @param {?proto.sandboxes.api.v1.Pagination.Request|undefined} value
 * @return {!proto.sandboxes.api.v1.ListSandboxesRequest} returns this
*/
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.ListSandboxesRequest} returns this
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.ListSandboxesRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 11) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.ListSandboxesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.ListSandboxesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ListSandboxesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ListSandboxesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListSandboxesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    sandboxesList: jspb.Message.toObjectList(msg.getSandboxesList(),
    sandboxes_api_v1_sandbox_pb.Sandbox.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && sandboxes_api_v1_common_pb.Pagination.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.ListSandboxesResponse}
 */
proto.sandboxes.api.v1.ListSandboxesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ListSandboxesResponse;
  return proto.sandboxes.api.v1.ListSandboxesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ListSandboxesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ListSandboxesResponse}
 */
proto.sandboxes.api.v1.ListSandboxesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_sandbox_pb.Sandbox;
      reader.readMessage(value,sandboxes_api_v1_sandbox_pb.Sandbox.deserializeBinaryFromReader);
      msg.addSandboxes(value);
      break;
    case 2:
      var value = new sandboxes_api_v1_common_pb.Pagination.Response;
      reader.readMessage(value,sandboxes_api_v1_common_pb.Pagination.Response.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.ListSandboxesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ListSandboxesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ListSandboxesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListSandboxesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSandboxesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      sandboxes_api_v1_sandbox_pb.Sandbox.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sandboxes_api_v1_common_pb.Pagination.Response.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Sandbox sandboxes = 1;
 * @return {!Array<!proto.sandboxes.api.v1.Sandbox>}
 */
proto.sandboxes.api.v1.ListSandboxesResponse.prototype.getSandboxesList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.Sandbox>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_sandbox_pb.Sandbox, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.Sandbox>} value
 * @return {!proto.sandboxes.api.v1.ListSandboxesResponse} returns this
*/
proto.sandboxes.api.v1.ListSandboxesResponse.prototype.setSandboxesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sandboxes.api.v1.Sandbox=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Sandbox}
 */
proto.sandboxes.api.v1.ListSandboxesResponse.prototype.addSandboxes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sandboxes.api.v1.Sandbox, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ListSandboxesResponse} returns this
 */
proto.sandboxes.api.v1.ListSandboxesResponse.prototype.clearSandboxesList = function() {
  return this.setSandboxesList([]);
};


/**
 * optional Pagination.Response pagination = 2;
 * @return {?proto.sandboxes.api.v1.Pagination.Response}
 */
proto.sandboxes.api.v1.ListSandboxesResponse.prototype.getPagination = function() {
  return /** @type{?proto.sandboxes.api.v1.Pagination.Response} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_common_pb.Pagination.Response, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.Pagination.Response|undefined} value
 * @return {!proto.sandboxes.api.v1.ListSandboxesResponse} returns this
*/
proto.sandboxes.api.v1.ListSandboxesResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.ListSandboxesResponse} returns this
 */
proto.sandboxes.api.v1.ListSandboxesResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.ListSandboxesResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.CreateSandboxRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.CreateSandboxRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.CreateSandboxRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateSandboxRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    composer: (f = msg.getComposer()) && sandboxes_api_v1_sandbox_pb.Composer.toObject(includeInstance, f),
    accessControl: (f = msg.getAccessControl()) && sandboxes_api_v1_sandbox_pb.Sandbox.AccessControl.toObject(includeInstance, f),
    folderId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    activities: (f = msg.getActivities()) && sandboxes_api_v1_sandbox_pb.Sandbox.Activities.toObject(includeInstance, f),
    usePool: (f = msg.getUsePool()) && proto.sandboxes.api.v1.CreateSandboxRequest.UsePool.toObject(includeInstance, f),
    region: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.CreateSandboxRequest}
 */
proto.sandboxes.api.v1.CreateSandboxRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.CreateSandboxRequest;
  return proto.sandboxes.api.v1.CreateSandboxRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.CreateSandboxRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.CreateSandboxRequest}
 */
proto.sandboxes.api.v1.CreateSandboxRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 4:
      var value = new sandboxes_api_v1_sandbox_pb.Composer;
      reader.readMessage(value,sandboxes_api_v1_sandbox_pb.Composer.deserializeBinaryFromReader);
      msg.setComposer(value);
      break;
    case 5:
      var value = new sandboxes_api_v1_sandbox_pb.Sandbox.AccessControl;
      reader.readMessage(value,sandboxes_api_v1_sandbox_pb.Sandbox.AccessControl.deserializeBinaryFromReader);
      msg.setAccessControl(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFolderId(value);
      break;
    case 7:
      var value = new sandboxes_api_v1_sandbox_pb.Sandbox.Activities;
      reader.readMessage(value,sandboxes_api_v1_sandbox_pb.Sandbox.Activities.deserializeBinaryFromReader);
      msg.setActivities(value);
      break;
    case 8:
      var value = new proto.sandboxes.api.v1.CreateSandboxRequest.UsePool;
      reader.readMessage(value,proto.sandboxes.api.v1.CreateSandboxRequest.UsePool.deserializeBinaryFromReader);
      msg.setUsePool(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.CreateSandboxRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.CreateSandboxRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.CreateSandboxRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateSandboxRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getComposer();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      sandboxes_api_v1_sandbox_pb.Composer.serializeBinaryToWriter
    );
  }
  f = message.getAccessControl();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      sandboxes_api_v1_sandbox_pb.Sandbox.AccessControl.serializeBinaryToWriter
    );
  }
  f = message.getFolderId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getActivities();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      sandboxes_api_v1_sandbox_pb.Sandbox.Activities.serializeBinaryToWriter
    );
  }
  f = message.getUsePool();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.sandboxes.api.v1.CreateSandboxRequest.UsePool.serializeBinaryToWriter
    );
  }
  f = message.getRegion();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.CreateSandboxRequest.UsePool.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.CreateSandboxRequest.UsePool.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.CreateSandboxRequest.UsePool} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateSandboxRequest.UsePool.toObject = function(includeInstance, msg) {
  var f, obj = {
    poolId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.CreateSandboxRequest.UsePool}
 */
proto.sandboxes.api.v1.CreateSandboxRequest.UsePool.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.CreateSandboxRequest.UsePool;
  return proto.sandboxes.api.v1.CreateSandboxRequest.UsePool.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.CreateSandboxRequest.UsePool} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.CreateSandboxRequest.UsePool}
 */
proto.sandboxes.api.v1.CreateSandboxRequest.UsePool.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPoolId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.CreateSandboxRequest.UsePool.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.CreateSandboxRequest.UsePool.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.CreateSandboxRequest.UsePool} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateSandboxRequest.UsePool.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPoolId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string pool_id = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.CreateSandboxRequest.UsePool.prototype.getPoolId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.CreateSandboxRequest.UsePool} returns this
 */
proto.sandboxes.api.v1.CreateSandboxRequest.UsePool.prototype.setPoolId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.CreateSandboxRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.CreateSandboxRequest} returns this
 */
proto.sandboxes.api.v1.CreateSandboxRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.CreateSandboxRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.CreateSandboxRequest} returns this
 */
proto.sandboxes.api.v1.CreateSandboxRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, string> labels = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.sandboxes.api.v1.CreateSandboxRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.CreateSandboxRequest} returns this
 */
proto.sandboxes.api.v1.CreateSandboxRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional Composer composer = 4;
 * @return {?proto.sandboxes.api.v1.Composer}
 */
proto.sandboxes.api.v1.CreateSandboxRequest.prototype.getComposer = function() {
  return /** @type{?proto.sandboxes.api.v1.Composer} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_sandbox_pb.Composer, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.Composer|undefined} value
 * @return {!proto.sandboxes.api.v1.CreateSandboxRequest} returns this
*/
proto.sandboxes.api.v1.CreateSandboxRequest.prototype.setComposer = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.CreateSandboxRequest} returns this
 */
proto.sandboxes.api.v1.CreateSandboxRequest.prototype.clearComposer = function() {
  return this.setComposer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.CreateSandboxRequest.prototype.hasComposer = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Sandbox.AccessControl access_control = 5;
 * @return {?proto.sandboxes.api.v1.Sandbox.AccessControl}
 */
proto.sandboxes.api.v1.CreateSandboxRequest.prototype.getAccessControl = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox.AccessControl} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_sandbox_pb.Sandbox.AccessControl, 5));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox.AccessControl|undefined} value
 * @return {!proto.sandboxes.api.v1.CreateSandboxRequest} returns this
*/
proto.sandboxes.api.v1.CreateSandboxRequest.prototype.setAccessControl = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.CreateSandboxRequest} returns this
 */
proto.sandboxes.api.v1.CreateSandboxRequest.prototype.clearAccessControl = function() {
  return this.setAccessControl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.CreateSandboxRequest.prototype.hasAccessControl = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string folder_id = 6;
 * @return {string}
 */
proto.sandboxes.api.v1.CreateSandboxRequest.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.CreateSandboxRequest} returns this
 */
proto.sandboxes.api.v1.CreateSandboxRequest.prototype.setFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional Sandbox.Activities activities = 7;
 * @return {?proto.sandboxes.api.v1.Sandbox.Activities}
 */
proto.sandboxes.api.v1.CreateSandboxRequest.prototype.getActivities = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox.Activities} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_sandbox_pb.Sandbox.Activities, 7));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox.Activities|undefined} value
 * @return {!proto.sandboxes.api.v1.CreateSandboxRequest} returns this
*/
proto.sandboxes.api.v1.CreateSandboxRequest.prototype.setActivities = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.CreateSandboxRequest} returns this
 */
proto.sandboxes.api.v1.CreateSandboxRequest.prototype.clearActivities = function() {
  return this.setActivities(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.CreateSandboxRequest.prototype.hasActivities = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional UsePool use_pool = 8;
 * @return {?proto.sandboxes.api.v1.CreateSandboxRequest.UsePool}
 */
proto.sandboxes.api.v1.CreateSandboxRequest.prototype.getUsePool = function() {
  return /** @type{?proto.sandboxes.api.v1.CreateSandboxRequest.UsePool} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.CreateSandboxRequest.UsePool, 8));
};


/**
 * @param {?proto.sandboxes.api.v1.CreateSandboxRequest.UsePool|undefined} value
 * @return {!proto.sandboxes.api.v1.CreateSandboxRequest} returns this
*/
proto.sandboxes.api.v1.CreateSandboxRequest.prototype.setUsePool = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.CreateSandboxRequest} returns this
 */
proto.sandboxes.api.v1.CreateSandboxRequest.prototype.clearUsePool = function() {
  return this.setUsePool(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.CreateSandboxRequest.prototype.hasUsePool = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string region = 9;
 * @return {string}
 */
proto.sandboxes.api.v1.CreateSandboxRequest.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.CreateSandboxRequest} returns this
 */
proto.sandboxes.api.v1.CreateSandboxRequest.prototype.setRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.CreateSandboxResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.CreateSandboxResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.CreateSandboxResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateSandboxResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    sandbox: (f = msg.getSandbox()) && sandboxes_api_v1_sandbox_pb.Sandbox.toObject(includeInstance, f),
    ready: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.CreateSandboxResponse}
 */
proto.sandboxes.api.v1.CreateSandboxResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.CreateSandboxResponse;
  return proto.sandboxes.api.v1.CreateSandboxResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.CreateSandboxResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.CreateSandboxResponse}
 */
proto.sandboxes.api.v1.CreateSandboxResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_sandbox_pb.Sandbox;
      reader.readMessage(value,sandboxes_api_v1_sandbox_pb.Sandbox.deserializeBinaryFromReader);
      msg.setSandbox(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReady(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.CreateSandboxResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.CreateSandboxResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.CreateSandboxResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateSandboxResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSandbox();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_sandbox_pb.Sandbox.serializeBinaryToWriter
    );
  }
  f = message.getReady();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional Sandbox sandbox = 1;
 * @return {?proto.sandboxes.api.v1.Sandbox}
 */
proto.sandboxes.api.v1.CreateSandboxResponse.prototype.getSandbox = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_sandbox_pb.Sandbox, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox|undefined} value
 * @return {!proto.sandboxes.api.v1.CreateSandboxResponse} returns this
*/
proto.sandboxes.api.v1.CreateSandboxResponse.prototype.setSandbox = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.CreateSandboxResponse} returns this
 */
proto.sandboxes.api.v1.CreateSandboxResponse.prototype.clearSandbox = function() {
  return this.setSandbox(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.CreateSandboxResponse.prototype.hasSandbox = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool ready = 2;
 * @return {boolean}
 */
proto.sandboxes.api.v1.CreateSandboxResponse.prototype.getReady = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.CreateSandboxResponse} returns this
 */
proto.sandboxes.api.v1.CreateSandboxResponse.prototype.setReady = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.oneofGroups_ = [[5,6,7,8,9,10,11,12,13,14,15,16]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.UpdateCase = {
  UPDATE_NOT_SET: 0,
  RESYNC: 5,
  RECOMPOSE: 6,
  ALTER_WORKLOAD_CONFIG: 7,
  OPERATIONAL_STATE: 8,
  ALTER_ENDPOINT_CONFIG: 9,
  ACCESS_CONTROL: 10,
  REBUILD_WORKLOADS: 11,
  COMPOSE_DYNAMIC: 12,
  ALTER_ENV: 13,
  ACTIVITIES: 14,
  DETACH_FROM_POOL: 15,
  RESOLVE_LIFECYCLE_TRANSITIONS: 16
};

/**
 * @return {proto.sandboxes.api.v1.UpdateSandboxRequest.UpdateCase}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.getUpdateCase = function() {
  return /** @type {proto.sandboxes.api.v1.UpdateSandboxRequest.UpdateCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.UpdateSandboxRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateSandboxRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sandboxId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    resync: (f = msg.getResync()) && proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync.toObject(includeInstance, f),
    recompose: (f = msg.getRecompose()) && proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose.toObject(includeInstance, f),
    alterWorkloadConfig: (f = msg.getAlterWorkloadConfig()) && proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig.toObject(includeInstance, f),
    operationalState: (f = msg.getOperationalState()) && proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState.toObject(includeInstance, f),
    alterEndpointConfig: (f = msg.getAlterEndpointConfig()) && proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig.toObject(includeInstance, f),
    accessControl: (f = msg.getAccessControl()) && proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl.toObject(includeInstance, f),
    rebuildWorkloads: (f = msg.getRebuildWorkloads()) && proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads.toObject(includeInstance, f),
    composeDynamic: (f = msg.getComposeDynamic()) && proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic.toObject(includeInstance, f),
    alterEnv: (f = msg.getAlterEnv()) && proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv.toObject(includeInstance, f),
    activities: (f = msg.getActivities()) && proto.sandboxes.api.v1.UpdateSandboxRequest.Activities.toObject(includeInstance, f),
    detachFromPool: (f = msg.getDetachFromPool()) && proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool.toObject(includeInstance, f),
    resolveLifecycleTransitions: (f = msg.getResolveLifecycleTransitions()) && proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateSandboxRequest;
  return proto.sandboxes.api.v1.UpdateSandboxRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSandboxId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 5:
      var value = new proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync.deserializeBinaryFromReader);
      msg.setResync(value);
      break;
    case 6:
      var value = new proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose.deserializeBinaryFromReader);
      msg.setRecompose(value);
      break;
    case 7:
      var value = new proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig.deserializeBinaryFromReader);
      msg.setAlterWorkloadConfig(value);
      break;
    case 8:
      var value = new proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState.deserializeBinaryFromReader);
      msg.setOperationalState(value);
      break;
    case 9:
      var value = new proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig.deserializeBinaryFromReader);
      msg.setAlterEndpointConfig(value);
      break;
    case 10:
      var value = new proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl.deserializeBinaryFromReader);
      msg.setAccessControl(value);
      break;
    case 11:
      var value = new proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads.deserializeBinaryFromReader);
      msg.setRebuildWorkloads(value);
      break;
    case 12:
      var value = new proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic.deserializeBinaryFromReader);
      msg.setComposeDynamic(value);
      break;
    case 13:
      var value = new proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv.deserializeBinaryFromReader);
      msg.setAlterEnv(value);
      break;
    case 14:
      var value = new proto.sandboxes.api.v1.UpdateSandboxRequest.Activities;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateSandboxRequest.Activities.deserializeBinaryFromReader);
      msg.setActivities(value);
      break;
    case 15:
      var value = new proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool.deserializeBinaryFromReader);
      msg.setDetachFromPool(value);
      break;
    case 16:
      var value = new proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.deserializeBinaryFromReader);
      msg.setResolveLifecycleTransitions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateSandboxRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSandboxId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getResync();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync.serializeBinaryToWriter
    );
  }
  f = message.getRecompose();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose.serializeBinaryToWriter
    );
  }
  f = message.getAlterWorkloadConfig();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig.serializeBinaryToWriter
    );
  }
  f = message.getOperationalState();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState.serializeBinaryToWriter
    );
  }
  f = message.getAlterEndpointConfig();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig.serializeBinaryToWriter
    );
  }
  f = message.getAccessControl();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl.serializeBinaryToWriter
    );
  }
  f = message.getRebuildWorkloads();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads.serializeBinaryToWriter
    );
  }
  f = message.getComposeDynamic();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic.serializeBinaryToWriter
    );
  }
  f = message.getAlterEnv();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv.serializeBinaryToWriter
    );
  }
  f = message.getActivities();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.sandboxes.api.v1.UpdateSandboxRequest.Activities.serializeBinaryToWriter
    );
  }
  f = message.getDetachFromPool();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool.serializeBinaryToWriter
    );
  }
  f = message.getResolveLifecycleTransitions();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList.toObject = function(includeInstance, msg) {
  var f, obj = {
    envList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList;
  return proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addEnv(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnvList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string env = 1;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList.prototype.getEnvList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList.prototype.setEnvList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList.prototype.addEnv = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList.prototype.clearEnvList = function() {
  return this.setEnvList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync.toObject = function(includeInstance, msg) {
  var f, obj = {
    updateBaseSnapshot: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    useStoredTemplate: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    fullEnv: (f = msg.getFullEnv()) && proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync;
  return proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdateBaseSnapshot(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseStoredTemplate(value);
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList.deserializeBinaryFromReader);
      msg.setFullEnv(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUpdateBaseSnapshot();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getUseStoredTemplate();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getFullEnv();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool update_base_snapshot = 1;
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync.prototype.getUpdateBaseSnapshot = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync.prototype.setUpdateBaseSnapshot = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool use_stored_template = 2;
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync.prototype.getUseStoredTemplate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync.prototype.setUseStoredTemplate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional EnvList full_env = 3;
 * @return {?proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync.prototype.getFullEnv = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync} returns this
*/
proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync.prototype.setFullEnv = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync.prototype.clearFullEnv = function() {
  return this.setFullEnv(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync.prototype.hasFullEnv = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose.toObject = function(includeInstance, msg) {
  var f, obj = {
    composer: (f = msg.getComposer()) && sandboxes_api_v1_sandbox_pb.Composer.toObject(includeInstance, f),
    includeDynamic: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    updateBaseSnapshot: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    fullEnv: (f = msg.getFullEnv()) && proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList.toObject(includeInstance, f),
    syncTemplate: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose;
  return proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_sandbox_pb.Composer;
      reader.readMessage(value,sandboxes_api_v1_sandbox_pb.Composer.deserializeBinaryFromReader);
      msg.setComposer(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeDynamic(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdateBaseSnapshot(value);
      break;
    case 4:
      var value = new proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList.deserializeBinaryFromReader);
      msg.setFullEnv(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSyncTemplate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getComposer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_sandbox_pb.Composer.serializeBinaryToWriter
    );
  }
  f = message.getIncludeDynamic();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getUpdateBaseSnapshot();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getFullEnv();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList.serializeBinaryToWriter
    );
  }
  f = message.getSyncTemplate();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional Composer composer = 1;
 * @return {?proto.sandboxes.api.v1.Composer}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose.prototype.getComposer = function() {
  return /** @type{?proto.sandboxes.api.v1.Composer} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_sandbox_pb.Composer, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Composer|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose} returns this
*/
proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose.prototype.setComposer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose.prototype.clearComposer = function() {
  return this.setComposer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose.prototype.hasComposer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool include_dynamic = 2;
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose.prototype.getIncludeDynamic = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose.prototype.setIncludeDynamic = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool update_base_snapshot = 3;
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose.prototype.getUpdateBaseSnapshot = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose.prototype.setUpdateBaseSnapshot = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional EnvList full_env = 4;
 * @return {?proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose.prototype.getFullEnv = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateSandboxRequest.EnvList|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose} returns this
*/
proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose.prototype.setFullEnv = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose.prototype.clearFullEnv = function() {
  return this.setFullEnv(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose.prototype.hasFullEnv = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool sync_template = 5;
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose.prototype.getSyncTemplate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose.prototype.setSyncTemplate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic.toObject = function(includeInstance, msg) {
  var f, obj = {
    dynamic: (f = msg.getDynamic()) && sandboxes_api_v1_sandbox_pb.Composer.Dynamic.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic;
  return proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_sandbox_pb.Composer.Dynamic;
      reader.readMessage(value,sandboxes_api_v1_sandbox_pb.Composer.Dynamic.deserializeBinaryFromReader);
      msg.setDynamic(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDynamic();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_sandbox_pb.Composer.Dynamic.serializeBinaryToWriter
    );
  }
};


/**
 * optional Composer.Dynamic dynamic = 1;
 * @return {?proto.sandboxes.api.v1.Composer.Dynamic}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic.prototype.getDynamic = function() {
  return /** @type{?proto.sandboxes.api.v1.Composer.Dynamic} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_sandbox_pb.Composer.Dynamic, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Composer.Dynamic|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic} returns this
*/
proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic.prototype.setDynamic = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic.prototype.clearDynamic = function() {
  return this.setDynamic(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic.prototype.hasDynamic = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    workloadConfigsMap: (f = msg.getWorkloadConfigsMap()) ? f.toObject(includeInstance, proto.sandboxes.api.v1.WorkloadConfig.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig;
  return proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getWorkloadConfigsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.sandboxes.api.v1.WorkloadConfig.deserializeBinaryFromReader, "", new proto.sandboxes.api.v1.WorkloadConfig());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkloadConfigsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.sandboxes.api.v1.WorkloadConfig.serializeBinaryToWriter);
  }
};


/**
 * map<string, WorkloadConfig> workload_configs = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.sandboxes.api.v1.WorkloadConfig>}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig.prototype.getWorkloadConfigsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.sandboxes.api.v1.WorkloadConfig>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.sandboxes.api.v1.WorkloadConfig));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig.prototype.clearWorkloadConfigsMap = function() {
  this.getWorkloadConfigsMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    endpointConfigsMap: (f = msg.getEndpointConfigsMap()) ? f.toObject(includeInstance, proto.sandboxes.api.v1.EndpointConfig.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig;
  return proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getEndpointConfigsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.sandboxes.api.v1.EndpointConfig.deserializeBinaryFromReader, "", new proto.sandboxes.api.v1.EndpointConfig());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEndpointConfigsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.sandboxes.api.v1.EndpointConfig.serializeBinaryToWriter);
  }
};


/**
 * map<string, EndpointConfig> endpoint_configs = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.sandboxes.api.v1.EndpointConfig>}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig.prototype.getEndpointConfigsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.sandboxes.api.v1.EndpointConfig>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.sandboxes.api.v1.EndpointConfig));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig.prototype.clearEndpointConfigsMap = function() {
  this.getEndpointConfigsMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv.toObject = function(includeInstance, msg) {
  var f, obj = {
    envList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv;
  return proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addEnv(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnvList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string env = 1;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv.prototype.getEnvList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv.prototype.setEnvList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv.prototype.addEnv = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv.prototype.clearEnvList = function() {
  return this.setEnvList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState.toObject = function(includeInstance, msg) {
  var f, obj = {
    opState: (f = msg.getOpState()) && sandboxes_api_v1_sandbox_pb.Sandbox.OperationalState.toObject(includeInstance, f),
    overrideAlwaysOnExpiry: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState;
  return proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_sandbox_pb.Sandbox.OperationalState;
      reader.readMessage(value,sandboxes_api_v1_sandbox_pb.Sandbox.OperationalState.deserializeBinaryFromReader);
      msg.setOpState(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOverrideAlwaysOnExpiry(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_sandbox_pb.Sandbox.OperationalState.serializeBinaryToWriter
    );
  }
  f = message.getOverrideAlwaysOnExpiry();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional Sandbox.OperationalState op_state = 1;
 * @return {?proto.sandboxes.api.v1.Sandbox.OperationalState}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState.prototype.getOpState = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox.OperationalState} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_sandbox_pb.Sandbox.OperationalState, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox.OperationalState|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState} returns this
*/
proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState.prototype.setOpState = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState.prototype.clearOpState = function() {
  return this.setOpState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState.prototype.hasOpState = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool override_always_on_expiry = 2;
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState.prototype.getOverrideAlwaysOnExpiry = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState.prototype.setOverrideAlwaysOnExpiry = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl.toObject = function(includeInstance, msg) {
  var f, obj = {
    accessControl: (f = msg.getAccessControl()) && sandboxes_api_v1_sandbox_pb.Sandbox.AccessControl.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl;
  return proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_sandbox_pb.Sandbox.AccessControl;
      reader.readMessage(value,sandboxes_api_v1_sandbox_pb.Sandbox.AccessControl.deserializeBinaryFromReader);
      msg.setAccessControl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccessControl();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_sandbox_pb.Sandbox.AccessControl.serializeBinaryToWriter
    );
  }
};


/**
 * optional Sandbox.AccessControl access_control = 1;
 * @return {?proto.sandboxes.api.v1.Sandbox.AccessControl}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl.prototype.getAccessControl = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox.AccessControl} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_sandbox_pb.Sandbox.AccessControl, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox.AccessControl|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl} returns this
*/
proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl.prototype.setAccessControl = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl.prototype.clearAccessControl = function() {
  return this.setAccessControl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl.prototype.hasAccessControl = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads.toObject = function(includeInstance, msg) {
  var f, obj = {
    workloadsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    baseOnly: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads;
  return proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addWorkloads(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBaseOnly(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkloadsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getBaseOnly();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * repeated string workloads = 1;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads.prototype.getWorkloadsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads.prototype.setWorkloadsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads.prototype.addWorkloads = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads.prototype.clearWorkloadsList = function() {
  return this.setWorkloadsList([]);
};


/**
 * optional bool base_only = 2;
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads.prototype.getBaseOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads.prototype.setBaseOnly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.Activities.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateSandboxRequest.Activities.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.Activities} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.Activities.toObject = function(includeInstance, msg) {
  var f, obj = {
    activities: (f = msg.getActivities()) && sandboxes_api_v1_sandbox_pb.Sandbox.Activities.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.Activities}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.Activities.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateSandboxRequest.Activities;
  return proto.sandboxes.api.v1.UpdateSandboxRequest.Activities.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.Activities} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.Activities}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.Activities.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_sandbox_pb.Sandbox.Activities;
      reader.readMessage(value,sandboxes_api_v1_sandbox_pb.Sandbox.Activities.deserializeBinaryFromReader);
      msg.setActivities(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.Activities.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateSandboxRequest.Activities.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.Activities} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.Activities.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActivities();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_sandbox_pb.Sandbox.Activities.serializeBinaryToWriter
    );
  }
};


/**
 * optional Sandbox.Activities activities = 1;
 * @return {?proto.sandboxes.api.v1.Sandbox.Activities}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.Activities.prototype.getActivities = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox.Activities} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_sandbox_pb.Sandbox.Activities, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox.Activities|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.Activities} returns this
*/
proto.sandboxes.api.v1.UpdateSandboxRequest.Activities.prototype.setActivities = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.Activities} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.Activities.prototype.clearActivities = function() {
  return this.setActivities(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.Activities.prototype.hasActivities = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool.toObject = function(includeInstance, msg) {
  var f, obj = {
    folderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    preserveOwnership: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool;
  return proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFolderId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPreserveOwnership(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFolderId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPreserveOwnership();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string folder_id = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool.prototype.setFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool preserve_ownership = 2;
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool.prototype.getPreserveOwnership = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool.prototype.setPreserveOwnership = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.toObject = function(includeInstance, msg) {
  var f, obj = {
    resolutionsMap: (f = msg.getResolutionsMap()) ? f.toObject(includeInstance, proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions;
  return proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getResolutionsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution.deserializeBinaryFromReader, "", new proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResolutionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution.serializeBinaryToWriter);
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution;
  return proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution.Action} */ (reader.readEnum());
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution.Action = {
  INVALID: 0,
  SKIP: 1,
  RETRY: 2,
  ABORT: 3
};

/**
 * optional Action action = 1;
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution.Action}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution.prototype.getAction = function() {
  return /** @type {!proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution.Action} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution.Action} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * map<string, Resolution> resolutions = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution>}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.prototype.getResolutionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions.prototype.clearResolutionsMap = function() {
  this.getResolutionsMap().clear();
  return this;};


/**
 * optional string sandbox_id = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.getSandboxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.setSandboxId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, string> labels = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional ReSync resync = 5;
 * @return {?proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.getResync = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync, 5));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateSandboxRequest.ReSync|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest} returns this
*/
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.setResync = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.sandboxes.api.v1.UpdateSandboxRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.clearResync = function() {
  return this.setResync(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.hasResync = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ReCompose recompose = 6;
 * @return {?proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.getRecompose = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose, 6));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateSandboxRequest.ReCompose|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest} returns this
*/
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.setRecompose = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.sandboxes.api.v1.UpdateSandboxRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.clearRecompose = function() {
  return this.setRecompose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.hasRecompose = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional AlterWorkloadConfig alter_workload_config = 7;
 * @return {?proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.getAlterWorkloadConfig = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig, 7));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateSandboxRequest.AlterWorkloadConfig|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest} returns this
*/
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.setAlterWorkloadConfig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.sandboxes.api.v1.UpdateSandboxRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.clearAlterWorkloadConfig = function() {
  return this.setAlterWorkloadConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.hasAlterWorkloadConfig = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional OperationalState operational_state = 8;
 * @return {?proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.getOperationalState = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState, 8));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateSandboxRequest.OperationalState|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest} returns this
*/
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.setOperationalState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.sandboxes.api.v1.UpdateSandboxRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.clearOperationalState = function() {
  return this.setOperationalState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.hasOperationalState = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional AlterEndpointConfig alter_endpoint_config = 9;
 * @return {?proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.getAlterEndpointConfig = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig, 9));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEndpointConfig|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest} returns this
*/
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.setAlterEndpointConfig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.sandboxes.api.v1.UpdateSandboxRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.clearAlterEndpointConfig = function() {
  return this.setAlterEndpointConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.hasAlterEndpointConfig = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional AccessControl access_control = 10;
 * @return {?proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.getAccessControl = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl, 10));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateSandboxRequest.AccessControl|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest} returns this
*/
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.setAccessControl = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.sandboxes.api.v1.UpdateSandboxRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.clearAccessControl = function() {
  return this.setAccessControl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.hasAccessControl = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional RebuildWorkloads rebuild_workloads = 11;
 * @return {?proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.getRebuildWorkloads = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads, 11));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateSandboxRequest.RebuildWorkloads|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest} returns this
*/
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.setRebuildWorkloads = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.sandboxes.api.v1.UpdateSandboxRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.clearRebuildWorkloads = function() {
  return this.setRebuildWorkloads(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.hasRebuildWorkloads = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ComposeDynamic compose_dynamic = 12;
 * @return {?proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.getComposeDynamic = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic, 12));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateSandboxRequest.ComposeDynamic|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest} returns this
*/
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.setComposeDynamic = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.sandboxes.api.v1.UpdateSandboxRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.clearComposeDynamic = function() {
  return this.setComposeDynamic(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.hasComposeDynamic = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional AlterEnv alter_env = 13;
 * @return {?proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.getAlterEnv = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv, 13));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateSandboxRequest.AlterEnv|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest} returns this
*/
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.setAlterEnv = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.sandboxes.api.v1.UpdateSandboxRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.clearAlterEnv = function() {
  return this.setAlterEnv(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.hasAlterEnv = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional Activities activities = 14;
 * @return {?proto.sandboxes.api.v1.UpdateSandboxRequest.Activities}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.getActivities = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateSandboxRequest.Activities} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateSandboxRequest.Activities, 14));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateSandboxRequest.Activities|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest} returns this
*/
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.setActivities = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.sandboxes.api.v1.UpdateSandboxRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.clearActivities = function() {
  return this.setActivities(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.hasActivities = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional DetachFromPool detach_from_pool = 15;
 * @return {?proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.getDetachFromPool = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool, 15));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateSandboxRequest.DetachFromPool|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest} returns this
*/
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.setDetachFromPool = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.sandboxes.api.v1.UpdateSandboxRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.clearDetachFromPool = function() {
  return this.setDetachFromPool(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.hasDetachFromPool = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional ResolveLifecycleTransitions resolve_lifecycle_transitions = 16;
 * @return {?proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.getResolveLifecycleTransitions = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions, 16));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateSandboxRequest.ResolveLifecycleTransitions|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest} returns this
*/
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.setResolveLifecycleTransitions = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.sandboxes.api.v1.UpdateSandboxRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxRequest} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.clearResolveLifecycleTransitions = function() {
  return this.setResolveLifecycleTransitions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSandboxRequest.prototype.hasResolveLifecycleTransitions = function() {
  return jspb.Message.getField(this, 16) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateSandboxResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateSandboxResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateSandboxResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    sandbox: (f = msg.getSandbox()) && sandboxes_api_v1_sandbox_pb.Sandbox.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxResponse}
 */
proto.sandboxes.api.v1.UpdateSandboxResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateSandboxResponse;
  return proto.sandboxes.api.v1.UpdateSandboxResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxResponse}
 */
proto.sandboxes.api.v1.UpdateSandboxResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_sandbox_pb.Sandbox;
      reader.readMessage(value,sandboxes_api_v1_sandbox_pb.Sandbox.deserializeBinaryFromReader);
      msg.setSandbox(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateSandboxResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateSandboxResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateSandboxResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSandboxResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSandbox();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_sandbox_pb.Sandbox.serializeBinaryToWriter
    );
  }
};


/**
 * optional Sandbox sandbox = 1;
 * @return {?proto.sandboxes.api.v1.Sandbox}
 */
proto.sandboxes.api.v1.UpdateSandboxResponse.prototype.getSandbox = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_sandbox_pb.Sandbox, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateSandboxResponse} returns this
*/
proto.sandboxes.api.v1.UpdateSandboxResponse.prototype.setSandbox = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateSandboxResponse} returns this
 */
proto.sandboxes.api.v1.UpdateSandboxResponse.prototype.clearSandbox = function() {
  return this.setSandbox(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSandboxResponse.prototype.hasSandbox = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.DeleteSandboxRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.DeleteSandboxRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.DeleteSandboxRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteSandboxRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sandbox: (f = msg.getSandbox()) && sandboxes_api_v1_sandbox_pb.Sandbox.toObject(includeInstance, f),
    skipLifecycle: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.DeleteSandboxRequest}
 */
proto.sandboxes.api.v1.DeleteSandboxRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.DeleteSandboxRequest;
  return proto.sandboxes.api.v1.DeleteSandboxRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.DeleteSandboxRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.DeleteSandboxRequest}
 */
proto.sandboxes.api.v1.DeleteSandboxRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_sandbox_pb.Sandbox;
      reader.readMessage(value,sandboxes_api_v1_sandbox_pb.Sandbox.deserializeBinaryFromReader);
      msg.setSandbox(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSkipLifecycle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.DeleteSandboxRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.DeleteSandboxRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.DeleteSandboxRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteSandboxRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSandbox();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_sandbox_pb.Sandbox.serializeBinaryToWriter
    );
  }
  f = message.getSkipLifecycle();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional Sandbox sandbox = 1;
 * @return {?proto.sandboxes.api.v1.Sandbox}
 */
proto.sandboxes.api.v1.DeleteSandboxRequest.prototype.getSandbox = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_sandbox_pb.Sandbox, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox|undefined} value
 * @return {!proto.sandboxes.api.v1.DeleteSandboxRequest} returns this
*/
proto.sandboxes.api.v1.DeleteSandboxRequest.prototype.setSandbox = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.DeleteSandboxRequest} returns this
 */
proto.sandboxes.api.v1.DeleteSandboxRequest.prototype.clearSandbox = function() {
  return this.setSandbox(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.DeleteSandboxRequest.prototype.hasSandbox = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool skip_lifecycle = 2;
 * @return {boolean}
 */
proto.sandboxes.api.v1.DeleteSandboxRequest.prototype.getSkipLifecycle = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.DeleteSandboxRequest} returns this
 */
proto.sandboxes.api.v1.DeleteSandboxRequest.prototype.setSkipLifecycle = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.DeleteSandboxResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.DeleteSandboxResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.DeleteSandboxResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteSandboxResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    sandbox: (f = msg.getSandbox()) && sandboxes_api_v1_sandbox_pb.Sandbox.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.DeleteSandboxResponse}
 */
proto.sandboxes.api.v1.DeleteSandboxResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.DeleteSandboxResponse;
  return proto.sandboxes.api.v1.DeleteSandboxResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.DeleteSandboxResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.DeleteSandboxResponse}
 */
proto.sandboxes.api.v1.DeleteSandboxResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_sandbox_pb.Sandbox;
      reader.readMessage(value,sandboxes_api_v1_sandbox_pb.Sandbox.deserializeBinaryFromReader);
      msg.setSandbox(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.DeleteSandboxResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.DeleteSandboxResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.DeleteSandboxResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteSandboxResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSandbox();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_sandbox_pb.Sandbox.serializeBinaryToWriter
    );
  }
};


/**
 * optional Sandbox sandbox = 1;
 * @return {?proto.sandboxes.api.v1.Sandbox}
 */
proto.sandboxes.api.v1.DeleteSandboxResponse.prototype.getSandbox = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_sandbox_pb.Sandbox, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox|undefined} value
 * @return {!proto.sandboxes.api.v1.DeleteSandboxResponse} returns this
*/
proto.sandboxes.api.v1.DeleteSandboxResponse.prototype.setSandbox = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.DeleteSandboxResponse} returns this
 */
proto.sandboxes.api.v1.DeleteSandboxResponse.prototype.clearSandbox = function() {
  return this.setSandbox(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.DeleteSandboxResponse.prototype.hasSandbox = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.ListSecretsRequest.repeatedFields_ = [2,3,4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.ListSecretsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ListSecretsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ListSecretsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListSecretsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filterByIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    filterByNamesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    filterByTypesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    filterByStatesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    ownerEmail: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.ListSecretsRequest}
 */
proto.sandboxes.api.v1.ListSecretsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ListSecretsRequest;
  return proto.sandboxes.api.v1.ListSecretsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ListSecretsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ListSecretsRequest}
 */
proto.sandboxes.api.v1.ListSecretsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilterByIds(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilterByNames(value);
      break;
    case 4:
      var values = /** @type {!Array<!proto.sandboxes.api.v1.Secret.Type>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addFilterByTypes(values[i]);
      }
      break;
    case 5:
      var values = /** @type {!Array<!proto.sandboxes.api.v1.Secret.State>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addFilterByStates(values[i]);
      }
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwnerEmail(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.ListSecretsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ListSecretsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ListSecretsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListSecretsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilterByIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getFilterByNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getFilterByTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      4,
      f
    );
  }
  f = message.getFilterByStatesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      5,
      f
    );
  }
  f = message.getOwnerEmail();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.ListSecretsRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.ListSecretsRequest} returns this
 */
proto.sandboxes.api.v1.ListSecretsRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string filter_by_ids = 2;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.ListSecretsRequest.prototype.getFilterByIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.ListSecretsRequest} returns this
 */
proto.sandboxes.api.v1.ListSecretsRequest.prototype.setFilterByIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.ListSecretsRequest} returns this
 */
proto.sandboxes.api.v1.ListSecretsRequest.prototype.addFilterByIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ListSecretsRequest} returns this
 */
proto.sandboxes.api.v1.ListSecretsRequest.prototype.clearFilterByIdsList = function() {
  return this.setFilterByIdsList([]);
};


/**
 * repeated string filter_by_names = 3;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.ListSecretsRequest.prototype.getFilterByNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.ListSecretsRequest} returns this
 */
proto.sandboxes.api.v1.ListSecretsRequest.prototype.setFilterByNamesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.ListSecretsRequest} returns this
 */
proto.sandboxes.api.v1.ListSecretsRequest.prototype.addFilterByNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ListSecretsRequest} returns this
 */
proto.sandboxes.api.v1.ListSecretsRequest.prototype.clearFilterByNamesList = function() {
  return this.setFilterByNamesList([]);
};


/**
 * repeated Secret.Type filter_by_types = 4;
 * @return {!Array<!proto.sandboxes.api.v1.Secret.Type>}
 */
proto.sandboxes.api.v1.ListSecretsRequest.prototype.getFilterByTypesList = function() {
  return /** @type {!Array<!proto.sandboxes.api.v1.Secret.Type>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.Secret.Type>} value
 * @return {!proto.sandboxes.api.v1.ListSecretsRequest} returns this
 */
proto.sandboxes.api.v1.ListSecretsRequest.prototype.setFilterByTypesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!proto.sandboxes.api.v1.Secret.Type} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.ListSecretsRequest} returns this
 */
proto.sandboxes.api.v1.ListSecretsRequest.prototype.addFilterByTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ListSecretsRequest} returns this
 */
proto.sandboxes.api.v1.ListSecretsRequest.prototype.clearFilterByTypesList = function() {
  return this.setFilterByTypesList([]);
};


/**
 * repeated Secret.State filter_by_states = 5;
 * @return {!Array<!proto.sandboxes.api.v1.Secret.State>}
 */
proto.sandboxes.api.v1.ListSecretsRequest.prototype.getFilterByStatesList = function() {
  return /** @type {!Array<!proto.sandboxes.api.v1.Secret.State>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.Secret.State>} value
 * @return {!proto.sandboxes.api.v1.ListSecretsRequest} returns this
 */
proto.sandboxes.api.v1.ListSecretsRequest.prototype.setFilterByStatesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!proto.sandboxes.api.v1.Secret.State} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.ListSecretsRequest} returns this
 */
proto.sandboxes.api.v1.ListSecretsRequest.prototype.addFilterByStates = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ListSecretsRequest} returns this
 */
proto.sandboxes.api.v1.ListSecretsRequest.prototype.clearFilterByStatesList = function() {
  return this.setFilterByStatesList([]);
};


/**
 * optional string owner_email = 6;
 * @return {string}
 */
proto.sandboxes.api.v1.ListSecretsRequest.prototype.getOwnerEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.ListSecretsRequest} returns this
 */
proto.sandboxes.api.v1.ListSecretsRequest.prototype.setOwnerEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.ListSecretsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.ListSecretsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ListSecretsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ListSecretsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListSecretsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    secretsList: jspb.Message.toObjectList(msg.getSecretsList(),
    sandboxes_api_v1_secret_pb.Secret.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.ListSecretsResponse}
 */
proto.sandboxes.api.v1.ListSecretsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ListSecretsResponse;
  return proto.sandboxes.api.v1.ListSecretsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ListSecretsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ListSecretsResponse}
 */
proto.sandboxes.api.v1.ListSecretsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_secret_pb.Secret;
      reader.readMessage(value,sandboxes_api_v1_secret_pb.Secret.deserializeBinaryFromReader);
      msg.addSecrets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.ListSecretsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ListSecretsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ListSecretsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListSecretsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecretsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      sandboxes_api_v1_secret_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Secret secrets = 1;
 * @return {!Array<!proto.sandboxes.api.v1.Secret>}
 */
proto.sandboxes.api.v1.ListSecretsResponse.prototype.getSecretsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.Secret>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_secret_pb.Secret, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.Secret>} value
 * @return {!proto.sandboxes.api.v1.ListSecretsResponse} returns this
*/
proto.sandboxes.api.v1.ListSecretsResponse.prototype.setSecretsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sandboxes.api.v1.Secret=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Secret}
 */
proto.sandboxes.api.v1.ListSecretsResponse.prototype.addSecrets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sandboxes.api.v1.Secret, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ListSecretsResponse} returns this
 */
proto.sandboxes.api.v1.ListSecretsResponse.prototype.clearSecretsList = function() {
  return this.setSecretsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.CreateSecretRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.CreateSecretRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.CreateSecretRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateSecretRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    secret: (f = msg.getSecret()) && sandboxes_api_v1_secret_pb.Secret.toObject(includeInstance, f),
    userOwned: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.CreateSecretRequest}
 */
proto.sandboxes.api.v1.CreateSecretRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.CreateSecretRequest;
  return proto.sandboxes.api.v1.CreateSecretRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.CreateSecretRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.CreateSecretRequest}
 */
proto.sandboxes.api.v1.CreateSecretRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_secret_pb.Secret;
      reader.readMessage(value,sandboxes_api_v1_secret_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUserOwned(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.CreateSecretRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.CreateSecretRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.CreateSecretRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateSecretRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_secret_pb.Secret.serializeBinaryToWriter
    );
  }
  f = message.getUserOwned();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional Secret secret = 1;
 * @return {?proto.sandboxes.api.v1.Secret}
 */
proto.sandboxes.api.v1.CreateSecretRequest.prototype.getSecret = function() {
  return /** @type{?proto.sandboxes.api.v1.Secret} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_secret_pb.Secret, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Secret|undefined} value
 * @return {!proto.sandboxes.api.v1.CreateSecretRequest} returns this
*/
proto.sandboxes.api.v1.CreateSecretRequest.prototype.setSecret = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.CreateSecretRequest} returns this
 */
proto.sandboxes.api.v1.CreateSecretRequest.prototype.clearSecret = function() {
  return this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.CreateSecretRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool user_owned = 2;
 * @return {boolean}
 */
proto.sandboxes.api.v1.CreateSecretRequest.prototype.getUserOwned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.CreateSecretRequest} returns this
 */
proto.sandboxes.api.v1.CreateSecretRequest.prototype.setUserOwned = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.CreateSecretResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.CreateSecretResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.CreateSecretResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateSecretResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    secret: (f = msg.getSecret()) && sandboxes_api_v1_secret_pb.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.CreateSecretResponse}
 */
proto.sandboxes.api.v1.CreateSecretResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.CreateSecretResponse;
  return proto.sandboxes.api.v1.CreateSecretResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.CreateSecretResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.CreateSecretResponse}
 */
proto.sandboxes.api.v1.CreateSecretResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_secret_pb.Secret;
      reader.readMessage(value,sandboxes_api_v1_secret_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.CreateSecretResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.CreateSecretResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.CreateSecretResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateSecretResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_secret_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional Secret secret = 1;
 * @return {?proto.sandboxes.api.v1.Secret}
 */
proto.sandboxes.api.v1.CreateSecretResponse.prototype.getSecret = function() {
  return /** @type{?proto.sandboxes.api.v1.Secret} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_secret_pb.Secret, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Secret|undefined} value
 * @return {!proto.sandboxes.api.v1.CreateSecretResponse} returns this
*/
proto.sandboxes.api.v1.CreateSecretResponse.prototype.setSecret = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.CreateSecretResponse} returns this
 */
proto.sandboxes.api.v1.CreateSecretResponse.prototype.clearSecret = function() {
  return this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.CreateSecretResponse.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateSecretRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateSecretRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateSecretRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSecretRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    secret: (f = msg.getSecret()) && sandboxes_api_v1_secret_pb.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateSecretRequest}
 */
proto.sandboxes.api.v1.UpdateSecretRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateSecretRequest;
  return proto.sandboxes.api.v1.UpdateSecretRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateSecretRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateSecretRequest}
 */
proto.sandboxes.api.v1.UpdateSecretRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_secret_pb.Secret;
      reader.readMessage(value,sandboxes_api_v1_secret_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateSecretRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateSecretRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateSecretRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSecretRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_secret_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional Secret secret = 1;
 * @return {?proto.sandboxes.api.v1.Secret}
 */
proto.sandboxes.api.v1.UpdateSecretRequest.prototype.getSecret = function() {
  return /** @type{?proto.sandboxes.api.v1.Secret} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_secret_pb.Secret, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Secret|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateSecretRequest} returns this
*/
proto.sandboxes.api.v1.UpdateSecretRequest.prototype.setSecret = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateSecretRequest} returns this
 */
proto.sandboxes.api.v1.UpdateSecretRequest.prototype.clearSecret = function() {
  return this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSecretRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateSecretResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateSecretResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateSecretResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSecretResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    secret: (f = msg.getSecret()) && sandboxes_api_v1_secret_pb.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateSecretResponse}
 */
proto.sandboxes.api.v1.UpdateSecretResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateSecretResponse;
  return proto.sandboxes.api.v1.UpdateSecretResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateSecretResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateSecretResponse}
 */
proto.sandboxes.api.v1.UpdateSecretResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_secret_pb.Secret;
      reader.readMessage(value,sandboxes_api_v1_secret_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateSecretResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateSecretResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateSecretResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSecretResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_secret_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional Secret secret = 1;
 * @return {?proto.sandboxes.api.v1.Secret}
 */
proto.sandboxes.api.v1.UpdateSecretResponse.prototype.getSecret = function() {
  return /** @type{?proto.sandboxes.api.v1.Secret} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_secret_pb.Secret, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Secret|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateSecretResponse} returns this
*/
proto.sandboxes.api.v1.UpdateSecretResponse.prototype.setSecret = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateSecretResponse} returns this
 */
proto.sandboxes.api.v1.UpdateSecretResponse.prototype.clearSecret = function() {
  return this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSecretResponse.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.DeleteSecretRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.DeleteSecretRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.DeleteSecretRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteSecretRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    secret: (f = msg.getSecret()) && sandboxes_api_v1_secret_pb.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.DeleteSecretRequest}
 */
proto.sandboxes.api.v1.DeleteSecretRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.DeleteSecretRequest;
  return proto.sandboxes.api.v1.DeleteSecretRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.DeleteSecretRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.DeleteSecretRequest}
 */
proto.sandboxes.api.v1.DeleteSecretRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_secret_pb.Secret;
      reader.readMessage(value,sandboxes_api_v1_secret_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.DeleteSecretRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.DeleteSecretRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.DeleteSecretRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteSecretRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_secret_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional Secret secret = 1;
 * @return {?proto.sandboxes.api.v1.Secret}
 */
proto.sandboxes.api.v1.DeleteSecretRequest.prototype.getSecret = function() {
  return /** @type{?proto.sandboxes.api.v1.Secret} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_secret_pb.Secret, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Secret|undefined} value
 * @return {!proto.sandboxes.api.v1.DeleteSecretRequest} returns this
*/
proto.sandboxes.api.v1.DeleteSecretRequest.prototype.setSecret = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.DeleteSecretRequest} returns this
 */
proto.sandboxes.api.v1.DeleteSecretRequest.prototype.clearSecret = function() {
  return this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.DeleteSecretRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.DeleteSecretResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.DeleteSecretResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.DeleteSecretResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteSecretResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    secret: (f = msg.getSecret()) && sandboxes_api_v1_secret_pb.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.DeleteSecretResponse}
 */
proto.sandboxes.api.v1.DeleteSecretResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.DeleteSecretResponse;
  return proto.sandboxes.api.v1.DeleteSecretResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.DeleteSecretResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.DeleteSecretResponse}
 */
proto.sandboxes.api.v1.DeleteSecretResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_secret_pb.Secret;
      reader.readMessage(value,sandboxes_api_v1_secret_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.DeleteSecretResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.DeleteSecretResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.DeleteSecretResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteSecretResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_secret_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional Secret secret = 1;
 * @return {?proto.sandboxes.api.v1.Secret}
 */
proto.sandboxes.api.v1.DeleteSecretResponse.prototype.getSecret = function() {
  return /** @type{?proto.sandboxes.api.v1.Secret} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_secret_pb.Secret, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Secret|undefined} value
 * @return {!proto.sandboxes.api.v1.DeleteSecretResponse} returns this
*/
proto.sandboxes.api.v1.DeleteSecretResponse.prototype.setSecret = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.DeleteSecretResponse} returns this
 */
proto.sandboxes.api.v1.DeleteSecretResponse.prototype.clearSecret = function() {
  return this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.DeleteSecretResponse.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.SignWithSecretRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.SignWithSecretRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.SignWithSecretRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.SignWithSecretRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    secretId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    digest: msg.getDigest_asB64(),
    hash: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.SignWithSecretRequest}
 */
proto.sandboxes.api.v1.SignWithSecretRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.SignWithSecretRequest;
  return proto.sandboxes.api.v1.SignWithSecretRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.SignWithSecretRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.SignWithSecretRequest}
 */
proto.sandboxes.api.v1.SignWithSecretRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecretId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDigest(value);
      break;
    case 3:
      var value = /** @type {!proto.sandboxes.api.v1.SignWithSecretRequest.Hash} */ (reader.readEnum());
      msg.setHash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.SignWithSecretRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.SignWithSecretRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.SignWithSecretRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.SignWithSecretRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecretId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDigest_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getHash();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.sandboxes.api.v1.SignWithSecretRequest.Hash = {
  UNSPECIFIED: 0,
  SHA1: 1,
  SHA256: 2,
  SHA384: 3,
  SHA512: 4
};

/**
 * optional string secret_id = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.SignWithSecretRequest.prototype.getSecretId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.SignWithSecretRequest} returns this
 */
proto.sandboxes.api.v1.SignWithSecretRequest.prototype.setSecretId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes digest = 2;
 * @return {!(string|Uint8Array)}
 */
proto.sandboxes.api.v1.SignWithSecretRequest.prototype.getDigest = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes digest = 2;
 * This is a type-conversion wrapper around `getDigest()`
 * @return {string}
 */
proto.sandboxes.api.v1.SignWithSecretRequest.prototype.getDigest_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDigest()));
};


/**
 * optional bytes digest = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDigest()`
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.SignWithSecretRequest.prototype.getDigest_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDigest()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sandboxes.api.v1.SignWithSecretRequest} returns this
 */
proto.sandboxes.api.v1.SignWithSecretRequest.prototype.setDigest = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional Hash hash = 3;
 * @return {!proto.sandboxes.api.v1.SignWithSecretRequest.Hash}
 */
proto.sandboxes.api.v1.SignWithSecretRequest.prototype.getHash = function() {
  return /** @type {!proto.sandboxes.api.v1.SignWithSecretRequest.Hash} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.sandboxes.api.v1.SignWithSecretRequest.Hash} value
 * @return {!proto.sandboxes.api.v1.SignWithSecretRequest} returns this
 */
proto.sandboxes.api.v1.SignWithSecretRequest.prototype.setHash = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.SignWithSecretResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.SignWithSecretResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.SignWithSecretResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.SignWithSecretResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    signature: msg.getSignature_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.SignWithSecretResponse}
 */
proto.sandboxes.api.v1.SignWithSecretResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.SignWithSecretResponse;
  return proto.sandboxes.api.v1.SignWithSecretResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.SignWithSecretResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.SignWithSecretResponse}
 */
proto.sandboxes.api.v1.SignWithSecretResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.SignWithSecretResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.SignWithSecretResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.SignWithSecretResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.SignWithSecretResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes signature = 1;
 * @return {!(string|Uint8Array)}
 */
proto.sandboxes.api.v1.SignWithSecretResponse.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes signature = 1;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.sandboxes.api.v1.SignWithSecretResponse.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.SignWithSecretResponse.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sandboxes.api.v1.SignWithSecretResponse} returns this
 */
proto.sandboxes.api.v1.SignWithSecretResponse.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.ListJobsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ListJobsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ListJobsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListJobsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    page: (f = msg.getPage()) && sandboxes_api_v1_common_pb.Pagination.Request.toObject(includeInstance, f),
    metaFilter: (f = msg.getMetaFilter()) && sandboxes_api_v1_object_pb.ObjectMetaFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.ListJobsRequest}
 */
proto.sandboxes.api.v1.ListJobsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ListJobsRequest;
  return proto.sandboxes.api.v1.ListJobsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ListJobsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ListJobsRequest}
 */
proto.sandboxes.api.v1.ListJobsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 2:
      var value = new sandboxes_api_v1_common_pb.Pagination.Request;
      reader.readMessage(value,sandboxes_api_v1_common_pb.Pagination.Request.deserializeBinaryFromReader);
      msg.setPage(value);
      break;
    case 3:
      var value = new sandboxes_api_v1_object_pb.ObjectMetaFilter;
      reader.readMessage(value,sandboxes_api_v1_object_pb.ObjectMetaFilter.deserializeBinaryFromReader);
      msg.setMetaFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.ListJobsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ListJobsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ListJobsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListJobsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sandboxes_api_v1_common_pb.Pagination.Request.serializeBinaryToWriter
    );
  }
  f = message.getMetaFilter();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      sandboxes_api_v1_object_pb.ObjectMetaFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.ListJobsRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.ListJobsRequest} returns this
 */
proto.sandboxes.api.v1.ListJobsRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Pagination.Request page = 2;
 * @return {?proto.sandboxes.api.v1.Pagination.Request}
 */
proto.sandboxes.api.v1.ListJobsRequest.prototype.getPage = function() {
  return /** @type{?proto.sandboxes.api.v1.Pagination.Request} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_common_pb.Pagination.Request, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.Pagination.Request|undefined} value
 * @return {!proto.sandboxes.api.v1.ListJobsRequest} returns this
*/
proto.sandboxes.api.v1.ListJobsRequest.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.ListJobsRequest} returns this
 */
proto.sandboxes.api.v1.ListJobsRequest.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.ListJobsRequest.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ObjectMetaFilter meta_filter = 3;
 * @return {?proto.sandboxes.api.v1.ObjectMetaFilter}
 */
proto.sandboxes.api.v1.ListJobsRequest.prototype.getMetaFilter = function() {
  return /** @type{?proto.sandboxes.api.v1.ObjectMetaFilter} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_object_pb.ObjectMetaFilter, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.ObjectMetaFilter|undefined} value
 * @return {!proto.sandboxes.api.v1.ListJobsRequest} returns this
*/
proto.sandboxes.api.v1.ListJobsRequest.prototype.setMetaFilter = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.ListJobsRequest} returns this
 */
proto.sandboxes.api.v1.ListJobsRequest.prototype.clearMetaFilter = function() {
  return this.setMetaFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.ListJobsRequest.prototype.hasMetaFilter = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.ListJobsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.ListJobsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ListJobsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ListJobsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListJobsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    jobsList: jspb.Message.toObjectList(msg.getJobsList(),
    sandboxes_api_v1_job_pb.Job.toObject, includeInstance),
    page: (f = msg.getPage()) && sandboxes_api_v1_common_pb.Pagination.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.ListJobsResponse}
 */
proto.sandboxes.api.v1.ListJobsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ListJobsResponse;
  return proto.sandboxes.api.v1.ListJobsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ListJobsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ListJobsResponse}
 */
proto.sandboxes.api.v1.ListJobsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_job_pb.Job;
      reader.readMessage(value,sandboxes_api_v1_job_pb.Job.deserializeBinaryFromReader);
      msg.addJobs(value);
      break;
    case 2:
      var value = new sandboxes_api_v1_common_pb.Pagination.Response;
      reader.readMessage(value,sandboxes_api_v1_common_pb.Pagination.Response.deserializeBinaryFromReader);
      msg.setPage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.ListJobsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ListJobsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ListJobsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListJobsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJobsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      sandboxes_api_v1_job_pb.Job.serializeBinaryToWriter
    );
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sandboxes_api_v1_common_pb.Pagination.Response.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Job jobs = 1;
 * @return {!Array<!proto.sandboxes.api.v1.Job>}
 */
proto.sandboxes.api.v1.ListJobsResponse.prototype.getJobsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.Job>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_job_pb.Job, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.Job>} value
 * @return {!proto.sandboxes.api.v1.ListJobsResponse} returns this
*/
proto.sandboxes.api.v1.ListJobsResponse.prototype.setJobsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sandboxes.api.v1.Job=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Job}
 */
proto.sandboxes.api.v1.ListJobsResponse.prototype.addJobs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sandboxes.api.v1.Job, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ListJobsResponse} returns this
 */
proto.sandboxes.api.v1.ListJobsResponse.prototype.clearJobsList = function() {
  return this.setJobsList([]);
};


/**
 * optional Pagination.Response page = 2;
 * @return {?proto.sandboxes.api.v1.Pagination.Response}
 */
proto.sandboxes.api.v1.ListJobsResponse.prototype.getPage = function() {
  return /** @type{?proto.sandboxes.api.v1.Pagination.Response} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_common_pb.Pagination.Response, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.Pagination.Response|undefined} value
 * @return {!proto.sandboxes.api.v1.ListJobsResponse} returns this
*/
proto.sandboxes.api.v1.ListJobsResponse.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.ListJobsResponse} returns this
 */
proto.sandboxes.api.v1.ListJobsResponse.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.ListJobsResponse.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.CreateJobRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.CreateJobRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.CreateJobRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateJobRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    meta: (f = msg.getMeta()) && sandboxes_api_v1_object_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && sandboxes_api_v1_job_pb.Job.Spec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.CreateJobRequest}
 */
proto.sandboxes.api.v1.CreateJobRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.CreateJobRequest;
  return proto.sandboxes.api.v1.CreateJobRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.CreateJobRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.CreateJobRequest}
 */
proto.sandboxes.api.v1.CreateJobRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_object_pb.ObjectMeta;
      reader.readMessage(value,sandboxes_api_v1_object_pb.ObjectMeta.deserializeBinaryFromReader);
      msg.setMeta(value);
      break;
    case 2:
      var value = new sandboxes_api_v1_job_pb.Job.Spec;
      reader.readMessage(value,sandboxes_api_v1_job_pb.Job.Spec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.CreateJobRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.CreateJobRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.CreateJobRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateJobRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_object_pb.ObjectMeta.serializeBinaryToWriter
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sandboxes_api_v1_job_pb.Job.Spec.serializeBinaryToWriter
    );
  }
};


/**
 * optional ObjectMeta meta = 1;
 * @return {?proto.sandboxes.api.v1.ObjectMeta}
 */
proto.sandboxes.api.v1.CreateJobRequest.prototype.getMeta = function() {
  return /** @type{?proto.sandboxes.api.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_object_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.ObjectMeta|undefined} value
 * @return {!proto.sandboxes.api.v1.CreateJobRequest} returns this
*/
proto.sandboxes.api.v1.CreateJobRequest.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.CreateJobRequest} returns this
 */
proto.sandboxes.api.v1.CreateJobRequest.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.CreateJobRequest.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Job.Spec spec = 2;
 * @return {?proto.sandboxes.api.v1.Job.Spec}
 */
proto.sandboxes.api.v1.CreateJobRequest.prototype.getSpec = function() {
  return /** @type{?proto.sandboxes.api.v1.Job.Spec} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_job_pb.Job.Spec, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.Job.Spec|undefined} value
 * @return {!proto.sandboxes.api.v1.CreateJobRequest} returns this
*/
proto.sandboxes.api.v1.CreateJobRequest.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.CreateJobRequest} returns this
 */
proto.sandboxes.api.v1.CreateJobRequest.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.CreateJobRequest.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.CreateJobResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.CreateJobResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.CreateJobResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateJobResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    job: (f = msg.getJob()) && sandboxes_api_v1_job_pb.Job.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.CreateJobResponse}
 */
proto.sandboxes.api.v1.CreateJobResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.CreateJobResponse;
  return proto.sandboxes.api.v1.CreateJobResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.CreateJobResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.CreateJobResponse}
 */
proto.sandboxes.api.v1.CreateJobResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_job_pb.Job;
      reader.readMessage(value,sandboxes_api_v1_job_pb.Job.deserializeBinaryFromReader);
      msg.setJob(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.CreateJobResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.CreateJobResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.CreateJobResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateJobResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJob();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_job_pb.Job.serializeBinaryToWriter
    );
  }
};


/**
 * optional Job job = 1;
 * @return {?proto.sandboxes.api.v1.Job}
 */
proto.sandboxes.api.v1.CreateJobResponse.prototype.getJob = function() {
  return /** @type{?proto.sandboxes.api.v1.Job} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_job_pb.Job, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Job|undefined} value
 * @return {!proto.sandboxes.api.v1.CreateJobResponse} returns this
*/
proto.sandboxes.api.v1.CreateJobResponse.prototype.setJob = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.CreateJobResponse} returns this
 */
proto.sandboxes.api.v1.CreateJobResponse.prototype.clearJob = function() {
  return this.setJob(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.CreateJobResponse.prototype.hasJob = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sandboxes.api.v1.UpdateJobRequest.oneofGroups_ = [[6,7,8,9,10]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.UpdateJobRequest.UpdateCase = {
  UPDATE_NOT_SET: 0,
  SPEC: 6,
  CANCEL: 7,
  TRIGGER_CONFIG: 8,
  MANUAL_TRIGGER: 9,
  GOLDEN_EXECUTION: 10
};

/**
 * @return {proto.sandboxes.api.v1.UpdateJobRequest.UpdateCase}
 */
proto.sandboxes.api.v1.UpdateJobRequest.prototype.getUpdateCase = function() {
  return /** @type {proto.sandboxes.api.v1.UpdateJobRequest.UpdateCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.UpdateJobRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateJobRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateJobRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateJobRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateJobRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    jobId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    version: jspb.Message.getFieldWithDefault(msg, 3, ""),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    spec: (f = msg.getSpec()) && proto.sandboxes.api.v1.UpdateJobRequest.Spec.toObject(includeInstance, f),
    cancel: (f = msg.getCancel()) && proto.sandboxes.api.v1.UpdateJobRequest.Cancel.toObject(includeInstance, f),
    triggerConfig: (f = msg.getTriggerConfig()) && proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig.toObject(includeInstance, f),
    manualTrigger: (f = msg.getManualTrigger()) && proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger.toObject(includeInstance, f),
    goldenExecution: (f = msg.getGoldenExecution()) && proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest}
 */
proto.sandboxes.api.v1.UpdateJobRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateJobRequest;
  return proto.sandboxes.api.v1.UpdateJobRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateJobRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest}
 */
proto.sandboxes.api.v1.UpdateJobRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 6:
      var value = new proto.sandboxes.api.v1.UpdateJobRequest.Spec;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateJobRequest.Spec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 7:
      var value = new proto.sandboxes.api.v1.UpdateJobRequest.Cancel;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateJobRequest.Cancel.deserializeBinaryFromReader);
      msg.setCancel(value);
      break;
    case 8:
      var value = new proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig.deserializeBinaryFromReader);
      msg.setTriggerConfig(value);
      break;
    case 9:
      var value = new proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger.deserializeBinaryFromReader);
      msg.setManualTrigger(value);
      break;
    case 10:
      var value = new proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution;
      reader.readMessage(value,proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution.deserializeBinaryFromReader);
      msg.setGoldenExecution(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateJobRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateJobRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateJobRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateJobRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getJobId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.sandboxes.api.v1.UpdateJobRequest.Spec.serializeBinaryToWriter
    );
  }
  f = message.getCancel();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.sandboxes.api.v1.UpdateJobRequest.Cancel.serializeBinaryToWriter
    );
  }
  f = message.getTriggerConfig();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig.serializeBinaryToWriter
    );
  }
  f = message.getManualTrigger();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger.serializeBinaryToWriter
    );
  }
  f = message.getGoldenExecution();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateJobRequest.Spec.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateJobRequest.Spec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateJobRequest.Spec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateJobRequest.Spec.toObject = function(includeInstance, msg) {
  var f, obj = {
    spec: (f = msg.getSpec()) && sandboxes_api_v1_job_pb.Job.Spec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest.Spec}
 */
proto.sandboxes.api.v1.UpdateJobRequest.Spec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateJobRequest.Spec;
  return proto.sandboxes.api.v1.UpdateJobRequest.Spec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateJobRequest.Spec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest.Spec}
 */
proto.sandboxes.api.v1.UpdateJobRequest.Spec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_job_pb.Job.Spec;
      reader.readMessage(value,sandboxes_api_v1_job_pb.Job.Spec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateJobRequest.Spec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateJobRequest.Spec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateJobRequest.Spec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateJobRequest.Spec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_job_pb.Job.Spec.serializeBinaryToWriter
    );
  }
};


/**
 * optional Job.Spec spec = 1;
 * @return {?proto.sandboxes.api.v1.Job.Spec}
 */
proto.sandboxes.api.v1.UpdateJobRequest.Spec.prototype.getSpec = function() {
  return /** @type{?proto.sandboxes.api.v1.Job.Spec} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_job_pb.Job.Spec, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Job.Spec|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest.Spec} returns this
*/
proto.sandboxes.api.v1.UpdateJobRequest.Spec.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest.Spec} returns this
 */
proto.sandboxes.api.v1.UpdateJobRequest.Spec.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateJobRequest.Spec.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateJobRequest.Cancel.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateJobRequest.Cancel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateJobRequest.Cancel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateJobRequest.Cancel.toObject = function(includeInstance, msg) {
  var f, obj = {
    executionId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    cancellation: (f = msg.getCancellation()) && sandboxes_api_v1_job_pb.Job.Cancellation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest.Cancel}
 */
proto.sandboxes.api.v1.UpdateJobRequest.Cancel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateJobRequest.Cancel;
  return proto.sandboxes.api.v1.UpdateJobRequest.Cancel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateJobRequest.Cancel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest.Cancel}
 */
proto.sandboxes.api.v1.UpdateJobRequest.Cancel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExecutionId(value);
      break;
    case 2:
      var value = new sandboxes_api_v1_job_pb.Job.Cancellation;
      reader.readMessage(value,sandboxes_api_v1_job_pb.Job.Cancellation.deserializeBinaryFromReader);
      msg.setCancellation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateJobRequest.Cancel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateJobRequest.Cancel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateJobRequest.Cancel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateJobRequest.Cancel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExecutionId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCancellation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sandboxes_api_v1_job_pb.Job.Cancellation.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 execution_id = 1;
 * @return {number}
 */
proto.sandboxes.api.v1.UpdateJobRequest.Cancel.prototype.getExecutionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest.Cancel} returns this
 */
proto.sandboxes.api.v1.UpdateJobRequest.Cancel.prototype.setExecutionId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Job.Cancellation cancellation = 2;
 * @return {?proto.sandboxes.api.v1.Job.Cancellation}
 */
proto.sandboxes.api.v1.UpdateJobRequest.Cancel.prototype.getCancellation = function() {
  return /** @type{?proto.sandboxes.api.v1.Job.Cancellation} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_job_pb.Job.Cancellation, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.Job.Cancellation|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest.Cancel} returns this
*/
proto.sandboxes.api.v1.UpdateJobRequest.Cancel.prototype.setCancellation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest.Cancel} returns this
 */
proto.sandboxes.api.v1.UpdateJobRequest.Cancel.prototype.clearCancellation = function() {
  return this.setCancellation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateJobRequest.Cancel.prototype.hasCancellation = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    disabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig}
 */
proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig;
  return proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig}
 */
proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool disabled = 1;
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig.prototype.getDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig} returns this
 */
proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig.prototype.setDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger}
 */
proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger;
  return proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger}
 */
proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger} returns this
 */
proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution.toObject = function(includeInstance, msg) {
  var f, obj = {
    goldenExecution: (f = msg.getGoldenExecution()) && sandboxes_api_v1_job_pb.Job.GoldenExecution.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution}
 */
proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution;
  return proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution}
 */
proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_job_pb.Job.GoldenExecution;
      reader.readMessage(value,sandboxes_api_v1_job_pb.Job.GoldenExecution.deserializeBinaryFromReader);
      msg.setGoldenExecution(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGoldenExecution();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_job_pb.Job.GoldenExecution.serializeBinaryToWriter
    );
  }
};


/**
 * optional Job.GoldenExecution golden_execution = 1;
 * @return {?proto.sandboxes.api.v1.Job.GoldenExecution}
 */
proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution.prototype.getGoldenExecution = function() {
  return /** @type{?proto.sandboxes.api.v1.Job.GoldenExecution} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_job_pb.Job.GoldenExecution, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Job.GoldenExecution|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution} returns this
*/
proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution.prototype.setGoldenExecution = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution} returns this
 */
proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution.prototype.clearGoldenExecution = function() {
  return this.setGoldenExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution.prototype.hasGoldenExecution = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateJobRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest} returns this
 */
proto.sandboxes.api.v1.UpdateJobRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string job_id = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateJobRequest.prototype.getJobId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest} returns this
 */
proto.sandboxes.api.v1.UpdateJobRequest.prototype.setJobId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string version = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateJobRequest.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest} returns this
 */
proto.sandboxes.api.v1.UpdateJobRequest.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.sandboxes.api.v1.UpdateJobRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest} returns this
 */
proto.sandboxes.api.v1.UpdateJobRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * map<string, string> labels = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.sandboxes.api.v1.UpdateJobRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest} returns this
 */
proto.sandboxes.api.v1.UpdateJobRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional Spec spec = 6;
 * @return {?proto.sandboxes.api.v1.UpdateJobRequest.Spec}
 */
proto.sandboxes.api.v1.UpdateJobRequest.prototype.getSpec = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateJobRequest.Spec} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateJobRequest.Spec, 6));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateJobRequest.Spec|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest} returns this
*/
proto.sandboxes.api.v1.UpdateJobRequest.prototype.setSpec = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.sandboxes.api.v1.UpdateJobRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest} returns this
 */
proto.sandboxes.api.v1.UpdateJobRequest.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateJobRequest.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Cancel cancel = 7;
 * @return {?proto.sandboxes.api.v1.UpdateJobRequest.Cancel}
 */
proto.sandboxes.api.v1.UpdateJobRequest.prototype.getCancel = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateJobRequest.Cancel} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateJobRequest.Cancel, 7));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateJobRequest.Cancel|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest} returns this
*/
proto.sandboxes.api.v1.UpdateJobRequest.prototype.setCancel = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.sandboxes.api.v1.UpdateJobRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest} returns this
 */
proto.sandboxes.api.v1.UpdateJobRequest.prototype.clearCancel = function() {
  return this.setCancel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateJobRequest.prototype.hasCancel = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional TriggerConfig trigger_config = 8;
 * @return {?proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig}
 */
proto.sandboxes.api.v1.UpdateJobRequest.prototype.getTriggerConfig = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig, 8));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateJobRequest.TriggerConfig|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest} returns this
*/
proto.sandboxes.api.v1.UpdateJobRequest.prototype.setTriggerConfig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.sandboxes.api.v1.UpdateJobRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest} returns this
 */
proto.sandboxes.api.v1.UpdateJobRequest.prototype.clearTriggerConfig = function() {
  return this.setTriggerConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateJobRequest.prototype.hasTriggerConfig = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ManualTrigger manual_trigger = 9;
 * @return {?proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger}
 */
proto.sandboxes.api.v1.UpdateJobRequest.prototype.getManualTrigger = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger, 9));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateJobRequest.ManualTrigger|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest} returns this
*/
proto.sandboxes.api.v1.UpdateJobRequest.prototype.setManualTrigger = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.sandboxes.api.v1.UpdateJobRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest} returns this
 */
proto.sandboxes.api.v1.UpdateJobRequest.prototype.clearManualTrigger = function() {
  return this.setManualTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateJobRequest.prototype.hasManualTrigger = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional GoldenExecution golden_execution = 10;
 * @return {?proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution}
 */
proto.sandboxes.api.v1.UpdateJobRequest.prototype.getGoldenExecution = function() {
  return /** @type{?proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution, 10));
};


/**
 * @param {?proto.sandboxes.api.v1.UpdateJobRequest.GoldenExecution|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest} returns this
*/
proto.sandboxes.api.v1.UpdateJobRequest.prototype.setGoldenExecution = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.sandboxes.api.v1.UpdateJobRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateJobRequest} returns this
 */
proto.sandboxes.api.v1.UpdateJobRequest.prototype.clearGoldenExecution = function() {
  return this.setGoldenExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateJobRequest.prototype.hasGoldenExecution = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateJobResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateJobResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateJobResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateJobResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    job: (f = msg.getJob()) && sandboxes_api_v1_job_pb.Job.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateJobResponse}
 */
proto.sandboxes.api.v1.UpdateJobResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateJobResponse;
  return proto.sandboxes.api.v1.UpdateJobResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateJobResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateJobResponse}
 */
proto.sandboxes.api.v1.UpdateJobResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_job_pb.Job;
      reader.readMessage(value,sandboxes_api_v1_job_pb.Job.deserializeBinaryFromReader);
      msg.setJob(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateJobResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateJobResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateJobResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateJobResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJob();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_job_pb.Job.serializeBinaryToWriter
    );
  }
};


/**
 * optional Job job = 1;
 * @return {?proto.sandboxes.api.v1.Job}
 */
proto.sandboxes.api.v1.UpdateJobResponse.prototype.getJob = function() {
  return /** @type{?proto.sandboxes.api.v1.Job} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_job_pb.Job, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Job|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateJobResponse} returns this
*/
proto.sandboxes.api.v1.UpdateJobResponse.prototype.setJob = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateJobResponse} returns this
 */
proto.sandboxes.api.v1.UpdateJobResponse.prototype.clearJob = function() {
  return this.setJob(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateJobResponse.prototype.hasJob = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.DeleteJobRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.DeleteJobRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.DeleteJobRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteJobRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    meta: (f = msg.getMeta()) && sandboxes_api_v1_object_pb.ObjectMeta.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.DeleteJobRequest}
 */
proto.sandboxes.api.v1.DeleteJobRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.DeleteJobRequest;
  return proto.sandboxes.api.v1.DeleteJobRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.DeleteJobRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.DeleteJobRequest}
 */
proto.sandboxes.api.v1.DeleteJobRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_object_pb.ObjectMeta;
      reader.readMessage(value,sandboxes_api_v1_object_pb.ObjectMeta.deserializeBinaryFromReader);
      msg.setMeta(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.DeleteJobRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.DeleteJobRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.DeleteJobRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteJobRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_object_pb.ObjectMeta.serializeBinaryToWriter
    );
  }
};


/**
 * optional ObjectMeta meta = 1;
 * @return {?proto.sandboxes.api.v1.ObjectMeta}
 */
proto.sandboxes.api.v1.DeleteJobRequest.prototype.getMeta = function() {
  return /** @type{?proto.sandboxes.api.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_object_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.ObjectMeta|undefined} value
 * @return {!proto.sandboxes.api.v1.DeleteJobRequest} returns this
*/
proto.sandboxes.api.v1.DeleteJobRequest.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.DeleteJobRequest} returns this
 */
proto.sandboxes.api.v1.DeleteJobRequest.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.DeleteJobRequest.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.DeleteJobResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.DeleteJobResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.DeleteJobResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteJobResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    job: (f = msg.getJob()) && sandboxes_api_v1_job_pb.Job.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.DeleteJobResponse}
 */
proto.sandboxes.api.v1.DeleteJobResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.DeleteJobResponse;
  return proto.sandboxes.api.v1.DeleteJobResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.DeleteJobResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.DeleteJobResponse}
 */
proto.sandboxes.api.v1.DeleteJobResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_job_pb.Job;
      reader.readMessage(value,sandboxes_api_v1_job_pb.Job.deserializeBinaryFromReader);
      msg.setJob(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.DeleteJobResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.DeleteJobResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.DeleteJobResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteJobResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJob();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_job_pb.Job.serializeBinaryToWriter
    );
  }
};


/**
 * optional Job job = 1;
 * @return {?proto.sandboxes.api.v1.Job}
 */
proto.sandboxes.api.v1.DeleteJobResponse.prototype.getJob = function() {
  return /** @type{?proto.sandboxes.api.v1.Job} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_job_pb.Job, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Job|undefined} value
 * @return {!proto.sandboxes.api.v1.DeleteJobResponse} returns this
*/
proto.sandboxes.api.v1.DeleteJobResponse.prototype.setJob = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.DeleteJobResponse} returns this
 */
proto.sandboxes.api.v1.DeleteJobResponse.prototype.clearJob = function() {
  return this.setJob(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.DeleteJobResponse.prototype.hasJob = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.ListResourcesRequest.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.ListResourcesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ListResourcesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ListResourcesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListResourcesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    resourceType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    filterByIdsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    filterByNamesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    ownerId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    metaOnly: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.ListResourcesRequest}
 */
proto.sandboxes.api.v1.ListResourcesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ListResourcesRequest;
  return proto.sandboxes.api.v1.ListResourcesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ListResourcesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ListResourcesRequest}
 */
proto.sandboxes.api.v1.ListResourcesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilterByIds(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilterByNames(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwnerId(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMetaOnly(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.ListResourcesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ListResourcesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ListResourcesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListResourcesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResourceType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFilterByIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getFilterByNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getOwnerId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMetaOnly();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.ListResourcesRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.ListResourcesRequest} returns this
 */
proto.sandboxes.api.v1.ListResourcesRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string resource_type = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.ListResourcesRequest.prototype.getResourceType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.ListResourcesRequest} returns this
 */
proto.sandboxes.api.v1.ListResourcesRequest.prototype.setResourceType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string filter_by_ids = 3;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.ListResourcesRequest.prototype.getFilterByIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.ListResourcesRequest} returns this
 */
proto.sandboxes.api.v1.ListResourcesRequest.prototype.setFilterByIdsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.ListResourcesRequest} returns this
 */
proto.sandboxes.api.v1.ListResourcesRequest.prototype.addFilterByIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ListResourcesRequest} returns this
 */
proto.sandboxes.api.v1.ListResourcesRequest.prototype.clearFilterByIdsList = function() {
  return this.setFilterByIdsList([]);
};


/**
 * repeated string filter_by_names = 4;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.ListResourcesRequest.prototype.getFilterByNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.ListResourcesRequest} returns this
 */
proto.sandboxes.api.v1.ListResourcesRequest.prototype.setFilterByNamesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.ListResourcesRequest} returns this
 */
proto.sandboxes.api.v1.ListResourcesRequest.prototype.addFilterByNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ListResourcesRequest} returns this
 */
proto.sandboxes.api.v1.ListResourcesRequest.prototype.clearFilterByNamesList = function() {
  return this.setFilterByNamesList([]);
};


/**
 * optional string owner_id = 5;
 * @return {string}
 */
proto.sandboxes.api.v1.ListResourcesRequest.prototype.getOwnerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.ListResourcesRequest} returns this
 */
proto.sandboxes.api.v1.ListResourcesRequest.prototype.setOwnerId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool meta_only = 6;
 * @return {boolean}
 */
proto.sandboxes.api.v1.ListResourcesRequest.prototype.getMetaOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.ListResourcesRequest} returns this
 */
proto.sandboxes.api.v1.ListResourcesRequest.prototype.setMetaOnly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.ListResourcesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.ListResourcesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ListResourcesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ListResourcesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListResourcesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourcesList: jspb.Message.toObjectList(msg.getResourcesList(),
    sandboxes_api_v1_resource_pb.Resource.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.ListResourcesResponse}
 */
proto.sandboxes.api.v1.ListResourcesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ListResourcesResponse;
  return proto.sandboxes.api.v1.ListResourcesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ListResourcesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ListResourcesResponse}
 */
proto.sandboxes.api.v1.ListResourcesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_resource_pb.Resource;
      reader.readMessage(value,sandboxes_api_v1_resource_pb.Resource.deserializeBinaryFromReader);
      msg.addResources(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.ListResourcesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ListResourcesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ListResourcesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListResourcesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      sandboxes_api_v1_resource_pb.Resource.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Resource resources = 1;
 * @return {!Array<!proto.sandboxes.api.v1.Resource>}
 */
proto.sandboxes.api.v1.ListResourcesResponse.prototype.getResourcesList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.Resource>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_resource_pb.Resource, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.Resource>} value
 * @return {!proto.sandboxes.api.v1.ListResourcesResponse} returns this
*/
proto.sandboxes.api.v1.ListResourcesResponse.prototype.setResourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sandboxes.api.v1.Resource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Resource}
 */
proto.sandboxes.api.v1.ListResourcesResponse.prototype.addResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sandboxes.api.v1.Resource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ListResourcesResponse} returns this
 */
proto.sandboxes.api.v1.ListResourcesResponse.prototype.clearResourcesList = function() {
  return this.setResourcesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.CreateResourceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.CreateResourceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.CreateResourceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateResourceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    resource: (f = msg.getResource()) && sandboxes_api_v1_resource_pb.Resource.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.CreateResourceRequest}
 */
proto.sandboxes.api.v1.CreateResourceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.CreateResourceRequest;
  return proto.sandboxes.api.v1.CreateResourceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.CreateResourceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.CreateResourceRequest}
 */
proto.sandboxes.api.v1.CreateResourceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_resource_pb.Resource;
      reader.readMessage(value,sandboxes_api_v1_resource_pb.Resource.deserializeBinaryFromReader);
      msg.setResource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.CreateResourceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.CreateResourceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.CreateResourceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateResourceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResource();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_resource_pb.Resource.serializeBinaryToWriter
    );
  }
};


/**
 * optional Resource resource = 1;
 * @return {?proto.sandboxes.api.v1.Resource}
 */
proto.sandboxes.api.v1.CreateResourceRequest.prototype.getResource = function() {
  return /** @type{?proto.sandboxes.api.v1.Resource} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_resource_pb.Resource, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Resource|undefined} value
 * @return {!proto.sandboxes.api.v1.CreateResourceRequest} returns this
*/
proto.sandboxes.api.v1.CreateResourceRequest.prototype.setResource = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.CreateResourceRequest} returns this
 */
proto.sandboxes.api.v1.CreateResourceRequest.prototype.clearResource = function() {
  return this.setResource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.CreateResourceRequest.prototype.hasResource = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.CreateResourceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.CreateResourceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.CreateResourceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateResourceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resource: (f = msg.getResource()) && sandboxes_api_v1_resource_pb.Resource.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.CreateResourceResponse}
 */
proto.sandboxes.api.v1.CreateResourceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.CreateResourceResponse;
  return proto.sandboxes.api.v1.CreateResourceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.CreateResourceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.CreateResourceResponse}
 */
proto.sandboxes.api.v1.CreateResourceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_resource_pb.Resource;
      reader.readMessage(value,sandboxes_api_v1_resource_pb.Resource.deserializeBinaryFromReader);
      msg.setResource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.CreateResourceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.CreateResourceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.CreateResourceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateResourceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResource();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_resource_pb.Resource.serializeBinaryToWriter
    );
  }
};


/**
 * optional Resource resource = 1;
 * @return {?proto.sandboxes.api.v1.Resource}
 */
proto.sandboxes.api.v1.CreateResourceResponse.prototype.getResource = function() {
  return /** @type{?proto.sandboxes.api.v1.Resource} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_resource_pb.Resource, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Resource|undefined} value
 * @return {!proto.sandboxes.api.v1.CreateResourceResponse} returns this
*/
proto.sandboxes.api.v1.CreateResourceResponse.prototype.setResource = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.CreateResourceResponse} returns this
 */
proto.sandboxes.api.v1.CreateResourceResponse.prototype.clearResource = function() {
  return this.setResource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.CreateResourceResponse.prototype.hasResource = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateResourceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateResourceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateResourceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateResourceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    resource: (f = msg.getResource()) && sandboxes_api_v1_resource_pb.Resource.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateResourceRequest}
 */
proto.sandboxes.api.v1.UpdateResourceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateResourceRequest;
  return proto.sandboxes.api.v1.UpdateResourceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateResourceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateResourceRequest}
 */
proto.sandboxes.api.v1.UpdateResourceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_resource_pb.Resource;
      reader.readMessage(value,sandboxes_api_v1_resource_pb.Resource.deserializeBinaryFromReader);
      msg.setResource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateResourceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateResourceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateResourceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateResourceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResource();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_resource_pb.Resource.serializeBinaryToWriter
    );
  }
};


/**
 * optional Resource resource = 1;
 * @return {?proto.sandboxes.api.v1.Resource}
 */
proto.sandboxes.api.v1.UpdateResourceRequest.prototype.getResource = function() {
  return /** @type{?proto.sandboxes.api.v1.Resource} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_resource_pb.Resource, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Resource|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateResourceRequest} returns this
*/
proto.sandboxes.api.v1.UpdateResourceRequest.prototype.setResource = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateResourceRequest} returns this
 */
proto.sandboxes.api.v1.UpdateResourceRequest.prototype.clearResource = function() {
  return this.setResource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateResourceRequest.prototype.hasResource = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.UpdateResourceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateResourceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateResourceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateResourceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resource: (f = msg.getResource()) && sandboxes_api_v1_resource_pb.Resource.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateResourceResponse}
 */
proto.sandboxes.api.v1.UpdateResourceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateResourceResponse;
  return proto.sandboxes.api.v1.UpdateResourceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateResourceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateResourceResponse}
 */
proto.sandboxes.api.v1.UpdateResourceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_resource_pb.Resource;
      reader.readMessage(value,sandboxes_api_v1_resource_pb.Resource.deserializeBinaryFromReader);
      msg.setResource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateResourceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateResourceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateResourceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateResourceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResource();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_resource_pb.Resource.serializeBinaryToWriter
    );
  }
};


/**
 * optional Resource resource = 1;
 * @return {?proto.sandboxes.api.v1.Resource}
 */
proto.sandboxes.api.v1.UpdateResourceResponse.prototype.getResource = function() {
  return /** @type{?proto.sandboxes.api.v1.Resource} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_resource_pb.Resource, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Resource|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateResourceResponse} returns this
*/
proto.sandboxes.api.v1.UpdateResourceResponse.prototype.setResource = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateResourceResponse} returns this
 */
proto.sandboxes.api.v1.UpdateResourceResponse.prototype.clearResource = function() {
  return this.setResource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateResourceResponse.prototype.hasResource = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.DeleteResourceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.DeleteResourceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.DeleteResourceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteResourceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.DeleteResourceRequest}
 */
proto.sandboxes.api.v1.DeleteResourceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.DeleteResourceRequest;
  return proto.sandboxes.api.v1.DeleteResourceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.DeleteResourceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.DeleteResourceRequest}
 */
proto.sandboxes.api.v1.DeleteResourceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.DeleteResourceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.DeleteResourceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.DeleteResourceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteResourceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.DeleteResourceRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.DeleteResourceRequest} returns this
 */
proto.sandboxes.api.v1.DeleteResourceRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.DeleteResourceRequest.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.DeleteResourceRequest} returns this
 */
proto.sandboxes.api.v1.DeleteResourceRequest.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.DeleteResourceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.DeleteResourceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.DeleteResourceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteResourceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resource: (f = msg.getResource()) && sandboxes_api_v1_resource_pb.Resource.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.DeleteResourceResponse}
 */
proto.sandboxes.api.v1.DeleteResourceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.DeleteResourceResponse;
  return proto.sandboxes.api.v1.DeleteResourceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.DeleteResourceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.DeleteResourceResponse}
 */
proto.sandboxes.api.v1.DeleteResourceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_resource_pb.Resource;
      reader.readMessage(value,sandboxes_api_v1_resource_pb.Resource.deserializeBinaryFromReader);
      msg.setResource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.DeleteResourceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.DeleteResourceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.DeleteResourceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteResourceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResource();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_resource_pb.Resource.serializeBinaryToWriter
    );
  }
};


/**
 * optional Resource resource = 1;
 * @return {?proto.sandboxes.api.v1.Resource}
 */
proto.sandboxes.api.v1.DeleteResourceResponse.prototype.getResource = function() {
  return /** @type{?proto.sandboxes.api.v1.Resource} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_resource_pb.Resource, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Resource|undefined} value
 * @return {!proto.sandboxes.api.v1.DeleteResourceResponse} returns this
*/
proto.sandboxes.api.v1.DeleteResourceResponse.prototype.setResource = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.DeleteResourceResponse} returns this
 */
proto.sandboxes.api.v1.DeleteResourceResponse.prototype.clearResource = function() {
  return this.setResource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.DeleteResourceResponse.prototype.hasResource = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.ReportEventsRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.ReportEventsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ReportEventsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ReportEventsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ReportEventsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.ReportEventsRequest}
 */
proto.sandboxes.api.v1.ReportEventsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ReportEventsRequest;
  return proto.sandboxes.api.v1.ReportEventsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ReportEventsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ReportEventsRequest}
 */
proto.sandboxes.api.v1.ReportEventsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventType(value);
      break;
    case 2:
      var value = new proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent;
      reader.readMessage(value,proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.ReportEventsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ReportEventsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ReportEventsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ReportEventsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent}
 */
proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent;
  return proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent}
 */
proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent} returns this
 */
proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string event_type = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.ReportEventsRequest.prototype.getEventType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.ReportEventsRequest} returns this
 */
proto.sandboxes.api.v1.ReportEventsRequest.prototype.setEventType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated OpaqueEvent events = 2;
 * @return {!Array<!proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent>}
 */
proto.sandboxes.api.v1.ReportEventsRequest.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent, 2));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent>} value
 * @return {!proto.sandboxes.api.v1.ReportEventsRequest} returns this
*/
proto.sandboxes.api.v1.ReportEventsRequest.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent}
 */
proto.sandboxes.api.v1.ReportEventsRequest.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sandboxes.api.v1.ReportEventsRequest.OpaqueEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ReportEventsRequest} returns this
 */
proto.sandboxes.api.v1.ReportEventsRequest.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.ReportEventsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ReportEventsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ReportEventsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ReportEventsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.ReportEventsResponse}
 */
proto.sandboxes.api.v1.ReportEventsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ReportEventsResponse;
  return proto.sandboxes.api.v1.ReportEventsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ReportEventsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ReportEventsResponse}
 */
proto.sandboxes.api.v1.ReportEventsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.ReportEventsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ReportEventsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ReportEventsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ReportEventsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.ClientMetric.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ClientMetric.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ClientMetric} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ClientMetric.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.ClientMetric}
 */
proto.sandboxes.api.v1.ClientMetric.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ClientMetric;
  return proto.sandboxes.api.v1.ClientMetric.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ClientMetric} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ClientMetric}
 */
proto.sandboxes.api.v1.ClientMetric.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 3:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.ClientMetric.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ClientMetric.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ClientMetric} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ClientMetric.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.ClientMetric.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.ClientMetric} returns this
 */
proto.sandboxes.api.v1.ClientMetric.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double value = 2;
 * @return {number}
 */
proto.sandboxes.api.v1.ClientMetric.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.ClientMetric} returns this
 */
proto.sandboxes.api.v1.ClientMetric.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * map<string, string> labels = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.sandboxes.api.v1.ClientMetric.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.ClientMetric} returns this
 */
proto.sandboxes.api.v1.ClientMetric.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.ReportMetricsRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.ReportMetricsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ReportMetricsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ReportMetricsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ReportMetricsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    metricsList: jspb.Message.toObjectList(msg.getMetricsList(),
    proto.sandboxes.api.v1.ClientMetric.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.ReportMetricsRequest}
 */
proto.sandboxes.api.v1.ReportMetricsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ReportMetricsRequest;
  return proto.sandboxes.api.v1.ReportMetricsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ReportMetricsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ReportMetricsRequest}
 */
proto.sandboxes.api.v1.ReportMetricsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.ClientMetric;
      reader.readMessage(value,proto.sandboxes.api.v1.ClientMetric.deserializeBinaryFromReader);
      msg.addMetrics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.ReportMetricsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ReportMetricsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ReportMetricsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ReportMetricsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetricsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sandboxes.api.v1.ClientMetric.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ClientMetric metrics = 1;
 * @return {!Array<!proto.sandboxes.api.v1.ClientMetric>}
 */
proto.sandboxes.api.v1.ReportMetricsRequest.prototype.getMetricsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.ClientMetric>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.ClientMetric, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.ClientMetric>} value
 * @return {!proto.sandboxes.api.v1.ReportMetricsRequest} returns this
*/
proto.sandboxes.api.v1.ReportMetricsRequest.prototype.setMetricsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sandboxes.api.v1.ClientMetric=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.ClientMetric}
 */
proto.sandboxes.api.v1.ReportMetricsRequest.prototype.addMetrics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sandboxes.api.v1.ClientMetric, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ReportMetricsRequest} returns this
 */
proto.sandboxes.api.v1.ReportMetricsRequest.prototype.clearMetricsList = function() {
  return this.setMetricsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.ReportMetricsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ReportMetricsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ReportMetricsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ReportMetricsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.ReportMetricsResponse}
 */
proto.sandboxes.api.v1.ReportMetricsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ReportMetricsResponse;
  return proto.sandboxes.api.v1.ReportMetricsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ReportMetricsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ReportMetricsResponse}
 */
proto.sandboxes.api.v1.ReportMetricsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.ReportMetricsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ReportMetricsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ReportMetricsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ReportMetricsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.sandboxes.api.v1);
