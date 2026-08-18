// source: sandboxes/api/v1/app.proto
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

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var sandboxes_api_v1_common_pb = require('../../../sandboxes/api/v1/common_pb.js');
goog.object.extend(proto, sandboxes_api_v1_common_pb);
var sandboxes_api_v1_object_pb = require('../../../sandboxes/api/v1/object_pb.js');
goog.object.extend(proto, sandboxes_api_v1_object_pb);
var sandboxes_api_v1_endpoint_pb = require('../../../sandboxes/api/v1/endpoint_pb.js');
goog.object.extend(proto, sandboxes_api_v1_endpoint_pb);
var sandboxes_api_v1_repo_pb = require('../../../sandboxes/api/v1/repo_pb.js');
goog.object.extend(proto, sandboxes_api_v1_repo_pb);
var sandboxes_api_v1_process_pb = require('../../../sandboxes/api/v1/process_pb.js');
goog.object.extend(proto, sandboxes_api_v1_process_pb);
goog.exportSymbol('proto.sandboxes.api.v1.App', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Container', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.Env', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.Env.TypeCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.Flavor', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec.EventFormat', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.ActionCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.ActionCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.ActionCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.SourceCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Protocol', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.RuleCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.Validator', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Customization.Validator.RuleCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Dependency', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.ResourceGroup', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.ResourceGroup.ControllerCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Workspace', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction.LifeTime', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AppDefinition.Workspace.System', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Checkout', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Checkout.History', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Checkout.Manifest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Checkout.Manifest.Overlay', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Checkout.Manifest.Overlay.SourceCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Checkout.Prebuild', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Checkout.Repo', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Checkout.Repo.GitHub', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Checkout.Repo.RepoCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ExecHandler', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ExecHandler.TargetCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ExecHandler.UseWorkspace', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.GlobalProcess', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.GlobalProcess.ProcessCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.PortForwardRule', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Probe', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Probe.ActionCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Probe.HttpGet', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ScheduleSpec', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ScheduleSpec.PoolSelector', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ScheduleSpec.PoolSelector.MatcherCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ScheduleSpec.Storage', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.BackendCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Scheduler', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ServiceProbes', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ServiceProbes.ActivityDetection', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.SetupFile', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.SetupFile.DataCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.SetupFile.Secret', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ToolPackageSpec', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UserActivity', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UserActivity.SessionType', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UserContext', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UserContext.GroupSpecCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UserContext.UserSpecCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Volume', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Volume.Content', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Volume.Content.DataCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Volume.FromCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Volume.Secret', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Volume.Workload', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.VolumeMount', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.VolumeMount.VolumeFrom', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.VolumeMount.VolumeFrom.FromCase', null, global);
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
proto.sandboxes.api.v1.App = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.App, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.App.displayName = 'proto.sandboxes.api.v1.App';
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
proto.sandboxes.api.v1.AppDefinition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.AppDefinition.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.displayName = 'proto.sandboxes.api.v1.AppDefinition';
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
proto.sandboxes.api.v1.AppDefinition.Workspace = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.AppDefinition.Workspace.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Workspace, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Workspace.displayName = 'proto.sandboxes.api.v1.AppDefinition.Workspace';
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
proto.sandboxes.api.v1.AppDefinition.Workspace.System = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.AppDefinition.Workspace.System.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Workspace.System, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Workspace.System.displayName = 'proto.sandboxes.api.v1.AppDefinition.Workspace.System';
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
proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction.displayName = 'proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction';
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
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.displayName = 'proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle';
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
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.displayName = 'proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler';
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
proto.sandboxes.api.v1.AppDefinition.Dependency = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.AppDefinition.Dependency.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Dependency, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Dependency.displayName = 'proto.sandboxes.api.v1.AppDefinition.Dependency';
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
proto.sandboxes.api.v1.AppDefinition.Container = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.AppDefinition.Container.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Container, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Container.displayName = 'proto.sandboxes.api.v1.AppDefinition.Container';
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
proto.sandboxes.api.v1.AppDefinition.ResourceGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.AppDefinition.ResourceGroup.repeatedFields_, proto.sandboxes.api.v1.AppDefinition.ResourceGroup.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.ResourceGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.ResourceGroup.displayName = 'proto.sandboxes.api.v1.AppDefinition.ResourceGroup';
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
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers.displayName = 'proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers';
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
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.displayName = 'proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform';
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
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.displayName = 'proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec';
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
proto.sandboxes.api.v1.AppDefinition.Customization = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sandboxes.api.v1.AppDefinition.Customization.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Customization, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Customization.displayName = 'proto.sandboxes.api.v1.AppDefinition.Customization';
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
proto.sandboxes.api.v1.AppDefinition.Customization.Validator = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sandboxes.api.v1.AppDefinition.Customization.Validator.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Customization.Validator, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Customization.Validator.displayName = 'proto.sandboxes.api.v1.AppDefinition.Customization.Validator';
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
proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice.displayName = 'proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice';
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
proto.sandboxes.api.v1.AppDefinition.Customization.Env = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.AppDefinition.Customization.Env.repeatedFields_, proto.sandboxes.api.v1.AppDefinition.Customization.Env.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Customization.Env, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Customization.Env.displayName = 'proto.sandboxes.api.v1.AppDefinition.Customization.Env';
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
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.displayName = 'proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes';
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
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition.displayName = 'proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition';
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
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.displayName = 'proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload';
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
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward.displayName = 'proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward';
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
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress.displayName = 'proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress';
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
proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet.displayName = 'proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet';
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
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Customization.Flavor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.displayName = 'proto.sandboxes.api.v1.AppDefinition.Customization.Flavor';
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
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.displayName = 'proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace';
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
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout.displayName = 'proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout';
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
proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides.displayName = 'proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides';
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
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.displayName = 'proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown';
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
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange.displayName = 'proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange';
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
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.repeatedFields_, proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.displayName = 'proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter';
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
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.repeatedFields_, proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.displayName = 'proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter';
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
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.repeatedFields_, proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.displayName = 'proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter';
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
proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv.displayName = 'proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv';
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
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.displayName = 'proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer';
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
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.displayName = 'proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth';
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
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login.displayName = 'proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login';
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
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret.displayName = 'proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret';
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
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.displayName = 'proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token';
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
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.displayName = 'proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent';
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
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec.displayName = 'proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec';
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
proto.sandboxes.api.v1.ExecHandler = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sandboxes.api.v1.ExecHandler.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.ExecHandler, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ExecHandler.displayName = 'proto.sandboxes.api.v1.ExecHandler';
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
proto.sandboxes.api.v1.ExecHandler.UseWorkspace = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.ExecHandler.UseWorkspace.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.ExecHandler.UseWorkspace, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ExecHandler.UseWorkspace.displayName = 'proto.sandboxes.api.v1.ExecHandler.UseWorkspace';
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
proto.sandboxes.api.v1.Volume = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sandboxes.api.v1.Volume.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.Volume, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Volume.displayName = 'proto.sandboxes.api.v1.Volume';
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
proto.sandboxes.api.v1.Volume.Content = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sandboxes.api.v1.Volume.Content.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.Volume.Content, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Volume.Content.displayName = 'proto.sandboxes.api.v1.Volume.Content';
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
proto.sandboxes.api.v1.Volume.Secret = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Volume.Secret, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Volume.Secret.displayName = 'proto.sandboxes.api.v1.Volume.Secret';
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
proto.sandboxes.api.v1.Volume.Workload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Volume.Workload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Volume.Workload.displayName = 'proto.sandboxes.api.v1.Volume.Workload';
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
proto.sandboxes.api.v1.UserContext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sandboxes.api.v1.UserContext.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.UserContext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UserContext.displayName = 'proto.sandboxes.api.v1.UserContext';
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
proto.sandboxes.api.v1.VolumeMount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.VolumeMount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.VolumeMount.displayName = 'proto.sandboxes.api.v1.VolumeMount';
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
proto.sandboxes.api.v1.VolumeMount.VolumeFrom = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sandboxes.api.v1.VolumeMount.VolumeFrom.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.VolumeMount.VolumeFrom, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.VolumeMount.VolumeFrom.displayName = 'proto.sandboxes.api.v1.VolumeMount.VolumeFrom';
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
proto.sandboxes.api.v1.Probe = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sandboxes.api.v1.Probe.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.Probe, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Probe.displayName = 'proto.sandboxes.api.v1.Probe';
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
proto.sandboxes.api.v1.Probe.HttpGet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Probe.HttpGet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Probe.HttpGet.displayName = 'proto.sandboxes.api.v1.Probe.HttpGet';
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
proto.sandboxes.api.v1.ServiceProbes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.ServiceProbes.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.ServiceProbes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ServiceProbes.displayName = 'proto.sandboxes.api.v1.ServiceProbes';
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
proto.sandboxes.api.v1.ServiceProbes.ActivityDetection = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.ServiceProbes.ActivityDetection.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.ServiceProbes.ActivityDetection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ServiceProbes.ActivityDetection.displayName = 'proto.sandboxes.api.v1.ServiceProbes.ActivityDetection';
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
proto.sandboxes.api.v1.UserActivity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UserActivity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UserActivity.displayName = 'proto.sandboxes.api.v1.UserActivity';
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
proto.sandboxes.api.v1.Checkout = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Checkout, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Checkout.displayName = 'proto.sandboxes.api.v1.Checkout';
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
proto.sandboxes.api.v1.Checkout.Repo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sandboxes.api.v1.Checkout.Repo.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.Checkout.Repo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Checkout.Repo.displayName = 'proto.sandboxes.api.v1.Checkout.Repo';
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
proto.sandboxes.api.v1.Checkout.Repo.GitHub = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Checkout.Repo.GitHub, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Checkout.Repo.GitHub.displayName = 'proto.sandboxes.api.v1.Checkout.Repo.GitHub';
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
proto.sandboxes.api.v1.Checkout.Manifest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.Checkout.Manifest.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.Checkout.Manifest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Checkout.Manifest.displayName = 'proto.sandboxes.api.v1.Checkout.Manifest';
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
proto.sandboxes.api.v1.Checkout.Manifest.Overlay = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sandboxes.api.v1.Checkout.Manifest.Overlay.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.Checkout.Manifest.Overlay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Checkout.Manifest.Overlay.displayName = 'proto.sandboxes.api.v1.Checkout.Manifest.Overlay';
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
proto.sandboxes.api.v1.Checkout.History = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Checkout.History, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Checkout.History.displayName = 'proto.sandboxes.api.v1.Checkout.History';
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
proto.sandboxes.api.v1.Checkout.Prebuild = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.Checkout.Prebuild.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.Checkout.Prebuild, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Checkout.Prebuild.displayName = 'proto.sandboxes.api.v1.Checkout.Prebuild';
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
proto.sandboxes.api.v1.GlobalProcess = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sandboxes.api.v1.GlobalProcess.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.GlobalProcess, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.GlobalProcess.displayName = 'proto.sandboxes.api.v1.GlobalProcess';
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
proto.sandboxes.api.v1.SetupFile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sandboxes.api.v1.SetupFile.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.SetupFile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.SetupFile.displayName = 'proto.sandboxes.api.v1.SetupFile';
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
proto.sandboxes.api.v1.SetupFile.Secret = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.SetupFile.Secret, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.SetupFile.Secret.displayName = 'proto.sandboxes.api.v1.SetupFile.Secret';
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
proto.sandboxes.api.v1.ToolPackageSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.ToolPackageSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ToolPackageSpec.displayName = 'proto.sandboxes.api.v1.ToolPackageSpec';
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
proto.sandboxes.api.v1.PortForwardRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.PortForwardRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.PortForwardRule.displayName = 'proto.sandboxes.api.v1.PortForwardRule';
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
proto.sandboxes.api.v1.Scheduler = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Scheduler, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Scheduler.displayName = 'proto.sandboxes.api.v1.Scheduler';
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
proto.sandboxes.api.v1.ScheduleSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.ScheduleSpec.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.ScheduleSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ScheduleSpec.displayName = 'proto.sandboxes.api.v1.ScheduleSpec';
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
proto.sandboxes.api.v1.ScheduleSpec.PoolSelector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sandboxes.api.v1.ScheduleSpec.PoolSelector.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.ScheduleSpec.PoolSelector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ScheduleSpec.PoolSelector.displayName = 'proto.sandboxes.api.v1.ScheduleSpec.PoolSelector';
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
proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest.displayName = 'proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest';
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
proto.sandboxes.api.v1.ScheduleSpec.Storage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.ScheduleSpec.Storage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ScheduleSpec.Storage.displayName = 'proto.sandboxes.api.v1.ScheduleSpec.Storage';
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
proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk.displayName = 'proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk';
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
proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.displayName = 'proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine';
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
proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File.displayName = 'proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File';
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
proto.sandboxes.api.v1.App.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.App.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.App} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.App.toObject = function(includeInstance, msg) {
  var f, obj = {
    meta: (f = msg.getMeta()) && sandboxes_api_v1_object_pb.ObjectMeta.toObject(includeInstance, f),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    definition: (f = msg.getDefinition()) && proto.sandboxes.api.v1.AppDefinition.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.App}
 */
proto.sandboxes.api.v1.App.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.App;
  return proto.sandboxes.api.v1.App.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.App} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.App}
 */
proto.sandboxes.api.v1.App.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 4:
      var value = new proto.sandboxes.api.v1.AppDefinition;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.deserializeBinaryFromReader);
      msg.setDefinition(value);
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
proto.sandboxes.api.v1.App.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.App.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.App} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.App.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_object_pb.ObjectMeta.serializeBinaryToWriter
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDefinition();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sandboxes.api.v1.AppDefinition.serializeBinaryToWriter
    );
  }
};


/**
 * optional ObjectMeta meta = 1;
 * @return {?proto.sandboxes.api.v1.ObjectMeta}
 */
proto.sandboxes.api.v1.App.prototype.getMeta = function() {
  return /** @type{?proto.sandboxes.api.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_object_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.ObjectMeta|undefined} value
 * @return {!proto.sandboxes.api.v1.App} returns this
*/
proto.sandboxes.api.v1.App.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.App} returns this
 */
proto.sandboxes.api.v1.App.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.App.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.App.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.App} returns this
 */
proto.sandboxes.api.v1.App.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional AppDefinition definition = 4;
 * @return {?proto.sandboxes.api.v1.AppDefinition}
 */
proto.sandboxes.api.v1.App.prototype.getDefinition = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AppDefinition, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition|undefined} value
 * @return {!proto.sandboxes.api.v1.App} returns this
*/
proto.sandboxes.api.v1.App.prototype.setDefinition = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.App} returns this
 */
proto.sandboxes.api.v1.App.prototype.clearDefinition = function() {
  return this.setDefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.App.prototype.hasDefinition = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.AppDefinition.repeatedFields_ = [8,9,10,11,12,13,16,17];



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
proto.sandboxes.api.v1.AppDefinition.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.toObject = function(includeInstance, msg) {
  var f, obj = {
    envList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    volumesList: jspb.Message.toObjectList(msg.getVolumesList(),
    proto.sandboxes.api.v1.Volume.toObject, includeInstance),
    endpointsList: jspb.Message.toObjectList(msg.getEndpointsList(),
    sandboxes_api_v1_endpoint_pb.Endpoint.toObject, includeInstance),
    workspacesList: jspb.Message.toObjectList(msg.getWorkspacesList(),
    proto.sandboxes.api.v1.AppDefinition.Workspace.toObject, includeInstance),
    dependenciesList: jspb.Message.toObjectList(msg.getDependenciesList(),
    proto.sandboxes.api.v1.AppDefinition.Dependency.toObject, includeInstance),
    containersList: jspb.Message.toObjectList(msg.getContainersList(),
    proto.sandboxes.api.v1.AppDefinition.Container.toObject, includeInstance),
    overview: jspb.Message.getFieldWithDefault(msg, 14, ""),
    scheduler: (f = msg.getScheduler()) && proto.sandboxes.api.v1.Scheduler.toObject(includeInstance, f),
    resourcesList: jspb.Message.toObjectList(msg.getResourcesList(),
    proto.sandboxes.api.v1.AppDefinition.ResourceGroup.toObject, includeInstance),
    customizationsList: jspb.Message.toObjectList(msg.getCustomizationsList(),
    proto.sandboxes.api.v1.AppDefinition.Customization.toObject, includeInstance)
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
 * @return {!proto.sandboxes.api.v1.AppDefinition}
 */
proto.sandboxes.api.v1.AppDefinition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition;
  return proto.sandboxes.api.v1.AppDefinition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition}
 */
proto.sandboxes.api.v1.AppDefinition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addEnv(value);
      break;
    case 9:
      var value = new proto.sandboxes.api.v1.Volume;
      reader.readMessage(value,proto.sandboxes.api.v1.Volume.deserializeBinaryFromReader);
      msg.addVolumes(value);
      break;
    case 10:
      var value = new sandboxes_api_v1_endpoint_pb.Endpoint;
      reader.readMessage(value,sandboxes_api_v1_endpoint_pb.Endpoint.deserializeBinaryFromReader);
      msg.addEndpoints(value);
      break;
    case 11:
      var value = new proto.sandboxes.api.v1.AppDefinition.Workspace;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Workspace.deserializeBinaryFromReader);
      msg.addWorkspaces(value);
      break;
    case 12:
      var value = new proto.sandboxes.api.v1.AppDefinition.Dependency;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Dependency.deserializeBinaryFromReader);
      msg.addDependencies(value);
      break;
    case 13:
      var value = new proto.sandboxes.api.v1.AppDefinition.Container;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Container.deserializeBinaryFromReader);
      msg.addContainers(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setOverview(value);
      break;
    case 15:
      var value = new proto.sandboxes.api.v1.Scheduler;
      reader.readMessage(value,proto.sandboxes.api.v1.Scheduler.deserializeBinaryFromReader);
      msg.setScheduler(value);
      break;
    case 16:
      var value = new proto.sandboxes.api.v1.AppDefinition.ResourceGroup;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.ResourceGroup.deserializeBinaryFromReader);
      msg.addResources(value);
      break;
    case 17:
      var value = new proto.sandboxes.api.v1.AppDefinition.Customization;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Customization.deserializeBinaryFromReader);
      msg.addCustomizations(value);
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
proto.sandboxes.api.v1.AppDefinition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnvList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getVolumesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.sandboxes.api.v1.Volume.serializeBinaryToWriter
    );
  }
  f = message.getEndpointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      sandboxes_api_v1_endpoint_pb.Endpoint.serializeBinaryToWriter
    );
  }
  f = message.getWorkspacesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.sandboxes.api.v1.AppDefinition.Workspace.serializeBinaryToWriter
    );
  }
  f = message.getDependenciesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.sandboxes.api.v1.AppDefinition.Dependency.serializeBinaryToWriter
    );
  }
  f = message.getContainersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.sandboxes.api.v1.AppDefinition.Container.serializeBinaryToWriter
    );
  }
  f = message.getOverview();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getScheduler();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.sandboxes.api.v1.Scheduler.serializeBinaryToWriter
    );
  }
  f = message.getResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      16,
      f,
      proto.sandboxes.api.v1.AppDefinition.ResourceGroup.serializeBinaryToWriter
    );
  }
  f = message.getCustomizationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      17,
      f,
      proto.sandboxes.api.v1.AppDefinition.Customization.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.repeatedFields_ = [3,4,5,6,10,12,13];



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
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Workspace.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Workspace} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    portsList: jspb.Message.toObjectList(msg.getPortsList(),
    sandboxes_api_v1_endpoint_pb.PortSpec.toObject, includeInstance),
    checkoutsList: jspb.Message.toObjectList(msg.getCheckoutsList(),
    proto.sandboxes.api.v1.Checkout.toObject, includeInstance),
    packagesList: jspb.Message.toObjectList(msg.getPackagesList(),
    proto.sandboxes.api.v1.ToolPackageSpec.toObject, includeInstance),
    portForwardRulesList: jspb.Message.toObjectList(msg.getPortForwardRulesList(),
    proto.sandboxes.api.v1.PortForwardRule.toObject, includeInstance),
    baseSnapshot: jspb.Message.getFieldWithDefault(msg, 7, ""),
    homeSnapshot: jspb.Message.getFieldWithDefault(msg, 8, ""),
    probes: (f = msg.getProbes()) && proto.sandboxes.api.v1.ServiceProbes.toObject(includeInstance, f),
    envList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
    scheduleSpec: (f = msg.getScheduleSpec()) && proto.sandboxes.api.v1.ScheduleSpec.toObject(includeInstance, f),
    hostnamesList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f,
    waitForList: (f = jspb.Message.getRepeatedField(msg, 13)) == null ? undefined : f,
    system: (f = msg.getSystem()) && proto.sandboxes.api.v1.AppDefinition.Workspace.System.toObject(includeInstance, f),
    disableServiceLinkingEnvs: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    restriction: (f = msg.getRestriction()) && proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction.toObject(includeInstance, f),
    lifecycle: (f = msg.getLifecycle()) && proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.toObject(includeInstance, f),
    baseImageByRegionMap: (f = msg.getBaseImageByRegionMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Workspace;
  return proto.sandboxes.api.v1.AppDefinition.Workspace.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Workspace} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDescription(value);
      break;
    case 3:
      var value = new sandboxes_api_v1_endpoint_pb.PortSpec;
      reader.readMessage(value,sandboxes_api_v1_endpoint_pb.PortSpec.deserializeBinaryFromReader);
      msg.addPorts(value);
      break;
    case 4:
      var value = new proto.sandboxes.api.v1.Checkout;
      reader.readMessage(value,proto.sandboxes.api.v1.Checkout.deserializeBinaryFromReader);
      msg.addCheckouts(value);
      break;
    case 5:
      var value = new proto.sandboxes.api.v1.ToolPackageSpec;
      reader.readMessage(value,proto.sandboxes.api.v1.ToolPackageSpec.deserializeBinaryFromReader);
      msg.addPackages(value);
      break;
    case 6:
      var value = new proto.sandboxes.api.v1.PortForwardRule;
      reader.readMessage(value,proto.sandboxes.api.v1.PortForwardRule.deserializeBinaryFromReader);
      msg.addPortForwardRules(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBaseSnapshot(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setHomeSnapshot(value);
      break;
    case 9:
      var value = new proto.sandboxes.api.v1.ServiceProbes;
      reader.readMessage(value,proto.sandboxes.api.v1.ServiceProbes.deserializeBinaryFromReader);
      msg.setProbes(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addEnv(value);
      break;
    case 11:
      var value = new proto.sandboxes.api.v1.ScheduleSpec;
      reader.readMessage(value,proto.sandboxes.api.v1.ScheduleSpec.deserializeBinaryFromReader);
      msg.setScheduleSpec(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.addHostnames(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.addWaitFor(value);
      break;
    case 14:
      var value = new proto.sandboxes.api.v1.AppDefinition.Workspace.System;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Workspace.System.deserializeBinaryFromReader);
      msg.setSystem(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableServiceLinkingEnvs(value);
      break;
    case 16:
      var value = new proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction.deserializeBinaryFromReader);
      msg.setRestriction(value);
      break;
    case 17:
      var value = new proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.deserializeBinaryFromReader);
      msg.setLifecycle(value);
      break;
    case 18:
      var value = msg.getBaseImageByRegionMap();
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
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Workspace.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Workspace} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPortsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      sandboxes_api_v1_endpoint_pb.PortSpec.serializeBinaryToWriter
    );
  }
  f = message.getCheckoutsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.sandboxes.api.v1.Checkout.serializeBinaryToWriter
    );
  }
  f = message.getPackagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.sandboxes.api.v1.ToolPackageSpec.serializeBinaryToWriter
    );
  }
  f = message.getPortForwardRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.sandboxes.api.v1.PortForwardRule.serializeBinaryToWriter
    );
  }
  f = message.getBaseSnapshot();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getHomeSnapshot();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getProbes();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.sandboxes.api.v1.ServiceProbes.serializeBinaryToWriter
    );
  }
  f = message.getEnvList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
  f = message.getScheduleSpec();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.sandboxes.api.v1.ScheduleSpec.serializeBinaryToWriter
    );
  }
  f = message.getHostnamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      12,
      f
    );
  }
  f = message.getWaitForList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      13,
      f
    );
  }
  f = message.getSystem();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.sandboxes.api.v1.AppDefinition.Workspace.System.serializeBinaryToWriter
    );
  }
  f = message.getDisableServiceLinkingEnvs();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getRestriction();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction.serializeBinaryToWriter
    );
  }
  f = message.getLifecycle();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.serializeBinaryToWriter
    );
  }
  f = message.getBaseImageByRegionMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(18, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.System.repeatedFields_ = [1,2];



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
proto.sandboxes.api.v1.AppDefinition.Workspace.System.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Workspace.System.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Workspace.System} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.System.toObject = function(includeInstance, msg) {
  var f, obj = {
    daemonsList: jspb.Message.toObjectList(msg.getDaemonsList(),
    proto.sandboxes.api.v1.GlobalProcess.toObject, includeInstance),
    filesList: jspb.Message.toObjectList(msg.getFilesList(),
    proto.sandboxes.api.v1.SetupFile.toObject, includeInstance)
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace.System}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.System.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Workspace.System;
  return proto.sandboxes.api.v1.AppDefinition.Workspace.System.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Workspace.System} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace.System}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.System.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.GlobalProcess;
      reader.readMessage(value,proto.sandboxes.api.v1.GlobalProcess.deserializeBinaryFromReader);
      msg.addDaemons(value);
      break;
    case 2:
      var value = new proto.sandboxes.api.v1.SetupFile;
      reader.readMessage(value,proto.sandboxes.api.v1.SetupFile.deserializeBinaryFromReader);
      msg.addFiles(value);
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
proto.sandboxes.api.v1.AppDefinition.Workspace.System.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Workspace.System.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Workspace.System} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.System.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDaemonsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sandboxes.api.v1.GlobalProcess.serializeBinaryToWriter
    );
  }
  f = message.getFilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.sandboxes.api.v1.SetupFile.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GlobalProcess daemons = 1;
 * @return {!Array<!proto.sandboxes.api.v1.GlobalProcess>}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.System.prototype.getDaemonsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.GlobalProcess>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.GlobalProcess, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.GlobalProcess>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace.System} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Workspace.System.prototype.setDaemonsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sandboxes.api.v1.GlobalProcess=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.GlobalProcess}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.System.prototype.addDaemons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sandboxes.api.v1.GlobalProcess, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace.System} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.System.prototype.clearDaemonsList = function() {
  return this.setDaemonsList([]);
};


