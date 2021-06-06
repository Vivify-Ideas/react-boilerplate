const { VITE_API_BASE_URL: API_BASE_URL, VITE_SENTRY_DSN: SENTRY_DSN } =
  import.meta.env

export const config = {
  API_BASE_URL,
  SENTRY_DSN
}

export default config
