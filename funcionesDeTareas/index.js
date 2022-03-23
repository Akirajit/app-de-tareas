const fs = require("fs");

function listar() {
  let jsonLeido = fs.readFileSync(__dirname + "/../tareas.json", "utf-8");
  let arrayDeTareas = JSON.parse(jsonLeido);
  arrayDeTareas.forEach((element, i) => {
    console.log("Tarea " + (i + 1) + ": " + element.titulo);
  });
}

function leerJSON() {
  let jsonLeido = fs.readFileSync(__dirname + "/../tareas.json", "utf-8");
  let arrayDeTareas = JSON.parse(jsonLeido);
  return arrayDeTareas;
}

function escribirJSON(arrayTareas) {
  let arrayConvertido = JSON.stringify(arrayTareas);
  fs.writeFileSync(__dirname + "/../tareas.json", arrayConvertido, "utf-8");
}

function guardarTarea(objetoTarea) {
  let nuevoArray = leerJSON();
  nuevoArray.push(objetoTarea);
  escribirJSON(nuevoArray);
}

function filtrarPorEstado(unEstado) {
  let tareasObtenidas = leerJSON();
  let arrayFiltrado = tareasObtenidas.filter(
    (tarea) => tarea.estado == unEstado
  );
  return arrayFiltrado;
}

module.exports = {
  listar,
  leerJSON,
  escribirJSON,
  guardarTarea,
  filtrarPorEstado,
};
