'use strict';

module.exports = function(schema, options) {

  options = options || {};

  schema.statics.getRestKeys = options.getRestKeys || function() {
    let paths = Object.keys(schema.paths);
    paths = paths.filter(p => p != '_id' && p != '__v' && !p.includes('.'));
    return paths;
  };

  schema.statics.restFormat = options.restFormat || function(model) {
    let obj = model.toObject();
    delete obj.__v;
    return obj;
  };

  schema.statics.restCreate = options.restCreate || function*(namespace, body) {
    let data = { namespace };

    let restKeys = this.getRestKeys();

    for (let key in body) {
      if (~restKeys.indexOf(key)) {
        data[key] = body[key];
      }
    }

    return yield this.create(data);
  };
}
