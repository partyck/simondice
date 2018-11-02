const express = require('express');
const router = express.Router();
const rutaEmpareja = require('./user/empareja');

router.get('/', (req, res) => {
    res.render('index', { title: 'Simon Dice'}); 
});

router.use('/', rutaEmpareja);

module.exports = router;    