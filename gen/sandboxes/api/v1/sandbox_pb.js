// source: sandboxes/api/v1/sandbox.proto
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
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var sandboxes_api_v1_common_pb = require('../../../sandboxes/api/v1/common_pb.js');
goog.object.extend(proto, sandboxes_api_v1_common_pb);
var sandboxes_api_v1_object_pb = require('../../../sandboxes/api/v1/object_pb.js');
goog.object.extend(proto, sandboxes_api_v1_object_pb);
var sandboxes_api_v1_app_pb = require('../../../sandboxes/api/v1/app_pb.js');
goog.object.extend(proto, sandboxes_api_v1_app_pb);
var sandboxes_api_v1_endpoint_pb = require('../../../sandboxes/api/v1/endpoint_pb.js');
goog.object.extend(proto, sandboxes_api_v1_endpoint_pb);
var sandboxes_api_v1_process_pb = require('../../../sandboxes/api/v1/process_pb.js');
goog.object.extend(proto, sandboxes_api_v1_process_pb);
var sandboxes_api_v1_system_pb = require('../../../sandboxes/api/v1/system_pb.js');
goog.object.extend(proto, sandboxes_api_v1_system_pb);
var sandboxes_api_v1_notification_pb = require('../../../sandboxes/api/v1/notification_pb.js');
goog.object.extend(proto, sandboxes_api_v1_notification_pb);
goog.exportSymbol('proto.sandboxes.api.v1.AgentInfo', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AgentStatus', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AgentStatus.Features', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AgentStatus.Features.RDP', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AgentStatus.Notice', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AgentStatus.Notice.Message', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AgentStatus.Overview', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AgentStatus.Overview.State', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AgentStatus.PortForward', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AgentStatus.Restarting', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AgentStatus.Restriction', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.AgentStatus.UserSessions', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Composer', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Composer.Dynamic', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Composer.Exclusion', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Composer.Exclusion.Mode', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Composer.FromApp', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Composer.FromAppDefinition', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Composer.MethodCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.EndpointConfig', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.State', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ProbeStatus', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ProbeStatus.Result', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ResourceGroup', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ResourceGroupStatus', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.AccessControl', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.AccessControl.SharedMode', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.Activities', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.Activities.JobExecution', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.Activities.Pooling', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.Activities.Pooling.State', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.Lifecycle', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.Lifecycle.Stage', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.OperationalState', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.OperationalState.State', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.Snapshot', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.Spec', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.Status', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.Status.Aggregated', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.Status.Aggregated.AlertLevel', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Sandbox.Status.Aggregated.RunStage', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Workload', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Workload.Container', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Workload.Dependency', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Workload.WorkloadCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Workload.Workspace', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Workload.Workspace.Mode', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.Workload.Workspace.SetupControl', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.WorkloadConfig', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.WorkloadConfig.ConfigCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.WorkloadConfig.Workspace', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.WorkloadOverrides', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.WorkloadOverrides.Rule', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.ActionCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.WorkloadOverrides.Rule.RuleCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.WorkloadStatus', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.WorkloadStatus.Activities', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.WorkloadStatus.Usage', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage', null, global);
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
proto.sandboxes.api.v1.Composer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sandboxes.api.v1.Composer.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.Composer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Composer.displayName = 'proto.sandboxes.api.v1.Composer';
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
proto.sandboxes.api.v1.Composer.FromApp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.Composer.FromApp.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.Composer.FromApp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Composer.FromApp.displayName = 'proto.sandboxes.api.v1.Composer.FromApp';
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
proto.sandboxes.api.v1.Composer.FromAppDefinition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.Composer.FromAppDefinition.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.Composer.FromAppDefinition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Composer.FromAppDefinition.displayName = 'proto.sandboxes.api.v1.Composer.FromAppDefinition';
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
proto.sandboxes.api.v1.Composer.Exclusion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Composer.Exclusion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Composer.Exclusion.displayName = 'proto.sandboxes.api.v1.Composer.Exclusion';
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
proto.sandboxes.api.v1.Composer.Dynamic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Composer.Dynamic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Composer.Dynamic.displayName = 'proto.sandboxes.api.v1.Composer.Dynamic';
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
proto.sandboxes.api.v1.WorkloadOverrides = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.WorkloadOverrides.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.WorkloadOverrides, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.WorkloadOverrides.displayName = 'proto.sandboxes.api.v1.WorkloadOverrides';
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
proto.sandboxes.api.v1.WorkloadOverrides.Rule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sandboxes.api.v1.WorkloadOverrides.Rule.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.WorkloadOverrides.Rule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.WorkloadOverrides.Rule.displayName = 'proto.sandboxes.api.v1.WorkloadOverrides.Rule';
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
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.displayName = 'proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout';
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
proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec.displayName = 'proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec';
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
proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule.displayName = 'proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule';
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
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.displayName = 'proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property';
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
proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars.displayName = 'proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars';
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
proto.sandboxes.api.v1.Sandbox = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Sandbox, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Sandbox.displayName = 'proto.sandboxes.api.v1.Sandbox';
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
proto.sandboxes.api.v1.Sandbox.OperationalState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Sandbox.OperationalState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Sandbox.OperationalState.displayName = 'proto.sandboxes.api.v1.Sandbox.OperationalState';
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
proto.sandboxes.api.v1.Sandbox.AccessControl = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.Sandbox.AccessControl.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.Sandbox.AccessControl, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Sandbox.AccessControl.displayName = 'proto.sandboxes.api.v1.Sandbox.AccessControl';
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
proto.sandboxes.api.v1.Sandbox.Spec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.Sandbox.Spec.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.Sandbox.Spec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Sandbox.Spec.displayName = 'proto.sandboxes.api.v1.Sandbox.Spec';
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
proto.sandboxes.api.v1.Sandbox.Status = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.Sandbox.Status.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.Sandbox.Status, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Sandbox.Status.displayName = 'proto.sandboxes.api.v1.Sandbox.Status';
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
proto.sandboxes.api.v1.Sandbox.Status.Aggregated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Sandbox.Status.Aggregated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Sandbox.Status.Aggregated.displayName = 'proto.sandboxes.api.v1.Sandbox.Status.Aggregated';
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
proto.sandboxes.api.v1.Sandbox.Activities = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Sandbox.Activities, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Sandbox.Activities.displayName = 'proto.sandboxes.api.v1.Sandbox.Activities';
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
proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic.displayName = 'proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic';
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.displayName = 'proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes';
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork.displayName = 'proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork';
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef.displayName = 'proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef';
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload.displayName = 'proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload';
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.displayName = 'proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception';
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward.displayName = 'proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward';
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount.displayName = 'proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount';
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping.displayName = 'proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping';
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.displayName = 'proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition';
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader.displayName = 'proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader';
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint.displayName = 'proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint';
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.displayName = 'proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload';
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port.displayName = 'proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port';
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
proto.sandboxes.api.v1.Sandbox.Activities.JobExecution = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Sandbox.Activities.JobExecution, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Sandbox.Activities.JobExecution.displayName = 'proto.sandboxes.api.v1.Sandbox.Activities.JobExecution';
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
proto.sandboxes.api.v1.Sandbox.Activities.Pooling = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Sandbox.Activities.Pooling, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Sandbox.Activities.Pooling.displayName = 'proto.sandboxes.api.v1.Sandbox.Activities.Pooling';
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
proto.sandboxes.api.v1.Sandbox.Lifecycle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Sandbox.Lifecycle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Sandbox.Lifecycle.displayName = 'proto.sandboxes.api.v1.Sandbox.Lifecycle';
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
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.displayName = 'proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition';
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
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker.displayName = 'proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker';
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
proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState.displayName = 'proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState';
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
proto.sandboxes.api.v1.Sandbox.Snapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Sandbox.Snapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Sandbox.Snapshot.displayName = 'proto.sandboxes.api.v1.Sandbox.Snapshot';
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
proto.sandboxes.api.v1.WorkloadConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sandboxes.api.v1.WorkloadConfig.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.WorkloadConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.WorkloadConfig.displayName = 'proto.sandboxes.api.v1.WorkloadConfig';
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
proto.sandboxes.api.v1.WorkloadConfig.Workspace = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.WorkloadConfig.Workspace, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.WorkloadConfig.Workspace.displayName = 'proto.sandboxes.api.v1.WorkloadConfig.Workspace';
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
proto.sandboxes.api.v1.EndpointConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.EndpointConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.EndpointConfig.displayName = 'proto.sandboxes.api.v1.EndpointConfig';
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
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.displayName = 'proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig';
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
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules.displayName = 'proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules';
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
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode.displayName = 'proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode';
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
proto.sandboxes.api.v1.Workload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sandboxes.api.v1.Workload.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.Workload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Workload.displayName = 'proto.sandboxes.api.v1.Workload';
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
proto.sandboxes.api.v1.Workload.Workspace = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Workload.Workspace, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Workload.Workspace.displayName = 'proto.sandboxes.api.v1.Workload.Workspace';
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
proto.sandboxes.api.v1.Workload.Workspace.SetupControl = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Workload.Workspace.SetupControl, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Workload.Workspace.SetupControl.displayName = 'proto.sandboxes.api.v1.Workload.Workspace.SetupControl';
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
proto.sandboxes.api.v1.Workload.Dependency = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Workload.Dependency, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Workload.Dependency.displayName = 'proto.sandboxes.api.v1.Workload.Dependency';
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
proto.sandboxes.api.v1.Workload.Container = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.Workload.Container, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.Workload.Container.displayName = 'proto.sandboxes.api.v1.Workload.Container';
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
proto.sandboxes.api.v1.WorkloadStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.WorkloadStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.WorkloadStatus.displayName = 'proto.sandboxes.api.v1.WorkloadStatus';
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
proto.sandboxes.api.v1.WorkloadStatus.Usage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.WorkloadStatus.Usage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.WorkloadStatus.Usage.displayName = 'proto.sandboxes.api.v1.WorkloadStatus.Usage';
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
proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU.displayName = 'proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU';
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
proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory.displayName = 'proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory';
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
proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage.displayName = 'proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage';
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
proto.sandboxes.api.v1.WorkloadStatus.Activities = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.WorkloadStatus.Activities, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.WorkloadStatus.Activities.displayName = 'proto.sandboxes.api.v1.WorkloadStatus.Activities';
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
proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.displayName = 'proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic';
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
proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState.displayName = 'proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState';
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
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.displayName = 'proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes';
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
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork.displayName = 'proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork';
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
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.displayName = 'proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception';
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
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload.displayName = 'proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload';
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
proto.sandboxes.api.v1.ResourceGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.ResourceGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ResourceGroup.displayName = 'proto.sandboxes.api.v1.ResourceGroup';
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
proto.sandboxes.api.v1.ResourceGroupStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.ResourceGroupStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ResourceGroupStatus.displayName = 'proto.sandboxes.api.v1.ResourceGroupStatus';
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
proto.sandboxes.api.v1.ProbeStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.ProbeStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ProbeStatus.displayName = 'proto.sandboxes.api.v1.ProbeStatus';
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
proto.sandboxes.api.v1.ProbeStatus.Result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.ProbeStatus.Result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ProbeStatus.Result.displayName = 'proto.sandboxes.api.v1.ProbeStatus.Result';
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
proto.sandboxes.api.v1.AgentInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.AgentInfo.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.AgentInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AgentInfo.displayName = 'proto.sandboxes.api.v1.AgentInfo';
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
proto.sandboxes.api.v1.AgentStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.AgentStatus.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.AgentStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AgentStatus.displayName = 'proto.sandboxes.api.v1.AgentStatus';
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
proto.sandboxes.api.v1.AgentStatus.Overview = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.AgentStatus.Overview, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AgentStatus.Overview.displayName = 'proto.sandboxes.api.v1.AgentStatus.Overview';
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
proto.sandboxes.api.v1.AgentStatus.PortForward = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.AgentStatus.PortForward.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.AgentStatus.PortForward, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AgentStatus.PortForward.displayName = 'proto.sandboxes.api.v1.AgentStatus.PortForward';
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
proto.sandboxes.api.v1.AgentStatus.UserSessions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.AgentStatus.UserSessions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AgentStatus.UserSessions.displayName = 'proto.sandboxes.api.v1.AgentStatus.UserSessions';
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
proto.sandboxes.api.v1.AgentStatus.Features = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.AgentStatus.Features, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AgentStatus.Features.displayName = 'proto.sandboxes.api.v1.AgentStatus.Features';
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
proto.sandboxes.api.v1.AgentStatus.Features.RDP = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.AgentStatus.Features.RDP, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AgentStatus.Features.RDP.displayName = 'proto.sandboxes.api.v1.AgentStatus.Features.RDP';
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
proto.sandboxes.api.v1.AgentStatus.Restarting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.AgentStatus.Restarting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AgentStatus.Restarting.displayName = 'proto.sandboxes.api.v1.AgentStatus.Restarting';
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
proto.sandboxes.api.v1.AgentStatus.Notice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.AgentStatus.Notice.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.AgentStatus.Notice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AgentStatus.Notice.displayName = 'proto.sandboxes.api.v1.AgentStatus.Notice';
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
proto.sandboxes.api.v1.AgentStatus.Notice.Message = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.AgentStatus.Notice.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AgentStatus.Notice.Message.displayName = 'proto.sandboxes.api.v1.AgentStatus.Notice.Message';
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
proto.sandboxes.api.v1.AgentStatus.Restriction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.AgentStatus.Restriction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.AgentStatus.Restriction.displayName = 'proto.sandboxes.api.v1.AgentStatus.Restriction';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sandboxes.api.v1.Composer.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.Composer.MethodCase = {
  METHOD_NOT_SET: 0,
  FROM_APP: 1,
  FROM_APP_DEFINITION: 2
};

/**
 * @return {proto.sandboxes.api.v1.Composer.MethodCase}
 */
proto.sandboxes.api.v1.Composer.prototype.getMethodCase = function() {
  return /** @type {proto.sandboxes.api.v1.Composer.MethodCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.Composer.oneofGroups_[0]));
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
proto.sandboxes.api.v1.Composer.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Composer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Composer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Composer.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromApp: (f = msg.getFromApp()) && proto.sandboxes.api.v1.Composer.FromApp.toObject(includeInstance, f),
    fromAppDefinition: (f = msg.getFromAppDefinition()) && proto.sandboxes.api.v1.Composer.FromAppDefinition.toObject(includeInstance, f),
    dynamic: (f = msg.getDynamic()) && proto.sandboxes.api.v1.Composer.Dynamic.toObject(includeInstance, f),
    scheduler: (f = msg.getScheduler()) && sandboxes_api_v1_app_pb.Scheduler.toObject(includeInstance, f),
    exclusionsMap: (f = msg.getExclusionsMap()) ? f.toObject(includeInstance, proto.sandboxes.api.v1.Composer.Exclusion.toObject) : []
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
 * @return {!proto.sandboxes.api.v1.Composer}
 */
proto.sandboxes.api.v1.Composer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Composer;
  return proto.sandboxes.api.v1.Composer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Composer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Composer}
 */
proto.sandboxes.api.v1.Composer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.Composer.FromApp;
      reader.readMessage(value,proto.sandboxes.api.v1.Composer.FromApp.deserializeBinaryFromReader);
      msg.setFromApp(value);
      break;
    case 2:
      var value = new proto.sandboxes.api.v1.Composer.FromAppDefinition;
      reader.readMessage(value,proto.sandboxes.api.v1.Composer.FromAppDefinition.deserializeBinaryFromReader);
      msg.setFromAppDefinition(value);
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.Composer.Dynamic;
      reader.readMessage(value,proto.sandboxes.api.v1.Composer.Dynamic.deserializeBinaryFromReader);
      msg.setDynamic(value);
      break;
    case 4:
      var value = new sandboxes_api_v1_app_pb.Scheduler;
      reader.readMessage(value,sandboxes_api_v1_app_pb.Scheduler.deserializeBinaryFromReader);
      msg.setScheduler(value);
      break;
    case 5:
      var value = msg.getExclusionsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.sandboxes.api.v1.Composer.Exclusion.deserializeBinaryFromReader, "", new proto.sandboxes.api.v1.Composer.Exclusion());
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
proto.sandboxes.api.v1.Composer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Composer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Composer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Composer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFromApp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sandboxes.api.v1.Composer.FromApp.serializeBinaryToWriter
    );
  }
  f = message.getFromAppDefinition();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sandboxes.api.v1.Composer.FromAppDefinition.serializeBinaryToWriter
    );
  }
  f = message.getDynamic();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sandboxes.api.v1.Composer.Dynamic.serializeBinaryToWriter
    );
  }
  f = message.getScheduler();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      sandboxes_api_v1_app_pb.Scheduler.serializeBinaryToWriter
    );
  }
  f = message.getExclusionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.sandboxes.api.v1.Composer.Exclusion.serializeBinaryToWriter);
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.Composer.FromApp.repeatedFields_ = [5];



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
proto.sandboxes.api.v1.Composer.FromApp.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Composer.FromApp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Composer.FromApp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Composer.FromApp.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    overridesMap: (f = msg.getOverridesMap()) ? f.toObject(includeInstance, proto.sandboxes.api.v1.WorkloadOverrides.toObject) : [],
    workloadConfigsMap: (f = msg.getWorkloadConfigsMap()) ? f.toObject(includeInstance, proto.sandboxes.api.v1.WorkloadConfig.toObject) : [],
    endpointConfigsMap: (f = msg.getEndpointConfigsMap()) ? f.toObject(includeInstance, proto.sandboxes.api.v1.EndpointConfig.toObject) : [],
    envList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.sandboxes.api.v1.Composer.FromApp}
 */
proto.sandboxes.api.v1.Composer.FromApp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Composer.FromApp;
  return proto.sandboxes.api.v1.Composer.FromApp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Composer.FromApp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Composer.FromApp}
 */
proto.sandboxes.api.v1.Composer.FromApp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 2:
      var value = msg.getOverridesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.sandboxes.api.v1.WorkloadOverrides.deserializeBinaryFromReader, "", new proto.sandboxes.api.v1.WorkloadOverrides());
         });
      break;
    case 3:
      var value = msg.getWorkloadConfigsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.sandboxes.api.v1.WorkloadConfig.deserializeBinaryFromReader, "", new proto.sandboxes.api.v1.WorkloadConfig());
         });
      break;
    case 4:
      var value = msg.getEndpointConfigsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.sandboxes.api.v1.EndpointConfig.deserializeBinaryFromReader, "", new proto.sandboxes.api.v1.EndpointConfig());
         });
      break;
    case 5:
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
proto.sandboxes.api.v1.Composer.FromApp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Composer.FromApp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Composer.FromApp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Composer.FromApp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOverridesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.sandboxes.api.v1.WorkloadOverrides.serializeBinaryToWriter);
  }
  f = message.getWorkloadConfigsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.sandboxes.api.v1.WorkloadConfig.serializeBinaryToWriter);
  }
  f = message.getEndpointConfigsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.sandboxes.api.v1.EndpointConfig.serializeBinaryToWriter);
  }
  f = message.getEnvList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional string app_id = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.Composer.FromApp.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Composer.FromApp} returns this
 */
proto.sandboxes.api.v1.Composer.FromApp.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, WorkloadOverrides> overrides = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.sandboxes.api.v1.WorkloadOverrides>}
 */
proto.sandboxes.api.v1.Composer.FromApp.prototype.getOverridesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.sandboxes.api.v1.WorkloadOverrides>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.sandboxes.api.v1.WorkloadOverrides));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.Composer.FromApp} returns this
 */
proto.sandboxes.api.v1.Composer.FromApp.prototype.clearOverridesMap = function() {
  this.getOverridesMap().clear();
  return this;};


/**
 * map<string, WorkloadConfig> workload_configs = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.sandboxes.api.v1.WorkloadConfig>}
 */
proto.sandboxes.api.v1.Composer.FromApp.prototype.getWorkloadConfigsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.sandboxes.api.v1.WorkloadConfig>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.sandboxes.api.v1.WorkloadConfig));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.Composer.FromApp} returns this
 */
proto.sandboxes.api.v1.Composer.FromApp.prototype.clearWorkloadConfigsMap = function() {
  this.getWorkloadConfigsMap().clear();
  return this;};


/**
 * map<string, EndpointConfig> endpoint_configs = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.sandboxes.api.v1.EndpointConfig>}
 */
proto.sandboxes.api.v1.Composer.FromApp.prototype.getEndpointConfigsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.sandboxes.api.v1.EndpointConfig>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.sandboxes.api.v1.EndpointConfig));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.Composer.FromApp} returns this
 */
proto.sandboxes.api.v1.Composer.FromApp.prototype.clearEndpointConfigsMap = function() {
  this.getEndpointConfigsMap().clear();
  return this;};


/**
 * repeated string env = 5;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.Composer.FromApp.prototype.getEnvList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.Composer.FromApp} returns this
 */
proto.sandboxes.api.v1.Composer.FromApp.prototype.setEnvList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Composer.FromApp} returns this
 */
proto.sandboxes.api.v1.Composer.FromApp.prototype.addEnv = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.Composer.FromApp} returns this
 */
proto.sandboxes.api.v1.Composer.FromApp.prototype.clearEnvList = function() {
  return this.setEnvList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.Composer.FromAppDefinition.repeatedFields_ = [3];



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
proto.sandboxes.api.v1.Composer.FromAppDefinition.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Composer.FromAppDefinition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Composer.FromAppDefinition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Composer.FromAppDefinition.toObject = function(includeInstance, msg) {
  var f, obj = {
    appDefinition: (f = msg.getAppDefinition()) && sandboxes_api_v1_app_pb.AppDefinition.toObject(includeInstance, f),
    workloadConfigsMap: (f = msg.getWorkloadConfigsMap()) ? f.toObject(includeInstance, proto.sandboxes.api.v1.WorkloadConfig.toObject) : [],
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
 * @return {!proto.sandboxes.api.v1.Composer.FromAppDefinition}
 */
proto.sandboxes.api.v1.Composer.FromAppDefinition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Composer.FromAppDefinition;
  return proto.sandboxes.api.v1.Composer.FromAppDefinition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Composer.FromAppDefinition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Composer.FromAppDefinition}
 */
proto.sandboxes.api.v1.Composer.FromAppDefinition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_app_pb.AppDefinition;
      reader.readMessage(value,sandboxes_api_v1_app_pb.AppDefinition.deserializeBinaryFromReader);
      msg.setAppDefinition(value);
      break;
    case 2:
      var value = msg.getWorkloadConfigsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.sandboxes.api.v1.WorkloadConfig.deserializeBinaryFromReader, "", new proto.sandboxes.api.v1.WorkloadConfig());
         });
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
proto.sandboxes.api.v1.Composer.FromAppDefinition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Composer.FromAppDefinition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Composer.FromAppDefinition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Composer.FromAppDefinition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppDefinition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_app_pb.AppDefinition.serializeBinaryToWriter
    );
  }
  f = message.getWorkloadConfigsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.sandboxes.api.v1.WorkloadConfig.serializeBinaryToWriter);
  }
  f = message.getEnvList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional AppDefinition app_definition = 1;
 * @return {?proto.sandboxes.api.v1.AppDefinition}
 */
proto.sandboxes.api.v1.Composer.FromAppDefinition.prototype.getAppDefinition = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_app_pb.AppDefinition, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition|undefined} value
 * @return {!proto.sandboxes.api.v1.Composer.FromAppDefinition} returns this
*/
proto.sandboxes.api.v1.Composer.FromAppDefinition.prototype.setAppDefinition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Composer.FromAppDefinition} returns this
 */
proto.sandboxes.api.v1.Composer.FromAppDefinition.prototype.clearAppDefinition = function() {
  return this.setAppDefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Composer.FromAppDefinition.prototype.hasAppDefinition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<string, WorkloadConfig> workload_configs = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.sandboxes.api.v1.WorkloadConfig>}
 */
proto.sandboxes.api.v1.Composer.FromAppDefinition.prototype.getWorkloadConfigsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.sandboxes.api.v1.WorkloadConfig>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.sandboxes.api.v1.WorkloadConfig));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.Composer.FromAppDefinition} returns this
 */
proto.sandboxes.api.v1.Composer.FromAppDefinition.prototype.clearWorkloadConfigsMap = function() {
  this.getWorkloadConfigsMap().clear();
  return this;};


/**
 * repeated string env = 3;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.Composer.FromAppDefinition.prototype.getEnvList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.Composer.FromAppDefinition} returns this
 */
proto.sandboxes.api.v1.Composer.FromAppDefinition.prototype.setEnvList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Composer.FromAppDefinition} returns this
 */
proto.sandboxes.api.v1.Composer.FromAppDefinition.prototype.addEnv = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.Composer.FromAppDefinition} returns this
 */
