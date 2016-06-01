'use strict';
const mongoose = require('mongoose');
const session = require('koa-generic-session');
const sessionStore = require('../libs/sessionStore');

module.exports = session({
  store: sessionStore
});