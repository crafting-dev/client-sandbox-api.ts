// source: sandboxes/api/v1/systemadminservice.proto
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
var sandboxes_api_v1_common_pb = require('../../../sandboxes/api/v1/common_pb.js');
goog.object.extend(proto, sandboxes_api_v1_common_pb);
var sandboxes_api_v1_sandbox_pb = require('../../../sandboxes/api/v1/sandbox_pb.js');
goog.object.extend(proto, sandboxes_api_v1_sandbox_pb);
var sandboxes_api_v1_org_pb = require('../../../sandboxes/api/v1/org_pb.js');
goog.object.extend(proto, sandboxes_api_v1_org_pb);
var sandboxes_api_v1_user_pb = require('../../../sandboxes/api/v1/user_pb.js');
goog.object.extend(proto, sandboxes_api_v1_user_pb);
var sandboxes_api_v1_resource_pb = require('../../../sandboxes/api/v1/resource_pb.js');
goog.object.extend(proto, sandboxes_api_v1_resource_pb);
var sandboxes_api_v1_resource_system_pb = require('../../../sandboxes/api/v1/resource_system_pb.js');
goog.object.extend(proto, sandboxes_api_v1_resource_system_pb);
var sandboxes_api_v1_resource_nodepool_pb = require('../../../sandboxes/api/v1/resource_nodepool_pb.js');
goog.object.extend(proto, sandboxes_api_v1_resource_nodepool_pb);
var sandboxes_api_v1_systeminfra_pb = require('../../../sandboxes/api/v1/systeminfra_pb.js');
goog.object.extend(proto, sandboxes_api_v1_systeminfra_pb);
goog.exportSymbol('proto.sandboxes.api.v1.CreateK8sNodePoolRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.CreateK8sNodePoolResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.DecodeRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.DecodeRequest.InputCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.DecodeRequest.Type', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.DecodeResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.DecodeResponse.ResultCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.DeleteK8sNodePoolRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.DeleteK8sNodePoolResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.EncodeRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.EncodeRequest.FromCase', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.EncodeResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.InfraActionRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.InfraActionResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ListK8sNodePoolsRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ListK8sNodePoolsResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ListSystemAlertsRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.ListSystemAlertsResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.NodeMetrics', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.NodePoolMetrics', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.NodeStatus', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.NodeStatus.Workload', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.QueryInfraRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.QueryInfraResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.QueryNodeMetricsRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.QueryNodeMetricsResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.QueryNodePoolMetricsRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.QueryNodePoolMetricsResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.QueryNodeStatusRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.QueryNodeStatusResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.QuerySystemRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.QuerySystemResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.QueryWorkloadMetricsRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.QueryWorkloadMetricsResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.SystemAlert', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateK8sNodePoolRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateK8sNodePoolResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateSystemRequest', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.UpdateSystemResponse', null, global);
goog.exportSymbol('proto.sandboxes.api.v1.WorkloadMetrics', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.EncodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sandboxes.api.v1.EncodeRequest.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.EncodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.EncodeRequest.displayName = 'proto.sandboxes.api.v1.EncodeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.EncodeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.EncodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.EncodeResponse.displayName = 'proto.sandboxes.api.v1.EncodeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.DecodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sandboxes.api.v1.DecodeRequest.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.DecodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.DecodeRequest.displayName = 'proto.sandboxes.api.v1.DecodeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.DecodeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sandboxes.api.v1.DecodeResponse.oneofGroups_);
};
goog.inherits(proto.sandboxes.api.v1.DecodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.DecodeResponse.displayName = 'proto.sandboxes.api.v1.DecodeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.SystemAlert = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.SystemAlert, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.SystemAlert.displayName = 'proto.sandboxes.api.v1.SystemAlert';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.ListSystemAlertsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.ListSystemAlertsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ListSystemAlertsRequest.displayName = 'proto.sandboxes.api.v1.ListSystemAlertsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.ListSystemAlertsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.ListSystemAlertsResponse.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.ListSystemAlertsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ListSystemAlertsResponse.displayName = 'proto.sandboxes.api.v1.ListSystemAlertsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.QuerySystemRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.QuerySystemRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.QuerySystemRequest.displayName = 'proto.sandboxes.api.v1.QuerySystemRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.QuerySystemResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.QuerySystemResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.QuerySystemResponse.displayName = 'proto.sandboxes.api.v1.QuerySystemResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateSystemRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateSystemRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateSystemRequest.displayName = 'proto.sandboxes.api.v1.UpdateSystemRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateSystemResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateSystemResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateSystemResponse.displayName = 'proto.sandboxes.api.v1.UpdateSystemResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.QueryInfraRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.QueryInfraRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.QueryInfraRequest.displayName = 'proto.sandboxes.api.v1.QueryInfraRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.QueryInfraResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.QueryInfraResponse.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.QueryInfraResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.QueryInfraResponse.displayName = 'proto.sandboxes.api.v1.QueryInfraResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.InfraActionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.InfraActionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.InfraActionRequest.displayName = 'proto.sandboxes.api.v1.InfraActionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.InfraActionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.InfraActionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.InfraActionResponse.displayName = 'proto.sandboxes.api.v1.InfraActionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.ListK8sNodePoolsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.ListK8sNodePoolsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ListK8sNodePoolsRequest.displayName = 'proto.sandboxes.api.v1.ListK8sNodePoolsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.ListK8sNodePoolsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.ListK8sNodePoolsResponse.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.ListK8sNodePoolsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.ListK8sNodePoolsResponse.displayName = 'proto.sandboxes.api.v1.ListK8sNodePoolsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.CreateK8sNodePoolRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.CreateK8sNodePoolRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.CreateK8sNodePoolRequest.displayName = 'proto.sandboxes.api.v1.CreateK8sNodePoolRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.CreateK8sNodePoolResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.CreateK8sNodePoolResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.CreateK8sNodePoolResponse.displayName = 'proto.sandboxes.api.v1.CreateK8sNodePoolResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateK8sNodePoolRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateK8sNodePoolRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateK8sNodePoolRequest.displayName = 'proto.sandboxes.api.v1.UpdateK8sNodePoolRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.UpdateK8sNodePoolResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.UpdateK8sNodePoolResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.UpdateK8sNodePoolResponse.displayName = 'proto.sandboxes.api.v1.UpdateK8sNodePoolResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateRequest.displayName = 'proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.displayName = 'proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change.displayName = 'proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation.displayName = 'proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.DeleteK8sNodePoolRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.DeleteK8sNodePoolRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.DeleteK8sNodePoolRequest.displayName = 'proto.sandboxes.api.v1.DeleteK8sNodePoolRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.DeleteK8sNodePoolResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.DeleteK8sNodePoolResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.DeleteK8sNodePoolResponse.displayName = 'proto.sandboxes.api.v1.DeleteK8sNodePoolResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.NodeMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.NodeMetrics.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.NodeMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.NodeMetrics.displayName = 'proto.sandboxes.api.v1.NodeMetrics';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.QueryNodeMetricsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.QueryNodeMetricsRequest.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.QueryNodeMetricsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.QueryNodeMetricsRequest.displayName = 'proto.sandboxes.api.v1.QueryNodeMetricsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.QueryNodeMetricsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.QueryNodeMetricsResponse.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.QueryNodeMetricsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.QueryNodeMetricsResponse.displayName = 'proto.sandboxes.api.v1.QueryNodeMetricsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.NodePoolMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.NodePoolMetrics.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.NodePoolMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.NodePoolMetrics.displayName = 'proto.sandboxes.api.v1.NodePoolMetrics';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.QueryNodePoolMetricsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.displayName = 'proto.sandboxes.api.v1.QueryNodePoolMetricsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.QueryNodePoolMetricsResponse.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.QueryNodePoolMetricsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.QueryNodePoolMetricsResponse.displayName = 'proto.sandboxes.api.v1.QueryNodePoolMetricsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.WorkloadMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.WorkloadMetrics.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.WorkloadMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.WorkloadMetrics.displayName = 'proto.sandboxes.api.v1.WorkloadMetrics';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.QueryWorkloadMetricsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.displayName = 'proto.sandboxes.api.v1.QueryWorkloadMetricsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter.displayName = 'proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.QueryWorkloadMetricsResponse.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.QueryWorkloadMetricsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.QueryWorkloadMetricsResponse.displayName = 'proto.sandboxes.api.v1.QueryWorkloadMetricsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.NodeStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.NodeStatus.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.NodeStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.NodeStatus.displayName = 'proto.sandboxes.api.v1.NodeStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.NodeStatus.Workload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sandboxes.api.v1.NodeStatus.Workload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.NodeStatus.Workload.displayName = 'proto.sandboxes.api.v1.NodeStatus.Workload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.QueryNodeStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.QueryNodeStatusRequest.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.QueryNodeStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.QueryNodeStatusRequest.displayName = 'proto.sandboxes.api.v1.QueryNodeStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sandboxes.api.v1.QueryNodeStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sandboxes.api.v1.QueryNodeStatusResponse.repeatedFields_, null);
};
goog.inherits(proto.sandboxes.api.v1.QueryNodeStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sandboxes.api.v1.QueryNodeStatusResponse.displayName = 'proto.sandboxes.api.v1.QueryNodeStatusResponse';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sandboxes.api.v1.EncodeRequest.oneofGroups_ = [[11]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.EncodeRequest.FromCase = {
  FROM_NOT_SET: 0,
  K8SNODEPOOL_CONFIG: 11
};

/**
 * @return {proto.sandboxes.api.v1.EncodeRequest.FromCase}
 */
proto.sandboxes.api.v1.EncodeRequest.prototype.getFromCase = function() {
  return /** @type {proto.sandboxes.api.v1.EncodeRequest.FromCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.EncodeRequest.oneofGroups_[0]));
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
proto.sandboxes.api.v1.EncodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.EncodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.EncodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.EncodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    k8snodepoolConfig: (f = msg.getK8snodepoolConfig()) && sandboxes_api_v1_resource_nodepool_pb.K8sNodePool.Config.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.EncodeRequest}
 */
proto.sandboxes.api.v1.EncodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.EncodeRequest;
  return proto.sandboxes.api.v1.EncodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.EncodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.EncodeRequest}
 */
proto.sandboxes.api.v1.EncodeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 11:
      var value = new sandboxes_api_v1_resource_nodepool_pb.K8sNodePool.Config;
      reader.readMessage(value,sandboxes_api_v1_resource_nodepool_pb.K8sNodePool.Config.deserializeBinaryFromReader);
      msg.setK8snodepoolConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.EncodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.EncodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.EncodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.EncodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getK8snodepoolConfig();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      sandboxes_api_v1_resource_nodepool_pb.K8sNodePool.Config.serializeBinaryToWriter
    );
  }
};


/**
 * optional K8sNodePool.Config k8snodepool_config = 11;
 * @return {?proto.sandboxes.api.v1.K8sNodePool.Config}
 */
proto.sandboxes.api.v1.EncodeRequest.prototype.getK8snodepoolConfig = function() {
  return /** @type{?proto.sandboxes.api.v1.K8sNodePool.Config} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_resource_nodepool_pb.K8sNodePool.Config, 11));
};


/**
 * @param {?proto.sandboxes.api.v1.K8sNodePool.Config|undefined} value
 * @return {!proto.sandboxes.api.v1.EncodeRequest} returns this
*/
proto.sandboxes.api.v1.EncodeRequest.prototype.setK8snodepoolConfig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.sandboxes.api.v1.EncodeRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.EncodeRequest} returns this
 */
proto.sandboxes.api.v1.EncodeRequest.prototype.clearK8snodepoolConfig = function() {
  return this.setK8snodepoolConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.EncodeRequest.prototype.hasK8snodepoolConfig = function() {
  return jspb.Message.getField(this, 11) != null;
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
proto.sandboxes.api.v1.EncodeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.EncodeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.EncodeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.EncodeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    yaml: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.EncodeResponse}
 */
proto.sandboxes.api.v1.EncodeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.EncodeResponse;
  return proto.sandboxes.api.v1.EncodeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.EncodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.EncodeResponse}
 */
proto.sandboxes.api.v1.EncodeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setYaml(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.EncodeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.EncodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.EncodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.EncodeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getYaml();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string yaml = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.EncodeResponse.prototype.getYaml = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.EncodeResponse} returns this
 */
