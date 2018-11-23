
var User = require('../../models/user');
var peso=0;

<<<<<<< HEAD
  function medicinaOdontologia(solicitante,solicitado) {
    //var peso = 0;
=======
function medicinaOdontologia(solicitante,solicitado) {
    var peso = 0;
>>>>>>> b6f1a4e40f516d2a31b38101c0fd6e09cad708a4
     if(solicitante.course==="Lic. Medicina" || solicitante.course==="Lic. Odontologia"){
         if(solicitado.course==="Lic. Medicina" || solicitado.course==="Lic. Odontologia" )
         peso = 1;      
         else
         peso=0;        
     }
     return peso;
}
<<<<<<< HEAD
  function sistemasElectronica(solicitante,solicitado){
   //var peso = 0;
=======
function sistemasElectronica(solicitante,solicitado){
   var peso = 0;
>>>>>>> b6f1a4e40f516d2a31b38101c0fd6e09cad708a4
    
     if(solicitante.course==="Ing. Sistemas" || solicitante.course==="Ing. Electronica"){
         if(solicitado.course==="Ing. Sistemas" || solicitado.course==="Ing. Electronica" )
         peso = 1;
         else
         peso=0;
         }
         return peso;
}
<<<<<<< HEAD
  function informaticaSistemas(solicitante,solicitado){
  //var peso = 0;
=======
function informaticaSistemas(solicitante,solicitado){
  var peso = 0;
>>>>>>> b6f1a4e40f516d2a31b38101c0fd6e09cad708a4
     if(solicitante.course==="Ing. Informatica" || solicitante.course==="Ing. Sistemas"){
         if(solicitado.course==="Ing. Informatica" || solicitado.course==="Ing. Sistemas" )
         peso = 1;
         else
         peso=0;
         }
         return peso;
}
<<<<<<< HEAD
  function quimicaBiologia(solicitante,solicitado){
   // var peso = 0;
=======
function quimicaBiologia(solicitante,solicitado){
    var peso = 0;
>>>>>>> b6f1a4e40f516d2a31b38101c0fd6e09cad708a4
     if(solicitante.course==="Ing. Quimica" || solicitante.course==="Lic. Biologia"){
         if(solicitado.course==="Ing. Quimica" || solicitado.course==="Lic. Biologia" )
         peso = 1;
         else
         peso=0;
         }
         return peso;
}
  function derechoPsicoligia(solicitante,solicitado){
    //var peso=0;
     if(solicitante.course==="Lic. Derecho" || solicitante.course==="Lic. Psicologia"){
         if(solicitado.course==="Lic. Derecho" || solicitado.course==="Lic. Psicologia" )
         peso = 1;
         }
         return peso;
}
<<<<<<< HEAD
  function arquitecturaCivil(solicitante,solicitado){
    //var peso = 0;
=======
function arquitecturaCivil(solicitante,solicitado){
    var peso = 0;
>>>>>>> b6f1a4e40f516d2a31b38101c0fd6e09cad708a4
     if(solicitante.course==="Lic. Arquitectura" || solicitante.course==="Ing. Civil"){
         if(solicitado.course==="Lic. Arquitectura" || solicitado.course==="Ing. Civil" )
         peso = 1;
         else
         peso=0;
         }
         return peso;
}
<<<<<<< HEAD
  function contabilidadIndustrial(solicitante,solicitado){
    //var peso = 0;
=======
function contabilidadIndustrial(solicitante,solicitado){
    var peso = 0;
>>>>>>> b6f1a4e40f516d2a31b38101c0fd6e09cad708a4
     if(solicitante.course==="Lic. Contabilidad" || solicitante.course==="Ing. Industrial") {
         if(solicitado.course==="Lic. Contabilidad" || solicitado.course==="Ing. Industrial" )
            peso = 1;
         else
            peso = 0;
     }
         return peso;
}
 async function aplicarFunciones(idUsuarioSolicitante, idUsuarioSolicitado){
     
        var usuarioSolicitante = (await obtenerUsuario(idUsuarioSolicitante))[0];
        var usuarioSolicitado = (await obtenerUsuario(idUsuarioSolicitado))[0];
        var peso = 1;
        peso = peso + todasLasFuncionesPreferencia(usuarioSolicitante,usuarioSolicitado);
        peso = peso * todasLasFuncionesRestriccion(usuarioSolicitante,usuarioSolicitado); 
       
    return peso;    
}

  function obtenerUsuario(userId) {
  return User.find({id: userId}).exec();
}

//esta funcion Retorna las preferencias por carrera y devuelve un peso 
<<<<<<< HEAD
  function todasLasFuncionesPreferencia (usuarioSolicitante,usuarioSolicitado){
=======
function todasLasFuncionesPreferencia (usuarioSolicitante,usuarioSolicitado){
>>>>>>> b6f1a4e40f516d2a31b38101c0fd6e09cad708a4
var peso = medicinaOdontologia(usuarioSolicitante,usuarioSolicitado)
        + sistemasElectronica(usuarioSolicitante,usuarioSolicitado)
        + informaticaSistemas(usuarioSolicitante,usuarioSolicitado)
        + quimicaBiologia(usuarioSolicitante,usuarioSolicitado)
        + derechoPsicoligia(usuarioSolicitante,usuarioSolicitado)
        + arquitecturaCivil(usuarioSolicitante,usuarioSolicitado)
        + contabilidadIndustrial(usuarioSolicitante,usuarioSolicitado);
return peso;
}

  function todasLasFuncionesRestriccion(usuarioSolicitante,usuarioSolicitado){
var peso=rangoEdad(usuarioSolicitante,usuarioSolicitado)*orientacionSexual(usuarioSolicitante,usuarioSolicitado);
return peso;
}

<<<<<<< HEAD
  function rangoEdad(usuarioSolicitante,usuarioSolicitado){
    var peso =0;
        if((usuarioSolicitante.minAge<=usuarioSolicitado.getAge())&&(usuarioSolicitante.maxAge>=usuarioSolicitado.getAge())){
            if((usuarioSolicitado.minAge<=usuarioSolicitante.getAge())&&(usuarioSolicitado.maxAge>= usuarioSolicitante.getAge()))
=======
function rangoEdad(usuarioSolicitante,usuarioSolicitado){
var peso =0;
if((usuarioSolicitante.minAge<=usuarioSolicitado.getAge())&&(usuarioSolicitante.maxAge>=usuarioSolicitado.getAge())){
    if((usuarioSolicitado.minAge<=usuarioSolicitante.getAge())&&(usuarioSolicitado.maxAge>= usuarioSolicitante.getAge()))
>>>>>>> b6f1a4e40f516d2a31b38101c0fd6e09cad708a4
    peso=1;
}
return peso;
}
<<<<<<< HEAD
  function orientacionSexual(usuarioSolicitante,usuarioSolicitado){
=======
function orientacionSexual(usuarioSolicitante,usuarioSolicitado){
>>>>>>> b6f1a4e40f516d2a31b38101c0fd6e09cad708a4
    var peso=0;
    var preferenciaSolicitante=usuarioSolicitante.sexOrientation;
    var preferenciaSolicitado=usuarioSolicitado.sexOrientation;
    switch(preferenciaSolicitante){
        case 'Heterosexual':
        if(preferenciaSolicitado==="Heterosexual"||preferenciaSolicitado==="Bisexual"){
                if(usuarioSolicitante.sex==="Masculino" && usuarioSolicitado.sex==="Femenino") {        
                    peso=1;}
                    else
                    if(usuarioSolicitante.sex==="Femenino" && usuarioSolicitado.sex==="Masculino") {
                    peso=1;}
        }
        break;
        
        case 'Homosexual':
        if(preferenciaSolicitado==="Homosexual"||preferenciaSolicitado==="Bisexual"){
                if(usuarioSolicitante.sex==="Masculino" && usuarioSolicitado.sex==="Masculino") {        
                 peso=1;}
                 else
                 if(usuarioSolicitante.sex==="Femenino" && usuarioSolicitado.sex==="Femenino") {
                     peso=1;}
        }
        break;
        case 'Bisexual':
<<<<<<< HEAD
        if(preferenciaSolicitado==="Bisexual"||preferenciaSolicitado==="Homosexual"||preferenciaSolicitado==="Heterosexual"){
=======
        if(preferenciaSolicitado==="Bisexual"||preferenciaSolicitado==="Homosexual"||preferenciaSolicitado==="heterosexual"){
>>>>>>> b6f1a4e40f516d2a31b38101c0fd6e09cad708a4
                if(usuarioSolicitante.sex==="Masculino" && (usuarioSolicitado.sex==="Femenino"||usuarioSolicitado.sex==="Masculino")){
                peso=1;}
                else
                if(usuarioSolicitante.sex==="Femenino" && (usuarioSolicitado.sex==="Femenino"||usuarioSolicitado.sex==="Masculino")){
                    peso=1;}
        }
    }
    return peso;    
}

module.exports = {
    aplicarFunciones: aplicarFunciones,
}