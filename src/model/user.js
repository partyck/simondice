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
{  collections : 'usuarios'}
);
UserSchema.methods.getNombre = function(){
  return this.nombre;
};
var user = mongoose.model("user",UserSchema);
module.exports = user;
//module.exports = mongoose.model('users', UserSchema);