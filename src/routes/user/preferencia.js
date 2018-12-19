const express = require('express');
const Appointment = require('../../models/appointment');
const router = express.Router();
const UserController = require('../../controllers/user');
const User = require('../../models/user');
const Compatibilidad = require('../../models/compatibility');
const Category = require('../../models/preferenceCateory');
const Preference = require('../../models/preference');
const Music = require('../../models/preference');


router.post('/preferencia', UserController.isAuthenticated, async (req, res) => {

  //var myData = new User(req.body);

  console.log(req.user._id);

});

router.post('/eliminarfood', UserController.isAuthenticated, async (req, res) => {
  console.log("entreee");
  console.log(req.body);
  console.log(req.test);
  console.log(req.hidden);
});


router.get('/preferencia', async (req, res) => {
  let foods;
  let sports;
  let musics;
  await Category.find(async function (err, data) {
    if(err)
      throw err;
    data.forEach(async category => {
      await Preference.find({ idCategory: category._id }, function (err, preference) {
        if(err){
          throw err;
        }
        console.log(category.name, "food, sport, music");
        if (category.name === "food") {
          foods = preference;
        }
        if (category.name === "sport") {
          sports = preference;
        }
        if (category.name === "music") {
          musics = preference;
        }
        console.log(foods,sports,musics);
        //res.render('user/preferencias', { comidas: foods, deportes: sports, musicas: musics });
        res.send( { comidas: foods, deportes: sports, musicas: musics });
      });
    });
  });
});

router.get('/crear', async (req, res) => {
  console.log("crear");
  let categorys = [{
    'name': 'food'
  }, {
    'name': 'music'
  }, {
    'name': 'sport'
  }];
  categorys.forEach(category => {
    new Category(category).save();
  });
  res.send(categorys);
});

router.get('/preferencias', async (req, res) => {
  await Category.find({ name: 'food' }, function (err, comida) {
    if (comida) {
      console.log(comida);
      let comidaCat = comida[0];  
      let preferenciasComida = [{
        'name': 'Asado',
        'idCategory': comidaCat._id
      }, {
        'name': 'Chicharron',
        'idCategory': comidaCat._id
      }];
      preferenciasComida.forEach(comida1 => {
        new Preference(comida1).save();
      });
    }
  });
  await Category.find({ name: 'sport' }, function (err, deporte) {
    if (deporte) {
      let deporteCat = deporte[0];  
      let preferenciasDeporte = [{
        'name': 'Futbol',
        'idCategory': deporteCat._id
      }, {
        'name': 'ajedres',
        'idCategory': deporteCat._id
      }];
      preferenciasDeporte.forEach(deporte1=> {
        new Preference(deporte1).save();
      });
    }
  });
  await Category.find({ name: 'music' }, function (err, musica) {
    if (musica) {
      console.log(musica);
      let musicaCat = musica[0];  
      let preferenciasMusica = [{
        'name': 'rock',
        'idCategory': musicaCat._id
      }, {
        'name': 'regueton',
        'idCategory': musicaCat._id
      }];
      preferenciasMusica.forEach(musica1=> {
        new Preference(musica1).save();
        console.log(musica1);
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
