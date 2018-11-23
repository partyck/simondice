const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  id: {type:Number, required:true},
  name: {type: String, required: false},
  birthdate: {type: Date, required: false},
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
);

UserSchema.methods.getName = function() {
    return this.nombre;
};

UserSchema.methods.getAge = function() {
    var fechaActual = (new Date());
    var edad = fechaActual.getYear() - this.birthdate.getYear();
    const mesDiaActual = fechaActual.getMonth() * 10 + this.birthdate.getDate();
    const mesDiaUsuario = this.birthdate.getMonth() * 10
        + this.birthdate.getDate();
    if (mesDiaActual < mesDiaUsuario) {
        edad =- 1;
    }
    return edad;
};

var User = mongoose.model("User", UserSchema);
module.exports = User;