proto.sandboxes.api.v1.Composer.FromAppDefinition.prototype.clearEnvList = function() {
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
proto.sandboxes.api.v1.Composer.Exclusion.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Composer.Exclusion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Composer.Exclusion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Composer.Exclusion.toObject = function(includeInstance, msg) {
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
 * @return {!proto.sandboxes.api.v1.Composer.Exclusion}
 */
proto.sandboxes.api.v1.Composer.Exclusion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Composer.Exclusion;
  return proto.sandboxes.api.v1.Composer.Exclusion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Composer.Exclusion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Composer.Exclusion}
 */
proto.sandboxes.api.v1.Composer.Exclusion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sandboxes.api.v1.Composer.Exclusion.Mode} */ (reader.readEnum());
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
proto.sandboxes.api.v1.Composer.Exclusion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Composer.Exclusion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Composer.Exclusion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Composer.Exclusion.serializeBinaryToWriter = function(message, writer) {
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
 * @enum {number}
 */
proto.sandboxes.api.v1.Composer.Exclusion.Mode = {
  UNSPECIFIED: 0,
  FULL: 1,
  DATA_PRESERVED: 2
};

/**
 * optional Mode mode = 1;
 * @return {!proto.sandboxes.api.v1.Composer.Exclusion.Mode}
 */
proto.sandboxes.api.v1.Composer.Exclusion.prototype.getMode = function() {
  return /** @type {!proto.sandboxes.api.v1.Composer.Exclusion.Mode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sandboxes.api.v1.Composer.Exclusion.Mode} value
 * @return {!proto.sandboxes.api.v1.Composer.Exclusion} returns this
 */
proto.sandboxes.api.v1.Composer.Exclusion.prototype.setMode = function(value) {
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
proto.sandboxes.api.v1.Composer.Dynamic.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Composer.Dynamic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Composer.Dynamic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Composer.Dynamic.toObject = function(includeInstance, msg) {
  var f, obj = {
    definition: (f = msg.getDefinition()) && sandboxes_api_v1_app_pb.AppDefinition.toObject(includeInstance, f),
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
 * @return {!proto.sandboxes.api.v1.Composer.Dynamic}
 */
proto.sandboxes.api.v1.Composer.Dynamic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Composer.Dynamic;
  return proto.sandboxes.api.v1.Composer.Dynamic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Composer.Dynamic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Composer.Dynamic}
 */
proto.sandboxes.api.v1.Composer.Dynamic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_app_pb.AppDefinition;
      reader.readMessage(value,sandboxes_api_v1_app_pb.AppDefinition.deserializeBinaryFromReader);
      msg.setDefinition(value);
      break;
    case 2:
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
proto.sandboxes.api.v1.Composer.Dynamic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Composer.Dynamic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Composer.Dynamic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Composer.Dynamic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefinition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_app_pb.AppDefinition.serializeBinaryToWriter
    );
  }
  f = message.getWorkloadConfigsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.sandboxes.api.v1.WorkloadConfig.serializeBinaryToWriter);
  }
};


/**
 * optional AppDefinition definition = 1;
 * @return {?proto.sandboxes.api.v1.AppDefinition}
 */
proto.sandboxes.api.v1.Composer.Dynamic.prototype.getDefinition = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_app_pb.AppDefinition, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition|undefined} value
 * @return {!proto.sandboxes.api.v1.Composer.Dynamic} returns this
*/
proto.sandboxes.api.v1.Composer.Dynamic.prototype.setDefinition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Composer.Dynamic} returns this
 */
proto.sandboxes.api.v1.Composer.Dynamic.prototype.clearDefinition = function() {
  return this.setDefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Composer.Dynamic.prototype.hasDefinition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<string, WorkloadConfig> workload_configs = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.sandboxes.api.v1.WorkloadConfig>}
 */
proto.sandboxes.api.v1.Composer.Dynamic.prototype.getWorkloadConfigsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.sandboxes.api.v1.WorkloadConfig>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.sandboxes.api.v1.WorkloadConfig));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.Composer.Dynamic} returns this
 */
proto.sandboxes.api.v1.Composer.Dynamic.prototype.clearWorkloadConfigsMap = function() {
  this.getWorkloadConfigsMap().clear();
  return this;};


/**
 * optional FromApp from_app = 1;
 * @return {?proto.sandboxes.api.v1.Composer.FromApp}
 */
proto.sandboxes.api.v1.Composer.prototype.getFromApp = function() {
  return /** @type{?proto.sandboxes.api.v1.Composer.FromApp} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Composer.FromApp, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Composer.FromApp|undefined} value
 * @return {!proto.sandboxes.api.v1.Composer} returns this
*/
proto.sandboxes.api.v1.Composer.prototype.setFromApp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.sandboxes.api.v1.Composer.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Composer} returns this
 */
proto.sandboxes.api.v1.Composer.prototype.clearFromApp = function() {
  return this.setFromApp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Composer.prototype.hasFromApp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional FromAppDefinition from_app_definition = 2;
 * @return {?proto.sandboxes.api.v1.Composer.FromAppDefinition}
 */
proto.sandboxes.api.v1.Composer.prototype.getFromAppDefinition = function() {
  return /** @type{?proto.sandboxes.api.v1.Composer.FromAppDefinition} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Composer.FromAppDefinition, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.Composer.FromAppDefinition|undefined} value
 * @return {!proto.sandboxes.api.v1.Composer} returns this
*/
proto.sandboxes.api.v1.Composer.prototype.setFromAppDefinition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.sandboxes.api.v1.Composer.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Composer} returns this
 */
proto.sandboxes.api.v1.Composer.prototype.clearFromAppDefinition = function() {
  return this.setFromAppDefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Composer.prototype.hasFromAppDefinition = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Dynamic dynamic = 3;
 * @return {?proto.sandboxes.api.v1.Composer.Dynamic}
 */
proto.sandboxes.api.v1.Composer.prototype.getDynamic = function() {
  return /** @type{?proto.sandboxes.api.v1.Composer.Dynamic} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Composer.Dynamic, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.Composer.Dynamic|undefined} value
 * @return {!proto.sandboxes.api.v1.Composer} returns this
*/
proto.sandboxes.api.v1.Composer.prototype.setDynamic = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Composer} returns this
 */
proto.sandboxes.api.v1.Composer.prototype.clearDynamic = function() {
  return this.setDynamic(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Composer.prototype.hasDynamic = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Scheduler scheduler = 4;
 * @return {?proto.sandboxes.api.v1.Scheduler}
 */
proto.sandboxes.api.v1.Composer.prototype.getScheduler = function() {
  return /** @type{?proto.sandboxes.api.v1.Scheduler} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_app_pb.Scheduler, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.Scheduler|undefined} value
 * @return {!proto.sandboxes.api.v1.Composer} returns this
*/
proto.sandboxes.api.v1.Composer.prototype.setScheduler = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Composer} returns this
 */
proto.sandboxes.api.v1.Composer.prototype.clearScheduler = function() {
  return this.setScheduler(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Composer.prototype.hasScheduler = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * map<string, Exclusion> exclusions = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.sandboxes.api.v1.Composer.Exclusion>}
 */
proto.sandboxes.api.v1.Composer.prototype.getExclusionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.sandboxes.api.v1.Composer.Exclusion>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      proto.sandboxes.api.v1.Composer.Exclusion));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.Composer} returns this
 */
proto.sandboxes.api.v1.Composer.prototype.clearExclusionsMap = function() {
  this.getExclusionsMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.WorkloadOverrides.repeatedFields_ = [1];



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
proto.sandboxes.api.v1.WorkloadOverrides.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.WorkloadOverrides.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.WorkloadOverrides} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadOverrides.toObject = function(includeInstance, msg) {
  var f, obj = {
    rulesList: jspb.Message.toObjectList(msg.getRulesList(),
    proto.sandboxes.api.v1.WorkloadOverrides.Rule.toObject, includeInstance)
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
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides}
 */
proto.sandboxes.api.v1.WorkloadOverrides.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.WorkloadOverrides;
  return proto.sandboxes.api.v1.WorkloadOverrides.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.WorkloadOverrides} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides}
 */
proto.sandboxes.api.v1.WorkloadOverrides.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.WorkloadOverrides.Rule;
      reader.readMessage(value,proto.sandboxes.api.v1.WorkloadOverrides.Rule.deserializeBinaryFromReader);
      msg.addRules(value);
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
proto.sandboxes.api.v1.WorkloadOverrides.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.WorkloadOverrides.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.WorkloadOverrides} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadOverrides.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sandboxes.api.v1.WorkloadOverrides.Rule.serializeBinaryToWriter
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
proto.sandboxes.api.v1.WorkloadOverrides.Rule.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.RuleCase = {
  RULE_NOT_SET: 0,
  CHECKOUT: 1,
  PACKAGE: 2,
  PORT_FORWARD_RULE: 3,
  WORKSPACE_BASE_SNAPSHOT: 4,
  WORKSPACE_HOME_SNAPSHOT: 5,
  SERVICE_VERSION: 6,
  SERVICE_PROPERTY: 7,
  SERVICE_SNAPSHOT: 8,
  ENV: 9,
  SCHEDULE_SPEC: 10,
  CONTAINER_SNAPSHOT: 11
};

/**
 * @return {proto.sandboxes.api.v1.WorkloadOverrides.Rule.RuleCase}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.getRuleCase = function() {
  return /** @type {proto.sandboxes.api.v1.WorkloadOverrides.Rule.RuleCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.WorkloadOverrides.Rule.oneofGroups_[0]));
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
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.WorkloadOverrides.Rule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.WorkloadOverrides.Rule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.toObject = function(includeInstance, msg) {
  var f, obj = {
    checkout: (f = msg.getCheckout()) && proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.toObject(includeInstance, f),
    pb_package: (f = msg.getPackage()) && proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec.toObject(includeInstance, f),
    portForwardRule: (f = msg.getPortForwardRule()) && proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule.toObject(includeInstance, f),
    workspaceBaseSnapshot: jspb.Message.getFieldWithDefault(msg, 4, ""),
    workspaceHomeSnapshot: jspb.Message.getFieldWithDefault(msg, 5, ""),
    serviceVersion: jspb.Message.getFieldWithDefault(msg, 6, ""),
    serviceProperty: (f = msg.getServiceProperty()) && proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.toObject(includeInstance, f),
    serviceSnapshot: jspb.Message.getFieldWithDefault(msg, 8, ""),
    env: (f = msg.getEnv()) && proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars.toObject(includeInstance, f),
    scheduleSpec: (f = msg.getScheduleSpec()) && sandboxes_api_v1_app_pb.ScheduleSpec.toObject(includeInstance, f),
    containerSnapshot: jspb.Message.getFieldWithDefault(msg, 11, "")
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
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.WorkloadOverrides.Rule;
  return proto.sandboxes.api.v1.WorkloadOverrides.Rule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.WorkloadOverrides.Rule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout;
      reader.readMessage(value,proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.deserializeBinaryFromReader);
      msg.setCheckout(value);
      break;
    case 2:
      var value = new proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec;
      reader.readMessage(value,proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec.deserializeBinaryFromReader);
      msg.setPackage(value);
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule;
      reader.readMessage(value,proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule.deserializeBinaryFromReader);
      msg.setPortForwardRule(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkspaceBaseSnapshot(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkspaceHomeSnapshot(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceVersion(value);
      break;
    case 7:
      var value = new proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property;
      reader.readMessage(value,proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.deserializeBinaryFromReader);
      msg.setServiceProperty(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceSnapshot(value);
      break;
    case 9:
      var value = new proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars;
      reader.readMessage(value,proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars.deserializeBinaryFromReader);
      msg.setEnv(value);
      break;
    case 10:
      var value = new sandboxes_api_v1_app_pb.ScheduleSpec;
      reader.readMessage(value,sandboxes_api_v1_app_pb.ScheduleSpec.deserializeBinaryFromReader);
      msg.setScheduleSpec(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setContainerSnapshot(value);
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
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.WorkloadOverrides.Rule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.WorkloadOverrides.Rule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCheckout();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.serializeBinaryToWriter
    );
  }
  f = message.getPackage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec.serializeBinaryToWriter
    );
  }
  f = message.getPortForwardRule();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
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
  f = message.getServiceProperty();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getEnv();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars.serializeBinaryToWriter
    );
  }
  f = message.getScheduleSpec();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      sandboxes_api_v1_app_pb.ScheduleSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
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
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    repo: (f = msg.getRepo()) && sandboxes_api_v1_app_pb.Checkout.Repo.toObject(includeInstance, f),
    versionSpec: jspb.Message.getFieldWithDefault(msg, 3, ""),
    manifest: (f = msg.getManifest()) && sandboxes_api_v1_app_pb.Checkout.Manifest.toObject(includeInstance, f),
    history: (f = msg.getHistory()) && sandboxes_api_v1_app_pb.Checkout.History.toObject(includeInstance, f),
    prebuild: (f = msg.getPrebuild()) && sandboxes_api_v1_app_pb.Checkout.Prebuild.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout;
  return proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new sandboxes_api_v1_app_pb.Checkout.Repo;
      reader.readMessage(value,sandboxes_api_v1_app_pb.Checkout.Repo.deserializeBinaryFromReader);
      msg.setRepo(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersionSpec(value);
      break;
    case 4:
      var value = new sandboxes_api_v1_app_pb.Checkout.Manifest;
      reader.readMessage(value,sandboxes_api_v1_app_pb.Checkout.Manifest.deserializeBinaryFromReader);
      msg.setManifest(value);
      break;
    case 5:
      var value = new sandboxes_api_v1_app_pb.Checkout.History;
      reader.readMessage(value,sandboxes_api_v1_app_pb.Checkout.History.deserializeBinaryFromReader);
      msg.setHistory(value);
      break;
    case 6:
      var value = new sandboxes_api_v1_app_pb.Checkout.Prebuild;
      reader.readMessage(value,sandboxes_api_v1_app_pb.Checkout.Prebuild.deserializeBinaryFromReader);
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
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.serializeBinaryToWriter = function(message, writer) {
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
      sandboxes_api_v1_app_pb.Checkout.Repo.serializeBinaryToWriter
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
      sandboxes_api_v1_app_pb.Checkout.Manifest.serializeBinaryToWriter
    );
  }
  f = message.getHistory();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      sandboxes_api_v1_app_pb.Checkout.History.serializeBinaryToWriter
    );
  }
  f = message.getPrebuild();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      sandboxes_api_v1_app_pb.Checkout.Prebuild.serializeBinaryToWriter
    );
  }
};


/**
 * optional string path = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Checkout.Repo repo = 2;
 * @return {?proto.sandboxes.api.v1.Checkout.Repo}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.prototype.getRepo = function() {
  return /** @type{?proto.sandboxes.api.v1.Checkout.Repo} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_app_pb.Checkout.Repo, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.Checkout.Repo|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout} returns this
*/
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.prototype.setRepo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.prototype.clearRepo = function() {
  return this.setRepo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.prototype.hasRepo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string version_spec = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.prototype.getVersionSpec = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.prototype.setVersionSpec = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Checkout.Manifest manifest = 4;
 * @return {?proto.sandboxes.api.v1.Checkout.Manifest}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.prototype.getManifest = function() {
  return /** @type{?proto.sandboxes.api.v1.Checkout.Manifest} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_app_pb.Checkout.Manifest, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.Checkout.Manifest|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout} returns this
*/
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.prototype.setManifest = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.prototype.clearManifest = function() {
  return this.setManifest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.prototype.hasManifest = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Checkout.History history = 5;
 * @return {?proto.sandboxes.api.v1.Checkout.History}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.prototype.getHistory = function() {
  return /** @type{?proto.sandboxes.api.v1.Checkout.History} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_app_pb.Checkout.History, 5));
};


/**
 * @param {?proto.sandboxes.api.v1.Checkout.History|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout} returns this
*/
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.prototype.setHistory = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.prototype.clearHistory = function() {
  return this.setHistory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.prototype.hasHistory = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Checkout.Prebuild prebuild = 6;
 * @return {?proto.sandboxes.api.v1.Checkout.Prebuild}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.prototype.getPrebuild = function() {
  return /** @type{?proto.sandboxes.api.v1.Checkout.Prebuild} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_app_pb.Checkout.Prebuild, 6));
};


/**
 * @param {?proto.sandboxes.api.v1.Checkout.Prebuild|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout} returns this
*/
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.prototype.setPrebuild = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.prototype.clearPrebuild = function() {
  return this.setPrebuild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout.prototype.hasPrebuild = function() {
  return jspb.Message.getField(this, 6) != null;
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
proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec.toObject = function(includeInstance, msg) {
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
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec;
  return proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec.deserializeBinaryFromReader = function(msg, reader) {
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
proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec.serializeBinaryToWriter = function(message, writer) {
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
proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec.prototype.setVersion = function(value) {
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
proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule.toObject = function(includeInstance, msg) {
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
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule;
  return proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule.deserializeBinaryFromReader = function(msg, reader) {
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
proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule.serializeBinaryToWriter = function(message, writer) {
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
proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule.prototype.getLocal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule.prototype.setLocal = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TargetPort remote = 2;
 * @return {?proto.sandboxes.api.v1.TargetPort}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule.prototype.getRemote = function() {
  return /** @type{?proto.sandboxes.api.v1.TargetPort} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_endpoint_pb.TargetPort, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.TargetPort|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule} returns this
*/
proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule.prototype.setRemote = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule.prototype.clearRemote = function() {
  return this.setRemote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule.prototype.hasRemote = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.ActionCase = {
  ACTION_NOT_SET: 0,
  UPDATE: 2,
  REMOVE: 3
};

/**
 * @return {proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.ActionCase}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.prototype.getActionCase = function() {
  return /** @type {proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.ActionCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.oneofGroups_[0]));
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
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    update: jspb.Message.getFieldWithDefault(msg, 2, ""),
    remove: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property;
  return proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setUpdate(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRemove(value);
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
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string update = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.prototype.getUpdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.prototype.setUpdate = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.prototype.clearUpdate = function() {
  return jspb.Message.setOneofField(this, 2, proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.prototype.hasUpdate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool remove = 3;
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.prototype.getRemove = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.prototype.setRemove = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.prototype.clearRemove = function() {
  return jspb.Message.setOneofField(this, 3, proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property.prototype.hasRemove = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars.repeatedFields_ = [1];



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
proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars.toObject = function(includeInstance, msg) {
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
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars;
  return proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars.deserializeBinaryFromReader = function(msg, reader) {
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
proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars.serializeBinaryToWriter = function(message, writer) {
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
proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars.prototype.getEnvList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars.prototype.setEnvList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars.prototype.addEnv = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars.prototype.clearEnvList = function() {
  return this.setEnvList([]);
};


/**
 * optional Checkout checkout = 1;
 * @return {?proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.getCheckout = function() {
  return /** @type{?proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.WorkloadOverrides.Rule.Checkout|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule} returns this
*/
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.setCheckout = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.sandboxes.api.v1.WorkloadOverrides.Rule.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.clearCheckout = function() {
  return this.setCheckout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.hasCheckout = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ToolPackageSpec package = 2;
 * @return {?proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.getPackage = function() {
  return /** @type{?proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.WorkloadOverrides.Rule.ToolPackageSpec|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule} returns this
*/
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.setPackage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.sandboxes.api.v1.WorkloadOverrides.Rule.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.clearPackage = function() {
  return this.setPackage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.hasPackage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PortForwardRule port_forward_rule = 3;
 * @return {?proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.getPortForwardRule = function() {
  return /** @type{?proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.WorkloadOverrides.Rule.PortForwardRule|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule} returns this
*/
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.setPortForwardRule = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.sandboxes.api.v1.WorkloadOverrides.Rule.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.clearPortForwardRule = function() {
  return this.setPortForwardRule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.hasPortForwardRule = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string workspace_base_snapshot = 4;
 * @return {string}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.getWorkspaceBaseSnapshot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.setWorkspaceBaseSnapshot = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.sandboxes.api.v1.WorkloadOverrides.Rule.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.clearWorkspaceBaseSnapshot = function() {
  return jspb.Message.setOneofField(this, 4, proto.sandboxes.api.v1.WorkloadOverrides.Rule.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.hasWorkspaceBaseSnapshot = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string workspace_home_snapshot = 5;
 * @return {string}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.getWorkspaceHomeSnapshot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.setWorkspaceHomeSnapshot = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.sandboxes.api.v1.WorkloadOverrides.Rule.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.clearWorkspaceHomeSnapshot = function() {
  return jspb.Message.setOneofField(this, 5, proto.sandboxes.api.v1.WorkloadOverrides.Rule.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.hasWorkspaceHomeSnapshot = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string service_version = 6;
 * @return {string}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.getServiceVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.setServiceVersion = function(value) {
  return jspb.Message.setOneofField(this, 6, proto.sandboxes.api.v1.WorkloadOverrides.Rule.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.clearServiceVersion = function() {
  return jspb.Message.setOneofField(this, 6, proto.sandboxes.api.v1.WorkloadOverrides.Rule.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.hasServiceVersion = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Property service_property = 7;
 * @return {?proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.getServiceProperty = function() {
  return /** @type{?proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property, 7));
};


/**
 * @param {?proto.sandboxes.api.v1.WorkloadOverrides.Rule.Property|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule} returns this
*/
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.setServiceProperty = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.sandboxes.api.v1.WorkloadOverrides.Rule.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.clearServiceProperty = function() {
  return this.setServiceProperty(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.hasServiceProperty = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string service_snapshot = 8;
 * @return {string}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.getServiceSnapshot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.setServiceSnapshot = function(value) {
  return jspb.Message.setOneofField(this, 8, proto.sandboxes.api.v1.WorkloadOverrides.Rule.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.clearServiceSnapshot = function() {
  return jspb.Message.setOneofField(this, 8, proto.sandboxes.api.v1.WorkloadOverrides.Rule.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.hasServiceSnapshot = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional EnvVars env = 9;
 * @return {?proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.getEnv = function() {
  return /** @type{?proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars, 9));
};


/**
 * @param {?proto.sandboxes.api.v1.WorkloadOverrides.Rule.EnvVars|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule} returns this
*/
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.setEnv = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.sandboxes.api.v1.WorkloadOverrides.Rule.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.clearEnv = function() {
  return this.setEnv(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.hasEnv = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional ScheduleSpec schedule_spec = 10;
 * @return {?proto.sandboxes.api.v1.ScheduleSpec}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.getScheduleSpec = function() {
  return /** @type{?proto.sandboxes.api.v1.ScheduleSpec} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_app_pb.ScheduleSpec, 10));
};


/**
 * @param {?proto.sandboxes.api.v1.ScheduleSpec|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule} returns this
*/
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.setScheduleSpec = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.sandboxes.api.v1.WorkloadOverrides.Rule.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.clearScheduleSpec = function() {
  return this.setScheduleSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.hasScheduleSpec = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string container_snapshot = 11;
 * @return {string}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.getContainerSnapshot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.setContainerSnapshot = function(value) {
  return jspb.Message.setOneofField(this, 11, proto.sandboxes.api.v1.WorkloadOverrides.Rule.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.clearContainerSnapshot = function() {
  return jspb.Message.setOneofField(this, 11, proto.sandboxes.api.v1.WorkloadOverrides.Rule.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadOverrides.Rule.prototype.hasContainerSnapshot = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated Rule rules = 1;
 * @return {!Array<!proto.sandboxes.api.v1.WorkloadOverrides.Rule>}
 */
proto.sandboxes.api.v1.WorkloadOverrides.prototype.getRulesList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.WorkloadOverrides.Rule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.WorkloadOverrides.Rule, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.WorkloadOverrides.Rule>} value
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides} returns this
*/
proto.sandboxes.api.v1.WorkloadOverrides.prototype.setRulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sandboxes.api.v1.WorkloadOverrides.Rule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides.Rule}
 */
proto.sandboxes.api.v1.WorkloadOverrides.prototype.addRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sandboxes.api.v1.WorkloadOverrides.Rule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.WorkloadOverrides} returns this
 */
proto.sandboxes.api.v1.WorkloadOverrides.prototype.clearRulesList = function() {
  return this.setRulesList([]);
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
proto.sandboxes.api.v1.Sandbox.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Sandbox.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Sandbox} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.toObject = function(includeInstance, msg) {
  var f, obj = {
    meta: (f = msg.getMeta()) && sandboxes_api_v1_object_pb.ObjectMeta.toObject(includeInstance, f),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    composer: (f = msg.getComposer()) && proto.sandboxes.api.v1.Composer.toObject(includeInstance, f),
    app: (f = msg.getApp()) && sandboxes_api_v1_app_pb.App.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.sandboxes.api.v1.Sandbox.Spec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.sandboxes.api.v1.Sandbox.Status.toObject(includeInstance, f),
    activities: (f = msg.getActivities()) && proto.sandboxes.api.v1.Sandbox.Activities.toObject(includeInstance, f),
    region: jspb.Message.getFieldWithDefault(msg, 8, ""),
    lifecycle: (f = msg.getLifecycle()) && proto.sandboxes.api.v1.Sandbox.Lifecycle.toObject(includeInstance, f),
    definition: (f = msg.getDefinition()) && sandboxes_api_v1_app_pb.AppDefinition.toObject(includeInstance, f),
    snapshot: (f = msg.getSnapshot()) && proto.sandboxes.api.v1.Sandbox.Snapshot.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.Sandbox}
 */
proto.sandboxes.api.v1.Sandbox.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Sandbox;
  return proto.sandboxes.api.v1.Sandbox.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Sandbox} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Sandbox}
 */
proto.sandboxes.api.v1.Sandbox.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = new proto.sandboxes.api.v1.Composer;
      reader.readMessage(value,proto.sandboxes.api.v1.Composer.deserializeBinaryFromReader);
      msg.setComposer(value);
      break;
    case 4:
      var value = new sandboxes_api_v1_app_pb.App;
      reader.readMessage(value,sandboxes_api_v1_app_pb.App.deserializeBinaryFromReader);
      msg.setApp(value);
      break;
    case 5:
      var value = new proto.sandboxes.api.v1.Sandbox.Spec;
      reader.readMessage(value,proto.sandboxes.api.v1.Sandbox.Spec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 6:
      var value = new proto.sandboxes.api.v1.Sandbox.Status;
      reader.readMessage(value,proto.sandboxes.api.v1.Sandbox.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 7:
      var value = new proto.sandboxes.api.v1.Sandbox.Activities;
      reader.readMessage(value,proto.sandboxes.api.v1.Sandbox.Activities.deserializeBinaryFromReader);
      msg.setActivities(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    case 9:
      var value = new proto.sandboxes.api.v1.Sandbox.Lifecycle;
      reader.readMessage(value,proto.sandboxes.api.v1.Sandbox.Lifecycle.deserializeBinaryFromReader);
      msg.setLifecycle(value);
      break;
    case 10:
      var value = new sandboxes_api_v1_app_pb.AppDefinition;
      reader.readMessage(value,sandboxes_api_v1_app_pb.AppDefinition.deserializeBinaryFromReader);
      msg.setDefinition(value);
      break;
    case 11:
      var value = new proto.sandboxes.api.v1.Sandbox.Snapshot;
      reader.readMessage(value,proto.sandboxes.api.v1.Sandbox.Snapshot.deserializeBinaryFromReader);
      msg.setSnapshot(value);
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
proto.sandboxes.api.v1.Sandbox.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Sandbox.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Sandbox} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getComposer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sandboxes.api.v1.Composer.serializeBinaryToWriter
    );
  }
  f = message.getApp();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      sandboxes_api_v1_app_pb.App.serializeBinaryToWriter
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.sandboxes.api.v1.Sandbox.Spec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.sandboxes.api.v1.Sandbox.Status.serializeBinaryToWriter
    );
  }
  f = message.getActivities();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.sandboxes.api.v1.Sandbox.Activities.serializeBinaryToWriter
    );
  }
  f = message.getRegion();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getLifecycle();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.sandboxes.api.v1.Sandbox.Lifecycle.serializeBinaryToWriter
    );
  }
  f = message.getDefinition();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      sandboxes_api_v1_app_pb.AppDefinition.serializeBinaryToWriter
    );
  }
  f = message.getSnapshot();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.sandboxes.api.v1.Sandbox.Snapshot.serializeBinaryToWriter
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
proto.sandboxes.api.v1.Sandbox.OperationalState.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Sandbox.OperationalState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Sandbox.OperationalState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.OperationalState.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    alwaysOnExpiry: (f = msg.getAlwaysOnExpiry()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    missionCriticalExpiry: (f = msg.getMissionCriticalExpiry()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.Sandbox.OperationalState}
 */
proto.sandboxes.api.v1.Sandbox.OperationalState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Sandbox.OperationalState;
  return proto.sandboxes.api.v1.Sandbox.OperationalState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Sandbox.OperationalState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Sandbox.OperationalState}
 */
proto.sandboxes.api.v1.Sandbox.OperationalState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sandboxes.api.v1.Sandbox.OperationalState.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setAlwaysOnExpiry(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setMissionCriticalExpiry(value);
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
proto.sandboxes.api.v1.Sandbox.OperationalState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Sandbox.OperationalState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Sandbox.OperationalState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.OperationalState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAlwaysOnExpiry();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMissionCriticalExpiry();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.sandboxes.api.v1.Sandbox.OperationalState.State = {
  UNSPECIFIED: 0,
  SUSPENDED: 1,
  ALWAYS_ON: 2
};

/**
 * optional State state = 1;
 * @return {!proto.sandboxes.api.v1.Sandbox.OperationalState.State}
 */
proto.sandboxes.api.v1.Sandbox.OperationalState.prototype.getState = function() {
  return /** @type {!proto.sandboxes.api.v1.Sandbox.OperationalState.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sandboxes.api.v1.Sandbox.OperationalState.State} value
 * @return {!proto.sandboxes.api.v1.Sandbox.OperationalState} returns this
 */
proto.sandboxes.api.v1.Sandbox.OperationalState.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp always_on_expiry = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sandboxes.api.v1.Sandbox.OperationalState.prototype.getAlwaysOnExpiry = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox.OperationalState} returns this
*/
proto.sandboxes.api.v1.Sandbox.OperationalState.prototype.setAlwaysOnExpiry = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox.OperationalState} returns this
 */
proto.sandboxes.api.v1.Sandbox.OperationalState.prototype.clearAlwaysOnExpiry = function() {
  return this.setAlwaysOnExpiry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.OperationalState.prototype.hasAlwaysOnExpiry = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp mission_critical_expiry = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sandboxes.api.v1.Sandbox.OperationalState.prototype.getMissionCriticalExpiry = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox.OperationalState} returns this
*/
proto.sandboxes.api.v1.Sandbox.OperationalState.prototype.setMissionCriticalExpiry = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox.OperationalState} returns this
 */
proto.sandboxes.api.v1.Sandbox.OperationalState.prototype.clearMissionCriticalExpiry = function() {
  return this.setMissionCriticalExpiry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.OperationalState.prototype.hasMissionCriticalExpiry = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.Sandbox.AccessControl.repeatedFields_ = [2,3];



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
proto.sandboxes.api.v1.Sandbox.AccessControl.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Sandbox.AccessControl.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Sandbox.AccessControl} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.AccessControl.toObject = function(includeInstance, msg) {
  var f, obj = {
    sharedMode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    allowedUsersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    sharedSecretIdsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.sandboxes.api.v1.Sandbox.AccessControl}
 */
proto.sandboxes.api.v1.Sandbox.AccessControl.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Sandbox.AccessControl;
  return proto.sandboxes.api.v1.Sandbox.AccessControl.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Sandbox.AccessControl} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Sandbox.AccessControl}
 */
proto.sandboxes.api.v1.Sandbox.AccessControl.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sandboxes.api.v1.Sandbox.AccessControl.SharedMode} */ (reader.readEnum());
      msg.setSharedMode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addAllowedUsers(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addSharedSecretIds(value);
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
proto.sandboxes.api.v1.Sandbox.AccessControl.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Sandbox.AccessControl.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Sandbox.AccessControl} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.AccessControl.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSharedMode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAllowedUsersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getSharedSecretIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.sandboxes.api.v1.Sandbox.AccessControl.SharedMode = {
  DEFAULT: 0,
  EXPLICIT: 1,
  PRIVATE: 2
};

/**
 * optional SharedMode shared_mode = 1;
 * @return {!proto.sandboxes.api.v1.Sandbox.AccessControl.SharedMode}
 */
proto.sandboxes.api.v1.Sandbox.AccessControl.prototype.getSharedMode = function() {
  return /** @type {!proto.sandboxes.api.v1.Sandbox.AccessControl.SharedMode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sandboxes.api.v1.Sandbox.AccessControl.SharedMode} value
 * @return {!proto.sandboxes.api.v1.Sandbox.AccessControl} returns this
 */
proto.sandboxes.api.v1.Sandbox.AccessControl.prototype.setSharedMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated string allowed_users = 2;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.Sandbox.AccessControl.prototype.getAllowedUsersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.Sandbox.AccessControl} returns this
 */
proto.sandboxes.api.v1.Sandbox.AccessControl.prototype.setAllowedUsersList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Sandbox.AccessControl} returns this
 */
proto.sandboxes.api.v1.Sandbox.AccessControl.prototype.addAllowedUsers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.Sandbox.AccessControl} returns this
 */
proto.sandboxes.api.v1.Sandbox.AccessControl.prototype.clearAllowedUsersList = function() {
  return this.setAllowedUsersList([]);
};


/**
 * repeated string shared_secret_ids = 3;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.Sandbox.AccessControl.prototype.getSharedSecretIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.Sandbox.AccessControl} returns this
 */
proto.sandboxes.api.v1.Sandbox.AccessControl.prototype.setSharedSecretIdsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Sandbox.AccessControl} returns this
 */
proto.sandboxes.api.v1.Sandbox.AccessControl.prototype.addSharedSecretIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.Sandbox.AccessControl} returns this
 */
proto.sandboxes.api.v1.Sandbox.AccessControl.prototype.clearSharedSecretIdsList = function() {
  return this.setSharedSecretIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.Sandbox.Spec.repeatedFields_ = [1,2,5,7];



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
proto.sandboxes.api.v1.Sandbox.Spec.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Sandbox.Spec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Sandbox.Spec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Spec.toObject = function(includeInstance, msg) {
  var f, obj = {
    workloadsList: jspb.Message.toObjectList(msg.getWorkloadsList(),
    proto.sandboxes.api.v1.Workload.toObject, includeInstance),
    endpointsList: jspb.Message.toObjectList(msg.getEndpointsList(),
    sandboxes_api_v1_endpoint_pb.Endpoint.toObject, includeInstance),
    opState: (f = msg.getOpState()) && proto.sandboxes.api.v1.Sandbox.OperationalState.toObject(includeInstance, f),
    accessControl: (f = msg.getAccessControl()) && proto.sandboxes.api.v1.Sandbox.AccessControl.toObject(includeInstance, f),
    volumesList: jspb.Message.toObjectList(msg.getVolumesList(),
    sandboxes_api_v1_app_pb.Volume.toObject, includeInstance),
    scheduler: (f = msg.getScheduler()) && sandboxes_api_v1_app_pb.Scheduler.toObject(includeInstance, f),
    resourcesList: jspb.Message.toObjectList(msg.getResourcesList(),
    proto.sandboxes.api.v1.ResourceGroup.toObject, includeInstance)
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
 * @return {!proto.sandboxes.api.v1.Sandbox.Spec}
 */
proto.sandboxes.api.v1.Sandbox.Spec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Sandbox.Spec;
  return proto.sandboxes.api.v1.Sandbox.Spec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Sandbox.Spec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Sandbox.Spec}
 */
proto.sandboxes.api.v1.Sandbox.Spec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.Workload;
      reader.readMessage(value,proto.sandboxes.api.v1.Workload.deserializeBinaryFromReader);
      msg.addWorkloads(value);
      break;
    case 2:
      var value = new sandboxes_api_v1_endpoint_pb.Endpoint;
      reader.readMessage(value,sandboxes_api_v1_endpoint_pb.Endpoint.deserializeBinaryFromReader);
      msg.addEndpoints(value);
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.Sandbox.OperationalState;
      reader.readMessage(value,proto.sandboxes.api.v1.Sandbox.OperationalState.deserializeBinaryFromReader);
      msg.setOpState(value);
      break;
    case 4:
      var value = new proto.sandboxes.api.v1.Sandbox.AccessControl;
      reader.readMessage(value,proto.sandboxes.api.v1.Sandbox.AccessControl.deserializeBinaryFromReader);
      msg.setAccessControl(value);
      break;
    case 5:
      var value = new sandboxes_api_v1_app_pb.Volume;
      reader.readMessage(value,sandboxes_api_v1_app_pb.Volume.deserializeBinaryFromReader);
      msg.addVolumes(value);
      break;
    case 6:
      var value = new sandboxes_api_v1_app_pb.Scheduler;
      reader.readMessage(value,sandboxes_api_v1_app_pb.Scheduler.deserializeBinaryFromReader);
      msg.setScheduler(value);
      break;
    case 7:
      var value = new proto.sandboxes.api.v1.ResourceGroup;
      reader.readMessage(value,proto.sandboxes.api.v1.ResourceGroup.deserializeBinaryFromReader);
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
proto.sandboxes.api.v1.Sandbox.Spec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Sandbox.Spec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Sandbox.Spec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Spec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkloadsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sandboxes.api.v1.Workload.serializeBinaryToWriter
    );
  }
  f = message.getEndpointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      sandboxes_api_v1_endpoint_pb.Endpoint.serializeBinaryToWriter
    );
  }
  f = message.getOpState();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sandboxes.api.v1.Sandbox.OperationalState.serializeBinaryToWriter
    );
  }
  f = message.getAccessControl();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sandboxes.api.v1.Sandbox.AccessControl.serializeBinaryToWriter
    );
  }
  f = message.getVolumesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      sandboxes_api_v1_app_pb.Volume.serializeBinaryToWriter
    );
  }
  f = message.getScheduler();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      sandboxes_api_v1_app_pb.Scheduler.serializeBinaryToWriter
    );
  }
  f = message.getResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.sandboxes.api.v1.ResourceGroup.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Workload workloads = 1;
 * @return {!Array<!proto.sandboxes.api.v1.Workload>}
 */
proto.sandboxes.api.v1.Sandbox.Spec.prototype.getWorkloadsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.Workload>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.Workload, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.Workload>} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Spec} returns this
*/
proto.sandboxes.api.v1.Sandbox.Spec.prototype.setWorkloadsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sandboxes.api.v1.Workload=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Workload}
 */
proto.sandboxes.api.v1.Sandbox.Spec.prototype.addWorkloads = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sandboxes.api.v1.Workload, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.Sandbox.Spec} returns this
 */
proto.sandboxes.api.v1.Sandbox.Spec.prototype.clearWorkloadsList = function() {
  return this.setWorkloadsList([]);
};


/**
 * repeated Endpoint endpoints = 2;
 * @return {!Array<!proto.sandboxes.api.v1.Endpoint>}
 */
proto.sandboxes.api.v1.Sandbox.Spec.prototype.getEndpointsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.Endpoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_endpoint_pb.Endpoint, 2));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.Endpoint>} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Spec} returns this
*/
proto.sandboxes.api.v1.Sandbox.Spec.prototype.setEndpointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sandboxes.api.v1.Endpoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Endpoint}
 */
proto.sandboxes.api.v1.Sandbox.Spec.prototype.addEndpoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sandboxes.api.v1.Endpoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.Sandbox.Spec} returns this
 */
proto.sandboxes.api.v1.Sandbox.Spec.prototype.clearEndpointsList = function() {
  return this.setEndpointsList([]);
};


/**
 * optional OperationalState op_state = 3;
 * @return {?proto.sandboxes.api.v1.Sandbox.OperationalState}
 */
proto.sandboxes.api.v1.Sandbox.Spec.prototype.getOpState = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox.OperationalState} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Sandbox.OperationalState, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox.OperationalState|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Spec} returns this
*/
proto.sandboxes.api.v1.Sandbox.Spec.prototype.setOpState = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox.Spec} returns this
 */
proto.sandboxes.api.v1.Sandbox.Spec.prototype.clearOpState = function() {
  return this.setOpState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.Spec.prototype.hasOpState = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AccessControl access_control = 4;
 * @return {?proto.sandboxes.api.v1.Sandbox.AccessControl}
 */
proto.sandboxes.api.v1.Sandbox.Spec.prototype.getAccessControl = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox.AccessControl} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Sandbox.AccessControl, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox.AccessControl|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Spec} returns this
*/
proto.sandboxes.api.v1.Sandbox.Spec.prototype.setAccessControl = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox.Spec} returns this
 */
proto.sandboxes.api.v1.Sandbox.Spec.prototype.clearAccessControl = function() {
  return this.setAccessControl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.Spec.prototype.hasAccessControl = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated Volume volumes = 5;
 * @return {!Array<!proto.sandboxes.api.v1.Volume>}
 */
proto.sandboxes.api.v1.Sandbox.Spec.prototype.getVolumesList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.Volume>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_app_pb.Volume, 5));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.Volume>} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Spec} returns this
*/
proto.sandboxes.api.v1.Sandbox.Spec.prototype.setVolumesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.sandboxes.api.v1.Volume=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Volume}
 */
proto.sandboxes.api.v1.Sandbox.Spec.prototype.addVolumes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.sandboxes.api.v1.Volume, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.Sandbox.Spec} returns this
 */