proto.sandboxes.api.v1.EncodeResponse.prototype.setYaml = function(value) {
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
proto.sandboxes.api.v1.DecodeRequest.oneofGroups_ = [[11]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.DecodeRequest.InputCase = {
  INPUT_NOT_SET: 0,
  YAML: 11
};

/**
 * @return {proto.sandboxes.api.v1.DecodeRequest.InputCase}
 */
proto.sandboxes.api.v1.DecodeRequest.prototype.getInputCase = function() {
  return /** @type {proto.sandboxes.api.v1.DecodeRequest.InputCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.DecodeRequest.oneofGroups_[0]));
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
proto.sandboxes.api.v1.DecodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.DecodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.DecodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DecodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    yaml: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.DecodeRequest}
 */
proto.sandboxes.api.v1.DecodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.DecodeRequest;
  return proto.sandboxes.api.v1.DecodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.DecodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.DecodeRequest}
 */
proto.sandboxes.api.v1.DecodeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sandboxes.api.v1.DecodeRequest.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setYaml(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.DecodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.DecodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.DecodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DecodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
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


/**
 * @enum {number}
 */
proto.sandboxes.api.v1.DecodeRequest.Type = {
  UNSPECIFIED: 0,
  K8SNODEPOOL_CONFIG: 1
};

/**
 * optional Type type = 1;
 * @return {!proto.sandboxes.api.v1.DecodeRequest.Type}
 */
proto.sandboxes.api.v1.DecodeRequest.prototype.getType = function() {
  return /** @type {!proto.sandboxes.api.v1.DecodeRequest.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sandboxes.api.v1.DecodeRequest.Type} value
 * @return {!proto.sandboxes.api.v1.DecodeRequest} returns this
 */
proto.sandboxes.api.v1.DecodeRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string yaml = 11;
 * @return {string}
 */
proto.sandboxes.api.v1.DecodeRequest.prototype.getYaml = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.DecodeRequest} returns this
 */
proto.sandboxes.api.v1.DecodeRequest.prototype.setYaml = function(value) {
  return jspb.Message.setOneofField(this, 11, proto.sandboxes.api.v1.DecodeRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sandboxes.api.v1.DecodeRequest} returns this
 */
proto.sandboxes.api.v1.DecodeRequest.prototype.clearYaml = function() {
  return jspb.Message.setOneofField(this, 11, proto.sandboxes.api.v1.DecodeRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.DecodeRequest.prototype.hasYaml = function() {
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
proto.sandboxes.api.v1.DecodeResponse.oneofGroups_ = [[11]];

/**
 * @enum {number}
 */
proto.sandboxes.api.v1.DecodeResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  K8SNODEPOOL_CONFIG: 11
};

/**
 * @return {proto.sandboxes.api.v1.DecodeResponse.ResultCase}
 */
proto.sandboxes.api.v1.DecodeResponse.prototype.getResultCase = function() {
  return /** @type {proto.sandboxes.api.v1.DecodeResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.sandboxes.api.v1.DecodeResponse.oneofGroups_[0]));
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
proto.sandboxes.api.v1.DecodeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.DecodeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.DecodeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DecodeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    k8snodepoolConfig: (f = msg.getK8snodepoolConfig()) && sandboxes_api_v1_resource_nodepool_pb.K8sNodePool.Config.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.DecodeResponse}
 */
proto.sandboxes.api.v1.DecodeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.DecodeResponse;
  return proto.sandboxes.api.v1.DecodeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.DecodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.DecodeResponse}
 */
proto.sandboxes.api.v1.DecodeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 11:
      var value = new sandboxes_api_v1_resource_nodepool_pb.K8sNodePool.Config;
      reader.readMessage(value,sandboxes_api_v1_resource_nodepool_pb.K8sNodePool.Config.deserializeBinaryFromReader);
      msg.setK8snodepoolConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.DecodeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.DecodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.DecodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DecodeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getK8snodepoolConfig();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      sandboxes_api_v1_resource_nodepool_pb.K8sNodePool.Config.serializeBinaryToWriter
    );
  }
};


/**
 * optional K8sNodePool.Config k8snodepool_config = 11;
 * @return {?proto.sandboxes.api.v1.K8sNodePool.Config}
 */
proto.sandboxes.api.v1.DecodeResponse.prototype.getK8snodepoolConfig = function() {
  return /** @type{?proto.sandboxes.api.v1.K8sNodePool.Config} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_resource_nodepool_pb.K8sNodePool.Config, 11));
};


/**
 * @param {?proto.sandboxes.api.v1.K8sNodePool.Config|undefined} value
 * @return {!proto.sandboxes.api.v1.DecodeResponse} returns this
*/
proto.sandboxes.api.v1.DecodeResponse.prototype.setK8snodepoolConfig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.sandboxes.api.v1.DecodeResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.DecodeResponse} returns this
 */
proto.sandboxes.api.v1.DecodeResponse.prototype.clearK8snodepoolConfig = function() {
  return this.setK8snodepoolConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.DecodeResponse.prototype.hasK8snodepoolConfig = function() {
  return jspb.Message.getField(this, 11) != null;
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
proto.sandboxes.api.v1.SystemAlert.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.SystemAlert.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.SystemAlert} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.SystemAlert.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.SystemAlert}
 */
proto.sandboxes.api.v1.SystemAlert.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.SystemAlert;
  return proto.sandboxes.api.v1.SystemAlert.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.SystemAlert} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.SystemAlert}
 */
proto.sandboxes.api.v1.SystemAlert.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.SystemAlert.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.SystemAlert.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.SystemAlert} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.SystemAlert.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.SystemAlert.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.SystemAlert} returns this
 */
proto.sandboxes.api.v1.SystemAlert.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.SystemAlert.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.SystemAlert} returns this
 */
proto.sandboxes.api.v1.SystemAlert.prototype.setDescription = function(value) {
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
proto.sandboxes.api.v1.ListSystemAlertsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ListSystemAlertsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ListSystemAlertsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListSystemAlertsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.sandboxes.api.v1.ListSystemAlertsRequest}
 */
proto.sandboxes.api.v1.ListSystemAlertsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ListSystemAlertsRequest;
  return proto.sandboxes.api.v1.ListSystemAlertsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ListSystemAlertsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ListSystemAlertsRequest}
 */
proto.sandboxes.api.v1.ListSystemAlertsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.sandboxes.api.v1.ListSystemAlertsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ListSystemAlertsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ListSystemAlertsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListSystemAlertsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.ListSystemAlertsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.ListSystemAlertsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ListSystemAlertsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ListSystemAlertsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListSystemAlertsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    alertsList: jspb.Message.toObjectList(msg.getAlertsList(),
    proto.sandboxes.api.v1.SystemAlert.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.ListSystemAlertsResponse}
 */
proto.sandboxes.api.v1.ListSystemAlertsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ListSystemAlertsResponse;
  return proto.sandboxes.api.v1.ListSystemAlertsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ListSystemAlertsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ListSystemAlertsResponse}
 */
proto.sandboxes.api.v1.ListSystemAlertsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.SystemAlert;
      reader.readMessage(value,proto.sandboxes.api.v1.SystemAlert.deserializeBinaryFromReader);
      msg.addAlerts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.ListSystemAlertsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ListSystemAlertsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ListSystemAlertsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListSystemAlertsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlertsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sandboxes.api.v1.SystemAlert.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SystemAlert alerts = 1;
 * @return {!Array<!proto.sandboxes.api.v1.SystemAlert>}
 */
proto.sandboxes.api.v1.ListSystemAlertsResponse.prototype.getAlertsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.SystemAlert>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.SystemAlert, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.SystemAlert>} value
 * @return {!proto.sandboxes.api.v1.ListSystemAlertsResponse} returns this
*/
proto.sandboxes.api.v1.ListSystemAlertsResponse.prototype.setAlertsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sandboxes.api.v1.SystemAlert=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.SystemAlert}
 */
proto.sandboxes.api.v1.ListSystemAlertsResponse.prototype.addAlerts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sandboxes.api.v1.SystemAlert, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ListSystemAlertsResponse} returns this
 */
proto.sandboxes.api.v1.ListSystemAlertsResponse.prototype.clearAlertsList = function() {
  return this.setAlertsList([]);
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
proto.sandboxes.api.v1.QuerySystemRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.QuerySystemRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.QuerySystemRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.QuerySystemRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.sandboxes.api.v1.QuerySystemRequest}
 */
proto.sandboxes.api.v1.QuerySystemRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.QuerySystemRequest;
  return proto.sandboxes.api.v1.QuerySystemRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.QuerySystemRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.QuerySystemRequest}
 */
proto.sandboxes.api.v1.QuerySystemRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.sandboxes.api.v1.QuerySystemRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.QuerySystemRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.QuerySystemRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.QuerySystemRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.sandboxes.api.v1.QuerySystemResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.QuerySystemResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.QuerySystemResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.QuerySystemResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    system: (f = msg.getSystem()) && sandboxes_api_v1_resource_pb.Resource.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.QuerySystemResponse}
 */
proto.sandboxes.api.v1.QuerySystemResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.QuerySystemResponse;
  return proto.sandboxes.api.v1.QuerySystemResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.QuerySystemResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.QuerySystemResponse}
 */
proto.sandboxes.api.v1.QuerySystemResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_resource_pb.Resource;
      reader.readMessage(value,sandboxes_api_v1_resource_pb.Resource.deserializeBinaryFromReader);
      msg.setSystem(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.QuerySystemResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.QuerySystemResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.QuerySystemResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.QuerySystemResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSystem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_resource_pb.Resource.serializeBinaryToWriter
    );
  }
};


/**
 * optional Resource system = 1;
 * @return {?proto.sandboxes.api.v1.Resource}
 */
proto.sandboxes.api.v1.QuerySystemResponse.prototype.getSystem = function() {
  return /** @type{?proto.sandboxes.api.v1.Resource} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_resource_pb.Resource, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Resource|undefined} value
 * @return {!proto.sandboxes.api.v1.QuerySystemResponse} returns this
*/
proto.sandboxes.api.v1.QuerySystemResponse.prototype.setSystem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.QuerySystemResponse} returns this
 */
proto.sandboxes.api.v1.QuerySystemResponse.prototype.clearSystem = function() {
  return this.setSystem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.QuerySystemResponse.prototype.hasSystem = function() {
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
proto.sandboxes.api.v1.UpdateSystemRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateSystemRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateSystemRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSystemRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    alertConfig: (f = msg.getAlertConfig()) && sandboxes_api_v1_resource_system_pb.System.AlertConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateSystemRequest}
 */
proto.sandboxes.api.v1.UpdateSystemRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateSystemRequest;
  return proto.sandboxes.api.v1.UpdateSystemRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateSystemRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateSystemRequest}
 */
proto.sandboxes.api.v1.UpdateSystemRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_resource_system_pb.System.AlertConfig;
      reader.readMessage(value,sandboxes_api_v1_resource_system_pb.System.AlertConfig.deserializeBinaryFromReader);
      msg.setAlertConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateSystemRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateSystemRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateSystemRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSystemRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlertConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_resource_system_pb.System.AlertConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional System.AlertConfig alert_config = 1;
 * @return {?proto.sandboxes.api.v1.System.AlertConfig}
 */
proto.sandboxes.api.v1.UpdateSystemRequest.prototype.getAlertConfig = function() {
  return /** @type{?proto.sandboxes.api.v1.System.AlertConfig} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_resource_system_pb.System.AlertConfig, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.System.AlertConfig|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateSystemRequest} returns this
*/
proto.sandboxes.api.v1.UpdateSystemRequest.prototype.setAlertConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateSystemRequest} returns this
 */
proto.sandboxes.api.v1.UpdateSystemRequest.prototype.clearAlertConfig = function() {
  return this.setAlertConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSystemRequest.prototype.hasAlertConfig = function() {
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
proto.sandboxes.api.v1.UpdateSystemResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateSystemResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateSystemResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSystemResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    system: (f = msg.getSystem()) && sandboxes_api_v1_resource_pb.Resource.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateSystemResponse}
 */
proto.sandboxes.api.v1.UpdateSystemResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateSystemResponse;
  return proto.sandboxes.api.v1.UpdateSystemResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateSystemResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateSystemResponse}
 */
proto.sandboxes.api.v1.UpdateSystemResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_resource_pb.Resource;
      reader.readMessage(value,sandboxes_api_v1_resource_pb.Resource.deserializeBinaryFromReader);
      msg.setSystem(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateSystemResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateSystemResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateSystemResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateSystemResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSystem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_resource_pb.Resource.serializeBinaryToWriter
    );
  }
};


/**
 * optional Resource system = 1;
 * @return {?proto.sandboxes.api.v1.Resource}
 */
proto.sandboxes.api.v1.UpdateSystemResponse.prototype.getSystem = function() {
  return /** @type{?proto.sandboxes.api.v1.Resource} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_resource_pb.Resource, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Resource|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateSystemResponse} returns this
*/
proto.sandboxes.api.v1.UpdateSystemResponse.prototype.setSystem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateSystemResponse} returns this
 */
proto.sandboxes.api.v1.UpdateSystemResponse.prototype.clearSystem = function() {
  return this.setSystem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateSystemResponse.prototype.hasSystem = function() {
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
proto.sandboxes.api.v1.QueryInfraRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.QueryInfraRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.QueryInfraRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.QueryInfraRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.sandboxes.api.v1.QueryInfraRequest}
 */
proto.sandboxes.api.v1.QueryInfraRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.QueryInfraRequest;
  return proto.sandboxes.api.v1.QueryInfraRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.QueryInfraRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.QueryInfraRequest}
 */
proto.sandboxes.api.v1.QueryInfraRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.sandboxes.api.v1.QueryInfraRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.QueryInfraRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.QueryInfraRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.QueryInfraRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.QueryInfraResponse.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.QueryInfraResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.QueryInfraResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.QueryInfraResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.QueryInfraResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    infraList: jspb.Message.toObjectList(msg.getInfraList(),
    sandboxes_api_v1_systeminfra_pb.SystemInfra.toObject, includeInstance),
    regionsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.QueryInfraResponse}
 */
proto.sandboxes.api.v1.QueryInfraResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.QueryInfraResponse;
  return proto.sandboxes.api.v1.QueryInfraResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.QueryInfraResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.QueryInfraResponse}
 */
proto.sandboxes.api.v1.QueryInfraResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_systeminfra_pb.SystemInfra;
      reader.readMessage(value,sandboxes_api_v1_systeminfra_pb.SystemInfra.deserializeBinaryFromReader);
      msg.addInfra(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addRegions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.QueryInfraResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.QueryInfraResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.QueryInfraResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.QueryInfraResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfraList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      sandboxes_api_v1_systeminfra_pb.SystemInfra.serializeBinaryToWriter
    );
  }
  f = message.getRegionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated SystemInfra infra = 1;
 * @return {!Array<!proto.sandboxes.api.v1.SystemInfra>}
 */
proto.sandboxes.api.v1.QueryInfraResponse.prototype.getInfraList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.SystemInfra>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_systeminfra_pb.SystemInfra, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.SystemInfra>} value
 * @return {!proto.sandboxes.api.v1.QueryInfraResponse} returns this
*/
proto.sandboxes.api.v1.QueryInfraResponse.prototype.setInfraList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sandboxes.api.v1.SystemInfra=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.SystemInfra}
 */
proto.sandboxes.api.v1.QueryInfraResponse.prototype.addInfra = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sandboxes.api.v1.SystemInfra, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.QueryInfraResponse} returns this
 */
proto.sandboxes.api.v1.QueryInfraResponse.prototype.clearInfraList = function() {
  return this.setInfraList([]);
};


/**
 * repeated string regions = 2;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.QueryInfraResponse.prototype.getRegionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.QueryInfraResponse} returns this
 */
proto.sandboxes.api.v1.QueryInfraResponse.prototype.setRegionsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.QueryInfraResponse} returns this
 */
proto.sandboxes.api.v1.QueryInfraResponse.prototype.addRegions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.QueryInfraResponse} returns this
 */
