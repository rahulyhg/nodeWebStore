'use strict';

const busboy = require('co-busboy');


module.exports = function* (next) {

  if (!this.request.is('multipart/*')) {
    return yield* next;
  }

  var parser = busboy(this, {
    autoFields: true
  });
  var part; 
  while (part = yield parser) { 
    this.throw(400, "Files are not allowed here");
  }

  for (var key in parser.fields) {
    this.request.body[key] = parser.fields[key];
  }

  yield* next;
};