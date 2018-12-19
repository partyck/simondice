const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const preferenceUserSchema = Schema({
  idUser: { type: String},
  idPreference: { type: String},
},
  { collection: 'preferencesUsers' }
);

var preferenceUser = mongoose.model("PreferencesUsers", preferenceUserSchema);
module.exports = preferenceUser;