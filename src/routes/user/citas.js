const express = require('express');
const Appointment = require('../../models/appointment');
const Place = require('../../models/place');
const router = express.Router();

const generar = require('./generarcita');

router.get('/citas', async (req, res) => {
  var dates = await Appointment.find();
  console.log(dates);
  res.render('user/citas', {
    dates
  });
});

router.get('/generarcita', (req, res) => {
  generar.generarCita(1, 5).then(date => {
    let result = "resultado: " + date.place + "\n" +
      "fecha: " + date.time;
    console.log(result);
    res.send(result);
  }).catch(e => {
    res.send(e)
  });
});

router.get('/lugares', (req,res) => {
  let lugares = [{
    'place': 'Café Bakita'
  },{
    'place': 'Trencito'
  },{
    'place': 'Jardin de Arquitectura'
  },{
    'place': 'Puente de Economia'
  },{
    'place': 'Plazuela Sucre'
  }];
  lugares.forEach(lugar => {
    new Place(lugar).save();
  });
  res.send(lugares);
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