const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MatchSchema = Schema({
  idUsuarioA: Number,
  idUsuarioB: Number
}, 
  { collection : 'matches' }
);

var Match = mongoose.model("Match", MatchSchema);
module.exports = Match;