const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  name: {type: String, required: false},
  birthday: {type: Date, required: false},
  sex: {type: String, required: false},
  course: {type: String, required: false},
  semester: {type: Number, required: false},
  sexOrientation: {type: String, required: false},
  minAge: {type: Number, required: false},
  maxAge: {type: Number, required: false},
  email: {type: String, unique: true, required: false},
  password: {type: String, required: false}
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

UserSchema.plugin(uniqueValidator);

var User = mongoose.model("User", UserSchema);
module.exports = User;