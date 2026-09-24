let animales = JSON.parse(
    localStorage.getItem("animales") || "[]"
);

const formularioAnimal =
    document.getElementById("formularioAnimal");
const mostrarAnimales =
    document.getElementById("mostrarAnimales");
const contenedorAnimales =
    document.getElementById("contenedorAnimales");

formularioAnimal.addEventListener("submit", function(evento) {
    evento.preventDefault();
    const animal = {
        nombre: document.getElementById("nombre").value,
        especie: document.getElementById("especie").value,
        edad: document.getElementById("edad").value,
        habitat: document.getElementById("habitat").value,
        imagen: document.getElementById("imagen").value
    };

    animales.push(animal);
    localStorage.setItem(
        "animales",
        JSON.stringify(animales)
    );
    formularioAnimal.reset();
    alert("Animal agregado correctamente");
});

mostrarAnimales.addEventListener("click", function() {
    const animalesGuardados = JSON.parse(
        localStorage.getItem("animales") || "[]"
    );

    contenedorAnimales.innerHTML = "";
    animalesGuardados.forEach(function(animal) {
        const tarjeta = document.createElement("div");

        tarjeta.innerHTML = `
            <hr>
            <img src="${animal.imagen}" alt="Imagen de ${animal.nombre}" width="200">
            <h2>${animal.nombre}</h2>
            <p>Especie: ${animal.especie}</p>
            <p>Edad: ${animal.edad}</p>
            <p>Hábitat: ${animal.habitat}</p>
        `;
        contenedorAnimales.appendChild(tarjeta);
    });
});