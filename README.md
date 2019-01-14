
A cross-country route planner without 3rd party libraries.

[![Build Status](https://travis-ci.org/bstenm/ico-contributions-visualization.svg?branch=master)](https://travis-ci.org/bstenm/ico-contributions-visualization) [![Coverage Status](https://coveralls.io/repos/github/bstenm/ico-contributions-visualization-draft/badge.svg?branch=master)](https://coveralls.io/github/bstenm/ico-contributions-visualization?branch=master) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=bstenm/ico-contributions-visualization)](https://dependabot.com)

## Demo

Click here for a [Youtube video demo](https://www.youtube.com/)

## Design Choices

### State mangement

For the whole dataset returned by the server we use the apollo client cache and thus keep the  [Redux](https://redux.com) store small: only to persist the user selected value range and currencies to inspect.

### Note on test writing style

The tests are written using limited nesting (few "describe" blocks) and the set ups ("beforeAll"/"beforeEach") are generally limited to resetting mocks. This is for readability/maintanability purposes, and follows a current trend in the community (see [Writing Tests](https://facebook.github.io/create-react-app/docs/running-tests#writing-tests)): Multiples nesting can make sense for logical groupings but can very quickly lead to confusing  and difficult to maintain test suites.

## Automation

### Continuous Integration

After each push to the [Git](https://github.com/bstenm/ico-contributions-visualization) repository [Travis](https://travis.org) will"
- Run the tests
- Send the coverage report to [Coveralls](https://coveralls.io/)
- Run the build process
- Deploy the server to heroku
- Deploy the client to [AWS S3](https://aws.amazon.com/s3/). It will be hosted on that link: [ICO-contributions-visualization](ico-contributions-visualizer-client.s3-website-us-east-1.amazonaws.com).

### Git hook

[Husky](https://www.npmjs.com/package/husky) runs the linter on the files staged on each any git commit.

## Commands

##### `yarn watch-app`

Starts and watches the client and server concurrently in development mode. <br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

##### `yarn prettier`

Runs prettier on all your source files (client and server).

##### `yarn lint`

Runs the linter on all your source files (client and server).

##### `yarn test-client`

Launches the test runner for the client with enzyme set up in the interactive watch mode.

##### `yarn test-server`

Launches the test runner for the server with enzyme set up in the interactive watch mode.

##### `yarn build-client`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>