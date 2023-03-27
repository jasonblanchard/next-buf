import { next13JsApiRouter } from "@/adapters/connect-nextjs13-adapter";
import routes from "@/connect";

// TODO check out cors middle ware https://github.com/vercel/next.js/blob/canary/examples/api-routes-cors/pages/api/cors.ts

export const config = {
  runtime: "edge",
};

const { POST: handler } = next13JsApiRouter({
  routes,
  prefix: "/api/app",
});

export { handler as default };
