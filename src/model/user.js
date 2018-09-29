const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    nombre: String,
    fechNac: Date,
    sexo: String,
    carrera: String,
    facultad: String,
    semestre: String
  });

module.exports = mongoose.model('users', UserSchema);