let paises = JSON.parse(
    localStorage.getItem("paises") || "[]"
);

const formularioPais = document.getElementById("formularioPais");
const verPaises = document.getElementById("verPaises");
const contenedorPaises = document.getElementById("contenedorPaises");

formularioPais.addEventListener("submit", function(evento) {
    evento.preventDefault();
    const pais = {
        nombre: document.getElementById("nombre").value,
        capital: document.getElementById("capital").value,
        continente: document.getElementById("continente").value,
        idioma: document.getElementById("idioma").value,
        bandera: document.getElementById("bandera").value
    };

    paises.push(pais);
    localStorage.setItem(
        "paises",
        JSON.stringify(paises)
    );
    formularioPais.reset();
    alert("País agregado correctamente");
});

verPaises.addEventListener("click", function() {
    const paisesGuardados = JSON.parse(
        localStorage.getItem("paises") || "[]"
    );
    contenedorPaises.innerHTML = "";
    paisesGuardados.forEach(function(pais) {
        const tarjeta = document.createElement("div");
        tarjeta.innerHTML = `
            <hr>
            <img 
                src="${pais.bandera}" 
                alt="Bandera de ${pais.nombre}" 
                width="200"
            >
            <h2>${pais.nombre}</h2>
            <p>Capital: ${pais.capital}</p>
            <p>Continente: ${pais.continente}</p>
            <p>Idioma: ${pais.idioma}</p>
        `;
        contenedorPaises.appendChild(tarjeta);
    });
});