const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DateSchema = Schema({
  idSolicitante: Number,
  idSolicitado: Number,
  place: String,
  date: String,
  time: String,
  state1: {
    type: "String",
    default: "null" 
  },
  state2: {
    type: "String",
    default: "null" 
  }, 
});

var Date = mongoose.model("dates", DateSchema);
module.exports = Date;