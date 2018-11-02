const express = require('express');

var place = require('../../models/places');

const router = express.Router();
//const mongoose = require('mongoose');
var lugares;

router.get('/emparejar', (req, res) => {
    res.render('user/empareja', { title: 'Simon dice: Emparejate'}); 
});

router.post('/emparejar', (req, res) => {     
    place.find({}, function(err, places) {
        if (err) {
            console.log("No se puedo realizar la operacion find()");
            throw err;
        }
        console.log(places);
       if (places.length > 0) {
        place.count().exec(function(err, resultCount) {
            var rand = Math.floor(Math.random() *resultCount);
            place.findOne().skip(rand).exec(function(err, result) {
              console.log(result);
              lugares = result;
              res.send("felicidades usted encontro el amor fue emparejado con : " + lugares);
              return;
            });
          });
    } else {
        res.send("Sigue participando lo siento no pudimos encontrar su pareja ideal");
        return;
    }

    });
});

module.exports = router;