const express = require('express');
const User = require('../../models/user');
const registroUsuarios = require('./registro');

const router = express.Router();

router.get('/emparejar', (req, res) => {
    console.log(registroUsuarios.obtenerEstado());
    console.log("Se emparejo al usuario 4 con "
        + registroUsuarios.obtenerPareja(4));
    res.render('user/empareja', { title: 'Simon dice: Emparejate'}); 
});

router.post('/emparejar', (req, res) => {
    var idUsuarioSolicitado = registroUsuarios.obtenerPareja(4);
    /*User.findOne({
         where: {id: req.user.id}
       }).then(function(user) {
           idUsuarioSolicitado = registroUsuarios.obtenerPareja(user.id);
        });    
    */
        if (idUsuarioSolicitado != "") {
            res.render('user/empareja', {pEncontrado: 1});
            return;
        } else {
            res.render('user/empareja', {pEncontrado: 0});
            return;
        }
    });

module.exports = router;