/**
 * repeated SetupFile files = 2;
 * @return {!Array<!proto.sandboxes.api.v1.SetupFile>}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.System.prototype.getFilesList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.SetupFile>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.SetupFile, 2));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.SetupFile>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace.System} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Workspace.System.prototype.setFilesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sandboxes.api.v1.SetupFile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.SetupFile}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.System.prototype.addFiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sandboxes.api.v1.SetupFile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace.System} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.System.prototype.clearFilesList = function() {
  return this.setFilesList([]);
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
proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction.toObject = function(includeInstance, msg) {
  var f, obj = {
    lifeTime: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction;
  return proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction.LifeTime} */ (reader.readEnum());
      msg.setLifeTime(value);
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
proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLifeTime();
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
proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction.LifeTime = {
  NONE: 0,
  STARTUP: 1,
  ALWAYS: 2
};

/**
 * optional LifeTime life_time = 1;
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction.LifeTime}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction.prototype.getLifeTime = function() {
  return /** @type {!proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction.LifeTime} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction.LifeTime} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction.prototype.setLifeTime = function(value) {
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
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.toObject = function(includeInstance, msg) {
  var f, obj = {
    onCreate: (f = msg.getOnCreate()) && proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.toObject(includeInstance, f),
    onSuspend: (f = msg.getOnSuspend()) && proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.toObject(includeInstance, f),
    onResume: (f = msg.getOnResume()) && proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.toObject(includeInstance, f),
    onDelete: (f = msg.getOnDelete()) && proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle;
  return proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.deserializeBinaryFromReader);
      msg.setOnCreate(value);
      break;
    case 2:
      var value = new proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.deserializeBinaryFromReader);
      msg.setOnSuspend(value);
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.deserializeBinaryFromReader);
      msg.setOnResume(value);
      break;
    case 4:
      var value = new proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.deserializeBinaryFromReader);
      msg.setOnDelete(value);
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
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOnCreate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.serializeBinaryToWriter
    );
  }
  f = message.getOnSuspend();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.serializeBinaryToWriter
    );
  }
  f = message.getOnResume();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.serializeBinaryToWriter
    );
  }
  f = message.getOnDelete();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.serializeBinaryToWriter
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
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.toObject = function(includeInstance, msg) {
  var f, obj = {
    run: (f = msg.getRun()) && sandboxes_api_v1_repo_pb.Repo.Run.toObject(includeInstance, f),
    maxRetries: jspb.Message.getFieldWithDefault(msg, 2, 0),
    requireBuild: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    timeout: (f = msg.getTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler;
  return proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_repo_pb.Repo.Run;
      reader.readMessage(value,sandboxes_api_v1_repo_pb.Repo.Run.deserializeBinaryFromReader);
      msg.setRun(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxRetries(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRequireBuild(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeout(value);
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
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRun();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_repo_pb.Repo.Run.serializeBinaryToWriter
    );
  }
  f = message.getMaxRetries();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getRequireBuild();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getTimeout();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional Repo.Run run = 1;
 * @return {?proto.sandboxes.api.v1.Repo.Run}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.prototype.getRun = function() {
  return /** @type{?proto.sandboxes.api.v1.Repo.Run} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_repo_pb.Repo.Run, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Repo.Run|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.prototype.setRun = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.prototype.clearRun = function() {
  return this.setRun(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.prototype.hasRun = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 max_retries = 2;
 * @return {number}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.prototype.getMaxRetries = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.prototype.setMaxRetries = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool require_build = 3;
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.prototype.getRequireBuild = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.prototype.setRequireBuild = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional google.protobuf.Duration timeout = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.prototype.getTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.prototype.setTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.prototype.clearTimeout = function() {
  return this.setTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler.prototype.hasTimeout = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Handler on_create = 1;
 * @return {?proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.prototype.getOnCreate = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.prototype.setOnCreate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.prototype.clearOnCreate = function() {
  return this.setOnCreate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.prototype.hasOnCreate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Handler on_suspend = 2;
 * @return {?proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.prototype.getOnSuspend = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.prototype.setOnSuspend = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.prototype.clearOnSuspend = function() {
  return this.setOnSuspend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.prototype.hasOnSuspend = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Handler on_resume = 3;
 * @return {?proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.prototype.getOnResume = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.prototype.setOnResume = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.prototype.clearOnResume = function() {
  return this.setOnResume(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.prototype.hasOnResume = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Handler on_delete = 4;
 * @return {?proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.prototype.getOnDelete = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.Handler|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.prototype.setOnDelete = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.prototype.clearOnDelete = function() {
  return this.setOnDelete(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle.prototype.hasOnDelete = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated PortSpec ports = 3;
 * @return {!Array<!proto.sandboxes.api.v1.PortSpec>}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.getPortsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.PortSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_endpoint_pb.PortSpec, 3));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.PortSpec>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.setPortsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.sandboxes.api.v1.PortSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.PortSpec}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.addPorts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.sandboxes.api.v1.PortSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.clearPortsList = function() {
  return this.setPortsList([]);
};


/**
 * repeated Checkout checkouts = 4;
 * @return {!Array<!proto.sandboxes.api.v1.Checkout>}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.getCheckoutsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.Checkout>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.Checkout, 4));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.Checkout>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.setCheckoutsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.sandboxes.api.v1.Checkout=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Checkout}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.addCheckouts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.sandboxes.api.v1.Checkout, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.clearCheckoutsList = function() {
  return this.setCheckoutsList([]);
};


/**
 * repeated ToolPackageSpec packages = 5;
 * @return {!Array<!proto.sandboxes.api.v1.ToolPackageSpec>}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.getPackagesList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.ToolPackageSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.ToolPackageSpec, 5));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.ToolPackageSpec>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.setPackagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.sandboxes.api.v1.ToolPackageSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.ToolPackageSpec}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.addPackages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.sandboxes.api.v1.ToolPackageSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.clearPackagesList = function() {
  return this.setPackagesList([]);
};


/**
 * repeated PortForwardRule port_forward_rules = 6;
 * @return {!Array<!proto.sandboxes.api.v1.PortForwardRule>}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.getPortForwardRulesList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.PortForwardRule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.PortForwardRule, 6));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.PortForwardRule>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.setPortForwardRulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.sandboxes.api.v1.PortForwardRule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.PortForwardRule}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.addPortForwardRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.sandboxes.api.v1.PortForwardRule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.clearPortForwardRulesList = function() {
  return this.setPortForwardRulesList([]);
};


/**
 * optional string base_snapshot = 7;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.getBaseSnapshot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.setBaseSnapshot = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string home_snapshot = 8;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.getHomeSnapshot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.setHomeSnapshot = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional ServiceProbes probes = 9;
 * @return {?proto.sandboxes.api.v1.ServiceProbes}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.getProbes = function() {
  return /** @type{?proto.sandboxes.api.v1.ServiceProbes} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.ServiceProbes, 9));
};


/**
 * @param {?proto.sandboxes.api.v1.ServiceProbes|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.setProbes = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.clearProbes = function() {
  return this.setProbes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.hasProbes = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated string env = 10;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.getEnvList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.setEnvList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.addEnv = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.clearEnvList = function() {
  return this.setEnvList([]);
};


/**
 * optional ScheduleSpec schedule_spec = 11;
 * @return {?proto.sandboxes.api.v1.ScheduleSpec}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.getScheduleSpec = function() {
  return /** @type{?proto.sandboxes.api.v1.ScheduleSpec} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.ScheduleSpec, 11));
};


/**
 * @param {?proto.sandboxes.api.v1.ScheduleSpec|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.setScheduleSpec = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.clearScheduleSpec = function() {
  return this.setScheduleSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.hasScheduleSpec = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated string hostnames = 12;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.getHostnamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.setHostnamesList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.addHostnames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.clearHostnamesList = function() {
  return this.setHostnamesList([]);
};


/**
 * repeated string wait_for = 13;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.getWaitForList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 13));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.setWaitForList = function(value) {
  return jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.addWaitFor = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.clearWaitForList = function() {
  return this.setWaitForList([]);
};


/**
 * optional System system = 14;
 * @return {?proto.sandboxes.api.v1.AppDefinition.Workspace.System}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.getSystem = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.Workspace.System} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Workspace.System, 14));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.Workspace.System|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.setSystem = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.clearSystem = function() {
  return this.setSystem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.hasSystem = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bool disable_service_linking_envs = 15;
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.getDisableServiceLinkingEnvs = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.setDisableServiceLinkingEnvs = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional Restriction restriction = 16;
 * @return {?proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.getRestriction = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction, 16));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.Workspace.Restriction|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.setRestriction = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.clearRestriction = function() {
  return this.setRestriction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.hasRestriction = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional Lifecycle lifecycle = 17;
 * @return {?proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.getLifecycle = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle, 17));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.Workspace.Lifecycle|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.setLifecycle = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.clearLifecycle = function() {
  return this.setLifecycle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.hasLifecycle = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * map<string, string> base_image_by_region = 18;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.getBaseImageByRegionMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 18, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Workspace.prototype.clearBaseImageByRegionMap = function() {
  this.getBaseImageByRegionMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.AppDefinition.Dependency.repeatedFields_ = [8];



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
proto.sandboxes.api.v1.AppDefinition.Dependency.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Dependency.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Dependency} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Dependency.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    serviceType: jspb.Message.getFieldWithDefault(msg, 3, ""),
    version: jspb.Message.getFieldWithDefault(msg, 4, ""),
    propertiesMap: (f = msg.getPropertiesMap()) ? f.toObject(includeInstance, undefined) : [],
    snapshot: jspb.Message.getFieldWithDefault(msg, 6, ""),
    scheduleSpec: (f = msg.getScheduleSpec()) && proto.sandboxes.api.v1.ScheduleSpec.toObject(includeInstance, f),
    hostnamesList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Dependency}
 */
proto.sandboxes.api.v1.AppDefinition.Dependency.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Dependency;
  return proto.sandboxes.api.v1.AppDefinition.Dependency.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Dependency} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Dependency}
 */
proto.sandboxes.api.v1.AppDefinition.Dependency.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 5:
      var value = msg.getPropertiesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSnapshot(value);
      break;
    case 7:
      var value = new proto.sandboxes.api.v1.ScheduleSpec;
      reader.readMessage(value,proto.sandboxes.api.v1.ScheduleSpec.deserializeBinaryFromReader);
      msg.setScheduleSpec(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addHostnames(value);
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
proto.sandboxes.api.v1.AppDefinition.Dependency.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Dependency.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Dependency} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Dependency.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getServiceType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPropertiesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getSnapshot();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getScheduleSpec();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.sandboxes.api.v1.ScheduleSpec.serializeBinaryToWriter
    );
  }
  f = message.getHostnamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Dependency.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Dependency} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Dependency.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Dependency.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Dependency} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Dependency.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string service_type = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Dependency.prototype.getServiceType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Dependency} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Dependency.prototype.setServiceType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string version = 4;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Dependency.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Dependency} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Dependency.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * map<string, string> properties = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.sandboxes.api.v1.AppDefinition.Dependency.prototype.getPropertiesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Dependency} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Dependency.prototype.clearPropertiesMap = function() {
  this.getPropertiesMap().clear();
  return this;};


/**
 * optional string snapshot = 6;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Dependency.prototype.getSnapshot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Dependency} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Dependency.prototype.setSnapshot = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional ScheduleSpec schedule_spec = 7;
 * @return {?proto.sandboxes.api.v1.ScheduleSpec}
 */
proto.sandboxes.api.v1.AppDefinition.Dependency.prototype.getScheduleSpec = function() {
  return /** @type{?proto.sandboxes.api.v1.ScheduleSpec} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.ScheduleSpec, 7));
};


/**
 * @param {?proto.sandboxes.api.v1.ScheduleSpec|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Dependency} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Dependency.prototype.setScheduleSpec = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Dependency} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Dependency.prototype.clearScheduleSpec = function() {
  return this.setScheduleSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Dependency.prototype.hasScheduleSpec = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated string hostnames = 8;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.AppDefinition.Dependency.prototype.getHostnamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Dependency} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Dependency.prototype.setHostnamesList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Dependency} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Dependency.prototype.addHostnames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Dependency} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Dependency.prototype.clearHostnamesList = function() {
  return this.setHostnamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.AppDefinition.Container.repeatedFields_ = [4,5,6,8,10,14,15];



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
proto.sandboxes.api.v1.AppDefinition.Container.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Container.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Container} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Container.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    image: jspb.Message.getFieldWithDefault(msg, 3, ""),
    entrypointList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    argsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    envList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    cwd: jspb.Message.getFieldWithDefault(msg, 7, ""),
    portsList: jspb.Message.toObjectList(msg.getPortsList(),
    sandboxes_api_v1_endpoint_pb.PortSpec.toObject, includeInstance),
    probes: (f = msg.getProbes()) && proto.sandboxes.api.v1.ServiceProbes.toObject(includeInstance, f),
    volumeMountsList: jspb.Message.toObjectList(msg.getVolumeMountsList(),
    proto.sandboxes.api.v1.VolumeMount.toObject, includeInstance),
    runAs: (f = msg.getRunAs()) && proto.sandboxes.api.v1.UserContext.toObject(includeInstance, f),
    scheduleSpec: (f = msg.getScheduleSpec()) && proto.sandboxes.api.v1.ScheduleSpec.toObject(includeInstance, f),
    snapshot: jspb.Message.getFieldWithDefault(msg, 13, ""),
    hostnamesList: (f = jspb.Message.getRepeatedField(msg, 14)) == null ? undefined : f,
    waitForList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
    disableServiceLinkingEnvs: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
    pb_volatile: jspb.Message.getBooleanFieldWithDefault(msg, 17, false)
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container}
 */
proto.sandboxes.api.v1.AppDefinition.Container.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Container;
  return proto.sandboxes.api.v1.AppDefinition.Container.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Container} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container}
 */
proto.sandboxes.api.v1.AppDefinition.Container.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addEntrypoint(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addArgs(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addEnv(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCwd(value);
      break;
    case 8:
      var value = new sandboxes_api_v1_endpoint_pb.PortSpec;
      reader.readMessage(value,sandboxes_api_v1_endpoint_pb.PortSpec.deserializeBinaryFromReader);
      msg.addPorts(value);
      break;
    case 9:
      var value = new proto.sandboxes.api.v1.ServiceProbes;
      reader.readMessage(value,proto.sandboxes.api.v1.ServiceProbes.deserializeBinaryFromReader);
      msg.setProbes(value);
      break;
    case 10:
      var value = new proto.sandboxes.api.v1.VolumeMount;
      reader.readMessage(value,proto.sandboxes.api.v1.VolumeMount.deserializeBinaryFromReader);
      msg.addVolumeMounts(value);
      break;
    case 11:
      var value = new proto.sandboxes.api.v1.UserContext;
      reader.readMessage(value,proto.sandboxes.api.v1.UserContext.deserializeBinaryFromReader);
      msg.setRunAs(value);
      break;
    case 12:
      var value = new proto.sandboxes.api.v1.ScheduleSpec;
      reader.readMessage(value,proto.sandboxes.api.v1.ScheduleSpec.deserializeBinaryFromReader);
      msg.setScheduleSpec(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setSnapshot(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.addHostnames(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.addWaitFor(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableServiceLinkingEnvs(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVolatile(value);
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
proto.sandboxes.api.v1.AppDefinition.Container.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Container.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Container} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Container.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEntrypointList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getArgsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getEnvList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getCwd();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPortsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      sandboxes_api_v1_endpoint_pb.PortSpec.serializeBinaryToWriter
    );
  }
  f = message.getProbes();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.sandboxes.api.v1.ServiceProbes.serializeBinaryToWriter
    );
  }
  f = message.getVolumeMountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.sandboxes.api.v1.VolumeMount.serializeBinaryToWriter
    );
  }
  f = message.getRunAs();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.sandboxes.api.v1.UserContext.serializeBinaryToWriter
    );
  }
  f = message.getScheduleSpec();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.sandboxes.api.v1.ScheduleSpec.serializeBinaryToWriter
    );
  }
  f = message.getSnapshot();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getHostnamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      14,
      f
    );
  }
  f = message.getWaitForList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      15,
      f
    );
  }
  f = message.getDisableServiceLinkingEnvs();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getVolatile();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string image = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.setImage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string entrypoint = 4;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.getEntrypointList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.setEntrypointList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.addEntrypoint = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.clearEntrypointList = function() {
  return this.setEntrypointList([]);
};


