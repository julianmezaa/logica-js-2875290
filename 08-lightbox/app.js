const btnNumeros = document.querySelectorAll(".min");
const flotante = document.querySelector("#flotante");
const cuadroOpacidad = document.querySelector("#cuadro");
const equis = document.querySelector("#equis");
const btnSiguiente = document.querySelector("#sig");
const btnAnterior = document.querySelector("#ant");
const imgprincipal = document.querySelector("#imgprincipal");

//2.funciones
function lightbox (e){
    console.log(e.target.src)
    let currentImg = e.target.src;
    flotante.style.top = "0vh";
    flotante.style.transitionDuration = ".5s";
    imgprincipal.setAttribute("src",currentImg)
}
//3. eventos
function cerrar(){
    flotante.style.top = "-100vh";
    flotante.style.transitionDuration = ".5s";
}
let estado = 0;

function siguiente(){
    imgprincipal.src="img2.jpg"
    imgprincipal.setAttribute("src","img2.jpg")
}
function anterior(){
    imgprincipal.src="img1.jpg"
}

btnNumeros[0].addEventListener("click",lightbox);
btnNumeros[1].addEventListener("click",lightbox);
equis.addEventListener("click",cerrar);
cuadroOpacidad.addEventListener("click",cerrar);
btnSiguiente.addEventListener("click",siguiente);
btnAnterior.addEventListener("click",anterior);