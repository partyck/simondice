const express = require('express');

const router = express.Router();

const User = require ('../models/user');

router.get('/', (req, res) => {
    res.render('home', { title: 'Simon Dice'}); 
});

router.get('/registrar', (req, res) => {
    res.render('./registrar'); 
});

router.post('/guardar',async(req,res) => {
    const user = new User(req.body);
    await user.save();
    res.render('home');
})
var rutaEmpareja = require('./user/empareja');

router.use('/', rutaEmpareja);

module.exports = router;    
