//depende del color de semaforo le damos un mensaje al usuario si one un color diferente a rojo, amarillo o verde dira "no se que hacer".
let color = prompt ('¿color semaforo?').toLowerCase();

if(color === 'rojo'){
    console.log ('detente')
}else if( color === 'amarillo'){
    console.log('preparense')
}else if( color === 'verde'){
    console.log('arranque')
}else{
    console.log('no se que hacer')
}


let nombre = prompt('¿cual es tu nombre?').toLowerCase();
let edad = prompt('¿cual es tu edad?').toLowerCase();

if(nombre === 'mario' || nombre === 'carlos' & edad >= 18){
    console.log('ingresa a la zona VIP')
}else if(edad >= 18){
    console.log('puede entrar a la discoteca')
}else{
    console.log('no puede entrar a la discoteca')
}

