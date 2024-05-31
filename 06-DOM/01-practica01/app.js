const miImput = document.getElementById('boton');
 
function cambiarValue(){
   console.log(miImput.value)
   miImput.value = 'lazamiento exitoso!'
}

miImput.addEventListener('click',cambiarValue);

//ejercicio del cuadro de colores
const cajaColor = document.getElementById('caja');
const botonesColores = document.querySelectorAll('.btrColores');

console.log(cajaColor)
console.log(botonesColores)

function pintarCaja (e){
    console.log(e.target.getAttribute("data-color"))
    let newColor = e.target.getAttribute("data-color");
    cajaColor.style.backgroundColor = newColor;
}
botonesColores[0].addEventListener("click",pintarCaja)
botonesColores[1].addEventListener("click",pintarCaja)
botonesColores[2].addEventListener("click",pintarCaja)
botonesColores[3].addEventListener("click",pintarCaja)


//cambiar imagen
const pantallaImg = document.querySelector("#miImagen");
const btnCambiar = document.querySelector("#btnCambiar");

let estado = 0;

function cambiarImagen(){
    if (estado == 0){
        pantallaImg.setAttribute("src", "imagen2.jpg")
        estado = 1;
    }else{
        pantallaImg.setAttribute("src", "imagen.png")
        estado = 0; 
    }
}

btnCambiar.addEventListener("click", cambiarImagen)