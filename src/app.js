const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
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
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
registroUsuarios.iniciarRegistro();
app.use(express.urlencoded({extended:false}));
//routes
app.use('/',indexRoutes);

//starting the server
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port')); 
});