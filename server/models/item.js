let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  email: {},
  phone: {},
  items: {}
});

module.exports = mongoose.model('user', UserSchema);
