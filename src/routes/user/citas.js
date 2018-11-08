const express = require('express');
const Appointment = require('../../models/appointment');
const Place = require('../../models/place');
const router = express.Router();

const generar = require('./generarcita');

router.get('/citas', async (req, res) => {
    var dates = await Date.find();
    console.log(dates);
    res.render('user/citas', {
        dates
    });
});

router.get('/generarcita', (req, res) => {
    generar.generarCita().then(date => {
        let result = "resultado: " + date.place + "\n" +
            "fecha: " + date.time;
        console.log(result);
        res.send(result);
    }).catch(e => {
        res.send(e)
    });
});

router.get('/accept/:id', async (req, res) => {
    let { id } = req.params;
    const date = await Appointment.findById(id);
    console.log(date);
    if (date.state1 == "accept") {
        date.state2 = "accept";
    } else {
        date.state1 = "accept";
    }
    date.state1 = "accept";
    await date.save();
    res.redirect('/citas');
});



module.exports = router;