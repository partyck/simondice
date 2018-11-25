const express = require('express');
const Appointment = require('../../models/appointment');
const router = express.Router();
let userId = '4';

router.get('/citas', async (req, res) => {
  // let userId = req.user._id;
  await Appointment.find({
    $or: [
      { idApplicant: userId },
      { idRequested: userId }]
  },
    function (err, dates) {
      console.log(dates);
      res.render('user/citas', {
        dates: dates,
        userId: userId
      });
    });
});

router.get('/accept/:id', async (req, res) => {
  // let userId = req.user._id;
  let { id } = req.params;
  await Appointment.findById(id).then(async date => {
    if (userId == date.idApplicant) {
      date.status1 = "accept";
    }
    if (userId == date.idRequested) {
      date.status2 = "accept";
    }
    await date.save();
    res.redirect('/citas');
  });
});

router.get('/refuse/:id', async (req, res) => {
  let { id } = req.params;
  await Appointment.remove({ _id: id });
  res.redirect('/citas');
});

module.exports = router;