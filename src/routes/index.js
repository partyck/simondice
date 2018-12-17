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

module.exports = router;  
