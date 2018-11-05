const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  id: Number,
  nombre: String,
  sexo: String,
  fechaNacimiento: Date,
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
    var fechaactual = (new Date());
    var edad = fechaactual.getYear() - this.fechaNacimiento.getYear();
    const mesDiaActual = fechaactual.getMonth() * 10 + fechaactual.getDate();
    const mesDiaUsuario = this.fechaNacimiento.getMonth() * 10
        + this.fechaNacimiento.getDate();
    if (mesDiaActual < mesDiaUsuario) {
        edad =- 1;
    }
    return edad;
};

var User = mongoose.model("User", UserSchema);
module.exports = User;