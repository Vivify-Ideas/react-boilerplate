import loadable from '@loadable/component'
import React from 'react'
import { Redirect, Route, RouteProps, Switch } from 'react-router-dom'
import {
  PASSWORD_RECOVERY,
  HOME_PAGE,
  LOGIN_PAGE,
  SIGNUP_PAGE
} from '../constants'
import useAuth from './../hooks/useAuth'

type AsyncRouteProps = RouteProps & { importPath: () => Promise<any> }

function AsyncRoute({ importPath, ...props }: AsyncRouteProps) {
  return <Route {...props} component={loadable(importPath)} />
}

function AuthenticatedRoute(props: AsyncRouteProps) {
  const { user } = useAuth()

  if (!user) return <Redirect to="/login" />

  return <AsyncRoute {...props} />
}

export default function Router(): JSX.Element {
  return (
    <Switch>
      <AuthenticatedRoute
        exact
        path={HOME_PAGE}
        importPath={() => import('./../pages/HomePage')}
      />
      <AsyncRoute
        exact
        path={LOGIN_PAGE}
        importPath={() => import('./../pages/LoginPage')}
      />
      <AsyncRoute
        exact
        path={SIGNUP_PAGE}
        importPath={() => import('./../pages/SignUpPage')}
      />
      <AsyncRoute
        exact
        path={PASSWORD_RECOVERY}
        importPath={() => import('./../pages/PasswordRecoveryPage')}
      />
    </Switch>
  )
}
