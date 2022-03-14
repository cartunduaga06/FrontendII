/*document.getElementById() // retorna segun su id
document.getElementsByClassName() // retorna un array segun su clase 
document.getElementsByTagName()  // retorna array segun su etiqueta 
document.querySelector() // retorna un elemento segun su selector, puede buscar cualquier elemento
document.querySelectorAll() // retorna un array de elementos segun su selector */

let p3 = document.getElementById("p3");
let p1 = document.getElementById("p1");

p3.innerHTML=`<ul><li>1</li><li>2</li><li>3</li></ul>`;
p1.innerHTML=`<h1>Hola lo cambie</h1>`;