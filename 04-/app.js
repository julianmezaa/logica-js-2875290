let nombre = prompt('¿cual es tu nombre?').toLowerCase();
let edad = prompt('¿cual es tu edad?').toLowerCase();

if(nombre === 'mario' || nombre === 'carlos' & edad >= 18){
    console.log('ingresa a la zona VIP')
}else if(edad >= 18){
    console.log('puede entrar a la discoteca')
}else{
    console.log('no puede entrar a la discoteca')
}
