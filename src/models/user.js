const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  nombre: String,
  carrera: String,
  semestre: {
    type: Number,
    default: 1
  }
}, 
  { collection : 'usuarios' }
);

UserSchema.methods.getNombre = function() {
return this.nombre;
};

var User = mongoose.model("User", UserSchema);
module.exports = User;