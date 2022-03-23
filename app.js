const funcionesDeTareas = require("./funcionesDeTareas");

let argumentoUsuario = process.argv[2];
let segundoArgumentoUsuario = process.argv[3];

switch (argumentoUsuario) {
  case "listar":
    funcionesDeTareas.listar();
    break;
  case "crear":
    let nuevaTarea = {
      titulo: segundoArgumentoUsuario,
      estado: "pendiente",
    };
    funcionesDeTareas.guardarTarea(nuevaTarea);
    break;
  case "filtrar":
    if (segundoArgumentoUsuario == null) {
      console.log(
        "Por favor ingresa una tarea después del comando 'node app.js filtrar'"
      );
      break;
    }
    let arrayFiltrado = funcionesDeTareas.filtrarPorEstado(
      segundoArgumentoUsuario
    );
    if (arrayFiltrado.length > 0) {
      arrayFiltrado.forEach((tarea, i) =>
        console.log(i + 1 + ") " + tarea.titulo + " - Estado: " + tarea.estado)
      );
    } else {
      console.log(
        "No hay tareas con el estado '" + segundoArgumentoUsuario + "'"
      );
    }

    break;
  case undefined:
    console.log("​Atención - Tienes que pasar una acción");
    break;
  default:
    console.log(" ​No entiendo qué quieres hacer");
}
