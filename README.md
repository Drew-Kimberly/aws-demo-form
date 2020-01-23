[![Build Status](https://travis-ci.org/Drew-Kimberly/aws-demo-form.svg?branch=master)](https://travis-ci.org/Drew-Kimberly/aws-demo-form)

## CloudFront Domain: [d33kohr90wxoce.cloudfront.net/](http://d33kohr90wxoce.cloudfront.net/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Please view the [Available Scripts](#available-scripts) section for more information on out-of-the-box CRA react-scripts.

## Development
Clone this codebase and run `npm install && npm run start` from the project root. This will install dependencies and start
a local development server available at `http://localhost:3000/`.

## Continuous Integration
TravisCI is used for continuous integration. The script `npm run ci` is executed against every PR / tag.

Additionally when a tag/release is cut, the CI process will build a production artifact of the app using `npm run build`.
This build will then be deployed to AWS S3 using TravisCI's built-in S3 Deployment provider. The AWS CloudFront cache will
also be invalidated by using the [travis-ci-cloudfront-invalidation](https://github.com/alexpatow/travis-ci-cloudfront-invalidation) NPM library.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
