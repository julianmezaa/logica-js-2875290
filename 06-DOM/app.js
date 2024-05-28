const pantalla = document.getElementById("titulo");
const miBtn = document.getElementById("btn");

//crear el evento
miBtn.addEventListener("click", function(){
    pantalla.style.color = "blueviolet"; 
    pantalla.style.fontFamily = "arial";
    pantalla.style.fontSize = "4em";
    pantalla.innerText = "ejecutando script 😊";
})


