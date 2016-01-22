Build React Based Components with Webpack
====================================

A rapid build environment for building Ract based components in ES6.

Things the environment does:
* Installing dependent libraries
* Transpiling source files from ES6 and JSX into an ES5 bundle
* Supporting JSDom based unit testing with no need for browsers
* Supporting manual test in browsers with hot reload
* Removing dependency on Rails/Sprockets and UMD
* Supporting Visual Studio Code DTS based intellisense (code auto completion and checking)

Get started
---------------

Install dependencies using npm.

```shell
npm install --save-dev
```

Run tests.

```shell
npm test
```

Build (transpile) bundle.

```shell
npm run build
```

Start Webpack Dev Server.

```shell
npm start
```
Then in the browser, access 'http://localhost:8080' to check out.

The default port of Webpack Dev Server is 8080. You can change it by editing file of 'package.json' at line 8:

```shell
"start": "webpack-dev-server --hot --inline --port <your custom port>",
```