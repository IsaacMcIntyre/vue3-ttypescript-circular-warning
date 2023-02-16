# ttypescript-error-proof

This is a repo to showcase circular warnings when ttypescript is set up as the compiler for ts-jest.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup
- Node 16 should be installed on your machine
- Dependencies should be installed

```sh
# if using nvm (node version manager)
nvm use 16
# install dependencies
npm install
```

### Run tests to see warnings
To see warnings when running tests, to see the warnings jest cache should not be used. To run the tests with no cache and stacktrace, run the following:

```sh
npm test
```


### Run tests without seeing warnings
To have the tests not show any warnings, simply comment out line 9 and uncomment line 10 in jest.config.js at the root of the file, and run the same test command again.

```sh
node --trace-warnings node_modules/.bin/jest --no-cache
```