proto.sandboxes.api.v1.Sandbox.Spec.prototype.clearVolumesList = function() {
  return this.setVolumesList([]);
};


/**
 * optional Scheduler scheduler = 6;
 * @return {?proto.sandboxes.api.v1.Scheduler}
 */
proto.sandboxes.api.v1.Sandbox.Spec.prototype.getScheduler = function() {
  return /** @type{?proto.sandboxes.api.v1.Scheduler} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_app_pb.Scheduler, 6));
};


/**
 * @param {?proto.sandboxes.api.v1.Scheduler|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Spec} returns this
*/
proto.sandboxes.api.v1.Sandbox.Spec.prototype.setScheduler = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox.Spec} returns this
 */
proto.sandboxes.api.v1.Sandbox.Spec.prototype.clearScheduler = function() {
  return this.setScheduler(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.Spec.prototype.hasScheduler = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated ResourceGroup resources = 7;
 * @return {!Array<!proto.sandboxes.api.v1.ResourceGroup>}
 */
proto.sandboxes.api.v1.Sandbox.Spec.prototype.getResourcesList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.ResourceGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.ResourceGroup, 7));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.ResourceGroup>} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Spec} returns this
*/
proto.sandboxes.api.v1.Sandbox.Spec.prototype.setResourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.sandboxes.api.v1.ResourceGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.ResourceGroup}
 */
proto.sandboxes.api.v1.Sandbox.Spec.prototype.addResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.sandboxes.api.v1.ResourceGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.Sandbox.Spec} returns this
 */
proto.sandboxes.api.v1.Sandbox.Spec.prototype.clearResourcesList = function() {
  return this.setResourcesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.Sandbox.Status.repeatedFields_ = [1,2];



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
proto.sandboxes.api.v1.Sandbox.Status.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Sandbox.Status.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Sandbox.Status} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Status.toObject = function(includeInstance, msg) {
  var f, obj = {
    workloadsList: jspb.Message.toObjectList(msg.getWorkloadsList(),
    proto.sandboxes.api.v1.WorkloadStatus.toObject, includeInstance),
    resourcesList: jspb.Message.toObjectList(msg.getResourcesList(),
    proto.sandboxes.api.v1.ResourceGroupStatus.toObject, includeInstance),
    sandbox: (f = msg.getSandbox()) && proto.sandboxes.api.v1.Sandbox.Status.Aggregated.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.Sandbox.Status}
 */
proto.sandboxes.api.v1.Sandbox.Status.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Sandbox.Status;
  return proto.sandboxes.api.v1.Sandbox.Status.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Sandbox.Status} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Sandbox.Status}
 */
proto.sandboxes.api.v1.Sandbox.Status.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.WorkloadStatus;
      reader.readMessage(value,proto.sandboxes.api.v1.WorkloadStatus.deserializeBinaryFromReader);
      msg.addWorkloads(value);
      break;
    case 2:
      var value = new proto.sandboxes.api.v1.ResourceGroupStatus;
      reader.readMessage(value,proto.sandboxes.api.v1.ResourceGroupStatus.deserializeBinaryFromReader);
      msg.addResources(value);
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.Sandbox.Status.Aggregated;
      reader.readMessage(value,proto.sandboxes.api.v1.Sandbox.Status.Aggregated.deserializeBinaryFromReader);
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
proto.sandboxes.api.v1.Sandbox.Status.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Sandbox.Status.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Sandbox.Status} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Status.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkloadsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sandboxes.api.v1.WorkloadStatus.serializeBinaryToWriter
    );
  }
  f = message.getResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.sandboxes.api.v1.ResourceGroupStatus.serializeBinaryToWriter
    );
  }
  f = message.getSandbox();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sandboxes.api.v1.Sandbox.Status.Aggregated.serializeBinaryToWriter
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
proto.sandboxes.api.v1.Sandbox.Status.Aggregated.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Sandbox.Status.Aggregated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Sandbox.Status.Aggregated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Status.Aggregated.toObject = function(includeInstance, msg) {
  var f, obj = {
    runStage: jspb.Message.getFieldWithDefault(msg, 1, 0),
    alertLevel: jspb.Message.getFieldWithDefault(msg, 2, 0),
    lifecycleStage: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.sandboxes.api.v1.Sandbox.Status.Aggregated}
 */
proto.sandboxes.api.v1.Sandbox.Status.Aggregated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Sandbox.Status.Aggregated;
  return proto.sandboxes.api.v1.Sandbox.Status.Aggregated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Sandbox.Status.Aggregated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Sandbox.Status.Aggregated}
 */
proto.sandboxes.api.v1.Sandbox.Status.Aggregated.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sandboxes.api.v1.Sandbox.Status.Aggregated.RunStage} */ (reader.readEnum());
      msg.setRunStage(value);
      break;
    case 2:
      var value = /** @type {!proto.sandboxes.api.v1.Sandbox.Status.Aggregated.AlertLevel} */ (reader.readEnum());
      msg.setAlertLevel(value);
      break;
    case 3:
      var value = /** @type {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Stage} */ (reader.readEnum());
      msg.setLifecycleStage(value);
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
proto.sandboxes.api.v1.Sandbox.Status.Aggregated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Sandbox.Status.Aggregated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Sandbox.Status.Aggregated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Status.Aggregated.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRunStage();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAlertLevel();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getLifecycleStage();
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
proto.sandboxes.api.v1.Sandbox.Status.Aggregated.RunStage = {
  UNAVAIL: 0,
  STARTING: 1,
  RUNNING: 2,
  READY: 3
};

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.Sandbox.Status.Aggregated.AlertLevel = {
  NONE: 0,
  NOTICE: 1,
  WARNING: 2,
  ERROR: 3
};

/**
 * optional RunStage run_stage = 1;
 * @return {!proto.sandboxes.api.v1.Sandbox.Status.Aggregated.RunStage}
 */
proto.sandboxes.api.v1.Sandbox.Status.Aggregated.prototype.getRunStage = function() {
  return /** @type {!proto.sandboxes.api.v1.Sandbox.Status.Aggregated.RunStage} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sandboxes.api.v1.Sandbox.Status.Aggregated.RunStage} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Status.Aggregated} returns this
 */
proto.sandboxes.api.v1.Sandbox.Status.Aggregated.prototype.setRunStage = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional AlertLevel alert_level = 2;
 * @return {!proto.sandboxes.api.v1.Sandbox.Status.Aggregated.AlertLevel}
 */
proto.sandboxes.api.v1.Sandbox.Status.Aggregated.prototype.getAlertLevel = function() {
  return /** @type {!proto.sandboxes.api.v1.Sandbox.Status.Aggregated.AlertLevel} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.sandboxes.api.v1.Sandbox.Status.Aggregated.AlertLevel} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Status.Aggregated} returns this
 */
proto.sandboxes.api.v1.Sandbox.Status.Aggregated.prototype.setAlertLevel = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Lifecycle.Stage lifecycle_stage = 3;
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Stage}
 */
proto.sandboxes.api.v1.Sandbox.Status.Aggregated.prototype.getLifecycleStage = function() {
  return /** @type {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Stage} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Stage} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Status.Aggregated} returns this
 */
proto.sandboxes.api.v1.Sandbox.Status.Aggregated.prototype.setLifecycleStage = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated WorkloadStatus workloads = 1;
 * @return {!Array<!proto.sandboxes.api.v1.WorkloadStatus>}
 */
proto.sandboxes.api.v1.Sandbox.Status.prototype.getWorkloadsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.WorkloadStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.WorkloadStatus, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.WorkloadStatus>} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Status} returns this
*/
proto.sandboxes.api.v1.Sandbox.Status.prototype.setWorkloadsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sandboxes.api.v1.WorkloadStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.WorkloadStatus}
 */
proto.sandboxes.api.v1.Sandbox.Status.prototype.addWorkloads = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sandboxes.api.v1.WorkloadStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.Sandbox.Status} returns this
 */
proto.sandboxes.api.v1.Sandbox.Status.prototype.clearWorkloadsList = function() {
  return this.setWorkloadsList([]);
};


/**
 * repeated ResourceGroupStatus resources = 2;
 * @return {!Array<!proto.sandboxes.api.v1.ResourceGroupStatus>}
 */
proto.sandboxes.api.v1.Sandbox.Status.prototype.getResourcesList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.ResourceGroupStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.ResourceGroupStatus, 2));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.ResourceGroupStatus>} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Status} returns this
*/
proto.sandboxes.api.v1.Sandbox.Status.prototype.setResourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sandboxes.api.v1.ResourceGroupStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.ResourceGroupStatus}
 */
proto.sandboxes.api.v1.Sandbox.Status.prototype.addResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sandboxes.api.v1.ResourceGroupStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.Sandbox.Status} returns this
 */
proto.sandboxes.api.v1.Sandbox.Status.prototype.clearResourcesList = function() {
  return this.setResourcesList([]);
};


/**
 * optional Aggregated sandbox = 3;
 * @return {?proto.sandboxes.api.v1.Sandbox.Status.Aggregated}
 */
proto.sandboxes.api.v1.Sandbox.Status.prototype.getSandbox = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox.Status.Aggregated} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Sandbox.Status.Aggregated, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox.Status.Aggregated|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Status} returns this
*/
proto.sandboxes.api.v1.Sandbox.Status.prototype.setSandbox = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox.Status} returns this
 */
proto.sandboxes.api.v1.Sandbox.Status.prototype.clearSandbox = function() {
  return this.setSandbox(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.Status.prototype.hasSandbox = function() {
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
proto.sandboxes.api.v1.Sandbox.Activities.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Sandbox.Activities.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordTraffic: (f = msg.getRecordTraffic()) && proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic.toObject(includeInstance, f),
    interceptKubernetes: (f = msg.getInterceptKubernetes()) && proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.toObject(includeInstance, f),
    jobExecution: (f = msg.getJobExecution()) && proto.sandboxes.api.v1.Sandbox.Activities.JobExecution.toObject(includeInstance, f),
    pooling: (f = msg.getPooling()) && proto.sandboxes.api.v1.Sandbox.Activities.Pooling.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities}
 */
proto.sandboxes.api.v1.Sandbox.Activities.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Sandbox.Activities;
  return proto.sandboxes.api.v1.Sandbox.Activities.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities}
 */
proto.sandboxes.api.v1.Sandbox.Activities.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic;
      reader.readMessage(value,proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic.deserializeBinaryFromReader);
      msg.setRecordTraffic(value);
      break;
    case 2:
      var value = new proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes;
      reader.readMessage(value,proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.deserializeBinaryFromReader);
      msg.setInterceptKubernetes(value);
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.Sandbox.Activities.JobExecution;
      reader.readMessage(value,proto.sandboxes.api.v1.Sandbox.Activities.JobExecution.deserializeBinaryFromReader);
      msg.setJobExecution(value);
      break;
    case 4:
      var value = new proto.sandboxes.api.v1.Sandbox.Activities.Pooling;
      reader.readMessage(value,proto.sandboxes.api.v1.Sandbox.Activities.Pooling.deserializeBinaryFromReader);
      msg.setPooling(value);
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
proto.sandboxes.api.v1.Sandbox.Activities.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Sandbox.Activities.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordTraffic();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic.serializeBinaryToWriter
    );
  }
  f = message.getInterceptKubernetes();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.serializeBinaryToWriter
    );
  }
  f = message.getJobExecution();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sandboxes.api.v1.Sandbox.Activities.JobExecution.serializeBinaryToWriter
    );
  }
  f = message.getPooling();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sandboxes.api.v1.Sandbox.Activities.Pooling.serializeBinaryToWriter
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
proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic}
 */
proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic;
  return proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic}
 */
proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
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
proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string session_id = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.repeatedFields_ = [3,4,6,7];



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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.toObject = function(includeInstance, msg) {
  var f, obj = {
    infraName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clusterNetwork: (f = msg.getClusterNetwork()) && proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork.toObject(includeInstance, f),
    workloadInterceptionsList: jspb.Message.toObjectList(msg.getWorkloadInterceptionsList(),
    proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.toObject, includeInstance),
    ingressEndpointsList: jspb.Message.toObjectList(msg.getIngressEndpointsList(),
    sandboxes_api_v1_endpoint_pb.Endpoint.toObject, includeInstance),
    interceptCondition: (f = msg.getInterceptCondition()) && proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.toObject(includeInstance, f),
    ingressEndpointsMappingList: jspb.Message.toObjectList(msg.getIngressEndpointsMappingList(),
    proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint.toObject, includeInstance),
    exposeWorkloadsList: jspb.Message.toObjectList(msg.getExposeWorkloadsList(),
    proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.toObject, includeInstance)
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
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes;
  return proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfraName(value);
      break;
    case 2:
      var value = new proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork;
      reader.readMessage(value,proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork.deserializeBinaryFromReader);
      msg.setClusterNetwork(value);
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception;
      reader.readMessage(value,proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.deserializeBinaryFromReader);
      msg.addWorkloadInterceptions(value);
      break;
    case 4:
      var value = new sandboxes_api_v1_endpoint_pb.Endpoint;
      reader.readMessage(value,sandboxes_api_v1_endpoint_pb.Endpoint.deserializeBinaryFromReader);
      msg.addIngressEndpoints(value);
      break;
    case 5:
      var value = new proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition;
      reader.readMessage(value,proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.deserializeBinaryFromReader);
      msg.setInterceptCondition(value);
      break;
    case 6:
      var value = new proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint;
      reader.readMessage(value,proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint.deserializeBinaryFromReader);
      msg.addIngressEndpointsMapping(value);
      break;
    case 7:
      var value = new proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload;
      reader.readMessage(value,proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.deserializeBinaryFromReader);
      msg.addExposeWorkloads(value);
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfraName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClusterNetwork();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork.serializeBinaryToWriter
    );
  }
  f = message.getWorkloadInterceptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.serializeBinaryToWriter
    );
  }
  f = message.getIngressEndpointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      sandboxes_api_v1_endpoint_pb.Endpoint.serializeBinaryToWriter
    );
  }
  f = message.getInterceptCondition();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.serializeBinaryToWriter
    );
  }
  f = message.getIngressEndpointsMappingList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint.serializeBinaryToWriter
    );
  }
  f = message.getExposeWorkloadsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.serializeBinaryToWriter
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectGateway: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    currentNamespace: jspb.Message.getFieldWithDefault(msg, 2, ""),
    viaWorkload: (f = msg.getViaWorkload()) && proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork;
  return proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConnectGateway(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrentNamespace(value);
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload;
      reader.readMessage(value,proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload.deserializeBinaryFromReader);
      msg.setViaWorkload(value);
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectGateway();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getCurrentNamespace();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getViaWorkload();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool connect_gateway = 1;
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork.prototype.getConnectGateway = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork.prototype.setConnectGateway = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string current_namespace = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork.prototype.getCurrentNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork.prototype.setCurrentNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional TargetWorkload via_workload = 3;
 * @return {?proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork.prototype.getViaWorkload = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork} returns this
*/
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork.prototype.setViaWorkload = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork.prototype.clearViaWorkload = function() {
  return this.setViaWorkload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork.prototype.hasViaWorkload = function() {
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, ""),
    namespace: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef;
  return proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 3:
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNamespace();
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
};


/**
 * optional string kind = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef.prototype.setKind = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string namespace = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef.prototype.setName = function(value) {
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, ""),
    namespace: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    container: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload;
  return proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContainer(value);
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNamespace();
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
};


/**
 * optional string kind = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload.prototype.setKind = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string namespace = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string container = 4;
 * @return {string}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload.prototype.getContainer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload.prototype.setContainer = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.repeatedFields_ = [3];



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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.toObject = function(includeInstance, msg) {
  var f, obj = {
    workload: jspb.Message.getFieldWithDefault(msg, 1, ""),
    target: (f = msg.getTarget()) && proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload.toObject(includeInstance, f),
    portForwardRulesList: jspb.Message.toObjectList(msg.getPortForwardRulesList(),
    proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward.toObject, includeInstance),
    volumeMount: (f = msg.getVolumeMount()) && proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount.toObject(includeInstance, f),
    envMapping: (f = msg.getEnvMapping()) && proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception;
  return proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload;
      reader.readMessage(value,proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload.deserializeBinaryFromReader);
      msg.setTarget(value);
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward;
      reader.readMessage(value,proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward.deserializeBinaryFromReader);
      msg.addPortForwardRules(value);
      break;
    case 4:
      var value = new proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount;
      reader.readMessage(value,proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount.deserializeBinaryFromReader);
      msg.setVolumeMount(value);
      break;
    case 5:
      var value = new proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping;
      reader.readMessage(value,proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping.deserializeBinaryFromReader);
      msg.setEnvMapping(value);
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkload();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTarget();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload.serializeBinaryToWriter
    );
  }
  f = message.getPortForwardRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward.serializeBinaryToWriter
    );
  }
  f = message.getVolumeMount();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount.serializeBinaryToWriter
    );
  }
  f = message.getEnvMapping();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping.serializeBinaryToWriter
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward.toObject = function(includeInstance, msg) {
  var f, obj = {
    remotePort: jspb.Message.getFieldWithDefault(msg, 1, 0),
    localPort: jspb.Message.getFieldWithDefault(msg, 2, 0),
    protocol: jspb.Message.getFieldWithDefault(msg, 3, ""),
    localProtocol: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward;
  return proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRemotePort(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLocalPort(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProtocol(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocalProtocol(value);
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRemotePort();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getLocalPort();
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
  f = message.getLocalProtocol();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int32 remote_port = 1;
 * @return {number}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward.prototype.getRemotePort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward.prototype.setRemotePort = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 local_port = 2;
 * @return {number}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward.prototype.getLocalPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward.prototype.setLocalPort = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string protocol = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward.prototype.getProtocol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward.prototype.setProtocol = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string local_protocol = 4;
 * @return {string}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward.prototype.getLocalProtocol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward.prototype.setLocalProtocol = function(value) {
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount.toObject = function(includeInstance, msg) {
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
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount;
  return proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount.deserializeBinaryFromReader = function(msg, reader) {
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount.serializeBinaryToWriter = function(message, writer) {
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping.toObject = function(includeInstance, msg) {
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
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping;
  return proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping.deserializeBinaryFromReader = function(msg, reader) {
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional string workload = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.prototype.getWorkload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.prototype.setWorkload = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TargetWorkload target = 2;
 * @return {?proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.prototype.getTarget = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception} returns this
*/
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.prototype.setTarget = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.prototype.clearTarget = function() {
  return this.setTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.prototype.hasTarget = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated PortForward port_forward_rules = 3;
 * @return {!Array<!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward>}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.prototype.getPortForwardRulesList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward, 3));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward>} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception} returns this
*/
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.prototype.setPortForwardRulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.prototype.addPortForwardRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.PortForward, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.prototype.clearPortForwardRulesList = function() {
  return this.setPortForwardRulesList([]);
};


/**
 * optional VolumeMount volume_mount = 4;
 * @return {?proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.prototype.getVolumeMount = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.VolumeMount|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception} returns this
*/
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.prototype.setVolumeMount = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.prototype.clearVolumeMount = function() {
  return this.setVolumeMount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.prototype.hasVolumeMount = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional EnvMapping env_mapping = 5;
 * @return {?proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.prototype.getEnvMapping = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping, 5));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.EnvMapping|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception} returns this
*/
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.prototype.setEnvMapping = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.prototype.clearEnvMapping = function() {
  return this.setEnvMapping(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception.prototype.hasEnvMapping = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.repeatedFields_ = [1];



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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.toObject = function(includeInstance, msg) {
  var f, obj = {
    customHeadersList: jspb.Message.toObjectList(msg.getCustomHeadersList(),
    proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader.toObject, includeInstance)
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
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition;
  return proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader;
      reader.readMessage(value,proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader.deserializeBinaryFromReader);
      msg.addCustomHeaders(value);
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomHeadersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader.serializeBinaryToWriter
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: jspb.Message.getFieldWithDefault(msg, 1, ""),
    template: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader;
  return proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTemplate(value);
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTemplate();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string header = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader.prototype.getHeader = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader.prototype.setHeader = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string template = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader.prototype.getTemplate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader.prototype.setTemplate = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated CustomHeader custom_headers = 1;
 * @return {!Array<!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader>}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.prototype.getCustomHeadersList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader>} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition} returns this
*/
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.prototype.setCustomHeadersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.prototype.addCustomHeaders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.CustomHeader, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition.prototype.clearCustomHeadersList = function() {
  return this.setCustomHeadersList([]);
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    target: (f = msg.getTarget()) && proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef.toObject(includeInstance, f),
    endpoint: (f = msg.getEndpoint()) && sandboxes_api_v1_endpoint_pb.Endpoint.toObject(includeInstance, f),
    servicePort: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint;
  return proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef;
      reader.readMessage(value,proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef.deserializeBinaryFromReader);
      msg.setTarget(value);
      break;
    case 2:
      var value = new sandboxes_api_v1_endpoint_pb.Endpoint;
      reader.readMessage(value,sandboxes_api_v1_endpoint_pb.Endpoint.deserializeBinaryFromReader);
      msg.setEndpoint(value);
      break;
    case 3:
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTarget();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef.serializeBinaryToWriter
    );
  }
  f = message.getEndpoint();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sandboxes_api_v1_endpoint_pb.Endpoint.serializeBinaryToWriter
    );
  }
  f = message.getServicePort();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional ResourceRef target = 1;
 * @return {?proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint.prototype.getTarget = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ResourceRef|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint} returns this
*/
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint.prototype.setTarget = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint.prototype.clearTarget = function() {
  return this.setTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint.prototype.hasTarget = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Endpoint endpoint = 2;
 * @return {?proto.sandboxes.api.v1.Endpoint}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint.prototype.getEndpoint = function() {
  return /** @type{?proto.sandboxes.api.v1.Endpoint} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_endpoint_pb.Endpoint, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.Endpoint|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint} returns this
*/
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint.prototype.setEndpoint = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint.prototype.clearEndpoint = function() {
  return this.setEndpoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint.prototype.hasEndpoint = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string service_port = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint.prototype.getServicePort = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint.prototype.setServicePort = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.repeatedFields_ = [3];



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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    workload: jspb.Message.getFieldWithDefault(msg, 2, ""),
    portsList: jspb.Message.toObjectList(msg.getPortsList(),
    proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port.toObject, includeInstance)
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
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload;
  return proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkload(value);
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port;
      reader.readMessage(value,proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port.deserializeBinaryFromReader);
      msg.addPorts(value);
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWorkload();
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
      proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port.serializeBinaryToWriter
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port.toObject = function(includeInstance, msg) {
  var f, obj = {
    localPort: jspb.Message.getFieldWithDefault(msg, 1, 0),
    remotePort: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port;
  return proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLocalPort(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRemotePort(value);
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
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocalPort();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRemotePort();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 local_port = 1;
 * @return {number}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port.prototype.getLocalPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port.prototype.setLocalPort = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 remote_port = 2;
 * @return {number}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port.prototype.getRemotePort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port.prototype.setRemotePort = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string workload = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.prototype.getWorkload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.prototype.setWorkload = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Port ports = 3;
 * @return {!Array<!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port>}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.prototype.getPortsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port, 3));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port>} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload} returns this
*/
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.prototype.setPortsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.prototype.addPorts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.Port, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload.prototype.clearPortsList = function() {
  return this.setPortsList([]);
};


/**
 * optional string infra_name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.prototype.getInfraName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.prototype.setInfraName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ClusterNetwork cluster_network = 2;
 * @return {?proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.prototype.getClusterNetwork = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ClusterNetwork|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes} returns this
*/
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.prototype.setClusterNetwork = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.prototype.clearClusterNetwork = function() {
  return this.setClusterNetwork(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.prototype.hasClusterNetwork = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated WorkloadInterception workload_interceptions = 3;
 * @return {!Array<!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception>}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.prototype.getWorkloadInterceptionsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception, 3));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception>} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes} returns this
*/
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.prototype.setWorkloadInterceptionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.prototype.addWorkloadInterceptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.WorkloadInterception, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.prototype.clearWorkloadInterceptionsList = function() {
  return this.setWorkloadInterceptionsList([]);
};


/**
 * repeated Endpoint ingress_endpoints = 4;
 * @return {!Array<!proto.sandboxes.api.v1.Endpoint>}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.prototype.getIngressEndpointsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.Endpoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_endpoint_pb.Endpoint, 4));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.Endpoint>} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes} returns this
*/
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.prototype.setIngressEndpointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.sandboxes.api.v1.Endpoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Endpoint}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.prototype.addIngressEndpoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.sandboxes.api.v1.Endpoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.prototype.clearIngressEndpointsList = function() {
  return this.setIngressEndpointsList([]);
};


/**
 * optional InterceptCondition intercept_condition = 5;
 * @return {?proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.prototype.getInterceptCondition = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition, 5));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.InterceptCondition|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes} returns this
*/
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.prototype.setInterceptCondition = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.prototype.clearInterceptCondition = function() {
  return this.setInterceptCondition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.prototype.hasInterceptCondition = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated IngressEndpoint ingress_endpoints_mapping = 6;
 * @return {!Array<!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint>}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.prototype.getIngressEndpointsMappingList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint, 6));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint>} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes} returns this
*/
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.prototype.setIngressEndpointsMappingList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.prototype.addIngressEndpointsMapping = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.IngressEndpoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.prototype.clearIngressEndpointsMappingList = function() {
  return this.setIngressEndpointsMappingList([]);
};


/**
 * repeated ExposeWorkload expose_workloads = 7;
 * @return {!Array<!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload>}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.prototype.getExposeWorkloadsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload, 7));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload>} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes} returns this
*/
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.prototype.setExposeWorkloadsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload}
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.prototype.addExposeWorkloads = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.ExposeWorkload, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.prototype.clearExposeWorkloadsList = function() {
  return this.setExposeWorkloadsList([]);
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
proto.sandboxes.api.v1.Sandbox.Activities.JobExecution.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Sandbox.Activities.JobExecution.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.JobExecution} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.JobExecution.toObject = function(includeInstance, msg) {
  var f, obj = {
    jobId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    executionId: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.JobExecution}
 */
proto.sandboxes.api.v1.Sandbox.Activities.JobExecution.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Sandbox.Activities.JobExecution;
  return proto.sandboxes.api.v1.Sandbox.Activities.JobExecution.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.JobExecution} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.JobExecution}
 */
proto.sandboxes.api.v1.Sandbox.Activities.JobExecution.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExecutionId(value);
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
proto.sandboxes.api.v1.Sandbox.Activities.JobExecution.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Sandbox.Activities.JobExecution.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.JobExecution} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.JobExecution.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJobId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExecutionId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string job_id = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.Sandbox.Activities.JobExecution.prototype.getJobId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.JobExecution} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.JobExecution.prototype.setJobId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 execution_id = 2;
 * @return {number}
 */
proto.sandboxes.api.v1.Sandbox.Activities.JobExecution.prototype.getExecutionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.JobExecution} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.JobExecution.prototype.setExecutionId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.sandboxes.api.v1.Sandbox.Activities.Pooling.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Sandbox.Activities.Pooling.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.Pooling} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.Pooling.toObject = function(includeInstance, msg) {
  var f, obj = {
    poolId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    state: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.Pooling}
 */
proto.sandboxes.api.v1.Sandbox.Activities.Pooling.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Sandbox.Activities.Pooling;
  return proto.sandboxes.api.v1.Sandbox.Activities.Pooling.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.Pooling} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.Pooling}
 */
proto.sandboxes.api.v1.Sandbox.Activities.Pooling.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {!proto.sandboxes.api.v1.Sandbox.Activities.Pooling.State} */ (reader.readEnum());
      msg.setState(value);
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
proto.sandboxes.api.v1.Sandbox.Activities.Pooling.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Sandbox.Activities.Pooling.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.Pooling} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Activities.Pooling.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPoolId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.sandboxes.api.v1.Sandbox.Activities.Pooling.State = {
  UNSPECIFIED: 0,
  STANDBY: 1
};

/**
 * optional string pool_id = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.Sandbox.Activities.Pooling.prototype.getPoolId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.Pooling} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.Pooling.prototype.setPoolId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional State state = 2;
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.Pooling.State}
 */
proto.sandboxes.api.v1.Sandbox.Activities.Pooling.prototype.getState = function() {
  return /** @type {!proto.sandboxes.api.v1.Sandbox.Activities.Pooling.State} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.sandboxes.api.v1.Sandbox.Activities.Pooling.State} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities.Pooling} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.Pooling.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional RecordTraffic record_traffic = 1;
 * @return {?proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic}
 */
proto.sandboxes.api.v1.Sandbox.Activities.prototype.getRecordTraffic = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox.Activities.RecordTraffic|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities} returns this
*/
proto.sandboxes.api.v1.Sandbox.Activities.prototype.setRecordTraffic = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.prototype.clearRecordTraffic = function() {
  return this.setRecordTraffic(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.Activities.prototype.hasRecordTraffic = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional InterceptKubernetes intercept_kubernetes = 2;
 * @return {?proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes}
 */
proto.sandboxes.api.v1.Sandbox.Activities.prototype.getInterceptKubernetes = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities} returns this
*/
proto.sandboxes.api.v1.Sandbox.Activities.prototype.setInterceptKubernetes = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.prototype.clearInterceptKubernetes = function() {
  return this.setInterceptKubernetes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.Activities.prototype.hasInterceptKubernetes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional JobExecution job_execution = 3;
 * @return {?proto.sandboxes.api.v1.Sandbox.Activities.JobExecution}
 */
proto.sandboxes.api.v1.Sandbox.Activities.prototype.getJobExecution = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox.Activities.JobExecution} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Sandbox.Activities.JobExecution, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox.Activities.JobExecution|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities} returns this
*/
proto.sandboxes.api.v1.Sandbox.Activities.prototype.setJobExecution = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.prototype.clearJobExecution = function() {
  return this.setJobExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.Activities.prototype.hasJobExecution = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Pooling pooling = 4;
 * @return {?proto.sandboxes.api.v1.Sandbox.Activities.Pooling}
 */
proto.sandboxes.api.v1.Sandbox.Activities.prototype.getPooling = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox.Activities.Pooling} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Sandbox.Activities.Pooling, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox.Activities.Pooling|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities} returns this
*/
proto.sandboxes.api.v1.Sandbox.Activities.prototype.setPooling = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox.Activities} returns this
 */
proto.sandboxes.api.v1.Sandbox.Activities.prototype.clearPooling = function() {
  return this.setPooling(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.Activities.prototype.hasPooling = function() {
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
proto.sandboxes.api.v1.Sandbox.Lifecycle.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Sandbox.Lifecycle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Sandbox.Lifecycle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.toObject = function(includeInstance, msg) {
  var f, obj = {
    stage: jspb.Message.getFieldWithDefault(msg, 1, 0),
    stageVersion: jspb.Message.getFieldWithDefault(msg, 2, 0),
    handlersMap: (f = msg.getHandlersMap()) ? f.toObject(includeInstance, proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState.toObject) : [],
    statesMap: (f = msg.getStatesMap()) ? f.toObject(includeInstance, undefined) : [],
    transitionsMap: (f = msg.getTransitionsMap()) ? f.toObject(includeInstance, proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.toObject) : [],
    seq: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle}
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Sandbox.Lifecycle;
  return proto.sandboxes.api.v1.Sandbox.Lifecycle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Sandbox.Lifecycle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle}
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Stage} */ (reader.readEnum());
      msg.setStage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStageVersion(value);
      break;
    case 3:
      var value = msg.getHandlersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState.deserializeBinaryFromReader, "", new proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState());
         });
      break;
    case 4:
      var value = msg.getStatesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 5:
      var value = msg.getTransitionsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.deserializeBinaryFromReader, "", new proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition());
         });
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeq(value);
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
proto.sandboxes.api.v1.Sandbox.Lifecycle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Sandbox.Lifecycle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Sandbox.Lifecycle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStage();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getStageVersion();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getHandlersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState.serializeBinaryToWriter);
  }
  f = message.getStatesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getTransitionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.serializeBinaryToWriter);
  }
  f = message.getSeq();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.Stage = {
  NONE: 0,
  CREATING: 1,
  RUNNING: 2,
  SUSPENDING: 3,
  SUSPENDED: 4,
  RESUMING: 5,
  DELETING: 6,
  DELETED: 7
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
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.toObject = function(includeInstance, msg) {
  var f, obj = {
    current: jspb.Message.getFieldWithDefault(msg, 1, 0),
    seq: jspb.Message.getFieldWithDefault(msg, 2, 0),
    status: (f = msg.getStatus()) && sandboxes_api_v1_common_pb.RuntimeStatus.toObject(includeInstance, f),
    blocker: (f = msg.getBlocker()) && proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker.toObject(includeInstance, f),
    recreate: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition}
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition;
  return proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition}
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Stage} */ (reader.readEnum());
      msg.setCurrent(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeq(value);
      break;
    case 3:
      var value = new sandboxes_api_v1_common_pb.RuntimeStatus;
      reader.readMessage(value,sandboxes_api_v1_common_pb.RuntimeStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 4:
      var value = new proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker;
      reader.readMessage(value,proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker.deserializeBinaryFromReader);
      msg.setBlocker(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRecreate(value);
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
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSeq();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      sandboxes_api_v1_common_pb.RuntimeStatus.serializeBinaryToWriter
    );
  }
  f = message.getBlocker();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker.serializeBinaryToWriter
    );
  }
  f = message.getRecreate();
  if (f) {
    writer.writeBool(
      5,
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
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker.toObject = function(includeInstance, msg) {
  var f, obj = {
    stage: jspb.Message.getFieldWithDefault(msg, 1, 0),
    seq: jspb.Message.getFieldWithDefault(msg, 2, 0),
    status: (f = msg.getStatus()) && sandboxes_api_v1_common_pb.RuntimeStatus.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker}
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker;
  return proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker}
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Stage} */ (reader.readEnum());
      msg.setStage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeq(value);
      break;
    case 3:
      var value = new sandboxes_api_v1_common_pb.RuntimeStatus;
      reader.readMessage(value,sandboxes_api_v1_common_pb.RuntimeStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
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
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStage();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSeq();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      sandboxes_api_v1_common_pb.RuntimeStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional Stage stage = 1;
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Stage}
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker.prototype.getStage = function() {
  return /** @type {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Stage} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Stage} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker} returns this
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker.prototype.setStage = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 seq = 2;
 * @return {number}
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker.prototype.getSeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker} returns this
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker.prototype.setSeq = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional RuntimeStatus status = 3;
 * @return {?proto.sandboxes.api.v1.RuntimeStatus}
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker.prototype.getStatus = function() {
  return /** @type{?proto.sandboxes.api.v1.RuntimeStatus} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_common_pb.RuntimeStatus, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.RuntimeStatus|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker} returns this
*/
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker} returns this
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Stage current = 1;
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Stage}
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.prototype.getCurrent = function() {
  return /** @type {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Stage} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Stage} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition} returns this
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.prototype.setCurrent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 seq = 2;
 * @return {number}
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.prototype.getSeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition} returns this
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.prototype.setSeq = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional RuntimeStatus status = 3;
 * @return {?proto.sandboxes.api.v1.RuntimeStatus}
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.prototype.getStatus = function() {
  return /** @type{?proto.sandboxes.api.v1.RuntimeStatus} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_common_pb.RuntimeStatus, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.RuntimeStatus|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition} returns this
*/
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition} returns this
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Blocker blocker = 4;
 * @return {?proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker}
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.prototype.getBlocker = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.Blocker|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition} returns this
*/
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.prototype.setBlocker = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition} returns this
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.prototype.clearBlocker = function() {
  return this.setBlocker(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.prototype.hasBlocker = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool recreate = 5;
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.prototype.getRecreate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition} returns this
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition.prototype.setRecreate = function(value) {
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
proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && sandboxes_api_v1_common_pb.RuntimeStatus.toObject(includeInstance, f),
    output: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState}
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState;
  return proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState}
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_common_pb.RuntimeStatus;
      reader.readMessage(value,sandboxes_api_v1_common_pb.RuntimeStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOutput(value);
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
proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_common_pb.RuntimeStatus.serializeBinaryToWriter
    );
  }
  f = message.getOutput();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional RuntimeStatus status = 1;
 * @return {?proto.sandboxes.api.v1.RuntimeStatus}
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState.prototype.getStatus = function() {
  return /** @type{?proto.sandboxes.api.v1.RuntimeStatus} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_common_pb.RuntimeStatus, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.RuntimeStatus|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState} returns this
*/
proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState} returns this
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string output = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState.prototype.getOutput = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState} returns this
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState.prototype.setOutput = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Stage stage = 1;
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Stage}
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.prototype.getStage = function() {
  return /** @type {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Stage} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sandboxes.api.v1.Sandbox.Lifecycle.Stage} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle} returns this
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.prototype.setStage = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 stage_version = 2;
 * @return {number}
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.prototype.getStageVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle} returns this
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.prototype.setStageVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * map<string, HandlerState> handlers = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState>}
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.prototype.getHandlersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.sandboxes.api.v1.Sandbox.Lifecycle.HandlerState));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle} returns this
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.prototype.clearHandlersMap = function() {
  this.getHandlersMap().clear();
  return this;};


/**
 * map<string, string> states = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.prototype.getStatesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle} returns this
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.prototype.clearStatesMap = function() {
  this.getStatesMap().clear();
  return this;};


/**
 * map<string, Transition> transitions = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition>}
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.prototype.getTransitionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      proto.sandboxes.api.v1.Sandbox.Lifecycle.Transition));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle} returns this
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.prototype.clearTransitionsMap = function() {
  this.getTransitionsMap().clear();
  return this;};


/**
 * optional int32 seq = 6;
 * @return {number}
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.prototype.getSeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Lifecycle} returns this
 */
proto.sandboxes.api.v1.Sandbox.Lifecycle.prototype.setSeq = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
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
proto.sandboxes.api.v1.Sandbox.Snapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Sandbox.Snapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Sandbox.Snapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Snapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
    seq: jspb.Message.getFieldWithDefault(msg, 1, 0),
    snapshotId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.sandboxes.api.v1.Sandbox.Snapshot}
 */
