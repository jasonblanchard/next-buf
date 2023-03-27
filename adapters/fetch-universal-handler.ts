// Copyright 2021-2023 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {
  UniversalHandler,
  UniversalServerRequest,
  UniversalServerResponse,
} from "@bufbuild/connect/protocol";

/**
 * FetchHandler is equivalent to a UniversalHandler. It takes a fetch Request
 * and returns a promise of a fetch Response. It has the same metadata
 * properties "requestPath" etc. that UniversalHandler has.
 */
export type FetchHandler = ((req: Request) => Promise<Response>) &
  Omit<UniversalHandler, "">;

/**
 * Convert a universal handler to a fetch handler - a function that takes a
 * fetch Request and returns a promise of a fetch Response.
 */
export function createFetchHandler(uHandler: UniversalHandler): FetchHandler {
  async function handleFetch(req: Request) {
    const uReq = universalServerRequestToFetch(req);
    const uRes = await uHandler(uReq);
    return universalServerResponseToFetch(uRes);
  }
  return Object.assign(handleFetch, uHandler);
}

function universalServerRequestToFetch(req: Request): UniversalServerRequest {
  const url = new URL(req.url);
  return {
    httpVersion: "1.1",
    method: req.method,
    url,
    header: req.headers,
    body: fetchBodyToByteStream(req.body),
  };
}

function universalServerResponseToFetch(
  res: UniversalServerResponse
): Response {
  let body: ReadableStream<Uint8Array> | Uint8Array | null = null;
  if (res.body instanceof Uint8Array) {
    body = res.body;
  } else if (res.body !== undefined) {
    const it = res.body[Symbol.asyncIterator]();
    body = new ReadableStream<Uint8Array>(<UnderlyingSource<Uint8Array>>{
      async pull(controller: ReadableByteStreamController) {
        const r = await it.next();
        if (r.done) {
          controller.close();
          return;
        }
        await controller.enqueue(r.value);
      },
    });
  }
  return new Response(body, {
    status: res.status,
    headers: res.header,
  });
}

async function* fetchBodyToByteStream(
  body: Request["body"]
): AsyncIterable<Uint8Array> {
  if (body === null) {
    return;
  }
  const reader = body.getReader();
  for (;;) {
    const r = await reader.read();
    if (r.done) {
      break;
    }
    yield r.value;
  }
}
