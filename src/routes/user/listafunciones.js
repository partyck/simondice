const User = require('../../models/user');
const reglasAdmin = require('../administradorreglas');
const PreferenceUser = require('../../models/preferenceUser');

async function aplicarFunciones(idUsuarioSolicitante, idUsuarioSolicitado) {
  var usuarioSolicitante = (await obtenerUsuario(idUsuarioSolicitante))[0];
  var usuarioSolicitado = (await obtenerUsuario(idUsuarioSolicitado))[0];
  var peso = 1;
  peso = peso + (await todasLasFuncionesPreferencia(usuarioSolicitante,
    usuarioSolicitado));
  peso = peso * todasLasFuncionesRestriccion(usuarioSolicitante,
    usuarioSolicitado);
  return peso;
}

function obtenerUsuario(userId) {
  return User.find({ id: userId }).exec();
}

//esta funcion Retorna las preferencias por carrera y devuelve un peso 
async function todasLasFuncionesPreferencia(usuarioSolicitante, usuarioSolicitado) {
  var peso = 0 + reglasAdmin.obtenerValorRegla(usuarioSolicitante.course,
    usuarioSolicitado.course) + (await compatibilidadGustos(usuarioSolicitante,
      usuarioSolicitado));
  return peso;
}

function todasLasFuncionesRestriccion(usuarioSolicitante, usuarioSolicitado) {
  var peso = rangoEdad(usuarioSolicitante, usuarioSolicitado)
    * orientacionSexual(usuarioSolicitante, usuarioSolicitado);
  return peso;
}

function rangoEdad(usuarioSolicitante, usuarioSolicitado) {
  var peso = 0;
  if ((usuarioSolicitante.minAge <= usuarioSolicitado.getAge())
    && (usuarioSolicitante.maxAge >= usuarioSolicitado.getAge())) {
    if ((usuarioSolicitado.minAge <= usuarioSolicitante.getAge())
      && (usuarioSolicitado.maxAge >= usuarioSolicitante.getAge())) {
      peso = 1;
    }
  }
  return peso;
}

function orientacionSexual(usuarioSolicitante, usuarioSolicitado) {
  var peso = 0;
  var preferenciaSolicitante = usuarioSolicitante.sexOrientation;
  var preferenciaSolicitado = usuarioSolicitado.sexOrientation;

  switch (preferenciaSolicitante) {
    case 'Heterosexual':
      if (preferenciaSolicitado === "Heterosexual"
        || preferenciaSolicitado === "Bisexual") {
        if (usuarioSolicitante.sex === "Masculino"
          && usuarioSolicitado.sex === "Femenino") {
          peso = 1;
        }
        else if (usuarioSolicitante.sex === "Femenino"
          && usuarioSolicitado.sex === "Masculino") {
          peso = 1;
        }
      }
      break;
    case 'Homosexual':
      if (preferenciaSolicitado === "Homosexual"
        || preferenciaSolicitado === "Bisexual") {
        if (usuarioSolicitante.sex === "Masculino"
          && usuarioSolicitado.sex === "Masculino") {
          peso = 1;
        }
        else if (usuarioSolicitante.sex === "Femenino"
          && usuarioSolicitado.sex === "Femenino") {
          peso = 1;
        }
      }
      break;
    case 'Bisexual':
      if (usuarioSolicitante.sex === "Femenino"
        && usuarioSolicitado.sex === "Femenino") {
        if (preferenciaSolicitado === "Bisexual"
          || preferenciaSolicitado === "Homosexual") {
          peso = 0;
        }
      }
      if (usuarioSolicitante.sex === "Femenino"
        && usuarioSolicitado.sex === "Masculino") {
        if (preferenciaSolicitado === "Bisexual"
          || preferenciaSolicitado === "Heterosexual") {
          peso = 1;
        }
      }
      if (usuarioSolicitante.sex === "Masculino"
        && usuarioSolicitado.sex === "Femenino") {
        if (preferenciaSolicitado === "Bisexual"
          || preferenciaSolicitado === "Heterosexual") {
          peso = 1;
        }
      }
      if (usuarioSolicitante.sex === "Masculino"
        && usuarioSolicitado.sex === "Masculino") {
        if (preferenciaSolicitado === "Bisexual"
          || preferenciaSolicitado === "Homosexual") {
          peso = 1;
        }
      }
      break;
    default:
      console.log("Orientacion sexual desconocida.");
  }
  return peso;
}

async function compatibilidadGustos(usuarioSolicitante, usuarioSolicitado) {
  var peso = 0;
  var arregloGustoSolicitante = [];
  var arregloGustoSolicitado = [];
  PreferenceUser.find({
    $or: [
      { idUser: usuarioSolicitante.id },
      { idUser: usuarioSolicitado.id }
    ]
  },
    async function (err, gustos) {
      if (err) {
        throw err;
      }
      if (gustos) {
        for(var gusto in gustos){
          if (gusto.idUser === usuarioSolicitante.id) {
            arregloGustoSolicitante.push(gusto);
          } else {
            arregloGustoSolicitado.push(gusto);
          }
        }
        // await gustos.forEach(gusto => {
        //   if (gusto.idUser === usuarioSolicitante.id) {
        //     arregloGustoSolicitante.push(gusto);
        //   } else {
        //     arregloGustoSolicitado.push(gusto);
        //   }
        // });
        console.log("gusto: ", arregloGustoSolicitado);
        await arregloGustoSolicitante.forEach(gustoA => {
          arregloGustoSolicitado.forEach(gustoB => {
            console.log("gusto: ", gustoA);
            if (gustoA.idPreference === gustoB.idPreference) {
              console.log('Gustos en comun!', usuarioSolicitante.id,
                 " con ", usuarioSolicitado.id);
              peso = peso + 1;
            }
          });
        });

      }
    });
  return peso;
}

module.exports = {
  aplicarFunciones: aplicarFunciones,
}