//funciones

//funcion que salude al usuario
/*let nombreUsuario = prompt('dime tu nombre')

//declaracion de la funcio
function saludar ( nombre ){
    return `Bienvenido ${nombre}`
}

//llamado de una funcion 
console.log( saludar ( nombreUsuario ) )*/

//hacer una fumcion que multiplique dos numeros. La funcion debe retonar solamente el resultado de la operacion. Llamar a la funcion "multiplicar"

/*let numero1 = prompt("insertar numero") 
let numero2 = prompt("inserta otro numero")

function multiplicar(numero1, numero2){
    let total = parseFloat(numero1) * parseFloat(numero2)
    return `el resultado es: ${total}`
}
console.log(multiplicar(numero1, numero2))*/

//crear una funcion que le diga cuanto debe ahorrar al mes segun sus ingresos sus ingresos

let ingresos = prompt("cuales son tus ingresos")

function calcularAhorro (numero1){
    let porcentaje = parseFloat(numero1) * parseFloat(0.1)
    return `tu porcentaje de ahorro es: ${porcentaje}`
}

console.log(calcularAhorro(ingresos))