proto.sandboxes.api.v1.QueryInfraResponse.prototype.clearRegionsList = function() {
  return this.setRegionsList([]);
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
proto.sandboxes.api.v1.InfraActionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.InfraActionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.InfraActionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.InfraActionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    region: jspb.Message.getFieldWithDefault(msg, 1, ""),
    action: (f = msg.getAction()) && google_protobuf_any_pb.Any.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.InfraActionRequest}
 */
proto.sandboxes.api.v1.InfraActionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.InfraActionRequest;
  return proto.sandboxes.api.v1.InfraActionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.InfraActionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.InfraActionRequest}
 */
proto.sandboxes.api.v1.InfraActionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    case 2:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
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
proto.sandboxes.api.v1.InfraActionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.InfraActionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.InfraActionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.InfraActionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRegion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional string region = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.InfraActionRequest.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.InfraActionRequest} returns this
 */
proto.sandboxes.api.v1.InfraActionRequest.prototype.setRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Any action = 2;
 * @return {?proto.google.protobuf.Any}
 */
proto.sandboxes.api.v1.InfraActionRequest.prototype.getAction = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 2));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.sandboxes.api.v1.InfraActionRequest} returns this
*/
proto.sandboxes.api.v1.InfraActionRequest.prototype.setAction = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.InfraActionRequest} returns this
 */
proto.sandboxes.api.v1.InfraActionRequest.prototype.clearAction = function() {
  return this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.InfraActionRequest.prototype.hasAction = function() {
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
proto.sandboxes.api.v1.InfraActionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.InfraActionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.InfraActionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.InfraActionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && google_protobuf_any_pb.Any.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.InfraActionResponse}
 */
proto.sandboxes.api.v1.InfraActionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.InfraActionResponse;
  return proto.sandboxes.api.v1.InfraActionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.InfraActionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.InfraActionResponse}
 */
proto.sandboxes.api.v1.InfraActionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
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
proto.sandboxes.api.v1.InfraActionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.InfraActionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.InfraActionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.InfraActionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Any result = 1;
 * @return {?proto.google.protobuf.Any}
 */
proto.sandboxes.api.v1.InfraActionResponse.prototype.getResult = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 1));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.sandboxes.api.v1.InfraActionResponse} returns this
*/
proto.sandboxes.api.v1.InfraActionResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.InfraActionResponse} returns this
 */
proto.sandboxes.api.v1.InfraActionResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.InfraActionResponse.prototype.hasResult = function() {
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
proto.sandboxes.api.v1.ListK8sNodePoolsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ListK8sNodePoolsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ListK8sNodePoolsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListK8sNodePoolsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.sandboxes.api.v1.ListK8sNodePoolsRequest}
 */
proto.sandboxes.api.v1.ListK8sNodePoolsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ListK8sNodePoolsRequest;
  return proto.sandboxes.api.v1.ListK8sNodePoolsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ListK8sNodePoolsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ListK8sNodePoolsRequest}
 */
proto.sandboxes.api.v1.ListK8sNodePoolsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.sandboxes.api.v1.ListK8sNodePoolsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ListK8sNodePoolsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ListK8sNodePoolsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListK8sNodePoolsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.ListK8sNodePoolsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.ListK8sNodePoolsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.ListK8sNodePoolsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.ListK8sNodePoolsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListK8sNodePoolsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodePoolsList: jspb.Message.toObjectList(msg.getNodePoolsList(),
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
 * @return {!proto.sandboxes.api.v1.ListK8sNodePoolsResponse}
 */
proto.sandboxes.api.v1.ListK8sNodePoolsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.ListK8sNodePoolsResponse;
  return proto.sandboxes.api.v1.ListK8sNodePoolsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.ListK8sNodePoolsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.ListK8sNodePoolsResponse}
 */
proto.sandboxes.api.v1.ListK8sNodePoolsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_resource_pb.Resource;
      reader.readMessage(value,sandboxes_api_v1_resource_pb.Resource.deserializeBinaryFromReader);
      msg.addNodePools(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.ListK8sNodePoolsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.ListK8sNodePoolsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.ListK8sNodePoolsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.ListK8sNodePoolsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodePoolsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      sandboxes_api_v1_resource_pb.Resource.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Resource node_pools = 1;
 * @return {!Array<!proto.sandboxes.api.v1.Resource>}
 */
proto.sandboxes.api.v1.ListK8sNodePoolsResponse.prototype.getNodePoolsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.Resource>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_resource_pb.Resource, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.Resource>} value
 * @return {!proto.sandboxes.api.v1.ListK8sNodePoolsResponse} returns this
*/
proto.sandboxes.api.v1.ListK8sNodePoolsResponse.prototype.setNodePoolsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sandboxes.api.v1.Resource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.Resource}
 */
proto.sandboxes.api.v1.ListK8sNodePoolsResponse.prototype.addNodePools = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sandboxes.api.v1.Resource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.ListK8sNodePoolsResponse} returns this
 */
proto.sandboxes.api.v1.ListK8sNodePoolsResponse.prototype.clearNodePoolsList = function() {
  return this.setNodePoolsList([]);
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
proto.sandboxes.api.v1.CreateK8sNodePoolRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.CreateK8sNodePoolRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.CreateK8sNodePoolRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateK8sNodePoolRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodePool: (f = msg.getNodePool()) && sandboxes_api_v1_resource_pb.Resource.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.CreateK8sNodePoolRequest}
 */
proto.sandboxes.api.v1.CreateK8sNodePoolRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.CreateK8sNodePoolRequest;
  return proto.sandboxes.api.v1.CreateK8sNodePoolRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.CreateK8sNodePoolRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.CreateK8sNodePoolRequest}
 */
proto.sandboxes.api.v1.CreateK8sNodePoolRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_resource_pb.Resource;
      reader.readMessage(value,sandboxes_api_v1_resource_pb.Resource.deserializeBinaryFromReader);
      msg.setNodePool(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.CreateK8sNodePoolRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.CreateK8sNodePoolRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.CreateK8sNodePoolRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateK8sNodePoolRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodePool();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_resource_pb.Resource.serializeBinaryToWriter
    );
  }
};


/**
 * optional Resource node_pool = 1;
 * @return {?proto.sandboxes.api.v1.Resource}
 */
proto.sandboxes.api.v1.CreateK8sNodePoolRequest.prototype.getNodePool = function() {
  return /** @type{?proto.sandboxes.api.v1.Resource} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_resource_pb.Resource, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Resource|undefined} value
 * @return {!proto.sandboxes.api.v1.CreateK8sNodePoolRequest} returns this
*/
proto.sandboxes.api.v1.CreateK8sNodePoolRequest.prototype.setNodePool = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.CreateK8sNodePoolRequest} returns this
 */
proto.sandboxes.api.v1.CreateK8sNodePoolRequest.prototype.clearNodePool = function() {
  return this.setNodePool(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.CreateK8sNodePoolRequest.prototype.hasNodePool = function() {
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
proto.sandboxes.api.v1.CreateK8sNodePoolResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.CreateK8sNodePoolResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.CreateK8sNodePoolResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateK8sNodePoolResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodePool: (f = msg.getNodePool()) && sandboxes_api_v1_resource_pb.Resource.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.CreateK8sNodePoolResponse}
 */
proto.sandboxes.api.v1.CreateK8sNodePoolResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.CreateK8sNodePoolResponse;
  return proto.sandboxes.api.v1.CreateK8sNodePoolResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.CreateK8sNodePoolResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.CreateK8sNodePoolResponse}
 */
proto.sandboxes.api.v1.CreateK8sNodePoolResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_resource_pb.Resource;
      reader.readMessage(value,sandboxes_api_v1_resource_pb.Resource.deserializeBinaryFromReader);
      msg.setNodePool(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.CreateK8sNodePoolResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.CreateK8sNodePoolResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.CreateK8sNodePoolResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.CreateK8sNodePoolResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodePool();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_resource_pb.Resource.serializeBinaryToWriter
    );
  }
};


/**
 * optional Resource node_pool = 1;
 * @return {?proto.sandboxes.api.v1.Resource}
 */
proto.sandboxes.api.v1.CreateK8sNodePoolResponse.prototype.getNodePool = function() {
  return /** @type{?proto.sandboxes.api.v1.Resource} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_resource_pb.Resource, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Resource|undefined} value
 * @return {!proto.sandboxes.api.v1.CreateK8sNodePoolResponse} returns this
*/
proto.sandboxes.api.v1.CreateK8sNodePoolResponse.prototype.setNodePool = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.CreateK8sNodePoolResponse} returns this
 */
proto.sandboxes.api.v1.CreateK8sNodePoolResponse.prototype.clearNodePool = function() {
  return this.setNodePool(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.CreateK8sNodePoolResponse.prototype.hasNodePool = function() {
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
proto.sandboxes.api.v1.UpdateK8sNodePoolRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateK8sNodePoolRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateK8sNodePoolRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateK8sNodePoolRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodePool: (f = msg.getNodePool()) && sandboxes_api_v1_resource_pb.Resource.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateK8sNodePoolRequest}
 */
proto.sandboxes.api.v1.UpdateK8sNodePoolRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateK8sNodePoolRequest;
  return proto.sandboxes.api.v1.UpdateK8sNodePoolRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateK8sNodePoolRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateK8sNodePoolRequest}
 */
proto.sandboxes.api.v1.UpdateK8sNodePoolRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_resource_pb.Resource;
      reader.readMessage(value,sandboxes_api_v1_resource_pb.Resource.deserializeBinaryFromReader);
      msg.setNodePool(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateK8sNodePoolRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateK8sNodePoolRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateK8sNodePoolRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateK8sNodePoolRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodePool();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_resource_pb.Resource.serializeBinaryToWriter
    );
  }
};


/**
 * optional Resource node_pool = 1;
 * @return {?proto.sandboxes.api.v1.Resource}
 */
proto.sandboxes.api.v1.UpdateK8sNodePoolRequest.prototype.getNodePool = function() {
  return /** @type{?proto.sandboxes.api.v1.Resource} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_resource_pb.Resource, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Resource|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateK8sNodePoolRequest} returns this
*/
proto.sandboxes.api.v1.UpdateK8sNodePoolRequest.prototype.setNodePool = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateK8sNodePoolRequest} returns this
 */
proto.sandboxes.api.v1.UpdateK8sNodePoolRequest.prototype.clearNodePool = function() {
  return this.setNodePool(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateK8sNodePoolRequest.prototype.hasNodePool = function() {
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
proto.sandboxes.api.v1.UpdateK8sNodePoolResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.UpdateK8sNodePoolResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.UpdateK8sNodePoolResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateK8sNodePoolResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodePool: (f = msg.getNodePool()) && sandboxes_api_v1_resource_pb.Resource.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.UpdateK8sNodePoolResponse}
 */
proto.sandboxes.api.v1.UpdateK8sNodePoolResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.UpdateK8sNodePoolResponse;
  return proto.sandboxes.api.v1.UpdateK8sNodePoolResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.UpdateK8sNodePoolResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.UpdateK8sNodePoolResponse}
 */
proto.sandboxes.api.v1.UpdateK8sNodePoolResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_resource_pb.Resource;
      reader.readMessage(value,sandboxes_api_v1_resource_pb.Resource.deserializeBinaryFromReader);
      msg.setNodePool(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.UpdateK8sNodePoolResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.UpdateK8sNodePoolResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.UpdateK8sNodePoolResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.UpdateK8sNodePoolResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodePool();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_resource_pb.Resource.serializeBinaryToWriter
    );
  }
};


/**
 * optional Resource node_pool = 1;
 * @return {?proto.sandboxes.api.v1.Resource}
 */
proto.sandboxes.api.v1.UpdateK8sNodePoolResponse.prototype.getNodePool = function() {
  return /** @type{?proto.sandboxes.api.v1.Resource} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_resource_pb.Resource, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Resource|undefined} value
 * @return {!proto.sandboxes.api.v1.UpdateK8sNodePoolResponse} returns this
*/
proto.sandboxes.api.v1.UpdateK8sNodePoolResponse.prototype.setNodePool = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.UpdateK8sNodePoolResponse} returns this
 */
proto.sandboxes.api.v1.UpdateK8sNodePoolResponse.prototype.clearNodePool = function() {
  return this.setNodePool(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.UpdateK8sNodePoolResponse.prototype.hasNodePool = function() {
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
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodePool: (f = msg.getNodePool()) && sandboxes_api_v1_resource_pb.Resource.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateRequest}
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateRequest;
  return proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateRequest}
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_resource_pb.Resource;
      reader.readMessage(value,sandboxes_api_v1_resource_pb.Resource.deserializeBinaryFromReader);
      msg.setNodePool(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodePool();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_resource_pb.Resource.serializeBinaryToWriter
    );
  }
};


/**
 * optional Resource node_pool = 1;
 * @return {?proto.sandboxes.api.v1.Resource}
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateRequest.prototype.getNodePool = function() {
  return /** @type{?proto.sandboxes.api.v1.Resource} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_resource_pb.Resource, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Resource|undefined} value
 * @return {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateRequest} returns this
*/
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateRequest.prototype.setNodePool = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateRequest} returns this
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateRequest.prototype.clearNodePool = function() {
  return this.setNodePool(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateRequest.prototype.hasNodePool = function() {
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
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recreation: (f = msg.getRecreation()) && proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse}
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse;
  return proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse}
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation;
      reader.readMessage(value,proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation.deserializeBinaryFromReader);
      msg.setRecreation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecreation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation.serializeBinaryToWriter
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
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change.toObject = function(includeInstance, msg) {
  var f, obj = {
    field: jspb.Message.getFieldWithDefault(msg, 1, ""),
    from: jspb.Message.getFieldWithDefault(msg, 2, ""),
    to: jspb.Message.getFieldWithDefault(msg, 3, ""),
    explain: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change}
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change;
  return proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change}
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrom(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTo(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setExplain(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getField();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFrom();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTo();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getExplain();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string field = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change} returns this
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change.prototype.setField = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string from = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change.prototype.getFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change} returns this
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change.prototype.setFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string to = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change.prototype.getTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change} returns this
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change.prototype.setTo = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string explain = 4;
 * @return {string}
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change.prototype.getExplain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change} returns this
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change.prototype.setExplain = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation.toObject = function(includeInstance, msg) {
  var f, obj = {
    changesList: jspb.Message.toObjectList(msg.getChangesList(),
    proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation}
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation;
  return proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation}
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change;
      reader.readMessage(value,proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change.deserializeBinaryFromReader);
      msg.addChanges(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChangesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Change changes = 1;
 * @return {!Array<!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change>}
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation.prototype.getChangesList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change>} value
 * @return {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation} returns this
*/
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation.prototype.setChangesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change}
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation.prototype.addChanges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Change, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation} returns this
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation.prototype.clearChangesList = function() {
  return this.setChangesList([]);
};


