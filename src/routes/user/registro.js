const express = require('express');
const User = require('../../models/user');
const Grafo = require('./grafo');

var grafoUsuarios = new Grafo();
var estadoRegistro = "Registro sin iniciar";

function cargarRegistro() {
    console.log(estadoRegistro);
    User.find({}, function(err, users) {
        if (err) {
            console.log("No se puedo realizar la operacion find() en 'users'");
            throw err;
        }
        console.log(users);
        for (var usuarioi in users) {
            grafoUsuarios.insertarElemento(users[usuarioi].id);
            console.log("El usuario tiene " + users[usuarioi].getEdad());
        }
    });
    estadoRegistro = "Registro OK";
}

module.exports = {
    obtenerGrafo: grafoUsuarios,
    iniciarRegistro: cargarRegistro,
    estado: estadoRegistro
}