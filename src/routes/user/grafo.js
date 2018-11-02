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
    for (var usuario = 0; usuario < this._grafo.length; usuario++) {
        var idOtroUsuario = this._grafo[usuario][0];
        if (idOtroUsuario != userID) {
            var valorCompatibilidad = 5;
            /*compatibilidad.aplicarFunciones(userID, idOtroUsuario);*/
            cola.push([idOtroUsuario, valorCompatibilidad]);
            this._grafo[usuario][1].push([userID, valorCompatibilidad]);
        }
    }
    this._grafo.push([userID, cola]);
    console.log("Se inserto sastisfactoriamente el usuario con id: "
            + (this._grafo[0])[0]);
  }
  
  obtenerPareja(idUsuarioSolicitante) {
      var idUsuarioSolicitado = "";
      var colaLocal = _grafo[userID][1];
      var encontrado = false;
      while (!(colaLocal.isEmpty() || encontrado)) {
          idUsuarioSolicitado = colaLocal.pop()[0];
      }
      return idUsuarioSolicitado;
  }
}

module.exports = graph;