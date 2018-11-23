const express = require('express');
const Appointment = require('../../models/appointment');
const Place = require('../../models/place');
const router = express.Router();
const generar = require('./generarcita');

router.get('/citas', async (req, res) => {
    // let userId = req.user._id;
    await Appointment.find({
        $or: [
            { idApplicant: '2' },
            { idRequested: '2' }]
    },
        function (err, dates) {
            console.log(dates);
            res.render('user/citas', {
                dates
            });
        });
});

router.get('/accept/:id', async (req, res) => {
    let { id } = req.params;
    await Appointment.findById(id).then(async date => {
        console.log(date);
        if (date.status1 == "accept") {
            date.status2 = "accept";
        } else {
            date.status1 = "accept";
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