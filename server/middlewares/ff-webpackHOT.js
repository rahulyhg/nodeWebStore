/**
 * Created by admin on 01.06.2016.
 */
'use strict';
let webpack = require('webpack');
let compiler = webpack(require('../../webpack.config'));

module.exports = require("koa-webpack-hot-middleware")(compiler);