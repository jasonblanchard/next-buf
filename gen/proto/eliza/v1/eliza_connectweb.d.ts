// @generated by protoc-gen-connect-web v0.8.4
// @generated from file proto/eliza/v1/eliza.proto (package proto.eliza.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { IntroduceRequest, IntroduceResponse, SayRequest, SayResponse } from "./eliza_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service proto.eliza.v1.ElizaService
 */
export declare const ElizaService: {
  readonly typeName: "proto.eliza.v1.ElizaService",
  readonly methods: {
    /**
     * @generated from rpc proto.eliza.v1.ElizaService.Say
     */
    readonly say: {
      readonly name: "Say",
      readonly I: typeof SayRequest,
      readonly O: typeof SayResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc proto.eliza.v1.ElizaService.Introduce
     */
    readonly introduce: {
      readonly name: "Introduce",
      readonly I: typeof IntroduceRequest,
      readonly O: typeof IntroduceResponse,
      readonly kind: MethodKind.ServerStreaming,
    },
  }
};
