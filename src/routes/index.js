const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Simon Dice'}); 
});

var rutaEmpareja = require('./user/empareja');

router.use('/', rutaEmpareja);

module.exports = router;    