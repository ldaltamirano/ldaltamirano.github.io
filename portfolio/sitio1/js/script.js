let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        document.getElementById("hamburguer").classList ="nav-responsive";
        document.getElementById("close").classList ="nav-responsive close hidden";
        document.getElementsByTagName("header")[0].classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        document.getElementById("hamburguer").classList ="nav-responsive hidden";
        document.getElementById("close").classList ="nav-responsive close";
        document.getElementsByTagName("header")[0].classList ="close";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
