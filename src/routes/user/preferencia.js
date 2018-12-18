const express = require('express');
const Appointment = require('../../models/appointment');
const router = express.Router();
const UserController = require('../../controllers/user');
const User = require('../../models/user');
const Compatibilidad = require('../../models/compatibility');
const Foods = require('../../models/foods');
const Sports = require('../../models/sports');


router.post('/preferencia', UserController.isAuthenticated, async (req, res) => {
  
  //var myData = new User(req.body);

  console.log(req.user._id);

});

router.get('/preferencia', async (req, res) => {
  var listfoods;
    Foods.find(function(err, foods) {
      if (err) {
        res.render("error.jade");
      } else {
        Sports.find(function(error, sports) {
          if (error) {
            res.render("error.jade");
          } else {
            res.render('user/preferencias', { comidas: foods, deportes: sports} );
          }
        });
      }
    });
  });

/*
 Comidas.find(function (error,documento) {
		if (error) {
			console.log(error);
		}else{
			
			var datos = documento;
			
		
			res.render('inicio.jade', {comidas: datos});

		}
  var datos;
  Compatibilidad.find(function(err, nav) {
    datos = nav;
  });
  datos = 5;
  res.render('user/preferencias', { comidas: datos }  );
});

*/ 
module.exports = router;
