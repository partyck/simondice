const express = require('express');

var User = require('../model/user');

const router = express.Router();


router.get('/', (req, res) => {
    res.render('index', { title: 'Simon dice'}); 
});

router.post('/', (req, res) => { 
    
    var registro = User.find({}, function(err, users) {
        if (err) throw err;
        // object of all the users
        console.log(users);
    });
    
    if (registro.length > 0) {
        res.send("Se encontro a: " + registro[0].nombre);
    } else {
        res.send("Sigue participando");
    }
});

module.exports = router;    