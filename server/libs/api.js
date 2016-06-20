'use strict';

const Router = require('koa-router');
module.exports = function () {
  return new Router({
    prefix: '/api'
  })
    .get('/', function*() {
      console.log('qwe');
      this.body = 'qwe';
    })
    .routes();
}