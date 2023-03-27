import { next13JsApiRouter } from "@/adapters/connect-nextjs13-adapter";
import routes from "@/connect";

export const runtime = "experimental-edge";

const { POST } = next13JsApiRouter({
  routes,
  prefix: "/api/app",
});

export { POST };
