const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sportSchema = Schema({
  
  id: { type: Number },
  nombre: { type: String},
  _idusuario: { type: String},
  
},
  { collection: 'sports' }
);

var Sports = mongoose.model("Sports", sportSchema);
module.exports = Sports;