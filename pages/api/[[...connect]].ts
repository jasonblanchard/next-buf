import { nextJsApiRouter } from "@bufbuild/connect-next";
import routes from "./connect";

// TODO check out cors middle ware https://github.com/vercel/next.js/blob/canary/examples/api-routes-cors/pages/api/cors.ts

// export const config = {
//   runtime: "edge",
// };

const { handler, config: routerConfig } = nextJsApiRouter({
  routes,
});

// config.runtime = "edge";
export const config = {
  ...routerConfig,
  runtime: 'edge',
}

export { handler as default };
