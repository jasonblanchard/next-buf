import {
  ConnectRouter,
  ConnectRouterOptions,
  createConnectRouter,
} from "@bufbuild/connect";
import type { UniversalHandler } from "@bufbuild/connect/protocol";
import { createFetchHandler, FetchHandler } from "./fetch-universal-handler";

interface NextJs13ApiRouterOptions extends ConnectRouterOptions {
  /**
   * Route definitions. We recommend the following pattern:
   *
   * Create a file `connect.ts` with a default export such as this:
   *
   * ```ts
   * import {ConnectRouter} from "@bufbuild/connect";
   *
   * export default (router: ConnectRouter) => {
   *   router.service(ElizaService, {});
   * }
   * ```
   *
   * Then pass this function here.
   */
  routes: (router: ConnectRouter) => void;
  prefix?: string;
}

type NextApiRouteHandler = (req: Request) => Promise<Response>;

interface ApiRoute {
  POST: FetchHandler | NextApiRouteHandler;
}

export function next13JsApiRouter(options: NextJs13ApiRouterOptions): ApiRoute {
  const router = createConnectRouter(options);
  options.routes(router);
  const prefix = options.prefix ?? "/api";
  const paths = new Map<string, UniversalHandler>();
  for (const uHandler of router.handlers) {
    paths.set(prefix + uHandler.requestPath, uHandler);
  }

  async function POST(req: Request) {
    const requestPath = new URL(req.url).pathname;
    const uHandler = paths.get(requestPath);
    if (!uHandler) {
      return new Response(null, { status: 404 });
    }
    const fetchHandler = createFetchHandler(uHandler);

    return await fetchHandler(req);
  }

  return {
    POST,
  };
}

// function universalRequestFromFetchRequest(
//   fetchRequest: Request
// ): UniversalServerRequest {
//   const bodyStream = fetchRequest.body || new ReadableStream();

//   return {
//     httpVersion: "1.1", // TODO: Fix
//     method: fetchRequest.method,
//     url: new URL(fetchRequest.url),
//     header: fetchRequest.headers,
//     body: asyncIterableFromFetchRequestBody(bodyStream),
//   };
// }

// async function universalResponseToFetchResponse(
//   universalResponse: UniversalServerResponse
// ): Promise<Response> {
//   let body: ReadableStream<Uint8Array> | null = null;

//   if (universalResponse.body) {
//     body = new ReadableStream({
//       start(controller) {
//         async function push() {
//           if (!universalResponse.body) {
//             controller.close();
//             return;
//           }

//           for await (const chunk of universalResponse.body) {
//             if (Array.isArray(chunk)) {
//               controller.enqueue(chunk as Uint8Array);
//               return;
//             }

//             controller.enqueue(new Uint8Array(chunk as number));

//             controller.close();
//           }
//         }

//         push();
//       },
//     });
//   }

//   const headers = universalResponse.header || new Headers();

//   const response = new Response(body, {
//     status: universalResponse.status,
//     headers,
//   });

//   return response;
// }

// async function* asyncIterableFromFetchRequestBody(
//   body: ReadableStream<Uint8Array>
// ): AsyncIterable<Uint8Array> {
//   // Get a lock on the stream
//   const reader = body.getReader();

//   try {
//     while (true) {
//       // Read from the stream
//       const { done, value } = await reader.read();
//       // Exit if we're done
//       if (done) return;
//       // Else yield the chunk
//       yield value;
//     }
//   } finally {
//     reader.releaseLock();
//   }
// }
