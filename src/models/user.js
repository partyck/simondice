const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  name: String,
  birthday: Date,
  sex: String,
  course: String,
  semester: Number,
  sexOrientation: String,
  minAge: Number,
  maxAge: Number,
  email: String,
  password: String
}, 
  { collection : 'usuarios' }
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