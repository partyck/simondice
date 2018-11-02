const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DateSchema = Schema({
  idsolicitante: Number,
  idsolicitado: Number,
  lugar: String,
 // hora: Date,
  estado: String
}, 
  { collection : 'dates' }
);

var Date = mongoose.model("Date", DateSchema);
module.exports = Date;