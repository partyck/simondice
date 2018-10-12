const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  nombre: String,
  carrera: String,
  semestre: Number,
  default:{
    type: Number,
    default: 1
  }
  
  }
  );

  

module.exports = mongoose.model('users', UserSchema);