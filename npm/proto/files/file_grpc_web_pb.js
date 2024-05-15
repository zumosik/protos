/**
 * @fileoverview gRPC-Web generated client stub for file
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.19.1
// source: proto/files/file.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.file = require('./file_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.file.FileServiceClient =
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
proto.file.FileServicePromiseClient =
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
 *   !proto.file.FileId,
 *   !proto.file.FileChunk>}
 */
const methodDescriptor_FileService_GetFile = new grpc.web.MethodDescriptor(
  '/file.FileService/GetFile',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.file.FileId,
  proto.file.FileChunk,
  /**
   * @param {!proto.file.FileId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.file.FileChunk.deserializeBinary
);


/**
 * @param {!proto.file.FileId} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.file.FileChunk>}
 *     The XHR Node Readable Stream
 */
proto.file.FileServiceClient.prototype.getFile =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/file.FileService/GetFile',
      request,
      metadata || {},
      methodDescriptor_FileService_GetFile);
};


/**
 * @param {!proto.file.FileId} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.file.FileChunk>}
 *     The XHR Node Readable Stream
 */
proto.file.FileServicePromiseClient.prototype.getFile =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/file.FileService/GetFile',
      request,
      metadata || {},
      methodDescriptor_FileService_GetFile);
};


module.exports = proto.file;

