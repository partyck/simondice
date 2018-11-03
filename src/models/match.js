const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Esquema de las dos variables del solicitante y del solicitado
const MatchSchema = Schema({
  Solicitante:String,
  Solicitado:String
}, 
  { collection : 'matches' }
);

var Match = mongoose.model("Match", MatchSchema);
module.exports = Match;