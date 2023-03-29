"use client";

import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { TransportProvider } from "@bufbuild/connect-query";
import { createConnectTransport } from "@bufbuild/connect-web";
import { say } from "@/gen/proto/eliza/v1/eliza-ElizaService_connectquery";
import { createPromiseClient } from "@bufbuild/connect";
import { ElizaService } from "@/gen/proto/eliza/v1/eliza_connectweb";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();
const transport = createConnectTransport({
  baseUrl: "/api/pageservice",
});

export default function ElizaView() {
  return (
    <TransportProvider transport={transport}>
      <QueryClientProvider client={queryClient}>
        <Content />
        <Introduce />
      </QueryClientProvider>
    </TransportProvider>
  );
}

function Content() {
  const { isLoading, isError, data } = useQuery(
    say.useQuery({ sentence: "Hello, gRPC" })
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      <div>{data.sentence}</div>
    </div>
  );
}

function Introduce() {
  const bufClient = createPromiseClient(ElizaService, transport);
  const [messages, setMessages] = useState<{ sentence: string }[]>([]);

  useEffect(() => {
    async function dorun() {
      const stream = bufClient.introduce({ greeting: "Why, hello" });
      for await (const res of stream) {
        setMessages((messages) => [...messages, res]);
      }
    }

    dorun();
  }, []);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>Error</div>;
  // }

  return (
    <div>
      {messages.map((message, i) => {
        return <div key={i}>{message.sentence}</div>;
      })}
    </div>
  );
}
