const imagenes = document.querySelectorAll("img");
const urlImagenes = [];

imagenes.forEach((_, index) => {
  const url = prompt(`Ingresa la url para la imagen ${index + 1}`);
  urlImagenes.push(url);
  
});

console.log(urlImagenes);

const contenedor = document.querySelectorAll(".rutas-img");  

urlImagenes.forEach((url, index) => {
  const nodoImagen = document.querySelector(`#imagen-${index + 1}`);
  nodoImagen.src = url;
  contenedor[index].setAttribute("href", url);
  contenedor[index].setAttribute("target", "_blank");
});

























// let nuevoP=document.createElement("p");

// nuevoP.innerText="Hola!";

// document.body.appendChild(nuevoP)