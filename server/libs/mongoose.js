'use strict'
const mongoose = require('mongoose');
const config = require('config');

if (process.env.MONGOOSE_DEBUG) {
  mongoose.set('debug', true);
}

mongoose.connect(config.mongoose.uri, config.mongoose.options);

console.log(`mongoose URI:${config.mongoose.uri}, mongoose options:${config.mongoose.options}`);

module.exports = mongoose;