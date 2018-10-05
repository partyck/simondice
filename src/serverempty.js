const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
//añadido por mi
const User = require('./model/user');

const app = express();

//connection to db
mongoose.connect('mongodb://localhost/emptydb',{ useNewUrlParser: true })
  .then(db => add())
  .catch(err => console.log(err));
//añadiendo datos para la base de datos 
function add(){
  console.log('DB connected');
  console.log('no users added');
};
//importing routes
const indexRoutes = require('./routes');

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