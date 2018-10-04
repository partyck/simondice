const express = require('express');
const router = express.Router();

var user = require("./model/user");

router.get('/', (req, res) => {
    res.render('index', { title: 'Simon dice'}); 
});

router.post('/', (req, res) => { 
    var useMap = {};
    
    var registro = users.forEach(function(user) {
      userMap[user._id] = user;
    });
    
    if (registro.length > 0) {
        res.send("Se encontro a: " + registro[0].nombre);
    } else {
        res.send("Sigue participando");
    }
});

module.exports = router;    