/**
 * repeated string args = 5;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.getArgsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.setArgsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.addArgs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.clearArgsList = function() {
  return this.setArgsList([]);
};


/**
 * repeated string env = 6;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.getEnvList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.setEnvList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.addEnv = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.clearEnvList = function() {
  return this.setEnvList([]);
};


/**
 * optional string cwd = 7;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.getCwd = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.setCwd = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated PortSpec ports = 8;
 * @return {!Array<!proto.sandboxes.api.v1.PortSpec>}
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.getPortsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.PortSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_endpoint_pb.PortSpec, 8));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.PortSpec>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Container.prototype.setPortsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.sandboxes.api.v1.PortSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.PortSpec}
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.addPorts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.sandboxes.api.v1.PortSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.clearPortsList = function() {
  return this.setPortsList([]);
};


/**
 * optional ServiceProbes probes = 9;
 * @return {?proto.sandboxes.api.v1.ServiceProbes}
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.getProbes = function() {
  return /** @type{?proto.sandboxes.api.v1.ServiceProbes} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.ServiceProbes, 9));
};


/**
 * @param {?proto.sandboxes.api.v1.ServiceProbes|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Container.prototype.setProbes = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.clearProbes = function() {
  return this.setProbes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.hasProbes = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated VolumeMount volume_mounts = 10;
 * @return {!Array<!proto.sandboxes.api.v1.VolumeMount>}
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.getVolumeMountsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.VolumeMount>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.VolumeMount, 10));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.VolumeMount>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Container.prototype.setVolumeMountsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.sandboxes.api.v1.VolumeMount=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.VolumeMount}
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.addVolumeMounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.sandboxes.api.v1.VolumeMount, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.clearVolumeMountsList = function() {
  return this.setVolumeMountsList([]);
};


/**
 * optional UserContext run_as = 11;
 * @return {?proto.sandboxes.api.v1.UserContext}
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.getRunAs = function() {
  return /** @type{?proto.sandboxes.api.v1.UserContext} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.UserContext, 11));
};


/**
 * @param {?proto.sandboxes.api.v1.UserContext|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Container.prototype.setRunAs = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.clearRunAs = function() {
  return this.setRunAs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.hasRunAs = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ScheduleSpec schedule_spec = 12;
 * @return {?proto.sandboxes.api.v1.ScheduleSpec}
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.getScheduleSpec = function() {
  return /** @type{?proto.sandboxes.api.v1.ScheduleSpec} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.ScheduleSpec, 12));
};


/**
 * @param {?proto.sandboxes.api.v1.ScheduleSpec|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Container.prototype.setScheduleSpec = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.clearScheduleSpec = function() {
  return this.setScheduleSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.hasScheduleSpec = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string snapshot = 13;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.getSnapshot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.setSnapshot = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * repeated string hostnames = 14;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.getHostnamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 14));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.setHostnamesList = function(value) {
  return jspb.Message.setField(this, 14, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.addHostnames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 14, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.clearHostnamesList = function() {
  return this.setHostnamesList([]);
};


/**
 * repeated string wait_for = 15;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.getWaitForList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.setWaitForList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.addWaitFor = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.clearWaitForList = function() {
  return this.setWaitForList([]);
};


/**
 * optional bool disable_service_linking_envs = 16;
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.getDisableServiceLinkingEnvs = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.setDisableServiceLinkingEnvs = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional bool volatile = 17;
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.getVolatile = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Container.prototype.setVolatile = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.repeatedFields_ = [12];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.oneofGroups_ = [[10,11]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.ControllerCase = {
  CONTROLLER_NOT_SET: 0,
  HANDLERS: 10,
  TERRAFORM: 11
};

/**
 * @return {proto.sandboxes.api.v1.AppDefinition.ResourceGroup.ControllerCase}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.prototype.getControllerCase = function() {
  return /** @type {proto.sandboxes.api.v1.AppDefinition.ResourceGroup.ControllerCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.AppDefinition.ResourceGroup.oneofGroups_[0]));
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
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.ResourceGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    brief: jspb.Message.getFieldWithDefault(msg, 3, ""),
    details: jspb.Message.getFieldWithDefault(msg, 4, ""),
    handlers: (f = msg.getHandlers()) && proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers.toObject(includeInstance, f),
    terraform: (f = msg.getTerraform()) && proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.toObject(includeInstance, f),
    waitForList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.ResourceGroup;
  return proto.sandboxes.api.v1.AppDefinition.ResourceGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrief(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    case 10:
      var value = new proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers.deserializeBinaryFromReader);
      msg.setHandlers(value);
      break;
    case 11:
      var value = new proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.deserializeBinaryFromReader);
      msg.setTerraform(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.addWaitFor(value);
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
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.ResourceGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBrief();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getHandlers();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers.serializeBinaryToWriter
    );
  }
  f = message.getTerraform();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.serializeBinaryToWriter
    );
  }
  f = message.getWaitForList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      12,
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
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers.toObject = function(includeInstance, msg) {
  var f, obj = {
    onCreate: (f = msg.getOnCreate()) && proto.sandboxes.api.v1.ExecHandler.toObject(includeInstance, f),
    onDelete: (f = msg.getOnDelete()) && proto.sandboxes.api.v1.ExecHandler.toObject(includeInstance, f),
    onSuspend: (f = msg.getOnSuspend()) && proto.sandboxes.api.v1.ExecHandler.toObject(includeInstance, f),
    onResume: (f = msg.getOnResume()) && proto.sandboxes.api.v1.ExecHandler.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers;
  return proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.ExecHandler;
      reader.readMessage(value,proto.sandboxes.api.v1.ExecHandler.deserializeBinaryFromReader);
      msg.setOnCreate(value);
      break;
    case 2:
      var value = new proto.sandboxes.api.v1.ExecHandler;
      reader.readMessage(value,proto.sandboxes.api.v1.ExecHandler.deserializeBinaryFromReader);
      msg.setOnDelete(value);
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.ExecHandler;
      reader.readMessage(value,proto.sandboxes.api.v1.ExecHandler.deserializeBinaryFromReader);
      msg.setOnSuspend(value);
      break;
    case 4:
      var value = new proto.sandboxes.api.v1.ExecHandler;
      reader.readMessage(value,proto.sandboxes.api.v1.ExecHandler.deserializeBinaryFromReader);
      msg.setOnResume(value);
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
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOnCreate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sandboxes.api.v1.ExecHandler.serializeBinaryToWriter
    );
  }
  f = message.getOnDelete();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sandboxes.api.v1.ExecHandler.serializeBinaryToWriter
    );
  }
  f = message.getOnSuspend();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sandboxes.api.v1.ExecHandler.serializeBinaryToWriter
    );
  }
  f = message.getOnResume();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sandboxes.api.v1.ExecHandler.serializeBinaryToWriter
    );
  }
};


/**
 * optional ExecHandler on_create = 1;
 * @return {?proto.sandboxes.api.v1.ExecHandler}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers.prototype.getOnCreate = function() {
  return /** @type{?proto.sandboxes.api.v1.ExecHandler} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.ExecHandler, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.ExecHandler|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers} returns this
*/
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers.prototype.setOnCreate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers.prototype.clearOnCreate = function() {
  return this.setOnCreate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers.prototype.hasOnCreate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ExecHandler on_delete = 2;
 * @return {?proto.sandboxes.api.v1.ExecHandler}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers.prototype.getOnDelete = function() {
  return /** @type{?proto.sandboxes.api.v1.ExecHandler} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.ExecHandler, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.ExecHandler|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers} returns this
*/
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers.prototype.setOnDelete = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers.prototype.clearOnDelete = function() {
  return this.setOnDelete(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers.prototype.hasOnDelete = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ExecHandler on_suspend = 3;
 * @return {?proto.sandboxes.api.v1.ExecHandler}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers.prototype.getOnSuspend = function() {
  return /** @type{?proto.sandboxes.api.v1.ExecHandler} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.ExecHandler, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.ExecHandler|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers} returns this
*/
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers.prototype.setOnSuspend = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers.prototype.clearOnSuspend = function() {
  return this.setOnSuspend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers.prototype.hasOnSuspend = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ExecHandler on_resume = 4;
 * @return {?proto.sandboxes.api.v1.ExecHandler}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers.prototype.getOnResume = function() {
  return /** @type{?proto.sandboxes.api.v1.ExecHandler} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.ExecHandler, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.ExecHandler|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers} returns this
*/
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers.prototype.setOnResume = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers.prototype.clearOnResume = function() {
  return this.setOnResume(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers.prototype.hasOnResume = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.toObject = function(includeInstance, msg) {
  var f, obj = {
    workspace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dir: jspb.Message.getFieldWithDefault(msg, 2, ""),
    requireBuild: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    run: (f = msg.getRun()) && proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.toObject(includeInstance, f),
    onSuspend: (f = msg.getOnSuspend()) && proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.toObject(includeInstance, f),
    onDelete: (f = msg.getOnDelete()) && proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.toObject(includeInstance, f),
    output: jspb.Message.getFieldWithDefault(msg, 7, ""),
    saveState: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform;
  return proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkspace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDir(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRequireBuild(value);
      break;
    case 4:
      var value = new proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.deserializeBinaryFromReader);
      msg.setRun(value);
      break;
    case 5:
      var value = new proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.deserializeBinaryFromReader);
      msg.setOnSuspend(value);
      break;
    case 6:
      var value = new proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.deserializeBinaryFromReader);
      msg.setOnDelete(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setOutput(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSaveState(value);
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
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkspace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDir();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRequireBuild();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getRun();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.serializeBinaryToWriter
    );
  }
  f = message.getOnSuspend();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.serializeBinaryToWriter
    );
  }
  f = message.getOnDelete();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.serializeBinaryToWriter
    );
  }
  f = message.getOutput();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSaveState();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.repeatedFields_ = [4,5];



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
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxRetries: jspb.Message.getFieldWithDefault(msg, 1, 0),
    timeout: (f = msg.getTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    command: jspb.Message.getFieldWithDefault(msg, 3, ""),
    argsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    envList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    varsMap: (f = msg.getVarsMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec;
  return proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxRetries(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeout(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommand(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addArgs(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addEnv(value);
      break;
    case 6:
      var value = msg.getVarsMap();
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
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxRetries();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTimeout();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCommand();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getArgsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getEnvList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getVarsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional int32 max_retries = 1;
 * @return {number}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.prototype.getMaxRetries = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.prototype.setMaxRetries = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Duration timeout = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.prototype.getTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec} returns this
*/
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.prototype.setTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.prototype.clearTimeout = function() {
  return this.setTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.prototype.hasTimeout = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string command = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.prototype.getCommand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.prototype.setCommand = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string args = 4;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.prototype.getArgsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.prototype.setArgsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.prototype.addArgs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.prototype.clearArgsList = function() {
  return this.setArgsList([]);
};


/**
 * repeated string env = 5;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.prototype.getEnvList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.prototype.setEnvList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.prototype.addEnv = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.prototype.clearEnvList = function() {
  return this.setEnvList([]);
};


/**
 * map<string, string> vars = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.prototype.getVarsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec.prototype.clearVarsMap = function() {
  this.getVarsMap().clear();
  return this;};


/**
 * optional string workspace = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.prototype.getWorkspace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.prototype.setWorkspace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string dir = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.prototype.getDir = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.prototype.setDir = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool require_build = 3;
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.prototype.getRequireBuild = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.prototype.setRequireBuild = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional Exec run = 4;
 * @return {?proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.prototype.getRun = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform} returns this
*/
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.prototype.setRun = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.prototype.clearRun = function() {
  return this.setRun(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.prototype.hasRun = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Exec on_suspend = 5;
 * @return {?proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.prototype.getOnSuspend = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec, 5));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform} returns this
*/
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.prototype.setOnSuspend = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.prototype.clearOnSuspend = function() {
  return this.setOnSuspend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.prototype.hasOnSuspend = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Exec on_delete = 6;
 * @return {?proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.prototype.getOnDelete = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec, 6));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.Exec|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform} returns this
*/
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.prototype.setOnDelete = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.prototype.clearOnDelete = function() {
  return this.setOnDelete(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.prototype.hasOnDelete = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string output = 7;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.prototype.getOutput = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.prototype.setOutput = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bool save_state = 8;
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.prototype.getSaveState = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform.prototype.setSaveState = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string brief = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.prototype.getBrief = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.prototype.setBrief = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string details = 4;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Handlers handlers = 10;
 * @return {?proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.prototype.getHandlers = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers, 10));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Handlers|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup} returns this
*/
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.prototype.setHandlers = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.sandboxes.api.v1.AppDefinition.ResourceGroup.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.prototype.clearHandlers = function() {
  return this.setHandlers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.prototype.hasHandlers = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Terraform terraform = 11;
 * @return {?proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.prototype.getTerraform = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform, 11));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.ResourceGroup.Terraform|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup} returns this
*/
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.prototype.setTerraform = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.sandboxes.api.v1.AppDefinition.ResourceGroup.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.prototype.clearTerraform = function() {
  return this.setTerraform(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.prototype.hasTerraform = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated string wait_for = 12;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.prototype.getWaitForList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.prototype.setWaitForList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.prototype.addWaitFor = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup} returns this
 */
proto.sandboxes.api.v1.AppDefinition.ResourceGroup.prototype.clearWaitForList = function() {
  return this.setWaitForList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sandboxes.api.v1.AppDefinition.Customization.oneofGroups_ = [[1,2,3,4,5,6,7,8,9]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.RuleCase = {
  RULE_NOT_SET: 0,
  ENV: 1,
  KUBERNETES: 2,
  PROPERTY_SET: 3,
  FLAVOR: 4,
  SETTINGS: 5,
  LOCKDOWN: 6,
  DETACH_ENV: 7,
  MCP_SERVER: 8,
  LLM_AGENT: 9
};

/**
 * @return {proto.sandboxes.api.v1.AppDefinition.Customization.RuleCase}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.getRuleCase = function() {
  return /** @type {proto.sandboxes.api.v1.AppDefinition.Customization.RuleCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.AppDefinition.Customization.oneofGroups_[0]));
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
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Customization.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.toObject = function(includeInstance, msg) {
  var f, obj = {
    env: (f = msg.getEnv()) && proto.sandboxes.api.v1.AppDefinition.Customization.Env.toObject(includeInstance, f),
    kubernetes: (f = msg.getKubernetes()) && proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.toObject(includeInstance, f),
    propertySet: (f = msg.getPropertySet()) && proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet.toObject(includeInstance, f),
    flavor: (f = msg.getFlavor()) && proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.toObject(includeInstance, f),
    settings: (f = msg.getSettings()) && proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides.toObject(includeInstance, f),
    lockdown: (f = msg.getLockdown()) && proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.toObject(includeInstance, f),
    detachEnv: (f = msg.getDetachEnv()) && proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv.toObject(includeInstance, f),
    mcpServer: (f = msg.getMcpServer()) && proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.toObject(includeInstance, f),
    llmAgent: (f = msg.getLlmAgent()) && proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Customization;
  return proto.sandboxes.api.v1.AppDefinition.Customization.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.AppDefinition.Customization.Env;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Customization.Env.deserializeBinaryFromReader);
      msg.setEnv(value);
      break;
    case 2:
      var value = new proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.deserializeBinaryFromReader);
      msg.setKubernetes(value);
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet.deserializeBinaryFromReader);
      msg.setPropertySet(value);
      break;
    case 4:
      var value = new proto.sandboxes.api.v1.AppDefinition.Customization.Flavor;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.deserializeBinaryFromReader);
      msg.setFlavor(value);
      break;
    case 5:
      var value = new proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides.deserializeBinaryFromReader);
      msg.setSettings(value);
      break;
    case 6:
      var value = new proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.deserializeBinaryFromReader);
      msg.setLockdown(value);
      break;
    case 7:
      var value = new proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv.deserializeBinaryFromReader);
      msg.setDetachEnv(value);
      break;
    case 8:
      var value = new proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.deserializeBinaryFromReader);
      msg.setMcpServer(value);
      break;
    case 9:
      var value = new proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.deserializeBinaryFromReader);
      msg.setLlmAgent(value);
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
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Customization.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnv();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sandboxes.api.v1.AppDefinition.Customization.Env.serializeBinaryToWriter
    );
  }
  f = message.getKubernetes();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.serializeBinaryToWriter
    );
  }
  f = message.getPropertySet();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet.serializeBinaryToWriter
    );
  }
  f = message.getFlavor();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.serializeBinaryToWriter
    );
  }
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides.serializeBinaryToWriter
    );
  }
  f = message.getLockdown();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.serializeBinaryToWriter
    );
  }
  f = message.getDetachEnv();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv.serializeBinaryToWriter
    );
  }
  f = message.getMcpServer();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.serializeBinaryToWriter
    );
  }
  f = message.getLlmAgent();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.serializeBinaryToWriter
    );
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Validator.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Validator.RuleCase = {
  RULE_NOT_SET: 0,
  REGEXP: 1
};

/**
 * @return {proto.sandboxes.api.v1.AppDefinition.Customization.Validator.RuleCase}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Validator.prototype.getRuleCase = function() {
  return /** @type {proto.sandboxes.api.v1.AppDefinition.Customization.Validator.RuleCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.AppDefinition.Customization.Validator.oneofGroups_[0]));
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
proto.sandboxes.api.v1.AppDefinition.Customization.Validator.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Customization.Validator.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Validator} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Validator.toObject = function(includeInstance, msg) {
  var f, obj = {
    regexp: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Validator}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Validator.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Customization.Validator;
  return proto.sandboxes.api.v1.AppDefinition.Customization.Validator.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Validator} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Validator}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Validator.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegexp(value);
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
proto.sandboxes.api.v1.AppDefinition.Customization.Validator.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Customization.Validator.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Validator} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Validator.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string regexp = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Validator.prototype.getRegexp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Validator} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Validator.prototype.setRegexp = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.sandboxes.api.v1.AppDefinition.Customization.Validator.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Validator} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Validator.prototype.clearRegexp = function() {
  return jspb.Message.setOneofField(this, 1, proto.sandboxes.api.v1.AppDefinition.Customization.Validator.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Validator.prototype.hasRegexp = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice.repeatedFields_ = [2];



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
proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice.toObject = function(includeInstance, msg) {
  var f, obj = {
    pb_default: jspb.Message.getFieldWithDefault(msg, 1, ""),
    optionsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    editable: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice;
  return proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefault(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addOptions(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEditable(value);
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
proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefault();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOptionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getEditable();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string default = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice.prototype.getDefault = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice.prototype.setDefault = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string options = 2;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice.prototype.getOptionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice.prototype.setOptionsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice.prototype.addOptions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice.prototype.clearOptionsList = function() {
  return this.setOptionsList([]);
};


/**
 * optional bool editable = 3;
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice.prototype.getEditable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice.prototype.setEditable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Env.repeatedFields_ = [4];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Env.oneofGroups_ = [[10]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Env.TypeCase = {
  TYPE_NOT_SET: 0,
  CHOICE: 10
};

/**
 * @return {proto.sandboxes.api.v1.AppDefinition.Customization.Env.TypeCase}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Env.prototype.getTypeCase = function() {
  return /** @type {proto.sandboxes.api.v1.AppDefinition.Customization.Env.TypeCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.AppDefinition.Customization.Env.oneofGroups_[0]));
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
proto.sandboxes.api.v1.AppDefinition.Customization.Env.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Customization.Env.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Env} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Env.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    validatorsList: jspb.Message.toObjectList(msg.getValidatorsList(),
    proto.sandboxes.api.v1.AppDefinition.Customization.Validator.toObject, includeInstance),
    choice: (f = msg.getChoice()) && proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Env}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Env.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Customization.Env;
  return proto.sandboxes.api.v1.AppDefinition.Customization.Env.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Env} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Env}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Env.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDisplayName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = new proto.sandboxes.api.v1.AppDefinition.Customization.Validator;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Customization.Validator.deserializeBinaryFromReader);
      msg.addValidators(value);
      break;
    case 10:
      var value = new proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice.deserializeBinaryFromReader);
      msg.setChoice(value);
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
proto.sandboxes.api.v1.AppDefinition.Customization.Env.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Customization.Env.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Env} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Env.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getValidatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.sandboxes.api.v1.AppDefinition.Customization.Validator.serializeBinaryToWriter
    );
  }
  f = message.getChoice();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Env.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Env} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Env.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Env.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Env} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Env.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Env.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Env} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Env.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated Validator validators = 4;
 * @return {!Array<!proto.sandboxes.api.v1.AppDefinition.Customization.Validator>}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Env.prototype.getValidatorsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.AppDefinition.Customization.Validator>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Customization.Validator, 4));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.AppDefinition.Customization.Validator>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Env} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Customization.Env.prototype.setValidatorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Validator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Validator}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Env.prototype.addValidators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.sandboxes.api.v1.AppDefinition.Customization.Validator, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Env} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Env.prototype.clearValidatorsList = function() {
  return this.setValidatorsList([]);
};


/**
 * optional StringChoice choice = 10;
 * @return {?proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Env.prototype.getChoice = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice, 10));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.Customization.StringChoice|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Env} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Customization.Env.prototype.setChoice = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.sandboxes.api.v1.AppDefinition.Customization.Env.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Env} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Env.prototype.clearChoice = function() {
  return this.setChoice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Env.prototype.hasChoice = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.repeatedFields_ = [3,4];



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
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.toObject = function(includeInstance, msg) {
  var f, obj = {
    plan: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cluster: jspb.Message.getFieldWithDefault(msg, 2, ""),
    workloadsList: jspb.Message.toObjectList(msg.getWorkloadsList(),
    proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.toObject, includeInstance),
    ingressesList: jspb.Message.toObjectList(msg.getIngressesList(),
    proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress.toObject, includeInstance),
    interceptCondition: (f = msg.getInterceptCondition()) && proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition.toObject(includeInstance, f),
    namespace: jspb.Message.getFieldWithDefault(msg, 6, ""),
    networkVia: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes;
  return proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlan(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCluster(value);
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.deserializeBinaryFromReader);
      msg.addWorkloads(value);
      break;
    case 4:
      var value = new proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress.deserializeBinaryFromReader);
      msg.addIngresses(value);
      break;
    case 5:
      var value = new proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition.deserializeBinaryFromReader);
      msg.setInterceptCondition(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetworkVia(value);
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
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlan();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCluster();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWorkloadsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.serializeBinaryToWriter
    );
  }
  f = message.getIngressesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress.serializeBinaryToWriter
    );
  }
  f = message.getInterceptCondition();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition.serializeBinaryToWriter
    );
  }
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getNetworkVia();
  if (f.length > 0) {
    writer.writeString(
      7,
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
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition.toObject = function(includeInstance, msg) {
  var f, obj = {
    customHeadersMap: (f = msg.getCustomHeadersMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition;
  return proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getCustomHeadersMap();
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
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomHeadersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * map<string, string> custom_headers = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition.prototype.getCustomHeadersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition.prototype.clearCustomHeadersMap = function() {
  this.getCustomHeadersMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.repeatedFields_ = [7];



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
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    kind: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    container: jspb.Message.getFieldWithDefault(msg, 4, ""),
    workload: jspb.Message.getFieldWithDefault(msg, 6, ""),
    portForwardList: jspb.Message.toObjectList(msg.getPortForwardList(),
    proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward.toObject, includeInstance)
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload;
  return proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContainer(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkload(value);
      break;
    case 7:
      var value = new proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward.deserializeBinaryFromReader);
      msg.addPortForward(value);
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
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKind();
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
  f = message.getContainer();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getWorkload();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPortForwardList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward.serializeBinaryToWriter
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
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward.toObject = function(includeInstance, msg) {
  var f, obj = {
    port: jspb.Message.getFieldWithDefault(msg, 1, 0),
    to: jspb.Message.getFieldWithDefault(msg, 2, 0),
    protocol: jspb.Message.getFieldWithDefault(msg, 3, ""),
    destProtocol: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward;
  return proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTo(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProtocol(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestProtocol(value);
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
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPort();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTo();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getProtocol();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDestProtocol();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int32 port = 1;
 * @return {number}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 to = 2;
 * @return {number}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward.prototype.getTo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward.prototype.setTo = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string protocol = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward.prototype.getProtocol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward.prototype.setProtocol = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string dest_protocol = 4;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward.prototype.getDestProtocol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward.prototype.setDestProtocol = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string kind = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.prototype.setKind = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string container = 4;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.prototype.getContainer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.prototype.setContainer = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string workload = 6;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.prototype.getWorkload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.prototype.setWorkload = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated PortForward port_forward = 7;
 * @return {!Array<!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward>}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.prototype.getPortForwardList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward, 7));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.prototype.setPortForwardList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.prototype.addPortForward = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.PortForward, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload.prototype.clearPortForwardList = function() {
  return this.setPortForwardList([]);
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
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    kind: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    endpointName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    customHeadersMap: (f = msg.getCustomHeadersMap()) ? f.toObject(includeInstance, undefined) : [],
    servicePort: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress;
  return proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndpointName(value);
      break;
    case 5:
      var value = msg.getCustomHeadersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setServicePort(value);
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
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKind();
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
  f = message.getEndpointName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCustomHeadersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getServicePort();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string kind = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress.prototype.setKind = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string endpoint_name = 4;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress.prototype.getEndpointName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress.prototype.setEndpointName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * map<string, string> custom_headers = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress.prototype.getCustomHeadersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress.prototype.clearCustomHeadersMap = function() {
  this.getCustomHeadersMap().clear();
  return this;};


/**
 * optional string service_port = 6;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress.prototype.getServicePort = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress.prototype.setServicePort = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string plan = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.prototype.getPlan = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.prototype.setPlan = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cluster = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.prototype.getCluster = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.prototype.setCluster = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Workload workloads = 3;
 * @return {!Array<!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload>}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.prototype.getWorkloadsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload, 3));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.prototype.setWorkloadsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.prototype.addWorkloads = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Workload, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.prototype.clearWorkloadsList = function() {
  return this.setWorkloadsList([]);
};


/**
 * repeated Ingress ingresses = 4;
 * @return {!Array<!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress>}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.prototype.getIngressesList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress, 4));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.prototype.setIngressesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.prototype.addIngresses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.Ingress, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.prototype.clearIngressesList = function() {
  return this.setIngressesList([]);
};


/**
 * optional InterceptCondition intercept_condition = 5;
 * @return {?proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.prototype.getInterceptCondition = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition, 5));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.InterceptCondition|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.prototype.setInterceptCondition = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.prototype.clearInterceptCondition = function() {
  return this.setInterceptCondition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.prototype.hasInterceptCondition = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string namespace = 6;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string network_via = 7;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.prototype.getNetworkVia = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes.prototype.setNetworkVia = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
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
proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    propertiesMap: (f = msg.getPropertiesMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet;
  return proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = msg.getPropertiesMap();
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
proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPropertiesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, string> properties = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet.prototype.getPropertiesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet.prototype.clearPropertiesMap = function() {
  this.getPropertiesMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.repeatedFields_ = [3,5];



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
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pb_default: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    envList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    workspacesMap: (f = msg.getWorkspacesMap()) ? f.toObject(includeInstance, proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.toObject) : [],
    excludesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    kubernetesPlan: jspb.Message.getFieldWithDefault(msg, 6, ""),
    description: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Customization.Flavor;
  return proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDefault(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addEnv(value);
      break;
    case 4:
      var value = msg.getWorkspacesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.deserializeBinaryFromReader, "", new proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace());
         });
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addExcludes(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setKubernetesPlan(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
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
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDefault();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getEnvList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getWorkspacesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.serializeBinaryToWriter);
  }
  f = message.getExcludesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getKubernetesPlan();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.repeatedFields_ = [2,3];



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
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.toObject = function(includeInstance, msg) {
  var f, obj = {
    auto: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    checkoutsList: jspb.Message.toObjectList(msg.getCheckoutsList(),
    proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout.toObject, includeInstance),
    envList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace;
  return proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAuto(value);
      break;
    case 2:
      var value = new proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout.deserializeBinaryFromReader);
      msg.addCheckouts(value);
      break;
    case 3:
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
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuto();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getCheckoutsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout.serializeBinaryToWriter
    );
  }
  f = message.getEnvList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
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
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    versionSpec: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout;
  return proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersionSpec(value);
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
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersionSpec();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string path = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version_spec = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout.prototype.getVersionSpec = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout.prototype.setVersionSpec = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool auto = 1;
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.prototype.getAuto = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.prototype.setAuto = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated Checkout checkouts = 2;
 * @return {!Array<!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout>}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.prototype.getCheckoutsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout, 2));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.prototype.setCheckoutsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.prototype.addCheckouts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.Checkout, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.prototype.clearCheckoutsList = function() {
  return this.setCheckoutsList([]);
};


/**
 * repeated string env = 3;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.prototype.getEnvList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.prototype.setEnvList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.prototype.addEnv = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace.prototype.clearEnvList = function() {
  return this.setEnvList([]);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool default = 2;
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.prototype.getDefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.prototype.setDefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated string env = 3;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.prototype.getEnvList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.prototype.setEnvList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.prototype.addEnv = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.prototype.clearEnvList = function() {
  return this.setEnvList([]);
};


/**
 * map<string, Workspace> workspaces = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace>}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.prototype.getWorkspacesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.Workspace));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.prototype.clearWorkspacesMap = function() {
  this.getWorkspacesMap().clear();
  return this;};


/**
 * repeated string excludes = 5;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.prototype.getExcludesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.prototype.setExcludesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.prototype.addExcludes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.prototype.clearExcludesList = function() {
  return this.setExcludesList([]);
};


/**
 * optional string kubernetes_plan = 6;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.prototype.getKubernetesPlan = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.prototype.setKubernetesPlan = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string description = 7;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Flavor} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Flavor.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides.repeatedFields_ = [1];



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
proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides.toObject = function(includeInstance, msg) {
  var f, obj = {
    overridesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides;
  return proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addOverrides(value);
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
proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOverridesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string overrides = 1;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides.prototype.getOverridesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides.prototype.setOverridesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides.prototype.addOverrides = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides.prototype.clearOverridesList = function() {
  return this.setOverridesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.repeatedFields_ = [1,4,5,6,7];



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
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.toObject = function(includeInstance, msg) {
  var f, obj = {
    applyToList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    allowApiAccess: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    allowSshKeypair: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    accessibleSecretsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    outboundIpFiltersList: jspb.Message.toObjectList(msg.getOutboundIpFiltersList(),
    proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.toObject, includeInstance),
    dnsFiltersList: jspb.Message.toObjectList(msg.getDnsFiltersList(),
    proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.toObject, includeInstance),
    repoCredentialFiltersList: jspb.Message.toObjectList(msg.getRepoCredentialFiltersList(),
    proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.toObject, includeInstance),
    allowRequestEndpointAccess: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown;
  return proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addApplyTo(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowApiAccess(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowSshKeypair(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addAccessibleSecrets(value);
      break;
    case 5:
      var value = new proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.deserializeBinaryFromReader);
      msg.addOutboundIpFilters(value);
      break;
    case 6:
      var value = new proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.deserializeBinaryFromReader);
      msg.addDnsFilters(value);
      break;
    case 7:
      var value = new proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.deserializeBinaryFromReader);
      msg.addRepoCredentialFilters(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowRequestEndpointAccess(value);
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
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplyToList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getAllowApiAccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getAllowSshKeypair();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getAccessibleSecretsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getOutboundIpFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.serializeBinaryToWriter
    );
  }
  f = message.getDnsFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.serializeBinaryToWriter
    );
  }
  f = message.getRepoCredentialFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.serializeBinaryToWriter
    );
  }
  f = message.getAllowRequestEndpointAccess();
  if (f) {
    writer.writeBool(
      8,
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
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: jspb.Message.getFieldWithDefault(msg, 1, 0),
    end: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange;
  return proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEnd(value);
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
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getEnd();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 start = 1;
 * @return {number}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange.prototype.setStart = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 end = 2;
 * @return {number}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange.prototype.getEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange.prototype.setEnd = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.repeatedFields_ = [1,2,3];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.oneofGroups_ = [[4]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.ActionCase = {
  ACTION_NOT_SET: 0,
  BLOCK: 4
};

/**
 * @return {proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.ActionCase}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.prototype.getActionCase = function() {
  return /** @type {proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.ActionCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.oneofGroups_[0]));
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
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    cidrsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    portsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    portRangesList: jspb.Message.toObjectList(msg.getPortRangesList(),
    proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange.toObject, includeInstance),
    block: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter;
  return proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addCidrs(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPorts(values[i]);
      }
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange.deserializeBinaryFromReader);
      msg.addPortRanges(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlock(value);
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
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCidrsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getPortsList();
  if (f.length > 0) {
    writer.writePackedInt32(
      2,
      f
    );
  }
  f = message.getPortRangesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * repeated string cidrs = 1;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.prototype.getCidrsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.prototype.setCidrsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.prototype.addCidrs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.prototype.clearCidrsList = function() {
  return this.setCidrsList([]);
};


/**
 * repeated int32 ports = 2;
 * @return {!Array<number>}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.prototype.getPortsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.prototype.setPortsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.prototype.addPorts = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.prototype.clearPortsList = function() {
  return this.setPortsList([]);
};


/**
 * repeated PortRange port_ranges = 3;
 * @return {!Array<!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange>}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.prototype.getPortRangesList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange, 3));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.prototype.setPortRangesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.prototype.addPortRanges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.PortRange, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.prototype.clearPortRangesList = function() {
  return this.setPortRangesList([]);
};


/**
 * optional bool block = 4;
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.prototype.getBlock = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.prototype.setBlock = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.prototype.clearBlock = function() {
  return jspb.Message.setOneofField(this, 4, proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.repeatedFields_ = [1];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.oneofGroups_ = [[2]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.ActionCase = {
  ACTION_NOT_SET: 0,
  BLOCK: 2
};

/**
 * @return {proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.ActionCase}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.prototype.getActionCase = function() {
  return /** @type {proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.ActionCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.oneofGroups_[0]));
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
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    namesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    block: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter;
  return proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addNames(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlock(value);
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
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * repeated string names = 1;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.prototype.getNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.prototype.setNamesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.prototype.addNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.prototype.clearNamesList = function() {
  return this.setNamesList([]);
};


/**
 * optional bool block = 2;
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.prototype.getBlock = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.prototype.setBlock = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.prototype.clearBlock = function() {
  return jspb.Message.setOneofField(this, 2, proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.repeatedFields_ = [1];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.oneofGroups_ = [[2]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.ActionCase = {
  ACTION_NOT_SET: 0,
  BLOCK: 2
};

/**
 * @return {proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.ActionCase}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.prototype.getActionCase = function() {
  return /** @type {proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.ActionCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.oneofGroups_[0]));
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
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoUrlList: jspb.Message.toObjectList(msg.getRepoUrlList(),
    sandboxes_api_v1_common_pb.StringMatcher.toObject, includeInstance),
    block: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter;
  return proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_common_pb.StringMatcher;
      reader.readMessage(value,sandboxes_api_v1_common_pb.StringMatcher.deserializeBinaryFromReader);
      msg.addRepoUrl(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlock(value);
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
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoUrlList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      sandboxes_api_v1_common_pb.StringMatcher.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * repeated StringMatcher repo_url = 1;
 * @return {!Array<!proto.sandboxes.api.v1.StringMatcher>}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.prototype.getRepoUrlList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.StringMatcher>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_common_pb.StringMatcher, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.StringMatcher>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.prototype.setRepoUrlList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sandboxes.api.v1.StringMatcher=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.StringMatcher}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.prototype.addRepoUrl = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sandboxes.api.v1.StringMatcher, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.prototype.clearRepoUrlList = function() {
  return this.setRepoUrlList([]);
};


/**
 * optional bool block = 2;
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.prototype.getBlock = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.prototype.setBlock = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.prototype.clearBlock = function() {
  return jspb.Message.setOneofField(this, 2, proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string apply_to = 1;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.prototype.getApplyToList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.prototype.setApplyToList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.prototype.addApplyTo = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.prototype.clearApplyToList = function() {
  return this.setApplyToList([]);
};


/**
 * optional bool allow_api_access = 2;
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.prototype.getAllowApiAccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.prototype.setAllowApiAccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool allow_ssh_keypair = 3;
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.prototype.getAllowSshKeypair = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.prototype.setAllowSshKeypair = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * repeated string accessible_secrets = 4;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.prototype.getAccessibleSecretsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.prototype.setAccessibleSecretsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.prototype.addAccessibleSecrets = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.prototype.clearAccessibleSecretsList = function() {
  return this.setAccessibleSecretsList([]);
};


/**
 * repeated IPFilter outbound_ip_filters = 5;
 * @return {!Array<!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter>}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.prototype.getOutboundIpFiltersList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter, 5));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.prototype.setOutboundIpFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.prototype.addOutboundIpFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.IPFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.prototype.clearOutboundIpFiltersList = function() {
  return this.setOutboundIpFiltersList([]);
};


/**
 * repeated DNSFilter dns_filters = 6;
 * @return {!Array<!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter>}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.prototype.getDnsFiltersList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter, 6));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.prototype.setDnsFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.prototype.addDnsFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.DNSFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.prototype.clearDnsFiltersList = function() {
  return this.setDnsFiltersList([]);
};


/**
 * repeated RepoCredentialFilter repo_credential_filters = 7;
 * @return {!Array<!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter>}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.prototype.getRepoCredentialFiltersList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter, 7));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.prototype.setRepoCredentialFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.prototype.addRepoCredentialFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.RepoCredentialFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.prototype.clearRepoCredentialFiltersList = function() {
  return this.setRepoCredentialFiltersList([]);
};


/**
 * optional bool allow_request_endpoint_access = 8;
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.prototype.getAllowRequestEndpointAccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown.prototype.setAllowRequestEndpointAccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
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
proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv;
  return proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
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
proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv.prototype.setEnabled = function(value) {
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
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.toObject = function(includeInstance, msg) {
  var f, obj = {
    protocol: jspb.Message.getFieldWithDefault(msg, 1, 0),
    endpoint: jspb.Message.getFieldWithDefault(msg, 2, ""),
    auth: (f = msg.getAuth()) && proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer;
  return proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Protocol} */ (reader.readEnum());
      msg.setProtocol(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndpoint(value);
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.deserializeBinaryFromReader);
      msg.setAuth(value);
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
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProtocol();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getEndpoint();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAuth();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Protocol = {
  AUTO: 0,
  SSE: 1,
  STREAM: 2
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
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: (f = msg.getToken()) && proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth;
  return proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.deserializeBinaryFromReader);
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
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.serializeBinaryToWriter
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
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login.toObject = function(includeInstance, msg) {
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login;
  return proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login.deserializeBinaryFromReader = function(msg, reader) {
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
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login.serializeBinaryToWriter = function(message, writer) {
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
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login.prototype.setName = function(value) {
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
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret.toObject = function(includeInstance, msg) {
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret;
  return proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret.deserializeBinaryFromReader = function(msg, reader) {
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
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret.serializeBinaryToWriter = function(message, writer) {
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
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.SourceCase = {
  SOURCE_NOT_SET: 0,
  LOGIN: 3,
  SECRET: 4
};

/**
 * @return {proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.SourceCase}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.prototype.getSourceCase = function() {
  return /** @type {proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.SourceCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.oneofGroups_[0]));
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
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    header: jspb.Message.getFieldWithDefault(msg, 2, ""),
    login: (f = msg.getLogin()) && proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token;
  return proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHeader(value);
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login.deserializeBinaryFromReader);
      msg.setLogin(value);
      break;
    case 4:
      var value = new proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret.deserializeBinaryFromReader);
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
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHeader();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLogin();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string header = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.prototype.getHeader = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.prototype.setHeader = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Login login = 3;
 * @return {?proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.prototype.getLogin = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Login|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.prototype.setLogin = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.prototype.clearLogin = function() {
  return this.setLogin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.prototype.hasLogin = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Secret secret = 4;
 * @return {?proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.prototype.getSecret = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Secret|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.prototype.setSecret = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.prototype.clearSecret = function() {
  return this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Token token = 1;
 * @return {?proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.prototype.getToken = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.Token|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.prototype.setToken = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.prototype.clearToken = function() {
  return this.setToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth.prototype.hasToken = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Protocol protocol = 1;
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Protocol}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.prototype.getProtocol = function() {
  return /** @type {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Protocol} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Protocol} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.prototype.setProtocol = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string endpoint = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.prototype.getEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.prototype.setEndpoint = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Auth auth = 3;
 * @return {?proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.prototype.getAuth = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.Auth|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.prototype.setAuth = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.prototype.clearAuth = function() {
  return this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer.prototype.hasAuth = function() {
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
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    brief: jspb.Message.getFieldWithDefault(msg, 2, ""),
    details: jspb.Message.getFieldWithDefault(msg, 3, ""),
    exec: (f = msg.getExec()) && proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent;
  return proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setBrief(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    case 4:
      var value = new proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec;
      reader.readMessage(value,proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec.deserializeBinaryFromReader);
      msg.setExec(value);
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
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBrief();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getExec();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec.serializeBinaryToWriter
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
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec.toObject = function(includeInstance, msg) {
  var f, obj = {
    workload: jspb.Message.getFieldWithDefault(msg, 1, ""),
    run: (f = msg.getRun()) && sandboxes_api_v1_repo_pb.Repo.Run.toObject(includeInstance, f),
    eventFormat: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec;
  return proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkload(value);
      break;
    case 2:
      var value = new sandboxes_api_v1_repo_pb.Repo.Run;
      reader.readMessage(value,sandboxes_api_v1_repo_pb.Repo.Run.deserializeBinaryFromReader);
      msg.setRun(value);
      break;
    case 3:
      var value = /** @type {!proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec.EventFormat} */ (reader.readEnum());
      msg.setEventFormat(value);
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
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkload();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRun();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sandboxes_api_v1_repo_pb.Repo.Run.serializeBinaryToWriter
    );
  }
  f = message.getEventFormat();
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
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec.EventFormat = {
  DEFAULT: 0,
  CLAUDE_CODE: 1
};

/**
 * optional string workload = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec.prototype.getWorkload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec.prototype.setWorkload = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Repo.Run run = 2;
 * @return {?proto.sandboxes.api.v1.Repo.Run}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec.prototype.getRun = function() {
  return /** @type{?proto.sandboxes.api.v1.Repo.Run} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_repo_pb.Repo.Run, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.Repo.Run|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec.prototype.setRun = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec.prototype.clearRun = function() {
  return this.setRun(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec.prototype.hasRun = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional EventFormat event_format = 3;
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec.EventFormat}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec.prototype.getEventFormat = function() {
  return /** @type {!proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec.EventFormat} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec.EventFormat} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec.prototype.setEventFormat = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string brief = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.prototype.getBrief = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.prototype.setBrief = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string details = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Exec exec = 4;
 * @return {?proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.prototype.getExec = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.Exec|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.prototype.setExec = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.prototype.clearExec = function() {
  return this.setExec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent.prototype.hasExec = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Env env = 1;
 * @return {?proto.sandboxes.api.v1.AppDefinition.Customization.Env}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.getEnv = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.Customization.Env} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Customization.Env, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.Customization.Env|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.setEnv = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.sandboxes.api.v1.AppDefinition.Customization.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.clearEnv = function() {
  return this.setEnv(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.hasEnv = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Kubernetes kubernetes = 2;
 * @return {?proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.getKubernetes = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.Customization.Kubernetes|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.setKubernetes = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.sandboxes.api.v1.AppDefinition.Customization.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.clearKubernetes = function() {
  return this.setKubernetes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.hasKubernetes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PropertySet property_set = 3;
 * @return {?proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.getPropertySet = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.Customization.PropertySet|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.setPropertySet = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.sandboxes.api.v1.AppDefinition.Customization.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.clearPropertySet = function() {
  return this.setPropertySet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.hasPropertySet = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Flavor flavor = 4;
 * @return {?proto.sandboxes.api.v1.AppDefinition.Customization.Flavor}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.getFlavor = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.Customization.Flavor} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Customization.Flavor, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.Customization.Flavor|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.setFlavor = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.sandboxes.api.v1.AppDefinition.Customization.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.clearFlavor = function() {
  return this.setFlavor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.hasFlavor = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional OrgSettingsOverrides settings = 5;
 * @return {?proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.getSettings = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides, 5));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.Customization.OrgSettingsOverrides|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.setSettings = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.sandboxes.api.v1.AppDefinition.Customization.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.hasSettings = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Lockdown lockdown = 6;
 * @return {?proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.getLockdown = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown, 6));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.Customization.Lockdown|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.setLockdown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.sandboxes.api.v1.AppDefinition.Customization.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.clearLockdown = function() {
  return this.setLockdown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.hasLockdown = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional DetachEnv detach_env = 7;
 * @return {?proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.getDetachEnv = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv, 7));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.Customization.DetachEnv|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.setDetachEnv = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.sandboxes.api.v1.AppDefinition.Customization.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.clearDetachEnv = function() {
  return this.setDetachEnv(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.hasDetachEnv = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional MCPServer mcp_server = 8;
 * @return {?proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.getMcpServer = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer, 8));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.Customization.MCPServer|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.setMcpServer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.sandboxes.api.v1.AppDefinition.Customization.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.clearMcpServer = function() {
  return this.setMcpServer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.hasMcpServer = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional LLMAgent llm_agent = 9;
 * @return {?proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.getLlmAgent = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent, 9));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.Customization.LLMAgent|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization} returns this
*/
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.setLlmAgent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.sandboxes.api.v1.AppDefinition.Customization.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization} returns this
 */
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.clearLlmAgent = function() {
  return this.setLlmAgent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.Customization.prototype.hasLlmAgent = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated string env = 8;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.AppDefinition.prototype.getEnvList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition} returns this
 */
proto.sandboxes.api.v1.AppDefinition.prototype.setEnvList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition} returns this
 */
proto.sandboxes.api.v1.AppDefinition.prototype.addEnv = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition} returns this
 */
proto.sandboxes.api.v1.AppDefinition.prototype.clearEnvList = function() {
  return this.setEnvList([]);
};


/**
 * repeated Volume volumes = 9;
 * @return {!Array<!proto.sandboxes.api.v1.Volume>}
 */
proto.sandboxes.api.v1.AppDefinition.prototype.getVolumesList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.Volume>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.Volume, 9));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.Volume>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition} returns this
*/
proto.sandboxes.api.v1.AppDefinition.prototype.setVolumesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.sandboxes.api.v1.Volume=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Volume}
 */
proto.sandboxes.api.v1.AppDefinition.prototype.addVolumes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.sandboxes.api.v1.Volume, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition} returns this
 */
proto.sandboxes.api.v1.AppDefinition.prototype.clearVolumesList = function() {
  return this.setVolumesList([]);
};


/**
 * repeated Endpoint endpoints = 10;
 * @return {!Array<!proto.sandboxes.api.v1.Endpoint>}
 */
proto.sandboxes.api.v1.AppDefinition.prototype.getEndpointsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.Endpoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_endpoint_pb.Endpoint, 10));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.Endpoint>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition} returns this
*/
proto.sandboxes.api.v1.AppDefinition.prototype.setEndpointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.sandboxes.api.v1.Endpoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Endpoint}
 */
proto.sandboxes.api.v1.AppDefinition.prototype.addEndpoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.sandboxes.api.v1.Endpoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition} returns this
 */
proto.sandboxes.api.v1.AppDefinition.prototype.clearEndpointsList = function() {
  return this.setEndpointsList([]);
};


/**
 * repeated Workspace workspaces = 11;
 * @return {!Array<!proto.sandboxes.api.v1.AppDefinition.Workspace>}
 */
proto.sandboxes.api.v1.AppDefinition.prototype.getWorkspacesList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.AppDefinition.Workspace>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Workspace, 11));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.AppDefinition.Workspace>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition} returns this
*/
proto.sandboxes.api.v1.AppDefinition.prototype.setWorkspacesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.sandboxes.api.v1.AppDefinition.Workspace=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Workspace}
 */
