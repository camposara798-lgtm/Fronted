
let numeroSecreto = Math.floor(Math.random()* 10) + 1;
function verificarNumero() {
    const adivinarNumero = document.getElementById("adivinarNumero");
    const resultadoNumero = document.getElementById("resultadoNumero");
    const numero = Number(adivinarNumero.value);

    if (numero === numeroSecreto) {
        resultadoNumero.textContent = "Felicidades, adivinaste el número " + numeroSecreto;
       resultadoNumero.style.color = "green";
    } else {
        resultadoNumero.textContent = "Fallaste, no adivinaste el numero" + numeroSecreto + ". Intenta de nuevo";
        resultadoNumero.style.color = "red"
    }

    numeroSecreto = Math.floor(Math.random()* 10)+1;
}