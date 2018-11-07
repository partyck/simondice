const express = require('express');
const User = require('../../models/user');
const Match = require('../../models/match');
const Grafo = require('./grafo');

var grafoUsuarios = new Grafo();
var estadoRegistro = "Registro sin iniciar";

function cargarRegistro() {
    console.log(estadoRegistro);
    User.find({}, async function(err, users) {
        if (err) {
            console.log("No se pudo realizar la operacion find() en 'users'");
            throw err;
        }
        console.log(users);
        for (var usuarioI in users) {
            grafoUsuarios.insertarElemento(users[usuarioI].id);
        }
        for (var usuarioI in users) {
            for (var usuarioJ in users) {
                if (users[usuarioI].id != users[usuarioJ].id) {
                    var existePar = await existePareja(users[usuarioI].id,
                            users[usuarioJ].id); 
                    if (!existePar) {
                        grafoUsuarios.conectar(users[usuarioI].id,
                            users[usuarioJ].id);
                        console.log("Se conecto: " + users[usuarioI].id + " con "
                            + users[usuarioJ].id);
                    }
                }
            }
        }
    });
    estadoRegistro = "Registro OK";
    console.log(estadoRegistro);
}

async function existePareja(idA, idB) {
    return new Promise(function(resolve, reject) { Match.findOne({
        $or:
            [{$and: [
                { idUserA : idA},
                { idUserB : idB}
              ]
            },
            {$and: [
                { idUserA : idB},
                { idUserB : idA}
              ]
            }]
        }, function(err, pareja) {
            if (err) {
                console.log("No se pudo realizar la operacion "
                    + "findOne() en 'matches'");
                throw err;
            }
            if (pareja == null) {                
                console.log("No existe la pareja " + idA 
                    + " - " + idB);
                resolve(false);
            } else {
                console.log("Existe la pareja " + idA 
                    + " - " + idB);
                resolve(true);
            }
        }
    );}
    );
}

module.exports = {
    iniciarRegistro: cargarRegistro,
    obtenerEstado: () => estadoRegistro,
    obtenerPareja: (idUsuario) => grafoUsuarios.obtenerPareja(idUsuario),
}