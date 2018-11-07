const express = require('express');
const User = require('../../models/user');
const registroUsuarios = require('./registro');

const router = express.Router();

router.get('/emparejar', (req, res) => {
   /* console.log(registroUsuarios.obtenerEstado());
    console.log("Se emparejo al usuario 4 con "
        + registroUsuarios.obtenerPareja(4));*/
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
    console.log("Se emparejo al usuario 4 con " + idUsuarioSolicitado);
        console.log("POST en /emparejar");
        if (idUsuarioSolicitado != "") {
            res.render('user/empareja', {usuarioEncontrado: true});
            return;
        } else {
            res.render('user/empareja', {usuarioEncontrado: false});
            return;
        }
    });

module.exports = router;