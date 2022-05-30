import React, { memo, ReactNode, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

export const CONFIG = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
};

export type QueryContextProps = {
  dehydratedState: any;
  children: ReactNode;
};

const QueryProvider = ({ children, dehydratedState }: QueryContextProps) => {
  const [queryClient] = useState<QueryClient>(() => new QueryClient(CONFIG));

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>{children}</Hydrate>
    </QueryClientProvider>
  );
};

export default memo(QueryProvider);
