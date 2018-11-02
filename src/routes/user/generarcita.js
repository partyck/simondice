const express = require('express');

var place = require('../../models/places');
const Date = require('../../models/date');
//var hora = require('./hora');

const router = express.Router();
//const mongoose = require('mongoose');
var lugares;
var fecha;
var hora;

router.get('/emparejar', (req, res) => {
    var places = [{
        "lugar" : "bloque antiguo fcyt"
    },{
        "lugar" : "paseo autonomico"
    },{
        "lugar" : "edificio nuevo fcyt"
    },{
        "lugar" : "parqueo fcyt" 
    },{
        "lugar" : "puerta principal fcyt"
    }];
    places.forEach(async function(lugar){
        var l = new place(lugar);
        await l.save()
    });
    generarCita("6516","1616"); 
});

 var buscarLugar = function(){     
     place.find({}, function(err, places) {
        if (err) {
            console.log("No se puedo realizar la operacion find()");
            throw err;
        }
       if (places.length > 0) {
         place.count().exec(function(err, resultCount) {
            var rand = Math.floor(Math.random() *resultCount);
             place.findOne().skip(rand).exec(function(err, result) {
              console.log(result.lugar);
              lugares = result.lugar;
              return;
            });
          });
    } else {
        res.send("no se encontro lugar");
        return;
    }

    });
};

var generarCita = async function (idSolicitante, idSolicitado){
    buscarLugar();
    buscarFecha();
    buscarHora();
    const q = new Date({
        "idsolicitante": idSolicitante,
        "idsolicitado": idSolicitado,
        "place": lugares,
        "date": fecha,
        "time": hora
     });
    await q.save();
};

   var buscarFecha = function(){
    fecha = "25/12/2018";
    var hoy = new Date();
    console.log(hoy);

};

   var buscarHora =function (){
    hora = "14:00";

    var ho = new Date();


};


module.exports = router;