'use strict';

const koa = require('koa');
const app = koa();

const mongoose = require('./server/libs/mongoose');
const config = require('config');

app.keys = config.keys;

const path = require('path');
const fs = require('fs');

let middlewares = fs.readdirSync(path.join(__dirname, '/server/middlewares')).sort();

middlewares.forEach(middleware => {
	console.log(middleware);
	app.use(require('./server/middlewares/' + middleware));
});
fs.readdirSync('./server/models').forEach(file => require(`./server/models/${file}`));


// EXPERIMENTAL
// const rest = require('./server/libs/rest');

// for(let modelName in mongoose.models) {
//   app.use(rest(mongoose.models[modelName]));
// }

const Router = require('koa-router');
let router = new Router();

router.post('/login', require('./server/rest/user').login);
router.post('/registration', require('./server/rest/user').registration);
router.put('/user/:id', require('./server/rest/user').update);

router.get('/products', require('./server/rest/product').get); //get All
router.get('/products/:id', require('./server/rest/product').findOne); //get One
router.post('/newproduct', require('./server/rest/user').new); //new product
router.put('/product/:id', require('./server/rest/user').update); //update item;

app.use(router.routes());

app.listen(port, ip, () => console.log('%s: Node server started on %s:%d ...',
  Date(Date.now()), ip, port));
