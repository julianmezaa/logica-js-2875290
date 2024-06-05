var img = document.getElementsByTagName("img")[0];
var btn = document.getElementsByClassName("btn");
var txt1 = document.getElementsByTagName("h1")[0];
var txt2 = document.getElementsByTagName("p")[0];

function cambio1 (){
    img.setAttribute("src","img1.jpg");
    txt1.innerText = "imagen 1";
    txt2.innerText =  "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, "
}
function cambio2 (){
    img.setAttribute("src","img2.jpg");
    txt1.innerText = "imagen 2";
    txt2.innerText =  "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, "
}
function cambio3 (){
    img.setAttribute("src","img3.jpg");
    txt1.innerText = "imagen 3";
    txt2.innerText =  "Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, "
}

btn[0].addEventListener("click", cambio1);
btn[1].addEventListener("click", cambio2);
btn[2].addEventListener("click", cambio3);