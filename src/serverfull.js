const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const User = require('../src/model/user');

const app = express();

//connection to db
mongoose.connect('mongodb://localhost/fulldb',{ useNewUrlParser: true })
  .then(db => add())
  .catch(err => console.log(err));
//add data to db
function add(){
    console.log('DB connected');
    const users = [{
      "nombre": "Daniel Rivers",
      "carrera": "Industrial",
      "semestre": "5"
    },{
      "nombre": "Andrea Vasquez",
      "carrera": "Administracion de empresas",
      "semestre": "2"
    },{
      "nombre": "hugo neri",
      "carrera": "psicologia",
      "semestre": "10"
    }];
    users.forEach( async function( pretender){
      var user = new User(pretender);
      await user.save();  
    });
    console.log('users added');
  };


  //importing routes
const indexRoutes = require('./routes/index');

//settings 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'jade');

//middleware
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use("/public",express.static(path.join(__dirname,'public')));

//routes
app.use('/',indexRoutes);

//starting the server
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port')); 
});