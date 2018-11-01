//Esta fucion controla la edad de 6 semestre arriba
function ControlarEdad(Solicitante,Solicitado){
    if(Solicitante.edad>=21 && Solicitante.edad<=27){
        if(Solicitado.edad>=21 && Solicitado.edad<=27)
        return 2;
        else
        return 0;
    }
    else{
        if(Solicitante.edad>=18 && Solicitante.edad<=20){
            if(Solicitado.edad>=18 && Solicitado.edad<=20)
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
function ControlarSexo(Solicitante,Solicitado){
    
    if(Solicitante.sexo==masculino && Solicitado==Femenino){        
        return true;}
        else
        if(Solicitante.sexo==femenino && Solicitado==masculino){
         return true;}
            else
        return false;    
}