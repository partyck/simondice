const express = require('express');
const UserController = require('../../controllers/user');
const Preference = require('../../models/preference');
const PreferenceCategory = require('../../models/preferenceCateory');
const PreferenceUser = require('../../models/preferenceUser');
const router = express.Router();

router.get('/preferencias', UserController.isAuthenticated, async (req, res) => {
  preferencesCategories = await PreferenceCategory.find();
  preferences = await Preference.find();
  res.render('user/preferencia',{
            preferencesCategories:preferencesCategories,
            preferences:preferences});
   
});

router.post('/preferencia', UserController.isAuthenticated, async (req, res) => {
  let userId = req.user.id;
  let preferenceUser = new PreferenceUser({
    idUser: userId,
    idPreference: req.body.preference
  });
  preferenceUser.save(function(err){
    console.log(err);
    res.render('user/preferencia',{estado:0});
  });
});

router.post('/anadir/preferencia', UserController.isAuthenticated, async (req, res) => {
  let preference = new Preference({
    name: req.body.preferenceN,
    idCategory: req.body.preferenceCat
  });
  preference.save(function(err){
    console.log(err);
    res.render('user/preferencia');
  });
});

module.exports = router;