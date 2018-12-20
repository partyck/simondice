class MapaPreferencias {
  constructor(preferencias) {    
    this._mapa = {};
    for (var i = 0; i < preferencias.length; i++) {
      this._mapa[preferencias[i]] = {};
    }
  }
  
  /** tipoPreferencia recibe, por ejemplo "Carrera". */
  insertarRegla(tipoPreferencia, preferenciaA, preferenciaB, valor) {
   if (this._existeRegla(tipoPreferencia, preferenciaA, preferenciaB)) {
      console.log("La regla ya existe");
    } else {
      if (!(this._preferenciaEstaDefinida(tipoPreferencia, preferenciaA))) {
        this._mapa[tipoPreferencia][preferenciaA] = {};
      }      
      if (!(this._preferenciaEstaDefinida(tipoPreferencia, preferenciaB))) {
        this._mapa[tipoPreferencia][preferenciaB] = {};
      }
      this._mapa[tipoPreferencia][preferenciaA][preferenciaB] = valor;
      this._mapa[tipoPreferencia][preferenciaB][preferenciaA] = valor;
    }
  }
  
  _preferenciaEstaDefinida(tipoPreferencia, preferencia) {
    if (typeof this._mapa[tipoPreferencia][preferencia] !== "undefined") {
      return true;
    } else {
      return false;
    }
  }
  
  obtenerValorRegla(tipoPreferencia, preferenciaA, preferenciaB) {
    var valor = 0;    
    if (this._existeRegla(tipoPreferencia, preferenciaA, preferenciaB)) {
      valor = this._mapa[tipoPreferencia][preferenciaA][preferenciaB];
    }
    return valor;  
  }
  
  _existeRegla(tipoPreferencia, preferenciaA, preferenciaB) {
    if (this._preferenciaEstaDefinida(tipoPreferencia, preferenciaA)) {
      if (this._mapa[tipoPreferencia][preferenciaA][preferenciaB]
            !== "undefined") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  
  eliminarRegla(tipoPreferencia, preferenciaA, preferenciaB) {
    this._mapa[tipoPreferencia][preferenciaA][preferenciaB] = undefined;
    this._mapa[tipoPreferencia][preferenciaB][preferenciaA] = undefined;
  }
  
}

module.exports = MapaPreferencias;