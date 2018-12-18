const User = require('../models/user');
//const Career = require('../models/career');

exports.index = function (req, res) {
  User.find({}, function (error, users) {
    if (error) {
      res.send('Ha surgido un error.');
    } else {
      res.render('user/empareja', {
        users: users
      });
    }
  })
};
exports.create = function (req, res) {
  res.render('registrar');
};

exports.loginGet = function (req, res) {
  res.render('login');
};

exports.isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/')
}

//administrator
exports.carreraIU = function (req, res) {
  res.render('administrator/carrera');
};
