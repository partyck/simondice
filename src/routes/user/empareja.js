
const express = require('express');

var User = require('../../model/user');     


const router = express.Router();


router.get('/emparejar', (req, res) => {
    res.render('user/empareja', { title: 'Simon dice'}); 
});

router.post('/emparejar', (req, res) => {     
    User.find({}, function(err, users) {
        if (err) throw err;
        
        console.log(users);
        
        if (users.length > 0) {
            res.send("felicidades usted encontro el amor fue emparejado con : " + users[0].getNombre());
            return;
        } else {
            res.send("Sigue participando lo siento no pudimos encontrar su pareja ideal");
            return;
        }
    });
});

module.exports = router;  