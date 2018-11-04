'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  name:  {type: String, required: true},
  birthday:  {type: Date, required: true},
  sex:  {type: String, required: true},
  course:  {type: String, required: true},
  semester:  {type: Number, required: true},
  sexOrientation:  {type: String, required: true},
  minAge:  {type: Number, required: true},
  maxAge:  {type: Number, required: true},
  email:  {type: String, required: true},
  password:  {type: String, required: true},
}, 
  { collection : 'users' }
  /**
  * Es necesario modificar el nombre de la
  * coleccion a users, o lo que decidan.
  */
);

UserSchema.methods.getNombre = function() {
return this.nombre;
};

var User = mongoose.model("User", UserSchema);
module.exports = User;