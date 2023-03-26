// @generated by protoc-gen-es v1.1.1
// @generated from file proto/eliza/v1/eliza.proto (package proto.eliza.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message proto.eliza.v1.SayRequest
 */
export const SayRequest = proto3.makeMessageType(
  "proto.eliza.v1.SayRequest",
  () => [
    { no: 1, name: "sentence", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message proto.eliza.v1.SayResponse
 */
export const SayResponse = proto3.makeMessageType(
  "proto.eliza.v1.SayResponse",
  () => [
    { no: 1, name: "sentence", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message proto.eliza.v1.IntroduceRequest
 */
export const IntroduceRequest = proto3.makeMessageType(
  "proto.eliza.v1.IntroduceRequest",
  () => [
    { no: 1, name: "greeting", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message proto.eliza.v1.IntroduceResponse
 */
export const IntroduceResponse = proto3.makeMessageType(
  "proto.eliza.v1.IntroduceResponse",
  () => [
    { no: 1, name: "sentence", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);
