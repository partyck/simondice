const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MatchSchema = Schema({
  /**
  * Falta implementar
  *
  */
}, 
  { collection : 'matches' }
);

var Match = mongoose.model("Match", MatchSchema);
module.exports = Match;