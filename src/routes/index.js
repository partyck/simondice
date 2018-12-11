const router = require('express').Router();
const UserController = require('../controllers/user');
const passport = require('passport');
const Faculty = require('../models/faculty');
const Career = require('../models/career');

router.get('/', (req, res) => {
  res.render('home', { title: 'Simón Dice' });
});

router.get('/user', UserController.index);
router.get('/user/create', UserController.create);
router.get('/login', UserController.loginGet);

router.post('/user', passport.authenticate('local-registro', {
  successRedirect: '/emparejar',
  failureRedirect: '/user/create',
  passReqToCallback: true
}));

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/emparejar',
  failureRedirect: '/login',
  passReqToCallback: true
}));

router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});

router.get('/facultad', async (req, res) => {
  let facultades = [{
    'name': 'Medicina'
  }, {
    'name': 'Tecnología'
  }, {
    'name': 'Arquitectura'
  }, {
    'name': 'Economía'
  }, {
    'name': 'Humanidades'
  }];
  facultades.forEach(facultad => {
    new Faculty(facultad).save();
  });
  res.send(facultades);
});

router.get('/carreras', async (req, res) => {
  await Faculty.find({ name: 'Medicina' }, function (err, medicinas) {
    if (medicinas) {
      let medicina = medicinas[0];  
      let carrMedicina = [{
        'name': 'Licenciatura Medicina',
        'idFaculty': medicina._id
      }, {
        'name': 'Licenciatura Nutrición y Dietetica',
        'idFaculty': medicina._id
      }];
      carrMedicina.forEach(carreraM => {
        new Career(carreraM).save();
      });
    }
  });
  await Faculty.find({ name: 'Tecnología' }, function (err, tecnologias) {
    if (tecnologias) {
      let tecno = tecnologias[0];  
      let carrTecno = [{
        'name': 'Lic Ing Informatica',
        'idFaculty': tecno._id
      }, {
        'name': 'Lic Ing Sistemas',
        'idFaculty': tecno._id
      }];
      carrTecno.forEach(carreraT=> {
        new Career(carreraT).save();
      });
    }
  });
  await Faculty.find({ name: 'Arquitectura' }, function (err, arquitecturas) {
    if (arquitecturas) {
      let arqui = arquitecturas[0];  
      let carrArqui = [{
        'name': 'diseño grafico',
        'idFaculty': arqui._id
      }, {
        'name': 'arquitectura',
        'idFaculty': arqui._id
      }];
      carrArqui.forEach(carreraA=> {
        new Career(carreraA).save();
      });
    }
  });
  await Faculty.find({ name: 'Economía' }, function (err, economías) {
    if (economías) {
      let eco = economías[0];  
      let carrEco = [{
        'name': 'auditoria',
        'idFaculty': eco._id
      }, {
        'name': 'economía',
        'idFaculty': eco._id
      }];
      carrEco.forEach(carreraE=> {
        new Career(carreraE).save();
      });
    }
  });
  await Faculty.find({ name: 'Humanidades' }, function (err, humanidades) {
    if (humanidades) {
      let huma = humanidades[0];  
      let carrHuma= [{
        'name': 'lingüistica',
        'idFaculty': huma._id
      }, {
        'name': 'comunicacion',
        'idFaculty': huma._id
      }];
      carrHuma.forEach(carreraH=> {
        new Career(carreraH).save();
      });
    }
  });
  let carreras = await Career.find();
  res.send(carreras);
});

module.exports = router;  
