const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  nombre: String,
  carrera: String,
  semestre: {
    type: Integer,
    default: 1
  }
});

module.exports = mongoose.model('users', UserSchema);