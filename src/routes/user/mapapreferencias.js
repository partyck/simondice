class MapaPreferencias {
  constructor(preferencias) {
    this._mapa = {};
    for (var i = 0; i < preferencias.length; i++) {
      this._mapa[preferencias[i]] = {};
    }
  }
  
  insertarRegla(tipoPreferencia, preferenciaA, preferenciaB, valor) {
    /**
    * - Hay que controlar si existe la clave preferenciaA-preferenciaB, o
    
    * preferenciaB-preferenciaA, si es asi, sobreescribir en ese lugar. Si no,
    * agregar el valor con la nueva clave.
    * - Para agregar, hariamos, por ejemplo:
    * this._mapa[preferencia][preferenciaA + preferenciaB] = valor;
    */
   if(preferenciaA.getid() === preferenciaB.getid()
      || preferenciaB.getid() === preferenciaA.getid() )
    {
      

    }else{
      this._mapa[preferrencia][preferenciaA+preferenciaB]=valor
    }

    }
  }
  
  obtenerValorRegla(tipoPreferencia, preferenciaA, preferenciaB) {
    
  }
  
  existeRegla(tipoPreferencia, preferenciaA, preferenciaB) {
    
  }
  
  eliminarRegla(tipoPreferencia, preferenciaA, preferenciaB) {
    
  }
  
  /**
  * Si es necesario no dudemos en crear metodos privados,
  * recordemos que un metodo privado empieza con '_', ejemplo:
  * _funcionPrivada() en vez de funcionPublica().
  */
  
}

module.exports = MapaPreferencias;