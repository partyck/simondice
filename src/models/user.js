const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  nombre: String,
  carrera: String,
  semestre: Number
  }
  );

  

module.exports = mongoose.model('users', UserSchema);