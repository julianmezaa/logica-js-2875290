 let materias = [ "matematicas", "sociales", "español","fisica"]
console.log( `materia 1: ${materias[2]}`)

console.log( materias[4] );
materias[4] = "deporte";
console.log(materias)
console.log(`El array materias tiene ${materias.length} elementos`)


console.log( Boolean( materias.length >= 6 ) ); 
//quiero añadir un elemento al final del array con length
materias[materias.length] = 'pintura';
materias[materias.length] = 'ciencias';

console.log(materias)

// ciclos y arrays

// primera practica: imprimir en una lista numerada todos los elementos de un array 'peliculas' con ayuda del ciclo for 

let peliculas = ['Harry Potter', 'Back to the future', 'Batman', 'Los 4 fantasticos', 'Rapidos y furiosos', 'Alice', 'Chappi', 'Avatar'];
// inicialización, condición, incremento
for(let i = 0; i < peliculas.length; i++){
    console.log( `${i+1}. ${peliculas[i]}`)
}

// realizar un programa que le pida artistas o bandas musicales al usuario con ayuda del ciclo while, cuando el usuario escriba "salir" se debe imrprimir la lista de artistas que el usuario ingreso. Cada artista añadadido se debe guardar en array

let artistas = [];
let inputUsuario = prompt('dime un artista o "salir" para terminar')

while(inputUsuario != 'salir'){
    artistas.push(inputUsuario)
    inputUsuario = prompt('dime un artista o "salir" para terminar')
}
for(let i = 0; i < artistas.length; i++){
    console.log( `${i+1}. ${artistas[i]}`)
}