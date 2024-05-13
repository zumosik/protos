/**
 * @fileoverview gRPC-Web generated client stub for message
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.19.1
// source: proto/messages/messages.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.message = require('./messages_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.message.ChatServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.message.ChatServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.message.Message,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ChatService_SendMessage = new grpc.web.MethodDescriptor(
  '/message.ChatService/SendMessage',
  grpc.web.MethodType.UNARY,
  proto.message.Message,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.message.Message} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.message.Message} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.message.ChatServiceClient.prototype.sendMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/message.ChatService/SendMessage',
      request,
      metadata || {},
      methodDescriptor_ChatService_SendMessage,
      callback);
};


/**
 * @param {!proto.message.Message} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.message.ChatServicePromiseClient.prototype.sendMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/message.ChatService/SendMessage',
      request,
      metadata || {},
      methodDescriptor_ChatService_SendMessage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.message.Message>}
 */
const methodDescriptor_ChatService_GetMessages = new grpc.web.MethodDescriptor(
  '/message.ChatService/GetMessages',
  grpc.web.MethodType.SERVER_STREAMING,
  google_protobuf_empty_pb.Empty,
  proto.message.Message,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.message.Message.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.message.Message>}
 *     The XHR Node Readable Stream
 */
proto.message.ChatServiceClient.prototype.getMessages =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/message.ChatService/GetMessages',
      request,
      metadata || {},
      methodDescriptor_ChatService_GetMessages);
};


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.message.Message>}
 *     The XHR Node Readable Stream
 */
proto.message.ChatServicePromiseClient.prototype.getMessages =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/message.ChatService/GetMessages',
      request,
      metadata || {},
      methodDescriptor_ChatService_GetMessages);
};


module.exports = proto.message;

