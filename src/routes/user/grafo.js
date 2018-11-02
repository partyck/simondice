var PriorityQueue = require('./colaprioridad');
/* var compatibilidad = require('./listafunciones');
   todos los usos de var compatibilidad estan pendientes
*/

class graph {
  constructor() {
    this._grafo = [];
  }
  
  insertarElemento(userID) {
    /** a = [otroUserId, compatibilidad con userID] */
    var cola = new PriorityQueue((a, b) => a[1] > b[1]);
    this._grafo.push([userID, cola]);
    console.log("Se inserto sastisfactoriamente el usuario con id: "
            + (this._grafo[this._grafo.length - 1])[0]);
  }
  
  conectar(idUsuarioA, idUsuarioB){
      if (idUsuarioA != idUsuarioB) {
            var valorCompatibilidad = 5;
            /*compatibilidad.aplicarFunciones(userID, idOtroUsuario);*/
            var indiceA = this._obtenerIndicePorIdUsuario(idUsuarioA);
            var indiceB = this._obtenerIndicePorIdUsuario(idUsuarioB);
            this._grafo[indiceA][1].push([idUsuarioB, valorCompatibilidad]);
            this._grafo[indiceB][1].push([idUsuarioA, valorCompatibilidad]);            
        }
  }
  
  obtenerPareja(idUsuarioSolicitante) {
      var idUsuarioSolicitado = "";
      var indiceSolicitante = this._obtenerIndicePorIdUsuario(
            idUsuarioSolicitante);
      var colaLocal = this._grafo[indiceSolicitante][1];
      var encontrado = false;
      while (!(colaLocal.isEmpty() || encontrado)) {
          var parUsusarioValor = colaLocal.pop();
          if (parUsusarioValor[1] > 0) {
              idUsuarioSolicitado = parUsusarioValor[0];
          }
      }
      return idUsuarioSolicitado;
  }
  
  _obtenerIndicePorIdUsuario(idUsuario) {
      return this._grafo.findIndex(i => i[0] == idUsuario);
  }
}

module.exports = graph;