const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const preferencesSchema = Schema({
  name: { type: String},
  idCategory: {type: String}
},
  { collection: 'preference' }
);

var preferences = mongoose.model("Preferences", preferencesSchema);
module.exports = preferences;