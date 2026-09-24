// EXPERIMENTO 1
// Seleccionar un elemento especifico

// Buscamos el elemento que tiene el ID "tituloPrincipal"
const titulo = document.getElementById("tituloPrincipal");
console.log("Experimento 1:");
console.log(titulo);

// EXPERIMENTO 2
// Seleccionar varios elementos que compartan una clase

// Buscamos todos los elementos que tengan la clase "texto"
const textos = document.getElementsByClassName("texto");
console.log("Experimento 2:");
console.log(textos);

// EXPERIMENTO 3
// Seleccionar todos los elementos de una etiqueta

// Buscamos todos los elementos <p>
const parrafos = document.getElementsByTagName("p");
console.log("Experimento 3:");
console.log(parrafos);

// EXPERIMENTO 4
// Seleccionar elementos utilizando diferentes
// tipos de selectores

// Selector por ID
const botonId = document.querySelector("#botonEspecial");
// Selector por clase
const caja = document.querySelector(".caja");
// Selector por etiqueta
const imagen = document.querySelector("img");
// Selector por atributo
const imagenConAlt = document.querySelector('img[alt="Imagen 1"]');
console.log("Experimento 4:");
console.log("Por ID:", botonId);
console.log("Por clase:", caja);
console.log("Por etiqueta:", imagen);
console.log("Por atributo:", imagenConAlt);

// EXPERIMENTO 5
// Seleccionar un elemento que cumpla
// mas de una condicion

// Buscamos un elemento que tenga las clases
// "boton" Y "especial"
const botonVariasClases = document.querySelector(".boton.especial");
console.log("Experimento 5:");
console.log(botonVariasClases);
