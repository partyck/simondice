const express = require('express');
const User = require('../../models/user');
const Match = require('../../models/match');
const Grafo = require('./grafo');

var grafoUsuarios = new Grafo();
var estadoRegistro = "Registro sin iniciar";

function cargarRegistro() {
    console.log(estadoRegistro);
    User.find({}, function(err, users) {
        if (err) {
            console.log("No se pudo realizar la operacion find() en 'users'");
            throw err;
        }
        console.log(users);
        for (var usuarioI in users) {
            grafoUsuarios.insertarElemento(users[usuarioI].id);
            for (var usuarioJ in users) {
                if (existePareja(usuarioI, usuarioJ)) {
                    grafoUsuarios.conectar(usuarioI, usuarioJ);
                }
            }
            console.log("El usuario tiene " + users[usuarioI].getEdad());
        }
    });
    estadoRegistro = "Registro OK";
}

function existePareja(idUserA, idUserB) {
    Match.findOne(
        { $or:
            [{$and: [
                { "idUsuarioA" : idUserA},
                { "idUsuarioB" : idUserB}
              ]
            },
            {$and: [
                { "idUsuarioA" : idUserB},
                { "idUsuarioB" : idUserA}
              ]
            }]
        }, function(err, pareja) {
            if (err) {
                console.log("No se pudo realizar la operacion findOne() en 'matches'");
                throw err;
            }
            if (pareja == null) {                
                console.log("No existe la pareja");
                return false;
            } else {
                console.log("Existe la pareja");
                return true;
            }
        }
    );
}

module.exports = {
    obtenerGrafo: grafoUsuarios,
    iniciarRegistro: cargarRegistro,
    estado: estadoRegistro
}