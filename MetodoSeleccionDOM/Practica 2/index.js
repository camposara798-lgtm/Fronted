// 1. Encontrar un elemento específico por ID
const titulo = document.getElementById("titulo");
console.log("Elemento específico:");
console.log(titulo);

// 2. Encontrar varios elementos por clase
const videojuegos = document.getElementsByClassName("videojuego");
console.log("Videojuegos encontrados:");
console.log(videojuegos);

// 3. Encontrar elementos por etiqueta
const botones = document.getElementsByTagName("button");
console.log("Botones encontrados:");
console.log(botones);

// 4. Utilizar querySelector para encontrar un elemento
const primerVideojuego = document.querySelector(".videojuego");
console.log("Primer videojuego:");
console.log(primerVideojuego);

// 5. Utilizar querySelectorAll para encontrar varios elementos
const generos = document.querySelectorAll(".genero");
console.log("Géneros encontrados:");
console.log(generos);

// 6. Selección más específica
const videojuegosDestacados = document.querySelectorAll(
    "#videojuegos .videojuego.destacado"
);
console.log("Videojuegos destacados:");
console.log(videojuegosDestacados);