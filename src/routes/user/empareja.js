const express = require('express');
const User = require('../../models/user');
const registro = require('./registro');

const router = express.Router();

router.get('/emparejar', (req, res) => {
    console.log(registro.estado);
    res.render('user/empareja', { title: 'Simon dice: Emparejate'}); 
});

router.post('/emparejar', (req, res) => {
    var idUsuarioSolicitado = "";
    User.findOne({
         where: {id: req.user.id}
       }).then(function(user) {
           idUsuarioSolicitado = registro.obtenerPareja(user.id);
        });    
     
        if (idUsuarioSolicitado != "") {
            res.render('user/parejaencontrada',
                {nombreemp: idUsuarioSolicitado});
            return;
        } else {
            res.render('user/parejanoencontrada', {title: 'Lo sentimos'});
            return;
        }
    });

module.exports = router;