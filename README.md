# ⚛️ Vivify Ideas React Typescript Boilerplate

Boilerplate generated with [Vite ⚡️](https://vitejs.dev/)

💡 Instant Server Start

⚡️ Lightning Fast HMR

🔑 Fully Typed APIs

## Features

- Login
- Register
- Password Recovery
- Welcome page
- Private/Public Routes
- Refresh Token
- i18n
- Code Splitting
- [ReactQuery](https://react-query.tanstack.com/): Fetch, cache and update data in your React and React Native applications all without touching any "global state"
- Form Validation with [Formik](https://formik.org/) & [Yup](https://github.com/jquense/yup) - works nice with [ChakraUI](https://chakra-ui.com/) components thanks to [chakra-formik-experiment](https://github.com/with-heart/chakra-formik-experiment)
- [ChakraUI](https://chakra-ui.com/): a simple, modular and accessible component library
- [Sentry](https://sentry.io/welcome/): application monitoring platform
- Pre-commit hooks with [husky](https://typicode.github.io/husky/#/) and [lint-staged](https://www.npmjs.com/package/lint-staged)

## Start

After cloning the repo to run the application in development mode you should execute:

```sh
$ yarn && yarn dev
```

## Building for Production

```sh
$ yarn build
```

By default `production` mode is used during the build process if the argument `--mode staging` isn't passed.

Make sure that `.env.{mode}` file is available during the build with required env variables.


More details https://vitejs.dev/guide/build.html

```sh
$ vite build
building for production...
[write] my-lib.es.js 0.08kb, brotli: 0.07kb
[write] my-lib.umd.js 0.30kb, brotli: 0.16kb
```

Old boilerplate version can be found on this branch:
https://github.com/Vivify-Ideas/react-boilerplate/tree/v1