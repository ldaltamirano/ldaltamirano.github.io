let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("mvc");
        habilidades[2].classList.add("javascript");
        habilidades[3].classList.add("jquery");
        habilidades[4].classList.add("bootstrap");
        habilidades[5].classList.add("net");
        habilidades[6].classList.add("react");
        habilidades[7].classList.add("sql");
        habilidades[8].classList.add("espanol");
        habilidades[9].classList.add("lectura");
        habilidades[10].classList.add("escritura");
        habilidades[11].classList.add("hablar");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 