const router = require('express').Router();
// const rutaEmpareja = require('./user/empareja');
// const rutaCitas = require('./user/citas');
// const User = require('../models/user');
const UserController = require('../controllers/user');
const passport = require('passport');

router.get('/', (req, res) => {
  res.render('home', { title: 'Simón Dice' });
});

router.get('/user', UserController.index);
router.get('/user/create', UserController.create);
router.post('/user', passport.authenticate('local-registro', {
  successRedirect: '/emparejar',
  failureRedirect: '/user/create',
  passReqToCallback: true
}));
router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});
router.get('/user/:id', UserController.show);
router.get('/user/:id/edit', UserController.edit);
router.put('/user/:id', UserController.update);
router.delete('/user/:id', UserController.destroy);
router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/emparejar',
  failureRedirect: '/login',
  passReqToCallback: true
}));

router.get('/login', UserController.loginGet);

module.exports = router;  
