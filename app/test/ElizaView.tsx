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
import { IntroduceRequest } from "@/gen/proto/eliza/v1/eliza_pb";

const queryClient = new QueryClient();

export default function ElizaView() {
  const transport = createConnectTransport({
    baseUrl: "/api",
  });

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
  const transport = createConnectTransport({
    baseUrl: "/api",
  });
  const bufClient = createPromiseClient(ElizaService, transport);
  const [messages, setMessages] = useState<{ sentence: string }[]>([]);

  useEffect(() => {
    async function dorun() {
      for await (const res of bufClient.introduce({ greeting: "Why, hello" })) {
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