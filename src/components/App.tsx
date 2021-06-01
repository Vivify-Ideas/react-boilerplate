import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { theme } from '../theme'
import { AuthProvider } from './../hooks/useAuth'
import Router from './Router'

const queryClient = new QueryClient()

export default function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  )
}