/**
 * optional Recreation recreation = 1;
 * @return {?proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation}
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.prototype.getRecreation = function() {
  return /** @type{?proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation} */ (
    jspb.Message.getWrapperField(this, proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.Recreation|undefined} value
 * @return {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse} returns this
*/
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.prototype.setRecreation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse} returns this
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.prototype.clearRecreation = function() {
  return this.setRecreation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.PreviewK8sNodePoolUpdateResponse.prototype.hasRecreation = function() {
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
proto.sandboxes.api.v1.DeleteK8sNodePoolRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.DeleteK8sNodePoolRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.DeleteK8sNodePoolRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteK8sNodePoolRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.sandboxes.api.v1.DeleteK8sNodePoolRequest}
 */
proto.sandboxes.api.v1.DeleteK8sNodePoolRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.DeleteK8sNodePoolRequest;
  return proto.sandboxes.api.v1.DeleteK8sNodePoolRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.DeleteK8sNodePoolRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.DeleteK8sNodePoolRequest}
 */
proto.sandboxes.api.v1.DeleteK8sNodePoolRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.sandboxes.api.v1.DeleteK8sNodePoolRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.DeleteK8sNodePoolRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.DeleteK8sNodePoolRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteK8sNodePoolRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.sandboxes.api.v1.DeleteK8sNodePoolRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.DeleteK8sNodePoolRequest} returns this
 */
proto.sandboxes.api.v1.DeleteK8sNodePoolRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.DeleteK8sNodePoolRequest.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.DeleteK8sNodePoolRequest} returns this
 */
proto.sandboxes.api.v1.DeleteK8sNodePoolRequest.prototype.setVersion = function(value) {
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
proto.sandboxes.api.v1.DeleteK8sNodePoolResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.DeleteK8sNodePoolResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.DeleteK8sNodePoolResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteK8sNodePoolResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodePool: (f = msg.getNodePool()) && sandboxes_api_v1_resource_pb.Resource.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.DeleteK8sNodePoolResponse}
 */
proto.sandboxes.api.v1.DeleteK8sNodePoolResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.DeleteK8sNodePoolResponse;
  return proto.sandboxes.api.v1.DeleteK8sNodePoolResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.DeleteK8sNodePoolResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.DeleteK8sNodePoolResponse}
 */
proto.sandboxes.api.v1.DeleteK8sNodePoolResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_resource_pb.Resource;
      reader.readMessage(value,sandboxes_api_v1_resource_pb.Resource.deserializeBinaryFromReader);
      msg.setNodePool(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.DeleteK8sNodePoolResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.DeleteK8sNodePoolResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.DeleteK8sNodePoolResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.DeleteK8sNodePoolResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodePool();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_resource_pb.Resource.serializeBinaryToWriter
    );
  }
};


/**
 * optional Resource node_pool = 1;
 * @return {?proto.sandboxes.api.v1.Resource}
 */
proto.sandboxes.api.v1.DeleteK8sNodePoolResponse.prototype.getNodePool = function() {
  return /** @type{?proto.sandboxes.api.v1.Resource} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_resource_pb.Resource, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.Resource|undefined} value
 * @return {!proto.sandboxes.api.v1.DeleteK8sNodePoolResponse} returns this
*/
proto.sandboxes.api.v1.DeleteK8sNodePoolResponse.prototype.setNodePool = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.DeleteK8sNodePoolResponse} returns this
 */
proto.sandboxes.api.v1.DeleteK8sNodePoolResponse.prototype.clearNodePool = function() {
  return this.setNodePool(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.DeleteK8sNodePoolResponse.prototype.hasNodePool = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.NodeMetrics.repeatedFields_ = [5,6,7,8,9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.NodeMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.NodeMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.NodeMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.NodeMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    nodePool: jspb.Message.getFieldWithDefault(msg, 2, ""),
    region: jspb.Message.getFieldWithDefault(msg, 3, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    loadavgList: jspb.Message.toObjectList(msg.getLoadavgList(),
    sandboxes_api_v1_common_pb.TimeSeriesDataPoint.toObject, includeInstance),
    cpuUsageList: jspb.Message.toObjectList(msg.getCpuUsageList(),
    sandboxes_api_v1_common_pb.TimeSeriesDataPoint.toObject, includeInstance),
    memoryUsageList: jspb.Message.toObjectList(msg.getMemoryUsageList(),
    sandboxes_api_v1_common_pb.TimeSeriesDataPoint.toObject, includeInstance),
    swapUsageList: jspb.Message.toObjectList(msg.getSwapUsageList(),
    sandboxes_api_v1_common_pb.TimeSeriesDataPoint.toObject, includeInstance),
    bootDiskUsageList: jspb.Message.toObjectList(msg.getBootDiskUsageList(),
    sandboxes_api_v1_common_pb.TimeSeriesDataPoint.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.NodeMetrics}
 */
proto.sandboxes.api.v1.NodeMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.NodeMetrics;
  return proto.sandboxes.api.v1.NodeMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.NodeMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.NodeMetrics}
 */
proto.sandboxes.api.v1.NodeMetrics.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setNodePool(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    case 4:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 5:
      var value = new sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
      reader.readMessage(value,sandboxes_api_v1_common_pb.TimeSeriesDataPoint.deserializeBinaryFromReader);
      msg.addLoadavg(value);
      break;
    case 6:
      var value = new sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
      reader.readMessage(value,sandboxes_api_v1_common_pb.TimeSeriesDataPoint.deserializeBinaryFromReader);
      msg.addCpuUsage(value);
      break;
    case 7:
      var value = new sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
      reader.readMessage(value,sandboxes_api_v1_common_pb.TimeSeriesDataPoint.deserializeBinaryFromReader);
      msg.addMemoryUsage(value);
      break;
    case 8:
      var value = new sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
      reader.readMessage(value,sandboxes_api_v1_common_pb.TimeSeriesDataPoint.deserializeBinaryFromReader);
      msg.addSwapUsage(value);
      break;
    case 9:
      var value = new sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
      reader.readMessage(value,sandboxes_api_v1_common_pb.TimeSeriesDataPoint.deserializeBinaryFromReader);
      msg.addBootDiskUsage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.NodeMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.NodeMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.NodeMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.NodeMetrics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNodePool();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRegion();
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
  f = message.getLoadavgList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      sandboxes_api_v1_common_pb.TimeSeriesDataPoint.serializeBinaryToWriter
    );
  }
  f = message.getCpuUsageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      sandboxes_api_v1_common_pb.TimeSeriesDataPoint.serializeBinaryToWriter
    );
  }
  f = message.getMemoryUsageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      sandboxes_api_v1_common_pb.TimeSeriesDataPoint.serializeBinaryToWriter
    );
  }
  f = message.getSwapUsageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      sandboxes_api_v1_common_pb.TimeSeriesDataPoint.serializeBinaryToWriter
    );
  }
  f = message.getBootDiskUsageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      sandboxes_api_v1_common_pb.TimeSeriesDataPoint.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.NodeMetrics.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.NodeMetrics} returns this
 */
proto.sandboxes.api.v1.NodeMetrics.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string node_pool = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.NodeMetrics.prototype.getNodePool = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.NodeMetrics} returns this
 */
proto.sandboxes.api.v1.NodeMetrics.prototype.setNodePool = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string region = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.NodeMetrics.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.NodeMetrics} returns this
 */
proto.sandboxes.api.v1.NodeMetrics.prototype.setRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, string> labels = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.sandboxes.api.v1.NodeMetrics.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.NodeMetrics} returns this
 */
proto.sandboxes.api.v1.NodeMetrics.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * repeated TimeSeriesDataPoint loadavg = 5;
 * @return {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>}
 */
proto.sandboxes.api.v1.NodeMetrics.prototype.getLoadavgList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_common_pb.TimeSeriesDataPoint, 5));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} value
 * @return {!proto.sandboxes.api.v1.NodeMetrics} returns this
*/
proto.sandboxes.api.v1.NodeMetrics.prototype.setLoadavgList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.sandboxes.api.v1.TimeSeriesDataPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.TimeSeriesDataPoint}
 */
proto.sandboxes.api.v1.NodeMetrics.prototype.addLoadavg = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.sandboxes.api.v1.TimeSeriesDataPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.NodeMetrics} returns this
 */
proto.sandboxes.api.v1.NodeMetrics.prototype.clearLoadavgList = function() {
  return this.setLoadavgList([]);
};


/**
 * repeated TimeSeriesDataPoint cpu_usage = 6;
 * @return {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>}
 */
proto.sandboxes.api.v1.NodeMetrics.prototype.getCpuUsageList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_common_pb.TimeSeriesDataPoint, 6));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} value
 * @return {!proto.sandboxes.api.v1.NodeMetrics} returns this
*/
proto.sandboxes.api.v1.NodeMetrics.prototype.setCpuUsageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.sandboxes.api.v1.TimeSeriesDataPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.TimeSeriesDataPoint}
 */
proto.sandboxes.api.v1.NodeMetrics.prototype.addCpuUsage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.sandboxes.api.v1.TimeSeriesDataPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.NodeMetrics} returns this
 */
proto.sandboxes.api.v1.NodeMetrics.prototype.clearCpuUsageList = function() {
  return this.setCpuUsageList([]);
};


/**
 * repeated TimeSeriesDataPoint memory_usage = 7;
 * @return {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>}
 */
proto.sandboxes.api.v1.NodeMetrics.prototype.getMemoryUsageList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_common_pb.TimeSeriesDataPoint, 7));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} value
 * @return {!proto.sandboxes.api.v1.NodeMetrics} returns this
*/
proto.sandboxes.api.v1.NodeMetrics.prototype.setMemoryUsageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.sandboxes.api.v1.TimeSeriesDataPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.TimeSeriesDataPoint}
 */
proto.sandboxes.api.v1.NodeMetrics.prototype.addMemoryUsage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.sandboxes.api.v1.TimeSeriesDataPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.NodeMetrics} returns this
 */
proto.sandboxes.api.v1.NodeMetrics.prototype.clearMemoryUsageList = function() {
  return this.setMemoryUsageList([]);
};


/**
 * repeated TimeSeriesDataPoint swap_usage = 8;
 * @return {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>}
 */
proto.sandboxes.api.v1.NodeMetrics.prototype.getSwapUsageList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_common_pb.TimeSeriesDataPoint, 8));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} value
 * @return {!proto.sandboxes.api.v1.NodeMetrics} returns this
*/
proto.sandboxes.api.v1.NodeMetrics.prototype.setSwapUsageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.sandboxes.api.v1.TimeSeriesDataPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.TimeSeriesDataPoint}
 */
proto.sandboxes.api.v1.NodeMetrics.prototype.addSwapUsage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.sandboxes.api.v1.TimeSeriesDataPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.NodeMetrics} returns this
 */
proto.sandboxes.api.v1.NodeMetrics.prototype.clearSwapUsageList = function() {
  return this.setSwapUsageList([]);
};


/**
 * repeated TimeSeriesDataPoint boot_disk_usage = 9;
 * @return {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>}
 */
proto.sandboxes.api.v1.NodeMetrics.prototype.getBootDiskUsageList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_common_pb.TimeSeriesDataPoint, 9));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} value
 * @return {!proto.sandboxes.api.v1.NodeMetrics} returns this
*/
proto.sandboxes.api.v1.NodeMetrics.prototype.setBootDiskUsageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.sandboxes.api.v1.TimeSeriesDataPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.TimeSeriesDataPoint}
 */
proto.sandboxes.api.v1.NodeMetrics.prototype.addBootDiskUsage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.sandboxes.api.v1.TimeSeriesDataPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.NodeMetrics} returns this
 */
proto.sandboxes.api.v1.NodeMetrics.prototype.clearBootDiskUsageList = function() {
  return this.setBootDiskUsageList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.QueryNodeMetricsRequest.repeatedFields_ = [2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.QueryNodeMetricsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.QueryNodeMetricsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.QueryNodeMetricsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.QueryNodeMetricsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    span: (f = msg.getSpan()) && sandboxes_api_v1_common_pb.TimeSeriesSpan.toObject(includeInstance, f),
    filterByNamesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    filterByNodePoolsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    filterByRegionsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    includeCpu: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    includeMemory: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    includeStorage: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.QueryNodeMetricsRequest}
 */
proto.sandboxes.api.v1.QueryNodeMetricsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.QueryNodeMetricsRequest;
  return proto.sandboxes.api.v1.QueryNodeMetricsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.QueryNodeMetricsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.QueryNodeMetricsRequest}
 */
