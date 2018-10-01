const mongoose = require('mongoose');
const Schema = mongoose.Schema;



module.exports = function() {
  var db = require('./../libs/db-conections')();
  var Schema = require('mongoose').Schema;

  var userSchema = Schema({
    nombre: String,
    fechNac: Date,
    sexo: String,
    carrera: String,
    facultad: String,
    semestre: String
  });

  return db.model('users', userSchema);
};