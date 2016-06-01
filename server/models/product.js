'use strict';

const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 255
  },
  surName: {
    type: String,
    max: 255
  },
  email: {
    type: String,
    max: 1000,
    required: true
  },
  phone: {
    type: String,
    max: 25
  }

});

schema.plugin(require('./libs/restPlugin'));


module.exports = mongoose.model('User', schema);
