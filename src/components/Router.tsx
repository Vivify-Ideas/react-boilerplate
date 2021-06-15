import loadable, { DefaultComponent } from '@loadable/component'
import React from 'react'
import { Redirect, Route, RouteProps, Switch } from 'react-router-dom'
import {
  HOME_PAGE,
  LOGIN_PAGE,
  PASSWORD_RECOVERY,
  SETTINGS_PAGE,
  SIGNUP_PAGE
} from '../constants'
import useAuth from './../hooks/useAuth'

type AsyncRouteProps = RouteProps & {
  importPath: <T>(props: T) => Promise<DefaultComponent<T>>
}

const AsyncRoute = ({ importPath, ...props }: AsyncRouteProps) => {
  return <Route {...props} component={loadable(importPath)} />
}

const AuthenticatedRoute = (props: AsyncRouteProps) => {
  const { user } = useAuth()

  if (!user) return <Redirect to={LOGIN_PAGE} />

  return <AsyncRoute {...props} />
}

const GuestRoute = (props: AsyncRouteProps) => {
  const { user } = useAuth()

  if (user) return <Redirect to={HOME_PAGE} />

  return <AsyncRoute {...props} />
}

export const Router = (): JSX.Element => {
  return (
    <Switch>
      <AuthenticatedRoute
        exact
        path={HOME_PAGE}
        importPath={() => import('./../pages/HomePage')}
      />
      <AuthenticatedRoute
        exact
        path={SETTINGS_PAGE}
        importPath={() => import('./../pages/SettingsPage')}
      />
      <GuestRoute
        exact
        path={LOGIN_PAGE}
        importPath={() => import('./../pages/LoginPage')}
      />
      <GuestRoute
        exact
        path={SIGNUP_PAGE}
        importPath={() => import('./../pages/SignUpPage')}
      />
      <GuestRoute
        exact
        path={PASSWORD_RECOVERY}
        importPath={() => import('./../pages/PasswordRecoveryPage')}
      />
    </Switch>
  )
}

export default Router
