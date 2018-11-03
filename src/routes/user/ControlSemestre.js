function controlarSemestre(solicitante,solicitado){
    //se esta asumiendo que existira un metodo getSemestre
    usario1=solicitante.getSemestre();
    usuario2=solicitado.getSemestre();
    if(usuario2>=6)
        return 2;
    else if(usuario2<6 && usuario1<6)
        return 1;
        else 
        return 0;
}