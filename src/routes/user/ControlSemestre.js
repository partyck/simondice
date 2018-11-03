function controlarsemestre(Solicitante,Solicitado){
    //se esta asumiendo que existira un metodo getSemestre
    usario1=Solicitante.getSemestre();
    usuario2=Solicitado.getSemestre();
    if(usuario2>=6)
        return 2;
    else if(usuario2<6 && usuario1<6)
        return 1;
        else 
        return 0;
}