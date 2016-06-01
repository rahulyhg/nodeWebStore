const koa = require('koa');
const app = koa(); 

const moongoose = require('./libs/moongoose');

app.keys = config.keys;

const path = require('path');
const fs = require('fs');

let middlewares = fs.readdirSync(path.join(__dirname, 'middlewares')).sort();

middlewares.forEach(middleware => app.use('./middlewares/' + middleware));

const Router = require('koa-router');

let router = new Router();

