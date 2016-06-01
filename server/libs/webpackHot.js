'use strict';

let webpackMiddleware = require('koa-webpack-dev-middleware');
let webpack = require('webpack');
let compiler = webpack(require('../../webpack.config'));

app.use(webpackMiddleware(compiler));