proto.sandboxes.api.v1.AppDefinition.prototype.addWorkspaces = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.sandboxes.api.v1.AppDefinition.Workspace, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition} returns this
 */
proto.sandboxes.api.v1.AppDefinition.prototype.clearWorkspacesList = function() {
  return this.setWorkspacesList([]);
};


/**
 * repeated Dependency dependencies = 12;
 * @return {!Array<!proto.sandboxes.api.v1.AppDefinition.Dependency>}
 */
proto.sandboxes.api.v1.AppDefinition.prototype.getDependenciesList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.AppDefinition.Dependency>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Dependency, 12));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.AppDefinition.Dependency>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition} returns this
*/
proto.sandboxes.api.v1.AppDefinition.prototype.setDependenciesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.sandboxes.api.v1.AppDefinition.Dependency=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Dependency}
 */
proto.sandboxes.api.v1.AppDefinition.prototype.addDependencies = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.sandboxes.api.v1.AppDefinition.Dependency, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition} returns this
 */
proto.sandboxes.api.v1.AppDefinition.prototype.clearDependenciesList = function() {
  return this.setDependenciesList([]);
};


/**
 * repeated Container containers = 13;
 * @return {!Array<!proto.sandboxes.api.v1.AppDefinition.Container>}
 */
proto.sandboxes.api.v1.AppDefinition.prototype.getContainersList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.AppDefinition.Container>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Container, 13));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.AppDefinition.Container>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition} returns this
*/
proto.sandboxes.api.v1.AppDefinition.prototype.setContainersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.sandboxes.api.v1.AppDefinition.Container=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Container}
 */
