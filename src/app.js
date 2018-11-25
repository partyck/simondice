'use strict';

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const mongoose = require('mongoose');
const registroUsuarios = require('./routes/user/registro');

const app = express();

//connection to db
mongoose.connect('mongodb://localhost:27017/simondicedb',
    { useNewUrlParser: true })
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

//importing routes
const indexRoutes = require('./routes/index');

//settings 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'jade');

//middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:false}));
registroUsuarios.iniciarRegistro();
//routes
app.use('/',indexRoutes);
//app.use(express.cookieParser());
//app.use(express.session({secret: 'abcd1234'}));

//starting the server
app.listen(app.get('port'), () => {
  console.log('server on port ', app.get('port')); 
});