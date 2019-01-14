
docker run -it   -v ${PWD}:/usr/src/app   -v /usr/src/app/node_modules   -p 3000:3000   -p 4000:4000   --rm icv

[![Build Status](https://travis-ci.org/bstenm/ico-contributions-visualizer.svg?branch=master)](https://travis-ci.org/bstenm/ico-contributions-visualizer) [![Coverage Status](https://coveralls.io/repos/github/bstenm/ico-contributions-visualizer/badge.svg?branch=master)](https://coveralls.io/github/bstenm/ico-contributions-visualizer?branch=master) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=bstenm/ico-contributions-visualizer)](https://dependabot.com)

#### Githook

It runs the linter on the files staged on each git commit.

#### `yarn prettier`

Runs prettier on all your source files.

#### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner with enzyme set up in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
