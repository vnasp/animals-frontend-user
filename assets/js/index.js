import { agregarAnimal } from "./Crear.js";
import { actualizarPreview } from "./Previsualizar.js";

document.addEventListener("DOMContentLoaded", () => {
  // Para obtener la especie y previsualizar
  const selectEspecie = document.getElementById("animal");
  selectEspecie.addEventListener("change", actualizarPreview);

  // Para agregar el animal
  const btnAgregar = document.getElementById("registrar");
  btnAgregar.addEventListener("click", agregarAnimal);

  // Para dispositivos móviles
  const btnCuadernillo = document.getElementById("btnCuadernillo");
  btnCuadernillo.addEventListener("click", () => {
    const cuadernillo = document.getElementById("cuadernillo");
    cuadernillo.classList.add("d-block", "position-absolute", "top-0", "z-10");
  });
  const btnCerrarCuadernillo = document.getElementById("cerrar");
  btnCerrarCuadernillo.addEventListener("click", () => {
    const cuadernillo = document.getElementById("cuadernillo");
    cuadernillo.classList.remove("d-block");
  });
});
