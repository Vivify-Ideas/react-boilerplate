import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter } from 'react-router-dom'
import { Theme } from '../theme'
import { AuthProvider } from './../hooks/useAuth'
import DefaultLayout from './Layout'
import Router from './Router'

const queryClient = new QueryClient()

export default function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Theme>
        <BrowserRouter>
          <AuthProvider>
            <DefaultLayout>
              <Router />
            </DefaultLayout>
          </AuthProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </Theme>
    </QueryClientProvider>
  )
}
