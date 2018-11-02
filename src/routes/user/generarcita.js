const express = require('express');

var place = require('../../models/places');
var  qoute = require('../../models/qoutes');

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
      // var assignedplace = place.find().limit(-1).skip( _rand() * place.count() )
       // return
       if (places.length > 0) {
        place.count().exec(function(err, resultCount) {
            var rand = Math.floor(Math.random() *resultCount);
            place.findOne().skip(rand).exec(function(err, result) {
              console.log(result);res.send("felicidades usted encontro el amor fue emparejado con : " + result);
              lugares = result;
              return;
            });
          });
         // console.log(lugares);
/*
          place.each(function(error, doc){
              console.log("el cocumento",doc);
          }
          );
        */
    } else {
        res.send("Sigue participando lo siento no pudimos encontrar su pareja ideal");
        return;
    }

    });
});
    router.post('/emparejar', async (req , qoutes) => {
     const q = new qoute(req.body);
     await q.save();
     qoutes.send('recibido');

    });

module.exports = router;