const palabras = ["SENA", "Programación", "Fronted", "JavaScript"];
let palabraActual = palabras[Math.floor(Math.random() * palabras.length)];
document.getElementById("palabraObjetivo").textContent = palabraActual;

function verificarPalabra(){
    const escribeRapido = document.getElementById("escribeRapido");
    const resultadoRapido = document.getElementById("resultadoRapido");

    if(escribeRapido.value === palabraActual){
        resultadoRapido.textContent = "Muy bien";
        resultadoRapido.style.color = "green";

        palabraActual = palabras[Math.floor(Math.random() * palabras.length)];
        document.getElementById("palabraObjetivo").textContent = palabraActual;
        escribeRapido.value = "";
    } else {
        resultadoRapido.textContent = "Escribiendo...";
        resultadoRapido.style.color = "black";
    }
}