proto.sandboxes.api.v1.QueryNodeMetricsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_common_pb.TimeSeriesSpan;
      reader.readMessage(value,sandboxes_api_v1_common_pb.TimeSeriesSpan.deserializeBinaryFromReader);
      msg.setSpan(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilterByNames(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilterByNodePools(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilterByRegions(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeCpu(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeMemory(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeStorage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.QueryNodeMetricsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.QueryNodeMetricsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.QueryNodeMetricsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.QueryNodeMetricsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpan();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_common_pb.TimeSeriesSpan.serializeBinaryToWriter
    );
  }
  f = message.getFilterByNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getFilterByNodePoolsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getFilterByRegionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getIncludeCpu();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getIncludeMemory();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getIncludeStorage();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional TimeSeriesSpan span = 1;
 * @return {?proto.sandboxes.api.v1.TimeSeriesSpan}
 */
proto.sandboxes.api.v1.QueryNodeMetricsRequest.prototype.getSpan = function() {
  return /** @type{?proto.sandboxes.api.v1.TimeSeriesSpan} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_common_pb.TimeSeriesSpan, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.TimeSeriesSpan|undefined} value
 * @return {!proto.sandboxes.api.v1.QueryNodeMetricsRequest} returns this
*/
proto.sandboxes.api.v1.QueryNodeMetricsRequest.prototype.setSpan = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.QueryNodeMetricsRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodeMetricsRequest.prototype.clearSpan = function() {
  return this.setSpan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.QueryNodeMetricsRequest.prototype.hasSpan = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string filter_by_names = 2;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.QueryNodeMetricsRequest.prototype.getFilterByNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.QueryNodeMetricsRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodeMetricsRequest.prototype.setFilterByNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.QueryNodeMetricsRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodeMetricsRequest.prototype.addFilterByNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.QueryNodeMetricsRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodeMetricsRequest.prototype.clearFilterByNamesList = function() {
  return this.setFilterByNamesList([]);
};


/**
 * repeated string filter_by_node_pools = 3;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.QueryNodeMetricsRequest.prototype.getFilterByNodePoolsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.QueryNodeMetricsRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodeMetricsRequest.prototype.setFilterByNodePoolsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.QueryNodeMetricsRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodeMetricsRequest.prototype.addFilterByNodePools = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.QueryNodeMetricsRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodeMetricsRequest.prototype.clearFilterByNodePoolsList = function() {
  return this.setFilterByNodePoolsList([]);
};


/**
 * repeated string filter_by_regions = 4;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.QueryNodeMetricsRequest.prototype.getFilterByRegionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.QueryNodeMetricsRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodeMetricsRequest.prototype.setFilterByRegionsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.QueryNodeMetricsRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodeMetricsRequest.prototype.addFilterByRegions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.QueryNodeMetricsRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodeMetricsRequest.prototype.clearFilterByRegionsList = function() {
  return this.setFilterByRegionsList([]);
};


/**
 * optional bool include_cpu = 5;
 * @return {boolean}
 */
proto.sandboxes.api.v1.QueryNodeMetricsRequest.prototype.getIncludeCpu = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.QueryNodeMetricsRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodeMetricsRequest.prototype.setIncludeCpu = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool include_memory = 6;
 * @return {boolean}
 */
proto.sandboxes.api.v1.QueryNodeMetricsRequest.prototype.getIncludeMemory = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.QueryNodeMetricsRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodeMetricsRequest.prototype.setIncludeMemory = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool include_storage = 7;
 * @return {boolean}
 */
proto.sandboxes.api.v1.QueryNodeMetricsRequest.prototype.getIncludeStorage = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.QueryNodeMetricsRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodeMetricsRequest.prototype.setIncludeStorage = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.QueryNodeMetricsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.QueryNodeMetricsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.QueryNodeMetricsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.QueryNodeMetricsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.QueryNodeMetricsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodesList: jspb.Message.toObjectList(msg.getNodesList(),
    proto.sandboxes.api.v1.NodeMetrics.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.QueryNodeMetricsResponse}
 */
proto.sandboxes.api.v1.QueryNodeMetricsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.QueryNodeMetricsResponse;
  return proto.sandboxes.api.v1.QueryNodeMetricsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.QueryNodeMetricsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.QueryNodeMetricsResponse}
 */
proto.sandboxes.api.v1.QueryNodeMetricsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.NodeMetrics;
      reader.readMessage(value,proto.sandboxes.api.v1.NodeMetrics.deserializeBinaryFromReader);
      msg.addNodes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.QueryNodeMetricsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.QueryNodeMetricsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.QueryNodeMetricsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.QueryNodeMetricsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sandboxes.api.v1.NodeMetrics.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NodeMetrics nodes = 1;
 * @return {!Array<!proto.sandboxes.api.v1.NodeMetrics>}
 */
proto.sandboxes.api.v1.QueryNodeMetricsResponse.prototype.getNodesList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.NodeMetrics>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.NodeMetrics, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.NodeMetrics>} value
 * @return {!proto.sandboxes.api.v1.QueryNodeMetricsResponse} returns this
*/
proto.sandboxes.api.v1.QueryNodeMetricsResponse.prototype.setNodesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sandboxes.api.v1.NodeMetrics=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.NodeMetrics}
 */
proto.sandboxes.api.v1.QueryNodeMetricsResponse.prototype.addNodes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sandboxes.api.v1.NodeMetrics, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.QueryNodeMetricsResponse} returns this
 */
proto.sandboxes.api.v1.QueryNodeMetricsResponse.prototype.clearNodesList = function() {
  return this.setNodesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.NodePoolMetrics.repeatedFields_ = [4,5,6,7,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.NodePoolMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.NodePoolMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.NodePoolMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.NodePoolMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    region: jspb.Message.getFieldWithDefault(msg, 2, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    nodeCountList: jspb.Message.toObjectList(msg.getNodeCountList(),
    sandboxes_api_v1_common_pb.TimeSeriesDataPoint.toObject, includeInstance),
    cpuUsageAvgList: jspb.Message.toObjectList(msg.getCpuUsageAvgList(),
    sandboxes_api_v1_common_pb.TimeSeriesDataPoint.toObject, includeInstance),
    cpuUsageMaxList: jspb.Message.toObjectList(msg.getCpuUsageMaxList(),
    sandboxes_api_v1_common_pb.TimeSeriesDataPoint.toObject, includeInstance),
    memoryUsageAvgList: jspb.Message.toObjectList(msg.getMemoryUsageAvgList(),
    sandboxes_api_v1_common_pb.TimeSeriesDataPoint.toObject, includeInstance),
    memoryUsageMaxList: jspb.Message.toObjectList(msg.getMemoryUsageMaxList(),
    sandboxes_api_v1_common_pb.TimeSeriesDataPoint.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.NodePoolMetrics}
 */
proto.sandboxes.api.v1.NodePoolMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.NodePoolMetrics;
  return proto.sandboxes.api.v1.NodePoolMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.NodePoolMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.NodePoolMetrics}
 */
proto.sandboxes.api.v1.NodePoolMetrics.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setRegion(value);
      break;
    case 3:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 4:
      var value = new sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
      reader.readMessage(value,sandboxes_api_v1_common_pb.TimeSeriesDataPoint.deserializeBinaryFromReader);
      msg.addNodeCount(value);
      break;
    case 5:
      var value = new sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
      reader.readMessage(value,sandboxes_api_v1_common_pb.TimeSeriesDataPoint.deserializeBinaryFromReader);
      msg.addCpuUsageAvg(value);
      break;
    case 6:
      var value = new sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
      reader.readMessage(value,sandboxes_api_v1_common_pb.TimeSeriesDataPoint.deserializeBinaryFromReader);
      msg.addCpuUsageMax(value);
      break;
    case 7:
      var value = new sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
      reader.readMessage(value,sandboxes_api_v1_common_pb.TimeSeriesDataPoint.deserializeBinaryFromReader);
      msg.addMemoryUsageAvg(value);
      break;
    case 8:
      var value = new sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
      reader.readMessage(value,sandboxes_api_v1_common_pb.TimeSeriesDataPoint.deserializeBinaryFromReader);
      msg.addMemoryUsageMax(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.NodePoolMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.NodePoolMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.NodePoolMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.NodePoolMetrics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRegion();
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
  f = message.getNodeCountList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      sandboxes_api_v1_common_pb.TimeSeriesDataPoint.serializeBinaryToWriter
    );
  }
  f = message.getCpuUsageAvgList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      sandboxes_api_v1_common_pb.TimeSeriesDataPoint.serializeBinaryToWriter
    );
  }
  f = message.getCpuUsageMaxList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      sandboxes_api_v1_common_pb.TimeSeriesDataPoint.serializeBinaryToWriter
    );
  }
  f = message.getMemoryUsageAvgList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      sandboxes_api_v1_common_pb.TimeSeriesDataPoint.serializeBinaryToWriter
    );
  }
  f = message.getMemoryUsageMaxList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      sandboxes_api_v1_common_pb.TimeSeriesDataPoint.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.NodePoolMetrics.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.NodePoolMetrics} returns this
 */
proto.sandboxes.api.v1.NodePoolMetrics.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string region = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.NodePoolMetrics.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.NodePoolMetrics} returns this
 */
proto.sandboxes.api.v1.NodePoolMetrics.prototype.setRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, string> labels = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.sandboxes.api.v1.NodePoolMetrics.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.NodePoolMetrics} returns this
 */
proto.sandboxes.api.v1.NodePoolMetrics.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * repeated TimeSeriesDataPoint node_count = 4;
 * @return {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>}
 */
proto.sandboxes.api.v1.NodePoolMetrics.prototype.getNodeCountList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_common_pb.TimeSeriesDataPoint, 4));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} value
 * @return {!proto.sandboxes.api.v1.NodePoolMetrics} returns this
*/
proto.sandboxes.api.v1.NodePoolMetrics.prototype.setNodeCountList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.sandboxes.api.v1.TimeSeriesDataPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.TimeSeriesDataPoint}
 */
proto.sandboxes.api.v1.NodePoolMetrics.prototype.addNodeCount = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.sandboxes.api.v1.TimeSeriesDataPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.NodePoolMetrics} returns this
 */
proto.sandboxes.api.v1.NodePoolMetrics.prototype.clearNodeCountList = function() {
  return this.setNodeCountList([]);
};


/**
 * repeated TimeSeriesDataPoint cpu_usage_avg = 5;
 * @return {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>}
 */
proto.sandboxes.api.v1.NodePoolMetrics.prototype.getCpuUsageAvgList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_common_pb.TimeSeriesDataPoint, 5));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} value
 * @return {!proto.sandboxes.api.v1.NodePoolMetrics} returns this
*/
proto.sandboxes.api.v1.NodePoolMetrics.prototype.setCpuUsageAvgList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.sandboxes.api.v1.TimeSeriesDataPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.TimeSeriesDataPoint}
 */
proto.sandboxes.api.v1.NodePoolMetrics.prototype.addCpuUsageAvg = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.sandboxes.api.v1.TimeSeriesDataPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.NodePoolMetrics} returns this
 */
proto.sandboxes.api.v1.NodePoolMetrics.prototype.clearCpuUsageAvgList = function() {
  return this.setCpuUsageAvgList([]);
};


/**
 * repeated TimeSeriesDataPoint cpu_usage_max = 6;
 * @return {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>}
 */
proto.sandboxes.api.v1.NodePoolMetrics.prototype.getCpuUsageMaxList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_common_pb.TimeSeriesDataPoint, 6));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} value
 * @return {!proto.sandboxes.api.v1.NodePoolMetrics} returns this
*/
proto.sandboxes.api.v1.NodePoolMetrics.prototype.setCpuUsageMaxList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.sandboxes.api.v1.TimeSeriesDataPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.TimeSeriesDataPoint}
 */
proto.sandboxes.api.v1.NodePoolMetrics.prototype.addCpuUsageMax = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.sandboxes.api.v1.TimeSeriesDataPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.NodePoolMetrics} returns this
 */
proto.sandboxes.api.v1.NodePoolMetrics.prototype.clearCpuUsageMaxList = function() {
  return this.setCpuUsageMaxList([]);
};


/**
 * repeated TimeSeriesDataPoint memory_usage_avg = 7;
 * @return {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>}
 */
proto.sandboxes.api.v1.NodePoolMetrics.prototype.getMemoryUsageAvgList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_common_pb.TimeSeriesDataPoint, 7));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} value
 * @return {!proto.sandboxes.api.v1.NodePoolMetrics} returns this
*/
proto.sandboxes.api.v1.NodePoolMetrics.prototype.setMemoryUsageAvgList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.sandboxes.api.v1.TimeSeriesDataPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.TimeSeriesDataPoint}
 */
proto.sandboxes.api.v1.NodePoolMetrics.prototype.addMemoryUsageAvg = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.sandboxes.api.v1.TimeSeriesDataPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.NodePoolMetrics} returns this
 */
proto.sandboxes.api.v1.NodePoolMetrics.prototype.clearMemoryUsageAvgList = function() {
  return this.setMemoryUsageAvgList([]);
};


/**
 * repeated TimeSeriesDataPoint memory_usage_max = 8;
 * @return {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>}
 */
proto.sandboxes.api.v1.NodePoolMetrics.prototype.getMemoryUsageMaxList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_common_pb.TimeSeriesDataPoint, 8));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} value
 * @return {!proto.sandboxes.api.v1.NodePoolMetrics} returns this
*/
proto.sandboxes.api.v1.NodePoolMetrics.prototype.setMemoryUsageMaxList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.sandboxes.api.v1.TimeSeriesDataPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.TimeSeriesDataPoint}
 */
proto.sandboxes.api.v1.NodePoolMetrics.prototype.addMemoryUsageMax = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.sandboxes.api.v1.TimeSeriesDataPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.NodePoolMetrics} returns this
 */
