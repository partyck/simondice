const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Simon Dice'}); 
});

router.get('/registrar', (req, res) => {
    res.render('./registrar'); 
});

var rutaEmpareja = require('./user/empareja');

router.use('/', rutaEmpareja);

module.exports = router;    
