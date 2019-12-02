# ⚛️ Vivify Ideas React Boilerplate

_Inspired by [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate)_

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

- Login
- Register
- Social Authentication (_Facebook_, _Google_)
- Reset Password
- User Profile (_Update User Profile_, _Change Password_)
- Basic Layout
- Welcome Page
- Dashboard Page
- Not Found Page
- Error Boundry
- Private/Public Routes
- Refresh Token, Websockets, Snackbars, i18n, Redux, Redux Saga, Reselect, Formik, Yup, Immer, SEO, Sentry, Code Splitting, code generators...

This React Boilerplate is best used with our [Laravel Boilerplate](https://github.com/Vivify-Ideas/laravel-boilerplate).

## Styles

### SASS

1. Run `npm install node-sass` or `yarn add node-sass` inside your workspace.
2. Run `npm run generate` or `yarn generate` and select `sass`.
3. Import `main.scss` from `src/styles` in `index.js`.

### Styled Components

1. Run `npm install styled-components` od `yarn add styled-components` inside your workspace.
2. Import `ThemeProvider` from `styled-components` in `index.js`.
3. Import `theme.js` from `src/theme.js` in `index.js`
4. Wrap `<ErrorBoundry>` with `<ThemeProvider theme={theme}>`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run generate`

Allows you to auto-generate boilerplate code for common parts of your application, specifically components, and containers. You can also run npm run generate <part> to skip the first selection. (e.g. npm run generate container)

### `npm run extract-intl`

This will generate json or yaml files from a glob. It will generate one file per locale, with the ids of each message defined by the `defineMessages` function of `react-intl`. The value of each of these keys will be an empty string, except for your `defaultLocale` which will be populated with the `defaultMessage`.

### `npm run analyze`

Source map explorer analyzes JavaScript bundles using the source maps. This helps you understand where code bloat is coming from.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
