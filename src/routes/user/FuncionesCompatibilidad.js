
var semestre = require('./ControlSemestre');

var User = require('../../models/user');

var edad = require('../ControlEdad');
function Medicina_Odontologia(Solicitante,Solicitado) {
     peso;
     if(Solicitante.getCarrera()==Medicina || Solicitante.getCarrera()==Odontologia){
         if(Solicitado.getCarrera()==Medicina || Solicitado.getCarrera()==Odontologia )
         peso = 2;      
         //semestre.Controlarsemestre(Solicitante,Solicitado);
         else
         peso=0;        
     }
     
}
function Sistemas_Electronica(Solicitante,Solicitado){
    peso;
    DistinguirCarrera=ControlCarrera(SolicitanteCarrera,SolicitadoCarrera);
     if(Solicitante.getCarrera()==Sistemas || Solicitante.getCarrera()==Electronica){
         if(Solicitado.getCarrera()==Sistemas || Solicitado.getCarrera()==Electronica )
         peso = 2;
         else
         peso=0;
         }
         return peso;
        }
function Informatica_Sistemas(Solicitante,Solicitado){
    peso;
     if(Solicitante.getCarrera()==Informatica || Solicitante.getCarrera()==Sistemas){
         if(Solicitado.getCarrera()==Informatica || Solicitado.getCarrera()==Sistemas )
         peso = 2;
         else
         peso=0;
         }
         return peso;
        }
function Quimica_Biologia(Solicitante,Solicitado){
    peso;
     if(Solicitante.getCarrera()==Quimica || Solicitante.getCarrera()==Biologia){
         if(Solicitado.getCarrera()==Quimica || Solicitado.getCarrera()==Biologia )
         peso = 2;
         else
         peso=0;
         }
         return peso;
        }
function Derecho_Psicoligia(Solicitante,Solicitado){
    peso=0;
     if(Solicitante.getCarrera()==Derecho || Solicitante.getCarrera()==Psicologia){
         if(Solicitado.getCarrera()==Derecho || Solicitado.getCarrera()==Psicologia )
         peso = 2;
         }
         return peso;
        }
function Arquitectura_Civil(Solicitante,Solicitado){
    peso;
     if(Solicitante.getCarrera()==Arquitectura || Solicitante.getCarrera()==Civil){
         if(Solicitado.getCarrera()==Arquitectura || Solicitado.getCarrera()==Civil )
         peso = 2;
         else
         peso=0;
         }
         return peso;
        }
function Contabilidad_Industrial(Solicitante,Solicitado){
    peso;
     if(Solicitante.getCarrera()==Contabilidad || Solicitante.getCarrera()==Industrial){
         if(Solicitado.getCarrera()==Contabilidad || Solicitado.getCarrera()==Industrial )
         peso = 2;
         else
         peso=0;


         }
         return peso;
        }
//esta funcion debuelve el peso que cuando el estudiante cumple los requerimientos de la app
//con las caracteristicas de compatibilidad y las reglas
 function CompatibilidadPesoMayor(Solicitante,Solicitado){
        if(ControlarSexo(Solicitante,Solicitado)){
        peso = edad.CotrolarEdad()+semestre.ControlarSemestre()+Medicina_Odontologia()+Sistemas_Electronica()+
        Informatica_Sistemas()+Quimica_Biologia()+Derecho_Psicoligia(),Arquitectura_Civil()+Contabilidad_Industrial();
        }
        else
        peso=0;
        
    
    return peso;
    
}