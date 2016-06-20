'use strict';

const Router = require('koa-router');
module.exports = function () {
  return new Router()
    .get('/*', function () {
      // this.body = yield this.render(;
    })
    .routes();
}