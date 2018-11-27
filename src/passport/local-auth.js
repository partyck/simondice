const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');


passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use('local-registro', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  const user = await User.findOne({ 'email': email });
  console.log('user: ', user);
  if (user) {
    return done(null, false, req.flash('registroMessage', 'The Email is already Taken.'));
  } else {
    console.log('req: ', req.body);
    var tipo = req.body.tipo_date;
    var año;
    if (tipo == "Anual") {
      año = (req.body.semester) * 2;
    } else {
      año = req.body.semester;
    }
    const newUser = new User({
      name: req.body.name,
      birthdate: req.body.birthdate,
      sex: req.body.sex,
      course: req.body.course,
      semester: año,
      sexOrientation: req.body.sexOrientation,
      minAge: req.body.minAge,
      maxAge: req.body.maxAge,
    });

    newUser.email = email;
    newUser.password = newUser.encryptPassword(password);
    console.log('new user: ',newUser);
    newUser.save(function (err) {
      done(err, newUser);
    });
    
  }
}));

passport.use('local-login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  const user = await User.findOne({email: email});
  if(!user) {
    return done(null, false, req.flash('login', 'El correo electrónico o la contraseña son inválidos.'));
  }
  if(!user.comparePassword(password)) {
    return done(null, false, req.flash('login', 'El correo electrónico o la contraseña son inválidos.'));
  }
  return done(null, user);
}));