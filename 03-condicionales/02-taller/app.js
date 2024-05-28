
//ejercicio 1
// Pedir la altura al usuario
/*var altura = prompt("Por favor, ingresa tu altura en centímetros:");

// Convertir la entrada a un número entero
altura = parseInt(altura);

// Comparar la altura y mostrar el mensaje correspondiente
if (altura <= 150) {
  alert("Persona de altura baja");
} else if (altura > 150 && altura <= 170) {
  alert("Persona de altura media");
} else {
  alert("Persona alta");
}*/


//ejercicio 2
// Pedir las notas al usuario
/*var notaMatematicas = prompt("Ingresa la nota de Matemáticas:");
var notaEspanol = prompt("Ingresa la nota de Español:");
var notaSociales = prompt("Ingresa la nota de Sociales:");

// Convertir las notas a números enteros
notaMatematicas = parseInt(notaMatematicas);
notaEspanol = parseInt(notaEspanol);
notaSociales = parseInt(notaSociales);

// Calcular el promedio
var promedio = (notaMatematicas + notaEspanol + notaSociales) / 3;

// Determinar el mensaje a mostrar según el promedio
if (promedio === 10) {
  alert("Excelente");
} else if (promedio > 7 && promedio <= 10) {
  alert("Bueno");
} else {
  alert("Insuficiente");
}*/


//ejercicio 3

// Pedir los datos al usuario
/*let estatura = prompt("¿cual es tu estatura?").toLowerCase();
let velocidad = prompt("¿cual es tu velocidad?").toLowerCase();
let edad = prompt("Ingresa tu edad:");

// Comprobar si cumple con los requisitos para ingresar al equipo
if (estatura >= 175 && velocidad >= 15 && edad >= 18){
  console.log("puedes ingresar al equipo profecional de mayores")
}else if(estatura >= 120 && velocidad >= 10 && edad >= 7){
  console.log("puedes ingresar al equipo profecional de mayores")
}else{
  console.log("no puedes ingresar al equipo")
}*/
  
//ejercicio 4
/*let totalEscri = (parseFloat(total)) *200;
let precioEscrit = 200;

let diez = (parseFloat(totalEscri)) *0.1 ;
let veinte = (parseFloat(totalEscri)) *0.2;
let cuarenta = (parseFloat(totalEscri)) *0.4;
let menos5 = (parseFloat(totalEscri)) - (parseFloat(diez));
let menos10 = (parseFloat(totalEscri)) - (parseFloat(veinte));
let mas10 = (parseFloat(totalEscri)) - (parseFloat(cuarenta));
if (total>=5 && total<10){
  console.log("el precio normalmente seria" +
    totalEscri + "pero con descuento queda en" + menos10)
}else if (total > 10){
  console.log("el precio total normalmente seria" +
    totalEscri + "pero con descuento queda en" + mas10)
}else{
  console.log("el precio total normalmente seria" + 
    totalEscri + "pero con descuento queda en" + menos5)
}*/



//ejercicio 5
// Mostrar el listado de frutas al usuario
/*alert("Listado de frutas disponibles:\n- Manzana\n- Plátano\n- Naranja\n- Fresa\n- Piña");

// Pedir a usuario que elija una fruta y la cantidad
var frutaElegida = prompt("Ingresa el nombre de la fruta que deseas comprar:").toLowerCase();
var cantidad = prompt("Ingresa la cantidad que deseas comprar:");

// Definir los valores por unidad de cada fruta
var valores = {
  "manzana": 1400,
  "plátano": 1000,
  "naranja": 1200,
  "fresa": 500,
  "piña": 2000,
};
// Calcular el valor total de los productos comprados
var valorPorUnidad = valores[frutaElegida];
var total = valorPorUnidad * cantidad;

// Mostrar el nombre de la fruta, valor por unidad y valor total
alert("Fruta: " + frutaElegida + "\nValor por unidad: $" + parseFloat(valorPorUnidad) + "\nValor total: $" + parseFloat(total));*/