proto.sandboxes.api.v1.NodePoolMetrics.prototype.clearMemoryUsageMaxList = function() {
  return this.setMemoryUsageMaxList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.QueryNodePoolMetricsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    span: (f = msg.getSpan()) && sandboxes_api_v1_common_pb.TimeSeriesSpan.toObject(includeInstance, f),
    filterByNamesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    filterByRegionsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    includeNodeCount: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    includeCpu: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    includeMemory: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.QueryNodePoolMetricsRequest}
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.QueryNodePoolMetricsRequest;
  return proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.QueryNodePoolMetricsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.QueryNodePoolMetricsRequest}
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_common_pb.TimeSeriesSpan;
      reader.readMessage(value,sandboxes_api_v1_common_pb.TimeSeriesSpan.deserializeBinaryFromReader);
      msg.setSpan(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilterByNames(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilterByRegions(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeNodeCount(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeCpu(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeMemory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.QueryNodePoolMetricsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpan();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_common_pb.TimeSeriesSpan.serializeBinaryToWriter
    );
  }
  f = message.getFilterByNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getFilterByRegionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getIncludeNodeCount();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getIncludeCpu();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getIncludeMemory();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional TimeSeriesSpan span = 1;
 * @return {?proto.sandboxes.api.v1.TimeSeriesSpan}
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.prototype.getSpan = function() {
  return /** @type{?proto.sandboxes.api.v1.TimeSeriesSpan} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_common_pb.TimeSeriesSpan, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.TimeSeriesSpan|undefined} value
 * @return {!proto.sandboxes.api.v1.QueryNodePoolMetricsRequest} returns this
*/
proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.prototype.setSpan = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.QueryNodePoolMetricsRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.prototype.clearSpan = function() {
  return this.setSpan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.prototype.hasSpan = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string filter_by_names = 2;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.prototype.getFilterByNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.QueryNodePoolMetricsRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.prototype.setFilterByNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.QueryNodePoolMetricsRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.prototype.addFilterByNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.QueryNodePoolMetricsRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.prototype.clearFilterByNamesList = function() {
  return this.setFilterByNamesList([]);
};


/**
 * repeated string filter_by_regions = 3;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.prototype.getFilterByRegionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.QueryNodePoolMetricsRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.prototype.setFilterByRegionsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.QueryNodePoolMetricsRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.prototype.addFilterByRegions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.QueryNodePoolMetricsRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.prototype.clearFilterByRegionsList = function() {
  return this.setFilterByRegionsList([]);
};


/**
 * optional bool include_node_count = 4;
 * @return {boolean}
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.prototype.getIncludeNodeCount = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.QueryNodePoolMetricsRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.prototype.setIncludeNodeCount = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool include_cpu = 5;
 * @return {boolean}
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.prototype.getIncludeCpu = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.QueryNodePoolMetricsRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.prototype.setIncludeCpu = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool include_memory = 6;
 * @return {boolean}
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.prototype.getIncludeMemory = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.QueryNodePoolMetricsRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsRequest.prototype.setIncludeMemory = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.QueryNodePoolMetricsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.QueryNodePoolMetricsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodePoolsList: jspb.Message.toObjectList(msg.getNodePoolsList(),
    proto.sandboxes.api.v1.NodePoolMetrics.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.QueryNodePoolMetricsResponse}
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.QueryNodePoolMetricsResponse;
  return proto.sandboxes.api.v1.QueryNodePoolMetricsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.QueryNodePoolMetricsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.QueryNodePoolMetricsResponse}
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.NodePoolMetrics;
      reader.readMessage(value,proto.sandboxes.api.v1.NodePoolMetrics.deserializeBinaryFromReader);
      msg.addNodePools(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.QueryNodePoolMetricsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.QueryNodePoolMetricsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodePoolsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sandboxes.api.v1.NodePoolMetrics.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NodePoolMetrics node_pools = 1;
 * @return {!Array<!proto.sandboxes.api.v1.NodePoolMetrics>}
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsResponse.prototype.getNodePoolsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.NodePoolMetrics>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.NodePoolMetrics, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.NodePoolMetrics>} value
 * @return {!proto.sandboxes.api.v1.QueryNodePoolMetricsResponse} returns this
*/
proto.sandboxes.api.v1.QueryNodePoolMetricsResponse.prototype.setNodePoolsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sandboxes.api.v1.NodePoolMetrics=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.NodePoolMetrics}
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsResponse.prototype.addNodePools = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sandboxes.api.v1.NodePoolMetrics, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.QueryNodePoolMetricsResponse} returns this
 */
proto.sandboxes.api.v1.QueryNodePoolMetricsResponse.prototype.clearNodePoolsList = function() {
  return this.setNodePoolsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.WorkloadMetrics.repeatedFields_ = [6,7,8,9,10,11,12,13,14,15,16,17];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.WorkloadMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.WorkloadMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
    org: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sandbox: jspb.Message.getFieldWithDefault(msg, 2, ""),
    workload: jspb.Message.getFieldWithDefault(msg, 3, ""),
    region: jspb.Message.getFieldWithDefault(msg, 4, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    cpuUsageList: jspb.Message.toObjectList(msg.getCpuUsageList(),
    sandboxes_api_v1_common_pb.TimeSeriesDataPoint.toObject, includeInstance),
    memoryCapMbList: jspb.Message.toObjectList(msg.getMemoryCapMbList(),
    sandboxes_api_v1_common_pb.TimeSeriesDataPoint.toObject, includeInstance),
    memoryUsedMbList: jspb.Message.toObjectList(msg.getMemoryUsedMbList(),
    sandboxes_api_v1_common_pb.TimeSeriesDataPoint.toObject, includeInstance),
    memoryUsageList: jspb.Message.toObjectList(msg.getMemoryUsageList(),
    sandboxes_api_v1_common_pb.TimeSeriesDataPoint.toObject, includeInstance),
    swapUsedMbList: jspb.Message.toObjectList(msg.getSwapUsedMbList(),
    sandboxes_api_v1_common_pb.TimeSeriesDataPoint.toObject, includeInstance),
    swapUsageHostList: jspb.Message.toObjectList(msg.getSwapUsageHostList(),
    sandboxes_api_v1_common_pb.TimeSeriesDataPoint.toObject, includeInstance),
    storageBlocksTotalList: jspb.Message.toObjectList(msg.getStorageBlocksTotalList(),
    sandboxes_api_v1_common_pb.TimeSeriesDataPoint.toObject, includeInstance),
    storageBlocksUsedList: jspb.Message.toObjectList(msg.getStorageBlocksUsedList(),
    sandboxes_api_v1_common_pb.TimeSeriesDataPoint.toObject, includeInstance),
    storageBlocksUsageList: jspb.Message.toObjectList(msg.getStorageBlocksUsageList(),
    sandboxes_api_v1_common_pb.TimeSeriesDataPoint.toObject, includeInstance),
    storageInodesTotalList: jspb.Message.toObjectList(msg.getStorageInodesTotalList(),
    sandboxes_api_v1_common_pb.TimeSeriesDataPoint.toObject, includeInstance),
    storageInodesUsedList: jspb.Message.toObjectList(msg.getStorageInodesUsedList(),
    sandboxes_api_v1_common_pb.TimeSeriesDataPoint.toObject, includeInstance),
    storageInodesUsageList: jspb.Message.toObjectList(msg.getStorageInodesUsageList(),
    sandboxes_api_v1_common_pb.TimeSeriesDataPoint.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics}
 */
proto.sandboxes.api.v1.WorkloadMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.WorkloadMetrics;
  return proto.sandboxes.api.v1.WorkloadMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.WorkloadMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics}
 */
proto.sandboxes.api.v1.WorkloadMetrics.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSandbox(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkload(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    case 5:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 6:
      var value = new sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
      reader.readMessage(value,sandboxes_api_v1_common_pb.TimeSeriesDataPoint.deserializeBinaryFromReader);
      msg.addCpuUsage(value);
      break;
    case 7:
      var value = new sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
      reader.readMessage(value,sandboxes_api_v1_common_pb.TimeSeriesDataPoint.deserializeBinaryFromReader);
      msg.addMemoryCapMb(value);
      break;
    case 8:
      var value = new sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
      reader.readMessage(value,sandboxes_api_v1_common_pb.TimeSeriesDataPoint.deserializeBinaryFromReader);
      msg.addMemoryUsedMb(value);
      break;
    case 9:
      var value = new sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
      reader.readMessage(value,sandboxes_api_v1_common_pb.TimeSeriesDataPoint.deserializeBinaryFromReader);
      msg.addMemoryUsage(value);
      break;
    case 10:
      var value = new sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
      reader.readMessage(value,sandboxes_api_v1_common_pb.TimeSeriesDataPoint.deserializeBinaryFromReader);
      msg.addSwapUsedMb(value);
      break;
    case 11:
      var value = new sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
      reader.readMessage(value,sandboxes_api_v1_common_pb.TimeSeriesDataPoint.deserializeBinaryFromReader);
      msg.addSwapUsageHost(value);
      break;
    case 12:
      var value = new sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
      reader.readMessage(value,sandboxes_api_v1_common_pb.TimeSeriesDataPoint.deserializeBinaryFromReader);
      msg.addStorageBlocksTotal(value);
      break;
    case 13:
      var value = new sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
      reader.readMessage(value,sandboxes_api_v1_common_pb.TimeSeriesDataPoint.deserializeBinaryFromReader);
      msg.addStorageBlocksUsed(value);
      break;
    case 14:
      var value = new sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
      reader.readMessage(value,sandboxes_api_v1_common_pb.TimeSeriesDataPoint.deserializeBinaryFromReader);
      msg.addStorageBlocksUsage(value);
      break;
    case 15:
      var value = new sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
      reader.readMessage(value,sandboxes_api_v1_common_pb.TimeSeriesDataPoint.deserializeBinaryFromReader);
      msg.addStorageInodesTotal(value);
      break;
    case 16:
      var value = new sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
      reader.readMessage(value,sandboxes_api_v1_common_pb.TimeSeriesDataPoint.deserializeBinaryFromReader);
      msg.addStorageInodesUsed(value);
      break;
    case 17:
      var value = new sandboxes_api_v1_common_pb.TimeSeriesDataPoint;
      reader.readMessage(value,sandboxes_api_v1_common_pb.TimeSeriesDataPoint.deserializeBinaryFromReader);
      msg.addStorageInodesUsage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.WorkloadMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.WorkloadMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.WorkloadMetrics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSandbox();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWorkload();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRegion();
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
  f = message.getCpuUsageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      sandboxes_api_v1_common_pb.TimeSeriesDataPoint.serializeBinaryToWriter
    );
  }
  f = message.getMemoryCapMbList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      sandboxes_api_v1_common_pb.TimeSeriesDataPoint.serializeBinaryToWriter
    );
  }
  f = message.getMemoryUsedMbList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      sandboxes_api_v1_common_pb.TimeSeriesDataPoint.serializeBinaryToWriter
    );
  }
  f = message.getMemoryUsageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      sandboxes_api_v1_common_pb.TimeSeriesDataPoint.serializeBinaryToWriter
    );
  }
  f = message.getSwapUsedMbList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      sandboxes_api_v1_common_pb.TimeSeriesDataPoint.serializeBinaryToWriter
    );
  }
  f = message.getSwapUsageHostList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      sandboxes_api_v1_common_pb.TimeSeriesDataPoint.serializeBinaryToWriter
    );
  }
  f = message.getStorageBlocksTotalList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      sandboxes_api_v1_common_pb.TimeSeriesDataPoint.serializeBinaryToWriter
    );
  }
  f = message.getStorageBlocksUsedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      sandboxes_api_v1_common_pb.TimeSeriesDataPoint.serializeBinaryToWriter
    );
  }
  f = message.getStorageBlocksUsageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      sandboxes_api_v1_common_pb.TimeSeriesDataPoint.serializeBinaryToWriter
    );
  }
  f = message.getStorageInodesTotalList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      sandboxes_api_v1_common_pb.TimeSeriesDataPoint.serializeBinaryToWriter
    );
  }
  f = message.getStorageInodesUsedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      16,
      f,
      sandboxes_api_v1_common_pb.TimeSeriesDataPoint.serializeBinaryToWriter
    );
  }
  f = message.getStorageInodesUsageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      17,
      f,
      sandboxes_api_v1_common_pb.TimeSeriesDataPoint.serializeBinaryToWriter
    );
  }
};


/**
 * optional string org = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.getOrg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics} returns this
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.setOrg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string sandbox = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.getSandbox = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics} returns this
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.setSandbox = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string workload = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.getWorkload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics} returns this
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.setWorkload = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string region = 4;
 * @return {string}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics} returns this
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.setRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * map<string, string> labels = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics} returns this
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * repeated TimeSeriesDataPoint cpu_usage = 6;
 * @return {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.getCpuUsageList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_common_pb.TimeSeriesDataPoint, 6));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} value
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics} returns this
*/
proto.sandboxes.api.v1.WorkloadMetrics.prototype.setCpuUsageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.sandboxes.api.v1.TimeSeriesDataPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.TimeSeriesDataPoint}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.addCpuUsage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.sandboxes.api.v1.TimeSeriesDataPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics} returns this
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.clearCpuUsageList = function() {
  return this.setCpuUsageList([]);
};


/**
 * repeated TimeSeriesDataPoint memory_cap_mb = 7;
 * @return {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.getMemoryCapMbList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_common_pb.TimeSeriesDataPoint, 7));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} value
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics} returns this
*/
proto.sandboxes.api.v1.WorkloadMetrics.prototype.setMemoryCapMbList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.sandboxes.api.v1.TimeSeriesDataPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.TimeSeriesDataPoint}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.addMemoryCapMb = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.sandboxes.api.v1.TimeSeriesDataPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics} returns this
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.clearMemoryCapMbList = function() {
  return this.setMemoryCapMbList([]);
};


/**
 * repeated TimeSeriesDataPoint memory_used_mb = 8;
 * @return {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.getMemoryUsedMbList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_common_pb.TimeSeriesDataPoint, 8));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} value
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics} returns this
*/
proto.sandboxes.api.v1.WorkloadMetrics.prototype.setMemoryUsedMbList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.sandboxes.api.v1.TimeSeriesDataPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.TimeSeriesDataPoint}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.addMemoryUsedMb = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.sandboxes.api.v1.TimeSeriesDataPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics} returns this
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.clearMemoryUsedMbList = function() {
  return this.setMemoryUsedMbList([]);
};


/**
 * repeated TimeSeriesDataPoint memory_usage = 9;
 * @return {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.getMemoryUsageList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_common_pb.TimeSeriesDataPoint, 9));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} value
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics} returns this
*/
proto.sandboxes.api.v1.WorkloadMetrics.prototype.setMemoryUsageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.sandboxes.api.v1.TimeSeriesDataPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.TimeSeriesDataPoint}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.addMemoryUsage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.sandboxes.api.v1.TimeSeriesDataPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics} returns this
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.clearMemoryUsageList = function() {
  return this.setMemoryUsageList([]);
};


/**
 * repeated TimeSeriesDataPoint swap_used_mb = 10;
 * @return {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.getSwapUsedMbList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_common_pb.TimeSeriesDataPoint, 10));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} value
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics} returns this
*/
proto.sandboxes.api.v1.WorkloadMetrics.prototype.setSwapUsedMbList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.sandboxes.api.v1.TimeSeriesDataPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.TimeSeriesDataPoint}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.addSwapUsedMb = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.sandboxes.api.v1.TimeSeriesDataPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics} returns this
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.clearSwapUsedMbList = function() {
  return this.setSwapUsedMbList([]);
};


/**
 * repeated TimeSeriesDataPoint swap_usage_host = 11;
 * @return {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.getSwapUsageHostList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_common_pb.TimeSeriesDataPoint, 11));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} value
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics} returns this
*/
proto.sandboxes.api.v1.WorkloadMetrics.prototype.setSwapUsageHostList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.sandboxes.api.v1.TimeSeriesDataPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.TimeSeriesDataPoint}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.addSwapUsageHost = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.sandboxes.api.v1.TimeSeriesDataPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics} returns this
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.clearSwapUsageHostList = function() {
  return this.setSwapUsageHostList([]);
};


