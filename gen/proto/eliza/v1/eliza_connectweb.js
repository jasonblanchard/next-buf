// @generated by protoc-gen-connect-web v0.8.4
// @generated from file proto/eliza/v1/eliza.proto (package proto.eliza.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { SayRequest, SayResponse } from "./eliza_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service proto.eliza.v1.ElizaService
 */
export const ElizaService = {
  typeName: "proto.eliza.v1.ElizaService",
  methods: {
    /**
     * @generated from rpc proto.eliza.v1.ElizaService.Say
     */
    say: {
      name: "Say",
      I: SayRequest,
      O: SayResponse,
      kind: MethodKind.Unary,
    },
  }
};

