const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DateSchema = Schema({

  idApplicant: Number,
  idRequested: Number,
  place: String,
  date: String,
  time: String,
  estado1: {
    type: String,
    default: "null"
  },
  estado2: {
    type: String,
    default: "null"
  }
} );

var Date = mongoose.model("dates", DateSchema);
module.exports = Date;