export default {
  api: {
    baseUrl: process.env.REACT_APP_API_URL,
    cdn: process.env.REACT_APP_API_CDN
  },
  social: {
    facebookAppId: process.env.REACT_APP_FACEBOOK_APP_ID,
    googleClientId: process.env.REACT_APP_GOOGLE_CLIENT_ID
  },
  websockets: {
    deepstreamUrl: process.env.REACT_APP_DEEPSTREAM_URL
  },
  sentry: {
    key: process.env.REACT_APP_SENTRY_KEY,
    project: process.env.REACT_APP_SENTRY_PROJECT
  }
};
