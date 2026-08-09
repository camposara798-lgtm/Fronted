let aciertos = 0;

function moverBoton(){
    const escurridizo = document.getElementById("escurridizo");
    const contadorAciertos = document.getElementById("contadorAciertos");

    aciertos = aciertos + 1;
    contadorAciertos.textContent = aciertos;

    const nuevaPosX = Math.floor(Math.random() * 380);
    const nuevaPosY = Math.floor(Math.random() * 170);

    escurridizo.style.left = nuevaPosX + "px";
    escurridizo.style.top = nuevaPosY + "px";
}