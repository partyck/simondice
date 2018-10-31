const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  id: Number,
  nombre: String,
  carrera: String,
  semestre: {
    type: Number,
    default: 1
  }
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