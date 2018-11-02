const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  id: Number,
  nombre: String,
  sexo: String,
  fechanacimiento: Date,
  carrera: String,
  semestre: {
    type: Number,
    default: 1
  }
}, 
  { collection : 'users' }
);

UserSchema.methods.getNombre = function() {
    return this.nombre;
};

UserSchema.methods.getEdad = function() {
    var edad = (new Date()).getYear() - this.fechanacimiento.getYear();
    return edad;
};

var User = mongoose.model("User", UserSchema);
module.exports = User;