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

    async *introduce(req) {
      await asyncWait(1000);
      yield { sentence: `I see you said ${req.greeting}` };
      await asyncWait(1000);
      yield { sentence: "Hello. I am blarg." };
      await asyncWait(1000);
      yield { sentence: "It is nice to meet you" };
    },
  });
};

function asyncWait(durationMs: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, durationMs);
  });
}
