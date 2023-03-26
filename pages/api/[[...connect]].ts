import { nextJsApiRouter } from "@bufbuild/connect-next";
import routes from "./connect";

// TODO check out cors middle ware https://github.com/vercel/next.js/blob/canary/examples/api-routes-cors/pages/api/cors.ts

const { handler, config } = nextJsApiRouter({
  routes,
});

export { handler as default, config };
