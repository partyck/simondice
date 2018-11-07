
var place = require('../../models/places');
const Date = require('../../models/date');
var lugarcita;
var fecha;
var hora;
 var buscarLugar = function(){     
     place.find({}, function(err, places) {
        if (err) {
            console.log("No se pudo realizar la operacion find()");
            throw err;
        }
       if (places.length > 0) {
         place.count().exec(function(err, resultCount) {
            var rand = Math.floor(Math.random() *resultCount);
             place.findOne().skip(rand).exec(function(err, result) {
              console.log(result.lugar);
              lugarcita = result.lugar;
              return;
            });
          });
    } else {
        res.send("no se encontro lugar");
        return;
    }

    });
};

var generarCita = async function (idApplicant, idRequested){
    buscarLugar();
    buscarFecha();
    buscarHora();
    const q = new Date({
        "idApplicant": idApplicant,
        "idRequested": idRequested,
        "place": lugarcita,
        "date": fecha,
        "time": hora +":00"
     });
    await q.save();
};

   var buscarFecha = function()
   {

   var re = Date(); 
   var rand = Math.floor(Math.random() * (29- 2)) +2;
   var fecha = new Date(re);
      fecha.setDate(rand); 
    var dia = fecha.toJSON().slice(8,10).replace(/-/g,'/');
    var mes = new Date().toJSON().slice(4,8).replace(/-/g,'/');
    var año = new Date().toJSON().slice(0,4).replace(/-/g,'/');
    return dia + mes +año ;
   };
   fecha = buscarFecha();

   var buscarHora =function (){
   var fechaactual = Date();
   var fecha = new Date(fechaactual);
    var rand = Math.floor(Math.random() * (15- 8)) +8;
     fecha.setHours(rand); 
     var gethora = fecha.toJSON().slice(11,13);
     return  gethora;
};
   hora = buscarHora() ;
