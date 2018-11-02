const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Simon Dice'}); 
});

var rutagenerarcita = require('./user/generarcita');

router.use('/', rutagenerarcita);

module.exports = router;    