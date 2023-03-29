import { next13JsApiRouter } from "@/adapters/connect-nextjs13-adapter";
import routes from "@/connect"; // connect router with a service implementation

// export const runtime = "experimental-edge";

const { POST } = next13JsApiRouter({
  routes,
  prefix: "/api/appservice",
});

export { POST };
