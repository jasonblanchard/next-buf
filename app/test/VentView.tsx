"use client";

import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { TransportProvider } from "@bufbuild/connect-query";
import { createConnectTransport } from "@bufbuild/connect-web";
import { say } from "@/gen/proto/eliza/v1/eliza-ElizaService_connectquery";

const queryClient = new QueryClient();

export default function VentView() {
  const transport = createConnectTransport({
    baseUrl: "/api",
  });

  return (
    <TransportProvider transport={transport}>
      <QueryClientProvider client={queryClient}>
        <Content />
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
