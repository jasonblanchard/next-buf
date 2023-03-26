import { ConnectRouter } from "@bufbuild/connect";
import { ElizaService } from "@/gen/proto/eliza/v1/eliza_connectweb";
import { SayResponse } from "@/gen/proto/eliza/v1/eliza_pb";

export default (router: ConnectRouter) => {
  router.service(ElizaService, {
    async say(req) {
      return new SayResponse({
        sentence: req.sentence,
      });
    },
  });
};