proto.sandboxes.api.v1.AppDefinition.prototype.addContainers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.sandboxes.api.v1.AppDefinition.Container, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition} returns this
 */
proto.sandboxes.api.v1.AppDefinition.prototype.clearContainersList = function() {
  return this.setContainersList([]);
};


/**
 * optional string overview = 14;
 * @return {string}
 */
proto.sandboxes.api.v1.AppDefinition.prototype.getOverview = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AppDefinition} returns this
 */
proto.sandboxes.api.v1.AppDefinition.prototype.setOverview = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional Scheduler scheduler = 15;
 * @return {?proto.sandboxes.api.v1.Scheduler}
 */
proto.sandboxes.api.v1.AppDefinition.prototype.getScheduler = function() {
  return /** @type{?proto.sandboxes.api.v1.Scheduler} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Scheduler, 15));
};


/**
 * @param {?proto.sandboxes.api.v1.Scheduler|undefined} value
 * @return {!proto.sandboxes.api.v1.AppDefinition} returns this
*/
proto.sandboxes.api.v1.AppDefinition.prototype.setScheduler = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AppDefinition} returns this
 */
proto.sandboxes.api.v1.AppDefinition.prototype.clearScheduler = function() {
  return this.setScheduler(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AppDefinition.prototype.hasScheduler = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * repeated ResourceGroup resources = 16;
 * @return {!Array<!proto.sandboxes.api.v1.AppDefinition.ResourceGroup>}
 */
proto.sandboxes.api.v1.AppDefinition.prototype.getResourcesList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.AppDefinition.ResourceGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.AppDefinition.ResourceGroup, 16));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.AppDefinition.ResourceGroup>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition} returns this
*/
proto.sandboxes.api.v1.AppDefinition.prototype.setResourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 16, value);
};


/**
 * @param {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.ResourceGroup}
 */
proto.sandboxes.api.v1.AppDefinition.prototype.addResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 16, opt_value, proto.sandboxes.api.v1.AppDefinition.ResourceGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition} returns this
 */
proto.sandboxes.api.v1.AppDefinition.prototype.clearResourcesList = function() {
  return this.setResourcesList([]);
};


/**
 * repeated Customization customizations = 17;
 * @return {!Array<!proto.sandboxes.api.v1.AppDefinition.Customization>}
 */
proto.sandboxes.api.v1.AppDefinition.prototype.getCustomizationsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.AppDefinition.Customization>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.AppDefinition.Customization, 17));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.AppDefinition.Customization>} value
 * @return {!proto.sandboxes.api.v1.AppDefinition} returns this
*/
proto.sandboxes.api.v1.AppDefinition.prototype.setCustomizationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 17, value);
};


/**
 * @param {!proto.sandboxes.api.v1.AppDefinition.Customization=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AppDefinition.Customization}
 */
proto.sandboxes.api.v1.AppDefinition.prototype.addCustomizations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 17, opt_value, proto.sandboxes.api.v1.AppDefinition.Customization, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AppDefinition} returns this
 */
proto.sandboxes.api.v1.AppDefinition.prototype.clearCustomizationsList = function() {
  return this.setCustomizationsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sandboxes.api.v1.ExecHandler.oneofGroups_ = [[10]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.ExecHandler.TargetCase = {
  TARGET_NOT_SET: 0,
  USE_WORKSPACE: 10
};

/**
 * @return {proto.sandboxes.api.v1.ExecHandler.TargetCase}
 */
proto.sandboxes.api.v1.ExecHandler.prototype.getTargetCase = function() {
  return /** @type {proto.sandboxes.api.v1.ExecHandler.TargetCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.ExecHandler.oneofGroups_[0]));
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
proto.sandboxes.api.v1.ExecHandler.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ExecHandler.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ExecHandler} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ExecHandler.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxRetries: jspb.Message.getFieldWithDefault(msg, 1, 0),
    timeout: (f = msg.getTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    saveState: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    useWorkspace: (f = msg.getUseWorkspace()) && proto.sandboxes.api.v1.ExecHandler.UseWorkspace.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.ExecHandler}
 */
proto.sandboxes.api.v1.ExecHandler.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ExecHandler;
  return proto.sandboxes.api.v1.ExecHandler.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ExecHandler} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ExecHandler}
 */
proto.sandboxes.api.v1.ExecHandler.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxRetries(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeout(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSaveState(value);
      break;
    case 10:
      var value = new proto.sandboxes.api.v1.ExecHandler.UseWorkspace;
      reader.readMessage(value,proto.sandboxes.api.v1.ExecHandler.UseWorkspace.deserializeBinaryFromReader);
      msg.setUseWorkspace(value);
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
proto.sandboxes.api.v1.ExecHandler.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ExecHandler.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ExecHandler} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ExecHandler.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxRetries();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTimeout();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getSaveState();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getUseWorkspace();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.sandboxes.api.v1.ExecHandler.UseWorkspace.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.ExecHandler.UseWorkspace.repeatedFields_ = [4];



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
proto.sandboxes.api.v1.ExecHandler.UseWorkspace.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ExecHandler.UseWorkspace.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ExecHandler.UseWorkspace} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ExecHandler.UseWorkspace.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    run: (f = msg.getRun()) && sandboxes_api_v1_repo_pb.Repo.Run.toObject(includeInstance, f),
    requireBuild: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    artifactsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.sandboxes.api.v1.ExecHandler.UseWorkspace}
 */
proto.sandboxes.api.v1.ExecHandler.UseWorkspace.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ExecHandler.UseWorkspace;
  return proto.sandboxes.api.v1.ExecHandler.UseWorkspace.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ExecHandler.UseWorkspace} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ExecHandler.UseWorkspace}
 */
proto.sandboxes.api.v1.ExecHandler.UseWorkspace.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new sandboxes_api_v1_repo_pb.Repo.Run;
      reader.readMessage(value,sandboxes_api_v1_repo_pb.Repo.Run.deserializeBinaryFromReader);
      msg.setRun(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRequireBuild(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addArtifacts(value);
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
proto.sandboxes.api.v1.ExecHandler.UseWorkspace.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ExecHandler.UseWorkspace.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ExecHandler.UseWorkspace} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ExecHandler.UseWorkspace.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRun();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sandboxes_api_v1_repo_pb.Repo.Run.serializeBinaryToWriter
    );
  }
  f = message.getRequireBuild();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getArtifactsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.ExecHandler.UseWorkspace.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.ExecHandler.UseWorkspace} returns this
 */
proto.sandboxes.api.v1.ExecHandler.UseWorkspace.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Repo.Run run = 2;
 * @return {?proto.sandboxes.api.v1.Repo.Run}
 */
proto.sandboxes.api.v1.ExecHandler.UseWorkspace.prototype.getRun = function() {
  return /** @type{?proto.sandboxes.api.v1.Repo.Run} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_repo_pb.Repo.Run, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.Repo.Run|undefined} value
 * @return {!proto.sandboxes.api.v1.ExecHandler.UseWorkspace} returns this
*/
proto.sandboxes.api.v1.ExecHandler.UseWorkspace.prototype.setRun = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.ExecHandler.UseWorkspace} returns this
 */
proto.sandboxes.api.v1.ExecHandler.UseWorkspace.prototype.clearRun = function() {
  return this.setRun(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.ExecHandler.UseWorkspace.prototype.hasRun = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool require_build = 3;
 * @return {boolean}
 */
proto.sandboxes.api.v1.ExecHandler.UseWorkspace.prototype.getRequireBuild = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.ExecHandler.UseWorkspace} returns this
 */
proto.sandboxes.api.v1.ExecHandler.UseWorkspace.prototype.setRequireBuild = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * repeated string artifacts = 4;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.ExecHandler.UseWorkspace.prototype.getArtifactsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.ExecHandler.UseWorkspace} returns this
 */
proto.sandboxes.api.v1.ExecHandler.UseWorkspace.prototype.setArtifactsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.ExecHandler.UseWorkspace} returns this
 */
proto.sandboxes.api.v1.ExecHandler.UseWorkspace.prototype.addArtifacts = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ExecHandler.UseWorkspace} returns this
 */
proto.sandboxes.api.v1.ExecHandler.UseWorkspace.prototype.clearArtifactsList = function() {
  return this.setArtifactsList([]);
};


/**
 * optional int32 max_retries = 1;
 * @return {number}
 */
proto.sandboxes.api.v1.ExecHandler.prototype.getMaxRetries = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.ExecHandler} returns this
 */
proto.sandboxes.api.v1.ExecHandler.prototype.setMaxRetries = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Duration timeout = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.sandboxes.api.v1.ExecHandler.prototype.getTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.sandboxes.api.v1.ExecHandler} returns this
*/
proto.sandboxes.api.v1.ExecHandler.prototype.setTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.ExecHandler} returns this
 */
proto.sandboxes.api.v1.ExecHandler.prototype.clearTimeout = function() {
  return this.setTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.ExecHandler.prototype.hasTimeout = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool save_state = 3;
 * @return {boolean}
 */
proto.sandboxes.api.v1.ExecHandler.prototype.getSaveState = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.ExecHandler} returns this
 */
proto.sandboxes.api.v1.ExecHandler.prototype.setSaveState = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional UseWorkspace use_workspace = 10;
 * @return {?proto.sandboxes.api.v1.ExecHandler.UseWorkspace}
 */
proto.sandboxes.api.v1.ExecHandler.prototype.getUseWorkspace = function() {
  return /** @type{?proto.sandboxes.api.v1.ExecHandler.UseWorkspace} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.ExecHandler.UseWorkspace, 10));
};


/**
 * @param {?proto.sandboxes.api.v1.ExecHandler.UseWorkspace|undefined} value
 * @return {!proto.sandboxes.api.v1.ExecHandler} returns this
*/
proto.sandboxes.api.v1.ExecHandler.prototype.setUseWorkspace = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.sandboxes.api.v1.ExecHandler.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.ExecHandler} returns this
 */
proto.sandboxes.api.v1.ExecHandler.prototype.clearUseWorkspace = function() {
  return this.setUseWorkspace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.ExecHandler.prototype.hasUseWorkspace = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sandboxes.api.v1.Volume.oneofGroups_ = [[11,12,13]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.Volume.FromCase = {
  FROM_NOT_SET: 0,
  CONTENT: 11,
  SECRET: 12,
  WORKLOAD: 13
};

/**
 * @return {proto.sandboxes.api.v1.Volume.FromCase}
 */
proto.sandboxes.api.v1.Volume.prototype.getFromCase = function() {
  return /** @type {proto.sandboxes.api.v1.Volume.FromCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.Volume.oneofGroups_[0]));
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
proto.sandboxes.api.v1.Volume.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Volume.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Volume} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Volume.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    content: (f = msg.getContent()) && proto.sandboxes.api.v1.Volume.Content.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && proto.sandboxes.api.v1.Volume.Secret.toObject(includeInstance, f),
    workload: (f = msg.getWorkload()) && proto.sandboxes.api.v1.Volume.Workload.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.Volume}
 */
proto.sandboxes.api.v1.Volume.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Volume;
  return proto.sandboxes.api.v1.Volume.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Volume} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Volume}
 */
proto.sandboxes.api.v1.Volume.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDescription(value);
      break;
    case 11:
      var value = new proto.sandboxes.api.v1.Volume.Content;
      reader.readMessage(value,proto.sandboxes.api.v1.Volume.Content.deserializeBinaryFromReader);
      msg.setContent(value);
      break;
    case 12:
      var value = new proto.sandboxes.api.v1.Volume.Secret;
      reader.readMessage(value,proto.sandboxes.api.v1.Volume.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 13:
      var value = new proto.sandboxes.api.v1.Volume.Workload;
      reader.readMessage(value,proto.sandboxes.api.v1.Volume.Workload.deserializeBinaryFromReader);
      msg.setWorkload(value);
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
proto.sandboxes.api.v1.Volume.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Volume.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Volume} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Volume.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContent();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.sandboxes.api.v1.Volume.Content.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.sandboxes.api.v1.Volume.Secret.serializeBinaryToWriter
    );
  }
  f = message.getWorkload();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.sandboxes.api.v1.Volume.Workload.serializeBinaryToWriter
    );
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sandboxes.api.v1.Volume.Content.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.Volume.Content.DataCase = {
  DATA_NOT_SET: 0,
  TEXT: 1,
  BINARY: 2
};

/**
 * @return {proto.sandboxes.api.v1.Volume.Content.DataCase}
 */
proto.sandboxes.api.v1.Volume.Content.prototype.getDataCase = function() {
  return /** @type {proto.sandboxes.api.v1.Volume.Content.DataCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.Volume.Content.oneofGroups_[0]));
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
proto.sandboxes.api.v1.Volume.Content.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Volume.Content.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Volume.Content} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Volume.Content.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    binary: msg.getBinary_asB64()
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
 * @return {!proto.sandboxes.api.v1.Volume.Content}
 */
proto.sandboxes.api.v1.Volume.Content.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Volume.Content;
  return proto.sandboxes.api.v1.Volume.Content.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Volume.Content} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Volume.Content}
 */
proto.sandboxes.api.v1.Volume.Content.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBinary(value);
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
proto.sandboxes.api.v1.Volume.Content.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Volume.Content.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Volume.Content} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Volume.Content.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.Volume.Content.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Volume.Content} returns this
 */
proto.sandboxes.api.v1.Volume.Content.prototype.setText = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.sandboxes.api.v1.Volume.Content.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sandboxes.api.v1.Volume.Content} returns this
 */
proto.sandboxes.api.v1.Volume.Content.prototype.clearText = function() {
  return jspb.Message.setOneofField(this, 1, proto.sandboxes.api.v1.Volume.Content.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Volume.Content.prototype.hasText = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes binary = 2;
 * @return {!(string|Uint8Array)}
 */
proto.sandboxes.api.v1.Volume.Content.prototype.getBinary = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes binary = 2;
 * This is a type-conversion wrapper around `getBinary()`
 * @return {string}
 */
proto.sandboxes.api.v1.Volume.Content.prototype.getBinary_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBinary()));
};


/**
 * optional bytes binary = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBinary()`
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.Volume.Content.prototype.getBinary_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBinary()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sandboxes.api.v1.Volume.Content} returns this
 */
proto.sandboxes.api.v1.Volume.Content.prototype.setBinary = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.sandboxes.api.v1.Volume.Content.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sandboxes.api.v1.Volume.Content} returns this
 */
proto.sandboxes.api.v1.Volume.Content.prototype.clearBinary = function() {
  return jspb.Message.setOneofField(this, 2, proto.sandboxes.api.v1.Volume.Content.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Volume.Content.prototype.hasBinary = function() {
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
proto.sandboxes.api.v1.Volume.Secret.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Volume.Secret.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Volume.Secret} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Volume.Secret.toObject = function(includeInstance, msg) {
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
 * @return {!proto.sandboxes.api.v1.Volume.Secret}
 */
proto.sandboxes.api.v1.Volume.Secret.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Volume.Secret;
  return proto.sandboxes.api.v1.Volume.Secret.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Volume.Secret} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Volume.Secret}
 */
proto.sandboxes.api.v1.Volume.Secret.deserializeBinaryFromReader = function(msg, reader) {
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
proto.sandboxes.api.v1.Volume.Secret.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Volume.Secret.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Volume.Secret} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Volume.Secret.serializeBinaryToWriter = function(message, writer) {
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
proto.sandboxes.api.v1.Volume.Secret.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Volume.Secret} returns this
 */
proto.sandboxes.api.v1.Volume.Secret.prototype.setName = function(value) {
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
proto.sandboxes.api.v1.Volume.Workload.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Volume.Workload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Volume.Workload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Volume.Workload.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    prefix: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.sandboxes.api.v1.Volume.Workload}
 */
proto.sandboxes.api.v1.Volume.Workload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Volume.Workload;
  return proto.sandboxes.api.v1.Volume.Workload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Volume.Workload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Volume.Workload}
 */
proto.sandboxes.api.v1.Volume.Workload.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPrefix(value);
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
proto.sandboxes.api.v1.Volume.Workload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Volume.Workload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Volume.Workload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Volume.Workload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrefix();
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
proto.sandboxes.api.v1.Volume.Workload.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Volume.Workload} returns this
 */
proto.sandboxes.api.v1.Volume.Workload.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string prefix = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.Volume.Workload.prototype.getPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Volume.Workload} returns this
 */
proto.sandboxes.api.v1.Volume.Workload.prototype.setPrefix = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.Volume.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Volume} returns this
 */
proto.sandboxes.api.v1.Volume.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.Volume.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Volume} returns this
 */
proto.sandboxes.api.v1.Volume.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Content content = 11;
 * @return {?proto.sandboxes.api.v1.Volume.Content}
 */
proto.sandboxes.api.v1.Volume.prototype.getContent = function() {
  return /** @type{?proto.sandboxes.api.v1.Volume.Content} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Volume.Content, 11));
};


/**
 * @param {?proto.sandboxes.api.v1.Volume.Content|undefined} value
 * @return {!proto.sandboxes.api.v1.Volume} returns this
*/
proto.sandboxes.api.v1.Volume.prototype.setContent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.sandboxes.api.v1.Volume.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Volume} returns this
 */
proto.sandboxes.api.v1.Volume.prototype.clearContent = function() {
  return this.setContent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Volume.prototype.hasContent = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Secret secret = 12;
 * @return {?proto.sandboxes.api.v1.Volume.Secret}
 */
proto.sandboxes.api.v1.Volume.prototype.getSecret = function() {
  return /** @type{?proto.sandboxes.api.v1.Volume.Secret} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Volume.Secret, 12));
};


/**
 * @param {?proto.sandboxes.api.v1.Volume.Secret|undefined} value
 * @return {!proto.sandboxes.api.v1.Volume} returns this
*/
proto.sandboxes.api.v1.Volume.prototype.setSecret = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.sandboxes.api.v1.Volume.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Volume} returns this
 */
proto.sandboxes.api.v1.Volume.prototype.clearSecret = function() {
  return this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Volume.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Workload workload = 13;
 * @return {?proto.sandboxes.api.v1.Volume.Workload}
 */
proto.sandboxes.api.v1.Volume.prototype.getWorkload = function() {
  return /** @type{?proto.sandboxes.api.v1.Volume.Workload} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Volume.Workload, 13));
};


/**
 * @param {?proto.sandboxes.api.v1.Volume.Workload|undefined} value
 * @return {!proto.sandboxes.api.v1.Volume} returns this
*/
proto.sandboxes.api.v1.Volume.prototype.setWorkload = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.sandboxes.api.v1.Volume.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Volume} returns this
 */
proto.sandboxes.api.v1.Volume.prototype.clearWorkload = function() {
  return this.setWorkload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Volume.prototype.hasWorkload = function() {
  return jspb.Message.getField(this, 13) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sandboxes.api.v1.UserContext.oneofGroups_ = [[1,2],[3,4]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.UserContext.UserSpecCase = {
  USER_SPEC_NOT_SET: 0,
  UID: 1,
  USER: 2
};

/**
 * @return {proto.sandboxes.api.v1.UserContext.UserSpecCase}
 */
proto.sandboxes.api.v1.UserContext.prototype.getUserSpecCase = function() {
  return /** @type {proto.sandboxes.api.v1.UserContext.UserSpecCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.UserContext.oneofGroups_[0]));
};

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.UserContext.GroupSpecCase = {
  GROUP_SPEC_NOT_SET: 0,
  GID: 3,
  GROUP: 4
};

/**
 * @return {proto.sandboxes.api.v1.UserContext.GroupSpecCase}
 */
proto.sandboxes.api.v1.UserContext.prototype.getGroupSpecCase = function() {
  return /** @type {proto.sandboxes.api.v1.UserContext.GroupSpecCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.UserContext.oneofGroups_[1]));
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
proto.sandboxes.api.v1.UserContext.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UserContext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UserContext} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UserContext.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    user: jspb.Message.getFieldWithDefault(msg, 2, ""),
    gid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    group: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.sandboxes.api.v1.UserContext}
 */
proto.sandboxes.api.v1.UserContext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UserContext;
  return proto.sandboxes.api.v1.UserContext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UserContext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UserContext}
 */
proto.sandboxes.api.v1.UserContext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroup(value);
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
proto.sandboxes.api.v1.UserContext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UserContext.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UserContext} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UserContext.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int32 uid = 1;
 * @return {number}
 */
proto.sandboxes.api.v1.UserContext.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.UserContext} returns this
 */
proto.sandboxes.api.v1.UserContext.prototype.setUid = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.sandboxes.api.v1.UserContext.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sandboxes.api.v1.UserContext} returns this
 */
proto.sandboxes.api.v1.UserContext.prototype.clearUid = function() {
  return jspb.Message.setOneofField(this, 1, proto.sandboxes.api.v1.UserContext.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UserContext.prototype.hasUid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string user = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.UserContext.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UserContext} returns this
 */
proto.sandboxes.api.v1.UserContext.prototype.setUser = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.sandboxes.api.v1.UserContext.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sandboxes.api.v1.UserContext} returns this
 */
proto.sandboxes.api.v1.UserContext.prototype.clearUser = function() {
  return jspb.Message.setOneofField(this, 2, proto.sandboxes.api.v1.UserContext.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UserContext.prototype.hasUser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 gid = 3;
 * @return {number}
 */
proto.sandboxes.api.v1.UserContext.prototype.getGid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.UserContext} returns this
 */
proto.sandboxes.api.v1.UserContext.prototype.setGid = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.sandboxes.api.v1.UserContext.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sandboxes.api.v1.UserContext} returns this
 */
proto.sandboxes.api.v1.UserContext.prototype.clearGid = function() {
  return jspb.Message.setOneofField(this, 3, proto.sandboxes.api.v1.UserContext.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UserContext.prototype.hasGid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string group = 4;
 * @return {string}
 */
proto.sandboxes.api.v1.UserContext.prototype.getGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.UserContext} returns this
 */
proto.sandboxes.api.v1.UserContext.prototype.setGroup = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.sandboxes.api.v1.UserContext.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sandboxes.api.v1.UserContext} returns this
 */
proto.sandboxes.api.v1.UserContext.prototype.clearGroup = function() {
  return jspb.Message.setOneofField(this, 4, proto.sandboxes.api.v1.UserContext.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UserContext.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.sandboxes.api.v1.VolumeMount.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.VolumeMount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.VolumeMount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.VolumeMount.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    subPath: jspb.Message.getFieldWithDefault(msg, 3, ""),
    from: (f = msg.getFrom()) && proto.sandboxes.api.v1.VolumeMount.VolumeFrom.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.VolumeMount}
 */
proto.sandboxes.api.v1.VolumeMount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.VolumeMount;
  return proto.sandboxes.api.v1.VolumeMount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.VolumeMount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.VolumeMount}
 */
proto.sandboxes.api.v1.VolumeMount.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubPath(value);
      break;
    case 4:
      var value = new proto.sandboxes.api.v1.VolumeMount.VolumeFrom;
      reader.readMessage(value,proto.sandboxes.api.v1.VolumeMount.VolumeFrom.deserializeBinaryFromReader);
      msg.setFrom(value);
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
proto.sandboxes.api.v1.VolumeMount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.VolumeMount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.VolumeMount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.VolumeMount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSubPath();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sandboxes.api.v1.VolumeMount.VolumeFrom.serializeBinaryToWriter
    );
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sandboxes.api.v1.VolumeMount.VolumeFrom.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.VolumeMount.VolumeFrom.FromCase = {
  FROM_NOT_SET: 0,
  VOLUME_NAME: 1,
  VOLUME: 2
};

/**
 * @return {proto.sandboxes.api.v1.VolumeMount.VolumeFrom.FromCase}
 */
proto.sandboxes.api.v1.VolumeMount.VolumeFrom.prototype.getFromCase = function() {
  return /** @type {proto.sandboxes.api.v1.VolumeMount.VolumeFrom.FromCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.VolumeMount.VolumeFrom.oneofGroups_[0]));
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
proto.sandboxes.api.v1.VolumeMount.VolumeFrom.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.VolumeMount.VolumeFrom.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.VolumeMount.VolumeFrom} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.VolumeMount.VolumeFrom.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    volume: (f = msg.getVolume()) && proto.sandboxes.api.v1.Volume.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.VolumeMount.VolumeFrom}
 */
proto.sandboxes.api.v1.VolumeMount.VolumeFrom.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.VolumeMount.VolumeFrom;
  return proto.sandboxes.api.v1.VolumeMount.VolumeFrom.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.VolumeMount.VolumeFrom} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.VolumeMount.VolumeFrom}
 */
proto.sandboxes.api.v1.VolumeMount.VolumeFrom.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVolumeName(value);
      break;
    case 2:
      var value = new proto.sandboxes.api.v1.Volume;
      reader.readMessage(value,proto.sandboxes.api.v1.Volume.deserializeBinaryFromReader);
      msg.setVolume(value);
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
proto.sandboxes.api.v1.VolumeMount.VolumeFrom.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.VolumeMount.VolumeFrom.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.VolumeMount.VolumeFrom} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.VolumeMount.VolumeFrom.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVolume();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sandboxes.api.v1.Volume.serializeBinaryToWriter
    );
  }
};


