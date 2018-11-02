const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placesSchema = Schema({
  lugar: String
}, 
  { collection : 'umss' }
);

placesSchema.methods.getnombre = function() {
  return this.lugar;
  };

var place = mongoose.model("umss", placesSchema);
module.exports = place;