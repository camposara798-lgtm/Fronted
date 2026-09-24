let departamentos = JSON.parse(
    localStorage.getItem("departamentos") || "[]"
);

const formularioDepartamento =
    document.getElementById("formularioDepartamento");
const verDepartamentos =
    document.getElementById("verDepartamentos");
const contenedorTabla =
    document.getElementById("contenedorTabla");

formularioDepartamento.addEventListener("submit", function(evento) {
    evento.preventDefault();
    const departamento = {
        nombre: document.getElementById("nombre").value,
        responsable: document.getElementById("responsable").value,
        empleados: document.getElementById("empleados").value,
        ubicacion: document.getElementById("ubicacion").value,
        imagen: document.getElementById("imagen").value
    };

    departamentos.push(departamento);
    localStorage.setItem(
        "departamentos",
        JSON.stringify(departamentos)
    );
    formularioDepartamento.reset();
    alert("Departamento agregado correctamente");
});

verDepartamentos.addEventListener("click", function() {
    const departamentosGuardados = JSON.parse(
        localStorage.getItem("departamentos") || "[]"
    );
    contenedorTabla.innerHTML = "";
    const tabla = document.createElement("table");
    tabla.border = "1";
    const encabezado = document.createElement("tr");

    encabezado.innerHTML = `
        <th>Imagen</th>
        <th>Departamento</th>
        <th>Responsable</th>
        <th>Empleados</th>
        <th>Ubicación</th>
    `;

    tabla.appendChild(encabezado);
    departamentosGuardados.forEach(function(departamento) {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>
                <img src="${departamento.imagen}" alt="Imagen de ${departamento.nombre}"width="100">
            </td>
            <td>${departamento.nombre}</td>
            <td>${departamento.responsable}</td>
            <td>${departamento.empleados}</td>
            <td>${departamento.ubicacion}</td>
        `;
        tabla.appendChild(fila);
    });
    contenedorTabla.appendChild(tabla);
});