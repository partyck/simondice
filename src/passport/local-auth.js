const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use('local-registro', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, (req, email, password, done) = > {

}));