proto.sandboxes.api.v1.Sandbox.Snapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Sandbox.Snapshot;
  return proto.sandboxes.api.v1.Sandbox.Snapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Sandbox.Snapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Sandbox.Snapshot}
 */
proto.sandboxes.api.v1.Sandbox.Snapshot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeq(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSnapshotId(value);
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
proto.sandboxes.api.v1.Sandbox.Snapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Sandbox.Snapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Sandbox.Snapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Sandbox.Snapshot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeq();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSnapshotId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 seq = 1;
 * @return {number}
 */
proto.sandboxes.api.v1.Sandbox.Snapshot.prototype.getSeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Snapshot} returns this
 */
proto.sandboxes.api.v1.Sandbox.Snapshot.prototype.setSeq = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string snapshot_id = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.Sandbox.Snapshot.prototype.getSnapshotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Sandbox.Snapshot} returns this
 */
proto.sandboxes.api.v1.Sandbox.Snapshot.prototype.setSnapshotId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ObjectMeta meta = 1;
 * @return {?proto.sandboxes.api.v1.ObjectMeta}
 */
proto.sandboxes.api.v1.Sandbox.prototype.getMeta = function() {
  return /** @type{?proto.sandboxes.api.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_object_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.ObjectMeta|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox} returns this
*/
proto.sandboxes.api.v1.Sandbox.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox} returns this
 */
proto.sandboxes.api.v1.Sandbox.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.Sandbox.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Sandbox} returns this
 */
proto.sandboxes.api.v1.Sandbox.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Composer composer = 3;
 * @return {?proto.sandboxes.api.v1.Composer}
 */
proto.sandboxes.api.v1.Sandbox.prototype.getComposer = function() {
  return /** @type{?proto.sandboxes.api.v1.Composer} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Composer, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.Composer|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox} returns this
*/
proto.sandboxes.api.v1.Sandbox.prototype.setComposer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox} returns this
 */
proto.sandboxes.api.v1.Sandbox.prototype.clearComposer = function() {
  return this.setComposer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.prototype.hasComposer = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional App app = 4;
 * @return {?proto.sandboxes.api.v1.App}
 */
proto.sandboxes.api.v1.Sandbox.prototype.getApp = function() {
  return /** @type{?proto.sandboxes.api.v1.App} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_app_pb.App, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.App|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox} returns this
*/
proto.sandboxes.api.v1.Sandbox.prototype.setApp = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox} returns this
 */
proto.sandboxes.api.v1.Sandbox.prototype.clearApp = function() {
  return this.setApp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.prototype.hasApp = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Spec spec = 5;
 * @return {?proto.sandboxes.api.v1.Sandbox.Spec}
 */
proto.sandboxes.api.v1.Sandbox.prototype.getSpec = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox.Spec} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Sandbox.Spec, 5));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox.Spec|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox} returns this
*/
proto.sandboxes.api.v1.Sandbox.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox} returns this
 */
proto.sandboxes.api.v1.Sandbox.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Status status = 6;
 * @return {?proto.sandboxes.api.v1.Sandbox.Status}
 */
proto.sandboxes.api.v1.Sandbox.prototype.getStatus = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox.Status} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Sandbox.Status, 6));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox.Status|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox} returns this
*/
proto.sandboxes.api.v1.Sandbox.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox} returns this
 */
proto.sandboxes.api.v1.Sandbox.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Activities activities = 7;
 * @return {?proto.sandboxes.api.v1.Sandbox.Activities}
 */
proto.sandboxes.api.v1.Sandbox.prototype.getActivities = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox.Activities} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Sandbox.Activities, 7));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox.Activities|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox} returns this
*/
proto.sandboxes.api.v1.Sandbox.prototype.setActivities = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox} returns this
 */
proto.sandboxes.api.v1.Sandbox.prototype.clearActivities = function() {
  return this.setActivities(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.prototype.hasActivities = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string region = 8;
 * @return {string}
 */
proto.sandboxes.api.v1.Sandbox.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Sandbox} returns this
 */
proto.sandboxes.api.v1.Sandbox.prototype.setRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional Lifecycle lifecycle = 9;
 * @return {?proto.sandboxes.api.v1.Sandbox.Lifecycle}
 */
proto.sandboxes.api.v1.Sandbox.prototype.getLifecycle = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox.Lifecycle} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Sandbox.Lifecycle, 9));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox.Lifecycle|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox} returns this
*/
proto.sandboxes.api.v1.Sandbox.prototype.setLifecycle = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox} returns this
 */
proto.sandboxes.api.v1.Sandbox.prototype.clearLifecycle = function() {
  return this.setLifecycle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.prototype.hasLifecycle = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional AppDefinition definition = 10;
 * @return {?proto.sandboxes.api.v1.AppDefinition}
 */
proto.sandboxes.api.v1.Sandbox.prototype.getDefinition = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_app_pb.AppDefinition, 10));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox} returns this
*/
proto.sandboxes.api.v1.Sandbox.prototype.setDefinition = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox} returns this
 */
proto.sandboxes.api.v1.Sandbox.prototype.clearDefinition = function() {
  return this.setDefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.prototype.hasDefinition = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Snapshot snapshot = 11;
 * @return {?proto.sandboxes.api.v1.Sandbox.Snapshot}
 */
proto.sandboxes.api.v1.Sandbox.prototype.getSnapshot = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox.Snapshot} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Sandbox.Snapshot, 11));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox.Snapshot|undefined} value
 * @return {!proto.sandboxes.api.v1.Sandbox} returns this
*/
proto.sandboxes.api.v1.Sandbox.prototype.setSnapshot = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Sandbox} returns this
 */
proto.sandboxes.api.v1.Sandbox.prototype.clearSnapshot = function() {
  return this.setSnapshot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Sandbox.prototype.hasSnapshot = function() {
  return jspb.Message.getField(this, 11) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sandboxes.api.v1.WorkloadConfig.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.WorkloadConfig.ConfigCase = {
  CONFIG_NOT_SET: 0,
  WORKSPACE: 1
};

/**
 * @return {proto.sandboxes.api.v1.WorkloadConfig.ConfigCase}
 */
proto.sandboxes.api.v1.WorkloadConfig.prototype.getConfigCase = function() {
  return /** @type {proto.sandboxes.api.v1.WorkloadConfig.ConfigCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.WorkloadConfig.oneofGroups_[0]));
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
proto.sandboxes.api.v1.WorkloadConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.WorkloadConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.WorkloadConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    workspace: (f = msg.getWorkspace()) && proto.sandboxes.api.v1.WorkloadConfig.Workspace.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.WorkloadConfig}
 */
proto.sandboxes.api.v1.WorkloadConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.WorkloadConfig;
  return proto.sandboxes.api.v1.WorkloadConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.WorkloadConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.WorkloadConfig}
 */
proto.sandboxes.api.v1.WorkloadConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.WorkloadConfig.Workspace;
      reader.readMessage(value,proto.sandboxes.api.v1.WorkloadConfig.Workspace.deserializeBinaryFromReader);
      msg.setWorkspace(value);
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
proto.sandboxes.api.v1.WorkloadConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.WorkloadConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.WorkloadConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkspace();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sandboxes.api.v1.WorkloadConfig.Workspace.serializeBinaryToWriter
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
proto.sandboxes.api.v1.WorkloadConfig.Workspace.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.WorkloadConfig.Workspace.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.WorkloadConfig.Workspace} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadConfig.Workspace.toObject = function(includeInstance, msg) {
  var f, obj = {
    mode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    setupControl: (f = msg.getSetupControl()) && proto.sandboxes.api.v1.Workload.Workspace.SetupControl.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.WorkloadConfig.Workspace}
 */
proto.sandboxes.api.v1.WorkloadConfig.Workspace.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.WorkloadConfig.Workspace;
  return proto.sandboxes.api.v1.WorkloadConfig.Workspace.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.WorkloadConfig.Workspace} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.WorkloadConfig.Workspace}
 */
proto.sandboxes.api.v1.WorkloadConfig.Workspace.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sandboxes.api.v1.Workload.Workspace.Mode} */ (reader.readEnum());
      msg.setMode(value);
      break;
    case 2:
      var value = new proto.sandboxes.api.v1.Workload.Workspace.SetupControl;
      reader.readMessage(value,proto.sandboxes.api.v1.Workload.Workspace.SetupControl.deserializeBinaryFromReader);
      msg.setSetupControl(value);
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
proto.sandboxes.api.v1.WorkloadConfig.Workspace.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.WorkloadConfig.Workspace.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.WorkloadConfig.Workspace} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadConfig.Workspace.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSetupControl();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sandboxes.api.v1.Workload.Workspace.SetupControl.serializeBinaryToWriter
    );
  }
};


/**
 * optional Workload.Workspace.Mode mode = 1;
 * @return {!proto.sandboxes.api.v1.Workload.Workspace.Mode}
 */
proto.sandboxes.api.v1.WorkloadConfig.Workspace.prototype.getMode = function() {
  return /** @type {!proto.sandboxes.api.v1.Workload.Workspace.Mode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sandboxes.api.v1.Workload.Workspace.Mode} value
 * @return {!proto.sandboxes.api.v1.WorkloadConfig.Workspace} returns this
 */
proto.sandboxes.api.v1.WorkloadConfig.Workspace.prototype.setMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Workload.Workspace.SetupControl setup_control = 2;
 * @return {?proto.sandboxes.api.v1.Workload.Workspace.SetupControl}
 */
proto.sandboxes.api.v1.WorkloadConfig.Workspace.prototype.getSetupControl = function() {
  return /** @type{?proto.sandboxes.api.v1.Workload.Workspace.SetupControl} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Workload.Workspace.SetupControl, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.Workload.Workspace.SetupControl|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadConfig.Workspace} returns this
*/
proto.sandboxes.api.v1.WorkloadConfig.Workspace.prototype.setSetupControl = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadConfig.Workspace} returns this
 */
proto.sandboxes.api.v1.WorkloadConfig.Workspace.prototype.clearSetupControl = function() {
  return this.setSetupControl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadConfig.Workspace.prototype.hasSetupControl = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Workspace workspace = 1;
 * @return {?proto.sandboxes.api.v1.WorkloadConfig.Workspace}
 */
proto.sandboxes.api.v1.WorkloadConfig.prototype.getWorkspace = function() {
  return /** @type{?proto.sandboxes.api.v1.WorkloadConfig.Workspace} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.WorkloadConfig.Workspace, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.WorkloadConfig.Workspace|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadConfig} returns this
*/
proto.sandboxes.api.v1.WorkloadConfig.prototype.setWorkspace = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.sandboxes.api.v1.WorkloadConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadConfig} returns this
 */
proto.sandboxes.api.v1.WorkloadConfig.prototype.clearWorkspace = function() {
  return this.setWorkspace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadConfig.prototype.hasWorkspace = function() {
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
proto.sandboxes.api.v1.EndpointConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.EndpointConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.EndpointConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.EndpointConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    authProxy: (f = msg.getAuthProxy()) && proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.EndpointConfig}
 */
proto.sandboxes.api.v1.EndpointConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.EndpointConfig;
  return proto.sandboxes.api.v1.EndpointConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.EndpointConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.EndpointConfig}
 */
proto.sandboxes.api.v1.EndpointConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig;
      reader.readMessage(value,proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.deserializeBinaryFromReader);
      msg.setAuthProxy(value);
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
proto.sandboxes.api.v1.EndpointConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.EndpointConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.EndpointConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.EndpointConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthProxy();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.repeatedFields_ = [4];



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
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rules: (f = msg.getRules()) && proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules.toObject(includeInstance, f),
    setMode: (f = msg.getSetMode()) && proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode.toObject(includeInstance, f),
    additionalRequiredHeadersList: jspb.Message.toObjectList(msg.getAdditionalRequiredHeadersList(),
    sandboxes_api_v1_endpoint_pb.HTTPRoutingRule.HeaderRegexp.toObject, includeInstance)
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
 * @return {!proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig}
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig;
  return proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig}
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = new proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules;
      reader.readMessage(value,proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules.deserializeBinaryFromReader);
      msg.setRules(value);
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode;
      reader.readMessage(value,proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode.deserializeBinaryFromReader);
      msg.setSetMode(value);
      break;
    case 4:
      var value = new sandboxes_api_v1_endpoint_pb.HTTPRoutingRule.HeaderRegexp;
      reader.readMessage(value,sandboxes_api_v1_endpoint_pb.HTTPRoutingRule.HeaderRegexp.deserializeBinaryFromReader);
      msg.addAdditionalRequiredHeaders(value);
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
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getRules();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules.serializeBinaryToWriter
    );
  }
  f = message.getSetMode();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode.serializeBinaryToWriter
    );
  }
  f = message.getAdditionalRequiredHeadersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      sandboxes_api_v1_endpoint_pb.HTTPRoutingRule.HeaderRegexp.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.State = {
  UNSPECIFIED: 0,
  ENABLED: 1,
  DISABLED: 2
};


/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules.repeatedFields_ = [1];



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
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules.toObject = function(includeInstance, msg) {
  var f, obj = {
    rulesList: jspb.Message.toObjectList(msg.getRulesList(),
    sandboxes_api_v1_endpoint_pb.AuthProxy.Rule.toObject, includeInstance)
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
 * @return {!proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules}
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules;
  return proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules}
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_endpoint_pb.AuthProxy.Rule;
      reader.readMessage(value,sandboxes_api_v1_endpoint_pb.AuthProxy.Rule.deserializeBinaryFromReader);
      msg.addRules(value);
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
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      sandboxes_api_v1_endpoint_pb.AuthProxy.Rule.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AuthProxy.Rule rules = 1;
 * @return {!Array<!proto.sandboxes.api.v1.AuthProxy.Rule>}
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules.prototype.getRulesList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.AuthProxy.Rule>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_endpoint_pb.AuthProxy.Rule, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.AuthProxy.Rule>} value
 * @return {!proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules} returns this
*/
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules.prototype.setRulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sandboxes.api.v1.AuthProxy.Rule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AuthProxy.Rule}
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules.prototype.addRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sandboxes.api.v1.AuthProxy.Rule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules} returns this
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules.prototype.clearRulesList = function() {
  return this.setRulesList([]);
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
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode.toObject = function(includeInstance, msg) {
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
 * @return {!proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode}
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode;
  return proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode}
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sandboxes.api.v1.AuthProxy.Mode} */ (reader.readEnum());
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
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode.serializeBinaryToWriter = function(message, writer) {
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
 * optional AuthProxy.Mode mode = 1;
 * @return {!proto.sandboxes.api.v1.AuthProxy.Mode}
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode.prototype.getMode = function() {
  return /** @type {!proto.sandboxes.api.v1.AuthProxy.Mode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sandboxes.api.v1.AuthProxy.Mode} value
 * @return {!proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode} returns this
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode.prototype.setMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional State state = 1;
 * @return {!proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.State}
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.prototype.getState = function() {
  return /** @type {!proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.State} value
 * @return {!proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig} returns this
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Rules rules = 2;
 * @return {?proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules}
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.prototype.getRules = function() {
  return /** @type{?proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.Rules|undefined} value
 * @return {!proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig} returns this
*/
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.prototype.setRules = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig} returns this
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.prototype.clearRules = function() {
  return this.setRules(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.prototype.hasRules = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SetMode set_mode = 3;
 * @return {?proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode}
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.prototype.getSetMode = function() {
  return /** @type{?proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.SetMode|undefined} value
 * @return {!proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig} returns this
*/
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.prototype.setSetMode = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig} returns this
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.prototype.clearSetMode = function() {
  return this.setSetMode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.prototype.hasSetMode = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated HTTPRoutingRule.HeaderRegexp additional_required_headers = 4;
 * @return {!Array<!proto.sandboxes.api.v1.HTTPRoutingRule.HeaderRegexp>}
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.prototype.getAdditionalRequiredHeadersList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.HTTPRoutingRule.HeaderRegexp>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_endpoint_pb.HTTPRoutingRule.HeaderRegexp, 4));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.HTTPRoutingRule.HeaderRegexp>} value
 * @return {!proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig} returns this
*/
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.prototype.setAdditionalRequiredHeadersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.sandboxes.api.v1.HTTPRoutingRule.HeaderRegexp=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.HTTPRoutingRule.HeaderRegexp}
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.prototype.addAdditionalRequiredHeaders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.sandboxes.api.v1.HTTPRoutingRule.HeaderRegexp, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig} returns this
 */
proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig.prototype.clearAdditionalRequiredHeadersList = function() {
  return this.setAdditionalRequiredHeadersList([]);
};


/**
 * optional AuthProxyConfig auth_proxy = 1;
 * @return {?proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig}
 */
proto.sandboxes.api.v1.EndpointConfig.prototype.getAuthProxy = function() {
  return /** @type{?proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.EndpointConfig.AuthProxyConfig|undefined} value
 * @return {!proto.sandboxes.api.v1.EndpointConfig} returns this
*/
proto.sandboxes.api.v1.EndpointConfig.prototype.setAuthProxy = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.EndpointConfig} returns this
 */
proto.sandboxes.api.v1.EndpointConfig.prototype.clearAuthProxy = function() {
  return this.setAuthProxy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.EndpointConfig.prototype.hasAuthProxy = function() {
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
proto.sandboxes.api.v1.Workload.oneofGroups_ = [[10,11,12]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.Workload.WorkloadCase = {
  WORKLOAD_NOT_SET: 0,
  WORKSPACE: 10,
  DEPENDENCY: 11,
  CONTAINER: 12
};

/**
 * @return {proto.sandboxes.api.v1.Workload.WorkloadCase}
 */
proto.sandboxes.api.v1.Workload.prototype.getWorkloadCase = function() {
  return /** @type {proto.sandboxes.api.v1.Workload.WorkloadCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.Workload.oneofGroups_[0]));
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
proto.sandboxes.api.v1.Workload.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Workload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Workload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Workload.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    workspace: (f = msg.getWorkspace()) && proto.sandboxes.api.v1.Workload.Workspace.toObject(includeInstance, f),
    dependency: (f = msg.getDependency()) && proto.sandboxes.api.v1.Workload.Dependency.toObject(includeInstance, f),
    container: (f = msg.getContainer()) && proto.sandboxes.api.v1.Workload.Container.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.Workload}
 */
proto.sandboxes.api.v1.Workload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Workload;
  return proto.sandboxes.api.v1.Workload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Workload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Workload}
 */
proto.sandboxes.api.v1.Workload.deserializeBinaryFromReader = function(msg, reader) {
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
    case 10:
      var value = new proto.sandboxes.api.v1.Workload.Workspace;
      reader.readMessage(value,proto.sandboxes.api.v1.Workload.Workspace.deserializeBinaryFromReader);
      msg.setWorkspace(value);
      break;
    case 11:
      var value = new proto.sandboxes.api.v1.Workload.Dependency;
      reader.readMessage(value,proto.sandboxes.api.v1.Workload.Dependency.deserializeBinaryFromReader);
      msg.setDependency(value);
      break;
    case 12:
      var value = new proto.sandboxes.api.v1.Workload.Container;
      reader.readMessage(value,proto.sandboxes.api.v1.Workload.Container.deserializeBinaryFromReader);
      msg.setContainer(value);
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
proto.sandboxes.api.v1.Workload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Workload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Workload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Workload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWorkspace();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.sandboxes.api.v1.Workload.Workspace.serializeBinaryToWriter
    );
  }
  f = message.getDependency();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.sandboxes.api.v1.Workload.Dependency.serializeBinaryToWriter
    );
  }
  f = message.getContainer();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.sandboxes.api.v1.Workload.Container.serializeBinaryToWriter
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
proto.sandboxes.api.v1.Workload.Workspace.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Workload.Workspace.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Workload.Workspace} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Workload.Workspace.toObject = function(includeInstance, msg) {
  var f, obj = {
    mode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    spec: (f = msg.getSpec()) && sandboxes_api_v1_app_pb.AppDefinition.Workspace.toObject(includeInstance, f),
    setupControl: (f = msg.getSetupControl()) && proto.sandboxes.api.v1.Workload.Workspace.SetupControl.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.Workload.Workspace}
 */
proto.sandboxes.api.v1.Workload.Workspace.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Workload.Workspace;
  return proto.sandboxes.api.v1.Workload.Workspace.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Workload.Workspace} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Workload.Workspace}
 */
proto.sandboxes.api.v1.Workload.Workspace.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sandboxes.api.v1.Workload.Workspace.Mode} */ (reader.readEnum());
      msg.setMode(value);
      break;
    case 2:
      var value = new sandboxes_api_v1_app_pb.AppDefinition.Workspace;
      reader.readMessage(value,sandboxes_api_v1_app_pb.AppDefinition.Workspace.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.Workload.Workspace.SetupControl;
      reader.readMessage(value,proto.sandboxes.api.v1.Workload.Workspace.SetupControl.deserializeBinaryFromReader);
      msg.setSetupControl(value);
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
proto.sandboxes.api.v1.Workload.Workspace.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Workload.Workspace.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Workload.Workspace} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Workload.Workspace.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sandboxes_api_v1_app_pb.AppDefinition.Workspace.serializeBinaryToWriter
    );
  }
  f = message.getSetupControl();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sandboxes.api.v1.Workload.Workspace.SetupControl.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.sandboxes.api.v1.Workload.Workspace.Mode = {
  UNSPECIFIED: 0,
  MANUAL: 1,
  AUTO: 2
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
proto.sandboxes.api.v1.Workload.Workspace.SetupControl.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Workload.Workspace.SetupControl.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Workload.Workspace.SetupControl} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Workload.Workspace.SetupControl.toObject = function(includeInstance, msg) {
  var f, obj = {
    pauseOnFailure: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.sandboxes.api.v1.Workload.Workspace.SetupControl}
 */
proto.sandboxes.api.v1.Workload.Workspace.SetupControl.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Workload.Workspace.SetupControl;
  return proto.sandboxes.api.v1.Workload.Workspace.SetupControl.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Workload.Workspace.SetupControl} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Workload.Workspace.SetupControl}
 */
proto.sandboxes.api.v1.Workload.Workspace.SetupControl.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPauseOnFailure(value);
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
proto.sandboxes.api.v1.Workload.Workspace.SetupControl.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Workload.Workspace.SetupControl.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Workload.Workspace.SetupControl} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Workload.Workspace.SetupControl.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPauseOnFailure();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool pause_on_failure = 1;
 * @return {boolean}
 */
proto.sandboxes.api.v1.Workload.Workspace.SetupControl.prototype.getPauseOnFailure = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.Workload.Workspace.SetupControl} returns this
 */
proto.sandboxes.api.v1.Workload.Workspace.SetupControl.prototype.setPauseOnFailure = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional Mode mode = 1;
 * @return {!proto.sandboxes.api.v1.Workload.Workspace.Mode}
 */
proto.sandboxes.api.v1.Workload.Workspace.prototype.getMode = function() {
  return /** @type {!proto.sandboxes.api.v1.Workload.Workspace.Mode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sandboxes.api.v1.Workload.Workspace.Mode} value
 * @return {!proto.sandboxes.api.v1.Workload.Workspace} returns this
 */
proto.sandboxes.api.v1.Workload.Workspace.prototype.setMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional AppDefinition.Workspace spec = 2;
 * @return {?proto.sandboxes.api.v1.AppDefinition.Workspace}
 */
proto.sandboxes.api.v1.Workload.Workspace.prototype.getSpec = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.Workspace} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_app_pb.AppDefinition.Workspace, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.Workspace|undefined} value
 * @return {!proto.sandboxes.api.v1.Workload.Workspace} returns this
*/
proto.sandboxes.api.v1.Workload.Workspace.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Workload.Workspace} returns this
 */
proto.sandboxes.api.v1.Workload.Workspace.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Workload.Workspace.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SetupControl setup_control = 3;
 * @return {?proto.sandboxes.api.v1.Workload.Workspace.SetupControl}
 */
proto.sandboxes.api.v1.Workload.Workspace.prototype.getSetupControl = function() {
  return /** @type{?proto.sandboxes.api.v1.Workload.Workspace.SetupControl} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Workload.Workspace.SetupControl, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.Workload.Workspace.SetupControl|undefined} value
 * @return {!proto.sandboxes.api.v1.Workload.Workspace} returns this
*/
proto.sandboxes.api.v1.Workload.Workspace.prototype.setSetupControl = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Workload.Workspace} returns this
 */
proto.sandboxes.api.v1.Workload.Workspace.prototype.clearSetupControl = function() {
  return this.setSetupControl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Workload.Workspace.prototype.hasSetupControl = function() {
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
proto.sandboxes.api.v1.Workload.Dependency.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Workload.Dependency.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Workload.Dependency} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Workload.Dependency.toObject = function(includeInstance, msg) {
  var f, obj = {
    spec: (f = msg.getSpec()) && sandboxes_api_v1_app_pb.AppDefinition.Dependency.toObject(includeInstance, f),
    serviceDescriptor: (f = msg.getServiceDescriptor()) && sandboxes_api_v1_system_pb.DependencyServiceDescriptor.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.Workload.Dependency}
 */
proto.sandboxes.api.v1.Workload.Dependency.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Workload.Dependency;
  return proto.sandboxes.api.v1.Workload.Dependency.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Workload.Dependency} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Workload.Dependency}
 */
proto.sandboxes.api.v1.Workload.Dependency.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_app_pb.AppDefinition.Dependency;
      reader.readMessage(value,sandboxes_api_v1_app_pb.AppDefinition.Dependency.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 2:
      var value = new sandboxes_api_v1_system_pb.DependencyServiceDescriptor;
      reader.readMessage(value,sandboxes_api_v1_system_pb.DependencyServiceDescriptor.deserializeBinaryFromReader);
      msg.setServiceDescriptor(value);
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
proto.sandboxes.api.v1.Workload.Dependency.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Workload.Dependency.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Workload.Dependency} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Workload.Dependency.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_app_pb.AppDefinition.Dependency.serializeBinaryToWriter
    );
  }
  f = message.getServiceDescriptor();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sandboxes_api_v1_system_pb.DependencyServiceDescriptor.serializeBinaryToWriter
    );
  }
};


