import { QueryClient, type QueryKey } from '@tanstack/react-query';

import { RequestError } from '../error';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }: { queryKey: QueryKey }) => {
        if (!Array.isArray(queryKey) || typeof queryKey[0] !== 'string') {
          throw new RequestError('Invalid queryKey format', 'QueryClient', 'An internal error occurred.');
        }
        const res = await fetch(queryKey[0] as string, {
          credentials: 'include',
        });

        if (!res.ok) {
          const errorText = await res.text();
          // TODO: Update res to have friendly error messages to update Failed to fetch data message
          // this is if the user messes not the server
          throw new RequestError(
            `${res.status}: ${errorText || res.statusText}`,
            queryKey[0],
            'Request Failed. Please try again later.',
          );
        }

        return res.json();
      },
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Number.POSITIVE_INFINITY,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
