const express = require('express');

//var User = require('../model/user');


const router = express.Router();

var rutaEmpareja= require('./user/empareja');
router.use('/',rutaEmpareja);

module.exports = router;