/**
 * optional AppDefinition.Dependency spec = 1;
 * @return {?proto.sandboxes.api.v1.AppDefinition.Dependency}
 */
proto.sandboxes.api.v1.Workload.Dependency.prototype.getSpec = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.Dependency} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_app_pb.AppDefinition.Dependency, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.Dependency|undefined} value
 * @return {!proto.sandboxes.api.v1.Workload.Dependency} returns this
*/
proto.sandboxes.api.v1.Workload.Dependency.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Workload.Dependency} returns this
 */
proto.sandboxes.api.v1.Workload.Dependency.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Workload.Dependency.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DependencyServiceDescriptor service_descriptor = 2;
 * @return {?proto.sandboxes.api.v1.DependencyServiceDescriptor}
 */
proto.sandboxes.api.v1.Workload.Dependency.prototype.getServiceDescriptor = function() {
  return /** @type{?proto.sandboxes.api.v1.DependencyServiceDescriptor} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_system_pb.DependencyServiceDescriptor, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.DependencyServiceDescriptor|undefined} value
 * @return {!proto.sandboxes.api.v1.Workload.Dependency} returns this
*/
proto.sandboxes.api.v1.Workload.Dependency.prototype.setServiceDescriptor = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Workload.Dependency} returns this
 */
proto.sandboxes.api.v1.Workload.Dependency.prototype.clearServiceDescriptor = function() {
  return this.setServiceDescriptor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Workload.Dependency.prototype.hasServiceDescriptor = function() {
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
proto.sandboxes.api.v1.Workload.Container.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.Workload.Container.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.Workload.Container} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Workload.Container.toObject = function(includeInstance, msg) {
  var f, obj = {
    spec: (f = msg.getSpec()) && sandboxes_api_v1_app_pb.AppDefinition.Container.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.Workload.Container}
 */
proto.sandboxes.api.v1.Workload.Container.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.Workload.Container;
  return proto.sandboxes.api.v1.Workload.Container.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.Workload.Container} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.Workload.Container}
 */
proto.sandboxes.api.v1.Workload.Container.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_app_pb.AppDefinition.Container;
      reader.readMessage(value,sandboxes_api_v1_app_pb.AppDefinition.Container.deserializeBinaryFromReader);
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
proto.sandboxes.api.v1.Workload.Container.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.Workload.Container.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.Workload.Container} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.Workload.Container.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_app_pb.AppDefinition.Container.serializeBinaryToWriter
    );
  }
};


/**
 * optional AppDefinition.Container spec = 1;
 * @return {?proto.sandboxes.api.v1.AppDefinition.Container}
 */
proto.sandboxes.api.v1.Workload.Container.prototype.getSpec = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.Container} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_app_pb.AppDefinition.Container, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.Container|undefined} value
 * @return {!proto.sandboxes.api.v1.Workload.Container} returns this
*/
proto.sandboxes.api.v1.Workload.Container.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Workload.Container} returns this
 */
proto.sandboxes.api.v1.Workload.Container.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Workload.Container.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.Workload.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.Workload} returns this
 */
proto.sandboxes.api.v1.Workload.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Workspace workspace = 10;
 * @return {?proto.sandboxes.api.v1.Workload.Workspace}
 */
proto.sandboxes.api.v1.Workload.prototype.getWorkspace = function() {
  return /** @type{?proto.sandboxes.api.v1.Workload.Workspace} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Workload.Workspace, 10));
};


/**
 * @param {?proto.sandboxes.api.v1.Workload.Workspace|undefined} value
 * @return {!proto.sandboxes.api.v1.Workload} returns this
*/
proto.sandboxes.api.v1.Workload.prototype.setWorkspace = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.sandboxes.api.v1.Workload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Workload} returns this
 */
proto.sandboxes.api.v1.Workload.prototype.clearWorkspace = function() {
  return this.setWorkspace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Workload.prototype.hasWorkspace = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Dependency dependency = 11;
 * @return {?proto.sandboxes.api.v1.Workload.Dependency}
 */
proto.sandboxes.api.v1.Workload.prototype.getDependency = function() {
  return /** @type{?proto.sandboxes.api.v1.Workload.Dependency} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Workload.Dependency, 11));
};


/**
 * @param {?proto.sandboxes.api.v1.Workload.Dependency|undefined} value
 * @return {!proto.sandboxes.api.v1.Workload} returns this
*/
proto.sandboxes.api.v1.Workload.prototype.setDependency = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.sandboxes.api.v1.Workload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Workload} returns this
 */
proto.sandboxes.api.v1.Workload.prototype.clearDependency = function() {
  return this.setDependency(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Workload.prototype.hasDependency = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Container container = 12;
 * @return {?proto.sandboxes.api.v1.Workload.Container}
 */
proto.sandboxes.api.v1.Workload.prototype.getContainer = function() {
  return /** @type{?proto.sandboxes.api.v1.Workload.Container} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Workload.Container, 12));
};


/**
 * @param {?proto.sandboxes.api.v1.Workload.Container|undefined} value
 * @return {!proto.sandboxes.api.v1.Workload} returns this
*/
proto.sandboxes.api.v1.Workload.prototype.setContainer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.sandboxes.api.v1.Workload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.Workload} returns this
 */
proto.sandboxes.api.v1.Workload.prototype.clearContainer = function() {
  return this.setContainer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.Workload.prototype.hasContainer = function() {
  return jspb.Message.getField(this, 12) != null;
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
proto.sandboxes.api.v1.WorkloadStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.WorkloadStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.WorkloadStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: (f = msg.getStatus()) && sandboxes_api_v1_common_pb.RuntimeStatus.toObject(includeInstance, f),
    agent: (f = msg.getAgent()) && proto.sandboxes.api.v1.AgentStatus.toObject(includeInstance, f),
    activities: (f = msg.getActivities()) && proto.sandboxes.api.v1.WorkloadStatus.Activities.toObject(includeInstance, f),
    sandboxVersion: jspb.Message.getFieldWithDefault(msg, 5, ""),
    agentVersion: jspb.Message.getFieldWithDefault(msg, 7, ""),
    aggregatedStatus: (f = msg.getAggregatedStatus()) && proto.sandboxes.api.v1.Sandbox.Status.Aggregated.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.WorkloadStatus}
 */
proto.sandboxes.api.v1.WorkloadStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.WorkloadStatus;
  return proto.sandboxes.api.v1.WorkloadStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.WorkloadStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus}
 */
proto.sandboxes.api.v1.WorkloadStatus.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new sandboxes_api_v1_common_pb.RuntimeStatus;
      reader.readMessage(value,sandboxes_api_v1_common_pb.RuntimeStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.AgentStatus;
      reader.readMessage(value,proto.sandboxes.api.v1.AgentStatus.deserializeBinaryFromReader);
      msg.setAgent(value);
      break;
    case 4:
      var value = new proto.sandboxes.api.v1.WorkloadStatus.Activities;
      reader.readMessage(value,proto.sandboxes.api.v1.WorkloadStatus.Activities.deserializeBinaryFromReader);
      msg.setActivities(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSandboxVersion(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgentVersion(value);
      break;
    case 8:
      var value = new proto.sandboxes.api.v1.Sandbox.Status.Aggregated;
      reader.readMessage(value,proto.sandboxes.api.v1.Sandbox.Status.Aggregated.deserializeBinaryFromReader);
      msg.setAggregatedStatus(value);
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
proto.sandboxes.api.v1.WorkloadStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.WorkloadStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.WorkloadStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sandboxes_api_v1_common_pb.RuntimeStatus.serializeBinaryToWriter
    );
  }
  f = message.getAgent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sandboxes.api.v1.AgentStatus.serializeBinaryToWriter
    );
  }
  f = message.getActivities();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sandboxes.api.v1.WorkloadStatus.Activities.serializeBinaryToWriter
    );
  }
  f = message.getSandboxVersion();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAgentVersion();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAggregatedStatus();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.sandboxes.api.v1.Sandbox.Status.Aggregated.serializeBinaryToWriter
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
proto.sandboxes.api.v1.WorkloadStatus.Usage.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.WorkloadStatus.Usage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Usage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.toObject = function(includeInstance, msg) {
  var f, obj = {
    cpu: (f = msg.getCpu()) && proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU.toObject(includeInstance, f),
    memory: (f = msg.getMemory()) && proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory.toObject(includeInstance, f),
    storage: (f = msg.getStorage()) && proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Usage}
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.WorkloadStatus.Usage;
  return proto.sandboxes.api.v1.WorkloadStatus.Usage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Usage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Usage}
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU;
      reader.readMessage(value,proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU.deserializeBinaryFromReader);
      msg.setCpu(value);
      break;
    case 2:
      var value = new proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory;
      reader.readMessage(value,proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory.deserializeBinaryFromReader);
      msg.setMemory(value);
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage;
      reader.readMessage(value,proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage.deserializeBinaryFromReader);
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
proto.sandboxes.api.v1.WorkloadStatus.Usage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.WorkloadStatus.Usage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Usage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCpu();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU.serializeBinaryToWriter
    );
  }
  f = message.getMemory();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory.serializeBinaryToWriter
    );
  }
  f = message.getStorage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage.serializeBinaryToWriter
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
proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU.toObject = function(includeInstance, msg) {
  var f, obj = {
    count: jspb.Message.getFieldWithDefault(msg, 1, 0),
    percentage: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    loadavg: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU}
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU;
  return proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU}
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPercentage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLoadavg(value);
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
proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPercentage();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getLoadavg();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional int64 count = 1;
 * @return {number}
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional float percentage = 2;
 * @return {number}
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU.prototype.getPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU.prototype.setPercentage = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float loadavg = 3;
 * @return {number}
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU.prototype.getLoadavg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU.prototype.setLoadavg = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
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
proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory.toObject = function(includeInstance, msg) {
  var f, obj = {
    unit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    capacity: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0),
    usage: jspb.Message.getFieldWithDefault(msg, 4, 0),
    swapUsage: jspb.Message.getFieldWithDefault(msg, 5, 0),
    pressure: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory}
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory;
  return proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory}
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUnit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCapacity(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUsage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSwapUsage(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPressure(value);
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
proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUnit();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCapacity();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getUsage();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getSwapUsage();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getPressure();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional int64 unit = 1;
 * @return {number}
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory.prototype.getUnit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory.prototype.setUnit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 capacity = 2;
 * @return {number}
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory.prototype.getCapacity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory.prototype.setCapacity = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 limit = 3;
 * @return {number}
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 usage = 4;
 * @return {number}
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory.prototype.getUsage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory.prototype.setUsage = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 swap_usage = 5;
 * @return {number}
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory.prototype.getSwapUsage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory.prototype.setSwapUsage = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool pressure = 6;
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory.prototype.getPressure = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory.prototype.setPressure = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
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
proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage.toObject = function(includeInstance, msg) {
  var f, obj = {
    capacity: jspb.Message.getFieldWithDefault(msg, 1, 0),
    used: jspb.Message.getFieldWithDefault(msg, 2, 0),
    unit: jspb.Message.getFieldWithDefault(msg, 3, 0),
    inodeTotal: jspb.Message.getFieldWithDefault(msg, 4, 0),
    inodeUsed: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage}
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage;
  return proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage}
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCapacity(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUsed(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUnit(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInodeTotal(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInodeUsed(value);
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
proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCapacity();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUsed();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getUnit();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getInodeTotal();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getInodeUsed();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional int64 capacity = 1;
 * @return {number}
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage.prototype.getCapacity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage.prototype.setCapacity = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 used = 2;
 * @return {number}
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage.prototype.getUsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage.prototype.setUsed = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 unit = 3;
 * @return {number}
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage.prototype.getUnit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage.prototype.setUnit = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 inode_total = 4;
 * @return {number}
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage.prototype.getInodeTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage.prototype.setInodeTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 inode_used = 5;
 * @return {number}
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage.prototype.getInodeUsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage.prototype.setInodeUsed = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional CPU cpu = 1;
 * @return {?proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU}
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.prototype.getCpu = function() {
  return /** @type{?proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.WorkloadStatus.Usage.CPU|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Usage} returns this
*/
proto.sandboxes.api.v1.WorkloadStatus.Usage.prototype.setCpu = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Usage} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.prototype.clearCpu = function() {
  return this.setCpu(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.prototype.hasCpu = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Memory memory = 2;
 * @return {?proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory}
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.prototype.getMemory = function() {
  return /** @type{?proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.WorkloadStatus.Usage.Memory|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Usage} returns this
*/
proto.sandboxes.api.v1.WorkloadStatus.Usage.prototype.setMemory = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Usage} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.prototype.clearMemory = function() {
  return this.setMemory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.prototype.hasMemory = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Storage storage = 3;
 * @return {?proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage}
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.prototype.getStorage = function() {
  return /** @type{?proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.WorkloadStatus.Usage.Storage|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Usage} returns this
*/
proto.sandboxes.api.v1.WorkloadStatus.Usage.prototype.setStorage = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Usage} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.prototype.clearStorage = function() {
  return this.setStorage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadStatus.Usage.prototype.hasStorage = function() {
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
proto.sandboxes.api.v1.WorkloadStatus.Activities.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.WorkloadStatus.Activities.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Activities} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordTraffic: (f = msg.getRecordTraffic()) && proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.toObject(includeInstance, f),
    interceptKubernetes: (f = msg.getInterceptKubernetes()) && proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.WorkloadStatus.Activities;
  return proto.sandboxes.api.v1.WorkloadStatus.Activities.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Activities} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic;
      reader.readMessage(value,proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.deserializeBinaryFromReader);
      msg.setRecordTraffic(value);
      break;
    case 2:
      var value = new proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes;
      reader.readMessage(value,proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.deserializeBinaryFromReader);
      msg.setInterceptKubernetes(value);
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
proto.sandboxes.api.v1.WorkloadStatus.Activities.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.WorkloadStatus.Activities.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Activities} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordTraffic();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.serializeBinaryToWriter
    );
  }
  f = message.getInterceptKubernetes();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.serializeBinaryToWriter
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
proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.toObject = function(includeInstance, msg) {
  var f, obj = {
    portsMap: (f = msg.getPortsMap()) ? f.toObject(includeInstance, proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState.toObject) : []
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
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic;
  return proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getPortsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readMessage, proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState.deserializeBinaryFromReader, 0, new proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState());
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
proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPortsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeMessage, proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState.serializeBinaryToWriter);
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
proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState.toObject = function(includeInstance, msg) {
  var f, obj = {
    port: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sessionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    error: (f = msg.getError()) && sandboxes_api_v1_common_pb.Error.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState;
  return proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSessionId(value);
      break;
    case 3:
      var value = new sandboxes_api_v1_common_pb.Error;
      reader.readMessage(value,sandboxes_api_v1_common_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
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
proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPort();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      sandboxes_api_v1_common_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 port = 1;
 * @return {number}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string session_id = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Error error = 3;
 * @return {?proto.sandboxes.api.v1.Error}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState.prototype.getError = function() {
  return /** @type{?proto.sandboxes.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_common_pb.Error, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.Error|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState} returns this
*/
proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState.prototype.hasError = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * map<int32, PortState> ports = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState>}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.prototype.getPortsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.PortState));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic.prototype.clearPortsMap = function() {
  this.getPortsMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.repeatedFields_ = [3,4];



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
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.toObject = function(includeInstance, msg) {
  var f, obj = {
    infraName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clusterNetwork: (f = msg.getClusterNetwork()) && proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork.toObject(includeInstance, f),
    workloadInterceptionsList: jspb.Message.toObjectList(msg.getWorkloadInterceptionsList(),
    proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.toObject, includeInstance),
    exposeWorloadsList: jspb.Message.toObjectList(msg.getExposeWorloadsList(),
    proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload.toObject, includeInstance)
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
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes;
  return proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfraName(value);
      break;
    case 2:
      var value = new proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork;
      reader.readMessage(value,proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork.deserializeBinaryFromReader);
      msg.setClusterNetwork(value);
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception;
      reader.readMessage(value,proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.deserializeBinaryFromReader);
      msg.addWorkloadInterceptions(value);
      break;
    case 4:
      var value = new proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload;
      reader.readMessage(value,proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload.deserializeBinaryFromReader);
      msg.addExposeWorloads(value);
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
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfraName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClusterNetwork();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork.serializeBinaryToWriter
    );
  }
  f = message.getWorkloadInterceptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.serializeBinaryToWriter
    );
  }
  f = message.getExposeWorloadsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload.serializeBinaryToWriter
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
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork.toObject = function(includeInstance, msg) {
  var f, obj = {
    gatewayConnection: (f = msg.getGatewayConnection()) && sandboxes_api_v1_common_pb.RuntimeStatus.toObject(includeInstance, f),
    viaPod: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork;
  return proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_common_pb.RuntimeStatus;
      reader.readMessage(value,sandboxes_api_v1_common_pb.RuntimeStatus.deserializeBinaryFromReader);
      msg.setGatewayConnection(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setViaPod(value);
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
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGatewayConnection();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_common_pb.RuntimeStatus.serializeBinaryToWriter
    );
  }
  f = message.getViaPod();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional RuntimeStatus gateway_connection = 1;
 * @return {?proto.sandboxes.api.v1.RuntimeStatus}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork.prototype.getGatewayConnection = function() {
  return /** @type{?proto.sandboxes.api.v1.RuntimeStatus} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_common_pb.RuntimeStatus, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.RuntimeStatus|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork} returns this
*/
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork.prototype.setGatewayConnection = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork.prototype.clearGatewayConnection = function() {
  return this.setGatewayConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork.prototype.hasGatewayConnection = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string via_pod = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork.prototype.getViaPod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork.prototype.setViaPod = function(value) {
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
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.toObject = function(includeInstance, msg) {
  var f, obj = {
    target: (f = msg.getTarget()) && proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload.toObject(includeInstance, f),
    portForwardStatus: (f = msg.getPortForwardStatus()) && sandboxes_api_v1_common_pb.RuntimeStatus.toObject(includeInstance, f),
    volumeMountStatus: (f = msg.getVolumeMountStatus()) && sandboxes_api_v1_common_pb.RuntimeStatus.toObject(includeInstance, f),
    envMappingStatus: (f = msg.getEnvMappingStatus()) && sandboxes_api_v1_common_pb.RuntimeStatus.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception;
  return proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload;
      reader.readMessage(value,proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload.deserializeBinaryFromReader);
      msg.setTarget(value);
      break;
    case 2:
      var value = new sandboxes_api_v1_common_pb.RuntimeStatus;
      reader.readMessage(value,sandboxes_api_v1_common_pb.RuntimeStatus.deserializeBinaryFromReader);
      msg.setPortForwardStatus(value);
      break;
    case 3:
      var value = new sandboxes_api_v1_common_pb.RuntimeStatus;
      reader.readMessage(value,sandboxes_api_v1_common_pb.RuntimeStatus.deserializeBinaryFromReader);
      msg.setVolumeMountStatus(value);
      break;
    case 4:
      var value = new sandboxes_api_v1_common_pb.RuntimeStatus;
      reader.readMessage(value,sandboxes_api_v1_common_pb.RuntimeStatus.deserializeBinaryFromReader);
      msg.setEnvMappingStatus(value);
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
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTarget();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload.serializeBinaryToWriter
    );
  }
  f = message.getPortForwardStatus();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sandboxes_api_v1_common_pb.RuntimeStatus.serializeBinaryToWriter
    );
  }
  f = message.getVolumeMountStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      sandboxes_api_v1_common_pb.RuntimeStatus.serializeBinaryToWriter
    );
  }
  f = message.getEnvMappingStatus();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      sandboxes_api_v1_common_pb.RuntimeStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional Sandbox.Activities.InterceptKubernetes.TargetWorkload target = 1;
 * @return {?proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.prototype.getTarget = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox.Activities.InterceptKubernetes.TargetWorkload|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception} returns this
*/
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.prototype.setTarget = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.prototype.clearTarget = function() {
  return this.setTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.prototype.hasTarget = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RuntimeStatus port_forward_status = 2;
 * @return {?proto.sandboxes.api.v1.RuntimeStatus}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.prototype.getPortForwardStatus = function() {
  return /** @type{?proto.sandboxes.api.v1.RuntimeStatus} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_common_pb.RuntimeStatus, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.RuntimeStatus|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception} returns this
*/
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.prototype.setPortForwardStatus = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.prototype.clearPortForwardStatus = function() {
  return this.setPortForwardStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.prototype.hasPortForwardStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RuntimeStatus volume_mount_status = 3;
 * @return {?proto.sandboxes.api.v1.RuntimeStatus}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.prototype.getVolumeMountStatus = function() {
  return /** @type{?proto.sandboxes.api.v1.RuntimeStatus} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_common_pb.RuntimeStatus, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.RuntimeStatus|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception} returns this
*/
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.prototype.setVolumeMountStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.prototype.clearVolumeMountStatus = function() {
  return this.setVolumeMountStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.prototype.hasVolumeMountStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional RuntimeStatus env_mapping_status = 4;
 * @return {?proto.sandboxes.api.v1.RuntimeStatus}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.prototype.getEnvMappingStatus = function() {
  return /** @type{?proto.sandboxes.api.v1.RuntimeStatus} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_common_pb.RuntimeStatus, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.RuntimeStatus|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception} returns this
*/
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.prototype.setEnvMappingStatus = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.prototype.clearEnvMappingStatus = function() {
  return this.setEnvMappingStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception.prototype.hasEnvMappingStatus = function() {
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
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload.toObject = function(includeInstance, msg) {
  var f, obj = {
    service: jspb.Message.getFieldWithDefault(msg, 1, ""),
    workload: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: (f = msg.getStatus()) && sandboxes_api_v1_common_pb.RuntimeStatus.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload;
  return proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setService(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkload(value);
      break;
    case 3:
      var value = new sandboxes_api_v1_common_pb.RuntimeStatus;
      reader.readMessage(value,sandboxes_api_v1_common_pb.RuntimeStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
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
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getService();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWorkload();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      sandboxes_api_v1_common_pb.RuntimeStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional string service = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload.prototype.getService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload.prototype.setService = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string workload = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload.prototype.getWorkload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload.prototype.setWorkload = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional RuntimeStatus status = 3;
 * @return {?proto.sandboxes.api.v1.RuntimeStatus}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload.prototype.getStatus = function() {
  return /** @type{?proto.sandboxes.api.v1.RuntimeStatus} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_common_pb.RuntimeStatus, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.RuntimeStatus|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload} returns this
*/
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string infra_name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.prototype.getInfraName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.prototype.setInfraName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ClusterNetwork cluster_network = 2;
 * @return {?proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.prototype.getClusterNetwork = function() {
  return /** @type{?proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ClusterNetwork|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes} returns this
*/
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.prototype.setClusterNetwork = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.prototype.clearClusterNetwork = function() {
  return this.setClusterNetwork(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.prototype.hasClusterNetwork = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated WorkloadInterception workload_interceptions = 3;
 * @return {!Array<!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception>}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.prototype.getWorkloadInterceptionsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception, 3));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception>} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes} returns this
*/
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.prototype.setWorkloadInterceptionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.prototype.addWorkloadInterceptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.WorkloadInterception, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.prototype.clearWorkloadInterceptionsList = function() {
  return this.setWorkloadInterceptionsList([]);
};


/**
 * repeated ExposeWorkload expose_worloads = 4;
 * @return {!Array<!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload>}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.prototype.getExposeWorloadsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload, 4));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload>} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes} returns this
*/
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.prototype.setExposeWorloadsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.prototype.addExposeWorloads = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.ExposeWorkload, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes.prototype.clearExposeWorloadsList = function() {
  return this.setExposeWorloadsList([]);
};


/**
 * optional RecordTraffic record_traffic = 1;
 * @return {?proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.prototype.getRecordTraffic = function() {
  return /** @type{?proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.WorkloadStatus.Activities.RecordTraffic|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities} returns this
*/
proto.sandboxes.api.v1.WorkloadStatus.Activities.prototype.setRecordTraffic = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.prototype.clearRecordTraffic = function() {
  return this.setRecordTraffic(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.prototype.hasRecordTraffic = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional InterceptKubernetes intercept_kubernetes = 2;
 * @return {?proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.prototype.getInterceptKubernetes = function() {
  return /** @type{?proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.WorkloadStatus.Activities.InterceptKubernetes|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities} returns this
*/
proto.sandboxes.api.v1.WorkloadStatus.Activities.prototype.setInterceptKubernetes = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus.Activities} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.prototype.clearInterceptKubernetes = function() {
  return this.setInterceptKubernetes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadStatus.Activities.prototype.hasInterceptKubernetes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.WorkloadStatus.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional RuntimeStatus status = 2;
 * @return {?proto.sandboxes.api.v1.RuntimeStatus}
 */
proto.sandboxes.api.v1.WorkloadStatus.prototype.getStatus = function() {
  return /** @type{?proto.sandboxes.api.v1.RuntimeStatus} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_common_pb.RuntimeStatus, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.RuntimeStatus|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus} returns this
*/
proto.sandboxes.api.v1.WorkloadStatus.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadStatus.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AgentStatus agent = 3;
 * @return {?proto.sandboxes.api.v1.AgentStatus}
 */
proto.sandboxes.api.v1.WorkloadStatus.prototype.getAgent = function() {
  return /** @type{?proto.sandboxes.api.v1.AgentStatus} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AgentStatus, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.AgentStatus|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus} returns this
*/
proto.sandboxes.api.v1.WorkloadStatus.prototype.setAgent = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.prototype.clearAgent = function() {
  return this.setAgent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadStatus.prototype.hasAgent = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Activities activities = 4;
 * @return {?proto.sandboxes.api.v1.WorkloadStatus.Activities}
 */
proto.sandboxes.api.v1.WorkloadStatus.prototype.getActivities = function() {
  return /** @type{?proto.sandboxes.api.v1.WorkloadStatus.Activities} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.WorkloadStatus.Activities, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.WorkloadStatus.Activities|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus} returns this
*/
proto.sandboxes.api.v1.WorkloadStatus.prototype.setActivities = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.prototype.clearActivities = function() {
  return this.setActivities(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadStatus.prototype.hasActivities = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string sandbox_version = 5;
 * @return {string}
 */
proto.sandboxes.api.v1.WorkloadStatus.prototype.getSandboxVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.prototype.setSandboxVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string agent_version = 7;
 * @return {string}
 */
proto.sandboxes.api.v1.WorkloadStatus.prototype.getAgentVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.prototype.setAgentVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional Sandbox.Status.Aggregated aggregated_status = 8;
 * @return {?proto.sandboxes.api.v1.Sandbox.Status.Aggregated}
 */
proto.sandboxes.api.v1.WorkloadStatus.prototype.getAggregatedStatus = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox.Status.Aggregated} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Sandbox.Status.Aggregated, 8));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox.Status.Aggregated|undefined} value
 * @return {!proto.sandboxes.api.v1.WorkloadStatus} returns this
*/
proto.sandboxes.api.v1.WorkloadStatus.prototype.setAggregatedStatus = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.WorkloadStatus} returns this
 */
proto.sandboxes.api.v1.WorkloadStatus.prototype.clearAggregatedStatus = function() {
  return this.setAggregatedStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.WorkloadStatus.prototype.hasAggregatedStatus = function() {
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
proto.sandboxes.api.v1.ResourceGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ResourceGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ResourceGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ResourceGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    spec: (f = msg.getSpec()) && sandboxes_api_v1_app_pb.AppDefinition.ResourceGroup.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.ResourceGroup}
 */
proto.sandboxes.api.v1.ResourceGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ResourceGroup;
  return proto.sandboxes.api.v1.ResourceGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ResourceGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ResourceGroup}
 */
proto.sandboxes.api.v1.ResourceGroup.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new sandboxes_api_v1_app_pb.AppDefinition.ResourceGroup;
      reader.readMessage(value,sandboxes_api_v1_app_pb.AppDefinition.ResourceGroup.deserializeBinaryFromReader);
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
proto.sandboxes.api.v1.ResourceGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ResourceGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ResourceGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ResourceGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sandboxes_api_v1_app_pb.AppDefinition.ResourceGroup.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.ResourceGroup.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.ResourceGroup} returns this
 */
proto.sandboxes.api.v1.ResourceGroup.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AppDefinition.ResourceGroup spec = 2;
 * @return {?proto.sandboxes.api.v1.AppDefinition.ResourceGroup}
 */
proto.sandboxes.api.v1.ResourceGroup.prototype.getSpec = function() {
  return /** @type{?proto.sandboxes.api.v1.AppDefinition.ResourceGroup} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_app_pb.AppDefinition.ResourceGroup, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.AppDefinition.ResourceGroup|undefined} value
 * @return {!proto.sandboxes.api.v1.ResourceGroup} returns this
*/
proto.sandboxes.api.v1.ResourceGroup.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.ResourceGroup} returns this
 */
proto.sandboxes.api.v1.ResourceGroup.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.ResourceGroup.prototype.hasSpec = function() {
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
proto.sandboxes.api.v1.ResourceGroupStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ResourceGroupStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ResourceGroupStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ResourceGroupStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: (f = msg.getStatus()) && sandboxes_api_v1_common_pb.RuntimeStatus.toObject(includeInstance, f),
    aggregatedStatus: (f = msg.getAggregatedStatus()) && proto.sandboxes.api.v1.Sandbox.Status.Aggregated.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.ResourceGroupStatus}
 */
proto.sandboxes.api.v1.ResourceGroupStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ResourceGroupStatus;
  return proto.sandboxes.api.v1.ResourceGroupStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ResourceGroupStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ResourceGroupStatus}
 */
proto.sandboxes.api.v1.ResourceGroupStatus.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new sandboxes_api_v1_common_pb.RuntimeStatus;
      reader.readMessage(value,sandboxes_api_v1_common_pb.RuntimeStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.Sandbox.Status.Aggregated;
      reader.readMessage(value,proto.sandboxes.api.v1.Sandbox.Status.Aggregated.deserializeBinaryFromReader);
      msg.setAggregatedStatus(value);
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
proto.sandboxes.api.v1.ResourceGroupStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ResourceGroupStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ResourceGroupStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ResourceGroupStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sandboxes_api_v1_common_pb.RuntimeStatus.serializeBinaryToWriter
    );
  }
  f = message.getAggregatedStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sandboxes.api.v1.Sandbox.Status.Aggregated.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.ResourceGroupStatus.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.ResourceGroupStatus} returns this
 */
proto.sandboxes.api.v1.ResourceGroupStatus.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional RuntimeStatus status = 2;
 * @return {?proto.sandboxes.api.v1.RuntimeStatus}
 */
proto.sandboxes.api.v1.ResourceGroupStatus.prototype.getStatus = function() {
  return /** @type{?proto.sandboxes.api.v1.RuntimeStatus} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_common_pb.RuntimeStatus, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.RuntimeStatus|undefined} value
 * @return {!proto.sandboxes.api.v1.ResourceGroupStatus} returns this
*/
proto.sandboxes.api.v1.ResourceGroupStatus.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.ResourceGroupStatus} returns this
 */
proto.sandboxes.api.v1.ResourceGroupStatus.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.ResourceGroupStatus.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Sandbox.Status.Aggregated aggregated_status = 3;
 * @return {?proto.sandboxes.api.v1.Sandbox.Status.Aggregated}
 */
proto.sandboxes.api.v1.ResourceGroupStatus.prototype.getAggregatedStatus = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox.Status.Aggregated} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.Sandbox.Status.Aggregated, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox.Status.Aggregated|undefined} value
 * @return {!proto.sandboxes.api.v1.ResourceGroupStatus} returns this
*/
proto.sandboxes.api.v1.ResourceGroupStatus.prototype.setAggregatedStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.ResourceGroupStatus} returns this
 */
proto.sandboxes.api.v1.ResourceGroupStatus.prototype.clearAggregatedStatus = function() {
  return this.setAggregatedStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.ResourceGroupStatus.prototype.hasAggregatedStatus = function() {
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
proto.sandboxes.api.v1.ProbeStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ProbeStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ProbeStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ProbeStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    result: (f = msg.getResult()) && proto.sandboxes.api.v1.ProbeStatus.Result.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.ProbeStatus}
 */
proto.sandboxes.api.v1.ProbeStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ProbeStatus;
  return proto.sandboxes.api.v1.ProbeStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ProbeStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ProbeStatus}
 */
proto.sandboxes.api.v1.ProbeStatus.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.sandboxes.api.v1.ProbeStatus.Result;
      reader.readMessage(value,proto.sandboxes.api.v1.ProbeStatus.Result.deserializeBinaryFromReader);
      msg.setResult(value);
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
proto.sandboxes.api.v1.ProbeStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ProbeStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ProbeStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ProbeStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sandboxes.api.v1.ProbeStatus.Result.serializeBinaryToWriter
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
proto.sandboxes.api.v1.ProbeStatus.Result.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ProbeStatus.Result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ProbeStatus.Result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ProbeStatus.Result.toObject = function(includeInstance, msg) {
  var f, obj = {
    positive: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    error: (f = msg.getError()) && sandboxes_api_v1_common_pb.Error.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.ProbeStatus.Result}
 */
proto.sandboxes.api.v1.ProbeStatus.Result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ProbeStatus.Result;
  return proto.sandboxes.api.v1.ProbeStatus.Result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ProbeStatus.Result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ProbeStatus.Result}
 */
proto.sandboxes.api.v1.ProbeStatus.Result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPositive(value);
      break;
    case 2:
      var value = new sandboxes_api_v1_common_pb.Error;
      reader.readMessage(value,sandboxes_api_v1_common_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
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
proto.sandboxes.api.v1.ProbeStatus.Result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ProbeStatus.Result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ProbeStatus.Result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ProbeStatus.Result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositive();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sandboxes_api_v1_common_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool positive = 1;
 * @return {boolean}
 */
proto.sandboxes.api.v1.ProbeStatus.Result.prototype.getPositive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.ProbeStatus.Result} returns this
 */
proto.sandboxes.api.v1.ProbeStatus.Result.prototype.setPositive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional Error error = 2;
 * @return {?proto.sandboxes.api.v1.Error}
 */
proto.sandboxes.api.v1.ProbeStatus.Result.prototype.getError = function() {
  return /** @type{?proto.sandboxes.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_common_pb.Error, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.Error|undefined} value
 * @return {!proto.sandboxes.api.v1.ProbeStatus.Result} returns this
*/
proto.sandboxes.api.v1.ProbeStatus.Result.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.ProbeStatus.Result} returns this
 */
proto.sandboxes.api.v1.ProbeStatus.Result.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.ProbeStatus.Result.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.ProbeStatus.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.ProbeStatus} returns this
 */
proto.sandboxes.api.v1.ProbeStatus.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Result result = 2;
 * @return {?proto.sandboxes.api.v1.ProbeStatus.Result}
 */
proto.sandboxes.api.v1.ProbeStatus.prototype.getResult = function() {
  return /** @type{?proto.sandboxes.api.v1.ProbeStatus.Result} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.ProbeStatus.Result, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.ProbeStatus.Result|undefined} value
 * @return {!proto.sandboxes.api.v1.ProbeStatus} returns this
*/
proto.sandboxes.api.v1.ProbeStatus.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.ProbeStatus} returns this
 */
proto.sandboxes.api.v1.ProbeStatus.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.ProbeStatus.prototype.hasResult = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.AgentInfo.repeatedFields_ = [3];



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
proto.sandboxes.api.v1.AgentInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AgentInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AgentInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AgentInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, ""),
    supportedActionsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    sandboxVersion: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.sandboxes.api.v1.AgentInfo}
 */
proto.sandboxes.api.v1.AgentInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AgentInfo;
  return proto.sandboxes.api.v1.AgentInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AgentInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AgentInfo}
 */
proto.sandboxes.api.v1.AgentInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addSupportedActions(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSandboxVersion(value);
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
proto.sandboxes.api.v1.AgentInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AgentInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AgentInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AgentInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
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
  f = message.getSupportedActionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getSandboxVersion();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.AgentInfo.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AgentInfo} returns this
 */
proto.sandboxes.api.v1.AgentInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.AgentInfo.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AgentInfo} returns this
 */
proto.sandboxes.api.v1.AgentInfo.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string supported_actions = 3;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.AgentInfo.prototype.getSupportedActionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.AgentInfo} returns this
 */
proto.sandboxes.api.v1.AgentInfo.prototype.setSupportedActionsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AgentInfo} returns this
 */
proto.sandboxes.api.v1.AgentInfo.prototype.addSupportedActions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AgentInfo} returns this
 */
proto.sandboxes.api.v1.AgentInfo.prototype.clearSupportedActionsList = function() {
  return this.setSupportedActionsList([]);
};


/**
 * optional string sandbox_version = 4;
 * @return {string}
 */
proto.sandboxes.api.v1.AgentInfo.prototype.getSandboxVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AgentInfo} returns this
 */
proto.sandboxes.api.v1.AgentInfo.prototype.setSandboxVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.AgentStatus.repeatedFields_ = [3,4,7,10];



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
proto.sandboxes.api.v1.AgentStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AgentStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AgentStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AgentStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && proto.sandboxes.api.v1.AgentInfo.toObject(includeInstance, f),
    overview: (f = msg.getOverview()) && proto.sandboxes.api.v1.AgentStatus.Overview.toObject(includeInstance, f),
    healthProbeStatusList: jspb.Message.toObjectList(msg.getHealthProbeStatusList(),
    proto.sandboxes.api.v1.ProbeStatus.toObject, includeInstance),
    readinessProbeStatusList: jspb.Message.toObjectList(msg.getReadinessProbeStatusList(),
    proto.sandboxes.api.v1.ProbeStatus.toObject, includeInstance),
    tasksMap: (f = msg.getTasksMap()) ? f.toObject(includeInstance, proto.sandboxes.api.v1.TaskStatus.toObject) : [],
    processesMap: (f = msg.getProcessesMap()) ? f.toObject(includeInstance, proto.sandboxes.api.v1.Process.toObject) : [],
    forwardedPortsList: jspb.Message.toObjectList(msg.getForwardedPortsList(),
    proto.sandboxes.api.v1.AgentStatus.PortForward.toObject, includeInstance),
    userSessions: (f = msg.getUserSessions()) && proto.sandboxes.api.v1.AgentStatus.UserSessions.toObject(includeInstance, f),
    activityProbeStatusList: jspb.Message.toObjectList(msg.getActivityProbeStatusList(),
    proto.sandboxes.api.v1.ProbeStatus.toObject, includeInstance),
    features: (f = msg.getFeatures()) && proto.sandboxes.api.v1.AgentStatus.Features.toObject(includeInstance, f),
    restarting: (f = msg.getRestarting()) && proto.sandboxes.api.v1.AgentStatus.Restarting.toObject(includeInstance, f),
    restriction: (f = msg.getRestriction()) && proto.sandboxes.api.v1.AgentStatus.Restriction.toObject(includeInstance, f),
    notice: (f = msg.getNotice()) && proto.sandboxes.api.v1.AgentStatus.Notice.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.AgentStatus}
 */
proto.sandboxes.api.v1.AgentStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AgentStatus;
  return proto.sandboxes.api.v1.AgentStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AgentStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AgentStatus}
 */
proto.sandboxes.api.v1.AgentStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.AgentInfo;
      reader.readMessage(value,proto.sandboxes.api.v1.AgentInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new proto.sandboxes.api.v1.AgentStatus.Overview;
      reader.readMessage(value,proto.sandboxes.api.v1.AgentStatus.Overview.deserializeBinaryFromReader);
      msg.setOverview(value);
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.ProbeStatus;
      reader.readMessage(value,proto.sandboxes.api.v1.ProbeStatus.deserializeBinaryFromReader);
      msg.addHealthProbeStatus(value);
      break;
    case 4:
      var value = new proto.sandboxes.api.v1.ProbeStatus;
      reader.readMessage(value,proto.sandboxes.api.v1.ProbeStatus.deserializeBinaryFromReader);
      msg.addReadinessProbeStatus(value);
      break;
    case 5:
      var value = msg.getTasksMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.sandboxes.api.v1.TaskStatus.deserializeBinaryFromReader, "", new proto.sandboxes.api.v1.TaskStatus());
         });
      break;
    case 6:
      var value = msg.getProcessesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.sandboxes.api.v1.Process.deserializeBinaryFromReader, "", new proto.sandboxes.api.v1.Process());
         });
      break;
    case 7:
      var value = new proto.sandboxes.api.v1.AgentStatus.PortForward;
      reader.readMessage(value,proto.sandboxes.api.v1.AgentStatus.PortForward.deserializeBinaryFromReader);
      msg.addForwardedPorts(value);
      break;
    case 8:
      var value = new proto.sandboxes.api.v1.AgentStatus.UserSessions;
      reader.readMessage(value,proto.sandboxes.api.v1.AgentStatus.UserSessions.deserializeBinaryFromReader);
      msg.setUserSessions(value);
      break;
    case 10:
      var value = new proto.sandboxes.api.v1.ProbeStatus;
      reader.readMessage(value,proto.sandboxes.api.v1.ProbeStatus.deserializeBinaryFromReader);
      msg.addActivityProbeStatus(value);
      break;
    case 11:
      var value = new proto.sandboxes.api.v1.AgentStatus.Features;
      reader.readMessage(value,proto.sandboxes.api.v1.AgentStatus.Features.deserializeBinaryFromReader);
      msg.setFeatures(value);
      break;
    case 12:
      var value = new proto.sandboxes.api.v1.AgentStatus.Restarting;
      reader.readMessage(value,proto.sandboxes.api.v1.AgentStatus.Restarting.deserializeBinaryFromReader);
      msg.setRestarting(value);
      break;
    case 13:
      var value = new proto.sandboxes.api.v1.AgentStatus.Restriction;
      reader.readMessage(value,proto.sandboxes.api.v1.AgentStatus.Restriction.deserializeBinaryFromReader);
      msg.setRestriction(value);
      break;
    case 14:
      var value = new proto.sandboxes.api.v1.AgentStatus.Notice;
      reader.readMessage(value,proto.sandboxes.api.v1.AgentStatus.Notice.deserializeBinaryFromReader);
      msg.setNotice(value);
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
proto.sandboxes.api.v1.AgentStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AgentStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AgentStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AgentStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sandboxes.api.v1.AgentInfo.serializeBinaryToWriter
    );
  }
  f = message.getOverview();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sandboxes.api.v1.AgentStatus.Overview.serializeBinaryToWriter
    );
  }
  f = message.getHealthProbeStatusList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.sandboxes.api.v1.ProbeStatus.serializeBinaryToWriter
    );
  }
  f = message.getReadinessProbeStatusList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.sandboxes.api.v1.ProbeStatus.serializeBinaryToWriter
    );
  }
  f = message.getTasksMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.sandboxes.api.v1.TaskStatus.serializeBinaryToWriter);
  }
  f = message.getProcessesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.sandboxes.api.v1.Process.serializeBinaryToWriter);
  }
  f = message.getForwardedPortsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.sandboxes.api.v1.AgentStatus.PortForward.serializeBinaryToWriter
    );
  }
  f = message.getUserSessions();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.sandboxes.api.v1.AgentStatus.UserSessions.serializeBinaryToWriter
    );
  }
  f = message.getActivityProbeStatusList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.sandboxes.api.v1.ProbeStatus.serializeBinaryToWriter
    );
  }
  f = message.getFeatures();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.sandboxes.api.v1.AgentStatus.Features.serializeBinaryToWriter
    );
  }
  f = message.getRestarting();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.sandboxes.api.v1.AgentStatus.Restarting.serializeBinaryToWriter
    );
  }
  f = message.getRestriction();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.sandboxes.api.v1.AgentStatus.Restriction.serializeBinaryToWriter
    );
  }
  f = message.getNotice();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.sandboxes.api.v1.AgentStatus.Notice.serializeBinaryToWriter
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
proto.sandboxes.api.v1.AgentStatus.Overview.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AgentStatus.Overview.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AgentStatus.Overview} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AgentStatus.Overview.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    setupRunning: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    health: (f = msg.getHealth()) && proto.sandboxes.api.v1.ProbeStatus.Result.toObject(includeInstance, f),
    readiness: (f = msg.getReadiness()) && proto.sandboxes.api.v1.ProbeStatus.Result.toObject(includeInstance, f),
    failure: (f = msg.getFailure()) && sandboxes_api_v1_common_pb.Error.toObject(includeInstance, f),
    activity: (f = msg.getActivity()) && proto.sandboxes.api.v1.ProbeStatus.Result.toObject(includeInstance, f),
    lifecycleRunning: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    setupPausedOnFailure: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
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
 * @return {!proto.sandboxes.api.v1.AgentStatus.Overview}
 */
