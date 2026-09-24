let clics = 0;

function contarClics(){
    const contadorClics = document.getElementById("contadorClics");
    const boton = document.getElementById("clics");

    clics = clics + 1;
    contadorClics.textContent= clics;

    if(clics===10){
        boton.style.backgroundColor = "green";
        contadorClics.style.color = "green";
    }
}