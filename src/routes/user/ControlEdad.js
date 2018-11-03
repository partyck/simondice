//Esta fucion controla la edad de 6 semestre arriba
function controlarEdad(solicitante,solicitado){
    if(solicitante.edad>=21 && solicitante.edad<=27){
        if(solicitado.edad>=21 && solicitado.edad<=27)
        return 2;
        else
        return 0;
    }
    else{
        if(solicitante.edad>=18 && solicitante.edad<=20){
            if(solicitado.edad>=18 && solicitado.edad<=20)
            return 2;
            else
            return 0;
        }
        else{
            return 0;
        }
    }
}
//Esta funcion controla la edad de primer  semestre hasta quinto
function orientacionSexual(solicitante,solicitado){
    
    if(solicitante.sexo==="masculino" && solicitado.sexo==="Femenino"){        
        return true;}
        else
        if(solicitante.sexo==="femenino" && solicitado.sexo==="masculino"){
         return true;}
            else
            if(solicitante.sexo==="otro" && solicitado.sexo==="otro"){
            return true;}
            else
                 return false;    
}
