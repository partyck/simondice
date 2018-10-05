const express = require('express');

var User = require('../model/user');

const router = express.Router();


router.get('/', (req, res) => {
    res.render('index', { title: 'Simon dice'}); 
});

router.post('/', (req, res) => {     
    User.find({}, function(err, users) {
        if (err) throw err;
        
        console.log(users);
        
        if (users.length > 0) {
            res.send("Se encontro a: " + users[0].getNombre());
            return;
        } else {
            res.send("Sigue participando");
            return;
        }
    });
});

module.exports = router;    