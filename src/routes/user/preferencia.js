const express = require('express');
const Appointment = require('../../models/appointment');
const router = express.Router();
const UserController = require('../../controllers/user');
const User = require('../../models/user');
const Compatibilidad = require('../../models/compatibility');
const Foods = require('../../models/foods');


router.post('/preferencia', UserController.isAuthenticated, async (req, res) => {
  
  //var myData = new User(req.body);

  console.log(req.user._id);

});
router.get('/preferencia', async (req, res) => {
  var datos;
    Foods.find(function(err, nav) {
    datos = nav;
    console.log(datos);
    res.render('user/preferencias', { comidas: datos }  );
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
