
var User = require('../../models/user');

function medicinaOdontologia(solicitante,solicitado) {
    var peso;
     if(solicitante.getCarrera()==="medicina" || solicitante.getCarrera()==="odontologia"){
         if(solicitado.getCarrera()==="medicina" || solicitado.getCarrera()==="odontologia" )
         peso = 1;      
         //semestre.Controlarsemestre(Solicitante,Solicitado);
         else
         peso=0;        
     }
     return peso;
}
function sistemasElectronica(solicitante,solicitado){
   var peso;
    
     if(solicitante.getCarrera()==="sistemas" || solicitante.getCarrera()==="electronica"){
         if(solicitado.getCarrera()==="sistemas" || solicitado.getCarrera()==="electronica" )
         peso = 1;
         else
         peso=0;
         }
         return peso;
        }
function informaticaSistemas(solicitante,solicitado){
  var  peso;
     if(solicitante.getCarrera()==="informatica" || solicitante.getCarrera()==="sistemas"){
         if(solicitado.getCarrera()==="informatica" || solicitado.getCarrera()==="sistemas" )
         peso = 1;
         else
         peso=0;
         }
         return peso;
        }
function quimicaBiologia(solicitante,solicitado){
    var peso;
     if(solicitante.getCarrera()==="quimica" || solicitante.getCarrera()==="biologia"){
         if(solicitado.getCarrera()==="quimica" || solicitado.getCarrera()==="biologia" )
         peso = 1;
         else
         peso=0;
         }
         return peso;
        }
function derechoPsicoligia(solicitante,solicitado){
    var peso=0;
     if(solicitante.getCarrera()==="derecho" || solicitante.getCarrera()==="psicologia"){
         if(solicitado.getCarrera()==="derecho" || solicitado.getCarrera()==="psicologia" )
         peso = 1;
         }
         return peso;
        }
function arquitecturaCivil(solicitante,solicitado){
    var peso;
     if(solicitante.getCarrera()==="arquitectura" || solicitante.getCarrera()==="civil"){
         if(solicitado.getCarrera()==="arquitectura" || solicitado.getCarrera()==="civil" )
         peso = 1;
         else
         peso=0;
         }
         return peso;
        }
function contabilidadIndustrial(solicitante,solicitado){
    var peso;
     if(solicitante.getCarrera()==="contabilidad" || solicitante.getCarrera()==="industrial"){
         if(solicitado.getCarrera()==="contabilidad" || solicitado.getCarrera()==="industrial" )
         peso = 1;
         else
         peso=0;
         }
         return peso;
        }
//esta funcion debuelve el peso  cuando el estudiante cumple los requerimientos de la app
//con las caracteristicas de compatibilidad y las reglas
 function aplicarFunciones(usuarioSolicitante,usuarioSolicitado){
        
        var peso = todasLasFuncionesPreferencia(usuarioSolicitante,usuarioSolicitado);
        peso=peso*todasLasFuncionesRestriccion(usuarioSolicitante,usuarioSolicitado); 
       
    return peso;    
}
//esta funcion Retorna las preferencias por carrera y devuelve un peso 
function todasLasFuncionesPreferencia (usuarioSolicitante,usuarioSolicitado){
var peso=medicinaOdontologia(usuarioSolicitante,usuarioSolicitado)+sistemasElectronica(usuarioSolicitante,usuarioSolicitado)+
informaticaSistemas(usuarioSolicitante,usuarioSolicitado)+quimicaBiologia(usuarioSolicitante,usuarioSolicitado)+derechoPsicoligia(usuarioSolicitante,usuarioSolicitado)+arquitecturaCivil(usuarioSolicitante,usuarioSolicitado)+contabilidadIndustrial(usuarioSolicitante,usuarioSolicitado);
return peso;
}

function todasLasFuncionesRestriccion(usuarioSolicitante,usuarioSolicitado){
var peso=rangoEdad(usuarioSolicitante,usuarioSolicitado)*orientacionSexual(usuarioSolicitante,usuarioSolicitado);
peso=peso*controlarSemestre(usuarioSolicitante,usuarioSolicitado);
return peso;
}

function rangoEdad(usuarioSolicitante,usuarioSolicitado){
var peso =0;
if((usuarioSolicitante.minAge()<=usuarioSolicitado.getAge())&&(usuarioSolicitante.maxAge()>=usuarioSolicitado.getAge())){
    if((usuarioSolicitado.minAge()<=usuarioSolicitante.getAge())&&(usuarioSolicitado.maxAge()>= usuarioSolicitante.getAge()))
    peso=1;
}
return peso;
}
//funcion que controla la orientacion sexual
function orientacionSexual(usuarioSolicitante,usuarioSolicitado){
    var peso=0
    if(usuarioSolicitante.getSex()==="masculino" && usuarioSolicitado.getSex()==="Femenino"){        
        peso=1;}
        else
        if(usuarioSolicitante.getSex()==="femenino" && usuarioSolicitado.getSex()==="masculino"){
         peso=1;}
            else
            if(usuarioSolicitante.getSex()==="homosexual",usuarioSolicitado.getSex()==="homosexual"){
                peso=1;
            }

        return peso;
}
function controlarSemestre(solicitante,solicitado){
    //se esta asumiendo que existira un metodo getSemestre
    var peso=0;
    usario1=solicitante.getSemester();
    usuario2=solicitado.getSemester();
    if(usuario2>=6 && usuario1>=6){
        peso= 1;}
    else {if(usuario2<6 && usuario1<6)
        peso= 1;
    }
        return peso; 
}