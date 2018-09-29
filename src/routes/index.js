const express = require('express');
const router = express.Router();
const model = require('../model/user');
const users = require('../model/users');

router.get('/', (req, res) => {
    res.render('index', { title: 'Tinder Umss'}); 
});

router.post('/match', (req, res) => {
    let body = req.body;
    var love;
    users.forEach(pretender => {
        love = pretender;
     });
     if(love) console.log("felicidades hes encontrado pareja\n", love);
        console.log("sigue participando");
    
});

module.exports = router;    