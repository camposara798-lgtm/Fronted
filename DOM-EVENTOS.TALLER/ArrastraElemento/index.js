let arrastrando = false;

const cajaArrastable = document.getElementById("cajaArrastable");

//Estilos aplicados desde js
cajaArrastable.style.width = "80px";
cajaArrastable.style.height = "80px";
cajaArrastable.style.backgroundColor = "aquamarine";
cajaArrastable.style.position = "absolute";
cajaArrastable.style.top = "100px";
cajaArrastable.style.left = "100px";
cajaArrastable.style.cursor = "grab";

function sujetarCaja(){
    arrastrando = true;
    cajaArrastable.style.cursor = "grabbing";
}
function moverCaja(evento){
    if(arrastrando === true){
        const nuevaX = cajaArrastable.offsetLeft + evento.movementX;
        const nuevaY = cajaArrastable.offsetTop + evento.movementY;

        cajaArrastable.style.left = nuevaX + "px";
        cajaArrastable.style.top = nuevaY + "px";
    }
}
function soltarCaja(){
    arrastrando = false;
    cajaArrastable.style.cursor = "grab";
}