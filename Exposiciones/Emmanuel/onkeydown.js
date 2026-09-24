function capturarTecla(){
    let campoProfesion= document.getElementById("profesion");
    let contenido = campoProfesion.value;
    document.getElementById("resultado"). textContent=contenido;
    console.log("contenidoCapturado:");
}