proto.sandboxes.api.v1.AgentStatus.Overview.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AgentStatus.Overview;
  return proto.sandboxes.api.v1.AgentStatus.Overview.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AgentStatus.Overview} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AgentStatus.Overview}
 */
proto.sandboxes.api.v1.AgentStatus.Overview.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sandboxes.api.v1.AgentStatus.Overview.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSetupRunning(value);
      break;
    case 3:
      var value = new proto.sandboxes.api.v1.ProbeStatus.Result;
      reader.readMessage(value,proto.sandboxes.api.v1.ProbeStatus.Result.deserializeBinaryFromReader);
      msg.setHealth(value);
      break;
    case 4:
      var value = new proto.sandboxes.api.v1.ProbeStatus.Result;
      reader.readMessage(value,proto.sandboxes.api.v1.ProbeStatus.Result.deserializeBinaryFromReader);
      msg.setReadiness(value);
      break;
    case 5:
      var value = new sandboxes_api_v1_common_pb.Error;
      reader.readMessage(value,sandboxes_api_v1_common_pb.Error.deserializeBinaryFromReader);
      msg.setFailure(value);
      break;
    case 6:
      var value = new proto.sandboxes.api.v1.ProbeStatus.Result;
      reader.readMessage(value,proto.sandboxes.api.v1.ProbeStatus.Result.deserializeBinaryFromReader);
      msg.setActivity(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLifecycleRunning(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSetupPausedOnFailure(value);
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
proto.sandboxes.api.v1.AgentStatus.Overview.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AgentStatus.Overview.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AgentStatus.Overview} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AgentStatus.Overview.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSetupRunning();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getHealth();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sandboxes.api.v1.ProbeStatus.Result.serializeBinaryToWriter
    );
  }
  f = message.getReadiness();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sandboxes.api.v1.ProbeStatus.Result.serializeBinaryToWriter
    );
  }
  f = message.getFailure();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      sandboxes_api_v1_common_pb.Error.serializeBinaryToWriter
    );
  }
  f = message.getActivity();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.sandboxes.api.v1.ProbeStatus.Result.serializeBinaryToWriter
    );
  }
  f = message.getLifecycleRunning();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getSetupPausedOnFailure();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.sandboxes.api.v1.AgentStatus.Overview.State = {
  UNKNOWN: 0,
  PROGRESSING: 1,
  READY: 2,
  PROBLEMATIC: 3,
  FAILED: 4
};

/**
 * optional State state = 1;
 * @return {!proto.sandboxes.api.v1.AgentStatus.Overview.State}
 */
proto.sandboxes.api.v1.AgentStatus.Overview.prototype.getState = function() {
  return /** @type {!proto.sandboxes.api.v1.AgentStatus.Overview.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sandboxes.api.v1.AgentStatus.Overview.State} value
 * @return {!proto.sandboxes.api.v1.AgentStatus.Overview} returns this
 */
proto.sandboxes.api.v1.AgentStatus.Overview.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool setup_running = 2;
 * @return {boolean}
 */
proto.sandboxes.api.v1.AgentStatus.Overview.prototype.getSetupRunning = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.AgentStatus.Overview} returns this
 */
proto.sandboxes.api.v1.AgentStatus.Overview.prototype.setSetupRunning = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional ProbeStatus.Result health = 3;
 * @return {?proto.sandboxes.api.v1.ProbeStatus.Result}
 */
proto.sandboxes.api.v1.AgentStatus.Overview.prototype.getHealth = function() {
  return /** @type{?proto.sandboxes.api.v1.ProbeStatus.Result} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.ProbeStatus.Result, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.ProbeStatus.Result|undefined} value
 * @return {!proto.sandboxes.api.v1.AgentStatus.Overview} returns this
*/
proto.sandboxes.api.v1.AgentStatus.Overview.prototype.setHealth = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AgentStatus.Overview} returns this
 */
proto.sandboxes.api.v1.AgentStatus.Overview.prototype.clearHealth = function() {
  return this.setHealth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AgentStatus.Overview.prototype.hasHealth = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ProbeStatus.Result readiness = 4;
 * @return {?proto.sandboxes.api.v1.ProbeStatus.Result}
 */
proto.sandboxes.api.v1.AgentStatus.Overview.prototype.getReadiness = function() {
  return /** @type{?proto.sandboxes.api.v1.ProbeStatus.Result} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.ProbeStatus.Result, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.ProbeStatus.Result|undefined} value
 * @return {!proto.sandboxes.api.v1.AgentStatus.Overview} returns this
*/
proto.sandboxes.api.v1.AgentStatus.Overview.prototype.setReadiness = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AgentStatus.Overview} returns this
 */
proto.sandboxes.api.v1.AgentStatus.Overview.prototype.clearReadiness = function() {
  return this.setReadiness(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AgentStatus.Overview.prototype.hasReadiness = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Error failure = 5;
 * @return {?proto.sandboxes.api.v1.Error}
 */
proto.sandboxes.api.v1.AgentStatus.Overview.prototype.getFailure = function() {
  return /** @type{?proto.sandboxes.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_common_pb.Error, 5));
};


/**
 * @param {?proto.sandboxes.api.v1.Error|undefined} value
 * @return {!proto.sandboxes.api.v1.AgentStatus.Overview} returns this
*/
proto.sandboxes.api.v1.AgentStatus.Overview.prototype.setFailure = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AgentStatus.Overview} returns this
 */
proto.sandboxes.api.v1.AgentStatus.Overview.prototype.clearFailure = function() {
  return this.setFailure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AgentStatus.Overview.prototype.hasFailure = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ProbeStatus.Result activity = 6;
 * @return {?proto.sandboxes.api.v1.ProbeStatus.Result}
 */
proto.sandboxes.api.v1.AgentStatus.Overview.prototype.getActivity = function() {
  return /** @type{?proto.sandboxes.api.v1.ProbeStatus.Result} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.ProbeStatus.Result, 6));
};


/**
 * @param {?proto.sandboxes.api.v1.ProbeStatus.Result|undefined} value
 * @return {!proto.sandboxes.api.v1.AgentStatus.Overview} returns this
*/
proto.sandboxes.api.v1.AgentStatus.Overview.prototype.setActivity = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AgentStatus.Overview} returns this
 */
proto.sandboxes.api.v1.AgentStatus.Overview.prototype.clearActivity = function() {
  return this.setActivity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AgentStatus.Overview.prototype.hasActivity = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool lifecycle_running = 7;
 * @return {boolean}
 */
proto.sandboxes.api.v1.AgentStatus.Overview.prototype.getLifecycleRunning = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.AgentStatus.Overview} returns this
 */
proto.sandboxes.api.v1.AgentStatus.Overview.prototype.setLifecycleRunning = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool setup_paused_on_failure = 8;
 * @return {boolean}
 */
proto.sandboxes.api.v1.AgentStatus.Overview.prototype.getSetupPausedOnFailure = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.AgentStatus.Overview} returns this
 */
proto.sandboxes.api.v1.AgentStatus.Overview.prototype.setSetupPausedOnFailure = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.AgentStatus.PortForward.repeatedFields_ = [4];



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
proto.sandboxes.api.v1.AgentStatus.PortForward.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AgentStatus.PortForward.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AgentStatus.PortForward} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AgentStatus.PortForward.toObject = function(includeInstance, msg) {
  var f, obj = {
    local: jspb.Message.getFieldWithDefault(msg, 1, ""),
    remoteService: jspb.Message.getFieldWithDefault(msg, 2, ""),
    remotePort: jspb.Message.getFieldWithDefault(msg, 3, 0),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    status: (f = msg.getStatus()) && sandboxes_api_v1_common_pb.RuntimeStatus.toObject(includeInstance, f),
    remote: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.sandboxes.api.v1.AgentStatus.PortForward}
 */
proto.sandboxes.api.v1.AgentStatus.PortForward.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AgentStatus.PortForward;
  return proto.sandboxes.api.v1.AgentStatus.PortForward.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AgentStatus.PortForward} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AgentStatus.PortForward}
 */
proto.sandboxes.api.v1.AgentStatus.PortForward.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setRemoteService(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRemotePort(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 5:
      var value = new sandboxes_api_v1_common_pb.RuntimeStatus;
      reader.readMessage(value,sandboxes_api_v1_common_pb.RuntimeStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
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
proto.sandboxes.api.v1.AgentStatus.PortForward.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AgentStatus.PortForward.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AgentStatus.PortForward} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AgentStatus.PortForward.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocal();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRemoteService();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRemotePort();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      sandboxes_api_v1_common_pb.RuntimeStatus.serializeBinaryToWriter
    );
  }
  f = message.getRemote();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string local = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.AgentStatus.PortForward.prototype.getLocal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AgentStatus.PortForward} returns this
 */
