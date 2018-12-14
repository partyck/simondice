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
   if(existeRegla(tipoPreferencia, preferenciaA, preferenciaB)) {
      console.log("existe la preferencia");
    } else {
      this._mapa[tipoPreferencia][preferenciaA+preferenciaB] = valor;
    }

    /*
    prefeerencia = podria ser deporte,comidas
    preferenciaA= ajedrez,preferenciaB=natacion
    valor=puntuacion que le asignara el usuario
    */ 

    }
  }
  
  obtenerValorRegla(tipoPreferencia, preferenciaA, preferenciaB) {
    var valor = 0;    
    if(existeRegla(tipoPreferencia, preferenciaA, preferenciaB)){
    valor=preferencia.getValor();
    }
    return valor;
    
  }
  
  existeRegla(tipoPreferencia, preferenciaA, preferenciaB) {
    /* otra forma de poder verificar la regla seria verificando el valor que no sea null*/
    if(preferenciaA.getid() === preferenciaB.getid()
      || preferenciaB.getid() === preferenciaA.getid()) {
    return true;
    } else {
    return false;
    }
    
  }
  
  eliminarRegla(tipoPreferencia, preferenciaA, preferenciaB) {

    
  }
  
  /**
  * Si es necesario no dudemos en crear metodos privados,
  * recordemos que un metodo privado empieza con '_', ejemplo:
  * _funcionPrivada() en vez de funcionPublica().
  */
  
}
_verificarPreferencias(tipoPreferencia, preferenciaA, preferenciaB) {
  
  if(preferenciaA.getid() === preferenciaB.getid()
    || preferenciaB.getid() === preferenciaA.getid()) {
    return true;
  } else {
    return false;
  }

}

module.exports = MapaPreferencias;