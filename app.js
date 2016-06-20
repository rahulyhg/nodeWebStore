'use strict';

const koa = require('koa');
const app = koa();
const config = require('config');
const fs = require('fs');
const path = require('path');

let middlewares = fs.readdirSync(path.join(__dirname, 'server/middlewares'));

middlewares.forEach(function (middleware) {
  console.log(middleware);
  app.use(require('./server/middlewares/'+middleware));
});

app.use(require('./server/libs/rest')());

app.listen(3000, 'localhost',
  () => console.log('Server run at %s:%s', config.server.host, config.server.port));