import Renderizar from "./Renderizar.js"

// Función para eliminar un animal del array y renderizar nuevamente
export function eliminarAnimal(animales,index) {
  animales.splice(index, 1)
  Renderizar(animales)
}

// Función para limpiar el formulario
export function limpiarFormulario() {
  document.getElementById("animal").selectedIndex = 0;
  document.getElementById("edad").selectedIndex = 0;
  document.getElementById("comentarios").value = ""
  document
    .getElementById("preview")
    .style.setProperty("--background-url", `url('../img/lion.svg')`)
}