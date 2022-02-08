import React, { Suspense, useEffect } from 'react'
import { Route, RouteProps, Routes, useNavigate } from 'react-router-dom'
import {
  HOME_PAGE,
  LOGIN_PAGE,
  PASSWORD_RECOVERY,
  SETTINGS_PAGE,
  SIGNUP_PAGE
} from '../constants'
import useAuth from './../hooks/useAuth'

const HomePage = React.lazy(() => import('./../pages/HomePage'))
const SettingsPage = React.lazy(() => import('./../pages/SettingsPage'))
const LoginPage = React.lazy(() => import('./../pages/LoginPage'))
const SignUpPage = React.lazy(() => import('./../pages/SignUpPage'))
const PasswordRecoveryPage = React.lazy(
  () => import('./../pages/PasswordRecoveryPage')
)

const AuthProtection = ({
  children,
  isOnlyForAuthUsers,
  isOnlyForGuests
}: React.PropsWithChildren<{
  isOnlyForAuthUsers?: boolean
  isOnlyForGuests?: boolean
}>): JSX.Element => {
  const navigate = useNavigate()
  const { user } = useAuth()

  useEffect(() => {
    if (isOnlyForAuthUsers && !user) return navigate(LOGIN_PAGE)
    if (isOnlyForGuests && user) return navigate(HOME_PAGE)
  }, [user, isOnlyForAuthUsers, isOnlyForGuests])

  return <>{children}</>
}

type ProtectedRouteWrapperProps = RouteProps & {
  component: React.LazyExoticComponent<React.ComponentType<unknown>>
  isAuthenticated?: boolean
  isGuest?: boolean
}

const ProtectedRouteWrapper = ({
  component: Loadable,
  isAuthenticated,
  isGuest
}: ProtectedRouteWrapperProps) => (
  <Suspense fallback={<>Loading...</>}>
    {isAuthenticated && (
      <AuthProtection isOnlyForAuthUsers>
        <Loadable />
      </AuthProtection>
    )}
    {isGuest && (
      <AuthProtection isOnlyForGuests>
        <Loadable />
      </AuthProtection>
    )}
    {!isAuthenticated && !isGuest && <Loadable />}
  </Suspense>
)

export const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route
        path={HOME_PAGE}
        element={<ProtectedRouteWrapper component={HomePage} isAuthenticated />}
      />
      <Route
        path={SETTINGS_PAGE}
        element={
          <ProtectedRouteWrapper component={SettingsPage} isAuthenticated />
        }
      />

      <Route
        path={LOGIN_PAGE}
        element={<ProtectedRouteWrapper component={LoginPage} isGuest />}
      />

      <Route
        path={SIGNUP_PAGE}
        element={<ProtectedRouteWrapper component={SignUpPage} isGuest />}
      />

      <Route
        path={PASSWORD_RECOVERY}
        element={
          <ProtectedRouteWrapper component={PasswordRecoveryPage} isGuest />
        }
      />
    </Routes>
  )
}

export default Router