/**
 * optional string volume_name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.VolumeMount.VolumeFrom.prototype.getVolumeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.VolumeMount.VolumeFrom} returns this
 */
proto.sandboxes.api.v1.VolumeMount.VolumeFrom.prototype.setVolumeName = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.sandboxes.api.v1.VolumeMount.VolumeFrom.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sandboxes.api.v1.VolumeMount.VolumeFrom} returns this
 */
proto.sandboxes.api.v1.VolumeMount.VolumeFrom.prototype.clearVolumeName = function() {
  return jspb.Message.setOneofField(this, 1, proto.sandboxes.api.v1.VolumeMount.VolumeFrom.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.VolumeMount.VolumeFrom.prototype.hasVolumeName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Volume volume = 2;
 * @return {?proto.sandboxes.api.v1.Volume}
 */
proto.sandboxes.api.v1.VolumeMount.VolumeFrom.prototype.getVolume = function() {
  return /** @type{?proto.sandboxes.api.v1.Volume} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Volume, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.Volume|undefined} value
 * @return {!proto.sandboxes.api.v1.VolumeMount.VolumeFrom} returns this
*/
proto.sandboxes.api.v1.VolumeMount.VolumeFrom.prototype.setVolume = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.sandboxes.api.v1.VolumeMount.VolumeFrom.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.VolumeMount.VolumeFrom} returns this
 */
proto.sandboxes.api.v1.VolumeMount.VolumeFrom.prototype.clearVolume = function() {
  return this.setVolume(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.VolumeMount.VolumeFrom.prototype.hasVolume = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.VolumeMount.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.VolumeMount} returns this
 */
proto.sandboxes.api.v1.VolumeMount.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.VolumeMount.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.VolumeMount} returns this
 */
proto.sandboxes.api.v1.VolumeMount.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sub_path = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.VolumeMount.prototype.getSubPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.VolumeMount} returns this
 */
proto.sandboxes.api.v1.VolumeMount.prototype.setSubPath = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional VolumeFrom from = 4;
 * @return {?proto.sandboxes.api.v1.VolumeMount.VolumeFrom}
 */
proto.sandboxes.api.v1.VolumeMount.prototype.getFrom = function() {
  return /** @type{?proto.sandboxes.api.v1.VolumeMount.VolumeFrom} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.VolumeMount.VolumeFrom, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.VolumeMount.VolumeFrom|undefined} value
 * @return {!proto.sandboxes.api.v1.VolumeMount} returns this
*/
proto.sandboxes.api.v1.VolumeMount.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.VolumeMount} returns this
 */
proto.sandboxes.api.v1.VolumeMount.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.VolumeMount.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sandboxes.api.v1.Probe.oneofGroups_ = [[10,11,12]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.Probe.ActionCase = {
  ACTION_NOT_SET: 0,
  COMMAND: 10,
  TCP_PORT: 11,
  HTTP_GET: 12
};

/**
 * @return {proto.sandboxes.api.v1.Probe.ActionCase}
 */
proto.sandboxes.api.v1.Probe.prototype.getActionCase = function() {
  return /** @type {proto.sandboxes.api.v1.Probe.ActionCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.Probe.oneofGroups_[0]));
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
proto.sandboxes.api.v1.Probe.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Probe.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Probe} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Probe.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    interval: (f = msg.getInterval()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    positiveThreshold: jspb.Message.getFieldWithDefault(msg, 3, 0),
    negativeThreshold: jspb.Message.getFieldWithDefault(msg, 4, 0),
    initialDelay: (f = msg.getInitialDelay()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    initialNegativeThreshold: jspb.Message.getFieldWithDefault(msg, 6, 0),
    command: jspb.Message.getFieldWithDefault(msg, 10, ""),
    tcpPort: jspb.Message.getFieldWithDefault(msg, 11, 0),
    httpGet: (f = msg.getHttpGet()) && proto.sandboxes.api.v1.Probe.HttpGet.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.Probe}
 */
proto.sandboxes.api.v1.Probe.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Probe;
  return proto.sandboxes.api.v1.Probe.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Probe} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Probe}
 */
proto.sandboxes.api.v1.Probe.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setInterval(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPositiveThreshold(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNegativeThreshold(value);
      break;
    case 5:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setInitialDelay(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInitialNegativeThreshold(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommand(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTcpPort(value);
      break;
    case 12:
      var value = new proto.sandboxes.api.v1.Probe.HttpGet;
      reader.readMessage(value,proto.sandboxes.api.v1.Probe.HttpGet.deserializeBinaryFromReader);
      msg.setHttpGet(value);
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
proto.sandboxes.api.v1.Probe.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Probe.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Probe} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Probe.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInterval();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getPositiveThreshold();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getNegativeThreshold();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getInitialDelay();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getInitialNegativeThreshold();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getHttpGet();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.sandboxes.api.v1.Probe.HttpGet.serializeBinaryToWriter
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
proto.sandboxes.api.v1.Probe.HttpGet.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Probe.HttpGet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Probe.HttpGet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Probe.HttpGet.toObject = function(includeInstance, msg) {
  var f, obj = {
    port: jspb.Message.getFieldWithDefault(msg, 1, 0),
    path: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.sandboxes.api.v1.Probe.HttpGet}
 */
proto.sandboxes.api.v1.Probe.HttpGet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Probe.HttpGet;
  return proto.sandboxes.api.v1.Probe.HttpGet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Probe.HttpGet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Probe.HttpGet}
 */
proto.sandboxes.api.v1.Probe.HttpGet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
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
proto.sandboxes.api.v1.Probe.HttpGet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Probe.HttpGet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Probe.HttpGet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Probe.HttpGet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPort();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 port = 1;
 * @return {number}
 */
proto.sandboxes.api.v1.Probe.HttpGet.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.Probe.HttpGet} returns this
 */
proto.sandboxes.api.v1.Probe.HttpGet.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.Probe.HttpGet.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Probe.HttpGet} returns this
 */
proto.sandboxes.api.v1.Probe.HttpGet.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.Probe.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Probe} returns this
 */
proto.sandboxes.api.v1.Probe.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Duration interval = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.sandboxes.api.v1.Probe.prototype.getInterval = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.sandboxes.api.v1.Probe} returns this
*/
proto.sandboxes.api.v1.Probe.prototype.setInterval = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Probe} returns this
 */
proto.sandboxes.api.v1.Probe.prototype.clearInterval = function() {
  return this.setInterval(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Probe.prototype.hasInterval = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 positive_threshold = 3;
 * @return {number}
 */
proto.sandboxes.api.v1.Probe.prototype.getPositiveThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.Probe} returns this
 */
proto.sandboxes.api.v1.Probe.prototype.setPositiveThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 negative_threshold = 4;
 * @return {number}
 */
proto.sandboxes.api.v1.Probe.prototype.getNegativeThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.Probe} returns this
 */
proto.sandboxes.api.v1.Probe.prototype.setNegativeThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional google.protobuf.Duration initial_delay = 5;
 * @return {?proto.google.protobuf.Duration}
 */
proto.sandboxes.api.v1.Probe.prototype.getInitialDelay = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 5));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.sandboxes.api.v1.Probe} returns this
*/
proto.sandboxes.api.v1.Probe.prototype.setInitialDelay = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Probe} returns this
 */
proto.sandboxes.api.v1.Probe.prototype.clearInitialDelay = function() {
  return this.setInitialDelay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Probe.prototype.hasInitialDelay = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 initial_negative_threshold = 6;
 * @return {number}
 */
proto.sandboxes.api.v1.Probe.prototype.getInitialNegativeThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.Probe} returns this
 */
proto.sandboxes.api.v1.Probe.prototype.setInitialNegativeThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string command = 10;
 * @return {string}
 */
proto.sandboxes.api.v1.Probe.prototype.getCommand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Probe} returns this
 */
proto.sandboxes.api.v1.Probe.prototype.setCommand = function(value) {
  return jspb.Message.setOneofField(this, 10, proto.sandboxes.api.v1.Probe.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sandboxes.api.v1.Probe} returns this
 */
proto.sandboxes.api.v1.Probe.prototype.clearCommand = function() {
  return jspb.Message.setOneofField(this, 10, proto.sandboxes.api.v1.Probe.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Probe.prototype.hasCommand = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int32 tcp_port = 11;
 * @return {number}
 */
proto.sandboxes.api.v1.Probe.prototype.getTcpPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.Probe} returns this
 */
proto.sandboxes.api.v1.Probe.prototype.setTcpPort = function(value) {
  return jspb.Message.setOneofField(this, 11, proto.sandboxes.api.v1.Probe.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sandboxes.api.v1.Probe} returns this
 */
proto.sandboxes.api.v1.Probe.prototype.clearTcpPort = function() {
  return jspb.Message.setOneofField(this, 11, proto.sandboxes.api.v1.Probe.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Probe.prototype.hasTcpPort = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional HttpGet http_get = 12;
 * @return {?proto.sandboxes.api.v1.Probe.HttpGet}
 */
proto.sandboxes.api.v1.Probe.prototype.getHttpGet = function() {
  return /** @type{?proto.sandboxes.api.v1.Probe.HttpGet} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Probe.HttpGet, 12));
};


/**
 * @param {?proto.sandboxes.api.v1.Probe.HttpGet|undefined} value
 * @return {!proto.sandboxes.api.v1.Probe} returns this
*/
proto.sandboxes.api.v1.Probe.prototype.setHttpGet = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.sandboxes.api.v1.Probe.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Probe} returns this
 */
proto.sandboxes.api.v1.Probe.prototype.clearHttpGet = function() {
  return this.setHttpGet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Probe.prototype.hasHttpGet = function() {
  return jspb.Message.getField(this, 12) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.ServiceProbes.repeatedFields_ = [1,2,3];



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
proto.sandboxes.api.v1.ServiceProbes.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ServiceProbes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ServiceProbes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ServiceProbes.toObject = function(includeInstance, msg) {
  var f, obj = {
    healthList: jspb.Message.toObjectList(msg.getHealthList(),
    proto.sandboxes.api.v1.Probe.toObject, includeInstance),
    readinessList: jspb.Message.toObjectList(msg.getReadinessList(),
    proto.sandboxes.api.v1.Probe.toObject, includeInstance),
    activityList: jspb.Message.toObjectList(msg.getActivityList(),
    proto.sandboxes.api.v1.Probe.toObject, includeInstance),
    activityDetection: (f = msg.getActivityDetection()) && proto.sandboxes.api.v1.ServiceProbes.ActivityDetection.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.ServiceProbes}
 */
proto.sandboxes.api.v1.ServiceProbes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ServiceProbes;
  return proto.sandboxes.api.v1.ServiceProbes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ServiceProbes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ServiceProbes}
 */
proto.sandboxes.api.v1.ServiceProbes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.Probe;
      reader.readMessage(value,proto.sandboxes.api.v1.Probe.deserializeBinaryFromReader);
      msg.addHealth(value);
      break;
    case 2:
      var value = new proto.sandboxes.api.v1.Probe;
      reader.readMessage(value,proto.sandboxes.api.v1.Probe.deserializeBinaryFromReader);
      msg.addReadiness(value);
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.Probe;
      reader.readMessage(value,proto.sandboxes.api.v1.Probe.deserializeBinaryFromReader);
      msg.addActivity(value);
      break;
    case 4:
      var value = new proto.sandboxes.api.v1.ServiceProbes.ActivityDetection;
      reader.readMessage(value,proto.sandboxes.api.v1.ServiceProbes.ActivityDetection.deserializeBinaryFromReader);
      msg.setActivityDetection(value);
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
proto.sandboxes.api.v1.ServiceProbes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ServiceProbes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ServiceProbes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ServiceProbes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHealthList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sandboxes.api.v1.Probe.serializeBinaryToWriter
    );
  }
  f = message.getReadinessList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.sandboxes.api.v1.Probe.serializeBinaryToWriter
    );
  }
  f = message.getActivityList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.sandboxes.api.v1.Probe.serializeBinaryToWriter
    );
  }
  f = message.getActivityDetection();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sandboxes.api.v1.ServiceProbes.ActivityDetection.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.ServiceProbes.ActivityDetection.repeatedFields_ = [1,2];



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
proto.sandboxes.api.v1.ServiceProbes.ActivityDetection.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ServiceProbes.ActivityDetection.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ServiceProbes.ActivityDetection} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ServiceProbes.ActivityDetection.toObject = function(includeInstance, msg) {
  var f, obj = {
    disableBuiltinProbesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    enableBuiltinProbesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.sandboxes.api.v1.ServiceProbes.ActivityDetection}
 */
proto.sandboxes.api.v1.ServiceProbes.ActivityDetection.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ServiceProbes.ActivityDetection;
  return proto.sandboxes.api.v1.ServiceProbes.ActivityDetection.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ServiceProbes.ActivityDetection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ServiceProbes.ActivityDetection}
 */
proto.sandboxes.api.v1.ServiceProbes.ActivityDetection.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.sandboxes.api.v1.UserActivity.SessionType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDisableBuiltinProbes(values[i]);
      }
      break;
    case 2:
      var values = /** @type {!Array<!proto.sandboxes.api.v1.UserActivity.SessionType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addEnableBuiltinProbes(values[i]);
      }
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
proto.sandboxes.api.v1.ServiceProbes.ActivityDetection.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ServiceProbes.ActivityDetection.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ServiceProbes.ActivityDetection} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ServiceProbes.ActivityDetection.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisableBuiltinProbesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
  f = message.getEnableBuiltinProbesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
};


/**
 * repeated UserActivity.SessionType disable_builtin_probes = 1;
 * @return {!Array<!proto.sandboxes.api.v1.UserActivity.SessionType>}
 */
proto.sandboxes.api.v1.ServiceProbes.ActivityDetection.prototype.getDisableBuiltinProbesList = function() {
  return /** @type {!Array<!proto.sandboxes.api.v1.UserActivity.SessionType>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.UserActivity.SessionType>} value
 * @return {!proto.sandboxes.api.v1.ServiceProbes.ActivityDetection} returns this
 */
proto.sandboxes.api.v1.ServiceProbes.ActivityDetection.prototype.setDisableBuiltinProbesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.sandboxes.api.v1.UserActivity.SessionType} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.ServiceProbes.ActivityDetection} returns this
 */
proto.sandboxes.api.v1.ServiceProbes.ActivityDetection.prototype.addDisableBuiltinProbes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ServiceProbes.ActivityDetection} returns this
 */
proto.sandboxes.api.v1.ServiceProbes.ActivityDetection.prototype.clearDisableBuiltinProbesList = function() {
  return this.setDisableBuiltinProbesList([]);
};


/**
 * repeated UserActivity.SessionType enable_builtin_probes = 2;
 * @return {!Array<!proto.sandboxes.api.v1.UserActivity.SessionType>}
 */
proto.sandboxes.api.v1.ServiceProbes.ActivityDetection.prototype.getEnableBuiltinProbesList = function() {
  return /** @type {!Array<!proto.sandboxes.api.v1.UserActivity.SessionType>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.UserActivity.SessionType>} value
 * @return {!proto.sandboxes.api.v1.ServiceProbes.ActivityDetection} returns this
 */
proto.sandboxes.api.v1.ServiceProbes.ActivityDetection.prototype.setEnableBuiltinProbesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.sandboxes.api.v1.UserActivity.SessionType} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.ServiceProbes.ActivityDetection} returns this
 */
proto.sandboxes.api.v1.ServiceProbes.ActivityDetection.prototype.addEnableBuiltinProbes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ServiceProbes.ActivityDetection} returns this
 */
proto.sandboxes.api.v1.ServiceProbes.ActivityDetection.prototype.clearEnableBuiltinProbesList = function() {
  return this.setEnableBuiltinProbesList([]);
};


/**
 * repeated Probe health = 1;
 * @return {!Array<!proto.sandboxes.api.v1.Probe>}
 */
proto.sandboxes.api.v1.ServiceProbes.prototype.getHealthList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.Probe>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.Probe, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.Probe>} value
 * @return {!proto.sandboxes.api.v1.ServiceProbes} returns this
*/
proto.sandboxes.api.v1.ServiceProbes.prototype.setHealthList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sandboxes.api.v1.Probe=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Probe}
 */
proto.sandboxes.api.v1.ServiceProbes.prototype.addHealth = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sandboxes.api.v1.Probe, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ServiceProbes} returns this
 */
proto.sandboxes.api.v1.ServiceProbes.prototype.clearHealthList = function() {
  return this.setHealthList([]);
};


/**
 * repeated Probe readiness = 2;
 * @return {!Array<!proto.sandboxes.api.v1.Probe>}
 */
proto.sandboxes.api.v1.ServiceProbes.prototype.getReadinessList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.Probe>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.Probe, 2));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.Probe>} value
 * @return {!proto.sandboxes.api.v1.ServiceProbes} returns this
*/
proto.sandboxes.api.v1.ServiceProbes.prototype.setReadinessList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sandboxes.api.v1.Probe=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Probe}
 */
proto.sandboxes.api.v1.ServiceProbes.prototype.addReadiness = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sandboxes.api.v1.Probe, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ServiceProbes} returns this
 */
proto.sandboxes.api.v1.ServiceProbes.prototype.clearReadinessList = function() {
  return this.setReadinessList([]);
};


/**
 * repeated Probe activity = 3;
 * @return {!Array<!proto.sandboxes.api.v1.Probe>}
 */
proto.sandboxes.api.v1.ServiceProbes.prototype.getActivityList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.Probe>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.Probe, 3));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.Probe>} value
 * @return {!proto.sandboxes.api.v1.ServiceProbes} returns this
*/
proto.sandboxes.api.v1.ServiceProbes.prototype.setActivityList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.sandboxes.api.v1.Probe=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Probe}
 */
proto.sandboxes.api.v1.ServiceProbes.prototype.addActivity = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.sandboxes.api.v1.Probe, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ServiceProbes} returns this
 */
proto.sandboxes.api.v1.ServiceProbes.prototype.clearActivityList = function() {
  return this.setActivityList([]);
};


/**
 * optional ActivityDetection activity_detection = 4;
 * @return {?proto.sandboxes.api.v1.ServiceProbes.ActivityDetection}
 */
proto.sandboxes.api.v1.ServiceProbes.prototype.getActivityDetection = function() {
  return /** @type{?proto.sandboxes.api.v1.ServiceProbes.ActivityDetection} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.ServiceProbes.ActivityDetection, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.ServiceProbes.ActivityDetection|undefined} value
 * @return {!proto.sandboxes.api.v1.ServiceProbes} returns this
*/
proto.sandboxes.api.v1.ServiceProbes.prototype.setActivityDetection = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.ServiceProbes} returns this
 */
proto.sandboxes.api.v1.ServiceProbes.prototype.clearActivityDetection = function() {
  return this.setActivityDetection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.ServiceProbes.prototype.hasActivityDetection = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.sandboxes.api.v1.UserActivity.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UserActivity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UserActivity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UserActivity.toObject = function(includeInstance, msg) {
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
 * @return {!proto.sandboxes.api.v1.UserActivity}
 */
proto.sandboxes.api.v1.UserActivity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UserActivity;
  return proto.sandboxes.api.v1.UserActivity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UserActivity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UserActivity}
 */
proto.sandboxes.api.v1.UserActivity.deserializeBinaryFromReader = function(msg, reader) {
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
proto.sandboxes.api.v1.UserActivity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UserActivity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UserActivity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UserActivity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.sandboxes.api.v1.UserActivity.SessionType = {
  ANY: 0,
  SSH: 1,
  PORT_FORWARD: 2,
  EXEC: 3,
  CLIENT: 4,
  WEB_TERMINAL: 5,
  WEB_IDE: 6,
  RDP: 7,
  JETBRAINS: 8,
  ENDPOINT: 9,
  AGENT: 10
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
proto.sandboxes.api.v1.Checkout.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Checkout.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Checkout} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Checkout.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    repo: (f = msg.getRepo()) && proto.sandboxes.api.v1.Checkout.Repo.toObject(includeInstance, f),
    versionSpec: jspb.Message.getFieldWithDefault(msg, 3, ""),
    manifest: (f = msg.getManifest()) && proto.sandboxes.api.v1.Checkout.Manifest.toObject(includeInstance, f),
    recursive: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    template: jspb.Message.getFieldWithDefault(msg, 6, ""),
    disableRecursiveCheckout: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    history: (f = msg.getHistory()) && proto.sandboxes.api.v1.Checkout.History.toObject(includeInstance, f),
    prebuild: (f = msg.getPrebuild()) && proto.sandboxes.api.v1.Checkout.Prebuild.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.Checkout}
 */
proto.sandboxes.api.v1.Checkout.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Checkout;
  return proto.sandboxes.api.v1.Checkout.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Checkout} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Checkout}
 */
