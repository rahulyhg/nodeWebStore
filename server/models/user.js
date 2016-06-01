'use strict';

const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 255
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    max: 1000
  }

});

schema.plugin(require('../libs/restPlugin'));


module.exports = mongoose.model('User', schema);
