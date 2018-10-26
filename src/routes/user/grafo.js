var PriorityQueue = require('./colaprioridad');
var compatibilidad = require('./listafunciones');

class graph {
  constructor() {
    this._grafo = [];
  }
  
  insertarElemento(userID) {
    /** a = [otroUserId, compatibilidad con userID] */
    var cola = new PriorityQueue(a[1] > b[1])
    for (var usuario = 0; usuario < _grafo.length; usuario++) {
        var idOtroUsuario = _grafo[usuario][0];
        if (idOtroUsuario != userID) {
            var valorCompatibilidad = compatibilidad.aplicarFunciones(userID, idOtroUsuario);
            cola.push([idOtroUsuario, valorCompatibilidad]);
            _grafo[usuario][1].push([userID, valorCompatibilidad]);
        }
    }
    this._grafo.add([userID, cola]);
  }
  
  obtenerPareja(idUsuarioSolicitante) {
      var idUsuarioSolicitado = "";
      var usuarioEnGrafo = array1.find(function(element) {
          return element[0] == ;
      });
      var colaLocal = _grafo[userID][1];
      var encontrado = false;
      while (!(colaLocal.isEmpty() || encontrado)) {
          usuarioSolicitado = colaLocal.pop()[0];
      }
      return usuarioSolicitado;
  }
}