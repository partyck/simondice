const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const preferencesCategorySchema = Schema({
  name: { type: String},
},
  { collection: 'preferenceCategory' }
);

var Preferences = mongoose.model("PreferenceCategory", preferencesCategorySchema);
module.exports = Preferences;