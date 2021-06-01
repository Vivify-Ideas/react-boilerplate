import * as Sentry from '@sentry/react'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { config } from './config'
import './i18n'

if (config.SENTRY_DSN) {
  Sentry.init({ dsn: config.SENTRY_DSN as string })
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
