const express = require('express');

const router = express.Router();

var rutaEmpareja = require('./user/empareja');

router.use('/', rutaEmpareja);

module.exports = router;