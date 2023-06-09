// @generated by protoc-gen-es v1.1.1
// @generated from file proto/eliza/v1/eliza.proto (package proto.eliza.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message proto.eliza.v1.SayRequest
 */
export declare class SayRequest extends Message<SayRequest> {
  /**
   * @generated from field: string sentence = 1;
   */
  sentence: string;

  constructor(data?: PartialMessage<SayRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.eliza.v1.SayRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SayRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SayRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SayRequest;

  static equals(a: SayRequest | PlainMessage<SayRequest> | undefined, b: SayRequest | PlainMessage<SayRequest> | undefined): boolean;
}

/**
 * @generated from message proto.eliza.v1.SayResponse
 */
export declare class SayResponse extends Message<SayResponse> {
  /**
   * @generated from field: string sentence = 1;
   */
  sentence: string;

  constructor(data?: PartialMessage<SayResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.eliza.v1.SayResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SayResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SayResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SayResponse;

  static equals(a: SayResponse | PlainMessage<SayResponse> | undefined, b: SayResponse | PlainMessage<SayResponse> | undefined): boolean;
}

/**
 * @generated from message proto.eliza.v1.IntroduceRequest
 */
export declare class IntroduceRequest extends Message<IntroduceRequest> {
  /**
   * @generated from field: string greeting = 1;
   */
  greeting: string;

  constructor(data?: PartialMessage<IntroduceRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.eliza.v1.IntroduceRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IntroduceRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IntroduceRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IntroduceRequest;

  static equals(a: IntroduceRequest | PlainMessage<IntroduceRequest> | undefined, b: IntroduceRequest | PlainMessage<IntroduceRequest> | undefined): boolean;
}

/**
 * @generated from message proto.eliza.v1.IntroduceResponse
 */
export declare class IntroduceResponse extends Message<IntroduceResponse> {
  /**
   * @generated from field: string sentence = 1;
   */
  sentence: string;

  constructor(data?: PartialMessage<IntroduceResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.eliza.v1.IntroduceResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IntroduceResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IntroduceResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IntroduceResponse;

  static equals(a: IntroduceResponse | PlainMessage<IntroduceResponse> | undefined, b: IntroduceResponse | PlainMessage<IntroduceResponse> | undefined): boolean;
}

