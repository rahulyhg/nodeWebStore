'use strict';

const Model = require('./models/user');
let passport = require('koa-passport');


exports.post = function*() {
  let user = yield Model.create(this.request.body);
  return user;
}

exports.login = function*(next) {
  var ctx = this;

  // only callback-form of authenticate allows to assign ctx.body=info if 401
  yield passport.authenticate('local', function*(err, user, info) {
    if (err) throw err;
    if (user === false) {
      ctx.status = 401;
      ctx.newFlash.error = "Bad credentials.";
    } else {
      yield ctx.login(user);
    }
    ctx.redirect('/');
  }).call(this, next);

};

exports.update = function*() {
  let req = this.request.body;
  let users = yield Model.findByIdAndUpdate(req.id, {
    $set: Object.keys(req).reduce((a, b) => (b == 'id' ? a : a[b] = req[b], a), {})
  }, (err, user) => {
    if (err) return console.err(err);
  });
}