proto.sandboxes.api.v1.Checkout.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = new proto.sandboxes.api.v1.Checkout.Repo;
      reader.readMessage(value,proto.sandboxes.api.v1.Checkout.Repo.deserializeBinaryFromReader);
      msg.setRepo(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersionSpec(value);
      break;
    case 4:
      var value = new proto.sandboxes.api.v1.Checkout.Manifest;
      reader.readMessage(value,proto.sandboxes.api.v1.Checkout.Manifest.deserializeBinaryFromReader);
      msg.setManifest(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRecursive(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTemplate(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableRecursiveCheckout(value);
      break;
    case 8:
      var value = new proto.sandboxes.api.v1.Checkout.History;
      reader.readMessage(value,proto.sandboxes.api.v1.Checkout.History.deserializeBinaryFromReader);
      msg.setHistory(value);
      break;
    case 9:
      var value = new proto.sandboxes.api.v1.Checkout.Prebuild;
      reader.readMessage(value,proto.sandboxes.api.v1.Checkout.Prebuild.deserializeBinaryFromReader);
      msg.setPrebuild(value);
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
proto.sandboxes.api.v1.Checkout.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Checkout.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Checkout} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Checkout.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRepo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sandboxes.api.v1.Checkout.Repo.serializeBinaryToWriter
    );
  }
  f = message.getVersionSpec();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getManifest();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sandboxes.api.v1.Checkout.Manifest.serializeBinaryToWriter
    );
  }
  f = message.getRecursive();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getTemplate();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDisableRecursiveCheckout();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getHistory();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.sandboxes.api.v1.Checkout.History.serializeBinaryToWriter
    );
  }
  f = message.getPrebuild();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.sandboxes.api.v1.Checkout.Prebuild.serializeBinaryToWriter
    );
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sandboxes.api.v1.Checkout.Repo.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.Checkout.Repo.RepoCase = {
  REPO_NOT_SET: 0,
  GIT: 1,
  GITHUB: 2
};

/**
 * @return {proto.sandboxes.api.v1.Checkout.Repo.RepoCase}
 */
proto.sandboxes.api.v1.Checkout.Repo.prototype.getRepoCase = function() {
  return /** @type {proto.sandboxes.api.v1.Checkout.Repo.RepoCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.Checkout.Repo.oneofGroups_[0]));
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
proto.sandboxes.api.v1.Checkout.Repo.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Checkout.Repo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Checkout.Repo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Checkout.Repo.toObject = function(includeInstance, msg) {
  var f, obj = {
    git: jspb.Message.getFieldWithDefault(msg, 1, ""),
    github: (f = msg.getGithub()) && proto.sandboxes.api.v1.Checkout.Repo.GitHub.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.Checkout.Repo}
 */
proto.sandboxes.api.v1.Checkout.Repo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Checkout.Repo;
  return proto.sandboxes.api.v1.Checkout.Repo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Checkout.Repo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Checkout.Repo}
 */
proto.sandboxes.api.v1.Checkout.Repo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGit(value);
      break;
    case 2:
      var value = new proto.sandboxes.api.v1.Checkout.Repo.GitHub;
      reader.readMessage(value,proto.sandboxes.api.v1.Checkout.Repo.GitHub.deserializeBinaryFromReader);
      msg.setGithub(value);
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
proto.sandboxes.api.v1.Checkout.Repo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Checkout.Repo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Checkout.Repo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Checkout.Repo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGithub();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sandboxes.api.v1.Checkout.Repo.GitHub.serializeBinaryToWriter
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
proto.sandboxes.api.v1.Checkout.Repo.GitHub.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Checkout.Repo.GitHub.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Checkout.Repo.GitHub} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Checkout.Repo.GitHub.toObject = function(includeInstance, msg) {
  var f, obj = {
    org: jspb.Message.getFieldWithDefault(msg, 1, ""),
    repo: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.sandboxes.api.v1.Checkout.Repo.GitHub}
 */
proto.sandboxes.api.v1.Checkout.Repo.GitHub.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Checkout.Repo.GitHub;
  return proto.sandboxes.api.v1.Checkout.Repo.GitHub.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Checkout.Repo.GitHub} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Checkout.Repo.GitHub}
 */
proto.sandboxes.api.v1.Checkout.Repo.GitHub.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrg(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepo(value);
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
proto.sandboxes.api.v1.Checkout.Repo.GitHub.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Checkout.Repo.GitHub.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Checkout.Repo.GitHub} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Checkout.Repo.GitHub.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRepo();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string org = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.Checkout.Repo.GitHub.prototype.getOrg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Checkout.Repo.GitHub} returns this
 */
proto.sandboxes.api.v1.Checkout.Repo.GitHub.prototype.setOrg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string repo = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.Checkout.Repo.GitHub.prototype.getRepo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Checkout.Repo.GitHub} returns this
 */
proto.sandboxes.api.v1.Checkout.Repo.GitHub.prototype.setRepo = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string git = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.Checkout.Repo.prototype.getGit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Checkout.Repo} returns this
 */
proto.sandboxes.api.v1.Checkout.Repo.prototype.setGit = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.sandboxes.api.v1.Checkout.Repo.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sandboxes.api.v1.Checkout.Repo} returns this
 */
proto.sandboxes.api.v1.Checkout.Repo.prototype.clearGit = function() {
  return jspb.Message.setOneofField(this, 1, proto.sandboxes.api.v1.Checkout.Repo.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Checkout.Repo.prototype.hasGit = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GitHub github = 2;
 * @return {?proto.sandboxes.api.v1.Checkout.Repo.GitHub}
 */
proto.sandboxes.api.v1.Checkout.Repo.prototype.getGithub = function() {
  return /** @type{?proto.sandboxes.api.v1.Checkout.Repo.GitHub} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Checkout.Repo.GitHub, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.Checkout.Repo.GitHub|undefined} value
 * @return {!proto.sandboxes.api.v1.Checkout.Repo} returns this
*/
proto.sandboxes.api.v1.Checkout.Repo.prototype.setGithub = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.sandboxes.api.v1.Checkout.Repo.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Checkout.Repo} returns this
 */
proto.sandboxes.api.v1.Checkout.Repo.prototype.clearGithub = function() {
  return this.setGithub(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Checkout.Repo.prototype.hasGithub = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.Checkout.Manifest.repeatedFields_ = [2];



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
proto.sandboxes.api.v1.Checkout.Manifest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Checkout.Manifest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Checkout.Manifest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Checkout.Manifest.toObject = function(includeInstance, msg) {
  var f, obj = {
    override: jspb.Message.getFieldWithDefault(msg, 1, ""),
    overlaysList: jspb.Message.toObjectList(msg.getOverlaysList(),
    proto.sandboxes.api.v1.Checkout.Manifest.Overlay.toObject, includeInstance)
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
 * @return {!proto.sandboxes.api.v1.Checkout.Manifest}
 */
proto.sandboxes.api.v1.Checkout.Manifest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Checkout.Manifest;
  return proto.sandboxes.api.v1.Checkout.Manifest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Checkout.Manifest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Checkout.Manifest}
 */
proto.sandboxes.api.v1.Checkout.Manifest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOverride(value);
      break;
    case 2:
      var value = new proto.sandboxes.api.v1.Checkout.Manifest.Overlay;
      reader.readMessage(value,proto.sandboxes.api.v1.Checkout.Manifest.Overlay.deserializeBinaryFromReader);
      msg.addOverlays(value);
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
proto.sandboxes.api.v1.Checkout.Manifest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Checkout.Manifest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Checkout.Manifest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Checkout.Manifest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOverride();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOverlaysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.sandboxes.api.v1.Checkout.Manifest.Overlay.serializeBinaryToWriter
    );
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sandboxes.api.v1.Checkout.Manifest.Overlay.oneofGroups_ = [[3,4,5]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.Checkout.Manifest.Overlay.SourceCase = {
  SOURCE_NOT_SET: 0,
  FILE: 3,
  CONTENT: 4,
  INLINE: 5
};

/**
 * @return {proto.sandboxes.api.v1.Checkout.Manifest.Overlay.SourceCase}
 */
proto.sandboxes.api.v1.Checkout.Manifest.Overlay.prototype.getSourceCase = function() {
  return /** @type {proto.sandboxes.api.v1.Checkout.Manifest.Overlay.SourceCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.Checkout.Manifest.Overlay.oneofGroups_[0]));
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
proto.sandboxes.api.v1.Checkout.Manifest.Overlay.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Checkout.Manifest.Overlay.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Checkout.Manifest.Overlay} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Checkout.Manifest.Overlay.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    optional: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    file: jspb.Message.getFieldWithDefault(msg, 3, ""),
    content: jspb.Message.getFieldWithDefault(msg, 4, ""),
    inline: (f = msg.getInline()) && sandboxes_api_v1_repo_pb.Repo.Manifest.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.Checkout.Manifest.Overlay}
 */
proto.sandboxes.api.v1.Checkout.Manifest.Overlay.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Checkout.Manifest.Overlay;
  return proto.sandboxes.api.v1.Checkout.Manifest.Overlay.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Checkout.Manifest.Overlay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Checkout.Manifest.Overlay}
 */
proto.sandboxes.api.v1.Checkout.Manifest.Overlay.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOptional(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFile(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 5:
      var value = new sandboxes_api_v1_repo_pb.Repo.Manifest;
      reader.readMessage(value,sandboxes_api_v1_repo_pb.Repo.Manifest.deserializeBinaryFromReader);
      msg.setInline(value);
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
proto.sandboxes.api.v1.Checkout.Manifest.Overlay.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Checkout.Manifest.Overlay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Checkout.Manifest.Overlay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Checkout.Manifest.Overlay.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOptional();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getInline();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      sandboxes_api_v1_repo_pb.Repo.Manifest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.Checkout.Manifest.Overlay.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Checkout.Manifest.Overlay} returns this
 */
proto.sandboxes.api.v1.Checkout.Manifest.Overlay.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool optional = 2;
 * @return {boolean}
 */
proto.sandboxes.api.v1.Checkout.Manifest.Overlay.prototype.getOptional = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.Checkout.Manifest.Overlay} returns this
 */
proto.sandboxes.api.v1.Checkout.Manifest.Overlay.prototype.setOptional = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string file = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.Checkout.Manifest.Overlay.prototype.getFile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Checkout.Manifest.Overlay} returns this
 */
proto.sandboxes.api.v1.Checkout.Manifest.Overlay.prototype.setFile = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.sandboxes.api.v1.Checkout.Manifest.Overlay.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sandboxes.api.v1.Checkout.Manifest.Overlay} returns this
 */
proto.sandboxes.api.v1.Checkout.Manifest.Overlay.prototype.clearFile = function() {
  return jspb.Message.setOneofField(this, 3, proto.sandboxes.api.v1.Checkout.Manifest.Overlay.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Checkout.Manifest.Overlay.prototype.hasFile = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string content = 4;
 * @return {string}
 */
proto.sandboxes.api.v1.Checkout.Manifest.Overlay.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Checkout.Manifest.Overlay} returns this
 */
proto.sandboxes.api.v1.Checkout.Manifest.Overlay.prototype.setContent = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.sandboxes.api.v1.Checkout.Manifest.Overlay.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sandboxes.api.v1.Checkout.Manifest.Overlay} returns this
 */
proto.sandboxes.api.v1.Checkout.Manifest.Overlay.prototype.clearContent = function() {
  return jspb.Message.setOneofField(this, 4, proto.sandboxes.api.v1.Checkout.Manifest.Overlay.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Checkout.Manifest.Overlay.prototype.hasContent = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Repo.Manifest inline = 5;
 * @return {?proto.sandboxes.api.v1.Repo.Manifest}
 */
proto.sandboxes.api.v1.Checkout.Manifest.Overlay.prototype.getInline = function() {
  return /** @type{?proto.sandboxes.api.v1.Repo.Manifest} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_repo_pb.Repo.Manifest, 5));
};


/**
 * @param {?proto.sandboxes.api.v1.Repo.Manifest|undefined} value
 * @return {!proto.sandboxes.api.v1.Checkout.Manifest.Overlay} returns this
*/
proto.sandboxes.api.v1.Checkout.Manifest.Overlay.prototype.setInline = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.sandboxes.api.v1.Checkout.Manifest.Overlay.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Checkout.Manifest.Overlay} returns this
 */
proto.sandboxes.api.v1.Checkout.Manifest.Overlay.prototype.clearInline = function() {
  return this.setInline(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Checkout.Manifest.Overlay.prototype.hasInline = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string override = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.Checkout.Manifest.prototype.getOverride = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Checkout.Manifest} returns this
 */
proto.sandboxes.api.v1.Checkout.Manifest.prototype.setOverride = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Overlay overlays = 2;
 * @return {!Array<!proto.sandboxes.api.v1.Checkout.Manifest.Overlay>}
 */
proto.sandboxes.api.v1.Checkout.Manifest.prototype.getOverlaysList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.Checkout.Manifest.Overlay>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.Checkout.Manifest.Overlay, 2));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.Checkout.Manifest.Overlay>} value
 * @return {!proto.sandboxes.api.v1.Checkout.Manifest} returns this
*/
proto.sandboxes.api.v1.Checkout.Manifest.prototype.setOverlaysList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sandboxes.api.v1.Checkout.Manifest.Overlay=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Checkout.Manifest.Overlay}
 */
proto.sandboxes.api.v1.Checkout.Manifest.prototype.addOverlays = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sandboxes.api.v1.Checkout.Manifest.Overlay, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.Checkout.Manifest} returns this
 */
proto.sandboxes.api.v1.Checkout.Manifest.prototype.clearOverlaysList = function() {
  return this.setOverlaysList([]);
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
proto.sandboxes.api.v1.Checkout.History.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Checkout.History.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Checkout.History} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Checkout.History.toObject = function(includeInstance, msg) {
  var f, obj = {
    depth: jspb.Message.getFieldWithDefault(msg, 1, 0),
    since: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.sandboxes.api.v1.Checkout.History}
 */
proto.sandboxes.api.v1.Checkout.History.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Checkout.History;
  return proto.sandboxes.api.v1.Checkout.History.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Checkout.History} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Checkout.History}
 */
proto.sandboxes.api.v1.Checkout.History.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDepth(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSince(value);
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
proto.sandboxes.api.v1.Checkout.History.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Checkout.History.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Checkout.History} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Checkout.History.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDepth();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSince();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 depth = 1;
 * @return {number}
 */
proto.sandboxes.api.v1.Checkout.History.prototype.getDepth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.Checkout.History} returns this
 */
proto.sandboxes.api.v1.Checkout.History.prototype.setDepth = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string since = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.Checkout.History.prototype.getSince = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Checkout.History} returns this
 */
proto.sandboxes.api.v1.Checkout.History.prototype.setSince = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.Checkout.Prebuild.repeatedFields_ = [2];



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
proto.sandboxes.api.v1.Checkout.Prebuild.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Checkout.Prebuild.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Checkout.Prebuild} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Checkout.Prebuild.toObject = function(includeInstance, msg) {
  var f, obj = {
    disabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    scopesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.sandboxes.api.v1.Checkout.Prebuild}
 */
proto.sandboxes.api.v1.Checkout.Prebuild.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Checkout.Prebuild;
  return proto.sandboxes.api.v1.Checkout.Prebuild.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Checkout.Prebuild} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Checkout.Prebuild}
 */
proto.sandboxes.api.v1.Checkout.Prebuild.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addScopes(value);
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
proto.sandboxes.api.v1.Checkout.Prebuild.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Checkout.Prebuild.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Checkout.Prebuild} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Checkout.Prebuild.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getScopesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional bool disabled = 1;
 * @return {boolean}
 */
proto.sandboxes.api.v1.Checkout.Prebuild.prototype.getDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.Checkout.Prebuild} returns this
 */
proto.sandboxes.api.v1.Checkout.Prebuild.prototype.setDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated string scopes = 2;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.Checkout.Prebuild.prototype.getScopesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.Checkout.Prebuild} returns this
 */
proto.sandboxes.api.v1.Checkout.Prebuild.prototype.setScopesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Checkout.Prebuild} returns this
 */
proto.sandboxes.api.v1.Checkout.Prebuild.prototype.addScopes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.Checkout.Prebuild} returns this
 */
proto.sandboxes.api.v1.Checkout.Prebuild.prototype.clearScopesList = function() {
  return this.setScopesList([]);
};


/**
 * optional string path = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.Checkout.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Checkout} returns this
 */
proto.sandboxes.api.v1.Checkout.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Repo repo = 2;
 * @return {?proto.sandboxes.api.v1.Checkout.Repo}
 */
proto.sandboxes.api.v1.Checkout.prototype.getRepo = function() {
  return /** @type{?proto.sandboxes.api.v1.Checkout.Repo} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Checkout.Repo, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.Checkout.Repo|undefined} value
 * @return {!proto.sandboxes.api.v1.Checkout} returns this
*/
proto.sandboxes.api.v1.Checkout.prototype.setRepo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Checkout} returns this
 */
proto.sandboxes.api.v1.Checkout.prototype.clearRepo = function() {
  return this.setRepo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Checkout.prototype.hasRepo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string version_spec = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.Checkout.prototype.getVersionSpec = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Checkout} returns this
 */
proto.sandboxes.api.v1.Checkout.prototype.setVersionSpec = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Manifest manifest = 4;
 * @return {?proto.sandboxes.api.v1.Checkout.Manifest}
 */
proto.sandboxes.api.v1.Checkout.prototype.getManifest = function() {
  return /** @type{?proto.sandboxes.api.v1.Checkout.Manifest} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Checkout.Manifest, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.Checkout.Manifest|undefined} value
 * @return {!proto.sandboxes.api.v1.Checkout} returns this
*/
proto.sandboxes.api.v1.Checkout.prototype.setManifest = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Checkout} returns this
 */
proto.sandboxes.api.v1.Checkout.prototype.clearManifest = function() {
  return this.setManifest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Checkout.prototype.hasManifest = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool recursive = 5;
 * @return {boolean}
 */
proto.sandboxes.api.v1.Checkout.prototype.getRecursive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.Checkout} returns this
 */
proto.sandboxes.api.v1.Checkout.prototype.setRecursive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string template = 6;
 * @return {string}
 */
proto.sandboxes.api.v1.Checkout.prototype.getTemplate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Checkout} returns this
 */
proto.sandboxes.api.v1.Checkout.prototype.setTemplate = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool disable_recursive_checkout = 7;
 * @return {boolean}
 */
proto.sandboxes.api.v1.Checkout.prototype.getDisableRecursiveCheckout = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.Checkout} returns this
 */
proto.sandboxes.api.v1.Checkout.prototype.setDisableRecursiveCheckout = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional History history = 8;
 * @return {?proto.sandboxes.api.v1.Checkout.History}
 */
proto.sandboxes.api.v1.Checkout.prototype.getHistory = function() {
  return /** @type{?proto.sandboxes.api.v1.Checkout.History} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Checkout.History, 8));
};


/**
 * @param {?proto.sandboxes.api.v1.Checkout.History|undefined} value
 * @return {!proto.sandboxes.api.v1.Checkout} returns this
*/
proto.sandboxes.api.v1.Checkout.prototype.setHistory = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Checkout} returns this
 */
proto.sandboxes.api.v1.Checkout.prototype.clearHistory = function() {
  return this.setHistory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Checkout.prototype.hasHistory = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Prebuild prebuild = 9;
 * @return {?proto.sandboxes.api.v1.Checkout.Prebuild}
 */
proto.sandboxes.api.v1.Checkout.prototype.getPrebuild = function() {
  return /** @type{?proto.sandboxes.api.v1.Checkout.Prebuild} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Checkout.Prebuild, 9));
};


/**
 * @param {?proto.sandboxes.api.v1.Checkout.Prebuild|undefined} value
 * @return {!proto.sandboxes.api.v1.Checkout} returns this
*/
proto.sandboxes.api.v1.Checkout.prototype.setPrebuild = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Checkout} returns this
 */
proto.sandboxes.api.v1.Checkout.prototype.clearPrebuild = function() {
  return this.setPrebuild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Checkout.prototype.hasPrebuild = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sandboxes.api.v1.GlobalProcess.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.GlobalProcess.ProcessCase = {
  PROCESS_NOT_SET: 0,
  RUN: 2,
  SPEC: 3
};

/**
 * @return {proto.sandboxes.api.v1.GlobalProcess.ProcessCase}
 */
proto.sandboxes.api.v1.GlobalProcess.prototype.getProcessCase = function() {
  return /** @type {proto.sandboxes.api.v1.GlobalProcess.ProcessCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.GlobalProcess.oneofGroups_[0]));
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
proto.sandboxes.api.v1.GlobalProcess.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.GlobalProcess.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.GlobalProcess} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.GlobalProcess.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    run: (f = msg.getRun()) && sandboxes_api_v1_repo_pb.Repo.Run.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && sandboxes_api_v1_process_pb.Process.Spec.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.GlobalProcess}
 */
proto.sandboxes.api.v1.GlobalProcess.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.GlobalProcess;
  return proto.sandboxes.api.v1.GlobalProcess.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.GlobalProcess} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.GlobalProcess}
 */
proto.sandboxes.api.v1.GlobalProcess.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new sandboxes_api_v1_repo_pb.Repo.Run;
      reader.readMessage(value,sandboxes_api_v1_repo_pb.Repo.Run.deserializeBinaryFromReader);
      msg.setRun(value);
      break;
    case 3:
      var value = new sandboxes_api_v1_process_pb.Process.Spec;
      reader.readMessage(value,sandboxes_api_v1_process_pb.Process.Spec.deserializeBinaryFromReader);
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
proto.sandboxes.api.v1.GlobalProcess.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.GlobalProcess.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.GlobalProcess} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.GlobalProcess.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRun();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sandboxes_api_v1_repo_pb.Repo.Run.serializeBinaryToWriter
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      sandboxes_api_v1_process_pb.Process.Spec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.GlobalProcess.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.GlobalProcess} returns this
 */
proto.sandboxes.api.v1.GlobalProcess.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Repo.Run run = 2;
 * @return {?proto.sandboxes.api.v1.Repo.Run}
 */
proto.sandboxes.api.v1.GlobalProcess.prototype.getRun = function() {
  return /** @type{?proto.sandboxes.api.v1.Repo.Run} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_repo_pb.Repo.Run, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.Repo.Run|undefined} value
 * @return {!proto.sandboxes.api.v1.GlobalProcess} returns this
*/
proto.sandboxes.api.v1.GlobalProcess.prototype.setRun = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.sandboxes.api.v1.GlobalProcess.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.GlobalProcess} returns this
 */
