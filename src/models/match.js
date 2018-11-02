const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MatchSchema = Schema({
  idsolicitante: Number,
  idsolicitado: Number
}, 
  { collection : 'matches' }
);

var Match = mongoose.model("Match", MatchSchema);
module.exports = Match;