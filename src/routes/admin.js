const express = require('express');
const router = express.Router();
const Career = require('../models/career');
const AcademicRule = require('../models/academicRule');
const rulesAdministrator = require('../routes/administradorreglas');

router.get('/admin', async function (req, res) {
  let careers = await Career.find();
  let rules = await AcademicRule.find();
  res.render('administrator/carrera', {
    careers: careers, rules: rules
  });
});

router.post('/createRule', async function (req, res) {
  var newRule = new AcademicRule(req.body);
  await newRule.save(function () {
    rulesAdministrator.insertarRegla(
      newRule.idCareer1, newRule.idCareer2, newRule.value
    );
    res.redirect('/admin');
  });
});

router.get('/deleteRule/:id', async (req, res) => {
  let { id } = req.params;
  rulesAdministrator.eliminarRegla(id);
  await AcademicRule.deleteOne({ _id: id });
  res.redirect('/admin');
});

module.exports = router;
