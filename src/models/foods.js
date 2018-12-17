const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = Schema({
  
  id: { type: Number },
  nombre: { type: String},
  _idusuario: { type: String},
  
},
  { collection: 'foods' }
);

var Foods = mongoose.model("Foods", foodSchema);
module.exports = Foods;