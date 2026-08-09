function agregarElemento(){
    const hacerLista = document.getElementById("hacerLista");
    const listaDinamica = document.getElementById("listaDinamica");

    if (hacerLista.value.trim()===""){
        return;
    }
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = hacerLista.value;
    listaDinamica.appendChild(nuevoElemento);

    hacerLista.value = "";
}