/**
 * repeated TimeSeriesDataPoint storage_blocks_total = 12;
 * @return {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.getStorageBlocksTotalList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_common_pb.TimeSeriesDataPoint, 12));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} value
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics} returns this
*/
proto.sandboxes.api.v1.WorkloadMetrics.prototype.setStorageBlocksTotalList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.sandboxes.api.v1.TimeSeriesDataPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.TimeSeriesDataPoint}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.addStorageBlocksTotal = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.sandboxes.api.v1.TimeSeriesDataPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics} returns this
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.clearStorageBlocksTotalList = function() {
  return this.setStorageBlocksTotalList([]);
};


/**
 * repeated TimeSeriesDataPoint storage_blocks_used = 13;
 * @return {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.getStorageBlocksUsedList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_common_pb.TimeSeriesDataPoint, 13));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} value
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics} returns this
*/
proto.sandboxes.api.v1.WorkloadMetrics.prototype.setStorageBlocksUsedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.sandboxes.api.v1.TimeSeriesDataPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.TimeSeriesDataPoint}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.addStorageBlocksUsed = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.sandboxes.api.v1.TimeSeriesDataPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics} returns this
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.clearStorageBlocksUsedList = function() {
  return this.setStorageBlocksUsedList([]);
};


/**
 * repeated TimeSeriesDataPoint storage_blocks_usage = 14;
 * @return {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.getStorageBlocksUsageList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_common_pb.TimeSeriesDataPoint, 14));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} value
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics} returns this
*/
proto.sandboxes.api.v1.WorkloadMetrics.prototype.setStorageBlocksUsageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.sandboxes.api.v1.TimeSeriesDataPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.TimeSeriesDataPoint}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.addStorageBlocksUsage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.sandboxes.api.v1.TimeSeriesDataPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics} returns this
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.clearStorageBlocksUsageList = function() {
  return this.setStorageBlocksUsageList([]);
};


/**
 * repeated TimeSeriesDataPoint storage_inodes_total = 15;
 * @return {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.getStorageInodesTotalList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_common_pb.TimeSeriesDataPoint, 15));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} value
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics} returns this
*/
proto.sandboxes.api.v1.WorkloadMetrics.prototype.setStorageInodesTotalList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.sandboxes.api.v1.TimeSeriesDataPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.TimeSeriesDataPoint}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.addStorageInodesTotal = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.sandboxes.api.v1.TimeSeriesDataPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics} returns this
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.clearStorageInodesTotalList = function() {
  return this.setStorageInodesTotalList([]);
};


/**
 * repeated TimeSeriesDataPoint storage_inodes_used = 16;
 * @return {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.getStorageInodesUsedList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_common_pb.TimeSeriesDataPoint, 16));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} value
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics} returns this
*/
proto.sandboxes.api.v1.WorkloadMetrics.prototype.setStorageInodesUsedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 16, value);
};


/**
 * @param {!proto.sandboxes.api.v1.TimeSeriesDataPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.TimeSeriesDataPoint}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.addStorageInodesUsed = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 16, opt_value, proto.sandboxes.api.v1.TimeSeriesDataPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics} returns this
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.clearStorageInodesUsedList = function() {
  return this.setStorageInodesUsedList([]);
};


/**
 * repeated TimeSeriesDataPoint storage_inodes_usage = 17;
 * @return {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.getStorageInodesUsageList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, sandboxes_api_v1_common_pb.TimeSeriesDataPoint, 17));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.TimeSeriesDataPoint>} value
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics} returns this
*/
proto.sandboxes.api.v1.WorkloadMetrics.prototype.setStorageInodesUsageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 17, value);
};


/**
 * @param {!proto.sandboxes.api.v1.TimeSeriesDataPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.TimeSeriesDataPoint}
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.addStorageInodesUsage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 17, opt_value, proto.sandboxes.api.v1.TimeSeriesDataPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics} returns this
 */
proto.sandboxes.api.v1.WorkloadMetrics.prototype.clearStorageInodesUsageList = function() {
  return this.setStorageInodesUsageList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.QueryWorkloadMetricsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    span: (f = msg.getSpan()) && sandboxes_api_v1_common_pb.TimeSeriesSpan.toObject(includeInstance, f),
    workloadsList: jspb.Message.toObjectList(msg.getWorkloadsList(),
    proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter.toObject, includeInstance),
    includeCpu: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    includeMemory: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    includeStorage: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.QueryWorkloadMetricsRequest}
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.QueryWorkloadMetricsRequest;
  return proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.QueryWorkloadMetricsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.QueryWorkloadMetricsRequest}
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sandboxes_api_v1_common_pb.TimeSeriesSpan;
      reader.readMessage(value,sandboxes_api_v1_common_pb.TimeSeriesSpan.deserializeBinaryFromReader);
      msg.setSpan(value);
      break;
    case 2:
      var value = new proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter;
      reader.readMessage(value,proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter.deserializeBinaryFromReader);
      msg.addWorkloads(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeCpu(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeMemory(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeStorage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.QueryWorkloadMetricsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpan();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sandboxes_api_v1_common_pb.TimeSeriesSpan.serializeBinaryToWriter
    );
  }
  f = message.getWorkloadsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter.serializeBinaryToWriter
    );
  }
  f = message.getIncludeCpu();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getIncludeMemory();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getIncludeStorage();
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
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    region: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sandboxId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    workload: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter}
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter;
  return proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter}
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSandboxId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
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
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRegion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSandboxId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWorkload();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string region = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter} returns this
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter.prototype.setRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter} returns this
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sandbox_id = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter.prototype.getSandboxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter} returns this
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter.prototype.setSandboxId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string workload = 4;
 * @return {string}
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter.prototype.getWorkload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter} returns this
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter.prototype.setWorkload = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional TimeSeriesSpan span = 1;
 * @return {?proto.sandboxes.api.v1.TimeSeriesSpan}
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.prototype.getSpan = function() {
  return /** @type{?proto.sandboxes.api.v1.TimeSeriesSpan} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_common_pb.TimeSeriesSpan, 1));
};


/**
 * @param {?proto.sandboxes.api.v1.TimeSeriesSpan|undefined} value
 * @return {!proto.sandboxes.api.v1.QueryWorkloadMetricsRequest} returns this
*/
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.prototype.setSpan = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.QueryWorkloadMetricsRequest} returns this
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.prototype.clearSpan = function() {
  return this.setSpan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.prototype.hasSpan = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated WorkloadFilter workloads = 2;
 * @return {!Array<!proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter>}
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.prototype.getWorkloadsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter, 2));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter>} value
 * @return {!proto.sandboxes.api.v1.QueryWorkloadMetricsRequest} returns this
*/
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.prototype.setWorkloadsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter}
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.prototype.addWorkloads = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.WorkloadFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.QueryWorkloadMetricsRequest} returns this
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.prototype.clearWorkloadsList = function() {
  return this.setWorkloadsList([]);
};


/**
 * optional bool include_cpu = 3;
 * @return {boolean}
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.prototype.getIncludeCpu = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.QueryWorkloadMetricsRequest} returns this
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.prototype.setIncludeCpu = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool include_memory = 4;
 * @return {boolean}
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.prototype.getIncludeMemory = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.QueryWorkloadMetricsRequest} returns this
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.prototype.setIncludeMemory = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool include_storage = 5;
 * @return {boolean}
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.prototype.getIncludeStorage = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.QueryWorkloadMetricsRequest} returns this
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsRequest.prototype.setIncludeStorage = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.QueryWorkloadMetricsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.QueryWorkloadMetricsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    workloadsList: jspb.Message.toObjectList(msg.getWorkloadsList(),
    proto.sandboxes.api.v1.WorkloadMetrics.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.QueryWorkloadMetricsResponse}
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.QueryWorkloadMetricsResponse;
  return proto.sandboxes.api.v1.QueryWorkloadMetricsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.QueryWorkloadMetricsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.QueryWorkloadMetricsResponse}
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.WorkloadMetrics;
      reader.readMessage(value,proto.sandboxes.api.v1.WorkloadMetrics.deserializeBinaryFromReader);
      msg.addWorkloads(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.QueryWorkloadMetricsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.QueryWorkloadMetricsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkloadsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sandboxes.api.v1.WorkloadMetrics.serializeBinaryToWriter
    );
  }
};


/**
 * repeated WorkloadMetrics workloads = 1;
 * @return {!Array<!proto.sandboxes.api.v1.WorkloadMetrics>}
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsResponse.prototype.getWorkloadsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.WorkloadMetrics>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.WorkloadMetrics, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.WorkloadMetrics>} value
 * @return {!proto.sandboxes.api.v1.QueryWorkloadMetricsResponse} returns this
*/
proto.sandboxes.api.v1.QueryWorkloadMetricsResponse.prototype.setWorkloadsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sandboxes.api.v1.WorkloadMetrics=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.WorkloadMetrics}
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsResponse.prototype.addWorkloads = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sandboxes.api.v1.WorkloadMetrics, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.QueryWorkloadMetricsResponse} returns this
 */
proto.sandboxes.api.v1.QueryWorkloadMetricsResponse.prototype.clearWorkloadsList = function() {
  return this.setWorkloadsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.NodeStatus.repeatedFields_ = [18];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.NodeStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.NodeStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.NodeStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.NodeStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    nodePool: jspb.Message.getFieldWithDefault(msg, 2, ""),
    region: jspb.Message.getFieldWithDefault(msg, 3, ""),
    status: (f = msg.getStatus()) && sandboxes_api_v1_common_pb.RuntimeStatus.toObject(includeInstance, f),
    cpuCores: jspb.Message.getFieldWithDefault(msg, 5, 0),
    loadavg: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    cpuUsage: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    memoryTotalMb: jspb.Message.getFieldWithDefault(msg, 8, 0),
    memoryUsedMb: jspb.Message.getFieldWithDefault(msg, 9, 0),
    memoryCapacityMb: jspb.Message.getFieldWithDefault(msg, 10, 0),
    bufferCacheMb: jspb.Message.getFieldWithDefault(msg, 11, 0),
    swapTotalGb: jspb.Message.getFieldWithDefault(msg, 12, 0),
    swapUsedGb: jspb.Message.getFieldWithDefault(msg, 13, 0),
    bootDiskSizeGb: jspb.Message.getFieldWithDefault(msg, 14, 0),
    bootDiskUsedGb: jspb.Message.getFieldWithDefault(msg, 15, 0),
    workloadsLimit: jspb.Message.getFieldWithDefault(msg, 16, 0),
    volumesLimit: jspb.Message.getFieldWithDefault(msg, 17, 0),
    workloadsList: jspb.Message.toObjectList(msg.getWorkloadsList(),
    proto.sandboxes.api.v1.NodeStatus.Workload.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.NodeStatus}
 */
proto.sandboxes.api.v1.NodeStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.NodeStatus;
  return proto.sandboxes.api.v1.NodeStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.NodeStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.NodeStatus}
 */
