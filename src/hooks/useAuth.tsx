import React, { createContext, ReactNode, useContext, useMemo } from 'react'
import {
  useGetAuthenticatedUserQuery,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation
} from '../queries/auth'
import authService from '../services/AuthService'

export interface AuthContextType {
  user: User
  loading: boolean
  error?: unknown
  loginError?: unknown
  signUpError?: unknown
  login: ({ email, password }: { email: string; password: string }) => void
  signUp: (data: Omit<User, 'id'> & { password: string }) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider({
  children
}: {
  children: ReactNode
}): JSX.Element {
  const token = authService.getAccessToken()
  const {
    data: user,
    isFetching: loading,
    error,
    isFetchedAfterMount: isUserLoaded
  } = useGetAuthenticatedUserQuery({
    enabled: !!token,
    refetchOnWindowFocus: false
  })

  const { mutate: login, error: loginError } = useLoginMutation()
  const { mutate: signUp, error: signUpError } = useRegisterMutation()
  const { mutate: logout } = useLogoutMutation()

  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      error,
      login,
      loginError,
      signUp,
      signUpError,
      logout
    }),
    [user, loading, error, loginError, signUpError]
  )

  return (
    <AuthContext.Provider value={memoedValue as AuthContextType}>
      {(!token || isUserLoaded) && children}
    </AuthContext.Provider>
  )
}

export default function useAuth(): AuthContextType {
  return useContext(AuthContext)
}
