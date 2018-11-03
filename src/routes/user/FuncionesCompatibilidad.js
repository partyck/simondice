
var semestre = require('./ControlSemestre');

var User = require('../../models/user');

var edad = require('../ControlEdad');
function medicinaOdontologia(solicitante,solicitado) {
     peso;
     if(solicitante.getCarrera()==="Medicina" || solicitante.getCarrera()==="Odontologia"){
         if(solicitado.getCarrera()==="Medicina" || solicitado.getCarrera()==="Odontologia" )
         peso = 2;      
         //semestre.Controlarsemestre(Solicitante,Solicitado);
         else
         peso=0;        
     }
     
}
function sistemasElectronica(solicitante,solicitado){
    peso;
    
     if(solicitante.getCarrera()==="Sistemas" || solicitante.getCarrera()==="Electronica"){
         if(solicitado.getCarrera()==="Sistemas" || solicitado.getCarrera()==="Electronica" )
         peso = 2;
         else
         peso=0;
         }
         return peso;
        }
function informaticaSistemas(solicitante,solicitado){
    peso;
     if(solicitante.getCarrera()==="Informatica" || solicitante.getCarrera()==="Sistemas"){
         if(solicitado.getCarrera()==="Informatica" || solicitado.getCarrera()==="Sistemas" )
         peso = 2;
         else
         peso=0;
         }
         return peso;
        }
function quimicaBiologia(solicitante,solicitado){
    peso;
     if(solicitante.getCarrera()==="Quimica" || solicitante.getCarrera()==="Biologia"){
         if(solicitado.getCarrera()==="Quimica" || solicitado.getCarrera()==="Biologia" )
         peso = 2;
         else
         peso=0;
         }
         return peso;
        }
function derechoPsicoligia(solicitante,solicitado){
    peso=0;
     if(solicitante.getCarrera()==="Derecho" || solicitante.getCarrera()==="Psicologia"){
         if(solicitado.getCarrera()==="Derecho" || solicitado.getCarrera()==="Psicologia" )
         peso = 2;
         }
         return peso;
        }
function arquitecturaCivil(solicitante,solicitado){
    peso;
     if(solicitante.getCarrera()==="Arquitectura" || solicitante.getCarrera()==="Civil"){
         if(solicitado.getCarrera()==="Arquitectura" || solicitado.getCarrera()==="Civil" )
         peso = 2;
         else
         peso=0;
         }
         return peso;
        }
function contabilidadIndustrial(solicitante,solicitado){
    peso;
     if(solicitante.getCarrera()==="Contabilidad" || solicitante.getCarrera()==="Industrial"){
         if(solicitado.getCarrera()==="Contabilidad" || solicitado.getCarrera()==="Industrial" )
         peso = 2;
         else
         peso=0;
         }
         return peso;
        }
//esta funcion debuelve el peso que cuando el estudiante cumple los requerimientos de la app
//con las caracteristicas de compatibilidad y las reglas
 function aplicarFunciones(usuarioSolicitante,usuarioSolicitado){
        if(orientacionSexual(usuarioSolicitante,usuarioSolicitado)){
        peso = edad.CotrolarEdad()+semestre.ControlarSemestre()+Medicina_Odontologia()+Sistemas_Electronica()+
        Informatica_Sistemas()+Quimica_Biologia()+Derecho_Psicoligia(),Arquitectura_Civil()+Contabilidad_Industrial();
        }
        else
        peso=0;     
    return peso;
    
}