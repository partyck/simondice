const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  nombre: String,
  carrera: String,
  semestre: {
    type: Number,
    default: 1
  }
});

UserSchema.methods.getNombre = function() {
return this.nombre;
};

/**module.exports = mongoose.model('users', UserSchema);*/

var User = mongoose.model("User", UserSchema);
module.exports = User;