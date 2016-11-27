# vue2-practive-demos

> Learn vue2 systematicly by write demos based on [official doc](http://cn.vuejs.org/v2/guide/installation.html).

## Init with Vue-cli

> vue-cli version 2.5.1

``` bash
# 全局安装 vue-cli
$ npm install --global vue-cli
# 创建一个基于 webpack 模板的新项目
$ vue init webpack vue2-practice-demos

	? Target directory exists. Continue? Yes
	  This will install Vue 2.x version of template.

	  For Vue 1.x use: vue init webpack#1.0 vue2-practice-demos

	? Project name vue2-practive-demos
	? Project description A Vue.js project
	? Author eli01linux@aliyun.com
	? Vue build standalone
	? Use ESLint to lint your code? Yes
	? Pick an ESLint preset Standard
	? Setup unit tests with Karma + Mocha? Yes
	? Setup e2e tests with Nightwatch? Yes

	   vue-cli · Generated "vue2-practice-demos".

	   To get started:
	   
	     cd vue2-practice-demos
	     npm install
	     npm run dev
	   
	   Documentation can be found at https://vuejs-templates.github.io/webpack
$ npm i vue-router -g

```


## Build Setup


``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
