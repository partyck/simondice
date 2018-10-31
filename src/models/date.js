const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DateSchema = Schema({
  /**
  * Falta implementar
  *
  */
}, 
  { collection : 'dates' }
);

var Date = mongoose.model("Date", DateSchema);
module.exports = Date;