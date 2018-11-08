const express = require('express');
const User = require('../../models/user');
const registroUsuarios = require('./registro');

const router = express.Router();

router.get('/emparejar', (req, res) => {
    res.render('user/empareja', {usrEncontrado: -1}); 
});

router.post('/emparejar', (req, res) => {
    var idUsuarioSolicitado = registroUsuarios.obtenerPareja(4);
    console.log("Se emparejo al usuario 4 con " + idUsuarioSolicitado);
        console.log("POST en /emparejar");
        if (idUsuarioSolicitado != "") {
            res.render('user/empareja', {usrEncontrado: 1});
            return;
        } else {
            res.render('user/empareja', {usrEncontrado: 0});  
            return;
        }
    });

module.exports = router;