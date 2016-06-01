'use strict';

const mongoose = require('mongoose');

const shema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    max:255
  },
  price: {
    type: Number,
    required: true
  },
  description: {
  	type:String,
  	max:1000
  }



})
