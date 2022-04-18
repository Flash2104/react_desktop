async function ipcRequest(op: { type: 'query' | 'mutation' | 'subscription'; input: unknown; path: string }): Promise<TRPCResponse> {
  return window.ariNote.rpc(op);
}

const customLink: TRPCLink<AppRouter> = (runtime) => {
  return ({ op, prev, onDestroy }) => {
    console.log('Sending IPC request', op);
    const promise = ipcRequest(op);
    let isDone = false;
    const prevOnce: typeof prev = (result) => {
      if (isDone) {
        return;
      }
      isDone = true;
      prev(result);
    };
    onDestroy(() => {
      prevOnce(TRPCClientError.from(new TRPCAbortError(), { isDone: true }));
    });
    promise
      .then((envelope) => {
        const response = transformRPCResponse({ envelope, runtime });
        console.log('Got IPC response', response);
        prevOnce(response);
      })
      .catch((cause) => {
        console.error('Got IPC error', cause);
        prevOnce(TRPCClientError.from(cause));
      });
  };
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity
    }
  }
});

const trpcClient = trpc.createClient({
  links: [customLink]
});