proto.sandboxes.api.v1.AgentStatus.PortForward.prototype.setLocal = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string remote_service = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.AgentStatus.PortForward.prototype.getRemoteService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AgentStatus.PortForward} returns this
 */
proto.sandboxes.api.v1.AgentStatus.PortForward.prototype.setRemoteService = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 remote_port = 3;
 * @return {number}
 */
proto.sandboxes.api.v1.AgentStatus.PortForward.prototype.getRemotePort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.AgentStatus.PortForward} returns this
 */
proto.sandboxes.api.v1.AgentStatus.PortForward.prototype.setRemotePort = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated string tags = 4;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.AgentStatus.PortForward.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.AgentStatus.PortForward} returns this
 */
proto.sandboxes.api.v1.AgentStatus.PortForward.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AgentStatus.PortForward} returns this
 */
proto.sandboxes.api.v1.AgentStatus.PortForward.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AgentStatus.PortForward} returns this
 */
proto.sandboxes.api.v1.AgentStatus.PortForward.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional RuntimeStatus status = 5;
 * @return {?proto.sandboxes.api.v1.RuntimeStatus}
 */
proto.sandboxes.api.v1.AgentStatus.PortForward.prototype.getStatus = function() {
  return /** @type{?proto.sandboxes.api.v1.RuntimeStatus} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_common_pb.RuntimeStatus, 5));
};


/**
 * @param {?proto.sandboxes.api.v1.RuntimeStatus|undefined} value
 * @return {!proto.sandboxes.api.v1.AgentStatus.PortForward} returns this
*/
proto.sandboxes.api.v1.AgentStatus.PortForward.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AgentStatus.PortForward} returns this
 */
proto.sandboxes.api.v1.AgentStatus.PortForward.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AgentStatus.PortForward.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string remote = 6;
 * @return {string}
 */
proto.sandboxes.api.v1.AgentStatus.PortForward.prototype.getRemote = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AgentStatus.PortForward} returns this
 */
proto.sandboxes.api.v1.AgentStatus.PortForward.prototype.setRemote = function(value) {
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
proto.sandboxes.api.v1.AgentStatus.UserSessions.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AgentStatus.UserSessions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AgentStatus.UserSessions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AgentStatus.UserSessions.toObject = function(includeInstance, msg) {
  var f, obj = {
    statsMap: (f = msg.getStatsMap()) ? f.toObject(includeInstance, undefined) : [],
    reportedAt: (f = msg.getReportedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    idlesMap: (f = msg.getIdlesMap()) ? f.toObject(includeInstance, undefined) : [],
    idleSince: (f = msg.getIdleSince()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.AgentStatus.UserSessions}
 */
proto.sandboxes.api.v1.AgentStatus.UserSessions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AgentStatus.UserSessions;
  return proto.sandboxes.api.v1.AgentStatus.UserSessions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AgentStatus.UserSessions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AgentStatus.UserSessions}
 */
proto.sandboxes.api.v1.AgentStatus.UserSessions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getStatsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt32, null, "", 0);
         });
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setReportedAt(value);
      break;
    case 3:
      var value = msg.getIdlesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt32, null, "", 0);
         });
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setIdleSince(value);
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
proto.sandboxes.api.v1.AgentStatus.UserSessions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AgentStatus.UserSessions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AgentStatus.UserSessions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AgentStatus.UserSessions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt32);
  }
  f = message.getReportedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getIdlesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt32);
  }
  f = message.getIdleSince();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * map<string, int32> stats = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.sandboxes.api.v1.AgentStatus.UserSessions.prototype.getStatsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.AgentStatus.UserSessions} returns this
 */
proto.sandboxes.api.v1.AgentStatus.UserSessions.prototype.clearStatsMap = function() {
  this.getStatsMap().clear();
  return this;};


/**
 * optional google.protobuf.Timestamp reported_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sandboxes.api.v1.AgentStatus.UserSessions.prototype.getReportedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.sandboxes.api.v1.AgentStatus.UserSessions} returns this
*/
proto.sandboxes.api.v1.AgentStatus.UserSessions.prototype.setReportedAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AgentStatus.UserSessions} returns this
 */
proto.sandboxes.api.v1.AgentStatus.UserSessions.prototype.clearReportedAt = function() {
  return this.setReportedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AgentStatus.UserSessions.prototype.hasReportedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * map<string, int32> idles = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.sandboxes.api.v1.AgentStatus.UserSessions.prototype.getIdlesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.AgentStatus.UserSessions} returns this
 */
proto.sandboxes.api.v1.AgentStatus.UserSessions.prototype.clearIdlesMap = function() {
  this.getIdlesMap().clear();
  return this;};


/**
 * optional google.protobuf.Timestamp idle_since = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sandboxes.api.v1.AgentStatus.UserSessions.prototype.getIdleSince = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.sandboxes.api.v1.AgentStatus.UserSessions} returns this
*/
proto.sandboxes.api.v1.AgentStatus.UserSessions.prototype.setIdleSince = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AgentStatus.UserSessions} returns this
 */
proto.sandboxes.api.v1.AgentStatus.UserSessions.prototype.clearIdleSince = function() {
  return this.setIdleSince(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AgentStatus.UserSessions.prototype.hasIdleSince = function() {
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
proto.sandboxes.api.v1.AgentStatus.Features.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AgentStatus.Features.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AgentStatus.Features} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AgentStatus.Features.toObject = function(includeInstance, msg) {
  var f, obj = {
    rdp: (f = msg.getRdp()) && proto.sandboxes.api.v1.AgentStatus.Features.RDP.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.AgentStatus.Features}
 */
proto.sandboxes.api.v1.AgentStatus.Features.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AgentStatus.Features;
  return proto.sandboxes.api.v1.AgentStatus.Features.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AgentStatus.Features} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AgentStatus.Features}
 */
proto.sandboxes.api.v1.AgentStatus.Features.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.AgentStatus.Features.RDP;
      reader.readMessage(value,proto.sandboxes.api.v1.AgentStatus.Features.RDP.deserializeBinaryFromReader);
      msg.setRdp(value);
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
proto.sandboxes.api.v1.AgentStatus.Features.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AgentStatus.Features.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AgentStatus.Features} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AgentStatus.Features.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRdp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sandboxes.api.v1.AgentStatus.Features.RDP.serializeBinaryToWriter
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
proto.sandboxes.api.v1.AgentStatus.Features.RDP.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AgentStatus.Features.RDP.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AgentStatus.Features.RDP} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AgentStatus.Features.RDP.toObject = function(includeInstance, msg) {
  var f, obj = {
    webAccess: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.sandboxes.api.v1.AgentStatus.Features.RDP}
 */
proto.sandboxes.api.v1.AgentStatus.Features.RDP.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AgentStatus.Features.RDP;
  return proto.sandboxes.api.v1.AgentStatus.Features.RDP.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AgentStatus.Features.RDP} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AgentStatus.Features.RDP}
 */
proto.sandboxes.api.v1.AgentStatus.Features.RDP.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWebAccess(value);
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
proto.sandboxes.api.v1.AgentStatus.Features.RDP.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AgentStatus.Features.RDP.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AgentStatus.Features.RDP} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AgentStatus.Features.RDP.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWebAccess();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string web_access = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.AgentStatus.Features.RDP.prototype.getWebAccess = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AgentStatus.Features.RDP} returns this
 */
proto.sandboxes.api.v1.AgentStatus.Features.RDP.prototype.setWebAccess = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional RDP rdp = 1;
 * @return {?proto.sandboxes.api.v1.AgentStatus.Features.RDP}
 */
proto.sandboxes.api.v1.AgentStatus.Features.prototype.getRdp = function() {
  return /** @type{?proto.sandboxes.api.v1.AgentStatus.Features.RDP} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AgentStatus.Features.RDP, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.AgentStatus.Features.RDP|undefined} value
 * @return {!proto.sandboxes.api.v1.AgentStatus.Features} returns this
*/
proto.sandboxes.api.v1.AgentStatus.Features.prototype.setRdp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AgentStatus.Features} returns this
 */
proto.sandboxes.api.v1.AgentStatus.Features.prototype.clearRdp = function() {
  return this.setRdp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AgentStatus.Features.prototype.hasRdp = function() {
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
proto.sandboxes.api.v1.AgentStatus.Restarting.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AgentStatus.Restarting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AgentStatus.Restarting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AgentStatus.Restarting.toObject = function(includeInstance, msg) {
  var f, obj = {
    inProgress: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.sandboxes.api.v1.AgentStatus.Restarting}
 */
proto.sandboxes.api.v1.AgentStatus.Restarting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AgentStatus.Restarting;
  return proto.sandboxes.api.v1.AgentStatus.Restarting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AgentStatus.Restarting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AgentStatus.Restarting}
 */
proto.sandboxes.api.v1.AgentStatus.Restarting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInProgress(value);
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
proto.sandboxes.api.v1.AgentStatus.Restarting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AgentStatus.Restarting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AgentStatus.Restarting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AgentStatus.Restarting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInProgress();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool in_progress = 1;
 * @return {boolean}
 */
proto.sandboxes.api.v1.AgentStatus.Restarting.prototype.getInProgress = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.AgentStatus.Restarting} returns this
 */
proto.sandboxes.api.v1.AgentStatus.Restarting.prototype.setInProgress = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.AgentStatus.Notice.repeatedFields_ = [1];



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
proto.sandboxes.api.v1.AgentStatus.Notice.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AgentStatus.Notice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AgentStatus.Notice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AgentStatus.Notice.toObject = function(includeInstance, msg) {
  var f, obj = {
    messagesList: jspb.Message.toObjectList(msg.getMessagesList(),
    proto.sandboxes.api.v1.AgentStatus.Notice.Message.toObject, includeInstance)
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
 * @return {!proto.sandboxes.api.v1.AgentStatus.Notice}
 */
proto.sandboxes.api.v1.AgentStatus.Notice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AgentStatus.Notice;
  return proto.sandboxes.api.v1.AgentStatus.Notice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AgentStatus.Notice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AgentStatus.Notice}
 */
proto.sandboxes.api.v1.AgentStatus.Notice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.AgentStatus.Notice.Message;
      reader.readMessage(value,proto.sandboxes.api.v1.AgentStatus.Notice.Message.deserializeBinaryFromReader);
      msg.addMessages(value);
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
proto.sandboxes.api.v1.AgentStatus.Notice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AgentStatus.Notice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AgentStatus.Notice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AgentStatus.Notice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sandboxes.api.v1.AgentStatus.Notice.Message.serializeBinaryToWriter
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
proto.sandboxes.api.v1.AgentStatus.Notice.Message.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AgentStatus.Notice.Message.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AgentStatus.Notice.Message} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AgentStatus.Notice.Message.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    postedAt: (f = msg.getPostedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    message: (f = msg.getMessage()) && sandboxes_api_v1_notification_pb.Notification.toObject(includeInstance, f)
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
 * @return {!proto.sandboxes.api.v1.AgentStatus.Notice.Message}
 */
proto.sandboxes.api.v1.AgentStatus.Notice.Message.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AgentStatus.Notice.Message;
  return proto.sandboxes.api.v1.AgentStatus.Notice.Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AgentStatus.Notice.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AgentStatus.Notice.Message}
 */
proto.sandboxes.api.v1.AgentStatus.Notice.Message.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setPostedAt(value);
      break;
    case 3:
      var value = new sandboxes_api_v1_notification_pb.Notification;
      reader.readMessage(value,sandboxes_api_v1_notification_pb.Notification.deserializeBinaryFromReader);
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
proto.sandboxes.api.v1.AgentStatus.Notice.Message.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AgentStatus.Notice.Message.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AgentStatus.Notice.Message} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AgentStatus.Notice.Message.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPostedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      sandboxes_api_v1_notification_pb.Notification.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.AgentStatus.Notice.Message.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.AgentStatus.Notice.Message} returns this
 */
proto.sandboxes.api.v1.AgentStatus.Notice.Message.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp posted_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sandboxes.api.v1.AgentStatus.Notice.Message.prototype.getPostedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.sandboxes.api.v1.AgentStatus.Notice.Message} returns this
*/
proto.sandboxes.api.v1.AgentStatus.Notice.Message.prototype.setPostedAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AgentStatus.Notice.Message} returns this
 */
proto.sandboxes.api.v1.AgentStatus.Notice.Message.prototype.clearPostedAt = function() {
  return this.setPostedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AgentStatus.Notice.Message.prototype.hasPostedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Notification message = 3;
 * @return {?proto.sandboxes.api.v1.Notification}
 */
proto.sandboxes.api.v1.AgentStatus.Notice.Message.prototype.getMessage = function() {
  return /** @type{?proto.sandboxes.api.v1.Notification} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_notification_pb.Notification, 3));
};


/**
 * @param {?proto.sandboxes.api.v1.Notification|undefined} value
 * @return {!proto.sandboxes.api.v1.AgentStatus.Notice.Message} returns this
*/
proto.sandboxes.api.v1.AgentStatus.Notice.Message.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AgentStatus.Notice.Message} returns this
 */
proto.sandboxes.api.v1.AgentStatus.Notice.Message.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AgentStatus.Notice.Message.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Message messages = 1;
 * @return {!Array<!proto.sandboxes.api.v1.AgentStatus.Notice.Message>}
 */
proto.sandboxes.api.v1.AgentStatus.Notice.prototype.getMessagesList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.AgentStatus.Notice.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.AgentStatus.Notice.Message, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.AgentStatus.Notice.Message>} value
 * @return {!proto.sandboxes.api.v1.AgentStatus.Notice} returns this
*/
proto.sandboxes.api.v1.AgentStatus.Notice.prototype.setMessagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sandboxes.api.v1.AgentStatus.Notice.Message=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AgentStatus.Notice.Message}
 */
proto.sandboxes.api.v1.AgentStatus.Notice.prototype.addMessages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sandboxes.api.v1.AgentStatus.Notice.Message, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AgentStatus.Notice} returns this
 */
proto.sandboxes.api.v1.AgentStatus.Notice.prototype.clearMessagesList = function() {
  return this.setMessagesList([]);
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
proto.sandboxes.api.v1.AgentStatus.Restriction.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.AgentStatus.Restriction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.AgentStatus.Restriction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AgentStatus.Restriction.toObject = function(includeInstance, msg) {
  var f, obj = {
    restricted: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    allowChange: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.sandboxes.api.v1.AgentStatus.Restriction}
 */
proto.sandboxes.api.v1.AgentStatus.Restriction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.AgentStatus.Restriction;
  return proto.sandboxes.api.v1.AgentStatus.Restriction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.AgentStatus.Restriction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.AgentStatus.Restriction}
 */
proto.sandboxes.api.v1.AgentStatus.Restriction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRestricted(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowChange(value);
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
proto.sandboxes.api.v1.AgentStatus.Restriction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.AgentStatus.Restriction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.AgentStatus.Restriction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.AgentStatus.Restriction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRestricted();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getAllowChange();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional bool restricted = 1;
 * @return {boolean}
 */
proto.sandboxes.api.v1.AgentStatus.Restriction.prototype.getRestricted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.AgentStatus.Restriction} returns this
 */
proto.sandboxes.api.v1.AgentStatus.Restriction.prototype.setRestricted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool allow_change = 2;
 * @return {boolean}
 */
proto.sandboxes.api.v1.AgentStatus.Restriction.prototype.getAllowChange = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.AgentStatus.Restriction} returns this
 */
proto.sandboxes.api.v1.AgentStatus.Restriction.prototype.setAllowChange = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional AgentInfo info = 1;
 * @return {?proto.sandboxes.api.v1.AgentInfo}
 */
proto.sandboxes.api.v1.AgentStatus.prototype.getInfo = function() {
  return /** @type{?proto.sandboxes.api.v1.AgentInfo} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AgentInfo, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.AgentInfo|undefined} value
 * @return {!proto.sandboxes.api.v1.AgentStatus} returns this
*/
proto.sandboxes.api.v1.AgentStatus.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AgentStatus} returns this
 */
proto.sandboxes.api.v1.AgentStatus.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AgentStatus.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Overview overview = 2;
 * @return {?proto.sandboxes.api.v1.AgentStatus.Overview}
 */
proto.sandboxes.api.v1.AgentStatus.prototype.getOverview = function() {
  return /** @type{?proto.sandboxes.api.v1.AgentStatus.Overview} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AgentStatus.Overview, 2));
};


/**
 * @param {?proto.sandboxes.api.v1.AgentStatus.Overview|undefined} value
 * @return {!proto.sandboxes.api.v1.AgentStatus} returns this
*/
proto.sandboxes.api.v1.AgentStatus.prototype.setOverview = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AgentStatus} returns this
 */
proto.sandboxes.api.v1.AgentStatus.prototype.clearOverview = function() {
  return this.setOverview(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AgentStatus.prototype.hasOverview = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ProbeStatus health_probe_status = 3;
 * @return {!Array<!proto.sandboxes.api.v1.ProbeStatus>}
 */
proto.sandboxes.api.v1.AgentStatus.prototype.getHealthProbeStatusList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.ProbeStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.ProbeStatus, 3));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.ProbeStatus>} value
 * @return {!proto.sandboxes.api.v1.AgentStatus} returns this
*/
proto.sandboxes.api.v1.AgentStatus.prototype.setHealthProbeStatusList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.sandboxes.api.v1.ProbeStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.ProbeStatus}
 */
proto.sandboxes.api.v1.AgentStatus.prototype.addHealthProbeStatus = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.sandboxes.api.v1.ProbeStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AgentStatus} returns this
 */
proto.sandboxes.api.v1.AgentStatus.prototype.clearHealthProbeStatusList = function() {
  return this.setHealthProbeStatusList([]);
};


/**
 * repeated ProbeStatus readiness_probe_status = 4;
 * @return {!Array<!proto.sandboxes.api.v1.ProbeStatus>}
 */
proto.sandboxes.api.v1.AgentStatus.prototype.getReadinessProbeStatusList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.ProbeStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.ProbeStatus, 4));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.ProbeStatus>} value
 * @return {!proto.sandboxes.api.v1.AgentStatus} returns this
*/
proto.sandboxes.api.v1.AgentStatus.prototype.setReadinessProbeStatusList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.sandboxes.api.v1.ProbeStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.ProbeStatus}
 */
proto.sandboxes.api.v1.AgentStatus.prototype.addReadinessProbeStatus = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.sandboxes.api.v1.ProbeStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AgentStatus} returns this
 */
proto.sandboxes.api.v1.AgentStatus.prototype.clearReadinessProbeStatusList = function() {
  return this.setReadinessProbeStatusList([]);
};


/**
 * map<string, TaskStatus> tasks = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.sandboxes.api.v1.TaskStatus>}
 */
proto.sandboxes.api.v1.AgentStatus.prototype.getTasksMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.sandboxes.api.v1.TaskStatus>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      proto.sandboxes.api.v1.TaskStatus));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.AgentStatus} returns this
 */
proto.sandboxes.api.v1.AgentStatus.prototype.clearTasksMap = function() {
  this.getTasksMap().clear();
  return this;};


/**
 * map<string, Process> processes = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.sandboxes.api.v1.Process>}
 */
proto.sandboxes.api.v1.AgentStatus.prototype.getProcessesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.sandboxes.api.v1.Process>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      proto.sandboxes.api.v1.Process));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.AgentStatus} returns this
 */
proto.sandboxes.api.v1.AgentStatus.prototype.clearProcessesMap = function() {
  this.getProcessesMap().clear();
  return this;};


/**
 * repeated PortForward forwarded_ports = 7;
 * @return {!Array<!proto.sandboxes.api.v1.AgentStatus.PortForward>}
 */
proto.sandboxes.api.v1.AgentStatus.prototype.getForwardedPortsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.AgentStatus.PortForward>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.AgentStatus.PortForward, 7));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.AgentStatus.PortForward>} value
 * @return {!proto.sandboxes.api.v1.AgentStatus} returns this
*/
proto.sandboxes.api.v1.AgentStatus.prototype.setForwardedPortsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.sandboxes.api.v1.AgentStatus.PortForward=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.AgentStatus.PortForward}
 */
proto.sandboxes.api.v1.AgentStatus.prototype.addForwardedPorts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.sandboxes.api.v1.AgentStatus.PortForward, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AgentStatus} returns this
 */
proto.sandboxes.api.v1.AgentStatus.prototype.clearForwardedPortsList = function() {
  return this.setForwardedPortsList([]);
};


/**
 * optional UserSessions user_sessions = 8;
 * @return {?proto.sandboxes.api.v1.AgentStatus.UserSessions}
 */
proto.sandboxes.api.v1.AgentStatus.prototype.getUserSessions = function() {
  return /** @type{?proto.sandboxes.api.v1.AgentStatus.UserSessions} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AgentStatus.UserSessions, 8));
};


/**
 * @param {?proto.sandboxes.api.v1.AgentStatus.UserSessions|undefined} value
 * @return {!proto.sandboxes.api.v1.AgentStatus} returns this
*/
proto.sandboxes.api.v1.AgentStatus.prototype.setUserSessions = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AgentStatus} returns this
 */
proto.sandboxes.api.v1.AgentStatus.prototype.clearUserSessions = function() {
  return this.setUserSessions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AgentStatus.prototype.hasUserSessions = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated ProbeStatus activity_probe_status = 10;
 * @return {!Array<!proto.sandboxes.api.v1.ProbeStatus>}
 */
proto.sandboxes.api.v1.AgentStatus.prototype.getActivityProbeStatusList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.ProbeStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.ProbeStatus, 10));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.ProbeStatus>} value
 * @return {!proto.sandboxes.api.v1.AgentStatus} returns this
*/
proto.sandboxes.api.v1.AgentStatus.prototype.setActivityProbeStatusList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.sandboxes.api.v1.ProbeStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.ProbeStatus}
 */
proto.sandboxes.api.v1.AgentStatus.prototype.addActivityProbeStatus = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.sandboxes.api.v1.ProbeStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.AgentStatus} returns this
 */
proto.sandboxes.api.v1.AgentStatus.prototype.clearActivityProbeStatusList = function() {
  return this.setActivityProbeStatusList([]);
};


/**
 * optional Features features = 11;
 * @return {?proto.sandboxes.api.v1.AgentStatus.Features}
 */
proto.sandboxes.api.v1.AgentStatus.prototype.getFeatures = function() {
  return /** @type{?proto.sandboxes.api.v1.AgentStatus.Features} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AgentStatus.Features, 11));
};


/**
 * @param {?proto.sandboxes.api.v1.AgentStatus.Features|undefined} value
 * @return {!proto.sandboxes.api.v1.AgentStatus} returns this
*/
proto.sandboxes.api.v1.AgentStatus.prototype.setFeatures = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AgentStatus} returns this
 */
proto.sandboxes.api.v1.AgentStatus.prototype.clearFeatures = function() {
  return this.setFeatures(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AgentStatus.prototype.hasFeatures = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Restarting restarting = 12;
 * @return {?proto.sandboxes.api.v1.AgentStatus.Restarting}
 */
proto.sandboxes.api.v1.AgentStatus.prototype.getRestarting = function() {
  return /** @type{?proto.sandboxes.api.v1.AgentStatus.Restarting} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AgentStatus.Restarting, 12));
};


/**
 * @param {?proto.sandboxes.api.v1.AgentStatus.Restarting|undefined} value
 * @return {!proto.sandboxes.api.v1.AgentStatus} returns this
*/
proto.sandboxes.api.v1.AgentStatus.prototype.setRestarting = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AgentStatus} returns this
 */
proto.sandboxes.api.v1.AgentStatus.prototype.clearRestarting = function() {
  return this.setRestarting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AgentStatus.prototype.hasRestarting = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Restriction restriction = 13;
 * @return {?proto.sandboxes.api.v1.AgentStatus.Restriction}
 */
proto.sandboxes.api.v1.AgentStatus.prototype.getRestriction = function() {
  return /** @type{?proto.sandboxes.api.v1.AgentStatus.Restriction} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AgentStatus.Restriction, 13));
};


/**
 * @param {?proto.sandboxes.api.v1.AgentStatus.Restriction|undefined} value
 * @return {!proto.sandboxes.api.v1.AgentStatus} returns this
*/
proto.sandboxes.api.v1.AgentStatus.prototype.setRestriction = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AgentStatus} returns this
 */
proto.sandboxes.api.v1.AgentStatus.prototype.clearRestriction = function() {
  return this.setRestriction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AgentStatus.prototype.hasRestriction = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional Notice notice = 14;
 * @return {?proto.sandboxes.api.v1.AgentStatus.Notice}
 */
proto.sandboxes.api.v1.AgentStatus.prototype.getNotice = function() {
  return /** @type{?proto.sandboxes.api.v1.AgentStatus.Notice} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.AgentStatus.Notice, 14));
};


/**
 * @param {?proto.sandboxes.api.v1.AgentStatus.Notice|undefined} value
 * @return {!proto.sandboxes.api.v1.AgentStatus} returns this
*/
proto.sandboxes.api.v1.AgentStatus.prototype.setNotice = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.AgentStatus} returns this
 */
proto.sandboxes.api.v1.AgentStatus.prototype.clearNotice = function() {
  return this.setNotice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.AgentStatus.prototype.hasNotice = function() {
  return jspb.Message.getField(this, 14) != null;
};


goog.object.extend(exports, proto.sandboxes.api.v1);
