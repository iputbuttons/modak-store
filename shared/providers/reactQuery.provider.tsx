import AsyncStorage from '@react-native-async-storage/async-storage'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import { QueryClient } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { PropsWithChildren } from 'react'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
      gcTime: 1000 * 60 * 60 * 24,
    },
  },
})

const asyncStoragePersister = createAsyncStoragePersister({
  key: 'MODAK_STORE_QUERY_CACHE',
  storage: AsyncStorage,
})

export const ReactQuery = ({ children }: PropsWithChildren) => (
  <PersistQueryClientProvider
    client={queryClient}
    persistOptions={{
      persister: asyncStoragePersister,
      dehydrateOptions: {
        shouldDehydrateQuery: (query) => {
          return query.state.status === 'success'
        },
      },
    }}
  >
    {children}
  </PersistQueryClientProvider>
)