proto.sandboxes.api.v1.NodeStatus.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setNodePool(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    case 4:
      var value = new sandboxes_api_v1_common_pb.RuntimeStatus;
      reader.readMessage(value,sandboxes_api_v1_common_pb.RuntimeStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCpuCores(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLoadavg(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCpuUsage(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMemoryTotalMb(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMemoryUsedMb(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMemoryCapacityMb(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBufferCacheMb(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSwapTotalGb(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSwapUsedGb(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBootDiskSizeGb(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBootDiskUsedGb(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWorkloadsLimit(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVolumesLimit(value);
      break;
    case 18:
      var value = new proto.sandboxes.api.v1.NodeStatus.Workload;
      reader.readMessage(value,proto.sandboxes.api.v1.NodeStatus.Workload.deserializeBinaryFromReader);
      msg.addWorkloads(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.NodeStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.NodeStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.NodeStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.NodeStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNodePool();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRegion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      sandboxes_api_v1_common_pb.RuntimeStatus.serializeBinaryToWriter
    );
  }
  f = message.getCpuCores();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getLoadavg();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getCpuUsage();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getMemoryTotalMb();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getMemoryUsedMb();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getMemoryCapacityMb();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getBufferCacheMb();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getSwapTotalGb();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getSwapUsedGb();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getBootDiskSizeGb();
  if (f !== 0) {
    writer.writeInt64(
      14,
      f
    );
  }
  f = message.getBootDiskUsedGb();
  if (f !== 0) {
    writer.writeInt64(
      15,
      f
    );
  }
  f = message.getWorkloadsLimit();
  if (f !== 0) {
    writer.writeInt32(
      16,
      f
    );
  }
  f = message.getVolumesLimit();
  if (f !== 0) {
    writer.writeInt32(
      17,
      f
    );
  }
  f = message.getWorkloadsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      18,
      f,
      proto.sandboxes.api.v1.NodeStatus.Workload.serializeBinaryToWriter
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
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.NodeStatus.Workload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.NodeStatus.Workload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.NodeStatus.Workload.toObject = function(includeInstance, msg) {
  var f, obj = {
    org: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sandboxId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sandboxName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    pid: jspb.Message.getFieldWithDefault(msg, 5, 0),
    operationalState: (f = msg.getOperationalState()) && sandboxes_api_v1_sandbox_pb.Sandbox.OperationalState.toObject(includeInstance, f),
    cpuUsage: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    memoryCapMb: jspb.Message.getFieldWithDefault(msg, 8, 0),
    memoryUsedMb: jspb.Message.getFieldWithDefault(msg, 9, 0),
    swapUsedMb: jspb.Message.getFieldWithDefault(msg, 10, 0),
    storageCapacityGb: jspb.Message.getFieldWithDefault(msg, 11, 0),
    storageUsedGb: jspb.Message.getFieldWithDefault(msg, 12, 0),
    storageInodesUsage: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.NodeStatus.Workload}
 */
proto.sandboxes.api.v1.NodeStatus.Workload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.NodeStatus.Workload;
  return proto.sandboxes.api.v1.NodeStatus.Workload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.NodeStatus.Workload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.NodeStatus.Workload}
 */
proto.sandboxes.api.v1.NodeStatus.Workload.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSandboxId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSandboxName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPid(value);
      break;
    case 6:
      var value = new sandboxes_api_v1_sandbox_pb.Sandbox.OperationalState;
      reader.readMessage(value,sandboxes_api_v1_sandbox_pb.Sandbox.OperationalState.deserializeBinaryFromReader);
      msg.setOperationalState(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCpuUsage(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMemoryCapMb(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMemoryUsedMb(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSwapUsedMb(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStorageCapacityGb(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStorageUsedGb(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setStorageInodesUsage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.NodeStatus.Workload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.NodeStatus.Workload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.NodeStatus.Workload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSandboxId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSandboxName();
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
  f = message.getPid();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getOperationalState();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      sandboxes_api_v1_sandbox_pb.Sandbox.OperationalState.serializeBinaryToWriter
    );
  }
  f = message.getCpuUsage();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getMemoryCapMb();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getMemoryUsedMb();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getSwapUsedMb();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getStorageCapacityGb();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getStorageUsedGb();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getStorageInodesUsage();
  if (f !== 0.0) {
    writer.writeFloat(
      13,
      f
    );
  }
};


/**
 * optional string org = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.getOrg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.NodeStatus.Workload} returns this
 */
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.setOrg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string sandbox_id = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.getSandboxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.NodeStatus.Workload} returns this
 */
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.setSandboxId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sandbox_name = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.getSandboxName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.NodeStatus.Workload} returns this
 */
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.setSandboxName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.NodeStatus.Workload} returns this
 */
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 pid = 5;
 * @return {number}
 */
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.NodeStatus.Workload} returns this
 */
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.setPid = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional Sandbox.OperationalState operational_state = 6;
 * @return {?proto.sandboxes.api.v1.Sandbox.OperationalState}
 */
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.getOperationalState = function() {
  return /** @type{?proto.sandboxes.api.v1.Sandbox.OperationalState} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_sandbox_pb.Sandbox.OperationalState, 6));
};


/**
 * @param {?proto.sandboxes.api.v1.Sandbox.OperationalState|undefined} value
 * @return {!proto.sandboxes.api.v1.NodeStatus.Workload} returns this
*/
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.setOperationalState = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.NodeStatus.Workload} returns this
 */
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.clearOperationalState = function() {
  return this.setOperationalState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.hasOperationalState = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional float cpu_usage = 7;
 * @return {number}
 */
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.getCpuUsage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.NodeStatus.Workload} returns this
 */
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.setCpuUsage = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional int64 memory_cap_mb = 8;
 * @return {number}
 */
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.getMemoryCapMb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.NodeStatus.Workload} returns this
 */
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.setMemoryCapMb = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 memory_used_mb = 9;
 * @return {number}
 */
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.getMemoryUsedMb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.NodeStatus.Workload} returns this
 */
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.setMemoryUsedMb = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 swap_used_mb = 10;
 * @return {number}
 */
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.getSwapUsedMb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.NodeStatus.Workload} returns this
 */
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.setSwapUsedMb = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 storage_capacity_gb = 11;
 * @return {number}
 */
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.getStorageCapacityGb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.NodeStatus.Workload} returns this
 */
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.setStorageCapacityGb = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 storage_used_gb = 12;
 * @return {number}
 */
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.getStorageUsedGb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.NodeStatus.Workload} returns this
 */
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.setStorageUsedGb = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional float storage_inodes_usage = 13;
 * @return {number}
 */
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.getStorageInodesUsage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.NodeStatus.Workload} returns this
 */
proto.sandboxes.api.v1.NodeStatus.Workload.prototype.setStorageInodesUsage = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sandboxes.api.v1.NodeStatus.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.NodeStatus} returns this
 */
proto.sandboxes.api.v1.NodeStatus.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string node_pool = 2;
 * @return {string}
 */
proto.sandboxes.api.v1.NodeStatus.prototype.getNodePool = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.NodeStatus} returns this
 */
proto.sandboxes.api.v1.NodeStatus.prototype.setNodePool = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string region = 3;
 * @return {string}
 */
proto.sandboxes.api.v1.NodeStatus.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sandboxes.api.v1.NodeStatus} returns this
 */
proto.sandboxes.api.v1.NodeStatus.prototype.setRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional RuntimeStatus status = 4;
 * @return {?proto.sandboxes.api.v1.RuntimeStatus}
 */
proto.sandboxes.api.v1.NodeStatus.prototype.getStatus = function() {
  return /** @type{?proto.sandboxes.api.v1.RuntimeStatus} */ (
    jspb.Message.getWrapperField(this, sandboxes_api_v1_common_pb.RuntimeStatus, 4));
};


/**
 * @param {?proto.sandboxes.api.v1.RuntimeStatus|undefined} value
 * @return {!proto.sandboxes.api.v1.NodeStatus} returns this
*/
proto.sandboxes.api.v1.NodeStatus.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sandboxes.api.v1.NodeStatus} returns this
 */
proto.sandboxes.api.v1.NodeStatus.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sandboxes.api.v1.NodeStatus.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 cpu_cores = 5;
 * @return {number}
 */
proto.sandboxes.api.v1.NodeStatus.prototype.getCpuCores = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.NodeStatus} returns this
 */
proto.sandboxes.api.v1.NodeStatus.prototype.setCpuCores = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional float loadavg = 6;
 * @return {number}
 */
proto.sandboxes.api.v1.NodeStatus.prototype.getLoadavg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.NodeStatus} returns this
 */
proto.sandboxes.api.v1.NodeStatus.prototype.setLoadavg = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional float cpu_usage = 7;
 * @return {number}
 */
proto.sandboxes.api.v1.NodeStatus.prototype.getCpuUsage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.NodeStatus} returns this
 */
proto.sandboxes.api.v1.NodeStatus.prototype.setCpuUsage = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional int64 memory_total_mb = 8;
 * @return {number}
 */
proto.sandboxes.api.v1.NodeStatus.prototype.getMemoryTotalMb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.NodeStatus} returns this
 */
proto.sandboxes.api.v1.NodeStatus.prototype.setMemoryTotalMb = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 memory_used_mb = 9;
 * @return {number}
 */
proto.sandboxes.api.v1.NodeStatus.prototype.getMemoryUsedMb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.NodeStatus} returns this
 */
proto.sandboxes.api.v1.NodeStatus.prototype.setMemoryUsedMb = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 memory_capacity_mb = 10;
 * @return {number}
 */
proto.sandboxes.api.v1.NodeStatus.prototype.getMemoryCapacityMb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.NodeStatus} returns this
 */
proto.sandboxes.api.v1.NodeStatus.prototype.setMemoryCapacityMb = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 buffer_cache_mb = 11;
 * @return {number}
 */
proto.sandboxes.api.v1.NodeStatus.prototype.getBufferCacheMb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.NodeStatus} returns this
 */
proto.sandboxes.api.v1.NodeStatus.prototype.setBufferCacheMb = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 swap_total_gb = 12;
 * @return {number}
 */
proto.sandboxes.api.v1.NodeStatus.prototype.getSwapTotalGb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.NodeStatus} returns this
 */
proto.sandboxes.api.v1.NodeStatus.prototype.setSwapTotalGb = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int64 swap_used_gb = 13;
 * @return {number}
 */
proto.sandboxes.api.v1.NodeStatus.prototype.getSwapUsedGb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.NodeStatus} returns this
 */
proto.sandboxes.api.v1.NodeStatus.prototype.setSwapUsedGb = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int64 boot_disk_size_gb = 14;
 * @return {number}
 */
proto.sandboxes.api.v1.NodeStatus.prototype.getBootDiskSizeGb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.NodeStatus} returns this
 */
proto.sandboxes.api.v1.NodeStatus.prototype.setBootDiskSizeGb = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional int64 boot_disk_used_gb = 15;
 * @return {number}
 */
proto.sandboxes.api.v1.NodeStatus.prototype.getBootDiskUsedGb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.NodeStatus} returns this
 */
proto.sandboxes.api.v1.NodeStatus.prototype.setBootDiskUsedGb = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional int32 workloads_limit = 16;
 * @return {number}
 */
proto.sandboxes.api.v1.NodeStatus.prototype.getWorkloadsLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.NodeStatus} returns this
 */
proto.sandboxes.api.v1.NodeStatus.prototype.setWorkloadsLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional int32 volumes_limit = 17;
 * @return {number}
 */
proto.sandboxes.api.v1.NodeStatus.prototype.getVolumesLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.sandboxes.api.v1.NodeStatus} returns this
 */
proto.sandboxes.api.v1.NodeStatus.prototype.setVolumesLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * repeated Workload workloads = 18;
 * @return {!Array<!proto.sandboxes.api.v1.NodeStatus.Workload>}
 */
proto.sandboxes.api.v1.NodeStatus.prototype.getWorkloadsList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.NodeStatus.Workload>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.NodeStatus.Workload, 18));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.NodeStatus.Workload>} value
 * @return {!proto.sandboxes.api.v1.NodeStatus} returns this
*/
proto.sandboxes.api.v1.NodeStatus.prototype.setWorkloadsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 18, value);
};


/**
 * @param {!proto.sandboxes.api.v1.NodeStatus.Workload=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.NodeStatus.Workload}
 */
proto.sandboxes.api.v1.NodeStatus.prototype.addWorkloads = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 18, opt_value, proto.sandboxes.api.v1.NodeStatus.Workload, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.NodeStatus} returns this
 */
proto.sandboxes.api.v1.NodeStatus.prototype.clearWorkloadsList = function() {
  return this.setWorkloadsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.QueryNodeStatusRequest.repeatedFields_ = [1,2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.QueryNodeStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.QueryNodeStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.QueryNodeStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.QueryNodeStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filterByNamesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    filterByNodePoolsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    filterByRegionsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    includeWorkloads: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.QueryNodeStatusRequest}
 */
proto.sandboxes.api.v1.QueryNodeStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.QueryNodeStatusRequest;
  return proto.sandboxes.api.v1.QueryNodeStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.QueryNodeStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.QueryNodeStatusRequest}
 */
proto.sandboxes.api.v1.QueryNodeStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilterByNames(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilterByNodePools(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilterByRegions(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeWorkloads(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.QueryNodeStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.QueryNodeStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.QueryNodeStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.QueryNodeStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilterByNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getFilterByNodePoolsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getFilterByRegionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getIncludeWorkloads();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * repeated string filter_by_names = 1;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.QueryNodeStatusRequest.prototype.getFilterByNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.QueryNodeStatusRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodeStatusRequest.prototype.setFilterByNamesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.QueryNodeStatusRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodeStatusRequest.prototype.addFilterByNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.QueryNodeStatusRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodeStatusRequest.prototype.clearFilterByNamesList = function() {
  return this.setFilterByNamesList([]);
};


/**
 * repeated string filter_by_node_pools = 2;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.QueryNodeStatusRequest.prototype.getFilterByNodePoolsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.QueryNodeStatusRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodeStatusRequest.prototype.setFilterByNodePoolsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.QueryNodeStatusRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodeStatusRequest.prototype.addFilterByNodePools = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.QueryNodeStatusRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodeStatusRequest.prototype.clearFilterByNodePoolsList = function() {
  return this.setFilterByNodePoolsList([]);
};


/**
 * repeated string filter_by_regions = 3;
 * @return {!Array<string>}
 */
proto.sandboxes.api.v1.QueryNodeStatusRequest.prototype.getFilterByRegionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sandboxes.api.v1.QueryNodeStatusRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodeStatusRequest.prototype.setFilterByRegionsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.QueryNodeStatusRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodeStatusRequest.prototype.addFilterByRegions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.QueryNodeStatusRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodeStatusRequest.prototype.clearFilterByRegionsList = function() {
  return this.setFilterByRegionsList([]);
};


/**
 * optional bool include_workloads = 4;
 * @return {boolean}
 */
proto.sandboxes.api.v1.QueryNodeStatusRequest.prototype.getIncludeWorkloads = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sandboxes.api.v1.QueryNodeStatusRequest} returns this
 */
proto.sandboxes.api.v1.QueryNodeStatusRequest.prototype.setIncludeWorkloads = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sandboxes.api.v1.QueryNodeStatusResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sandboxes.api.v1.QueryNodeStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sandboxes.api.v1.QueryNodeStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sandboxes.api.v1.QueryNodeStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.QueryNodeStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodesList: jspb.Message.toObjectList(msg.getNodesList(),
    proto.sandboxes.api.v1.NodeStatus.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sandboxes.api.v1.QueryNodeStatusResponse}
 */
proto.sandboxes.api.v1.QueryNodeStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sandboxes.api.v1.QueryNodeStatusResponse;
  return proto.sandboxes.api.v1.QueryNodeStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sandboxes.api.v1.QueryNodeStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sandboxes.api.v1.QueryNodeStatusResponse}
 */
proto.sandboxes.api.v1.QueryNodeStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sandboxes.api.v1.NodeStatus;
      reader.readMessage(value,proto.sandboxes.api.v1.NodeStatus.deserializeBinaryFromReader);
      msg.addNodes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sandboxes.api.v1.QueryNodeStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sandboxes.api.v1.QueryNodeStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sandboxes.api.v1.QueryNodeStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sandboxes.api.v1.QueryNodeStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sandboxes.api.v1.NodeStatus.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NodeStatus nodes = 1;
 * @return {!Array<!proto.sandboxes.api.v1.NodeStatus>}
 */
proto.sandboxes.api.v1.QueryNodeStatusResponse.prototype.getNodesList = function() {
  return /** @type{!Array<!proto.sandboxes.api.v1.NodeStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sandboxes.api.v1.NodeStatus, 1));
};


/**
 * @param {!Array<!proto.sandboxes.api.v1.NodeStatus>} value
 * @return {!proto.sandboxes.api.v1.QueryNodeStatusResponse} returns this
*/
proto.sandboxes.api.v1.QueryNodeStatusResponse.prototype.setNodesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sandboxes.api.v1.NodeStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sandboxes.api.v1.NodeStatus}
 */
proto.sandboxes.api.v1.QueryNodeStatusResponse.prototype.addNodes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sandboxes.api.v1.NodeStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sandboxes.api.v1.QueryNodeStatusResponse} returns this
 */
proto.sandboxes.api.v1.QueryNodeStatusResponse.prototype.clearNodesList = function() {
  return this.setNodesList([]);
};


goog.object.extend(exports, proto.sandboxes.api.v1);
