const express = require('express');
const User = require('../../models/user');
const Match = require('../../models/match');
const registroUsuarios = require('./registro');
const generar = require('./generarcita');

const router = express.Router();

router.get('/emparejar', (req, res) => {
    res.render('user/empareja', {usrEncontrado: -1}); 
});

router.post('/emparejar', (req, res) => {
    var idUsuarioSolicitante = 4;
    var idUsuarioSolicitado = registroUsuarios.obtenerPareja(idUsuarioSolicitante);
    if (idUsuarioSolicitado != "") {
        console.log("Se emparejo al usuario "
        + idUsuarioSolicitante + " con " + idUsuarioSolicitado);
        var pareja = [{idUserA: idUsuarioSolicitante, idUserB: idUsuarioSolicitado}];
        Match.insertMany(pareja, function(error, doc) {});
        generar.generarCita(idUsuarioSolicitante, idUsuarioSolicitado);
    } else {
        console.log("No se pudo emparejar al usuario " + idUsuarioSolicitante);
    }
    if (idUsuarioSolicitado != "") {
        res.render('user/empareja', {usrEncontrado: 1});
        return;
    } else {
        res.render('user/empareja', {usrEncontrado: 0});  
        return;
    }
});

module.exports = router;