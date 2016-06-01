'use strict';

const Model = require('../models/product');

exports.get = function*() {
  let products = yield Model.find({});
  this.body = products;
}

exports.getOne = function*() {
	let product = yield Mail.findOneById(this.id, (err, product) => {
        if (err) {
            return console.err(err)
        }
        this.body = product;
    }).exec();
}

exports.new = function*() {
  let {...options } = this.request.body;
  let product = yield Model.create(options);
  this.body = product.toObject();
};
}

exports.update = function*() {
  let req = this.request.body;
  let product = yield Model.findByIdAndUpdate(req.id, {
    $set: Object.keys(req).reduce((a, b) => (b == 'id' ? a : a[b] = req[b], a), {})
  }, (err, user) => {
    if (err) return console.err(err);
  });
}

exports
