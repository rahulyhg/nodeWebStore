const busboy = require('co-busboy');


module.exports = function* (next) {
  if (!this.request.is('multipart/*')) {
    return yield* next;
  }

  let parser = busboy(this, {
    autoFields: true
  });
  let part;
  // jshint -W084
  while (part = yield parser) {
    this.throw(400, 'Files are not allowed here');
  }

  for (let key in parser.fields) {
    this.request.body[key] = parser.fields[key];
  }

  yield* next;

};