proto.sandboxes.api.v1.GlobalProcess.prototype.clearRun = function() {
  return this.setRun(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.GlobalProcess.prototype.hasRun = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Process.Spec spec = 3;
 * @return {?proto.sandboxes.api.v1.Process.Spec}
 */
proto.sandboxes.api.v1.GlobalProcess.prototype.getSpec = function() {
  return /** @type{?proto.sandboxes.api.v1.Process.Spec} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_process_pb.Process.Spec, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.Process.Spec|undefined} value
 * @return {!proto.sandboxes.api.v1.GlobalProcess} returns this
*/
proto.sandboxes.api.v1.GlobalProcess.prototype.setSpec = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.sandboxes.api.v1.GlobalProcess.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.GlobalProcess} returns this
 */
proto.sandboxes.api.v1.GlobalProcess.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.GlobalProcess.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sandboxes.api.v1.SetupFile.oneofGroups_ = [[5,6,7,8]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.SetupFile.DataCase = {
  DATA_NOT_SET: 0,
  CONTENT: 5,
  TEMPLATE: 6,
  SYMLINK: 7,
  SECRET: 8
};

/**
 * @return {proto.sandboxes.api.v1.SetupFile.DataCase}
 */
proto.sandboxes.api.v1.SetupFile.prototype.getDataCase = function() {
  return /** @type {proto.sandboxes.api.v1.SetupFile.DataCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.SetupFile.oneofGroups_[0]));
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
proto.sandboxes.api.v1.SetupFile.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.SetupFile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.SetupFile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.SetupFile.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    owner: jspb.Message.getFieldWithDefault(msg, 2, ""),
    mode: jspb.Message.getFieldWithDefault(msg, 3, ""),
    overwrite: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    content: jspb.Message.getFieldWithDefault(msg, 5, ""),
    template: jspb.Message.getFieldWithDefault(msg, 6, ""),
    symlink: jspb.Message.getFieldWithDefault(msg, 7, ""),
    secret: (f = msg.getSecret()) && proto.sandboxes.api.v1.SetupFile.Secret.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.SetupFile}
 */
proto.sandboxes.api.v1.SetupFile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.SetupFile;
  return proto.sandboxes.api.v1.SetupFile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.SetupFile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.SetupFile}
 */
proto.sandboxes.api.v1.SetupFile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMode(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOverwrite(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTemplate(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymlink(value);
      break;
    case 8:
      var value = new proto.sandboxes.api.v1.SetupFile.Secret;
      reader.readMessage(value,proto.sandboxes.api.v1.SetupFile.Secret.deserializeBinaryFromReader);
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
proto.sandboxes.api.v1.SetupFile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.SetupFile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.SetupFile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.SetupFile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOverwrite();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.sandboxes.api.v1.SetupFile.Secret.serializeBinaryToWriter
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
proto.sandboxes.api.v1.SetupFile.Secret.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.SetupFile.Secret.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.SetupFile.Secret} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.SetupFile.Secret.toObject = function(includeInstance, msg) {
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
 * @return {!proto.sandboxes.api.v1.SetupFile.Secret}
 */
proto.sandboxes.api.v1.SetupFile.Secret.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.SetupFile.Secret;
  return proto.sandboxes.api.v1.SetupFile.Secret.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.SetupFile.Secret} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.SetupFile.Secret}
 */
proto.sandboxes.api.v1.SetupFile.Secret.deserializeBinaryFromReader = function(msg, reader) {
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
proto.sandboxes.api.v1.SetupFile.Secret.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.SetupFile.Secret.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.SetupFile.Secret} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.SetupFile.Secret.serializeBinaryToWriter = function(message, writer) {
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
proto.sandboxes.api.v1.SetupFile.Secret.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.SetupFile.Secret} returns this
 */
proto.sandboxes.api.v1.SetupFile.Secret.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string path = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.SetupFile.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.SetupFile} returns this
 */
proto.sandboxes.api.v1.SetupFile.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string owner = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.SetupFile.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.SetupFile} returns this
 */
proto.sandboxes.api.v1.SetupFile.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string mode = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.SetupFile.prototype.getMode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.SetupFile} returns this
 */
proto.sandboxes.api.v1.SetupFile.prototype.setMode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool overwrite = 4;
 * @return {boolean}
 */
proto.sandboxes.api.v1.SetupFile.prototype.getOverwrite = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.SetupFile} returns this
 */
proto.sandboxes.api.v1.SetupFile.prototype.setOverwrite = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string content = 5;
 * @return {string}
 */
proto.sandboxes.api.v1.SetupFile.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.SetupFile} returns this
 */
proto.sandboxes.api.v1.SetupFile.prototype.setContent = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.sandboxes.api.v1.SetupFile.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sandboxes.api.v1.SetupFile} returns this
 */
proto.sandboxes.api.v1.SetupFile.prototype.clearContent = function() {
  return jspb.Message.setOneofField(this, 5, proto.sandboxes.api.v1.SetupFile.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.SetupFile.prototype.hasContent = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string template = 6;
 * @return {string}
 */
proto.sandboxes.api.v1.SetupFile.prototype.getTemplate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.SetupFile} returns this
 */
proto.sandboxes.api.v1.SetupFile.prototype.setTemplate = function(value) {
  return jspb.Message.setOneofField(this, 6, proto.sandboxes.api.v1.SetupFile.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sandboxes.api.v1.SetupFile} returns this
 */
proto.sandboxes.api.v1.SetupFile.prototype.clearTemplate = function() {
  return jspb.Message.setOneofField(this, 6, proto.sandboxes.api.v1.SetupFile.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.SetupFile.prototype.hasTemplate = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string symlink = 7;
 * @return {string}
 */
proto.sandboxes.api.v1.SetupFile.prototype.getSymlink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.SetupFile} returns this
 */
proto.sandboxes.api.v1.SetupFile.prototype.setSymlink = function(value) {
  return jspb.Message.setOneofField(this, 7, proto.sandboxes.api.v1.SetupFile.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sandboxes.api.v1.SetupFile} returns this
 */
proto.sandboxes.api.v1.SetupFile.prototype.clearSymlink = function() {
  return jspb.Message.setOneofField(this, 7, proto.sandboxes.api.v1.SetupFile.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.SetupFile.prototype.hasSymlink = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Secret secret = 8;
 * @return {?proto.sandboxes.api.v1.SetupFile.Secret}
 */
proto.sandboxes.api.v1.SetupFile.prototype.getSecret = function() {
  return /** @type{?proto.sandboxes.api.v1.SetupFile.Secret} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.SetupFile.Secret, 8));
};


/**
 * @param {?proto.sandboxes.api.v1.SetupFile.Secret|undefined} value
 * @return {!proto.sandboxes.api.v1.SetupFile} returns this
*/
proto.sandboxes.api.v1.SetupFile.prototype.setSecret = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.sandboxes.api.v1.SetupFile.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.SetupFile} returns this
 */
proto.sandboxes.api.v1.SetupFile.prototype.clearSecret = function() {
  return this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.SetupFile.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 8) != null;
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
proto.sandboxes.api.v1.ToolPackageSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ToolPackageSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ToolPackageSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ToolPackageSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.sandboxes.api.v1.ToolPackageSpec}
 */
proto.sandboxes.api.v1.ToolPackageSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ToolPackageSpec;
  return proto.sandboxes.api.v1.ToolPackageSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ToolPackageSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ToolPackageSpec}
 */
proto.sandboxes.api.v1.ToolPackageSpec.deserializeBinaryFromReader = function(msg, reader) {
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
proto.sandboxes.api.v1.ToolPackageSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ToolPackageSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ToolPackageSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ToolPackageSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
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
 * optional string name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.ToolPackageSpec.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.ToolPackageSpec} returns this
 */
proto.sandboxes.api.v1.ToolPackageSpec.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.ToolPackageSpec.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.ToolPackageSpec} returns this
 */
proto.sandboxes.api.v1.ToolPackageSpec.prototype.setVersion = function(value) {
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
proto.sandboxes.api.v1.PortForwardRule.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.PortForwardRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.PortForwardRule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.PortForwardRule.toObject = function(includeInstance, msg) {
  var f, obj = {
    local: jspb.Message.getFieldWithDefault(msg, 1, ""),
    remote: (f = msg.getRemote()) && sandboxes_api_v1_endpoint_pb.TargetPort.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.PortForwardRule}
 */
proto.sandboxes.api.v1.PortForwardRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.PortForwardRule;
  return proto.sandboxes.api.v1.PortForwardRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.PortForwardRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.PortForwardRule}
 */
proto.sandboxes.api.v1.PortForwardRule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocal(value);
      break;
    case 2:
      var value = new sandboxes_api_v1_endpoint_pb.TargetPort;
      reader.readMessage(value,sandboxes_api_v1_endpoint_pb.TargetPort.deserializeBinaryFromReader);
      msg.setRemote(value);
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
proto.sandboxes.api.v1.PortForwardRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.PortForwardRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.PortForwardRule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.PortForwardRule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocal();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRemote();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sandboxes_api_v1_endpoint_pb.TargetPort.serializeBinaryToWriter
    );
  }
};


/**
 * optional string local = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.PortForwardRule.prototype.getLocal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.PortForwardRule} returns this
 */
proto.sandboxes.api.v1.PortForwardRule.prototype.setLocal = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TargetPort remote = 2;
 * @return {?proto.sandboxes.api.v1.TargetPort}
 */
proto.sandboxes.api.v1.PortForwardRule.prototype.getRemote = function() {
  return /** @type{?proto.sandboxes.api.v1.TargetPort} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_endpoint_pb.TargetPort, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.TargetPort|undefined} value
 * @return {!proto.sandboxes.api.v1.PortForwardRule} returns this
*/
proto.sandboxes.api.v1.PortForwardRule.prototype.setRemote = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.PortForwardRule} returns this
 */
proto.sandboxes.api.v1.PortForwardRule.prototype.clearRemote = function() {
  return this.setRemote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.PortForwardRule.prototype.hasRemote = function() {
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
proto.sandboxes.api.v1.Scheduler.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Scheduler.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Scheduler} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Scheduler.toObject = function(includeInstance, msg) {
  var f, obj = {
    selector: jspb.Message.getFieldWithDefault(msg, 1, ""),
    config: (f = msg.getConfig()) && google_protobuf_any_pb.Any.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.Scheduler}
 */
proto.sandboxes.api.v1.Scheduler.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Scheduler;
  return proto.sandboxes.api.v1.Scheduler.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Scheduler} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Scheduler}
 */
proto.sandboxes.api.v1.Scheduler.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSelector(value);
      break;
    case 2:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setConfig(value);
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
proto.sandboxes.api.v1.Scheduler.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Scheduler.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Scheduler} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Scheduler.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelector();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional string selector = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.Scheduler.prototype.getSelector = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Scheduler} returns this
 */
proto.sandboxes.api.v1.Scheduler.prototype.setSelector = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Any config = 2;
 * @return {?proto.google.protobuf.Any}
 */
proto.sandboxes.api.v1.Scheduler.prototype.getConfig = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 2));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.sandboxes.api.v1.Scheduler} returns this
*/
proto.sandboxes.api.v1.Scheduler.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Scheduler} returns this
 */
proto.sandboxes.api.v1.Scheduler.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Scheduler.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.ScheduleSpec.repeatedFields_ = [2];



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
proto.sandboxes.api.v1.ScheduleSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ScheduleSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ScheduleSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ScheduleSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    selector: (f = msg.getSelector()) && proto.sandboxes.api.v1.ScheduleSpec.PoolSelector.toObject(includeInstance, f),
    resourceRequestsList: jspb.Message.toObjectList(msg.getResourceRequestsList(),
    proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest.toObject, includeInstance),
    scheduler: (f = msg.getScheduler()) && proto.sandboxes.api.v1.Scheduler.toObject(includeInstance, f),
    storage: (f = msg.getStorage()) && proto.sandboxes.api.v1.ScheduleSpec.Storage.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.ScheduleSpec}
 */
proto.sandboxes.api.v1.ScheduleSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ScheduleSpec;
  return proto.sandboxes.api.v1.ScheduleSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ScheduleSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ScheduleSpec}
 */
proto.sandboxes.api.v1.ScheduleSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.ScheduleSpec.PoolSelector;
      reader.readMessage(value,proto.sandboxes.api.v1.ScheduleSpec.PoolSelector.deserializeBinaryFromReader);
      msg.setSelector(value);
      break;
    case 2:
      var value = new proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest;
      reader.readMessage(value,proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest.deserializeBinaryFromReader);
      msg.addResourceRequests(value);
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.Scheduler;
      reader.readMessage(value,proto.sandboxes.api.v1.Scheduler.deserializeBinaryFromReader);
      msg.setScheduler(value);
      break;
    case 4:
      var value = new proto.sandboxes.api.v1.ScheduleSpec.Storage;
      reader.readMessage(value,proto.sandboxes.api.v1.ScheduleSpec.Storage.deserializeBinaryFromReader);
      msg.setStorage(value);
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
proto.sandboxes.api.v1.ScheduleSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ScheduleSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ScheduleSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ScheduleSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelector();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sandboxes.api.v1.ScheduleSpec.PoolSelector.serializeBinaryToWriter
    );
  }
  f = message.getResourceRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest.serializeBinaryToWriter
    );
  }
  f = message.getScheduler();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sandboxes.api.v1.Scheduler.serializeBinaryToWriter
    );
  }
  f = message.getStorage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sandboxes.api.v1.ScheduleSpec.Storage.serializeBinaryToWriter
    );
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sandboxes.api.v1.ScheduleSpec.PoolSelector.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.ScheduleSpec.PoolSelector.MatcherCase = {
  MATCHER_NOT_SET: 0,
  NAME: 1
};

/**
 * @return {proto.sandboxes.api.v1.ScheduleSpec.PoolSelector.MatcherCase}
 */
proto.sandboxes.api.v1.ScheduleSpec.PoolSelector.prototype.getMatcherCase = function() {
  return /** @type {proto.sandboxes.api.v1.ScheduleSpec.PoolSelector.MatcherCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.ScheduleSpec.PoolSelector.oneofGroups_[0]));
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
proto.sandboxes.api.v1.ScheduleSpec.PoolSelector.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ScheduleSpec.PoolSelector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ScheduleSpec.PoolSelector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ScheduleSpec.PoolSelector.toObject = function(includeInstance, msg) {
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
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.PoolSelector}
 */
proto.sandboxes.api.v1.ScheduleSpec.PoolSelector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ScheduleSpec.PoolSelector;
  return proto.sandboxes.api.v1.ScheduleSpec.PoolSelector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ScheduleSpec.PoolSelector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.PoolSelector}
 */
proto.sandboxes.api.v1.ScheduleSpec.PoolSelector.deserializeBinaryFromReader = function(msg, reader) {
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
proto.sandboxes.api.v1.ScheduleSpec.PoolSelector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ScheduleSpec.PoolSelector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ScheduleSpec.PoolSelector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ScheduleSpec.PoolSelector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
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
proto.sandboxes.api.v1.ScheduleSpec.PoolSelector.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.PoolSelector} returns this
 */
proto.sandboxes.api.v1.ScheduleSpec.PoolSelector.prototype.setName = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.sandboxes.api.v1.ScheduleSpec.PoolSelector.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.PoolSelector} returns this
 */
proto.sandboxes.api.v1.ScheduleSpec.PoolSelector.prototype.clearName = function() {
  return jspb.Message.setOneofField(this, 1, proto.sandboxes.api.v1.ScheduleSpec.PoolSelector.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.ScheduleSpec.PoolSelector.prototype.hasName = function() {
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
proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    request: jspb.Message.getFieldWithDefault(msg, 2, ""),
    limit: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest}
 */
proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest;
  return proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest}
 */
proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequest(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLimit(value);
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
proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequest();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string resource_type = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest.prototype.getResourceType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest} returns this
 */
proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest.prototype.setResourceType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string request = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest.prototype.getRequest = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest} returns this
 */
proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest.prototype.setRequest = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string limit = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest.prototype.getLimit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest} returns this
 */
proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest.prototype.setLimit = function(value) {
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
proto.sandboxes.api.v1.ScheduleSpec.Storage.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ScheduleSpec.Storage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ScheduleSpec.Storage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.toObject = function(includeInstance, msg) {
  var f, obj = {
    storageClass: jspb.Message.getFieldWithDefault(msg, 1, ""),
    requestSizeGb: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limitSizeGb: jspb.Message.getFieldWithDefault(msg, 3, 0),
    localDisk: (f = msg.getLocalDisk()) && proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk.toObject(includeInstance, f),
    engine: (f = msg.getEngine()) && proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.Storage}
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ScheduleSpec.Storage;
  return proto.sandboxes.api.v1.ScheduleSpec.Storage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ScheduleSpec.Storage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.Storage}
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStorageClass(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRequestSizeGb(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimitSizeGb(value);
      break;
    case 4:
      var value = new proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk;
      reader.readMessage(value,proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk.deserializeBinaryFromReader);
      msg.setLocalDisk(value);
      break;
    case 5:
      var value = new proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine;
      reader.readMessage(value,proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.deserializeBinaryFromReader);
      msg.setEngine(value);
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
proto.sandboxes.api.v1.ScheduleSpec.Storage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ScheduleSpec.Storage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ScheduleSpec.Storage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStorageClass();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequestSizeGb();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getLimitSizeGb();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getLocalDisk();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk.serializeBinaryToWriter
    );
  }
  f = message.getEngine();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.serializeBinaryToWriter
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
proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk.toObject = function(includeInstance, msg) {
  var f, obj = {
    mountPoint: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fallbackEmptyDir: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk}
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk;
  return proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk}
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMountPoint(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFallbackEmptyDir(value);
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
proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMountPoint();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFallbackEmptyDir();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string mount_point = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk.prototype.getMountPoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk} returns this
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk.prototype.setMountPoint = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool fallback_empty_dir = 2;
 * @return {boolean}
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk.prototype.getFallbackEmptyDir = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk} returns this
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk.prototype.setFallbackEmptyDir = function(value) {
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
proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.BackendCase = {
  BACKEND_NOT_SET: 0,
  FILE: 1
};

/**
 * @return {proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.BackendCase}
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.prototype.getBackendCase = function() {
  return /** @type {proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.BackendCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.oneofGroups_[0]));
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
proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.toObject = function(includeInstance, msg) {
  var f, obj = {
    file: (f = msg.getFile()) && proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine}
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine;
  return proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine}
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File;
      reader.readMessage(value,proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File.deserializeBinaryFromReader);
      msg.setFile(value);
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
proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File.serializeBinaryToWriter
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
proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File.toObject = function(includeInstance, msg) {
  var f, obj = {
    server: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File}
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File;
  return proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File}
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServer(value);
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
proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServer();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string server = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File.prototype.getServer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File} returns this
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File.prototype.setServer = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional File file = 1;
 * @return {?proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File}
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.prototype.getFile = function() {
  return /** @type{?proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.File|undefined} value
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine} returns this
*/
proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.prototype.setFile = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine} returns this
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.prototype.clearFile = function() {
  return this.setFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine.prototype.hasFile = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string storage_class = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.prototype.getStorageClass = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.Storage} returns this
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.prototype.setStorageClass = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 request_size_gb = 2;
 * @return {number}
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.prototype.getRequestSizeGb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.Storage} returns this
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.prototype.setRequestSizeGb = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 limit_size_gb = 3;
 * @return {number}
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.prototype.getLimitSizeGb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.Storage} returns this
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.prototype.setLimitSizeGb = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional LocalDisk local_disk = 4;
 * @return {?proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk}
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.prototype.getLocalDisk = function() {
  return /** @type{?proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.ScheduleSpec.Storage.LocalDisk|undefined} value
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.Storage} returns this
*/
proto.sandboxes.api.v1.ScheduleSpec.Storage.prototype.setLocalDisk = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.Storage} returns this
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.prototype.clearLocalDisk = function() {
  return this.setLocalDisk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.prototype.hasLocalDisk = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Engine engine = 5;
 * @return {?proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine}
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.prototype.getEngine = function() {
  return /** @type{?proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine, 5));
};


/**
 * @param {?proto.sandboxes.api.v1.ScheduleSpec.Storage.Engine|undefined} value
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.Storage} returns this
*/
proto.sandboxes.api.v1.ScheduleSpec.Storage.prototype.setEngine = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.Storage} returns this
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.prototype.clearEngine = function() {
  return this.setEngine(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.ScheduleSpec.Storage.prototype.hasEngine = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional PoolSelector selector = 1;
 * @return {?proto.sandboxes.api.v1.ScheduleSpec.PoolSelector}
 */
proto.sandboxes.api.v1.ScheduleSpec.prototype.getSelector = function() {
  return /** @type{?proto.sandboxes.api.v1.ScheduleSpec.PoolSelector} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.ScheduleSpec.PoolSelector, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.ScheduleSpec.PoolSelector|undefined} value
 * @return {!proto.sandboxes.api.v1.ScheduleSpec} returns this
*/
proto.sandboxes.api.v1.ScheduleSpec.prototype.setSelector = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.ScheduleSpec} returns this
 */
proto.sandboxes.api.v1.ScheduleSpec.prototype.clearSelector = function() {
  return this.setSelector(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.ScheduleSpec.prototype.hasSelector = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ResourceRequest resource_requests = 2;
 * @return {!Array<!proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest>}
 */
proto.sandboxes.api.v1.ScheduleSpec.prototype.getResourceRequestsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest, 2));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest>} value
 * @return {!proto.sandboxes.api.v1.ScheduleSpec} returns this
*/
proto.sandboxes.api.v1.ScheduleSpec.prototype.setResourceRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest}
 */
proto.sandboxes.api.v1.ScheduleSpec.prototype.addResourceRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sandboxes.api.v1.ScheduleSpec.ResourceRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ScheduleSpec} returns this
 */
proto.sandboxes.api.v1.ScheduleSpec.prototype.clearResourceRequestsList = function() {
  return this.setResourceRequestsList([]);
};


/**
 * optional Scheduler scheduler = 3;
 * @return {?proto.sandboxes.api.v1.Scheduler}
 */
proto.sandboxes.api.v1.ScheduleSpec.prototype.getScheduler = function() {
  return /** @type{?proto.sandboxes.api.v1.Scheduler} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Scheduler, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.Scheduler|undefined} value
 * @return {!proto.sandboxes.api.v1.ScheduleSpec} returns this
*/
proto.sandboxes.api.v1.ScheduleSpec.prototype.setScheduler = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.ScheduleSpec} returns this
 */
proto.sandboxes.api.v1.ScheduleSpec.prototype.clearScheduler = function() {
  return this.setScheduler(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.ScheduleSpec.prototype.hasScheduler = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Storage storage = 4;
 * @return {?proto.sandboxes.api.v1.ScheduleSpec.Storage}
 */
proto.sandboxes.api.v1.ScheduleSpec.prototype.getStorage = function() {
  return /** @type{?proto.sandboxes.api.v1.ScheduleSpec.Storage} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.ScheduleSpec.Storage, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.ScheduleSpec.Storage|undefined} value
 * @return {!proto.sandboxes.api.v1.ScheduleSpec} returns this
*/
proto.sandboxes.api.v1.ScheduleSpec.prototype.setStorage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.ScheduleSpec} returns this
 */
proto.sandboxes.api.v1.ScheduleSpec.prototype.clearStorage = function() {
  return this.setStorage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.ScheduleSpec.prototype.hasStorage = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.sandboxes.api.v1);
