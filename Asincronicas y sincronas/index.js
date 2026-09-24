function consultarUsuario() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Usuario encontrado");
        }, 3000);
    });
}

async function mostrarUsuario() {
    console.log("Consultando usuario...");

    const resultado = await consultarUsuario();

    console.log(resultado);
    console.log("Proceso terminado");
}

mostrarUsuario();